import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import SiteNavigation from "@/components/SiteNavigation";
import FooterSection from "@/components/FooterSection";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
};

const cases = [
  {
    title: "Full-Arch Implant Rehabilitation",
    concern:
      "Loss of multiple teeth had made eating uncomfortable and unpredictable. The patient felt limited in what they could enjoy and had lost confidence in social situations.",
    insight:
      "A thorough evaluation revealed that the remaining teeth could no longer provide reliable support. A fixed, implant-supported solution offered the best path to lasting comfort and stability.",
    strategy:
      "A precision-planned full-arch implant restoration was designed to replace the entire upper arch. Treatment focused on structural balance, natural appearance, and long-term durability.",
    outcome: [
      "Comfortable, stable teeth",
      "Confident eating and speaking",
      "Natural-looking result",
      "Built for long-term function",
    ],
  },
  {
    title: "Immediate Implant Restoration",
    concern:
      "A front tooth was suddenly lost due to an accident. The patient needed a dependable replacement quickly, without a visible gap or prolonged treatment.",
    insight:
      "The surrounding bone and tissue were healthy enough to support immediate placement. Acting quickly also helped preserve the natural contour of the gum line.",
    strategy:
      "The damaged tooth was gently removed and an implant placed in the same visit. A temporary tooth was provided immediately, so the patient left the office with a complete smile.",
    outcome: [
      "Tooth replaced same day",
      "Natural gum contour preserved",
      "No visible gap at any stage",
      "Smooth, efficient process",
    ],
  },
  {
    title: "Complex Bite Reconstruction",
    concern:
      "Years of wear had gradually shifted the bite out of balance. The patient experienced jaw tension, difficulty chewing, and a growing sense that things were getting worse over time.",
    insight:
      "The underlying issue was structural. Individual repairs would not solve the problem. A comprehensive approach was needed to restore balance across the entire bite.",
    strategy:
      "A carefully staged plan combined implant placement with custom restorations, rebuilding the bite from the foundation up. Every step was designed to restore comfortable, even function.",
    outcome: [
      "Balanced, comfortable bite",
      "Jaw tension resolved",
      "Stable long-term structure",
      "Renewed daily comfort",
    ],
  },
  {
    title: "Veneer Rehabilitation",
    concern:
      "Uneven spacing, color differences, and shapes that did not feel natural had left the patient hesitant to smile openly. Previous attempts at correction had fallen short.",
    insight:
      "The goal was not to create a dramatic transformation but to bring the teeth into natural harmony with the patient's face. Subtlety and precision were the priority.",
    strategy:
      "Custom porcelain veneers were designed around the patient's facial proportions and personal goals. Minimal preparation preserved healthy tooth structure while achieving a refined, natural result.",
    outcome: [
      "Natural smile harmony",
      "Renewed confidence",
      "Healthy structure preserved",
      "Lasting, refined result",
    ],
  },
  {
    title: "Mandibular Full-Arch Reconstruction",
    concern:
      "A loose lower denture had made everyday life difficult. Eating required constant adjustment, speaking felt uncertain, and the patient had withdrawn from social situations.",
    insight:
      "Despite significant bone loss, careful analysis identified enough support for a fixed implant solution. The goal was to eliminate the denture entirely and restore reliable function.",
    strategy:
      "Implants were positioned to maximize available bone. A fixed prosthesis was precision-engineered to provide immediate improvement in comfort, appearance, and chewing ability.",
    outcome: [
      "No more removable denture",
      "Full chewing ability restored",
      "Clear, confident speech",
      "Designed for lasting stability",
    ],
  },
  {
    title: "Maxillofacial Prosthetic Rehabilitation",
    concern:
      "Following medical treatment, the patient needed restoration of facial structures that affected daily comfort, appearance, and quality of life.",
    insight:
      "This type of rehabilitation requires close coordination between specialists. Understanding the patient's personal goals was just as important as the clinical details.",
    strategy:
      "A custom prosthetic solution was developed in partnership with the patient's medical team. Every element was designed for natural appearance, comfortable fit, and compassionate care.",
    outcome: [
      "Natural facial appearance",
      "Improved daily comfort",
      "Coordinated specialist care",
      "Personally designed solution",
    ],
  },
];

const ClinicalCases = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Clinical Cases | Dr. Akshay Parmar";
    return () => {
      document.title =
        "Dr. Akshay Parmar | Board-Certified Prosthodontist in New Jersey";
    };
  }, []);

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
              Selected Work
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-navy leading-[0.95] mb-8">
              Clinical <span className="italic">Cases</span>
            </h1>
            <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed max-w-xl mx-auto">
              Real patient outcomes.
              <br />
              Precision-planned treatment.
              <br />
              Function, aesthetics, and long-term stability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section
        className="py-10 md:py-14 px-6 md:px-8"
        style={{
          background:
            "linear-gradient(180deg, hsl(40 10% 95%) 0%, hsl(40 12% 93%) 100%)",
        }}
      >
        <div className="luxury-container max-w-3xl text-center">
          <motion.div {...fadeUp} transition={{ duration: 0.7 }}>
            <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed mb-3">
              Every treatment presented here represents a carefully engineered
              clinical solution.
            </p>
            <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
              Cases reflect precision-driven planning, biological respect, and
              structural longevity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cases */}
      {cases.map((c, i) => (
        <section
          key={i}
          className="py-12 md:py-16 px-6 md:px-8"
          style={
            i % 2 === 1
              ? {
                  background:
                    "linear-gradient(180deg, hsl(40 10% 95%) 0%, hsl(40 12% 93%) 100%)",
                }
              : undefined
          }
        >
          <div className="luxury-container max-w-3xl">
            <motion.div {...fadeUp} transition={{ duration: 0.7 }}>
              {/* Case number + title */}
              <div className="flex items-baseline gap-4 mb-6">
                <span className="font-display text-lg font-light text-navy/25">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-light text-navy">
                  {c.title}
                </h2>
              </div>

              {/* Concern + Approach */}
              <div className="space-y-6 mb-8">
                <div>
                  <p className="font-body text-[10px] tracking-[0.3em] uppercase text-charcoal-light mb-3">
                    Patient Concern
                  </p>
                  <p className="font-body text-sm text-charcoal-light font-light leading-relaxed">
                    {c.concern}
                  </p>
                </div>
                <div>
                  <p className="font-body text-[10px] tracking-[0.3em] uppercase text-charcoal-light mb-3">
                    Clinical Insight
                  </p>
                  <p className="font-body text-sm text-charcoal-light font-light leading-relaxed">
                    {c.insight}
                  </p>
                </div>
                <div>
                  <p className="font-body text-[10px] tracking-[0.3em] uppercase text-charcoal-light mb-3">
                    Treatment Strategy
                  </p>
                  <p className="font-body text-sm text-charcoal-light font-light leading-relaxed">
                    {c.strategy}
                  </p>
                </div>
              </div>

              {/* Outcome */}
              <div>
                <p className="font-body text-[10px] tracking-[0.3em] uppercase text-charcoal-light mb-3">
                  Outcome
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {c.outcome.map((o, j) => (
                    <div key={j} className="border-t border-divider pt-3">
                      <p className="font-body text-xs text-charcoal font-light tracking-wide">
                        {o}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Trust Block */}
      <section className="py-12 md:py-16 px-6 md:px-8">
        <div className="luxury-container max-w-3xl text-center">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }}>
            <h2 className="font-display text-3xl md:text-4xl font-light text-navy mb-5">
              Precision. Not <span className="italic">Templates.</span>
            </h2>
            <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed max-w-xl mx-auto">
              Every clinical solution is individually designed based on anatomy,
              biology, and functional dynamics.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-12 md:py-16 px-6 md:px-8"
        style={{
          background:
            "linear-gradient(180deg, hsl(40 10% 95%) 0%, hsl(40 12% 93%) 100%)",
        }}
      >
        <div className="luxury-container max-w-3xl text-center">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }}>
            <h2 className="font-display text-3xl md:text-4xl font-light text-navy mb-5">
              Schedule a <span className="italic">Consultation</span>
            </h2>
            <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed max-w-xl mx-auto mb-8">
              Begin with a comprehensive evaluation to understand your options
              and determine the most appropriate treatment pathway.
            </p>
            <Link
              to="/contact"
              className="inline-block px-10 py-4 bg-navy text-primary-foreground font-body text-[11px] tracking-[0.25em] uppercase transition-all duration-300 hover:bg-navy/90"
            >
              Request Appointment
            </Link>
          </motion.div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
};

export default ClinicalCases;
