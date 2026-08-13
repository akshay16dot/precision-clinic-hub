import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroPortrait from "@/assets/dr-parmar-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-background overflow-hidden">
      {/* ── Mobile: warm portrait band that melts into the page ── */}
      <div className="lg:hidden relative w-full h-[52vh] min-h-[340px] mt-[78px] sm:mt-[86px]">
        <img
          src={heroPortrait}
          alt="Dr. Akshay Parmar, board-certified prosthodontist in Hamilton Township, NJ"
          className="absolute inset-0 w-full h-full object-cover object-[center_20%]"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, hsl(40 20% 98% / 0.0) 55%, hsl(40 20% 98% / 0.65) 82%, hsl(40 20% 98%) 100%)",
          }}
        />
      </div>

      <div className="lg:grid lg:grid-cols-[54%_46%] lg:min-h-screen">
        {/* ── Copy ── */}
        <div className="flex flex-col justify-center px-6 sm:px-10 lg:pl-16 xl:pl-24 lg:pr-10 pt-8 pb-16 sm:pb-20 lg:pt-40 lg:pb-24 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-body text-[10px] sm:text-[11px] tracking-[0.32em] uppercase text-charcoal-light mb-6 sm:mb-8">
              Board-Certified Prosthodontist · Hamilton Township, NJ
            </p>

            <h1 className="font-display font-light text-navy tracking-tight leading-[1.04] text-[38px] sm:text-[50px] lg:text-[58px] xl:text-[68px] mb-5 sm:mb-6">
              Rebuilding smiles
              <br />
              that feel <span className="italic">like your own.</span>
            </h1>

            <p className="font-body text-[9.5px] sm:text-[10.5px] tracking-[0.2em] sm:tracking-[0.24em] uppercase text-navy/60 font-medium leading-loose mb-6 sm:mb-8">
              <span className="block sm:inline">Prosthodontics &nbsp;·&nbsp; Implants</span>
              <span className="hidden sm:inline"> &nbsp;·&nbsp; </span>
              <span className="block sm:inline">All-on-4 &nbsp;·&nbsp; Aesthetics</span>
              <span className="hidden sm:inline"> &nbsp;·&nbsp; </span>
              <span className="block sm:inline">Smile Reconstruction &nbsp;·&nbsp; Maxillofacial</span>
            </p>

            <p className="font-body text-[14px] sm:text-[15px] text-charcoal-light font-light leading-relaxed max-w-md mx-auto lg:mx-0 mb-9 sm:mb-11">
              Dental implants, All-on-4 and All-on-X full-arch care, veneers, full-mouth
              reconstruction and maxillofacial prosthetics, coordinated by one
              specialist-led team from surgery through final teeth and maintenance.
              All in one Hamilton office when clinically appropriate.
            </p>

            <div className="flex flex-col items-center lg:items-start gap-5">
              <Link
                to="/contact"
                className="cta-tactile inline-block px-12 py-[18px] bg-navy text-primary-foreground font-body text-[12px] tracking-[0.25em] uppercase font-medium transition-all duration-300 hover:bg-navy/90 shadow-[0_10px_30px_-10px_hsl(220_45%_18%/0.45)] w-full sm:w-auto text-center"
              >
                Book a Consultation
              </Link>

              <Link
                to="/clinical-assessment"
                className="font-body text-[11px] tracking-[0.14em] uppercase text-charcoal-light/75 hover:text-navy transition-colors duration-300 border-b border-charcoal-light/25 hover:border-navy/40 pb-0.5"
              >
                Not ready? Start with a 2-minute online assessment
              </Link>
            </div>

            <div className="mt-10 sm:mt-12 pt-6 border-t border-divider max-w-md mx-auto lg:mx-0">
              <p className="font-body text-[9.5px] sm:text-[10px] tracking-[0.22em] uppercase text-charcoal-light/60 leading-loose">
                Trained at Memorial Sloan Kettering &nbsp;·&nbsp; Former NYU Faculty
                &nbsp;·&nbsp; (609) 585-1616
              </p>
            </div>
          </motion.div>
        </div>

        {/* ── Desktop: full-height portrait, melting into the ivory field ── */}
        <div className="hidden lg:block relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <img
              src={heroPortrait}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover object-[center_25%]"
            />
            {/* Blend the photo's left edge into the page field */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, hsl(40 20% 98%) 0%, hsl(40 20% 98% / 0.35) 12%, transparent 30%)",
              }}
            />
            {/* Soften the bottom so the credential strip reads cleanly */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, transparent 78%, hsl(40 20% 98% / 0.55) 100%)",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
