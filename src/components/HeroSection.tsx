import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import logoAP from "@/assets/logo-ap.png";
import heroPortrait from "@/assets/dr-parmar-hero.jpg";

const rotatingQuotes = [
  { text: "The implants feel completely natural. I can eat and speak with confidence again.", label: "Full-Arch Patient" },
  { text: "The veneers are so natural that even close friends assumed nothing had changed.", label: "Aesthetic Patient" },
  { text: "The result exceeded what I thought was possible. I finally trust my teeth again.", label: "Reconstructive Patient" },
];

const HeroSection = () => {
  const navigate = useNavigate();
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % rotatingQuotes.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative hero-min-h hero-navy-fallback overflow-hidden cursor-pointer group"
      onClick={() => navigate("/clinical-cases")}
      role="link"
      aria-label="View Selected Clinical Work"
    >
      {/* Background portrait */}
      <div className="absolute inset-0">
        <img
          src={heroPortrait}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-[65%_30%] sm:object-[8%_top] hero-bg-portrait"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(145deg, hsl(220 30% 10% / 0.94) 0%, hsl(220 22% 14% / 0.85) 45%, hsl(218 20% 16% / 0.86) 75%, hsl(220 30% 10% / 0.96) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, transparent 50%, hsl(220 28% 10% / 0.98) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 hero-min-h flex flex-col justify-between px-5 sm:px-6 md:px-12 lg:px-24">
        <div className="pt-20 md:pt-28" />

        {/* Main composition */}
        <div className="flex-1 flex items-center py-6">
          <div className="w-full flex flex-col lg:flex-row items-center gap-6 lg:gap-0">
            {/* Left — Logo (hidden on mobile/tablet, shown only on desktop) */}
            <div className="hidden lg:flex lg:w-[33%] flex-shrink-0 items-center justify-center">
              <img
                src={logoAP}
                alt="Dr. Akshay Parmar, Board-Certified Prosthodontist"
                className="w-[75%] lg:scale-[2.5] object-contain"
                style={{ filter: "invert(1)" }}
              />
            </div>

            <div className="hidden lg:block lg:w-[8%]" />

            {/* Right — Typography (full width on mobile/tablet) */}
            <div className="w-full lg:w-[59%] text-center lg:text-left lg:pl-6">
              <h1 className="sr-only">
                Board-Certified Prosthodontist &amp; Implant Specialist in New Jersey
              </h1>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.3 }}
              >
                <p className="font-display text-[34px] sm:text-[44px] md:text-[52px] lg:text-[3.8rem] xl:text-[4.5rem] font-light text-primary-foreground leading-[0.93] tracking-tight mb-6 lg:mb-7">
                  Advanced
                  <br />
                  Prosthodontics &amp;
                  <br />
                  <span className="italic">Implant Reconstruction</span>
                </p>

                <p className="font-body text-[10px] md:text-xs tracking-[0.3em] uppercase text-primary-foreground/60 leading-relaxed mb-3 lg:mb-4 max-w-md mx-auto lg:mx-0">
                  Board-Certified Prosthodontist
                </p>

                <p className="font-body text-[10px] sm:text-[11px] md:text-xs tracking-[0.15em] sm:tracking-[0.2em] uppercase text-primary-foreground/55 leading-relaxed mb-8 lg:mb-10 max-w-lg mx-auto lg:mx-0">
                  Dental Implants &nbsp;·&nbsp; Immediate Implants &nbsp;·&nbsp; Veneers &nbsp;·&nbsp; Full-Arch Rehabilitation
                </p>

                {/* Dual CTAs */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 lg:mb-10 max-w-[340px] sm:max-w-none mx-auto lg:mx-0">
                  <Link
                    to="/clinical-cases"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-block px-8 sm:px-10 py-3.5 border border-primary-foreground/25 bg-primary-foreground text-navy font-body text-[11px] tracking-[0.25em] uppercase transition-all duration-300 hover:bg-transparent hover:text-primary-foreground text-center"
                  >
                    View Clinical Cases
                  </Link>
                  <Link
                    to="/clinical-assessment"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-block px-8 sm:px-10 py-3.5 border border-primary-foreground/25 text-primary-foreground/70 font-body text-[11px] tracking-[0.25em] uppercase transition-all duration-300 hover:border-primary-foreground/50 hover:text-primary-foreground text-center"
                  >
                    Start Clinical Self-Assessment
                  </Link>
                </div>

                {/* Rotating testimonial */}
                <div className="max-w-lg mx-auto lg:mx-0">
                  <p className="font-body text-[9px] tracking-[0.3em] uppercase text-primary-foreground/45 mb-3">
                    Patient Feedback
                  </p>
                  <div className="h-14 sm:h-12 relative overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={quoteIndex}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.5 }}
                      >
                        <p className="font-body text-[11px] md:text-xs text-primary-foreground/60 font-light italic leading-relaxed">
                          "{rotatingQuotes[quoteIndex].text}"
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                  <Link
                    to="/testimonials"
                    onClick={(e) => e.stopPropagation()}
                    className="font-body text-[9px] tracking-[0.2em] uppercase text-primary-foreground/45 hover:text-primary-foreground/70 transition-colors duration-300 mt-1 inline-block"
                  >
                    More Testimonials →
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pb-5 md:pb-6 flex items-end justify-between">
          <p className="font-body text-[10px] tracking-[0.3em] uppercase text-primary-foreground/45">
            © {new Date().getFullYear()}
          </p>
          <span className="font-body text-[10px] tracking-[0.25em] uppercase text-primary-foreground/50 group-hover:text-primary-foreground/70 transition-all duration-500 relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-px after:bg-primary-foreground/40 after:scale-x-0 after:origin-right after:transition-transform after:duration-500 group-hover:after:scale-x-100 group-hover:after:origin-left">
            Explore Clinical Cases
          </span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            className="w-px h-7 bg-primary-foreground/25"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
