import { motion } from "framer-motion";
import heroImage from "@/assets/hero-dental.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Precision dental instruments in a modern clinic"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      <div className="relative z-10 luxury-container text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-xs tracking-[0.35em] uppercase text-charcoal-light mb-8"
        >
          Board-Certified Prosthodontist
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-navy leading-[0.95] mb-8"
        >
          Precision. Function.
          <br />
          <span className="italic font-light">Rehabilitation.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-body text-sm md:text-base text-charcoal-light tracking-wide max-w-xl mx-auto mb-14 font-light"
        >
          Advanced Prosthodontics, Implant Rehabilitation
          <br className="hidden md:block" />
          & Clinical Education
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#services"
            className="inline-block px-10 py-4 bg-navy text-primary-foreground font-body text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:opacity-90"
          >
            For Patients
          </a>
          <a
            href="#education"
            className="inline-block px-10 py-4 border border-navy text-navy font-body text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:bg-navy hover:text-primary-foreground"
          >
            For Dentists
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-12 bg-charcoal-light/30"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
