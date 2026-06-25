import Link from "next/link";

import Navbar from "@/components/Navbar";
import FooterSection from "@/sections/FooterSection";

import { getPublishedArticles }
from "@/lib/actions/article-queries";

export default async function ArticlesPage() {

  const articles =
    await getPublishedArticles();

  return (
    <>
      <Navbar />

      <main className="min-h-screen">

        <section className="py-20 px-6">

          <div className="max-w-7xl mx-auto">

            <h1 className="text-5xl font-bold text-center">
              Articles
            </h1>

            <p className="text-center mt-4 text-foreground/70">
              Insights, updates and knowledge
              from Civilizationn Tech Solutions.
            </p>

            <div className="
              mt-16
              grid
              grid-cols-1
              md:grid-cols-2
              xl:grid-cols-4
              gap-8
            ">

              <p className="text-red-500 text-center mb-8">
                Articles Found: {articles.length}
              </p>

              {articles.map((article) => (

                <Link
                  key={article.id}
                  href={`/articles/${article.slug}`}
                >
                  <article
                    className="
                      h-350px
                      rounded-2xl
                      overflow-hidden
                      relative
                      group
                      border
                      border-white/10
                    "
                  >

                    <img
                      src={
                        article.coverImage ??
                        "/images/default-article.jpg"
                      }
                      alt={article.title}
                      className="
                        absolute
                        inset-0
                        h-full
                        w-full
                        object-cover
                        group-hover:scale-110
                        transition-all
                        duration-700
                      "
                    />

                    <div
                      className="
                        absolute
                        inset-0
                        bg-black/60
                      "
                    />

                    <div
                      className="
                        absolute
                        bottom-0
                        p-6
                        z-10
                      "
                    >
                      <h2 className="
                        text-2xl
                        font-bold
                        text-white
                      ">
                        {article.title}
                      </h2>

                      <p className="
                        text-white/80
                        mt-3
                      ">
                        {article.excerpt}
                      </p>
                    </div>

                  </article>
                </Link>

              ))}

            </div>

          </div>

        </section>

      </main>

      <FooterSection />
    </>
  );
}