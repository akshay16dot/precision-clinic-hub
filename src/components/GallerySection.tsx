import { motion } from "framer-motion";

const GallerySection = () => {
  const cases = Array.from({ length: 6 });

  return (
    <section className="section-padding bg-background">
      <div className="luxury-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-charcoal-light mb-6">
            Selected Work
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy">
            Clinical Cases
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
              className="aspect-[4/3] bg-warm-gray flex items-center justify-center group cursor-pointer overflow-hidden"
            >
              <div className="text-center">
                <p className="font-body text-xs tracking-[0.2em] uppercase text-charcoal-light/50 group-hover:text-charcoal-light transition-colors duration-300">
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
