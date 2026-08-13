import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SiteNavigation from "@/components/SiteNavigation";
import PageFooter from "@/components/PageFooter";
import { usePageSEO } from "@/hooks/usePageSEO";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
};

interface HealingPhase {
  label: string;
  text: string;
}

interface FAQ {
  q: string;
  a: string;
}

interface PracticalItem {
  title: string;
  text: string;
}

interface PatientGuideData {
  pageTitle: string;
  pageDescription?: string;
  subtitle: string;
  title: string;
  titleItalic: string;
  overviewIntro: string;
  overviewDetails: string[];
  healingPhases: HealingPhase[];
  healingRecoveryIntro: string;
  healingRecoveryPoints: string[];
  timelineTitle?: string;
  faqs: FAQ[];
  practicalGuidance: PracticalItem[];
  reassuranceLines: string[];
}

const SectionDivider = () => (
  <div className="luxury-container px-6 md:px-8">
    <div className="w-10 h-px bg-navy/20 mx-auto" />
  </div>
);

const warmBg = {
  background: "linear-gradient(180deg, hsl(40 10% 95%) 0%, hsl(40 12% 93%) 100%)",
};

const PatientGuideLayout = ({ data }: { data: PatientGuideData }) => {
  usePageSEO({
    title: data.pageTitle,
    description: data.pageDescription || `Patient guide: ${data.title} ${data.titleItalic}. What to expect, recovery, and frequently asked questions.`,
  });

  return (
    <main className="bg-background">
      <SiteNavigation />

      {/* Hero */}
      <section className="pt-36 pb-14 md:pt-44 md:pb-18 px-6 md:px-8">
        <div className="luxury-container max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-charcoal-light mb-6">
              {data.subtitle}
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-navy leading-[0.95] mb-8">
              {data.title}{" "}
              <span className="italic">{data.titleItalic}</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <SectionDivider />

      {/* 1. Overview */}
      <section className="py-14 md:py-20 px-6 md:px-8" style={warmBg}>
        <div className="luxury-container max-w-3xl">
          <motion.div {...fadeUp} transition={{ duration: 0.7 }}>
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-charcoal-light mb-4">
              Overview
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-light text-navy mb-6">
              Understanding Your <span className="italic">Treatment</span>
            </h2>
            <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed mb-5">
              {data.overviewIntro}
            </p>
            {data.overviewDetails.map((p, i) => (
              <p key={i} className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed mb-4">
                {p}
              </p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 2. What to Expect: Healing Phases */}
      <section className="py-14 md:py-20 px-6 md:px-8">
        <div className="luxury-container max-w-3xl">
          <motion.div {...fadeUp} transition={{ duration: 0.7 }} className="mb-12">
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-charcoal-light mb-4">
              What to Expect
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-light text-navy">
              {data.timelineTitle ? (
                <>{data.timelineTitle.split(" ").slice(0, -1).join(" ")}{" "}<span className="italic">{data.timelineTitle.split(" ").slice(-1)[0]}</span></>
              ) : (
                <>Your Healing <span className="italic">Timeline</span></>
              )}
            </h2>
          </motion.div>

          <div className="space-y-0">
            {data.healingPhases.map((phase, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="grid grid-cols-[2.5rem_1fr] gap-4 items-start pb-7"
              >
                <span className="font-display text-lg font-light text-navy/30 pt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="border-b border-divider pb-7">
                  <p className="font-display text-lg font-light text-navy mb-1.5">
                    {phase.label}
                  </p>
                  <p className="font-body text-sm text-charcoal-light font-light leading-relaxed">
                    {phase.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Healing & Recovery */}
      <section className="py-14 md:py-20 px-6 md:px-8" style={warmBg}>
        <div className="luxury-container max-w-3xl">
          <motion.div {...fadeUp} transition={{ duration: 0.7 }}>
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-charcoal-light mb-4">
              Healing & Recovery
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-light text-navy mb-6">
              Understanding the <span className="italic">Process</span>
            </h2>
            <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed mb-6">
              {data.healingRecoveryIntro}
            </p>
            <div className="space-y-3">
              {data.healingRecoveryPoints.map((point, i) => (
                <p key={i} className="font-body text-sm text-charcoal font-light leading-relaxed pl-4 border-l-2 border-divider">
                  {point}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. Common Questions */}
      <section className="py-14 md:py-20 px-6 md:px-8">
        <div className="luxury-container max-w-3xl">
          <motion.div {...fadeUp} transition={{ duration: 0.7 }} className="text-center mb-12">
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-charcoal-light mb-4">
              Common Questions
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-light text-navy">
              Patients Often <span className="italic">Ask</span>
            </h2>
          </motion.div>

          <div className="space-y-0">
            {data.faqs.map((faq, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="border-b border-divider py-8"
              >
                <p className="font-display text-lg md:text-xl font-light text-navy mb-3">
                  {faq.q}
                </p>
                <p className="font-body text-sm text-charcoal-light font-light leading-relaxed">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Practical Guidance */}
      <section className="py-14 md:py-20 px-6 md:px-8" style={warmBg}>
        <div className="luxury-container max-w-3xl">
          <motion.div {...fadeUp} transition={{ duration: 0.7 }} className="mb-12">
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-charcoal-light mb-4">
              Practical Guidance
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-light text-navy">
              Simple Steps for <span className="italic">Recovery</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {data.practicalGuidance.map((item, i) => (
              <motion.div key={i} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.08 }}>
                <div className="border-t border-divider pt-5">
                  <p className="font-display text-lg font-light text-navy mb-2">{item.title}</p>
                  <p className="font-body text-sm text-charcoal-light font-light leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Reassurance */}
      <section className="py-14 md:py-20 px-6 md:px-8">
        <div className="luxury-container max-w-3xl text-center">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }}>
            <h2 className="font-display text-3xl md:text-4xl font-light text-navy mb-8">
              You Are in <span className="italic">Expert Hands</span>
            </h2>
            <div className="space-y-4 max-w-xl mx-auto mb-10">
              {data.reassuranceLines.map((line, i) => (
                <p key={i} className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
                  {line}
                </p>
              ))}
            </div>
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-charcoal-light/50">
              Precision. Authority. Calm Confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-20 px-6 md:px-8" style={warmBg}>
        <div className="luxury-container max-w-3xl text-center">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }}>
            <h2 className="font-display text-3xl md:text-4xl font-light text-navy mb-5">
              Questions About Your <span className="italic">Treatment?</span>
            </h2>
            <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed max-w-xl mx-auto mb-8">
              Every treatment journey begins with understanding. We welcome the conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-block px-10 py-4 bg-navy text-primary-foreground font-body text-[11px] tracking-[0.25em] uppercase transition-all duration-300 hover:bg-navy/90"
              >
                Schedule Consultation
              </Link>
              <Link
                to="/patient-education"
                className="inline-block px-10 py-4 border border-navy/25 text-navy font-body text-[11px] tracking-[0.25em] uppercase transition-all duration-300 hover:border-navy/50"
              >
                Back to Guide
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <PageFooter />
    </main>
  );
};

export default PatientGuideLayout;
