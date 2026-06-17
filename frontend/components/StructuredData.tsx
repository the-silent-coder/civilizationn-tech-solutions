import Script from "next/script";

export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",

    name: "Civilizationn Tech Solutions",

    slogan: "Any Tech Solutions You Need, We Have Your Back.",

    url: "https://example.com",

    description:
      "Technology consulting and software solutions company.",

    sameAs: [],
  };

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}