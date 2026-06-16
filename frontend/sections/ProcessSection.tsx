const steps = [
  "Discover",
  "Design",
  "Develop",
  "Deliver",
];

export default function ProcessSection() {
  return (
    <section className="py-24 px-6 bg-black text-white">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-16">
          How We Deliver Success
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          {steps.map((step, index) => (
            <div
              key={step}
              className="
                text-center
                border
                border-cyan-500/20
                rounded-2xl
                p-8
              "
            >
              <div
                className="
                  h-14
                  w-14
                  rounded-full
                  bg-cyan-500
                  text-black
                  font-bold
                  flex
                  items-center
                  justify-center
                  mx-auto
                  mb-6
                "
              >
                {index + 1}
              </div>

              <h3 className="text-xl font-semibold">
                {step}
              </h3>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}