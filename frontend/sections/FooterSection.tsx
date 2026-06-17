import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import {
  FaLinkedin,
  FaGithub,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";

export default function FooterSection() {
  const quickLinks = [
    "about",
    "services",
    "articles",
    "testimonials",
    "payments",
    "contact",
  ];

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

          {/* Company Information */}
          <div>
            <h3 className="text-2xl font-bold">
              Civilizationn Tech Solutions
            </h3>

            <p className="mt-4 text-gray-400 leading-7">
              Any Tech Solutions You Need,
              We Have Your Back.
            </p>

            <div className="mt-6 space-y-3">

              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>
                  info@civilizationntechsolutions.com
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>
                  +91 7004515727
                </span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} />
                <span>
                  India
                </span>
              </div>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              Quick Links
            </h4>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link}`}
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
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              Connect With Us
            </h4>

            <div className="flex gap-4">

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={22} />
              </a>
              
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaXTwitter size={22} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaInstagram size={22} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaYoutube size={22} />
              </a>

            </div>
          </div>

        </div>

        {/* Bottom Bar */}
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
          © {new Date().getFullYear()} Civilizationn Tech Solutions.
          All rights reserved.
        </div>

      </div>
    </footer>
  );
}