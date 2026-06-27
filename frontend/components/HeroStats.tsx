"use client";

import AnimatedCounter from "./AnimatedCounter";
import { heroContent } from "@/constants/hero";

export default function HeroStats() {
  return (
    <div className="mt-10 grid grid-cols-3 gap-6">
      {heroContent.stats.map((stat) => (
        <div
          key={stat.label}
          className="
            text-center
            rounded-2xl
            border
            border-border
            glass
            p-5
            hover-lift
            transition-all
            duration-300
          "
        >
            <AnimatedCounter
                end={stat.end}
                suffix={stat.suffix}
            />

          <p
            className="
              mt-2
              text-sm
              text-text-muted
            "
          >
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}