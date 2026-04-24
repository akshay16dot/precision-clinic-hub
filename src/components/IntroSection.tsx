import { motion } from "framer-motion";

const IntroSection = () => {
  return (
    <section
      className="section-padding-lg"
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
          <div className="w-12 h-px bg-navy mx-auto mb-12" />

          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-light text-charcoal leading-relaxed mb-8">
            A specialist practice for patients who need more than routine dentistry.
          </h2>

          <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed max-w-2xl mx-auto mb-4">
            Dr. Parmar focuses on the cases other dentists refer out, missing teeth, failing restorations, worn-down bites, and full-mouth rebuilds, with care planned to feel natural and last.
          </p>

          <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed max-w-2xl mx-auto">
            Every treatment is built around comfort, function, and a result you don't have to think about every day.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;
