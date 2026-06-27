import { Button } from "@/components/ui";
import { heroContent } from "@/constants/hero";

export default function HeroCTA() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-10">
      <Button
        href={heroContent.primaryCTA.href}
        variant="primary"
      >
        {heroContent.primaryCTA.label}
      </Button>

      <Button
        href={heroContent.secondaryCTA.href}
        variant="outline"
      >
        {heroContent.secondaryCTA.label}
      </Button>
    </div>
  );
}