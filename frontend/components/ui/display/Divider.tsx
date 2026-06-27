interface DividerProps {
  orientation?: "horizontal" | "vertical";
  className?: string;
}

export default function Divider({
  orientation = "horizontal",
  className = "",
}: DividerProps) {
  if (orientation === "vertical") {
    return (
      <div
        aria-hidden="true"
        className={`
          w-px
          self-stretch
          bg-border
          ${className}
        `}
      />
    );
  }

  return (
    <div
      aria-hidden="true"
      className={`
        h-px
        w-full
        bg-border
        ${className}
      `}
    />
  );
}