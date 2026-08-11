import { useState } from "react";
import { motion } from "framer-motion";
import {
  clinicalPortfolioCases,
  type ClinicalPortfolioCase,
} from "@/data/clinicalPortfolioCases";

const ClinicalPortfolioCard = ({ clinicalCase }: { clinicalCase: ClinicalPortfolioCase }) => {
  const [view, setView] = useState<"before" | "after">("after");
  const isAfter = view === "after";

  return (
    <article
      id={clinicalCase.id}
      className="group scroll-mt-28 overflow-hidden border border-navy/10 bg-background shadow-[0_20px_55px_-42px_rgba(25,39,67,0.55)]"
    >
      <figure>
        <div
          className={`relative overflow-hidden bg-navy/[0.04] ${
            clinicalCase.portrait ? "aspect-[4/5]" : "aspect-[4/3]"
          }`}
        >
          <img
            src={isAfter ? clinicalCase.afterImage : clinicalCase.beforeImage}
            alt={isAfter ? clinicalCase.afterAlt : clinicalCase.beforeAlt}
            loading="lazy"
            decoding="async"
            width={clinicalCase.portrait ? 1200 : 1800}
            height={clinicalCase.portrait ? 1800 : 1350}
            className={`h-full w-full transition-transform duration-700 group-hover:scale-[1.015] ${
              clinicalCase.portrait ? "object-contain" : "object-cover object-center"
            }`}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/20 via-transparent to-transparent opacity-60" />
          <span className="absolute left-4 top-4 bg-background/95 px-3 py-2 font-body text-[9px] uppercase tracking-[0.25em] text-navy backdrop-blur-sm">
            {isAfter ? "After" : "Before"}
          </span>
          <div
            className="absolute bottom-4 right-4 flex border border-white/45 bg-navy/80 p-1 backdrop-blur-md"
            role="group"
            aria-label={`Choose before or after view for ${clinicalCase.title}`}
          >
            {(["before", "after"] as const).map((option) => (
              <button
                key={option}
                type="button"
                aria-pressed={view === option}
                onClick={() => setView(option)}
                className={`min-h-9 px-3 font-body text-[9px] uppercase tracking-[0.18em] transition-colors ${
                  view === option
                    ? "bg-background text-navy"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
        <figcaption className="px-5 pb-6 pt-5 md:px-6">
          <p className="mb-3 font-body text-[9px] uppercase tracking-[0.28em] text-charcoal-light">
            {clinicalCase.category}
          </p>
          <h3 className="mb-3 font-display text-2xl font-light leading-tight text-navy">
            {clinicalCase.title}
          </h3>
          <p className="font-body text-xs font-light leading-[1.75] text-charcoal-light">
            {clinicalCase.description}
          </p>
        </figcaption>
      </figure>
    </article>
  );
};

const ClinicalPortfolioGrid = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleCases = showAll ? clinicalPortfolioCases : clinicalPortfolioCases.slice(0, 6);

  return (
    <div>
      <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        {visibleCases.map((clinicalCase, index) => (
          <motion.div
            key={clinicalCase.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.55, delay: (index % 3) * 0.06 }}
          >
            <ClinicalPortfolioCard clinicalCase={clinicalCase} />
          </motion.div>
        ))}
      </div>

      {!showAll && (
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => setShowAll(true)}
            className="min-h-12 border border-navy/25 px-9 font-body text-[10px] uppercase tracking-[0.24em] text-navy transition-colors hover:bg-navy hover:text-white"
          >
            View three more cases
          </button>
        </div>
      )}

      <p className="mx-auto mt-10 max-w-2xl text-center font-body text-[11px] font-light leading-relaxed text-charcoal-light">
        Actual patients treated by Dr. Parmar. Photographs are unfiltered and shown for educational purposes. Individual anatomy, treatment needs, healing, and results vary.
      </p>
    </div>
  );
};

export default ClinicalPortfolioGrid;
