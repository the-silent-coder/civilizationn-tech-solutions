import type { ReactNode } from "react";

type StackSpacing =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl";

interface StackProps {
  children: ReactNode;
  className?: string;
  spacing?: StackSpacing;
}

const spacingMap = {
  xs: "gap-2",
  sm: "gap-3",
  md: "gap-4",
  lg: "gap-6",
  xl: "gap-8",
  "2xl": "gap-12",
};

export default function Stack({
  children,
  className = "",
  spacing = "lg",
}: StackProps) {
  return (
    <div
      className={`
        flex
        flex-col
        ${spacingMap[spacing]}
        ${className}
      `}
    >
      {children}
    </div>
  );
}