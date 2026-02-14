import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background">
      <div className="relative z-10 luxury-container text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-xs tracking-[0.35em] uppercase text-charcoal-light mb-10"
        >
          Board-Certified Prosthodontist
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mb-6"
        >
          <h1 className="sr-only">Board-Certified Prosthodontist &amp; Implant Specialist in New Jersey</h1>
          <p className="font-display text-6xl md:text-8xl lg:text-9xl font-light tracking-tight text-navy leading-[0.95]">
            Dr. Akshay Parmar
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-body text-sm md:text-base text-charcoal-light tracking-wide max-w-xl mx-auto mb-16 font-light"
        >
          Advanced Implant &amp; Prosthodontic Rehabilitation
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.1 }}
          className="mb-16"
        >
          <div className="w-12 h-px bg-navy/30 mx-auto mb-12" />
          <p className="font-display text-2xl md:text-3xl lg:text-4xl font-light italic text-charcoal tracking-tight">
            Rehabilitation Without Compromise
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
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
        transition={{ delay: 2, duration: 1 }}
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
