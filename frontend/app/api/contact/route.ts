import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;

type ContactBody = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  company?: unknown;
};

const requestCounts = new Map<
  string,
  {
    count: number;
    resetAt: number;
  }
>();

function getClientKey(request: Request) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

function isRateLimited(key: string) {
  const now = Date.now();
  const current = requestCounts.get(key);

  if (!current || current.resetAt <= now) {
    requestCounts.set(key, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });

    return false;
  }

  current.count += 1;

  return current.count > MAX_REQUESTS_PER_WINDOW;
}

function getString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function validateContactBody(body: ContactBody) {
  const name = getString(body.name);
  const email = getString(body.email).toLowerCase();
  const message = getString(body.message);
  const company = getString(body.company);
  const errors: Record<string, string> = {};

  if (company) {
    errors.form = "Unable to submit this request.";
  }

  if (name.length < 2) {
    errors.name = "Please enter your full name.";
  } else if (name.length > 120) {
    errors.name = "Name must be 120 characters or fewer.";
  }

  if (!EMAIL_PATTERN.test(email)) {
    errors.email = "Please enter a valid email address.";
  } else if (email.length > 254) {
    errors.email = "Email must be 254 characters or fewer.";
  }

  if (message.length < 10) {
    errors.message = "Message must be at least 10 characters.";
  } else if (message.length > 2000) {
    errors.message = "Message must be 2000 characters or fewer.";
  }

  return {
    data: {
      name,
      email,
      message,
    },
    errors,
  };
}

export async function POST(request: Request) {
  const clientKey = getClientKey(request);

  if (isRateLimited(clientKey)) {
    return NextResponse.json(
      {
        error: "Too many requests. Please try again shortly.",
      },
      {
        status: 429,
      }
    );
  }

  try {
    const body = (await request.json()) as ContactBody;
    const { data, errors } = validateContactBody(body);

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          error: "Please check the highlighted fields.",
          errors,
        },
        {
          status: 400,
        }
      );
    }

    const contact = await prisma.contactRequest.create({
      data,
      select: {
        id: true,
        createdAt: true,
      },
    });

    return NextResponse.json(
      {
        message: "Contact request submitted successfully.",
        contact,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Failed to create contact request.",
      },
      {
        status: 500,
      }
    );
  }
}
