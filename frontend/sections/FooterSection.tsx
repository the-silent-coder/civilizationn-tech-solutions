import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Link from "next/link";

import { siteConfig } from "../lib/site";

const quickLinks = [
  {
    label: "about",
    href: "/#about",
  },
  {
    label: "services",
    href: "/#services",
  },
  {
    label: "articles",
    href: "/#articles",
  },
  {
    label: "testimonials",
    href: "/#testimonials",
  },
  {
    label: "payments",
    href: "/payments",
  },
  {
    label: "contact",
    href: "/#contact",
  },
];

export default function FooterSection() {
  return (
    <footer
      className="
        border-t
        border-foreground/10
        bg-background
        text-foreground
        py-12
        px-6
      "
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-2xl font-bold">
              {siteConfig.name}
            </h3>

            <p className="mt-4 text-gray-400 leading-7">
              {siteConfig.tagline}
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3">
                <Mail size={18} />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-cyan-400"
                >
                  {siteConfig.email}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} />
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="hover:text-cyan-400"
                >
                  {siteConfig.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} />
                <span>{siteConfig.location}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">
              Quick Links
            </h4>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="
                      capitalize
                      transition-colors
                      duration-200
                      hover:text-cyan-400
                      focus:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-cyan-400
                      rounded-md
                      px-1
                      py-1
                    "
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">
              Start a Conversation
            </h4>

            <p className="text-gray-400 leading-7">
              Have a ServiceNow, software, AI, or app idea in
              mind? Send us a short note and we will get back to
              you.
            </p>

            <Link
              href="/#contact"
              className="
                inline-flex
                mt-6
                rounded-xl
                bg-cyan-500
                px-5
                py-3
                font-semibold
                text-black
                transition-all
                duration-300
                hover:scale-105
              "
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div
          className="
            mt-10
            pt-6
            border-t
            border-foreground/10
            text-center
            text-sm
            text-gray-500
          "
        >
          &copy; {new Date().getFullYear()} {siteConfig.name}. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
}
