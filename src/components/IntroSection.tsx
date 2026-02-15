import { motion } from "framer-motion";

const IntroSection = () => {
  return (
    <section
      className="py-16 md:py-20 lg:py-24 px-6 md:px-8"
      style={{
        background: "linear-gradient(180deg, hsl(40 18% 97%) 0%, hsl(40 15% 95.5%) 100%)",
      }}
    >
      <div className="luxury-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="w-12 h-px bg-navy mx-auto mb-10" />

          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-light text-charcoal leading-relaxed mb-6">
            Dr. Akshay Parmar is a Board-Certified Prosthodontist providing advanced dental implant and prosthodontic rehabilitation across New Jersey.
          </h2>

          <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed max-w-2xl mx-auto mb-4">
            His clinical approach focuses on precision-driven, biologically respectful dentistry designed to restore function, aesthetics, and long-term stability.
          </p>

          <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed max-w-2xl mx-auto">
            Care ranges from implant rehabilitation to complex oral and maxillofacial reconstruction.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;
