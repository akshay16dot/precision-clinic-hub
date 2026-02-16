import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logoAP from "@/assets/logo-ap.png";

const navLinks = [
  { to: "/dental-implants-new-jersey", label: "Dental Implants" },
  { to: "/full-arch-implants-new-jersey", label: "Full-Arch" },
  {
    to: "/aesthetic-dentistry",
    label: "Aesthetic Dentistry",
    children: [
      { to: "/veneers-aesthetic-reconstruction", label: "Veneers & Smile Reconstruction" },
    ],
  },
  { to: "/maxillofacial-rehabilitation", label: "Maxillofacial" },
  { to: "/education", label: "Education" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const linkClass =
  "font-body text-[11px] tracking-[0.12em] uppercase text-charcoal-light hover:text-navy transition-colors duration-300";

const PageNavigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-divider">
      <div className="luxury-container flex items-center justify-between py-5 px-6 md:px-8">
        <Link to="/" className="hover:opacity-70 transition-opacity duration-300">
          <img src={logoAP} alt="Dr. Akshay Parmar" className="h-20 md:h-24" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.to} className="relative" ref={dropdownRef}>
                <div className="flex items-center gap-1">
                  <Link to={link.to} className={linkClass}>
                    {link.label}
                  </Link>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="text-charcoal-light hover:text-navy transition-colors duration-300"
                    aria-label="Toggle submenu"
                  >
                    <ChevronDown
                      size={12}
                      strokeWidth={1.5}
                      className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                </div>

                {dropdownOpen && (
                  <div className="absolute top-full left-0 mt-3 min-w-[220px] bg-background border border-divider rounded shadow-md py-2 z-[60]">
                    {link.children.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        onClick={() => setDropdownOpen(false)}
                        className="block px-4 py-2.5 font-body text-[11px] tracking-[0.1em] uppercase text-charcoal-light hover:text-navy hover:bg-muted/40 transition-colors duration-200"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={link.to} to={link.to} className={linkClass}>
                {link.label}
              </Link>
            )
          )}
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
            <div key={link.to}>
              <Link
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className="block font-body text-xs tracking-[0.15em] uppercase text-charcoal-light hover:text-navy transition-colors duration-300"
              >
                {link.label}
              </Link>
              {link.children && (
                <div className="pl-4 mt-2 space-y-2">
                  {link.children.map((child) => (
                    <Link
                      key={child.to}
                      to={child.to}
                      onClick={() => setMenuOpen(false)}
                      className="block font-body text-[11px] tracking-[0.12em] uppercase text-charcoal-light/70 hover:text-navy transition-colors duration-300"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default PageNavigation;
