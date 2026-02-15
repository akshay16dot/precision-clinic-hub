import { motion } from "framer-motion";
import logoAP from "@/assets/logo-ap.png";
import drParmar from "@/assets/dr-parmar-portrait.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* Luxury gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, hsl(220 20% 14%) 0%, hsl(220 18% 18%) 40%, hsl(215 15% 22%) 70%, hsl(220 20% 14%) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 min-h-[90vh] flex flex-col justify-between px-6 md:px-12 lg:px-20">
        {/* Top bar */}
        <div className="pt-6 md:pt-8 flex items-center justify-between">
          <p className="font-body text-[10px] tracking-[0.4em] uppercase text-primary-foreground/40">
            Board-Certified Prosthodontist
          </p>
          <p className="font-body text-[10px] tracking-[0.4em] uppercase text-primary-foreground/40">
            New Jersey
          </p>
        </div>

        {/* Main composition */}
        <div className="flex-1 flex items-center py-6 md:py-8">
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center">
            {/* Left — Logo + Photo */}
            <div className="lg:col-span-5 flex flex-col items-center gap-6">
              <img
                src={logoAP}
                alt="Dr. Akshay Parmar — Board-Certified Prosthodontist"
                className="w-[70%] md:w-[60%] lg:w-[80%] lg:scale-[2.2] object-contain brightness-0 invert opacity-[0.97]"
              />
              <div className="relative mt-8 lg:mt-16">
                <div
                  className="absolute inset-0 rounded-sm"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 0%, hsl(220 20% 14% / 0.6) 100%)",
                  }}
                />
                <img
                  src={drParmar}
                  alt="Dr. Akshay Parmar holding a dental implant"
                  className="w-64 md:w-72 lg:w-80 object-cover rounded-sm"
                  style={{
                    filter: "contrast(1.05) brightness(0.95)",
                  }}
                />
              </div>
            </div>

            {/* Spacer */}
            <div className="hidden lg:block lg:col-span-1" />

            {/* Right — Typography */}
            <div className="lg:col-span-6 text-center lg:text-left lg:pl-4">
              <h1 className="sr-only">
                Board-Certified Prosthodontist &amp; Implant Specialist in New Jersey
              </h1>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <p className="font-body text-[10px] md:text-xs tracking-[0.4em] uppercase text-primary-foreground/40 mb-4">
                  Board-Certified Prosthodontist
                </p>

                <p className="font-display text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-primary-foreground leading-[0.95] tracking-tight mb-5">
                  Advanced
                  <br />
                  Prosthodontics &amp;
                  <br />
                  <span className="italic">Implant Reconstruction</span>
                </p>

                <div className="w-16 h-px bg-primary-foreground/20 mx-auto lg:mx-0 mb-5" />

                <p className="font-body text-[11px] md:text-xs tracking-[0.2em] uppercase text-primary-foreground/50 leading-relaxed mb-8 max-w-md">
                  Dental Implants &nbsp;•&nbsp; Immediate Implants &nbsp;•&nbsp; Veneers &nbsp;•&nbsp; Full-Arch Rehabilitation
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a
                    href="#services"
                    className="inline-block px-10 py-4 border border-primary-foreground/30 bg-primary-foreground text-navy font-body text-[11px] tracking-[0.25em] uppercase transition-all duration-300 hover:bg-transparent hover:text-primary-foreground"
                  >
                    For Patients
                  </a>
                  <a
                    href="#education"
                    className="inline-block px-10 py-4 border border-primary-foreground/20 text-primary-foreground/70 font-body text-[11px] tracking-[0.25em] uppercase transition-all duration-300 hover:border-primary-foreground/50 hover:text-primary-foreground"
                  >
                    For Dentists
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pb-6 md:pb-8 flex items-end justify-between">
          <p className="font-body text-[10px] tracking-[0.3em] uppercase text-primary-foreground/25">
            © {new Date().getFullYear()}
          </p>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-px h-8 bg-primary-foreground/20"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
