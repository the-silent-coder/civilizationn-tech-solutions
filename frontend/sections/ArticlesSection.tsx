import FadeIn from "../components/FadeIn";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Marquee from "react-fast-marquee";

const articles = [
  {
    id: 1,
    title: "The Future of ServiceNow Development",
    excerpt:
      "Discover how ServiceNow is transforming enterprise workflows through AI, automation and digital transformation.",
  },
  {
    id: 2,
    title: "Building Scalable Web Applications",
    excerpt:
      "Learn architectural principles and development practices for highly scalable applications.",
  },
  {
    id: 3,
    title: "AI Solutions for Modern Businesses",
    excerpt:
      "Explore how Artificial Intelligence is accelerating growth and innovation across industries.",
  },
  {
    id: 4,
    title: "Digital Transformation Strategies",
    excerpt:
      "Practical strategies organizations can use to modernize business operations and customer experiences.",
  },
];

export default function ArticlesSection() {
  return (
    <FadeIn>
      <section
        id="articles"
        className="py-24 px-6 max-w-7xl mx-auto"
      >
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-4">
            Insights & Articles
          </h2>

          <p className="text-gray-600 dark:text-gray-400">
            Explore expert insights shared by our team.
          </p>
        </div>

        {/* Moving Article Cards */}
        <div className="overflow-hidden rounded-3xl">

          <Marquee
            speed={40}
            gradient={false}
            pauseOnHover
            pauseOnClick
          >
            {articles.map((article) => (
              <div
                key={article.id}
                className="
                  mx-4
                  w-350px
                  h-240px
                  rounded-3xl
                  border
                  border-cyan-500/20
                  bg-background
                  p-8
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-cyan-400
                  hover:shadow-[0_0_25px_rgba(6,182,212,0.15)]
                "
              >
                <h3
                  className="
                    text-xl
                    font-semibold
                    mb-4
                    line-clamp-2
                  "
                >
                  {article.title}
                </h3>

                <p
                  className="
                    text-gray-600
                    dark:text-gray-400
                    leading-7
                    line-clamp-4
                  "
                >
                  {article.excerpt}
                </p>
              </div>
            ))}
          </Marquee>

        </div>

        {/* Go To Full Page Button */}
        <div className="mt-14 flex justify-center">

          <Link
            href="/articles"
            className="
              group
              relative
              overflow-hidden
              inline-flex
              items-center
              gap-3
              rounded-full
              px-8
              py-4
              font-semibold
              border
              border-cyan-500/30
              backdrop-blur-md
              transition-all
              duration-300
              hover:scale-105
              hover:border-cyan-400
            "
          >
            <span
              className="
                absolute
                inset-0
                bg-gradient-to-r
                from-cyan-500/10
                to-purple-500/10
              "
            />

            <span className="relative z-10">
              Go To Full Page
            </span>

            <ArrowRight
              size={18}
              className="
                relative
                z-10
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Link>

        </div>

      </section>
    </FadeIn>
  );
}
