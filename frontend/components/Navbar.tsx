"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

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
    <nav className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h2 className="text-2xl font-bold">
          Civilizationn Tech Solutions
        </h2>

        {/* Desktop */}
        <ul className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <li key={item}>
              <a href={`#${item}`} className="capitalize">
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t px-6 py-4">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className="capitalize"
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
  );
}