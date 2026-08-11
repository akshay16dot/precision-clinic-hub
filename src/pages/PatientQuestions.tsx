import { useState, useMemo, useEffect } from "react";
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

/* ── Search plumbing ──────────────────────────────────────────────────────
   Patients type whole sentences ("does it hurt with implants"), not keywords.
   A plain substring match on the raw string finds nothing, because that exact
   phrase never appears in any answer. So: strip filler words, match the words
   that carry meaning, and expand the handful of everyday words patients use
   for things the answers name clinically ("hurt" -> "pain", "cost" -> "fee").
   ────────────────────────────────────────────────────────────────────────── */

const STOPWORDS = new Set([
  "a","about","after","all","am","an","and","any","are","as","at","be","been",
  "before","being","but","by","can","could","did","do","does","doing","done",
  "for","from","get","getting","had","has","have","having","he","her","him",
  "his","how","i","if","in","into","is","it","its","just","like","long","many",
  "may","me","might","much","must","my","need","of","on","or","our","out",
  "over","own","really","said","same","she","should","so","some","such","than",
  "that","the","their","them","then","there","these","they","this","those",
  "through","to","too","under","until","up","very","was","we","were","what",
  "when","where","which","while","who","whom","why","will","with","would",
  "you","your","yours",
]);

/* Everyday word -> the words the answers actually use. */
const SYNONYMS: Record<string, string[]> = {
  hurt: ["pain", "painful", "hurt", "sore", "discomfort"],
  hurts: ["pain", "painful", "hurt", "sore", "discomfort"],
  painful: ["pain", "painful", "hurt", "sore", "discomfort"],
  pain: ["pain", "painful", "hurt", "sore", "discomfort"],
  cost: ["cost", "price", "fee", "pay", "expensive", "afford"],
  costs: ["cost", "price", "fee", "pay", "expensive", "afford"],
  price: ["cost", "price", "fee", "pay", "expensive", "afford"],
  expensive: ["cost", "price", "fee", "pay", "expensive", "afford"],
  cheap: ["cost", "price", "fee", "cheaper", "afford"],
  money: ["cost", "price", "fee", "pay", "afford"],
  insurance: ["insurance", "coverage", "covered", "plan", "reimburse"],
  last: ["last", "lifespan", "longevity", "years", "durable"],
  lasts: ["last", "lifespan", "longevity", "years", "durable"],
  fail: ["fail", "failure", "failed", "fails"],
  fails: ["fail", "failure", "failed", "fails"],
  failed: ["fail", "failure", "failed", "fails"],
  loose: ["loose", "loosen", "mobile", "wobble", "moves"],
  swelling: ["swell", "swelling", "swollen", "bruis"],
  swell: ["swell", "swelling", "swollen", "bruis"],
  eat: ["eat", "eating", "chew", "chewing", "food", "diet"],
  eating: ["eat", "eating", "chew", "chewing", "food", "diet"],
  food: ["eat", "eating", "chew", "chewing", "food", "diet"],
  chew: ["eat", "eating", "chew", "chewing", "food", "diet"],
  smoke: ["smoke", "smoking", "smoker", "nicotine", "vape"],
  smoking: ["smoke", "smoking", "smoker", "nicotine", "vape"],
  teeth: ["teeth", "tooth"],
  tooth: ["teeth", "tooth"],
  dentures: ["denture", "dentures", "plate"],
  denture: ["denture", "dentures", "plate"],
  sedation: ["sedation", "sedated", "asleep", "anesthesia", "anaesthesia", "iv"],
  asleep: ["sedation", "sedated", "asleep", "anesthesia", "anaesthesia"],
  awake: ["awake", "sedation", "local", "numb"],
  quick: ["fast", "quick", "same-day", "immediate"],
  fast: ["fast", "quick", "same-day", "immediate"],
  safe: ["safe", "safety", "risk", "risks"],
  risk: ["safe", "safety", "risk", "risks", "complication"],
  bone: ["bone", "graft", "grafting", "sinus"],
  graft: ["bone", "graft", "grafting", "sinus"],
  gum: ["gum", "gums", "tissue", "soft tissue"],
  gums: ["gum", "gums", "tissue", "soft tissue"],
  age: ["age", "old", "older", "young"],
  old: ["age", "old", "older", "young"],
  work: ["work", "works", "job", "return"],
  time: ["time", "long", "week", "month", "day"],
};

/* "implants" -> also try "implant". Cheap, and covers most plurals. */
const singular = (w: string) =>
  w.length > 3 && w.endsWith("s") && !w.endsWith("ss") ? w.slice(0, -1) : w;

/* Multi-word product names have to survive stopword stripping, or "all on 4"
   becomes "4" and the most commercially important query on the site breaks. */
const normalisePhrases = (s: string) =>
  s
    .replace(/all[\s-]*on[\s-]*(4|four)/g, " allonfour ")
    .replace(/all[\s-]*on[\s-]*(6|six)/g, " allonsix ")
    .replace(/all[\s-]*on[\s-]*(x|8|eight)/g, " allonfour ")
    .replace(/full[\s-]*arch/g, " allonfour ")
    .replace(/same[\s-]*day/g, " sameday ")
    .replace(/full[\s-]*mouth/g, " fullmouth ");

export const tokenize = (raw: string) =>
  normalisePhrases(raw.toLowerCase())
    .replace(/[^a-z0-9\s-]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 1 && !STOPWORDS.has(w));

export const tokenMatches = (haystack: string, token: string) => {
  const forms = SYNONYMS[token] ?? [token, singular(token)];
  return forms.some((f) => haystack.includes(f));
};

/* Haystacks get the same phrase normalisation, so "full arch" in an answer is
   findable by someone typing "all on 4" and vice versa. */
export const haystackOf = (q: string, a: string) =>
  normalisePhrases((q + " " + a).toLowerCase());

const PatientQuestions = () => {
  usePageSEO({
    title: "Dental Questions Answered | Implants, Dentures, Veneers | NJ",
    description:
      "Straight answers to the questions patients actually ask about dental implants, All-on-4, dentures, veneers, cost and recovery. Written by a board-certified prosthodontist.",
  });

  useEffect(() => {
    const id = "patient-questions-faq-schema";
    document.getElementById(id)?.remove();

    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://drparmardds.com/patient-questions#faq",
      url: "https://drparmardds.com/patient-questions",
      name: "Patient Dental Questions Answered by Dr. Akshay Parmar",
      author: { "@id": "https://drparmardds.com/#akshay-parmar" },
      mainEntity: QUESTIONS.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    };

    const script = document.createElement("script");
    script.id = id;
    script.type = "application/ld+json";
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => script.remove();
  }, []);

  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<string | null>(null);
  const [stage, setStage] = useState<Stage | null>(null);

  const filtered = useMemo(() => {
    const scoped = QUESTIONS.filter((item) => {
      if (cat && item.cat !== cat) return false;
      if (stage && item.stage !== stage) return false;
      return true;
    });

    const tokens = tokenize(query);
    if (tokens.length === 0) return scoped;

    const scored = scoped.map((item) => {
      const hay = haystackOf(item.q, item.a);
      let hits = 0;
      for (const t of tokens) if (tokenMatches(hay, t)) hits++;
      /* A hit in the question itself counts for more than one buried in an answer. */
      const inQuestion = tokens.filter((t) =>
        tokenMatches(haystackOf(item.q, ""), t)
      ).length;
      return { item, hits, score: hits * 2 + inQuestion };
    });

    const ranked = scored
      .filter((s) => s.hits > 0)
      .sort((a, b) => b.hits - a.hits || b.score - a.score);

    /* Answers matching every word come first. Partial matches are only used to
       top up a thin result set; otherwise one common word like "implant"
       drags in half the page and the useful answer is buried. */
    const full = ranked.filter((s) => s.hits === tokens.length);
    const chosen =
      full.length >= 6 ? full : ranked.slice(0, Math.max(12, full.length));

    return chosen.map((s) => s.item);
  }, [query, cat, stage]);

  const hasQuery = tokenize(query).length > 0;

  /* No search term: browse by topic. Search term: one ranked list, best first,
     because the best answer to a typed question should not be three headings
     down just because of which category it happens to live in. */
  const grouped = useMemo(() => {
    if (hasQuery) {
      return [{ id: "results", label: "Closest answers", items: filtered }];
    }
    return CATEGORIES.map((c) => ({
      ...c,
      items: filtered.filter((i) => i.cat === c.id),
    })).filter((c) => c.items.length > 0);
  }, [filtered, hasQuery]);

  const catLabel = useMemo(() => {
    const m: Record<string, string> = {};
    CATEGORIES.forEach((c) => (m[c.id] = c.label));
    return m;
  }, []);

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
                      {hasQuery && (
                        <p className="font-body text-[10px] tracking-[0.2em] uppercase text-charcoal-light/45 mb-1.5">
                          {catLabel[item.cat]}
                        </p>
                      )}
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
