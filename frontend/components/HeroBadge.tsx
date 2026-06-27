
import { heroContent } from "@/constants/hero";

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
      <span>
        {heroContent.badge}
      </span>
    </div>
  );
}