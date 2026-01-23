import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Partners", href: "/partners" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Business Account Opening", href: "/services/business-account-opening" },
    { label: "Business Loans & Financing", href: "/services/business-loans" },
    { label: "Corporate Services", href: "/corporate-services" },
  ],
  resources: [
    { label: "Associates Program", href: "/associates" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-xl">T</span>
              </div>
              <span className="text-xl font-bold">Taamul Credit</span>
            </Link>
            <p className="text-primary-foreground/70 mb-6 max-w-sm">
              Your trusted partner for business banking and financing solutions in the UAE.
              We simplify the path to financial growth for businesses of all sizes.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-accent mt-0.5" />
                <div>
                  <p className="text-primary-foreground/70">+971 4 XXX XXXX</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-accent mt-0.5" />
                <div>
                  <p className="text-primary-foreground/70">info@taamulcredit.ae</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5" />
                <div>
                  <p className="text-primary-foreground/70">
                    Business Bay, Dubai, UAE
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Taamul Credit. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            {footerLinks.resources.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-primary-foreground/60 hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
