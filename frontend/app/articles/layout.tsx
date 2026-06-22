import type { Metadata } from "next";
import type { ReactNode } from "react";

import { siteConfig } from "../../lib/site";

export const metadata: Metadata = {
  title: "Articles & Insights",
  description:
    "Read technology insights from Civilizationn Tech Solutions on ServiceNow, scalable web applications, AI automation, and digital transformation.",
  alternates: {
    canonical: "/articles",
  },
  openGraph: {
    title: `Articles & Insights | ${siteConfig.name}`,
    description:
      "Technology insights on ServiceNow, scalable web applications, AI automation, and digital transformation.",
    url: `${siteConfig.url}/articles`,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Articles & Insights | ${siteConfig.name}`,
    description:
      "Technology insights on ServiceNow, scalable web applications, AI automation, and digital transformation.",
  },
};

export default function ArticlesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
