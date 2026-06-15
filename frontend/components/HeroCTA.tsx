export default function HeroCTA() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-10">

      <a
        href="#services"
        className="
          px-8
          py-4
          rounded-xl
          bg-cyan-500
          text-black
          font-semibold
          transition-all
          duration-300
          hover:scale-105
          hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]
        "
      >
        Explore Services
      </a>

      <a
        href="#contact"
        className="
          px-8
          py-4
          rounded-xl
          border
          border-cyan-500
          text-cyan-400
          font-semibold
          transition-all
          duration-300
          hover:bg-cyan-500/10
        "
      >
        Book Consultation
      </a>

    </div>
  );
}