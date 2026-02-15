import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoAP from "@/assets/logo-ap.png";

const navLinks = [
  { to: "/dental-implants-new-jersey", label: "Dental Implants" },
  { to: "/full-arch-implants-new-jersey", label: "Full-Arch" },
  { to: "/aesthetic-dentistry", label: "Aesthetic Dentistry" },
  { to: "/maxillofacial-rehabilitation", label: "Maxillofacial" },
  { to: "/education", label: "Education" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const PageNavigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-divider">
      <div className="luxury-container flex items-center justify-between py-5 px-6 md:px-8">
        <Link to="/" className="hover:opacity-70 transition-opacity duration-300">
          <img src={logoAP} alt="Dr. Akshay Parmar" className="h-20 md:h-24" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="font-body text-[11px] tracking-[0.12em] uppercase text-charcoal-light hover:text-navy transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-charcoal-light hover:text-navy transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-background border-t border-divider px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className="block font-body text-xs tracking-[0.15em] uppercase text-charcoal-light hover:text-navy transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default PageNavigation;
