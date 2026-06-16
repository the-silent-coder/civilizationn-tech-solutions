"use client";

import Lottie from "lottie-react";
import handshakeAnimation from "../assets/animations/hand shake business deal.json";

export default function HeroAnimation() {
  return (
    <div
      className="
        h-150
        w-full
        rounded-3xl
        border
        border-cyan-500/20
        bg-linear-to-br
        from-cyan-500/10
        via-transparent
        to-purple-500/10
        flex
        items-center
        justify-center
        p-8
      "
    >
      <Lottie
        animationData={handshakeAnimation}
        loop
        autoplay
      />
    </div>
  );
}