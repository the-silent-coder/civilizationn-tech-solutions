import HeroCTA from "../components/HeroCTA";
import HeroAnimation from "../components/HeroAnimation";
import HeroParticles from "../components/HeroParticles";
import { Container } from "@/components/ui";
import { heroContent } from "@/constants/hero";
import HeroStats from "../components/HeroStats";
import { Divider } from "@/components/ui";

export default function HeroSection() {
  return (
    <section
      className="
        relative
        min-h-[90vh]
        lg:min-h-screen
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
          lg:grid-cols-12
          gap-12
          xl:gap-20
          items-center
        "
      >

        <div
          className="
            lg:col-span-6
            xl:col-span-5
          "
        >

          <h1
            className="
              text-5xl
              md:text-6xl
              xl:text-7xl
              font-black
              tracking-tight
              leading-[1.05]
              max-w-3xl
            "
          >
            {heroContent.title}
          </h1>

          <p
            className="
              mt-8
              max-w-xl
              text-lg
              md:text-2xl
              leading-8
              text-text-muted
            "
          >
            {heroContent.subtitle}
          </p>

          <HeroCTA />

          <Divider className="my-10" />

          <HeroStats />

        </div>

        <div
          className="
            lg:col-span-6
            xl:col-span-7
            flex
            items-center
            justify-center
          "
        >
          <HeroAnimation />
        </div>

      </Container>
    </section>
  );
}