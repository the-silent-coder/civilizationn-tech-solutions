import FadeIn from "../components/FadeIn";

const services = [
  "ServiceNow Development",
  "Web Development",
  "Mobile App Development",
  "Cloud Solutions",
  "Automation Solutions",
  "IT Consulting",
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 px-6 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {services.map((service) => (
            <div
              key={service}
              className="p-6 bg-white rounded-xl shadow transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <h3 className="font-semibold text-xl">
                {service}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}