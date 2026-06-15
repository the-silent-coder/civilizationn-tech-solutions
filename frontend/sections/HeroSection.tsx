export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl text-center">

        <h1 className="text-5xl md:text-7xl font-bold">
          Any Tech Solutions You Need,
          We Have Your Back.
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          We transform ideas into scalable digital solutions,
          helping businesses grow with confidence.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-black text-white px-6 py-3 rounded-lg">
            Explore Services
          </button>

          <button className="border px-6 py-3 rounded-lg">
            Contact Us
          </button>
        </div>

      </div>
    </section>
  );
}