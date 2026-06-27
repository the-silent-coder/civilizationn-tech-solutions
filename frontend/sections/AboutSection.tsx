import FadeIn from "../components/FadeIn";
import { SectionHeading } from "@/components/ui";

export default function AboutSection() {
  return (
    <FadeIn>
      <section
        id="about"
        className="py-24 px-6 max-w-6xl mx-auto"
      >
        <SectionHeading
          badge="Who We Are"
          title="Engineering Digital Transformation with Purpose"
          subtitle="
            Civilizationn Tech Solutions delivers innovative software,
            ServiceNow expertise, AI-powered solutions and digital products
            that help organizations build for the future.
          "
        />
      </section>
    </FadeIn>
  );
}