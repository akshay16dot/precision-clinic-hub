import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SiteNavigation from "@/components/SiteNavigation";
import PageFooter from "@/components/PageFooter";
import { usePageSEO } from "@/hooks/usePageSEO";

/**
 * The STABLE Protocol page.
 *
 * Deliberately a syllabus, not a manual. The full protocol is Dr. Parmar's
 * paid teaching material, so this page names the sequence and explains why
 * each stage exists without publishing parameters, materials, thresholds or
 * doses. Enough to establish authorship and sell the course; not enough to
 * replace it.
 */

const fade = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

const principles = [
  {
    letter: "Soft Tissue",
    title: "The tissue decides the result",
    text: "Bone can be rebuilt and implants can be replaced. Tissue that has receded or been over-compressed is the hardest thing in dentistry to get back. So the protocol treats soft tissue as the primary constraint rather than something managed after the fact.",
  },
  {
    letter: "And Bone Level",
    title: "Position is planned around biology",
    text: "Where the implant sits, how deep it goes and what surrounds it are determined by the bone available and the tissue that has to be supported, not by where the drill goes most easily. Every stage is assessed before the irreversible one.",
  },
  {
    letter: "Esthetics",
    title: "Built backwards from the final result",
    text: "The finished restoration is designed first, and everything upstream serves it. That inverts the usual sequence, where the restoration is made to fit whatever position the surgery produced.",
  },
];

const sequence = [
  { n: "01", title: "Pre-Surgical Diagnosis", text: "Facial type, smile line, tissue phenotype, occlusion and keratinized tissue assessed before anything is committed to. Each of these changes the plan, and each is missed routinely." },
  { n: "02", title: "CBCT Analysis", text: "A structured 3D re-review with the patient in the chair, not a glance at a scan taken weeks earlier. The first drill sets the position permanently, so the assessment happens before it, not after." },
  { n: "03", title: "Surgical Initiation", text: "Antibiotic and anaesthetic protocol, then an extraction technique built entirely around not damaging the buccal plate. Most long-term facial plate loss is decided in these few minutes." },
  { n: "04", title: "Debridement & Socket Assessment", text: "The socket is cleaned, irrigated and read. What the socket actually looks like at this point determines the rest of the sequence, which is why the protocol branches here rather than earlier." },
  { n: "05", title: "Implant Placement", text: "Depth, orientation and seating governed by the tissue level rather than the bone crest alone, with the implant body kept deliberately away from the facial plate." },
  { n: "06", title: "Bone Grafting", text: "Treated as mandatory rather than optional, in defined zones with different materials serving different purposes. The gap left unfilled is the commonest cause of facial plate resorption years later." },
  { n: "07", title: "Connective Tissue Graft Barrier", text: "When soft tissue reinforcement is indicated, where the graft comes from, and how it is secured. This is the step most often skipped, and the one that most often explains a result that looked good at six months and poor at three years." },
  { n: "08", title: "Provisionalization", text: "A decision algorithm rather than a default, plus a structured emergence profile method that shapes the tissue in defined zones instead of leaving contour to chance." },
  { n: "09", title: "Follow-Up & Final Restoration", text: "Staged review, an objective integration assessment before loading, and laboratory specifications precise enough that the final restoration reproduces the contour developed during healing." },
];

const applications = [
  { title: "Immediate Implants", text: "The nine-stage sequence above, the most fully developed module.", to: "/immediate-implant-rehabilitation" },
  { title: "Anterior Aesthetics", text: "Single-tooth work in the visible zone, where tissue tolerance is smallest.", to: "/front-tooth-implant-new-jersey" },
  { title: "Full-Arch Rehabilitation", text: "All-on-X planning where tissue and bone level govern prosthesis design.", to: "/full-arch-implants-new-jersey" },
  { title: "Veneers & Crowns", text: "Margin placement and emergence governed by the same tissue-first principles.", to: "/veneers-aesthetic-reconstruction" },
];

const StableProtocol = () => {
  usePageSEO({
    title: "The STABLE Protocol™ | Soft Tissue And Bone Level Esthetics",
    description:
      "The STABLE Protocol™, developed by Dr. Akshay Parmar: a tissue-first system for implants, immediate placement, full-arch and aesthetic restorative work. Training for clinicians.",
  });

  return (
    <main className="bg-background">
      <SiteNavigation />

      {/* ── Hero ── */}
      <section
        className="relative pt-32 md:pt-40 pb-20 md:pb-28"
        style={{ background: "linear-gradient(180deg, hsl(220 22% 9%) 0%, hsl(220 18% 13%) 100%)" }}
      >
        <div className="luxury-container px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="font-body text-[10px] tracking-[0.36em] uppercase mb-8" style={{ color: "hsl(220 15% 58%)" }}>
              Developed by Dr. Akshay Parmar
            </p>
            <h1
              className="font-display text-4xl sm:text-5xl md:text-6xl font-light leading-[1.06] mb-7"
              style={{ color: "hsl(40 18% 94%)" }}
            >
              The STABLE <span className="italic">Protocol</span>™
            </h1>
            <p
              className="font-body text-[13px] md:text-sm tracking-[0.22em] uppercase mb-9"
              style={{ color: "hsl(220 14% 62%)" }}
            >
              Soft Tissue And Bone Level Esthetics
            </p>
            <div className="w-12 h-px mx-auto mb-9" style={{ background: "hsl(40 18% 94% / 0.2)" }} />
            <p
              className="font-body text-[15px] md:text-base font-light leading-[1.8] max-w-2xl mx-auto"
              style={{ color: "hsl(220 12% 72%)" }}
            >
              A treatment system built on a single premise: the soft tissue and the bone
              decide the outcome, so every decision is planned and sequenced around them.
              It governs how this practice approaches implants, immediate placement,
              full-arch rehabilitation, veneers and crowns, and it is taught to clinicians
              in the United States and India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Why it exists ── */}
      <section className="py-16 md:py-24" style={{ background: "hsl(40 20% 98%)" }}>
        <div className="luxury-container px-6 md:px-8">
          <motion.div {...fade} transition={{ duration: 0.8 }} className="max-w-2xl mx-auto">
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-charcoal-light/70 mb-5">
              Why it exists
            </p>
            <h2 className="font-display text-2xl md:text-[34px] font-light text-navy leading-[1.2] mb-7">
              Most implant failures are not <em className="italic">surgical accidents</em>
            </h2>
            <div className="space-y-4">
              <p className="font-body text-[15px] md:text-base text-charcoal-light font-light leading-[1.78]">
                They are planning decisions that only reveal themselves years later. An
                implant placed where the bone was convenient rather than where the tooth
                needed to emerge. A gap left unfilled because it seemed inconsequential. A
                soft tissue graft skipped because the tissue looked adequate on the day.
              </p>
              <p className="font-body text-[15px] md:text-base text-charcoal-light font-light leading-[1.78]">
                Each of those cases looks acceptable at six months. The problem appears at
                three to five years, as recession, a grey shadow through thin tissue, or a
                facial plate that has quietly resorbed. By then the correction costs more
                than the original treatment.
              </p>
              <p className="font-body text-[15px] md:text-base text-charcoal-light font-light leading-[1.78]">
                The STABLE Protocol exists to move those decisions to the front of the
                sequence, where they are still reversible, and to make them explicit rather
                than intuitive. It is a structure for thinking about the case before the
                first irreversible step, not a technique.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── The three principles ── */}
      <section
        className="py-16 md:py-24"
        style={{ background: "linear-gradient(180deg, hsl(40 12% 95%) 0%, hsl(40 15% 96.5%) 100%)" }}
      >
        <div className="luxury-container px-6 md:px-8">
          <motion.div {...fade} transition={{ duration: 0.8 }} className="text-center mb-12 md:mb-14 max-w-2xl mx-auto">
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-charcoal-light/70 mb-5">
              What the name means
            </p>
            <h2 className="font-display text-2xl md:text-[34px] font-light text-navy leading-[1.2]">
              Three commitments, <em className="italic">in order</em>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12 max-w-5xl mx-auto">
            {principles.map((p, i) => (
              <motion.div key={i} {...fade} transition={{ duration: 0.7, delay: i * 0.1 }}>
                <p className="font-body text-[10px] tracking-[0.24em] uppercase text-gold mb-4" style={{ color: "hsl(38 42% 42%)" }}>
                  {p.letter}
                </p>
                <h3 className="font-display text-lg md:text-xl font-light text-navy mb-3.5 leading-snug">
                  {p.title}
                </h3>
                <p className="font-body text-[14.5px] text-charcoal-light font-light leading-[1.72]">
                  {p.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The sequence ── */}
      <section className="py-16 md:py-24" style={{ background: "hsl(40 20% 98%)" }}>
        <div className="luxury-container px-6 md:px-8">
          <motion.div {...fade} transition={{ duration: 0.8 }} className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-charcoal-light/70 mb-5">
              The Immediate Implant Sequence
            </p>
            <h2 className="font-display text-2xl md:text-[34px] font-light text-navy leading-[1.2] mb-6">
              Nine stages, <em className="italic">none of them optional</em>
            </h2>
            <p className="font-body text-[14.5px] text-charcoal-light font-light leading-[1.75]">
              The sequence below is the structure taught in the clinical programme. Each
              stage carries its own decision criteria, materials and verification steps,
              which are covered in the course rather than published here.
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            {sequence.map((s, i) => (
              <motion.div
                key={i}
                {...fade}
                transition={{ duration: 0.55, delay: Math.min(i, 5) * 0.05 }}
                className={`flex gap-5 md:gap-7 py-6 ${i < sequence.length - 1 ? "border-b border-divider" : ""}`}
              >
                <span className="font-display text-xl md:text-2xl font-light text-navy/25 shrink-0 pt-0.5 tabular-nums">
                  {s.n}
                </span>
                <div>
                  <h3 className="font-display text-lg md:text-xl font-light text-navy mb-2 leading-snug">
                    {s.title}
                  </h3>
                  <p className="font-body text-[14.5px] text-charcoal-light font-light leading-[1.72]">
                    {s.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Where it applies ── */}
      <section
        className="py-16 md:py-24"
        style={{ background: "linear-gradient(180deg, hsl(40 15% 96.5%) 0%, hsl(40 12% 94.5%) 100%)" }}
      >
        <div className="luxury-container px-6 md:px-8">
          <motion.div {...fade} transition={{ duration: 0.8 }} className="max-w-2xl mx-auto text-center mb-12">
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-charcoal-light/70 mb-5">
              Where it applies
            </p>
            <h2 className="font-display text-2xl md:text-[34px] font-light text-navy leading-[1.2] mb-6">
              Not only <em className="italic">implants</em>
            </h2>
            <p className="font-body text-[14.5px] text-charcoal-light font-light leading-[1.75]">
              The same tissue-first reasoning governs any restoration that meets the gum.
              The immediate implant sequence is the most fully developed module, not the
              whole system.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8 max-w-3xl mx-auto">
            {applications.map((a, i) => (
              <motion.div key={i} {...fade} transition={{ duration: 0.6, delay: i * 0.07 }}>
                <Link to={a.to} className="group block">
                  <h3 className="font-display text-lg md:text-xl font-light text-navy mb-2 group-hover:opacity-70 transition-opacity duration-300">
                    {a.title}
                  </h3>
                  <p className="font-body text-[14px] text-charcoal-light font-light leading-[1.7]">
                    {a.text}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── For clinicians ── */}
      <section className="py-20 md:py-28" style={{ background: "hsl(220 22% 10%)" }}>
        <div className="luxury-container px-6 md:px-8">
          <motion.div {...fade} transition={{ duration: 0.85 }} className="max-w-2xl mx-auto text-center">
            <p className="font-body text-[10px] tracking-[0.3em] uppercase mb-6" style={{ color: "hsl(220 14% 58%)" }}>
              For Clinicians
            </p>
            <h2
              className="font-display text-2xl md:text-4xl font-light leading-[1.18] mb-7"
              style={{ color: "hsl(40 18% 94%)" }}
            >
              Learn the full protocol
            </h2>
            <p
              className="font-body text-[15px] font-light leading-[1.78] mb-9"
              style={{ color: "hsl(220 12% 70%)" }}
            >
              The complete sequence, including diagnostic criteria, material selection,
              surgical parameters, grafting decisions and laboratory specifications, is
              taught in a structured clinical programme with written guidelines. Courses
              run in the United States and India, for clinicians placing and restoring
              implants who want a repeatable framework rather than a collection of
              techniques.
            </p>
            <Link
              to="/professional-education"
              className="inline-block px-11 py-[17px] font-body text-[11.5px] tracking-[0.22em] uppercase font-medium border transition-all duration-400"
              style={{ color: "hsl(40 18% 92%)", borderColor: "hsl(40 18% 92% / 0.28)" }}
            >
              Courses &amp; Training
            </Link>
            <p className="font-body text-[12px] font-light mt-7" style={{ color: "hsl(220 12% 52%)" }}>
              Written protocol guidelines are provided to enrolled clinicians.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── For patients ── */}
      <section className="py-16 md:py-24" style={{ background: "hsl(40 20% 98%)" }}>
        <div className="luxury-container px-6 md:px-8">
          <motion.div {...fade} transition={{ duration: 0.8 }} className="max-w-2xl mx-auto">
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-charcoal-light/70 mb-5">
              For Patients
            </p>
            <h2 className="font-display text-2xl md:text-[34px] font-light text-navy leading-[1.2] mb-7">
              What this means if you are <em className="italic">the one in the chair</em>
            </h2>
            <div className="space-y-4">
              <p className="font-body text-[15px] md:text-base text-charcoal-light font-light leading-[1.78]">
                You do not need to understand the protocol. What it means practically is
                that your case is assessed against a written checklist before anything
                irreversible happens, that the decisions are made deliberately rather than
                in the moment, and that the same standard applies whether your case is
                straightforward or difficult.
              </p>
              <p className="font-body text-[15px] md:text-base text-charcoal-light font-light leading-[1.78]">
                It also means the person treating you is the person who wrote the method
                and teaches it to other clinicians.
              </p>
            </div>
            <div className="mt-10">
              <Link
                to="/contact"
                className="cta-tactile inline-block px-11 py-[17px] bg-navy text-primary-foreground font-body text-[11.5px] tracking-[0.22em] uppercase font-medium transition-all duration-300 hover:bg-navy/90"
              >
                Request a Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <PageFooter />
    </main>
  );
};

export default StableProtocol;
