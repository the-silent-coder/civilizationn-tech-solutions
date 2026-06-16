"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-10 w-10 rounded-full border border-white/10" />
    );
  }

  return (
    <button
      aria-label="Toggle Theme"
      onClick={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      }
      className="
        h-8
        w-8
        rounded-full
        border
        border-white/10
        flex
        items-center
        justify-center
        transition-all
        duration-300
        hover:bg-white/10
      "
    >
      {theme === "dark" ? (
        <Sun size={18} />
      ) : (
        <Moon size={22} />
      )}
    </button>
  );
}