"use client";

import { FormEvent, useState } from "react";

type FieldErrors = {
  name?: string;
  email?: string;
  message?: string;
  form?: string;
};

type FormState = {
  name: string;
  email: string;
  message: string;
  company: string;
};

const initialFormState: FormState = {
  name: "",
  email: "",
  message: "",
  company: "",
};

export default function ContactSection() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (
    field: keyof FormState,
    value: string
  ) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));

    setErrors((current) => ({
      ...current,
      [field]: undefined,
      form: undefined,
    }));
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrors({});
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = (await response.json()) as {
        error?: string;
        errors?: FieldErrors;
        message?: string;
      };

      if (!response.ok) {
        setErrors(result.errors ?? {
          form: result.error ?? "Unable to submit the form.",
        });
        return;
      }

      setForm(initialFormState);
      setStatusMessage(
        result.message ??
          "Thanks. Your message has been submitted successfully."
      );
    } catch {
      setErrors({
        form: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-background py-24 px-6 text-foreground"
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Let&apos;s Build Something Amazing
          </h2>

          <p className="mt-6 text-gray-600 dark:text-gray-400">
            Have a ServiceNow, software, AI, or app idea in mind? Send us a short note and we will get back to you.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-6"
          noValidate
        >
          <div className="hidden" aria-hidden="true">
            <label htmlFor="company">Company</label>
            <input
              id="company"
              name="company"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={form.company}
              onChange={(event) =>
                updateField("company", event.target.value)
              }
            />
          </div>

          <div>
            <label
              htmlFor="name"
              className="block mb-2 font-medium"
            >
              Full Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              value={form.name}
              onChange={(event) =>
                updateField("name", event.target.value)
              }
              aria-invalid={Boolean(errors.name)}
              aria-describedby={
                errors.name ? "name-error" : undefined
              }
              className="
                w-full
                rounded-xl
                border
                border-foreground/20
                bg-background
                px-4
                py-3
                mt-1
                focus:outline-none
                focus:ring-2
                focus:ring-cyan-400
              "
              placeholder="Enter your full name"
            />

            {errors.name && (
              <p
                id="name-error"
                className="mt-2 text-sm text-red-500"
              >
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 font-medium"
            >
              Email Address
            </label>

            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={(event) =>
                updateField("email", event.target.value)
              }
              aria-invalid={Boolean(errors.email)}
              aria-describedby={
                errors.email ? "email-error" : undefined
              }
              className="
                w-full
                rounded-xl
                border
                border-foreground/20
                bg-background
                px-4
                py-3
                mt-1
                focus:outline-none
                focus:ring-2
                focus:ring-cyan-400
              "
              placeholder="example@gmail.com"
            />

            {errors.email && (
              <p
                id="email-error"
                className="mt-2 text-sm text-red-500"
              >
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="message"
              className="block mb-2 font-medium"
            >
              Your Message
            </label>

            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={(event) =>
                updateField("message", event.target.value)
              }
              aria-invalid={Boolean(errors.message)}
              aria-describedby={
                errors.message ? "message-error" : undefined
              }
              className="
                w-full
                rounded-xl
                border
                border-foreground/20
                bg-background
                px-4
                py-3
                mt-1
                focus:outline-none
                focus:ring-2
                focus:ring-cyan-400
              "
              placeholder="Tell us about your project..."
            />

            {errors.message && (
              <p
                id="message-error"
                className="mt-2 text-sm text-red-500"
              >
                {errors.message}
              </p>
            )}
          </div>

          {errors.form && (
            <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-500">
              {errors.form}
            </p>
          )}

          {statusMessage && (
            <p className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-500">
              {statusMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="
              mt-4
              rounded-xl
              bg-cyan-500
              px-8
              py-4
              font-semibold
              text-black
              transition-all
              duration-300
              hover:scale-105
              disabled:cursor-not-allowed
              disabled:opacity-60
              disabled:hover:scale-100
            "
          >
            {isSubmitting ? "Submitting..." : "Contact Us"}
          </button>
        </form>
      </div>
    </section>
  );
}
