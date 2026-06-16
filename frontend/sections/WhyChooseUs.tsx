const reasons = [
  "Industry Expertise",
  "Tailored Solutions",
  "Agile Delivery",
  "Long-Term Partnership",
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 px-6 bg-gray-950 text-white">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose Us?
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {reasons.map((reason) => (
            <div
              key={reason}
              className="
                border border-white/10
                rounded-2xl
                p-8
              "
            >
              <h3 className="text-2xl font-semibold">
                {reason}
              </h3>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}