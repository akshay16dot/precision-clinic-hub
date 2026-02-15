import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoAP from "@/assets/logo-ap.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/dental-implants-new-jersey", label: "Treatments" },
  { to: "#services", label: "For Patients", isAnchor: true },
  { to: "#education", label: "For Dentists", isAnchor: true },
  { to: "/education", label: "Courses" },
  { to: "/contact", label: "Contact" },
];

const SiteNavigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const handleClick = (link: typeof navLinks[0]) => {
    if (link.isAnchor) {
      // If on homepage, scroll to anchor; otherwise navigate home first
      if (location.pathname === "/") {
        const el = document.querySelector(link.to);
        el?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = "/" + link.to;
      }
      setMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-divider/50 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="luxury-container flex items-center justify-between py-4 px-6 md:px-8">
        {/* Logo */}
        <Link to="/" className="hover:opacity-70 transition-opacity duration-300">
          <img
            src={logoAP}
            alt="Dr. Akshay Parmar"
            className={`transition-all duration-500 ${
              scrolled ? "h-8 md:h-9" : "h-9 md:h-10"
            }`}
            style={{
              filter: scrolled ? "none" : "invert(1)",
            }}
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) =>
            link.isAnchor ? (
              <button
                key={link.label}
                onClick={() => handleClick(link)}
                className={`font-body text-[10px] tracking-[0.18em] uppercase transition-colors duration-300 font-light ${
                  scrolled
                    ? "text-charcoal-light hover:text-navy"
                    : "text-primary-foreground/50 hover:text-primary-foreground"
                }`}
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                className={`font-body text-[10px] tracking-[0.18em] uppercase transition-colors duration-300 font-light ${
                  scrolled
                    ? "text-charcoal-light hover:text-navy"
                    : "text-primary-foreground/50 hover:text-primary-foreground"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`lg:hidden transition-colors duration-300 ${
            scrolled
              ? "text-charcoal-light hover:text-navy"
              : "text-primary-foreground/60 hover:text-primary-foreground"
          }`}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-background/95 backdrop-blur-md border-t border-divider/40 px-6 py-6 space-y-4">
          {navLinks.map((link) =>
            link.isAnchor ? (
              <button
                key={link.label}
                onClick={() => handleClick(link)}
                className="block font-body text-xs tracking-[0.2em] uppercase text-charcoal-light hover:text-navy transition-colors duration-300 font-light"
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className="block font-body text-xs tracking-[0.2em] uppercase text-charcoal-light hover:text-navy transition-colors duration-300 font-light"
              >
                {link.label}
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default SiteNavigation;
