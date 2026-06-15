import FadeIn from "../components/FadeIn";

export default function AboutSection() {
  return (
    <FadeIn>
      <section
        id="about"
        className="py-24 px-6 max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-6">
          About Us
        </h2>

        <p className="text-gray-600 leading-8">
          Civilizationn Tech Solutions is committed to delivering
          innovative technology solutions that empower businesses
          to thrive in the digital era.
        </p>
      </section>
    </FadeIn>
  );
}