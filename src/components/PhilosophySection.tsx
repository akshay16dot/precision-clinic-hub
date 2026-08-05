import { motion } from "framer-motion";
import surgeryPhoto from "@/assets/parmar-surgery.jpg";

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
            Every treatment follows the STABLE Protocol™, Dr. Parmar's system for Soft Tissue And Bone Level Esthetics, taught to surgeons across the USA and India. A few of its principles:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(280px,380px)] gap-12 lg:gap-16 max-w-5xl mx-auto items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 lg:gap-x-16 lg:gap-y-14">
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

          {/* In the operatory */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9 }}
            className="relative mx-auto w-full max-w-sm lg:max-w-none"
          >
            <img
              src={surgeryPhoto}
              alt="Dr. Parmar performing implant surgery with his team"
              loading="lazy"
              className="w-full rounded-sm"
              style={{
                filter: "brightness(0.92) saturate(0.9)",
                maskImage: "linear-gradient(180deg, transparent 0%, black 7%, black 93%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(180deg, transparent 0%, black 7%, black 93%, transparent 100%)",
              }}
            />
            <p className="font-body text-[9px] tracking-[0.25em] uppercase text-primary-foreground/40 mt-3 text-center">
              STABLE Protocol™ implant surgery, Hamilton Township
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
