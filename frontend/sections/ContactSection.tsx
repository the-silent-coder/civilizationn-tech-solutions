export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-white-50 py-24 px-6"
    >
      <div className="max-w-3xl mx-auto text-center">

        <h2 className="text-4xl font-bold">
          Let&apos;s Build Something Amazing
        </h2>

        <p className="mt-6 text-gray-600">
          Reach out to us and let&apos;s discuss your next big idea.
        </p>

        <div>
          <label
            htmlFor="name"
            className="block mb-2 font-medium"
          >
            Full Name
          </label>

          <input
            id="name"
            type="text"
            className="
            w-full
            rounded-xl
            border
            border-black-300
            px-4
            py-3
            mt-1
            focus:outline-none
            focus:ring-2
            focus:ring-cyan-400
            "
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block mb-2 font-medium"
          >
            Email Address
          </label>

          <input
            id="email"
            type="email"
            className="
            w-full
            rounded-xl
            border
            border-black-300
            px-4
            py-3
            mt-1
            focus:outline-none
            focus:ring-2
            focus:ring-cyan-400
            "
            placeholder="example@gmail.com"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block mb-2 font-medium"
          >
            Your Message
          </label>

          <textarea
            id="message"
            rows={5}
            className="
            w-full
            rounded-xl
            border
            border-black-300
            px-4
            py-3
            mt-1
            focus:outline-none
            focus:ring-2
            focus:ring-cyan-400
            "
            placeholder="Tell us about your project..."
          />
        </div>

        <button
          className="mt-10 border px-8 py-4 rounded-lg"
        >
          Contact Us
        </button>

      </div>
    </section>
  );
}