import { motion } from "framer-motion";
import logoAP from "@/assets/logo-ap.png";
import heroClinical from "@/assets/hero-clinical.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Tonal gradient base */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(160deg, hsl(220 18% 10%) 0%, hsl(220 20% 14%) 35%, hsl(220 16% 17%) 65%, hsl(218 14% 13%) 100%)",
          }}
        />
        {/* Subtle image overlay for texture */}
        <img
          src={heroClinical}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-[0.07] mix-blend-luminosity"
        />
      </div>

      {/* Content grid */}
      <div className="relative z-10 min-h-screen flex flex-col justify-between px-6 md:px-12 lg:px-20">
        {/* Top bar */}
        <div className="pt-8 md:pt-12 flex items-center justify-between">
          <p className="font-body text-[10px] tracking-[0.4em] uppercase text-primary-foreground/40">
            Board-Certified Prosthodontist
          </p>
          <p className="font-body text-[10px] tracking-[0.4em] uppercase text-primary-foreground/40">
            New Jersey
          </p>
        </div>

        {/* Main composition */}
        <div className="flex-1 flex items-center">
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-0 items-center">
            {/* Logo — dominant left anchor */}
            <div className="lg:col-span-5 flex items-center justify-center lg:justify-center">
              <img
                src={logoAP}
                alt="Dr. Akshay Parmar — Board-Certified Prosthodontist"
                className="w-[90%] lg:w-full lg:scale-[1.8] object-contain brightness-0 invert opacity-[0.97]"
              />
            </div>

            {/* Typography block — right */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <h1 className="sr-only">
                Board-Certified Prosthodontist &amp; Implant Specialist in New Jersey
              </h1>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <p className="font-body text-[10px] md:text-xs tracking-[0.4em] uppercase text-primary-foreground/50 mb-6 md:mb-8">
                  Advanced Rehabilitation
                </p>

                <p className="font-display text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-primary-foreground leading-[0.9] tracking-tight mb-6 md:mb-8">
                  Implant &amp;
                  <br />
                  Prosthodontic
                  <br />
                  <span className="italic">Precision</span>
                </p>

                <div className="w-16 h-px bg-primary-foreground/20 mx-auto lg:mx-0 mb-6 md:mb-8" />

                <p className="font-display text-lg md:text-xl lg:text-2xl font-light italic text-primary-foreground/60 tracking-tight mb-10 md:mb-14">
                  Rehabilitation Without Compromise
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
        <div className="pb-8 md:pb-12 flex items-end justify-between">
          <p className="font-body text-[10px] tracking-[0.3em] uppercase text-primary-foreground/25">
            © {new Date().getFullYear()}
          </p>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-px h-10 bg-primary-foreground/20"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
