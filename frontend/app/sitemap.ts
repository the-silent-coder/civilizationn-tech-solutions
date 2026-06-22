import type { MetadataRoute } from "next";
import { siteConfig } from "../lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteConfig.url,
      lastModified,
      priority: 1,
      changeFrequency: "weekly",
    },
    {
      url: `${siteConfig.url}/articles`,
      lastModified,
      priority: 0.8,
      changeFrequency: "weekly",
    },
    {
      url: `${siteConfig.url}/payments`,
      lastModified,
      priority: 0.6,
      changeFrequency: "monthly",
    },
  ];
}
