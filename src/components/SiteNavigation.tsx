import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoAP from "@/assets/logo-ap.png";

interface NavLink {
  to: string;
  label: string;
  isAnchor?: boolean;
  hash?: string;
}

interface NavItem {
  label: string;
  to?: string;
  links?: NavLink[];
}

const navItems: NavItem[] = [
  {
    label: "Implants",
    links: [
      { to: "/dental-implants-new-jersey", label: "Dental Implants" },
      { to: "/immediate-implant-rehabilitation", label: "Immediate Implants" },
      { to: "/full-arch-implants-new-jersey", label: "Full-Arch Rehabilitation" },
      { to: "/clinical-cases", label: "Clinical Cases" },
    ],
  },
  {
    label: "Aesthetics",
    links: [
      { to: "/veneers-aesthetic-reconstruction", label: "Veneers & Smile Reconstruction" },
      { to: "/tooth-wear-rehabilitation", label: "Full Mouth Rehabilitation" },
      { to: "/aesthetic-dentistry", label: "Gum & Soft Tissue Enhancement" },
    ],
  },
  {
    label: "Specialized Care",
    links: [
      { to: "/maxillofacial-rehabilitation", label: "Maxillofacial Prosthodontics" },
      { to: "/maxillofacial-rehabilitation", label: "Oncology & Reconstruction", hash: "#oncology" },
      { to: "/maxillofacial-rehabilitation", label: "Medically Complex Patients", hash: "#complex" },
    ],
  },
  {
    label: "Patients",
    links: [
      { to: "/clinical-assessment", label: "Clinical Self-Assessment" },
      { to: "/testimonials", label: "Patient Testimonials" },
      { to: "/leave-review", label: "Leave a Review" },
      { to: "/patient-education", label: "Patient Education" },
      { to: "/contact", label: "Consultations" },
    ],
  },
  {
    label: "Education",
    links: [
      { to: "/#education", label: "For Dentists", isAnchor: true },
      { to: "/professional-education", label: "Courses & Live Programs" },
      { to: "/education", label: "STABLE IMPLANT Protocol™", hash: "#stable" },
      { to: "/professional-testimonials", label: "Peer Feedback" },
    ],
  },
  {
    label: "About",
    to: "/about",
  },
  {
    label: "Contact",
    to: "/contact",
  },
];

const megaMenuSections: { title: string; links: NavLink[] }[] = [
  {
    title: "Implants",
    links: [
      { to: "/dental-implants-new-jersey", label: "Dental Implants" },
      { to: "/immediate-implant-rehabilitation", label: "Immediate Implants" },
      { to: "/full-arch-implants-new-jersey", label: "Full-Arch Rehabilitation" },
      { to: "/clinical-cases", label: "Clinical Cases" },
    ],
  },
  {
    title: "Aesthetics",
    links: [
      { to: "/veneers-aesthetic-reconstruction", label: "Veneers & Smile Reconstruction" },
      { to: "/tooth-wear-rehabilitation", label: "Full Mouth Rehabilitation" },
      { to: "/aesthetic-dentistry", label: "Gum & Soft Tissue Enhancement" },
    ],
  },
  {
    title: "Specialized Care",
    links: [
      { to: "/maxillofacial-rehabilitation", label: "Maxillofacial Prosthodontics" },
      { to: "/maxillofacial-rehabilitation", label: "Oncology & Reconstruction", hash: "#oncology" },
      { to: "/maxillofacial-rehabilitation", label: "Medically Complex Patients", hash: "#complex" },
    ],
  },
  {
    title: "Patients",
    links: [
      { to: "/clinical-assessment", label: "Clinical Self-Assessment" },
      { to: "/testimonials", label: "Patient Testimonials" },
      { to: "/leave-review", label: "Leave a Review" },
      { to: "/patient-education", label: "Patient Education" },
      { to: "/contact", label: "Consultations" },
    ],
  },
  {
    title: "Education",
    links: [
      { to: "/professional-education", label: "Courses & Live Programs" },
      { to: "/education", label: "STABLE IMPLANT Protocol™", hash: "#stable" },
      { to: "/professional-testimonials", label: "Peer Feedback" },
    ],
  },
  {
    title: "About & Contact",
    links: [
      { to: "/about", label: "About Dr. Parmar" },
      { to: "/about", label: "Treatment Philosophy", hash: "#philosophy" },
      { to: "/contact", label: "Contact" },
    ],
  },
];

const SiteNavigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();

  // Only use transparent/white-text mode on homepage
  const isHomepage = location.pathname === "/";
  const showSolid = !isHomepage || scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

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
    setActiveDropdown(null);
    if (location.pathname === "/") {
      const el = document.querySelector(anchor);
      el?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/" + anchor;
    }
  };

  const handleDropdownEnter = (label: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setActiveDropdown(label);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out backdrop-blur-3xl backdrop-saturate-[1.8] ${
          showSolid
            ? "bg-background/55 border-b border-border/20 shadow-[0_1px_12px_-4px_rgba(0,0,0,0.08),inset_0_1px_0_0_rgba(255,255,255,0.4)]"
            : "bg-[hsl(220_30%_8%/0.3)] border-b border-primary-foreground/8 shadow-[0_1px_10px_-4px_rgba(0,0,0,0.15),inset_0_1px_0_0_rgba(255,255,255,0.06)]"
        }`}
      >
        <div className="luxury-container flex items-center justify-between py-3 sm:py-4 px-6 md:px-10">
          {/* Logo */}
            <Link to="/" className="hover:opacity-80 transition-opacity duration-300 shrink-0">
            <img
              src={logoAP}
              alt="Dr. Akshay Parmar"
              className={`transition-all duration-500 ${
                showSolid ? "h-24 sm:h-28 md:h-28 lg:h-28" : "h-28 sm:h-32 md:h-32 lg:h-36"
              }`}
              style={{ filter: showSolid ? "none" : "invert(1) brightness(2)" }}
            />
          </Link>

          {/* Desktop nav items */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.links && handleDropdownEnter(item.label)}
                onMouseLeave={handleDropdownLeave}
              >
                {item.to && !item.links ? (
                  <Link
                    to={item.to}
                    className={`px-3 xl:px-4 py-2 font-body text-[10px] xl:text-[11px] tracking-[0.2em] uppercase transition-colors duration-300 ${
                      showSolid
                        ? "text-muted-foreground hover:text-navy"
                        : "text-primary-foreground/50 hover:text-primary-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    className={`px-3 xl:px-4 py-2 font-body text-[10px] xl:text-[11px] tracking-[0.2em] uppercase transition-colors duration-300 ${
                      showSolid
                        ? "text-muted-foreground hover:text-navy"
                        : "text-primary-foreground/50 hover:text-primary-foreground"
                    }`}
                  >
                    {item.label}
                  </button>
                )}

                {/* Dropdown */}
                <AnimatePresence>
                  {item.links && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 4 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-1 min-w-[260px] bg-background border border-border/60 rounded-sm shadow-[0_8px_30px_-8px_rgba(0,0,0,0.12)] z-[70] py-4 px-1"
                    >
                      {item.links.map((link) =>
                        link.isAnchor ? (
                          <button
                            key={link.label}
                            onClick={() => handleAnchorClick(link.to.replace("/", ""))}
                            className="block w-full text-left px-5 py-3 font-body text-[11px] tracking-[0.15em] uppercase text-navy/70 hover:text-navy hover:bg-muted/40 transition-colors duration-200"
                          >
                            {link.label}
                          </button>
                        ) : (
                          <Link
                            key={link.label}
                            to={link.to + (link.hash || "")}
                            className="block px-5 py-3 font-body text-[11px] tracking-[0.15em] uppercase text-navy/70 hover:text-navy hover:bg-muted/40 transition-colors duration-200"
                          >
                            {link.label}
                          </Link>
                        )
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden p-3 -mr-3 rounded-sm transition-all duration-300 ${
              showSolid
                ? "text-muted-foreground hover:text-navy hover:bg-muted/50"
                : "text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/5"
            }`}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} strokeWidth={1.2} /> : <Menu size={24} strokeWidth={1.2} />}
          </button>
        </div>
      </nav>

      {/* Full overlay mega menu — brighter navy */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 z-[60]"
            style={{ backgroundColor: "hsl(220 36% 26% / 0.98)" }}
          >
            {/* Close button */}
            <div className="luxury-container flex justify-end pt-5 px-6 md:px-10">
              <button
                onClick={() => setMenuOpen(false)}
                className="p-3 -mr-3 text-primary-foreground/60 hover:text-primary-foreground transition-all duration-300 hover:bg-primary-foreground/8 rounded-sm"
                aria-label="Close menu"
              >
                <X size={24} strokeWidth={1.2} />
              </button>
            </div>

            {/* Menu content */}
            <div className="luxury-container px-6 md:px-10 pt-10 md:pt-16 pb-12 overflow-y-auto max-h-[calc(100vh-70px)]">
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-12 md:gap-16 lg:gap-20">
                {megaMenuSections.map((section, si) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.12 + si * 0.06, duration: 0.5, ease: "easeOut" }}
                  >
                    <p className="font-body text-[10px] tracking-[0.25em] uppercase text-primary-foreground/45 mb-7">
                      {section.title}
                    </p>
                    <div className="space-y-4 sm:space-y-5">
                      {section.links.map((link) =>
                        link.isAnchor ? (
                          <button
                            key={link.label}
                            onClick={() => handleAnchorClick(link.to.replace("/", ""))}
                            className="block font-body text-[12px] sm:text-[13px] tracking-[0.02em] text-primary-foreground/75 hover:text-primary-foreground transition-colors duration-300 min-h-[44px] flex items-center"
                          >
                            {link.label}
                          </button>
                        ) : (
                          <Link
                            key={link.label}
                            to={link.to + (link.hash || "")}
                            onClick={() => setMenuOpen(false)}
                            className="block font-body text-[12px] sm:text-[13px] tracking-[0.02em] text-primary-foreground/75 hover:text-primary-foreground transition-colors duration-300 min-h-[44px] flex items-center"
                          >
                            {link.label}
                          </Link>
                        )
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom line */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55, duration: 0.4 }}
                className="mt-24 pt-6 border-t border-primary-foreground/12"
              >
                <p className="font-body text-[10px] tracking-[0.15em] uppercase text-primary-foreground/45">
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
