import { Link } from "react-router-dom";
import { useState, useRef, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import logoAP from "@/assets/logo-ap.png";

interface NavChild {
  to: string;
  label: string;
}

interface NavItem {
  to?: string;
  label: string;
  children?: NavChild[];
}

const navItems: NavItem[] = [
  {
    label: "Implants",
    children: [
      { to: "/dental-implants-new-jersey", label: "Dental Implants" },
      { to: "/immediate-implant-rehabilitation", label: "Immediate Implants" },
      { to: "/full-arch-implants-new-jersey", label: "Full-Arch Implants" },
    ],
  },
  {
    label: "Aesthetics",
    children: [
      { to: "/veneers-aesthetic-reconstruction", label: "Veneers" },
      { to: "/aesthetic-dentistry", label: "Smile Design" },
      { to: "/aesthetic-dentistry", label: "Tooth Wear Rehabilitation" },
      { to: "/aesthetic-dentistry", label: "Whitening" },
    ],
  },
  {
    label: "Specialized Care",
    children: [
      { to: "/maxillofacial-rehabilitation", label: "Maxillofacial Prosthodontics" },
      { to: "/maxillofacial-rehabilitation", label: "Oncology & Reconstruction" },
      { to: "/maxillofacial-rehabilitation", label: "Medically Complex Patients" },
    ],
  },
  { to: "/education", label: "Education" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const linkStyle =
  "font-body text-[11px] tracking-[0.14em] uppercase text-charcoal-light hover:text-navy transition-colors duration-300";

const PageNavigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = useCallback((label: string) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setOpenDropdown(label);
  }, []);

  const handleLeave = useCallback(() => {
    closeTimeout.current = setTimeout(() => setOpenDropdown(null), 120);
  }, []);

  // Close dropdown on route change / scroll
  useEffect(() => {
    const close = () => setOpenDropdown(null);
    window.addEventListener("scroll", close, { passive: true });
    return () => window.removeEventListener("scroll", close);
  }, []);

  // Lock body when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-divider">
      <div className="luxury-container flex items-center justify-between py-5 px-6 md:px-8">
        {/* Logo */}
        <Link to="/" className="hover:opacity-70 transition-opacity duration-300 shrink-0">
          <img src={logoAP} alt="Dr. Akshay Parmar" className="h-20 md:h-24" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => handleEnter(item.label)}
                onMouseLeave={handleLeave}
              >
                <button className={`${linkStyle} py-2`}>
                  {item.label}
                </button>

                <AnimatePresence>
                  {openDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
                    >
                      <div className="min-w-[220px] bg-background border border-divider shadow-lg py-3 z-[60]">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.to}
                            onClick={() => setOpenDropdown(null)}
                            className="block px-6 py-2.5 font-body text-[11px] tracking-[0.1em] uppercase text-charcoal-light hover:text-navy hover:bg-muted/40 transition-all duration-200"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link key={item.label} to={item.to!} className={linkStyle}>
                {item.label}
              </Link>
            )
          )}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-charcoal-light hover:text-navy transition-colors p-2 -mr-2"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} strokeWidth={1.3} /> : <Menu size={22} strokeWidth={1.3} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-background border-t border-divider overflow-hidden"
          >
            <div className="px-6 py-8 space-y-2 max-h-[80vh] overflow-y-auto">
              {navItems.map((item) =>
                item.children ? (
                  <div key={item.label}>
                    <button
                      onClick={() =>
                        setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                      }
                      className="w-full text-left py-3 font-body text-xs tracking-[0.18em] uppercase text-charcoal hover:text-navy transition-colors duration-300"
                    >
                      {item.label}
                    </button>
                    <AnimatePresence>
                      {mobileExpanded === item.label && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-4 pb-2 space-y-1">
                            {item.children.map((child) => (
                              <Link
                                key={child.label}
                                to={child.to}
                                onClick={() => setMenuOpen(false)}
                                className="block py-2.5 font-body text-[11px] tracking-[0.12em] uppercase text-charcoal-light/70 hover:text-navy transition-colors duration-300"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    to={item.to!}
                    onClick={() => setMenuOpen(false)}
                    className="block py-3 font-body text-xs tracking-[0.18em] uppercase text-charcoal hover:text-navy transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default PageNavigation;
