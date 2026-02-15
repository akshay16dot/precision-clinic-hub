import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const handleClick = (link: typeof navLinks[0]) => {
    if (link.isAnchor) {
      if (location.pathname === "/") {
        const el = document.querySelector(link.to);
        el?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = "/" + link.to;
      }
      setMenuOpen(false);
    }
  };

  const linkClass = (scrolledState: boolean) =>
    `font-body text-[11px] tracking-[0.08em] uppercase transition-colors duration-300 ${
      scrolledState
        ? "text-muted-foreground hover:text-navy"
        : "text-primary-foreground/50 hover:text-primary-foreground"
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md shadow-[0_1px_0_0_hsl(var(--divider)/0.4)]"
          : "bg-transparent"
      }`}
    >
      <div className="luxury-container flex items-center justify-between py-3.5 px-6 md:px-8">
        {/* Logo */}
        <Link to="/" className="hover:opacity-75 transition-opacity duration-300 shrink-0">
          <img
            src={logoAP}
            alt="Dr. Akshay Parmar"
            className={`transition-all duration-500 ${
              scrolled ? "h-7 md:h-8" : "h-8 md:h-9"
            }`}
            style={{
              filter: scrolled ? "none" : "invert(1)",
            }}
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-6">
          {navLinks.map((link) =>
            link.isAnchor ? (
              <button
                key={link.label}
                onClick={() => handleClick(link)}
                className={linkClass(scrolled)}
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                className={linkClass(scrolled)}
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
              ? "text-muted-foreground hover:text-navy"
              : "text-primary-foreground/60 hover:text-primary-foreground"
          }`}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={18} strokeWidth={1.5} /> : <Menu size={18} strokeWidth={1.5} />}
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
            className="lg:hidden overflow-hidden"
          >
            <div className="bg-background/95 backdrop-blur-md border-t border-divider/30 px-6 py-5 space-y-3.5">
              {navLinks.map((link, i) =>
                link.isAnchor ? (
                  <motion.button
                    key={link.label}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.25 }}
                    onClick={() => handleClick(link)}
                    className="block font-body text-[11px] tracking-[0.1em] uppercase text-muted-foreground hover:text-navy transition-colors duration-300"
                  >
                    {link.label}
                  </motion.button>
                ) : (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.25 }}
                  >
                    <Link
                      to={link.to}
                      onClick={() => setMenuOpen(false)}
                      className="block font-body text-[11px] tracking-[0.1em] uppercase text-muted-foreground hover:text-navy transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default SiteNavigation;
