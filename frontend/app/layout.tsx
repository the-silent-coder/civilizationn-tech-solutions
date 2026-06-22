import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";

import StructuredData from "../components/StructuredData";
import { siteConfig } from "../lib/site";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },

  description: siteConfig.description,

  keywords: siteConfig.keywords,

  authors: [
    {
      name: siteConfig.name,
    },
  ],

  creator: siteConfig.name,

  applicationName: siteConfig.name,

  metadataBase: new URL(siteConfig.url),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <StructuredData />
        <a
          href="#main-content"
          className="
          sr-only
          focus:not-sr-only
          focus:absolute
          focus:top-4
          focus:left-4
          focus:z-9999
        focus:bg-cyan-500
        focus:text-black
          focus:px-4
          focus:py-2
          focus:rounded-lg
          "
          >
          Skip to main content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
