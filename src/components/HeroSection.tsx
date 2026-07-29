import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import logoAP from "@/assets/logo-ap.png";
import heroPortrait from "@/assets/dr-parmar-hero.jpg";

const rotatingQuotes = [
  { text: "I can finally eat, smile, and speak without thinking twice. The implants feel like my own teeth.", label: "Full-Arch Patient" },
  { text: "My veneers look so natural that even close friends couldn't tell anything had changed.", label: "Aesthetic Patient" },
  { text: "After years of avoiding dentists, Dr. Parmar gave me back a smile I actually trust.", label: "Reconstructive Patient" },
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
              "linear-gradient(145deg, hsl(220 32% 8% / 0.96) 0%, hsl(220 24% 11% / 0.88) 40%, hsl(218 22% 13% / 0.89) 70%, hsl(220 32% 8% / 0.97) 100%)",
          }}
        />
        {/* Subtle luminosity behind headline region */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 55% 45%, hsl(220 20% 18% / 0.12) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, transparent 45%, hsl(220 30% 7% / 0.99) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 hero-min-h flex flex-col justify-between px-5 sm:px-8 md:px-12 lg:px-24">
        <div className="pt-44 sm:pt-48 md:pt-52 lg:pt-56" />

        {/* Main composition */}
        <div className="flex-1 flex items-center py-6 md:py-8">
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
                Dental Implants, Veneers &amp; Full-Mouth Reconstruction in New Jersey
              </h1>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.3 }}
              >
                <p className="font-display text-[30px] sm:text-[38px] md:text-[46px] lg:text-[3.6rem] xl:text-[4.5rem] font-light text-primary-foreground leading-[0.98] tracking-tight mb-4 sm:mb-6 lg:mb-7" style={{ textShadow: '0 1px 30px hsl(220 30% 8% / 0.5)' }}>
                  Rebuilding
                  <br />
                  Smiles That Feel
                  <br />
                  <span className="italic">Like Your Own</span>
                </p>

                <p className="font-body text-[10px] md:text-xs tracking-[0.3em] uppercase text-primary-foreground/80 leading-relaxed mb-2 lg:mb-4 max-w-md mx-auto lg:mx-0">
                  Dr. Akshay Parmar &nbsp;·&nbsp; Board-Certified Prosthodontist
                </p>

                <p className="font-body text-[12px] sm:text-[12px] md:text-[13px] text-primary-foreground/75 font-light leading-relaxed mb-7 sm:mb-10 lg:mb-14 max-w-md mx-auto lg:mx-0">
                  Dental implants, veneers, and full-mouth reconstruction for patients who want a result that lasts. Specialist care in Hamilton Township, NJ.
                </p>

                {/* Consultation Pathways — clearer hierarchy */}
                <div className="flex flex-col gap-3 sm:gap-4 justify-center lg:justify-start mb-8 sm:mb-10 lg:mb-12 max-w-[360px] sm:max-w-md mx-auto lg:mx-0">
                  {/* Primary: Schedule Consultation */}
                  <Link
                    to="/contact"
                    onClick={(e) => e.stopPropagation()}
                    className="cta-tactile inline-block w-full px-8 sm:px-10 py-4 bg-primary-foreground text-navy font-body text-[12px] tracking-[0.25em] uppercase font-medium transition-all duration-300 hover:bg-primary-foreground/90 text-center shadow-[0_8px_24px_-8px_hsl(220_30%_8%/0.5)]"
                  >
                    Schedule Consultation
                  </Link>

                  {/* Secondary row: two equal patient paths */}
                  <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                    <Link
                      to="/clinical-assessment"
                      onClick={(e) => e.stopPropagation()}
                      className="cta-tactile inline-block w-full px-3 sm:px-5 py-3.5 border border-primary-foreground/30 text-primary-foreground/85 font-body text-[10px] tracking-[0.18em] uppercase transition-all duration-300 hover:bg-primary-foreground hover:text-navy hover:border-primary-foreground text-center"
                    >
                      Online Assessment
                    </Link>
                    <Link
                      to="/virtual-consultation"
                      onClick={(e) => e.stopPropagation()}
                      className="cta-tactile inline-block w-full px-3 sm:px-5 py-3.5 border border-primary-foreground/30 text-primary-foreground/85 font-body text-[10px] tracking-[0.18em] uppercase transition-all duration-300 hover:bg-primary-foreground hover:text-navy hover:border-primary-foreground text-center"
                    >
                      Virtual Consult
                    </Link>
                  </div>

                  {/* Reassurance microcopy */}
                  <p className="font-body text-[10px] text-primary-foreground/55 leading-relaxed text-center lg:text-left mt-1">
                    Not sure where to start? Begin with a short online assessment, no commitment required.
                  </p>
                </div>

                {/* Rotating testimonial */}
                <div className="max-w-lg mx-auto lg:mx-0">
                  <p className="font-body text-[9px] tracking-[0.3em] uppercase text-primary-foreground/55 mb-3">
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
                        <p className="font-body text-[11px] md:text-xs text-primary-foreground/70 font-light italic leading-relaxed">
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
          <span className="font-body text-[9px] tracking-[0.15em] uppercase text-primary-foreground/40 italic">
            1544 Kuser Rd, Suite C3, Hamilton Township, NJ 08619
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
