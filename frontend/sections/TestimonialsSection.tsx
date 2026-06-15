import FadeIn from "../components/FadeIn";

export default function TestimonialsSection() {
  return (
    <FadeIn>
    <section
      id="testimonials"
      className="bg-gray-50 py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold mb-12">
          What Our Clients Say
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {[1, 2, 3].map((client) => (
            <div
              key={client}
              className="bg-white rounded-xl shadow p-6"
            >
              <p className="italic">
                &ldquo;Excellent service and outstanding support.&rdquo;
              </p>

              <p className="mt-6 font-semibold">
                Client {client}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
    </FadeIn>
  );
}