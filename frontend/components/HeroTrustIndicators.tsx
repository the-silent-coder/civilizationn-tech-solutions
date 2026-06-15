const indicators = [
  "ServiceNow Expertise",
  "Custom Development",
  "End-to-End Support",
  "Future-Ready Solutions",
];

export default function HeroTrustIndicators() {
  return (
    <div className="mt-12 flex flex-wrap gap-4">

      {indicators.map((indicator) => (
        <div
          key={indicator}
          className="
            px-4
            py-2
            rounded-full
            border
            border-white/10
            text-sm
            text-gray-300
          "
        >
          ✓ {indicator}
        </div>
      ))}

    </div>
  );
}