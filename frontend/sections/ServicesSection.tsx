import {
  Code,
  Smartphone,
  Cloud,
  Bot,
  Briefcase,
  Workflow,
} from "lucide-react";

const services = [
  {
    title: "Custom Software",
    description:
      "Scalable software solutions tailored to your business needs.",
    icon: Code,
  },
  {
    title: "Web & Mobile Apps",
    description:
      "Modern applications delivering seamless user experiences.",
    icon: Smartphone,
  },
  {
    title: "ServiceNow Solutions",
    description:
      "Expert implementation and optimization of ServiceNow platforms.",
    icon: Workflow,
  },
  {
    title: "Cloud Solutions",
    description:
      "Secure and efficient cloud transformation services.",
    icon: Cloud,
  },
  {
    title: "AI & Automation",
    description:
      "Automate repetitive work and unlock business intelligence.",
    icon: Bot,
  },
  {
    title: "IT Consulting",
    description:
      "Strategic guidance to accelerate digital transformation.",
    icon: Briefcase,
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-black text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Our Services
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Innovative technology solutions engineered
            to accelerate your business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="
                  border
                  border-cyan-500/20
                  rounded-3xl
                  p-8
                  bg-white/5
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-cyan-400
                  hover:shadow-[0_0_40px_rgba(6,182,212,0.2)]
                "
              >
                <Icon
                  size={40}
                  className="text-cyan-400 mb-6"
                />

                <h3 className="text-2xl font-semibold mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-7">
                  {service.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}