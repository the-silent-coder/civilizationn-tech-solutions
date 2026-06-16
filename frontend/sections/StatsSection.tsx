import AnimatedCounter from "../components/AnimatedCounter";

const stats = [
  {
    value: 50,
    suffix: "+",
    label: "Projects Delivered",
  },
  {
    value: 25,
    suffix: "+",
    label: "Happy Clients",
  },
  {
    value: 10,
    suffix: "+",
    label: "Solutions Offered",
  },
  {
    value: 24,
    suffix: "/7",
    label: "Support Availability",
  },
];

export default function StatsSection() {
  return (
    <section
      className="
        py-24
        px-6
        bg-black
        text-white
      "
    >
      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-4 gap-8">

          {stats.map((stat) => (
            <div
              key={stat.label}
              className="
                text-center
                border
                border-cyan-500/20
                rounded-3xl
                p-8
                bg-white/5
                backdrop-blur-sm
              "
            >
              <div
                className="
                  text-5xl
                  font-bold
                  text-cyan-400
                  mb-4
                "
              >
                <AnimatedCounter
                  end={stat.value}
                  suffix={stat.suffix}
                />
              </div>

              <p className="text-gray-400">
                {stat.label}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}