export default function StatsSection() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 text-center gap-8">

        <div>
          <h3 className="text-4xl font-bold">50+</h3>
          <p>Projects Delivered</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold">25+</h3>
          <p>Happy Clients</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold">10+</h3>
          <p>Tech Services</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold">24/7</h3>
          <p>Support</p>
        </div>

      </div>
    </section>
  );
}