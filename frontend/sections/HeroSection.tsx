import HeroBadge from "../components/HeroBadge";
import HeroCTA from "../components/HeroCTA";
import HeroTrustIndicators from "../components/HeroTrustIndicators";
import HeroAnimation from "../components/HeroAnimation";
import HeroParticles from "../components/HeroParticles";
import { Container } from "@/components/ui";
import { heroContent } from "@/constants/hero";

export default function HeroSection() {
  return (
    <section
      className="
        relative
        min-h-screen
        bg-background 
        text-foreground
        px-6
        py-20
        flex
        items-center
      "
    >
      <HeroParticles />
      <Container
        className="
          relative
          z-10
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
            {heroContent.title}
          </h1>

          <p
            className="
              mt-8
              text-lg
              text-gray-300
              leading-8
            "
          >
            {heroContent.subtitle}
          </p>

          <HeroCTA />

          <HeroTrustIndicators />

        </div>

        <HeroAnimation />

      </Container>
    </section>
  );
}