import { motion } from "framer-motion";

const philosophies = [
  {
    title: "Precision-Driven Dentistry",
    text: "Every treatment is planned with meticulous attention to biomechanical principles, digital precision, and evidence-based protocols.",
  },
  {
    title: "Biologically Respectful Treatment",
    text: "Preserving natural tissue, respecting biological boundaries, and working in harmony with the body's inherent healing capacity.",
  },
  {
    title: "Function, Aesthetics & Longevity",
    text: "Restoring complete oral function while achieving natural aesthetics designed to endure for decades.",
  },
  {
    title: "Individualized Care",
    text: "Each patient receives a treatment plan uniquely designed for their anatomy, health profile, and personal goals.",
  },
];

const PhilosophySection = () => {
  return (
    <section className="section-padding bg-navy">
      <div className="luxury-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary-foreground/50 mb-6">
            Treatment Philosophy
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-primary-foreground">
            The Foundation of Care
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl mx-auto">
          {philosophies.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <h3 className="font-display text-2xl font-light text-primary-foreground mb-4">
                {item.title}
              </h3>
              <p className="font-body text-sm text-primary-foreground/60 font-light leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
