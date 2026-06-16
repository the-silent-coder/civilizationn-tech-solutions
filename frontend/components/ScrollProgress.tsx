"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const calculateScrollProgress = () => {
      const scrollTop = window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress =
        documentHeight > 0
          ? (scrollTop / documentHeight) * 100
          : 0;

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", calculateScrollProgress);

    calculateScrollProgress();

    return () => {
      window.removeEventListener(
        "scroll",
        calculateScrollProgress
      );
    };
  }, []);

  return (
    <div
      className="
        fixed
        top-0
        left-0
        z-9999
        h-1
        w-full
        bg-transparent
      "
    >
      <div
        className="
          h-full
          bg-cyan-400
          shadow-[0_0_12px_rgba(34,211,238,0.8)]
          transition-all
          duration-100
        "
        style={{
          width: `${scrollProgress}%`,
        }}
      />
    </div>
  );
}