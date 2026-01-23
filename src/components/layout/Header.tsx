import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Business Account Opening", href: "/services/business-account-opening" },
      { label: "Business Loans & Financing", href: "/services/business-loans" },
    ],
  },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Partners", href: "/partners" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-card/95 backdrop-blur-lg shadow-md py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
            <span className="text-accent-foreground font-bold text-xl">T</span>
          </div>
          <span className="text-xl font-bold text-foreground">Taamul Credit</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <div key={item.label} className="relative">
              {item.children ? (
                <button
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                  className={cn(
                    "flex items-center gap-1 text-sm font-medium transition-colors hover:text-accent",
                    location.pathname.startsWith(item.href)
                      ? "text-accent"
                      : "text-foreground"
                  )}
                >
                  {item.label}
                  <ChevronDown className="h-4 w-4" />
                </button>
              ) : (
                <Link
                  to={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-accent",
                    location.pathname === item.href
                      ? "text-accent"
                      : "text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              )}
              {item.children && openDropdown === item.label && (
                <div
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                  className="absolute top-full left-0 pt-2"
                >
                  <div className="bg-card rounded-lg shadow-lg border border-border p-2 min-w-[220px] animate-fade-in">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-accent/10 hover:text-accent rounded-md transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Button & Theme Toggle */}
        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <Button variant="gold" size="lg" asChild>
            <Link to="/contact#eligibility">Check Eligibility</Link>
          </Button>
        </div>

        {/* Mobile Menu Button & Theme Toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-card border-t border-border animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <>
                    <button
                      onClick={() =>
                        setOpenDropdown(openDropdown === item.label ? null : item.label)
                      }
                      className="flex items-center justify-between w-full py-3 text-foreground font-medium"
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform",
                          openDropdown === item.label && "rotate-180"
                        )}
                      />
                    </button>
                    {openDropdown === item.label && (
                      <div className="pl-4 border-l-2 border-accent/30 ml-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            className="block py-2 text-muted-foreground hover:text-accent"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className="block py-3 text-foreground font-medium hover:text-accent"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Button variant="gold" size="lg" className="mt-4" asChild>
              <Link to="/contact#eligibility">Check Eligibility</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
