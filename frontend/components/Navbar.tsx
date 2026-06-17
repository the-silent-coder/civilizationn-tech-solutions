"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    "about",
    "services",
    "articles",
    "testimonials",
    "payments",
    "contact",
  ];

  return (
    <header className="sticky top-0 z-50">
      <nav
        aria-label="Primary Navigation"
        className="
          bg-background
          text-foreground
          border-b
          border-foreground/10
          shadow-sm
          backdrop-blur-md
        "
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* Logo */}
          <h1 className="text-2xl font-bold">
            Civilizationn Tech Solutions
          </h1>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-6 items-center">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className="
                    capitalize
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
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Side Controls */}
          <div className="flex items-center gap-4">

            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              type="button"
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
              onClick={() => setIsOpen(!isOpen)}
              aria-label={
                isOpen
                  ? "Close Navigation Menu"
                  : "Open Navigation Menu"
              }
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
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
            "
          >
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className="
                      block
                      capitalize
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
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}