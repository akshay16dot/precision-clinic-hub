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
        <div className="luxury-container flex items-center justify-between py-5 px-6 md:px-10">
          {/* Logo */}
          <Link to="/" className="hover:opacity-80 transition-opacity duration-300 shrink-0">
            <img
              src={logoAP}
              alt="Dr. Akshay Parmar"
              className={`transition-all duration-500 ${
                scrolled ? "h-14 md:h-16" : "h-16 md:h-[4.5rem]"
              }`}
              style={{ filter: scrolled ? "none" : "invert(1)" }}
            />
          </Link>

          {/* Menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`p-3 -mr-3 rounded-sm transition-all duration-300 ${
              scrolled
                ? "text-muted-foreground hover:text-navy hover:bg-muted/50"
                : "text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/5"
            }`}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X size={24} strokeWidth={1.2} />
            ) : (
              <Menu size={24} strokeWidth={1.2} />
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
            <div className="luxury-container flex justify-end pt-5 px-6 md:px-10">
              <button
                onClick={() => setMenuOpen(false)}
                className="p-3 -mr-3 text-primary-foreground/50 hover:text-primary-foreground transition-all duration-300 hover:bg-primary-foreground/5 rounded-sm"
                aria-label="Close menu"
              >
                <X size={24} strokeWidth={1.2} />
              </button>
            </div>

            {/* Menu content */}
            <div className="luxury-container px-6 md:px-10 pt-12 md:pt-20 pb-12 overflow-y-auto max-h-[calc(100vh-70px)]">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
                {menuSections.map((section, si) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.12 + si * 0.07, duration: 0.5, ease: "easeOut" }}
                  >
                    <p className="font-body text-[10px] tracking-[0.2em] uppercase text-primary-foreground/25 mb-6">
                      {section.title}
                    </p>
                    <div className="space-y-4">
                      {section.links.map((link) =>
                        link.isAnchor ? (
                          <button
                            key={link.label}
                            onClick={() => handleAnchorClick(link.to.replace("/", ""))}
                            className="block font-body text-[13px] tracking-[0.02em] text-primary-foreground/55 hover:text-primary-foreground transition-colors duration-300"
                          >
                            {link.label}
                          </button>
                        ) : (
                          <Link
                            key={link.label}
                            to={link.to}
                            onClick={() => setMenuOpen(false)}
                            className="block font-body text-[13px] tracking-[0.02em] text-primary-foreground/55 hover:text-primary-foreground transition-colors duration-300"
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
                transition={{ delay: 0.55, duration: 0.4 }}
                className="mt-20 pt-6 border-t border-primary-foreground/8"
              >
                <p className="font-body text-[10px] tracking-[0.15em] uppercase text-primary-foreground/20">
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
