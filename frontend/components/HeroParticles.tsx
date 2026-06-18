"use client";

import { useEffect, useMemo, useState } from "react";

export default function HeroParticles() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const particles = useMemo(
  () => [
    {
      left: 10,
      top: 20,
      delay: 0,
      duration: 8,
    },
    {
      left: 25,
      top: 60,
      delay: 2,
      duration: 10,
    },
    {
      left: 45,
      top: 35,
      delay: 1,
      duration: 12,
    },
    {
      left: 70,
      top: 75,
      delay: 3,
      duration: 9,
    },
    {
      left: 85,
      top: 25,
      delay: 4,
      duration: 11,
    },
  ],
  []
);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x =
        (event.clientX / window.innerWidth - 0.5) * 20;

      const y =
        (event.clientY / window.innerHeight - 0.5) * 20;

      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle, index) => (
        <span
          key={index}
          className="particle"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
            transform: `translate(
              ${mousePosition.x * ((index % 5) + 1) * 0.2}px,
              ${mousePosition.y * ((index % 5) + 1) * 0.2}px
            )`,
          }}
        />
      ))}
    </div>
  );
}