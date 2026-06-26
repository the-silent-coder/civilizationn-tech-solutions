"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Hexagon } from "lucide-react";

import ThemeToggle from "./ThemeToggle";
import { NAV_ITEMS } from "../constants/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      };

      handleScroll();
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);


  return (
    <header
      className={`
        sticky
        top-0
        z-50
        px-4
        transition-all
        duration-500
        ${
          isScrolled
            ? "pt-2"
            : "pt-4"
        }
      `}
    >
      <nav aria-label="Primary Navigation"
        className={`
          container-custom
          glass
          rounded-[28px]
          border
          border-border
          text-foreground
          transition-all
          duration-500

          ${
            isScrolled
              ? "shadow-glow"
              : "shadow-brand"
          }
        `}
      >

        <div
          className={`
            flex
            items-center
            justify-between
            px-8
            transition-all
            duration-500

            ${
              isScrolled
                ? "py-3"
                : "py-5"
            }
          `}
        >

          {/* Logo */}
          <div
            className={`
              flex
              items-center
              gap-3
              transition-all
              duration-500

              ${
                isScrolled
                  ? "scale-95"
                  : "scale-100"
              }
            `}
          >

            <div
              className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-xl
              gradient-brand
              shadow-glow
              "
            >
              <Hexagon
                size={22}
                className="text-slate-900"
                strokeWidth={2.5}
              />
            </div>

            <div className="flex flex-col">

              <span
                className="
                text-xl
                md:text-2xl
                font-extrabold
                tracking-tight
                leading-none
                "
              >
                Civilizationn
              </span>

              <span
                className="
                text-[10px]
                uppercase
                tracking-[0.35em]
                text-text-muted
                mt-1
                "
              >
                TECH SOLUTIONS
              </span>

            </div>

          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-2">

            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="
                    relative
                    rounded-full
                    px-4
                    py-2
                    text-sm
                    font-medium
                    transition-all
                    duration-300
                    hover:bg-primary/10
                    hover:text-primary
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-primary
                  "
                >
                  {item.label}
                </Link>
              </li>
            ))}

          </ul>

          {/* Right Controls */}
          <div className="flex items-center gap-3">

            <div className="glass rounded-full p-1">
              <ThemeToggle />
            </div>

            <Link
              href="#contact"
              className={`
                hidden
                lg:inline-flex
                items-center
                rounded-full
                gradient-brand
                text-slate-900
                shadow-glow
                transition-all
                duration-500
                font-semibold

                ${
                  isScrolled
                    ? "px-5 py-2.5 text-xs"
                    : "px-6 py-3 text-sm"
                }

                hover:-translate-y-1
                hover:scale-[1.02]
              `}
            >
              Book Consultation
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="
              md:hidden
              p-2
              rounded-full
              transition-colors
              hover:bg-primary/10
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

              {NAV_ITEMS.map((item) => (
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