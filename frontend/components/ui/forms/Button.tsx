import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
}

const variants = {
  primary:
    `
      gradient-brand
      text-slate-900
      shadow-glow
      hover:-translate-y-1
      hover:scale-[1.02]
    `,

  secondary:
    `
      glass
      text-foreground
      border-border
      hover:bg-primary/10
    `,

  outline:
    `
      border
      border-primary
      text-primary
      hover:bg-primary/10
    `,

  ghost:
    `
      text-foreground
      hover:bg-primary/10
    `,
};

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
}: ButtonProps) {

  const classes = `
    inline-flex
    items-center
    justify-center

    rounded-full

    px-6

    py-3

    font-semibold

    transition-all

    duration-300

    ${variants[variant]}

    ${className}
  `;

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      type="button"
    >
      {children}
    </button>
  );
}