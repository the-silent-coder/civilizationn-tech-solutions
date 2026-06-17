import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";

import StructuredData from "../components/StructuredData";

export const metadata: Metadata = {
  title: {
    default: "Civilizationn Tech Solutions",
    template: "%s | Civilizationn Tech Solutions",
  },

  description:
    "Any Tech Solutions You Need, We Have Your Back. ServiceNow expertise, custom software development, AI solutions, web and mobile applications.",

  keywords: [
    "Civilizationn Tech Solutions",
    "ServiceNow Development",
    "ServiceNow Consulting",
    "Custom Software Development",
    "Web Development",
    "Mobile App Development",
    "AI Solutions",
    "Digital Transformation",
    "IT Consulting",
  ],

  authors: [
    {
      name: "Civilizationn Tech Solutions",
    },
  ],

  creator: "Civilizationn Tech Solutions",

  applicationName: "Civilizationn Tech Solutions",

  metadataBase: new URL("https://civilizationntechsolutions.in"),

  openGraph: {
    title: "Civilizationn Tech Solutions",
    description:
      "Any Tech Solutions You Need, We Have Your Back.",
    url: "https://civilizationntechsolutions.in",
    siteName: "Civilizationn Tech Solutions",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Civilizationn Tech Solutions",
    description:
      "Future-ready technology solutions for modern businesses.",
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