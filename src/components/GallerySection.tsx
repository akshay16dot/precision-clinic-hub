import { motion } from "framer-motion";

const cases = [
  "Case Study", "Case Study", "Case Study",
  "Case Study", "Case Study", "Case Study",
];

const GallerySection = () => {
  return (
    <section
      className="section-padding-lg"
      style={{
        background: "linear-gradient(180deg, hsl(40 15% 97%) 0%, hsl(40 10% 95%) 100%)",
      }}
    >
      <div className="luxury-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-[10px] tracking-[0.4em] uppercase text-charcoal-light mb-6">
            Selected Work
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy mb-4">
            Clinical <span className="italic">Cases</span>
          </h2>
          <div className="w-12 h-px bg-navy/20 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 lg:gap-6 max-w-5xl mx-auto">
          {cases.map((label, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="aspect-[4/3] flex items-center justify-center group cursor-pointer overflow-hidden transition-all duration-500 border border-divider hover:border-navy/15 hover:shadow-[0_6px_24px_-10px_hsl(220_20%_15%/0.1)]"
              style={{
                background: "linear-gradient(145deg, hsl(40 12% 95%) 0%, hsl(40 8% 92%) 100%)",
              }}
            >
              <div className="text-center">
                <p className="font-body text-[10px] tracking-[0.3em] uppercase text-charcoal-light/30 group-hover:text-charcoal-light/60 transition-colors duration-400">
                  {label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
