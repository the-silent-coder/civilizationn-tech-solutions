export default function NewArticlePage() {
  return (
    <div>

      <h1 className="text-3xl font-bold mb-8">
        Create Article
      </h1>

      <form className="space-y-6">

        <div>
          <label className="block mb-2">
            Title
          </label>

          <input
            type="text"
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