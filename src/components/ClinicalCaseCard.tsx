import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

export interface ImagePair {
  beforeImg: string;
  afterImg: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export interface DetailSection {
  label: string;
  text: string;
}

export interface ClinicalCase {
  title: string;
  subtitle: string;
  descriptor: string;
  imagePairs: ImagePair[];
  details: DetailSection[];
  casePath?: string;
}

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
};

const ClinicalCaseCard = ({ c, index }: { c: ClinicalCase; index: number }) => {
  const [expanded, setExpanded] = useState(false);
  const pairs = c.imagePairs || [];
  const isSinglePair = pairs.length <= 1;

  return (
    <motion.div
      {...fadeUp}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="group"
    >
      {/* Title & Number */}
      <div className="flex items-baseline gap-4 mb-2">
        <span className="font-display text-base font-light text-navy/20">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div>
          <h3 className="font-display text-xl md:text-2xl font-light text-navy">
            {c.title}
          </h3>
          <p className="font-body text-[11px] tracking-[0.15em] text-charcoal-light/50 font-light mt-1">
            {c.subtitle}
          </p>
        </div>
      </div>

      {/* Descriptor */}
      <p className="font-body text-xs text-charcoal-light font-light tracking-wide leading-relaxed mb-8 pl-10 md:pl-12 max-w-xl">
        {c.descriptor}
      </p>

      {/* Image Grid */}
      {isSinglePair ? (
        /* Single pair: AFTER dominant (2 cols), BEFORE secondary (1 col) */
        <div className="grid grid-cols-3 gap-3 md:gap-5 mb-8">
          <div className="col-span-2 relative aspect-[4/3] overflow-hidden rounded-sm">
            <img
              src={pairs[0]?.afterImg}
              alt={`${c.title}, After`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
              <p className="font-body text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-white/75 font-light">
                After
              </p>
            </div>
          </div>
          <div className="col-span-1 relative aspect-[4/3] overflow-hidden rounded-sm">
            <img
              src={pairs[0]?.beforeImg}
              alt={`${c.title}, Before`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
              <p className="font-body text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-white/65 font-light">
                Before
              </p>
            </div>
          </div>
        </div>
      ) : (
        /* Multi-pair: symmetric rows of before/after */
        <div className="space-y-4 md:space-y-5 mb-8">
          {pairs.map((pair, pairIndex) => (
            <div key={pairIndex} className="grid grid-cols-2 gap-3 md:gap-5">
              {/* BEFORE */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                <img
                  src={pair.beforeImg}
                  alt={`${c.title}, ${pair.beforeLabel || "Before"}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                  <p className="font-body text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-white/65 font-light">
                    {pair.beforeLabel || "Before"}
                  </p>
                </div>
              </div>
              {/* AFTER */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-[0_4px_20px_-8px_hsl(220_40%_15%/0.12)]">
                <img
                  src={pair.afterImg}
                  alt={`${c.title}, ${pair.afterLabel || "After"}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                  <p className="font-body text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-white/80 font-light">
                    {pair.afterLabel || "After"}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Searchable case page and optional quick summary */}
      <div className="pl-10 md:pl-12">
        <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
          {c.casePath && (
            <Link
              to={c.casePath}
              className="font-body text-[10px] tracking-[0.25em] uppercase text-navy hover:text-navy/70 transition-colors duration-300 border-b border-navy/35 hover:border-navy/60 pb-px"
            >
              View Full Case
            </Link>
          )}
          <button
            onClick={() => setExpanded(!expanded)}
            className="font-body text-[10px] tracking-[0.25em] uppercase text-navy/60 hover:text-navy transition-colors duration-300 border-b border-navy/20 hover:border-navy/40 pb-px"
          >
            {expanded ? "Close Summary" : "Quick Summary"}
          </button>
        </div>

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
                {(c.details || []).map((item, j) => (
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
