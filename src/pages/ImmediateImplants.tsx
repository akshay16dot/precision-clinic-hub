import { motion } from "framer-motion";
import { useEffect } from "react";
import PageNavigation from "@/components/PageNavigation";
import PageFooter from "@/components/PageFooter";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
};

const ImmediateImplants = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Immediate Implant Rehabilitation | Dr. Akshay Parmar";
    return () => {
      document.title = "Dr. Akshay Parmar | Board-Certified Prosthodontist in New Jersey";
    };
  }, []);

  return (
    <main className="bg-background">
      <PageNavigation />

      {/* Hero — Dark cinematic */}
      <section
        className="relative min-h-[85vh] flex items-center justify-center px-6 md:px-8"
        style={{
          background: "linear-gradient(180deg, hsl(30 8% 8%) 0%, hsl(28 6% 12%) 40%, hsl(30 8% 10%) 100%)",
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
            Precision-driven tooth replacement designed for stability, aesthetics, and biological harmony.
          </p>
          <div
            className="w-12 h-px mx-auto mb-8"
            style={{ backgroundColor: "hsl(40 15% 92% / 0.15)" }}
          />
          <p
            className="font-body text-xs tracking-[0.3em] uppercase mb-12"
            style={{ color: "hsl(30 6% 40%)" }}
          >
            Planning determines predictability.
          </p>
          <a
            href="/contact"
            className="inline-block font-body text-xs tracking-[0.3em] uppercase px-10 py-4 border transition-all duration-500"
            style={{
              color: "hsl(40 15% 85%)",
              borderColor: "hsl(40 15% 85% / 0.25)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "hsl(40 15% 92%)";
              e.currentTarget.style.color = "hsl(30 8% 10%)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "hsl(40 15% 85%)";
            }}
          >
            Request a Consultation
          </a>
        </motion.div>
      </section>

      {/* Treatment Explanation */}
      <section
        className="py-24 md:py-36"
        style={{
          background: "linear-gradient(180deg, hsl(40 20% 98%) 0%, hsl(40 15% 96%) 100%)",
        }}
      >
        <div className="luxury-container">
          <motion.div {...fadeUp} transition={{ duration: 1 }} className="max-w-2xl mx-auto text-center">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-charcoal-light/60 mb-6">
              Treatment Overview
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-light text-navy leading-tight mb-10">
              What Is Immediate Implant <span className="italic">Rehabilitation?</span>
            </h2>
            <div className="space-y-6 mb-12">
              <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
                Immediate implant rehabilitation refers to the placement of a dental implant at the time of tooth removal, allowing structured replacement while preserving bone architecture and soft tissue contours.
              </p>
              <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
                When appropriate clinical conditions are present, this approach supports stability, aesthetic integration, and biological preservation.
              </p>
              <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
                Successful outcomes depend on careful diagnosis, atraumatic technique, and precision-driven planning.
              </p>
            </div>
            <div className="w-12 h-px bg-navy/20 mx-auto mb-8" />
            <p className="font-body text-xs tracking-[0.3em] uppercase text-charcoal-light/60">
              Suitability is diagnosis-dependent.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits / Patient Perspective */}
      <section
        className="py-24 md:py-36"
        style={{
          background: "linear-gradient(180deg, hsl(40 12% 95%) 0%, hsl(40 18% 97%) 100%)",
        }}
      >
        <div className="luxury-container">
          <motion.div {...fadeUp} transition={{ duration: 1 }} className="max-w-2xl mx-auto text-center">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-charcoal-light/60 mb-6">
              Patient Perspective
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-light text-navy leading-tight mb-10">
              Why Patients Consider <span className="italic">This Approach</span>
            </h2>
            <div className="space-y-6 mb-12">
              <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
                When clinical conditions are appropriate, immediate implant rehabilitation offers several potential advantages.
              </p>
              <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
                This approach may help preserve natural bone structure, maintain gum contours, and reduce the number of surgical interventions required.
              </p>
              <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
                By stabilizing the replacement process early, functional comfort and aesthetic integration can often be achieved in a highly controlled manner.
              </p>
              <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
                Suitability and outcomes depend entirely on individualized diagnosis and structured planning.
              </p>
            </div>
            <div className="w-12 h-px bg-navy/20 mx-auto mb-8" />
            <p className="font-body text-xs tracking-[0.3em] uppercase text-charcoal-light/60">
              Predictability begins with evaluation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Clinical Philosophy / Authority */}
      <section
        className="py-24 md:py-36"
        style={{
          background: "linear-gradient(180deg, hsl(40 15% 96%) 0%, hsl(40 20% 98%) 100%)",
        }}
      >
        <div className="luxury-container">
          <motion.div {...fadeUp} transition={{ duration: 1 }} className="max-w-2xl mx-auto text-center">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-charcoal-light/60 mb-6">
              Clinical Framework
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-light text-navy leading-tight mb-10">
              A Structured Approach <span className="italic">to Stability</span>
            </h2>
            <div className="space-y-6 mb-12">
              <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
                Immediate implant rehabilitation requires far more than procedural execution.
              </p>
              <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
                Treatment decisions are guided by a structured clinical framework designed to ensure biological compatibility, mechanical stability, and long-term functional integration.
              </p>
              <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
                Care is performed following the principles of the STABLE Protocol™, a precision-driven methodology emphasizing diagnosis, tissue preservation, implant stability, and prosthetic harmony.
              </p>
              <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
                This protocol-based approach is taught internationally to clinicians seeking predictable, evidence-aligned outcomes.
              </p>
            </div>
            <div className="w-12 h-px bg-navy/20 mx-auto mb-8" />
            <p className="font-body text-xs tracking-[0.3em] uppercase text-charcoal-light/60">
              Stability is engineered, not assumed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Candidate Identification */}
      <section
        className="py-24 md:py-36"
        style={{
          background: "linear-gradient(180deg, hsl(40 18% 97%) 0%, hsl(40 12% 95%) 100%)",
        }}
      >
        <div className="luxury-container">
          <motion.div {...fadeUp} transition={{ duration: 1 }} className="max-w-2xl mx-auto text-center">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-charcoal-light/60 mb-6">
              Patient Candidacy
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-light text-navy leading-tight mb-10">
              When Is This Approach <span className="italic">Appropriate?</span>
            </h2>
            <div className="space-y-6 mb-12">
              <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
                Immediate implant rehabilitation is considered when teeth require removal and surrounding biological conditions support stable replacement.
              </p>
              <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
                Candidacy depends on bone support, gum health, bite dynamics, and overall systemic health factors.
              </p>
              <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
                A comprehensive clinical evaluation determines whether this approach provides the safest and most predictable solution.
              </p>
            </div>
            <div className="w-12 h-px bg-navy/20 mx-auto mb-8" />
            <p className="font-body text-xs tracking-[0.3em] uppercase text-charcoal-light/60">
              Every recommendation is diagnosis-driven.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section
        className="py-28 md:py-40"
        style={{
          background: "linear-gradient(180deg, hsl(40 12% 95%) 0%, hsl(40 15% 96%) 100%)",
        }}
      >
        <div className="luxury-container">
          <motion.div {...fadeUp} transition={{ duration: 1 }} className="max-w-2xl mx-auto text-center">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-charcoal-light/60 mb-6">
              Next Step
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-light text-navy leading-tight mb-10">
              Begin With a Comprehensive <span className="italic">Evaluation</span>
            </h2>
            <div className="space-y-6 mb-12">
              <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
                Immediate implant rehabilitation begins with a detailed clinical assessment designed to evaluate biological, functional, and structural factors unique to each patient.
              </p>
              <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
                This diagnostic phase allows treatment options to be discussed with clarity, precision, and clinical discretion.
              </p>
            </div>
            <div className="w-12 h-px bg-navy/20 mx-auto mb-8" />
            <p className="font-body text-xs tracking-[0.3em] uppercase text-charcoal-light/60 mb-12">
              Every recommendation is diagnosis-driven.
            </p>
            <a
              href="/contact"
              className="inline-block font-body text-xs tracking-[0.3em] uppercase border border-navy/30 text-navy px-10 py-4 hover:bg-navy hover:text-warm-white transition-all duration-500"
            >
              Request a Private Consultation
            </a>
          </motion.div>
        </div>
      </section>

      <PageFooter />
    </main>
  );
};

export default ImmediateImplants;
