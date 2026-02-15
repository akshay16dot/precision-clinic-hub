import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section
      className="section-padding"
      style={{
        background: "linear-gradient(180deg, hsl(40 10% 94%) 0%, hsl(40 12% 93%) 100%)",
      }}
    >
      <div className="luxury-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="max-w-2xl mx-auto"
        >
          <div className="w-12 h-px bg-navy mx-auto mb-10" />

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-navy mb-6">
            Begin Your
            <br />
            <span className="italic">Rehabilitation Journey</span>
          </h2>

          <p className="font-body text-sm text-charcoal-light font-light mb-12 max-w-md mx-auto leading-relaxed">
            Every case begins with a thorough evaluation and a commitment to clinical excellence.
          </p>

          <Link
            to="/contact"
            className="inline-block px-12 py-4 bg-navy text-primary-foreground font-body text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:opacity-90"
          >
            Schedule Consultation
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
