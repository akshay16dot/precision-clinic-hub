import { motion } from "framer-motion";

const philosophies = [
  {
    title: "Planned with Precision",
    text: "Every case is mapped out before treatment begins, using digital planning, advanced imaging, and time at the bench, so the result on day one matches the plan.",
  },
  {
    title: "Gentle on Your Biology",
    text: "Healthy tissue is preserved wherever possible. The goal is always the most conservative path that still delivers a strong, predictable long-term result.",
  },
  {
    title: "Built to Last",
    text: "Function, comfort, and appearance are designed together, so your restoration looks natural, feels stable, and holds up year after year.",
  },
  {
    title: "Care That Fits You",
    text: "No two mouths or treatment goals are the same. Your plan is built around your anatomy, your health, and what matters most to you.",
  },
];

const PhilosophySection = () => {
  return (
    <section className="section-padding-lg bg-navy">
      <div className="luxury-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14 md:mb-20 max-w-2xl mx-auto"
        >
          <p className="font-body text-[10px] md:text-xs tracking-[0.35em] uppercase text-primary-foreground/55 mb-5 md:mb-6">
            How Dr. Parmar Works
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-primary-foreground leading-[1.05] mb-5">
            Care that's calm, careful,
            <br className="hidden sm:block" />
            <span className="italic"> and built around you</span>
          </h2>
          <p className="font-body text-sm md:text-[15px] text-primary-foreground/65 font-light leading-relaxed max-w-xl mx-auto">
            A few principles guide every treatment, from a single implant to a full-mouth rebuild.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 lg:gap-x-20 lg:gap-y-16 max-w-4xl mx-auto">
          {philosophies.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: Math.min(i, 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative pl-5 md:pl-6 border-l border-primary-foreground/15"
            >
              <h3 className="font-display text-xl md:text-2xl font-light text-primary-foreground mb-3 md:mb-4 leading-snug">
                {item.title}
              </h3>
              <p className="font-body text-sm md:text-[15px] text-primary-foreground/65 font-light leading-relaxed">
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
