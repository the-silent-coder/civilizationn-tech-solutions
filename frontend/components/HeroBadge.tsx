export default function HeroBadge() {
  return (
    <div
      className="
        inline-flex
        items-center
        gap-2
        px-4
        py-2
        rounded-full
        border
        border-cyan-500/40
        bg-cyan-500/10
        text-cyan-400
        text-sm
        font-medium
        mb-8
      "
    >
      <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />

      Future-Ready Technology Partner
    </div>
  );
}