import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoAP from "@/assets/logo-ap.png";

const headerLinks = [
  { to: "/dental-implants-new-jersey", label: "Treatments" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const menuSections = [
  {
    title: "Clinical",
    links: [
      { to: "/dental-implants-new-jersey", label: "Dental Implants" },
      { to: "/dental-implants-new-jersey", label: "Immediate Implants", hash: "#immediate" },
      { to: "/full-arch-implants-new-jersey", label: "Full-Arch Rehabilitation" },
      { to: "/aesthetic-dentistry", label: "Veneers & Aesthetic Reconstruction" },
      { to: "/maxillofacial-rehabilitation", label: "Maxillofacial Prosthodontics" },
    ],
  },
  {
    title: "Patients",
    links: [
      { to: "/#services", label: "For Patients", isAnchor: true },
      { to: "/contact", label: "Consultations" },
      { to: "/about", label: "Treatment Philosophy", hash: "#philosophy" },
    ],
  },
  {
    title: "Professional",
    links: [
      { to: "/#education", label: "For Dentists", isAnchor: true },
      { to: "/education", label: "Education & Courses" },
      { to: "/education", label: "STABLE IMPLANT Protocol™", hash: "#stable" },
    ],
  },
  {
    title: "Location",
    links: [
      { to: "/about", label: "New Jersey Practice" },
      { to: "/clinical-cases", label: "Clinical Cases" },
      { to: "/contact", label: "Contact" },
    ],
  },
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

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when menu open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleAnchorClick = (anchor: string) => {
    setMenuOpen(false);
    if (location.pathname === "/") {
      const el = document.querySelector(anchor);
      el?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/" + anchor;
    }
  };

  const headerLinkClass = scrolled
    ? "text-muted-foreground hover:text-navy"
    : "text-primary-foreground/50 hover:text-primary-foreground";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/90 backdrop-blur-md shadow-[0_1px_0_0_hsl(var(--divider)/0.4)]"
            : "bg-transparent"
        }`}
      >
        <div className="luxury-container flex items-center justify-between py-4 px-6 md:px-8">
          {/* Logo */}
          <Link to="/" className="hover:opacity-75 transition-opacity duration-300 shrink-0">
            <img
              src={logoAP}
              alt="Dr. Akshay Parmar"
              className={`transition-all duration-500 ${
                scrolled ? "h-10 md:h-11" : "h-11 md:h-12"
              }`}
              style={{ filter: scrolled ? "none" : "invert(1)" }}
            />
          </Link>

          {/* Center links — desktop */}
          <div className="hidden md:flex items-center gap-8">
            {headerLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-body text-[11px] tracking-[0.06em] uppercase transition-colors duration-300 ${headerLinkClass}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`transition-colors duration-300 ${
              scrolled
                ? "text-muted-foreground hover:text-navy"
                : "text-primary-foreground/60 hover:text-primary-foreground"
            }`}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X size={20} strokeWidth={1.5} />
            ) : (
              <Menu size={20} strokeWidth={1.5} />
            )}
          </button>
        </div>
      </nav>

      {/* Full overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 z-[60] bg-navy/[0.97] backdrop-blur-sm"
          >
            {/* Close button */}
            <div className="luxury-container flex justify-end pt-4 px-6 md:px-8">
              <button
                onClick={() => setMenuOpen(false)}
                className="text-primary-foreground/50 hover:text-primary-foreground transition-colors duration-300"
                aria-label="Close menu"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>

            {/* Menu content */}
            <div className="luxury-container px-6 md:px-8 pt-8 md:pt-16 pb-12 overflow-y-auto max-h-[calc(100vh-60px)]">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
                {menuSections.map((section, si) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + si * 0.06, duration: 0.4, ease: "easeOut" }}
                  >
                    <p className="font-body text-[10px] tracking-[0.15em] uppercase text-primary-foreground/30 mb-5">
                      {section.title}
                    </p>
                    <div className="space-y-3.5">
                      {section.links.map((link) =>
                        link.isAnchor ? (
                          <button
                            key={link.label}
                            onClick={() => handleAnchorClick(link.to.replace("/", ""))}
                            className="block font-body text-[13px] tracking-[0.01em] text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-300"
                          >
                            {link.label}
                          </button>
                        ) : (
                          <Link
                            key={link.label}
                            to={link.to}
                            onClick={() => setMenuOpen(false)}
                            className="block font-body text-[13px] tracking-[0.01em] text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-300"
                          >
                            {link.label}
                          </Link>
                        )
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom subtle line */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="mt-16 pt-6 border-t border-primary-foreground/10"
              >
                <p className="font-body text-[10px] tracking-[0.12em] uppercase text-primary-foreground/20">
                  Board-Certified Prosthodontist · New Jersey
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SiteNavigation;
