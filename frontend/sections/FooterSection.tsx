import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaXTwitter,
  FaDiscord,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa6";

export default function FooterSection() {
  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Articles", href: "#articles" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Payments", href: "#payments" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="border-t border-foreground/10 bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold">
              Civilizationn Tech Solutions
            </h3>

            <p className="mt-4 text-foreground/70 leading-relaxed">
              Any Tech Solutions You Need,
              We Have Your Back.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">
              Quick Links
            </h4>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-foreground/70 hover:text-cyan-500 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">
              Contact
            </h4>

            <div className="space-y-4 text-foreground/70">

              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>contactcivilizationntech@cts.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>+91 700451727</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} />
                <span>India</span>
              </div>

            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-cyan-500 transition-colors duration-300"
              >
                <FaLinkedin size={22} />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-cyan-500 transition-colors duration-300"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://youtube.com/@your-company"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="hover:text-red-500 transition-colors duration-300"
              >
                <FaYoutube size={22} />
              </a>

              <a
                href="https://instagram.com/your-company"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-pink-500 transition-colors duration-300"
              >
                <FaInstagram size={22} />
              </a>

              <a
                href="https://x.com/your-company"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="hover:text-sky-500 transition-colors duration-300"
              >
                <FaXTwitter size={22} />
              </a>

              <a
                href="https://discord.gg/your-server"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discord"
                className="hover:text-indigo-500 transition-colors duration-300"
              >
                <FaDiscord size={22} />
              </a>

              <a
                href="https://t.me/your-channel"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="hover:text-sky-500 transition-colors duration-300"
              >
                <FaTelegram size={22} />
              </a>

              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="hover:text-green-500 transition-colors duration-300"
              >
                <FaWhatsapp size={22} />
              </a>
              
              <a
                href="https://facebook.com/your-company"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-blue-500 transition-colors duration-300"
              >
                <FaFacebook size={22} />
              </a>

            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-foreground/10 mt-10 pt-6 text-center text-sm text-foreground/60">

          © {new Date().getFullYear()} Civilizationn Tech Solutions.
          All Rights Reserved.

        </div>

      </div>
    </footer>
  );
}