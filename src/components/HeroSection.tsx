import { motion } from "framer-motion";
import logoAP from "@/assets/logo-ap.png";
import heroClinical from "@/assets/hero-clinical.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row bg-background">
      {/* Left: Brand Identity */}
      <div className="flex-1 flex items-center justify-center px-8 py-20 lg:py-0" style={{ background: 'linear-gradient(160deg, hsl(40 10% 95%) 0%, hsl(40 20% 98%) 100%)' }}>
        <div className="max-w-md text-center lg:text-left">
          <h1 className="sr-only">Board-Certified Prosthodontist &amp; Implant Specialist in New Jersey</h1>

          <img
            src={logoAP}
            alt="Dr. Akshay Parmar — Board-Certified Prosthodontist"
            className="h-56 md:h-72 lg:h-80 mx-auto lg:mx-0 mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-body text-xs md:text-sm text-charcoal-light tracking-[0.2em] font-light mb-10"
          >
            Advanced Implant &amp; Prosthodontic Rehabilitation
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mb-12"
          >
            <div className="w-10 h-px bg-navy/20 mx-auto lg:mx-0 mb-8" />
            <p className="font-display text-2xl md:text-3xl font-light italic text-charcoal tracking-tight">
              Rehabilitation Without Compromise
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <a
              href="#services"
              className="inline-block px-10 py-4 border border-navy bg-navy text-primary-foreground font-body text-[11px] tracking-[0.25em] uppercase transition-all duration-300 hover:bg-transparent hover:text-navy"
            >
              For Patients
            </a>
            <a
              href="#education"
              className="inline-block px-10 py-4 border border-charcoal-light/30 text-charcoal font-body text-[11px] tracking-[0.25em] uppercase transition-all duration-300 hover:border-navy hover:text-navy"
            >
              For Dentists
            </a>
          </motion.div>
        </div>
      </div>

      {/* Right: Visual Element */}
      <div className="hidden lg:block lg:w-[45%] relative overflow-hidden">
        <img
          src={heroClinical}
          alt="Precision prosthodontic rehabilitation"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background/10" />
      </div>

      {/* Mobile: subtle image strip */}
      <div className="lg:hidden h-48 relative overflow-hidden">
        <img
          src={heroClinical}
          alt="Precision prosthodontic rehabilitation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 to-transparent" />
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-10 bg-charcoal-light/30"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
