"use client";

import Lottie from "lottie-react";
import handshakeAnimation from "../assets/animations/hand shake business deal.json";

export default function HeroAnimation() {
  return (
    <div
      className="
        relative
        mx-auto
        flex
        w-full
        items-center
        justify-center
        overflow-hidden
        rounded-32px
        p-4
        sm:p-6
        lg:p-8
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