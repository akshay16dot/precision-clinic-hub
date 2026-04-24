import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section
      className="section-padding-lg"
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
          <div className="w-12 h-px bg-navy mx-auto mb-10 md:mb-12" />

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-navy mb-6 md:mb-8 leading-[1.05]">
            Ready to Take
            <br />
            <span className="italic">the Next Step?</span>
          </h2>

          <p className="font-body text-sm md:text-base text-charcoal-light font-light mb-10 md:mb-12 max-w-md mx-auto leading-relaxed">
            Choose the path that works best for you. Every consultation begins with a careful, unhurried evaluation.
          </p>

          {/* Three clear patient paths */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-xl mx-auto mb-6">
            <Link
              to="/contact"
              className="cta-tactile flex-1 px-6 py-4 bg-navy text-primary-foreground font-body text-[11px] tracking-[0.25em] uppercase font-medium transition-all duration-300 hover:opacity-90 text-center shadow-[0_8px_24px_-8px_hsl(220_30%_8%/0.4)]"
            >
              Schedule Consultation
            </Link>
            <Link
              to="/clinical-assessment"
              className="cta-tactile flex-1 px-6 py-4 border border-navy/30 text-navy font-body text-[11px] tracking-[0.25em] uppercase transition-all duration-300 hover:bg-navy hover:text-primary-foreground text-center"
            >
              Online Assessment
            </Link>
            <Link
              to="/virtual-consultation"
              className="cta-tactile flex-1 px-6 py-4 border border-navy/30 text-navy font-body text-[11px] tracking-[0.25em] uppercase transition-all duration-300 hover:bg-navy hover:text-primary-foreground text-center"
            >
              Virtual Consult
            </Link>
          </div>

          <p className="font-body text-[11px] text-charcoal-light/70 font-light">
            Or call <a href="tel:+16092230600" className="text-navy hover:underline underline-offset-4">(609) 223-0600</a> &nbsp;·&nbsp; 1544 Kuser Rd, Hamilton Township, NJ
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
