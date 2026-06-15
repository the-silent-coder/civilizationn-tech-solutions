import FadeIn from "../components/FadeIn";

export default function ArticlesSection() {
  return (
    <FadeIn>
    <section
      id="articles"
      className="py-24 px-6 max-w-6xl mx-auto"
    >
      <h2 className="text-4xl font-bold mb-4">
        Insights & Articles
      </h2>

      <p className="text-gray-600 mb-12">
        Explore expert insights shared by our team.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3].map((article) => (
          <div
            key={article}
            className="border rounded-xl p-6 shadow-sm"
          >
            <h3 className="font-semibold text-xl mb-4">
              Sample Article {article}
            </h3>

            <p className="text-gray-600">
              This area will later display employee-authored
              articles dynamically.
            </p>
          </div>
        ))}
      </div>
    </section>
    </FadeIn>
  );
}