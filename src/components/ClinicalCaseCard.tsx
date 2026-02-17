import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface ClinicalCase {
  title: string;
  descriptor: string;
  afterImg: string;
  beforeImg: string;
  challenge: string;
  strategy: string;
  functional: string;
  aesthetic: string;
}

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
};

const ClinicalCaseCard = ({ c, index }: { c: ClinicalCase; index: number }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      {...fadeUp}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="group"
    >
      {/* Image Grid: AFTER dominant, BEFORE secondary */}
      <div className="grid grid-cols-3 gap-3 md:gap-4 mb-6">
        {/* AFTER — dominant (2 cols) */}
        <div className="col-span-2 relative aspect-[4/3] overflow-hidden rounded-sm">
          <img
            src={c.afterImg}
            alt={`${c.title} — After`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
            <p className="font-body text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-white/80 font-light">
              After
            </p>
          </div>
        </div>
        {/* BEFORE — secondary (1 col) */}
        <div className="col-span-1 relative aspect-[4/3] overflow-hidden rounded-sm">
          <img
            src={c.beforeImg}
            alt={`${c.title} — Before`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
            <p className="font-body text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-white/70 font-light">
              Before
            </p>
          </div>
        </div>
      </div>

      {/* Title & Descriptor */}
      <div className="flex items-baseline gap-4 mb-2">
        <span className="font-display text-base font-light text-navy/20">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="font-display text-xl md:text-2xl font-light text-navy">
          {c.title}
        </h3>
      </div>
      <p className="font-body text-xs text-charcoal-light font-light tracking-wide mb-4 pl-10 md:pl-12">
        {c.descriptor}
      </p>

      {/* Learn More Toggle */}
      <div className="pl-10 md:pl-12">
        <button
          onClick={() => setExpanded(!expanded)}
          className="font-body text-[10px] tracking-[0.25em] uppercase text-navy/60 hover:text-navy transition-colors duration-300 border-b border-navy/20 hover:border-navy/40 pb-px"
        >
          {expanded ? "Close" : "Learn More"}
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pt-6 pb-2 space-y-5">
                {[
                  { label: "Clinical Challenge", text: c.challenge },
                  { label: "Treatment Strategy", text: c.strategy },
                  { label: "Functional Objectives", text: c.functional },
                  { label: "Aesthetic Goals", text: c.aesthetic },
                ].map((item, j) => (
                  <div key={j}>
                    <p className="font-body text-[10px] tracking-[0.3em] uppercase text-charcoal-light/60 mb-2">
                      {item.label}
                    </p>
                    <p className="font-body text-sm text-charcoal-light font-light leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ClinicalCaseCard;
