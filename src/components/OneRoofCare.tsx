import { motion } from "framer-motion";

const stages = [
  "Diagnosis and 3D planning",
  "Implant surgery",
  "Provisional teeth",
  "Final prosthesis",
  "Long-term maintenance",
];

interface OneRoofCareProps {
  dark?: boolean;
  compact?: boolean;
}

const OneRoofCare = ({ dark = false, compact = false }: OneRoofCareProps) => {
  const background = dark
    ? "linear-gradient(180deg, hsl(30 8% 10%) 0%, hsl(28 6% 12%) 100%)"
    : "linear-gradient(180deg, hsl(40 18% 97%) 0%, hsl(40 12% 94.5%) 100%)";

  return (
    <section className={compact ? "py-16 md:py-20" : "py-20 md:py-28"} style={{ background }}>
      <div className="luxury-container px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.75 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className={`font-body text-[10px] tracking-[0.38em] uppercase mb-5 ${dark ? "text-white/45" : "text-charcoal-light"}`}>
            One Coordinated Office
          </p>
          <h2 className={`font-display text-3xl sm:text-4xl md:text-5xl font-light leading-[1.08] mb-7 ${dark ? "text-white/90" : "text-navy"}`}>
            From implant surgery to final teeth,
            <br className="hidden sm:block" />
            <span className="italic"> under one roof.</span>
          </h2>
          <p className={`font-body text-sm md:text-base font-light leading-relaxed max-w-3xl mx-auto ${dark ? "text-white/55" : "text-charcoal-light"}`}>
            When clinically appropriate, Dr. Parmar and one specialist-led team coordinate the entire treatment in the Hamilton office. The surgical plan is designed around the final teeth from the beginning, and the same team remains responsible through delivery, follow-up and maintenance.
          </p>

          <div className={`grid grid-cols-1 sm:grid-cols-5 gap-px mt-10 md:mt-12 ${dark ? "bg-white/10" : "bg-divider"}`}>
            {stages.map((stage, index) => (
              <div key={stage} className={`px-4 py-5 ${dark ? "bg-[hsl(30_8%_10%)]" : "bg-background"}`}>
                <p className={`font-body text-[9px] tracking-[0.2em] uppercase mb-2 ${dark ? "text-white/30" : "text-charcoal-light/45"}`}>
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className={`font-body text-[12px] leading-relaxed ${dark ? "text-white/65" : "text-navy"}`}>
                  {stage}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OneRoofCare;
