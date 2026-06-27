import type { ReactNode } from "react";

type GridColumns = 1 | 2 | 3 | 4;

type GridGap =
  | "sm"
  | "md"
  | "lg"
  | "xl";

interface GridProps {
  children: ReactNode;
  columns?: GridColumns;
  gap?: GridGap;
  className?: string;
}

const columnMap = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 md:grid-cols-2 xl:grid-cols-4",
};

const gapMap = {
  sm: "gap-4",
  md: "gap-6",
  lg: "gap-8",
  xl: "gap-12",
};

export default function Grid({
  children,
  columns = 3,
  gap = "lg",
  className = "",
}: GridProps) {
  return (
    <div
      className={`
        grid
        ${columnMap[columns]}
        ${gapMap[gap]}
        ${className}
      `}
    >
      {children}
    </div>
  );
}