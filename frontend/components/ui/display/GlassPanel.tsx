import type { ReactNode } from "react";

type GlassPadding = "sm" | "md" | "lg";

type GlassShadow = "none" | "md" | "glow";

type GlassRadius = "md" | "lg" | "xl";

interface GlassPanelProps {
  children: ReactNode;
  padding?: GlassPadding;
  shadow?: GlassShadow;
  radius?: GlassRadius;
  hover?: boolean;
  className?: string;
}

const paddingMap = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

const shadowMap = {
  none: "",
  md: "shadow-brand",
  glow: "shadow-glow",
};

const radiusMap = {
  md: "rounded-2xl",
  lg: "rounded-3xl",
  xl: "rounded-[32px]",
};

export default function GlassPanel({
  children,
  padding = "lg",
  shadow = "md",
  radius = "lg",
  hover = false,
  className = "",
}: GlassPanelProps) {
  return (
    <div
      className={`
        glass
        border
        border-border

        ${paddingMap[padding]}
        ${shadowMap[shadow]}
        ${radiusMap[radius]}

        ${
          hover
            ? "hover-lift shadow-hover"
            : ""
        }

        transition-all
        duration-300

        ${className}
      `}
    >
      {children}
    </div>
  );
}