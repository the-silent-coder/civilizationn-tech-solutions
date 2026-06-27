import type { ReactNode } from "react";

interface SectionHeadingProps {
  badge?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  center?: boolean;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  center = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`
        mb-16
        ${center ? "text-center" : ""}
      `}
    >
      {badge && (
        <div
          className="
            inline-flex
            items-center
            rounded-full
            border
            border-primary/20
            bg-primary/10
            px-4
            py-2
            text-xs
            font-semibold
            uppercase
            tracking-[0.2em]
            text-primary
            mb-6
          "
        >
          {badge}
        </div>
      )}

      <h2
        className="
          section-title
          max-w-4xl
          leading-tight
        "
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className="
            section-subtitle
            mt-6
            max-w-3xl
            leading-8
          "
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}