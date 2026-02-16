import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageNavigation from "@/components/PageNavigation";
import PageFooter from "@/components/PageFooter";
import immediateCase1Before from "@/assets/immediate-case1-before.png";
import immediateCase1After from "@/assets/immediate-case1-after.png";
import immediateCase2Before from "@/assets/immediate-case2-before.png";
import immediateCase2After from "@/assets/immediate-case2-after.png";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
};

const faqItems = [
  {
    question: "Is same-day treatment painful?",
    answer:
      "Most patients report less discomfort than expected. Modern protocols are designed around precision and comfort, and recovery is typically manageable with clear instructions and structured follow-up.",
  },
  {
    question: "Will it look natural right away?",
    answer:
      "The temporary restoration is designed to look natural and protect the site while tissues heal. The final restoration is refined after adaptation, so the end result looks balanced and stable.",
  },
  {
    question: "How long does the full process take?",
    answer:
      "Timelines vary, but immediate rehabilitation often reduces the overall journey by minimizing separate stages. The final schedule is confirmed after evaluation and planning.",
  },
];

const ImmediateImplants = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Immediate Implant Rehabilitation | Dr. Akshay Parmar";
    return () => {
      document.title =
        "Dr. Akshay Parmar | Board-Certified Prosthodontist in New Jersey";
    };
  }, []);

  return (
    <main className="bg-background">
      <PageNavigation />

      {/* ─── HERO ─── */}
      <section
        className="relative min-h-[90vh] flex items-center justify-center px-6 md:px-8"
        style={{
          background:
            "linear-gradient(180deg, hsl(30 8% 8%) 0%, hsl(28 6% 12%) 40%, hsl(30 8% 10%) 100%)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto"
        >
          <p
            className="font-body text-xs tracking-[0.4em] uppercase mb-8"
            style={{ color: "hsl(30 6% 45%)" }}
          >
            Board-Certified Prosthodontist · New Jersey
          </p>
          <h1
            className="font-display text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[0.95] mb-8"
            style={{ color: "hsl(40 15% 92%)" }}
          >
            Immediate Implant
            <br />
            <span className="italic">Rehabilitation</span>
          </h1>
          <p
            className="font-body text-sm md:text-base font-light leading-relaxed max-w-xl mx-auto mb-10"
            style={{ color: "hsl(30 8% 55%)" }}
          >
            A modern, stability-first approach to replacing teeth with natural
            aesthetics and long-term simplicity.
          </p>
          <div
            className="w-12 h-px mx-auto mb-8"
            style={{ backgroundColor: "hsl(40 15% 92% / 0.15)" }}
          />
          <p
            className="font-body text-xs tracking-[0.3em] uppercase mb-14"
            style={{ color: "hsl(30 6% 40%)" }}
          >
            Stability is engineered, not assumed.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="/contact"
              className="inline-block font-body text-xs tracking-[0.3em] uppercase px-10 py-4 border transition-all duration-500 hover:bg-[hsl(40_15%_92%)] hover:text-[hsl(30_8%_10%)]"
              style={{
                color: "hsl(40 15% 85%)",
                borderColor: "hsl(40 15% 85% / 0.25)",
              }}
            >
              Request a Private Consultation
            </Link>
            <a
              href="#same-day-outcomes"
              className="font-body text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:opacity-70"
              style={{
                color: "hsl(30 8% 55%)",
                borderBottom: "1px solid hsl(30 8% 55% / 0.3)",
                paddingBottom: "2px",
              }}
            >
              See Same-Day Transformations
            </a>
          </div>
        </motion.div>
      </section>

      {/* ─── SECTION 1: WHAT IT IS ─── */}
      <section
        className="py-24 md:py-36"
        style={{
          background:
            "linear-gradient(180deg, hsl(40 20% 98%) 0%, hsl(40 15% 96%) 100%)",
        }}
      >
        <div className="luxury-container">
          <motion.div
            {...fadeUp}
            transition={{ duration: 1 }}
            className="max-w-2xl mx-auto text-center"
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-charcoal-light/60 mb-6">
              Treatment Overview
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-light text-navy leading-tight mb-10">
              What This Means,{" "}
              <span className="italic">in Plain Language</span>
            </h2>
            <div className="space-y-6 mb-12">
              <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
                Immediate implant rehabilitation means replacing a tooth at the
                same appointment it is removed, when stability can be
                predictably achieved.
              </p>
              <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
                Instead of leaving a space and returning months later to restart
                the process, treatment can often begin immediately with a
                carefully designed temporary restoration.
              </p>
              <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
                The objective is simple: preserve biology, restore function, and
                maintain a natural appearance from day one.
              </p>
            </div>
            <div className="w-12 h-px bg-navy/20 mx-auto mb-8" />
            <p className="font-body text-xs tracking-[0.3em] uppercase text-charcoal-light/60">
              Modern planning makes the process more controlled than most
              patients expect.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── SECTION 2: WHY PREFERRED ─── */}
      <section
        className="py-24 md:py-36"
        style={{
          background:
            "linear-gradient(180deg, hsl(40 12% 95%) 0%, hsl(40 18% 97%) 100%)",
        }}
      >
        <div className="luxury-container">
          <motion.div
            {...fadeUp}
            transition={{ duration: 1 }}
            className="max-w-2xl mx-auto text-center"
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-charcoal-light/60 mb-6">
              Patient Perspective
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-light text-navy leading-tight mb-10">
              Why Many Patients Prefer{" "}
              <span className="italic">Immediate Treatment</span>
            </h2>
            <div className="space-y-6 mb-12">
              <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
                When performed with a stability-first plan, immediate
                rehabilitation can make the overall journey feel simpler and
                more efficient.
              </p>
              <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
                It can reduce the number of separate surgical phases, shorten
                the total timeline, and help preserve existing bone and gum
                contours.
              </p>
              <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
                Just as importantly, starting with a well-designed provisional
                restoration often makes the final result easier to refine and
                less complex later.
              </p>
            </div>
            <div className="w-12 h-px bg-navy/20 mx-auto mb-8" />
            <p className="font-body text-xs tracking-[0.3em] uppercase text-charcoal-light/60">
              Less interruption. More continuity. Better long-term control.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── SECTION 3: DO YOU QUALIFY ─── */}
      <section
        className="py-24 md:py-36"
        style={{
          background:
            "linear-gradient(180deg, hsl(40 15% 96%) 0%, hsl(40 20% 98%) 100%)",
        }}
      >
        <div className="luxury-container">
          <motion.div
            {...fadeUp}
            transition={{ duration: 1 }}
            className="max-w-2xl mx-auto text-center"
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-charcoal-light/60 mb-6">
              Patient Candidacy
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-light text-navy leading-tight mb-10">
              Do You Likely <span className="italic">Qualify?</span>
            </h2>
            <div className="space-y-6 mb-12">
              <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
                In the majority of situations, immediate rehabilitation is
                possible with proper diagnosis, planning, and surgical
                execution.
              </p>
              <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
                The key is not where the tooth is located, but whether stable
                support and healthy tissue conditions can be created and
                maintained.
              </p>
              <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
                A comprehensive evaluation confirms the safest path, but most
                patients are surprised to learn how often immediate treatment
                can be done predictably.
              </p>
            </div>
            <div className="w-12 h-px bg-navy/20 mx-auto mb-8" />
            <p className="font-body text-xs tracking-[0.3em] uppercase text-charcoal-light/60">
              If stability can be achieved, immediate treatment is usually the
              preferred strategy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── SECTION 4: SAME-DAY OUTCOMES ─── */}
      <section
        id="same-day-outcomes"
        className="py-24 md:py-36"
        style={{
          background:
            "linear-gradient(180deg, hsl(30 8% 8%) 0%, hsl(28 6% 12%) 40%, hsl(30 8% 10%) 100%)",
        }}
      >
        <div className="luxury-container">
          <motion.div
            {...fadeUp}
            transition={{ duration: 1 }}
            className="max-w-2xl mx-auto text-center mb-16 md:mb-20"
          >
            <p
              className="font-body text-xs tracking-[0.3em] uppercase mb-6"
              style={{ color: "hsl(30 6% 45%)" }}
            >
              Clinical Outcomes
            </p>
            <h2
              className="font-display text-3xl md:text-5xl font-light leading-tight mb-10"
              style={{ color: "hsl(40 15% 92%)" }}
            >
              Same-Day <span className="italic">Transformations</span>
            </h2>
            <div className="space-y-6 mb-12">
              <p
                className="font-body text-sm md:text-base font-light leading-relaxed"
                style={{ color: "hsl(30 8% 55%)" }}
              >
                In many cases, a stable implant and a carefully designed
                temporary restoration can be completed the same day.
              </p>
              <p
                className="font-body text-sm md:text-base font-light leading-relaxed"
                style={{ color: "hsl(30 8% 55%)" }}
              >
                The purpose is not speed. The purpose is stability, tissue
                preservation, and a natural-looking result from the beginning.
              </p>
            </div>
            <div
              className="w-12 h-px mx-auto mb-8"
              style={{ backgroundColor: "hsl(40 15% 92% / 0.15)" }}
            />
            <p
              className="font-body text-xs tracking-[0.3em] uppercase"
              style={{ color: "hsl(30 6% 40%)" }}
            >
              Immediate does not mean rushed. It means precisely planned.
            </p>
          </motion.div>

          {/* Case 1 */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-20 md:mb-28"
          >
            <p
              className="font-body text-[10px] tracking-[0.35em] uppercase mb-5"
              style={{ color: "hsl(30 6% 35%)" }}
            >
              Clinical Transformation
            </p>
            <div className="grid grid-cols-2 gap-4 md:gap-8 items-start">
              <div>
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={immediateCase1Before}
                    alt="Case 1, before immediate implant placement"
                    className="w-full h-full object-cover object-center"
                    style={{
                      filter: "saturate(0.85) contrast(1.05)",
                      maskImage:
                        "radial-gradient(ellipse 90% 85% at center, black 60%, transparent 100%)",
                      WebkitMaskImage:
                        "radial-gradient(ellipse 90% 85% at center, black 60%, transparent 100%)",
                    }}
                  />
                </div>
                <p
                  className="font-body text-[10px] tracking-[0.3em] uppercase text-center mt-4"
                  style={{ color: "hsl(30 6% 40%)" }}
                >
                  Before
                </p>
              </div>
              <div>
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={immediateCase1After}
                    alt="Case 1, same-day implant restoration result"
                    className="w-full h-full object-cover object-center"
                    style={{
                      filter: "saturate(0.85) contrast(1.05)",
                      maskImage:
                        "radial-gradient(ellipse 90% 85% at center, black 60%, transparent 100%)",
                      WebkitMaskImage:
                        "radial-gradient(ellipse 90% 85% at center, black 60%, transparent 100%)",
                    }}
                  />
                </div>
                <p
                  className="font-body text-[10px] tracking-[0.3em] uppercase text-center mt-4"
                  style={{ color: "hsl(30 6% 40%)" }}
                >
                  After
                </p>
              </div>
            </div>
          </motion.div>

          {/* Case 2 */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 1, delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <p
              className="font-body text-[10px] tracking-[0.35em] uppercase mb-5"
              style={{ color: "hsl(30 6% 35%)" }}
            >
              Clinical Transformation
            </p>
            <div className="grid grid-cols-2 gap-4 md:gap-8 items-start">
              <div>
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={immediateCase2Before}
                    alt="Case 2, before immediate implant placement"
                    className="w-full h-full object-cover object-center"
                    style={{
                      filter: "saturate(0.85) contrast(1.05)",
                      maskImage:
                        "radial-gradient(ellipse 90% 85% at center, black 60%, transparent 100%)",
                      WebkitMaskImage:
                        "radial-gradient(ellipse 90% 85% at center, black 60%, transparent 100%)",
                    }}
                  />
                </div>
                <p
                  className="font-body text-[10px] tracking-[0.3em] uppercase text-center mt-4"
                  style={{ color: "hsl(30 6% 40%)" }}
                >
                  Before
                </p>
              </div>
              <div>
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={immediateCase2After}
                    alt="Case 2, same-day implant restoration result"
                    className="w-full h-full object-cover object-center"
                    style={{
                      filter: "saturate(0.85) contrast(1.05)",
                      maskImage:
                        "radial-gradient(ellipse 90% 85% at center, black 60%, transparent 100%)",
                      WebkitMaskImage:
                        "radial-gradient(ellipse 90% 85% at center, black 60%, transparent 100%)",
                    }}
                  />
                </div>
                <p
                  className="font-body text-[10px] tracking-[0.3em] uppercase text-center mt-4"
                  style={{ color: "hsl(30 6% 40%)" }}
                >
                  After
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── SECTION 5: STABLE PROTOCOL ─── */}
      <section
        className="py-24 md:py-36"
        style={{
          background:
            "linear-gradient(180deg, hsl(40 20% 98%) 0%, hsl(40 12% 95%) 100%)",
        }}
      >
        <div className="luxury-container">
          <motion.div
            {...fadeUp}
            transition={{ duration: 1 }}
            className="max-w-2xl mx-auto text-center"
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-charcoal-light/60 mb-6">
              Clinical Framework
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-light text-navy leading-tight mb-10">
              A Protocol, <span className="italic">Not a Shortcut</span>
            </h2>
            <div className="space-y-6 mb-12">
              <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
                Immediate implant rehabilitation succeeds when it is guided by a
                structured framework, not a quick technique.
              </p>
              <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
                This approach follows the principles of the STABLE Protocol,
                emphasizing diagnosis, tissue preservation, implant stability,
                and prosthetic harmony from the start.
              </p>
              <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
                The same protocol-driven method is used to teach clinicians
                internationally, because predictable outcomes come from
                repeatable planning and disciplined execution.
              </p>
            </div>
            <div className="w-12 h-px bg-navy/20 mx-auto mb-8" />
            <p className="font-body text-xs tracking-[0.3em] uppercase text-charcoal-light/60">
              Predictability comes from structure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── SECTION 6: WHAT TO EXPECT ─── */}
      <section
        className="py-24 md:py-36"
        style={{
          background:
            "linear-gradient(180deg, hsl(40 15% 96%) 0%, hsl(40 18% 97%) 100%)",
        }}
      >
        <div className="luxury-container">
          <motion.div
            {...fadeUp}
            transition={{ duration: 1 }}
            className="max-w-2xl mx-auto text-center"
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-charcoal-light/60 mb-6">
              Patient Journey
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-light text-navy leading-tight mb-10">
              What to <span className="italic">Expect</span>
            </h2>
            <div className="space-y-6 mb-12">
              <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
                Treatment begins with a comprehensive evaluation, including
                digital imaging, bite assessment, and a stability-driven plan.
              </p>
              <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
                If immediate rehabilitation is appropriate, the implant and
                temporary restoration can often be completed in a controlled,
                methodical sequence.
              </p>
              <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
                A refinement phase follows, allowing tissues to adapt and
                details to be perfected before the final restoration is
                delivered.
              </p>
              <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
                The process is designed to feel clear, calm, and predictable.
              </p>
            </div>
            <div className="w-12 h-px bg-navy/20 mx-auto mb-8" />
            <p className="font-body text-xs tracking-[0.3em] uppercase text-charcoal-light/60">
              Clarity replaces uncertainty.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── SECTION 7: FAQ ─── */}
      <section
        className="py-24 md:py-36"
        style={{
          background:
            "linear-gradient(180deg, hsl(40 12% 95%) 0%, hsl(40 15% 96%) 100%)",
        }}
      >
        <div className="luxury-container">
          <motion.div
            {...fadeUp}
            transition={{ duration: 1 }}
            className="max-w-2xl mx-auto text-center mb-16 md:mb-20"
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-charcoal-light/60 mb-6">
              Patient Questions
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-light text-navy leading-tight">
              Common Patient <span className="italic">Questions</span>
            </h2>
          </motion.div>

          <div className="max-w-2xl mx-auto space-y-16 md:space-y-20">
            {faqItems.map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="text-center"
              >
                <h3 className="font-display text-xl md:text-2xl font-light text-navy mb-5">
                  {item.question}
                </h3>
                <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
                  {item.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Guide Link */}
      <section className="py-12 md:py-16 px-6 md:px-8" style={{ background: "linear-gradient(180deg, hsl(40 15% 96%) 0%, hsl(40 18% 97%) 100%)" }}>
        <div className="luxury-container text-center">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }}>
            <Link
              to="/guide/immediate-implants"
              className="inline-block font-body text-[10px] tracking-[0.25em] uppercase text-navy border-b border-navy/30 pb-0.5 hover:border-navy transition-colors"
            >
              Learn About the Process
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── SECTION 8: FINAL CTA ─── */}
      <section
        className="py-28 md:py-40 px-6 md:px-8"
        style={{
          background:
            "linear-gradient(180deg, hsl(40 18% 97%) 0%, hsl(40 12% 95%) 100%)",
        }}
      >
        <div className="luxury-container">
          <motion.div
            {...fadeUp}
            transition={{ duration: 1 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="w-12 h-px bg-navy/20 mx-auto mb-12" />
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-light text-navy leading-tight mb-8">
              Begin With a Comprehensive
              <br />
              <span className="italic">Evaluation</span>
            </h2>
            <div className="space-y-5 mb-10">
              <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
                The first step is a stability-focused assessment to confirm the
                safest and most predictable plan for your case.
              </p>
              <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
                Most patients are candidates for immediate rehabilitation, and
                the evaluation makes the path forward clear.
              </p>
            </div>
            <div className="w-12 h-px bg-navy/20 mx-auto mb-8" />
            <p className="font-body text-xs tracking-[0.3em] uppercase text-charcoal-light/60 mb-14">
              Every recommendation is diagnosis-driven.
            </p>
            <Link
              to="/contact"
              className="inline-block px-12 py-4 bg-navy text-primary-foreground font-body text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:opacity-90 mb-6"
            >
              Request a Private Consultation
            </Link>
            <p className="font-body text-[11px] text-charcoal-light/50 font-light tracking-wide">
              Private, structured, and focused on long-term outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      <PageFooter />
    </main>
  );
};

export default ImmediateImplants;
