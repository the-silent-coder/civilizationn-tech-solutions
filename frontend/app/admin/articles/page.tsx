import Link from "next/link";

export default function ArticlesPage() {
  return (
    <div>

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-3xl font-bold">
          Articles
        </h1>

        <Link
            href="/admin/articles/new"
            className="
            px-4
            py-2
            rounded-lg
            bg-cyan-600
            text-white
            "
        >
            Create Article
        </Link>

      </div>

      <div className="border rounded-xl p-6">

        <h2 className="font-semibold">
          No Articles Yet
        </h2>

        <p className="text-foreground/70 mt-2">
          Create your first article.
        </p>

      </div>

    </div>
  );
}