export default function CtaBanner() {
  return (
    <section className="bg-cyan-500 py-20 px-6">

      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-4xl font-bold text-black">
          Ready to Transform Your Business?
        </h2>

        <p className="mt-6 text-black/80">
          Let&apos;s build innovative solutions together.
        </p>

        <a
          href="#contact"
          className="
            inline-block
            mt-8
            px-8
            py-4
            rounded-xl
            bg-black
            text-white
            font-semibold
          "
        >
          Get Started
        </a>

      </div>

    </section>
  );
}