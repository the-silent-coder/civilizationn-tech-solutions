import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

import { ThemeProvider } from "../components/ThemeProvider";

export const metadata: Metadata = {
  title: "Civilizationn Tech Solutions",
  description: "Any Tech Solutions You Need, We Have Your Back.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
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