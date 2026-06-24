"use client";

import { useState } from "react";

export default function NewArticlePage() {
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    console.log({
      title,
      excerpt,
      content,
    });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">
        Create Article
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <div>
          <label className="block mb-2">
            Title
          </label>

          <input
            type="text"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
            className="
              w-full
              border
              rounded-lg
              px-4
              py-3
            "
          />
        </div>

        <div>
          <label className="block mb-2">
            Excerpt
          </label>

          <textarea
            rows={3}
            value={excerpt}
            onChange={(e) =>
              setExcerpt(e.target.value)
            }
            className="
              w-full
              border
              rounded-lg
              px-4
              py-3
            "
          />
        </div>

        <div>
          <label className="block mb-2">
            Content
          </label>

          <textarea
            rows={12}
            value={content}
            onChange={(e) =>
              setContent(e.target.value)
            }
            className="
              w-full
              border
              rounded-lg
              px-4
              py-3
            "
          />
        </div>

        <button
          type="submit"
          className="
            px-6
            py-3
            rounded-lg
            bg-cyan-600
            text-white
          "
        >
          Save Article
        </button>
      </form>
    </div>
  );
}