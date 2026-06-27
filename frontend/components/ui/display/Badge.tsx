import type { ReactNode } from "react";

type BadgeVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "success";

type BadgeSize =
  | "sm"
  | "md"
  | "lg";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
}

const variantMap = {
  primary:
    `
      bg-primary/10
      text-primary
      border
      border-primary/20
    `,

  secondary:
    `
      surface
      text-foreground
      border
      border-border
    `,

  outline:
    `
      border
      border-primary
      text-primary
      bg-transparent
    `,

  success:
    `
      bg-emerald-500/10
      text-emerald-400
      border
      border-emerald-500/20
    `,
};

const sizeMap = {
  sm: "px-3 py-1 text-xs",
  md: "px-4 py-1.5 text-sm",
  lg: "px-5 py-2 text-base",
};

export default function Badge({
  children,
  variant = "primary",
  size = "md",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`
        inline-flex
        items-center
        justify-center
        rounded-full
        font-medium
        tracking-wide
        whitespace-nowrap

        ${variantMap[variant]}
        ${sizeMap[size]}

        ${className}
      `}
    >
      {children}
    </span>
  );
}