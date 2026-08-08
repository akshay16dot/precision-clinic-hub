import { motion } from "framer-motion";
import type { TreatmentGuide } from "@/data/treatmentGuides";

/**
 * Renders the patient journey content inside a service page.
 *
 * This replaces the standalone /guide/* pages, which duplicated their service
 * pages and split ranking signals between two mediocre pages instead of one
 * strong one. Everything renders in the DOM on load rather than behind an
 * accordion, because AI crawlers do not execute JavaScript.
 */

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

const TreatmentJourney = ({
  data,
  timelineHeading,
}: {
  data: TreatmentGuide;
  timelineHeading?: string;
}) => {
  const heading = timelineHeading ?? data.timelineTitle ?? "Your Healing Timeline";

  return (
    <>
      {/* ── Timeline ── */}
      <section
        className="py-16 md:py-24"
        style={{ background: "linear-gradient(180deg, hsl(40 20% 98%) 0%, hsl(40 15% 96%) 100%)" }}
      >
        <div className="luxury-container px-6 md:px-8">
          <motion.div {...fade} transition={{ duration: 0.8 }} className="max-w-2xl mx-auto">
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-charcoal-light/70 mb-5 text-center">
              What to Expect
            </p>
            <h2 className="font-display text-2xl md:text-[34px] font-light text-navy leading-[1.18] mb-10 text-center">
              {heading}
            </h2>

            <div className="space-y-0">
              {data.healingPhases.map((phase, i) => (
                <motion.div
                  key={i}
                  {...fade}
                  transition={{ duration: 0.6, delay: Math.min(i, 4) * 0.07 }}
                  className={`relative pl-7 md:pl-9 pb-8 ${
                    i < data.healingPhases.length - 1 ? "border-l border-divider" : ""
                  }`}
                >
                  <span className="absolute -left-[4.5px] top-[7px] w-[9px] h-[9px] rounded-full bg-navy/30" />
                  <p className="font-body text-[10px] tracking-[0.24em] uppercase text-navy/60 mb-2.5">
                    {phase.label}
                  </p>
                  <p className="font-body text-[15px] text-charcoal-light font-light leading-[1.72]">
                    {phase.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Healing and recovery ── */}
      <section
        className="py-16 md:py-24"
        style={{ background: "linear-gradient(180deg, hsl(40 15% 96%) 0%, hsl(40 12% 94.5%) 100%)" }}
      >
        <div className="luxury-container px-6 md:px-8">
          <motion.div {...fade} transition={{ duration: 0.8 }} className="max-w-2xl mx-auto">
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-charcoal-light/70 mb-5">
              Healing &amp; Recovery
            </p>
            <p className="font-body text-[15px] md:text-base text-charcoal-light font-light leading-[1.75] mb-7">
              {data.healingRecoveryIntro}
            </p>
            <ul className="space-y-3">
              {data.healingRecoveryPoints.map((point, i) => (
                <li key={i} className="flex gap-3.5">
                  <span className="mt-[9px] w-1 h-1 rounded-full bg-navy/40 shrink-0" />
                  <span className="font-body text-[15px] text-charcoal-light font-light leading-[1.7]">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ── Practical guidance ── */}
      <section className="py-16 md:py-24" style={{ background: "hsl(40 20% 98%)" }}>
        <div className="luxury-container px-6 md:px-8">
          <motion.div {...fade} transition={{ duration: 0.8 }} className="max-w-3xl mx-auto">
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-charcoal-light/70 mb-5 text-center">
              Practical Guidance
            </p>
            <h2 className="font-display text-2xl md:text-[32px] font-light text-navy leading-[1.2] mb-10 text-center">
              Looking after it <em className="italic">day to day</em>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-9">
              {data.practicalGuidance.map((item, i) => (
                <motion.div key={i} {...fade} transition={{ duration: 0.6, delay: Math.min(i, 3) * 0.07 }}>
                  <h3 className="font-display text-lg md:text-xl font-light text-navy mb-2.5">
                    {item.title}
                  </h3>
                  <p className="font-body text-[14.5px] text-charcoal-light font-light leading-[1.7]">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FAQs. Rendered open: crawlers do not click. ── */}
      <section
        className="py-16 md:py-24"
        style={{ background: "linear-gradient(180deg, hsl(40 12% 95%) 0%, hsl(40 15% 96.5%) 100%)" }}
      >
        <div className="luxury-container px-6 md:px-8">
          <motion.div {...fade} transition={{ duration: 0.8 }} className="max-w-2xl mx-auto">
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-charcoal-light/70 mb-5 text-center">
              Common Questions
            </p>
            <h2 className="font-display text-2xl md:text-[32px] font-light text-navy leading-[1.2] mb-11 text-center">
              Questions patients ask <em className="italic">most often</em>
            </h2>
            <div className="space-y-8 md:space-y-9">
              {data.faqs.map((faq, i) => (
                <motion.div key={i} {...fade} transition={{ duration: 0.55, delay: Math.min(i, 5) * 0.05 }}>
                  <h3 className="font-display text-lg md:text-xl font-light text-navy mb-3 leading-snug">
                    {faq.q}
                  </h3>
                  <p className="font-body text-[15px] text-charcoal-light font-light leading-[1.75]">
                    {faq.a}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default TreatmentJourney;
