import { motion } from "framer-motion";
import logoAP from "@/assets/logo-ap.png";
import heroPortrait from "@/assets/dr-parmar-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] overflow-hidden">
      {/* Background portrait — cold clinical grading */}
      <div className="absolute inset-0">
        <img
          src={heroPortrait}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-[28%_top]"
          style={{
            filter: "brightness(0.3) contrast(1.15) saturate(0.08) hue-rotate(-5deg)",
          }}
        />
        {/* Cold navy overlay — no glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(145deg, hsl(220 30% 10% / 0.88) 0%, hsl(220 22% 14% / 0.72) 45%, hsl(218 20% 16% / 0.78) 75%, hsl(220 30% 10% / 0.92) 100%)",
          }}
        />
        {/* Bottom fade */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, transparent 55%, hsl(220 28% 10% / 0.97) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-[85vh] flex flex-col justify-between px-6 md:px-12 lg:px-20">
        {/* Top bar */}
        <div className="pt-5 md:pt-6 flex items-center justify-between">
          <p className="font-body text-[10px] tracking-[0.4em] uppercase text-primary-foreground/35">
            Board-Certified Prosthodontist
          </p>
          <p className="font-body text-[10px] tracking-[0.4em] uppercase text-primary-foreground/35">
            New Jersey
          </p>
        </div>

        {/* Main composition */}
        <div className="flex-1 flex items-center py-4">
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 items-center">
            {/* Left — Logo — crisp, no glow */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <img
                src={logoAP}
                alt="Dr. Akshay Parmar — Board-Certified Prosthodontist"
                className="w-[75%] md:w-[65%] lg:w-[85%] lg:scale-[2.5] object-contain"
                style={{
                  filter: "brightness(0) invert(1) contrast(2)",
                  imageRendering: "auto",
                  WebkitFontSmoothing: "antialiased",
                }}
              />
            </div>

            {/* Spacer */}
            <div className="hidden lg:block lg:col-span-1" />

            {/* Right — Typography */}
            <div className="lg:col-span-6 text-center lg:text-left lg:pl-4">
              <h1 className="sr-only">
                Board-Certified Prosthodontist &amp; Implant Specialist in New Jersey
              </h1>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.3 }}
              >
                <p className="font-body text-[10px] md:text-xs tracking-[0.4em] uppercase text-primary-foreground/35 mb-3">
                  Board-Certified Prosthodontist
                </p>

                <p className="font-display text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-primary-foreground leading-[0.95] tracking-tight mb-4">
                  Advanced
                  <br />
                  Prosthodontics &amp;
                  <br />
                  <span className="italic">Implant Reconstruction</span>
                </p>

                <p className="font-body text-[11px] md:text-xs tracking-[0.2em] uppercase text-primary-foreground/45 leading-relaxed mb-7 max-w-md">
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
                    className="inline-block px-10 py-4 border border-primary-foreground/15 text-primary-foreground/60 font-body text-[11px] tracking-[0.25em] uppercase transition-all duration-300 hover:border-primary-foreground/40 hover:text-primary-foreground"
                  >
                    For Dentists
                  </a>
                </div>
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
