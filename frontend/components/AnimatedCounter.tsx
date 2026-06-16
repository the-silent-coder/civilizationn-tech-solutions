"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
}

export default function AnimatedCounter({
  end,
  suffix = "",
}: AnimatedCounterProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div ref={ref}>
      {inView ? (
        <CountUp
          end={end}
          duration={2.5}
          suffix={suffix}
        />
      ) : (
        0
      )}
    </div>
  );
}