import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SiteNavigation from "@/components/SiteNavigation";
import PageFooter from "@/components/PageFooter";
import { usePageSEO } from "@/hooks/usePageSEO";
import { QUESTIONS, CATEGORIES, STAGES, type Stage } from "@/data/patientQuestions";

/**
 * Patient questions hub.
 *
 * Search and filters are progressive enhancement only: the default state
 * renders every question and answer into the DOM. That matters because no
 * major AI crawler executes JavaScript, so anything hidden behind an
 * interaction would not exist to ChatGPT, Claude or Perplexity. Filtering
 * narrows what is shown; it never gates what is served.
 */

const PatientQuestions = () => {
  usePageSEO({
    title: "Dental Questions Answered | Implants, Dentures, Veneers | NJ",
    description:
      "Straight answers to the questions patients actually ask about dental implants, All-on-4, dentures, veneers, cost and recovery. Written by a board-certified prosthodontist.",
  });

  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<string | null>(null);
  const [stage, setStage] = useState<Stage | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return QUESTIONS.filter((item) => {
      if (cat && item.cat !== cat) return false;
      if (stage && item.stage !== stage) return false;
      if (!q) return true;
      return (item.q + " " + item.a).toLowerCase().includes(q);
    });
  }, [query, cat, stage]);

  const grouped = useMemo(() => {
    return CATEGORIES.map((c) => ({
      ...c,
      items: filtered.filter((i) => i.cat === c.id),
    })).filter((c) => c.items.length > 0);
  }, [filtered]);

  const clearAll = () => {
    setQuery("");
    setCat(null);
    setStage(null);
  };

  const isFiltered = query.trim() !== "" || cat !== null || stage !== null;

  return (
    <main className="bg-background">
      <SiteNavigation />

      {/* ── Hero ── */}
      <section className="pt-40 md:pt-48 pb-10 md:pb-14 bg-background">
        <div className="luxury-container px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="font-body text-[10px] tracking-[0.34em] uppercase text-charcoal-light mb-7">
              Patient Questions
            </p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-navy leading-[1.12] mb-7">
              Ask anything. <em className="italic">Here are the answers.</em>
            </h1>
            <p className="font-body text-[15px] md:text-base text-charcoal-light font-light leading-relaxed max-w-2xl mx-auto">
              {QUESTIONS.length} questions patients actually ask, answered plainly.
              Including the ones where the honest answer is that you may not need
              the treatment you came in asking about.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Search and filters ── */}
      <section className="pb-10 md:pb-12 bg-background">
        <div className="luxury-container px-6 md:px-8">
          <div className="max-w-3xl mx-auto">
            <label htmlFor="q-search" className="sr-only">
              Search questions
            </label>
            <input
              id="q-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type a question, for example: will it hurt, how much does it cost, how long does it last"
              className="w-full px-5 py-4 border border-divider rounded-sm bg-white/70 font-body text-[15px] text-charcoal placeholder:text-charcoal-light/50 focus:outline-none focus:border-navy/40 transition-colors duration-300"
            />

            {/* Stage filter */}
            <div className="flex flex-wrap items-center gap-2 mt-5">
              <span className="font-body text-[10px] tracking-[0.2em] uppercase text-charcoal-light/60 mr-1">
                Stage
              </span>
              {STAGES.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setStage(stage === s.id ? null : s.id)}
                  className={`px-3.5 py-1.5 rounded-sm font-body text-[11.5px] tracking-[0.04em] border transition-all duration-200 ${
                    stage === s.id
                      ? "bg-navy text-primary-foreground border-navy"
                      : "bg-transparent text-charcoal-light border-divider hover:border-navy/40"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>

            {/* Category filter */}
            <div className="flex flex-wrap items-center gap-2 mt-3">
              <span className="font-body text-[10px] tracking-[0.2em] uppercase text-charcoal-light/60 mr-1">
                Topic
              </span>
              {CATEGORIES.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setCat(cat === c.id ? null : c.id)}
                  className={`px-3.5 py-1.5 rounded-sm font-body text-[11.5px] tracking-[0.04em] border transition-all duration-200 ${
                    cat === c.id
                      ? "bg-navy text-primary-foreground border-navy"
                      : "bg-transparent text-charcoal-light border-divider hover:border-navy/40"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>

            <div className="flex items-center justify-between mt-5 min-h-[24px]">
              <p className="font-body text-[12.5px] text-charcoal-light/70">
                {isFiltered
                  ? `${filtered.length} of ${QUESTIONS.length} questions`
                  : `${QUESTIONS.length} questions`}
              </p>
              {isFiltered && (
                <button
                  onClick={clearAll}
                  className="font-body text-[11.5px] tracking-[0.12em] uppercase text-navy/60 hover:text-navy transition-colors duration-300 border-b border-navy/20 hover:border-navy/50 pb-px"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Answers ── */}
      <section
        className="py-12 md:py-16"
        style={{ background: "linear-gradient(180deg, hsl(40 15% 96.5%) 0%, hsl(40 20% 98%) 100%)" }}
      >
        <div className="luxury-container px-6 md:px-8">
          <div className="max-w-3xl mx-auto">
            {grouped.length === 0 && (
              <div className="text-center py-16">
                <p className="font-display text-xl font-light text-navy mb-4">
                  No question matches that yet.
                </p>
                <p className="font-body text-[15px] text-charcoal-light font-light leading-relaxed max-w-md mx-auto mb-8">
                  Try a different word, or ask us directly. If it is a question
                  patients are asking, it belongs on this page and we will add it.
                </p>
                <Link
                  to="/contact"
                  className="font-body text-[11.5px] tracking-[0.2em] uppercase text-navy border-b border-navy/30 hover:border-navy pb-px transition-colors duration-300"
                >
                  Ask us directly
                </Link>
              </div>
            )}

            {grouped.map((group, gi) => (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: Math.min(gi, 3) * 0.05 }}
                className="mb-14 md:mb-18 last:mb-0"
              >
                <h2 className="font-display text-xl md:text-2xl font-light text-navy pb-3 mb-7 border-b border-divider">
                  {group.label}
                  <span className="font-body text-[11px] tracking-[0.14em] uppercase text-charcoal-light/50 ml-3">
                    {group.items.length}
                  </span>
                </h2>

                <div className="space-y-8">
                  {group.items.map((item, i) => (
                    <div key={i}>
                      <h3 className="font-display text-[17px] md:text-lg font-light text-navy mb-2.5 leading-snug">
                        {item.q}
                      </h3>
                      <p className="font-body text-[14.5px] md:text-[15px] text-charcoal-light font-light leading-[1.75]">
                        {item.a}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing ── */}
      <section
        className="py-20 md:py-28"
        style={{ background: "linear-gradient(180deg, hsl(40 20% 98%) 0%, hsl(40 12% 94.5%) 100%)" }}
      >
        <div className="luxury-container px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="w-12 h-px bg-navy/20 mx-auto mb-10" />
            <h2 className="font-display text-2xl md:text-4xl font-light text-navy leading-[1.15] mb-6">
              Your question isn't here?
            </h2>
            <p className="font-body text-[15px] text-charcoal-light font-light leading-relaxed mb-9">
              Send it. If it is something patients are asking, it belongs on this
              page and we will add the answer. If it is specific to your own
              situation, a consultation will answer it properly.
            </p>
            <Link
              to="/contact"
              className="cta-tactile inline-block px-11 py-[17px] bg-navy text-primary-foreground font-body text-[11.5px] tracking-[0.22em] uppercase font-medium transition-all duration-300 hover:bg-navy/90"
            >
              Ask a Question
            </Link>
            <p className="font-body text-[12px] text-charcoal-light/60 font-light mt-6 leading-relaxed">
              Answers here are general information, not a diagnosis. Your own case
              needs an examination.
            </p>
          </motion.div>
        </div>
      </section>

      <PageFooter />
    </main>
  );
};

export default PatientQuestions;
