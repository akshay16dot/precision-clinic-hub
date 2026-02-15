import { motion } from "framer-motion";
import logoAP from "@/assets/logo-ap.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20" style={{ background: 'linear-gradient(180deg, hsl(40 10% 95%) 0%, hsl(40 20% 98%) 50%, hsl(0 0% 100%) 100%)' }}>
      <div className="relative z-10 luxury-container text-center">
        <div className="mb-6 md:mb-8">
          <h1 className="sr-only">Board-Certified Prosthodontist &amp; Implant Specialist in New Jersey</h1>
          <img src={logoAP} alt="Dr. Akshay Parmar — Board-Certified Prosthodontist" className="h-[22rem] md:h-[30rem] lg:h-[34rem] mx-auto" />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-body text-xs md:text-sm text-charcoal-light tracking-[0.2em] max-w-md mx-auto mb-12 font-light"
        >
          Advanced Implant &amp; Prosthodontic Rehabilitation
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mb-14"
        >
          <div className="w-10 h-px bg-navy/20 mx-auto mb-10" />
          <p className="font-display text-2xl md:text-3xl lg:text-4xl font-light italic text-charcoal tracking-tight">
            Rehabilitation Without Compromise
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
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
