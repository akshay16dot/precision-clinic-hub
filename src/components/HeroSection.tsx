import { motion } from "framer-motion";
import logoAP from "@/assets/logo-ap.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background py-20">
      <div className="relative z-10 luxury-container text-center">
        <div className="mb-20 md:mb-28">
          <h1 className="sr-only">Board-Certified Prosthodontist &amp; Implant Specialist in New Jersey</h1>
          <img src={logoAP} alt="Dr. Akshay Parmar — Board-Certified Prosthodontist" className="h-72 md:h-96 lg:h-[28rem] mx-auto" />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-body text-sm md:text-base text-charcoal-light tracking-wide max-w-xl mx-auto mb-20 font-light"
        >
          Advanced Implant &amp; Prosthodontic Rehabilitation
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.1 }}
          className="mb-20"
        >
          <div className="w-12 h-px bg-navy/20 mx-auto mb-14" />
          <p className="font-display text-2xl md:text-3xl lg:text-4xl font-light italic text-charcoal tracking-tight">
            Rehabilitation Without Compromise
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-col sm:flex-row gap-5 justify-center"
        >
          <a
            href="#services"
            className="inline-block px-12 py-4 border border-navy bg-navy text-primary-foreground font-body text-[11px] tracking-[0.25em] uppercase transition-all duration-300 hover:bg-transparent hover:text-navy"
          >
            For Patients
          </a>
          <a
            href="#education"
            className="inline-block px-12 py-4 border border-charcoal-light/30 text-charcoal font-body text-[11px] tracking-[0.25em] uppercase transition-all duration-300 hover:border-navy hover:text-navy"
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
