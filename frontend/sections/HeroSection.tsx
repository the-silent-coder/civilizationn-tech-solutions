import HeroBadge from "../components/HeroBadge";
import HeroCTA from "../components/HeroCTA";
import HeroTrustIndicators from "../components/HeroTrustIndicators";
import HeroAnimation from "../components/HeroAnimation";

export default function HeroSection() {
  return (
    <section
      className="
        min-h-screen
        bg-black
        text-white
        px-6
        py-20
        flex
        items-center
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          grid
          lg:grid-cols-2
          gap-16
          items-center
        "
      >

        <div>

          <HeroBadge />

          <h1
            className="
              text-5xl
              md:text-7xl
              font-bold
              leading-tight
            "
          >
            Engineering Tomorrow&apos;s

            <span className="block text-cyan-400">
              Digital Success Stories
            </span>
          </h1>

          <p
            className="
              mt-8
              text-lg
              text-gray-300
              leading-8
            "
          >
            From ServiceNow solutions to custom
            applications, we transform ambitious ideas
            into scalable realities.
          </p>

          <HeroCTA />

          <HeroTrustIndicators />

        </div>

        <HeroAnimation />

      </div>
    </section>
  );
}