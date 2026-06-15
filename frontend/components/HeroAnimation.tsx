export default function HeroAnimation() {
  return (
    <div
      className="
        h-[400px]
        w-full
        rounded-3xl
        border
        border-cyan-500/20
        bg-gradient-to-br
        from-cyan-500/10
        via-transparent
        to-purple-500/10
        flex
        items-center
        justify-center
        text-center
        p-8
      "
    >
      <div>

        <div className="text-6xl mb-6">
          🤝
        </div>

        <h3 className="text-2xl font-bold text-cyan-400">
          Futuristic Collaboration
        </h3>

        <p className="text-gray-400 mt-4">
          Handshake animation will be integrated here.
        </p>

      </div>
    </div>
  );
}