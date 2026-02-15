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
      "Patient presented with failing dentition across the upper arch, experiencing difficulty eating and persistent discomfort. Confidence in daily interactions had been significantly affected.",
    approach:
      "Treatment was precision-planned using advanced imaging and guided surgical protocols. Strategically positioned implants supported a fixed full-arch restoration, designed for structural longevity and natural function.",
    outcome: [
      "Restored chewing comfort",
      "Improved speech clarity",
      "Stable, fixed teeth",
      "Natural aesthetic result",
    ],
  },
  {
    title: "Immediate Implant Restoration",
    concern:
      "A front tooth was fractured due to trauma. The patient sought a reliable, same-day solution that would preserve their appearance and avoid a prolonged gap in their smile.",
    approach:
      "The damaged tooth was carefully removed and an implant placed in the same visit. A provisional restoration was delivered immediately, maintaining aesthetics and tissue architecture throughout healing.",
    outcome: [
      "Same-day tooth replacement",
      "Preserved natural tissue contour",
      "Seamless aesthetic integration",
      "Minimal disruption to daily life",
    ],
  },
  {
    title: "Complex Bite Reconstruction",
    concern:
      "Years of wear and multiple failing restorations had compromised the patient's bite stability, causing jaw discomfort and difficulty with everyday function.",
    approach:
      "A comprehensive evaluation guided a staged treatment plan combining implant placement, prosthodontic reconstruction, and precise occlusal design to restore balanced, comfortable function.",
    outcome: [
      "Balanced bite function",
      "Reduced jaw discomfort",
      "Long-term structural stability",
      "Improved overall comfort",
    ],
  },
  {
    title: "Veneer Rehabilitation",
    concern:
      "The patient was self-conscious about the shape, spacing, and color inconsistencies of their front teeth. Previous treatments had not achieved the natural result they desired.",
    approach:
      "Custom-designed porcelain veneers were crafted based on facial proportions, dental anatomy, and the patient's personal goals. Minimal preparation preserved healthy tooth structure while achieving a harmonious, natural-looking result.",
    outcome: [
      "Natural smile harmony",
      "Improved confidence",
      "Minimal tooth preparation",
      "Lasting aesthetic refinement",
    ],
  },
  {
    title: "Mandibular Full-Arch Reconstruction",
    concern:
      "Extensive bone loss and missing teeth in the lower jaw left the patient relying on an unstable removable denture. Eating, speaking, and social comfort were significantly compromised.",
    approach:
      "Strategically placed implants with guided surgical protocols supported a precision-engineered fixed prosthesis. Treatment was designed to maximize available bone and deliver immediate functional improvement.",
    outcome: [
      "Eliminated removable denture",
      "Restored full chewing ability",
      "Improved speech and comfort",
      "Designed for long-term stability",
    ],
  },
  {
    title: "Maxillofacial Prosthetic Rehabilitation",
    concern:
      "Following surgical treatment for a medical condition, the patient required restoration of facial structures to improve comfort, function, and quality of life.",
    approach:
      "A custom-designed prosthetic solution was developed in close coordination with the patient's medical team. Treatment prioritized compassionate care, functional restoration, and natural appearance.",
    outcome: [
      "Restored facial appearance",
      "Improved daily comfort",
      "Coordinated specialist care",
      "Personalized treatment design",
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
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
                    Clinical Approach
                  </p>
                  <p className="font-body text-sm text-charcoal-light font-light leading-relaxed">
                    {c.approach}
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
