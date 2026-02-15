import { motion } from "framer-motion";
import logoAP from "@/assets/logo-ap.png";
import heroPortrait from "@/assets/dr-parmar-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* Background portrait — pushed left, subdued atmospheric element */}
      <div className="absolute inset-0">
        <img
          src={heroPortrait}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-[8%_top]"
          style={{
            filter: "brightness(0.25) contrast(1.08) saturate(0.05) hue-rotate(-5deg) blur(1px)",
            transform: "scale(1.08)",
          }}
        />
        {/* Cold navy overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(145deg, hsl(220 30% 10% / 0.94) 0%, hsl(220 22% 14% / 0.85) 45%, hsl(218 20% 16% / 0.86) 75%, hsl(220 30% 10% / 0.96) 100%)",
          }}
        />
        {/* Bottom fade */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, transparent 50%, hsl(220 28% 10% / 0.98) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-[90vh] flex flex-col justify-between px-6 md:px-12 lg:px-24">
        {/* Top spacer for nav */}
        <div className="pt-20 md:pt-28" />

        {/* Main composition */}
        <div className="flex-1 flex items-center py-6">
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center">
            {/* Left — Logo */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center">
              <img
                src={logoAP}
                alt="Dr. Akshay Parmar, Board-Certified Prosthodontist"
                className="w-[65%] md:w-[55%] lg:w-[75%] lg:scale-[2.5] object-contain"
                style={{
                  filter: "invert(1)",
                }}
              />
            </div>

            {/* Spacer */}
            <div className="hidden lg:block lg:col-span-1" />

            {/* Right — Typography */}
            <div className="lg:col-span-7 text-center lg:text-left lg:pl-6">
              <h1 className="sr-only">
                Board-Certified Prosthodontist &amp; Implant Specialist in New Jersey
              </h1>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.3 }}
              >
                <p className="font-display text-4xl md:text-5xl lg:text-[3.8rem] xl:text-[4.5rem] font-light text-primary-foreground leading-[0.93] tracking-tight mb-7">
                  Advanced
                  <br />
                  Prosthodontics &amp;
                  <br />
                  <span className="italic">Implant Reconstruction</span>
                </p>

                <p className="font-body text-[10px] md:text-xs tracking-[0.3em] uppercase text-primary-foreground/35 leading-relaxed mb-4 max-w-md">
                  Board-Certified Prosthodontist
                </p>

                <p className="font-body text-[11px] md:text-xs tracking-[0.2em] uppercase text-primary-foreground/40 leading-relaxed mb-10 max-w-lg">
                  Dental Implants &nbsp;·&nbsp; Immediate Implants &nbsp;·&nbsp; Veneers &nbsp;·&nbsp; Full-Arch Rehabilitation
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a
                    href="#services"
                    className="inline-block px-10 py-4 border border-primary-foreground/25 bg-primary-foreground text-navy font-body text-[11px] tracking-[0.25em] uppercase transition-all duration-300 hover:bg-transparent hover:text-primary-foreground"
                  >
                    For Patients
                  </a>
                  <a
                    href="#education"
                    className="inline-block px-10 py-4 border border-primary-foreground/25 text-primary-foreground/70 font-body text-[11px] tracking-[0.25em] uppercase transition-all duration-300 hover:border-primary-foreground/50 hover:text-primary-foreground"
                  >
                    For Dentists
                  </a>
                </div>

                <p className="font-body text-[10px] tracking-[0.2em] uppercase text-primary-foreground/22 mt-10 text-center lg:text-left">
                  Serving patients across New Jersey
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pb-5 md:pb-6 flex items-end justify-between">
          <p className="font-body text-[10px] tracking-[0.3em] uppercase text-primary-foreground/20">
            © {new Date().getFullYear()}
          </p>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            className="w-px h-7 bg-primary-foreground/15"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
