"use client";

import { useState } from "react";

import Navbar from "../../components/Navbar";
import FooterSection from "../../sections/FooterSection";

const articles = [
  {
    id: 1,
    title: "The Future of ServiceNow Development",
    excerpt:
      "Explore how ServiceNow is transforming enterprise workflows through automation and AI-powered experiences.",

    content: `
ServiceNow continues to evolve as one of the most powerful enterprise platforms available today.

Organizations are increasingly adopting ServiceNow not only for ITSM but also for HRSD, ITOM, CSM, SPM and AI-driven workflows.

With the introduction of AI Agents and Generative AI capabilities, businesses can automate repetitive tasks, improve employee productivity and reduce operational costs.

For modern enterprises, ServiceNow has become a strategic platform rather than simply a ticketing tool.

The future of ServiceNow development will revolve around AI integration, hyper automation, low-code development and enterprise-wide digital transformation.
`,
  },

  {
    id: 2,
    title: "Building Scalable Web Applications",
    excerpt:
      "Discover key architectural principles that help businesses build modern scalable applications.",

    content: `
Scalable web applications require strong architectural planning.

Developers should focus on modular design, reusable components, API-first architecture and cloud-native deployment models.

Performance optimization, caching strategies and database optimization are critical for handling increasing user traffic.

Modern frameworks such as Next.js enable developers to create fast and SEO-friendly web experiences.

Businesses investing in scalable architectures gain long-term flexibility and reduced maintenance costs.
`,
  },

  {
    id: 3,
    title: "AI Solutions for Modern Businesses",
    excerpt:
      "Learn how artificial intelligence is helping organizations accelerate growth and innovation.",

    content: `
Artificial Intelligence is becoming a core business enabler.

From intelligent chatbots to predictive analytics and process automation, AI technologies are transforming operations across industries.

Organizations can improve customer experiences, reduce manual effort and make data-driven decisions faster.

Successful AI adoption requires clear objectives, quality data and continuous optimization.

Companies that embrace AI early often gain a significant competitive advantage.
`,
  },
];



export default function ArticlesPage() {
  const [expandedArticle, setExpandedArticle] =
    useState<number | null>(null);

  return (
    <>
      <Navbar />

      <main
        className="
          min-h-screen
          bg-background
          text-foreground
        "
      >
        {/* Hero Section */}
        <section
          className="
            py-24
            px-6
            border-b
            border-foreground/10
          "
        >
          <div className="max-w-7xl mx-auto text-center">

            <div
              className="
                inline-flex
                px-4
                py-2
                rounded-full
                border
                border-cyan-500/40
                bg-cyan-500/10
                text-cyan-400
                mb-6
              "
            >
              Knowledge Hub
            </div>

            <h1
              className="
                text-5xl
                md:text-7xl
                font-bold
              "
            >
              Articles & Insights
            </h1>

            <p
              className="
                mt-8
                text-lg
                max-w-3xl
                mx-auto
                text-gray-500
                dark:text-gray-400
              "
            >
              Explore expert insights, industry trends and
              practical knowledge shared by Civilizationn
              Tech Solutions.
            </p>

          </div>
        </section>

        {/* Articles Section */}

        <section className="py-24 px-6">

          <div className="max-w-7xl mx-auto">

            <div className="grid gap-10">

              {articles.map((article) => {
                const isExpanded =
                  expandedArticle === article.id;

                return (
                  <div
                    key={article.id}
                    className="
                      border
                      border-foreground/10
                      rounded-3xl
                      bg-white
                      dark:bg-neutral-900
                      p-8
                      transition-all
                      duration-500
                      shadow-sm
                    "
                  >
                    <h2
                      className="
                        text-3xl
                        text-black
                        dark:text-white
                        font-bold
                        mb-4
                      "
                    >
                      {article.title}
                    </h2>

                    {!isExpanded && (
                      <>
                        <p
                          className="
                            text-black
                            dark:text-white
                            leading-8
                          "
                        >
                          {article.excerpt}
                        </p>

                        <button
                          onClick={() =>
                            setExpandedArticle(article.id)
                          }
                          className="
                            mt-6
                            text-cyan-400
                            font-semibold
                            hover:underline
                          "
                        >
                          See More →
                        </button>
                      </>
                    )}

                    {isExpanded && (
                      <div
                        className="
                          max-w-[794px]
                          mx-auto
                          min-h-[1123px]
                          bg-background
                          mt-8
                          rounded-2xl
                          border
                          border-foreground/10
                          p-10
                        "
                      >
                        <div
                          className="
                            prose
                            dark:prose-invert
                            max-w-none
                          "
                        >
                          <h1 className="mb-8">
                            {article.title}
                          </h1>

                          <p
                            className="
                              whitespace-pre-line
                              text-lg
                              leading-9
                            "
                          >
                            {article.content}
                          </p>
                        </div>

                        <button
                          onClick={() =>
                            setExpandedArticle(null)
                          }
                          className="
                            mt-12
                            px-6
                            py-3
                            rounded-xl
                            bg-cyan-500
                            text-black
                            font-semibold
                          "
                        >
                          Close Article
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}

            </div>

          </div>

        </section>

      </main>

      <FooterSection />
    </>
  );
}