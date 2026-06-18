"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Services",
      href: "#services",
    },
    {
      label: "Articles",
      href: "#articles",
    },
    {
      label: "Testimonials",
      href: "#testimonials",
    },
    {
      label: "Payments",
      href: "/payments",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ];

  return (
    <header className="sticky top-0 z-50">
      <nav
        aria-label="Primary Navigation"
        className="
          bg-background/90
          backdrop-blur-md
          text-foreground
          border-b
          border-foreground/10
          shadow-sm
        "
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* Logo */}
          <Link
            href="/"
            className="
              text-xl
              md:text-2xl
              font-bold
              transition-colors
              hover:text-cyan-400
            "
          >
            Civilizationn Tech Solutions
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-6 items-center">

            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="
                    transition-colors
                    duration-200
                    hover:text-cyan-400
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-cyan-400
                    rounded-md
                    px-2
                    py-1
                  "
                >
                  {item.label}
                </Link>
              </li>
            ))}

          </ul>

          {/* Right Controls */}
          <div className="flex items-center gap-4">

            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="
                md:hidden
                p-2
                rounded-md
                transition-colors
                hover:bg-foreground/10
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-cyan-400
              "
              aria-label={
                isOpen
                  ? "Close Navigation Menu"
                  : "Open Navigation Menu"
              }
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>

          </div>

        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            id="mobile-navigation"
            className="
              md:hidden
              border-t
              border-foreground/10
              px-6
              py-4
              bg-background
            "
          >
            <ul className="space-y-4">

              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="
                      block
                      rounded-md
                      px-2
                      py-2
                      transition-colors
                      duration-200
                      hover:text-cyan-400
                      focus:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-cyan-400
                    "
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}

            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}