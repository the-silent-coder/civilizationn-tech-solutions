"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      aria-label="Back to Top"
      onClick={scrollToTop}
      className={`
        fixed
        bottom-6
        right-6
        z-50
        h-14
        w-14
        rounded-full
        border
        border-cyan-500/40
        bg-black/80
        backdrop-blur-md
        text-cyan-400
        flex
        items-center
        justify-center
        shadow-[0_0_20px_rgba(6,182,212,0.35)]
        transition-all
        duration-300
        hover:scale-110
        hover:shadow-[0_0_35px_rgba(6,182,212,0.6)]
        ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }
      `}
    >
      <ArrowUp size={24} />
    </button>
  );
}