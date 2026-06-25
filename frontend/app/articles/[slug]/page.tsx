import { notFound } from "next/navigation";

import Navbar from "@/components/Navbar";
import FooterSection from "@/sections/FooterSection";

import {
  getArticleBySlug
} from "@/lib/actions/article-queries";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {

  const { slug } = await params;

  const article =
    await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main
        className="
          article-page
          max-w-4xl
          mx-auto
          py-20
          px-10
          my-10
        "
      >

        <h1 className="
          text-5xl
          font-bold
          mb-10
          text-center
        ">
          {article.title}
        </h1>

        <img
          src={
            article.coverImage ??
            "/images/default-article.jpg"
          }
          alt={article.title}
          className="
            w-full
            rounded-xl
            mb-10
          "
        />

        <div
          className="
            prose
            prose-lg
            max-w-none
          "
        >
          {article.content}
        </div>

      </main>

      <FooterSection />
    </>
  );
}