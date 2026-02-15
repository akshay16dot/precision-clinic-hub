import { motion } from "framer-motion";

const GallerySection = () => {
  const cases = Array.from({ length: 6 });

  return (
    <section
      className="section-padding"
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
          className="text-center mb-14"
        >
          <p className="font-body text-[10px] tracking-[0.4em] uppercase text-charcoal-light mb-5">
            Selected Work
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy">
            Clinical <span className="italic">Cases</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {cases.map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="aspect-[4/3] bg-card border border-divider flex items-center justify-center group cursor-pointer overflow-hidden transition-all duration-500 hover:border-navy/20 hover:shadow-[0_4px_20px_-8px_hsl(220_20%_15%/0.1)]"
            >
              <div className="text-center">
                <p className="font-body text-xs tracking-[0.2em] uppercase text-charcoal-light/40 group-hover:text-charcoal-light transition-colors duration-300">
                  Case {i + 1}
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
