import type { ReactNode } from "react";

type CardVariant = "solid" | "glass" | "outline";

type CardPadding = "sm" | "md" | "lg";

type CardShadow = "none" | "md" | "glow";

type CardRadius = "md" | "lg" | "xl";

interface CardProps {
  children: ReactNode;
  variant?: CardVariant;
  padding?: CardPadding;
  shadow?: CardShadow;
  radius?: CardRadius;
  hover?: boolean;
  className?: string;
}

const variantMap = {
  solid: "surface",
  glass: "glass",
  outline: "border border-border bg-transparent",
};

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

export default function Card({
  children,
  variant = "solid",
  padding = "lg",
  shadow = "md",
  radius = "lg",
  hover = false,
  className = "",
}: CardProps) {
  return (
    <div
      className={`
        ${variantMap[variant]}
        ${paddingMap[padding]}
        ${shadowMap[shadow]}
        ${radiusMap[radius]}
        ${hover ? "hover-lift shadow-hover" : ""}
        transition-all
        duration-300
        ${className}
      `}
    >
      {children}
    </div>
  );
}