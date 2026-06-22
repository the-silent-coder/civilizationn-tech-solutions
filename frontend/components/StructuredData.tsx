import Script from "next/script";
import { siteConfig } from "../lib/site";

export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",

    name: siteConfig.name,

    slogan: siteConfig.tagline,

    url: siteConfig.url,

    email: siteConfig.email,

    telephone: siteConfig.phone,

    areaServed: siteConfig.location,

    description: siteConfig.description,

    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: siteConfig.email,
      telephone: siteConfig.phone,
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
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
