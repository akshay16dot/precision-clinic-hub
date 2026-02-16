import { motion } from "framer-motion";
import { useEffect } from "react";
import PageNavigation from "@/components/PageNavigation";
import PageHero from "@/components/PageHero";
import PageCTA from "@/components/PageCTA";
import PageFooter from "@/components/PageFooter";
import fullArchUpper from "@/assets/full-arch-upper.png";
import fullArchLower from "@/assets/full-arch-lower.png";

const beneficiaries = [
  {
    title: "Extensive Tooth Loss",
    description: "Patients experiencing significant tooth loss requiring comprehensive prosthetic rehabilitation of one or both arches.",
  },
  {
    title: "Failing Dentition",
    description: "Individuals with compromised remaining teeth where extraction and full-arch restoration provides superior long-term outcomes.",
  },
  {
    title: "Functional Instability",
    description: "Cases where existing prosthetics or remaining dentition no longer provide adequate masticatory function or occlusal stability.",
  },
  {
    title: "Advanced Restorative Needs",
    description: "Complex clinical presentations requiring multidisciplinary treatment planning and comprehensive prosthetic rehabilitation.",
  },
];

const treatmentGoals = [
  {
    title: "Functional Restoration",
    description: "Re-establishment of complete masticatory function, phonetics, and oral comfort through implant-supported fixed prosthetics.",
  },
  {
    title: "Structural Stability",
    description: "Biomechanically sound implant positioning and prosthetic design ensuring long-term load distribution and osseous health.",
  },
  {
    title: "Aesthetic Integration",
    description: "Prosthetic design harmonized with facial proportions, soft tissue contours, and natural dental anatomy.",
  },
  {
    title: "Long-Term Predictability",
    description: "Evidence-based protocols and precision engineering designed to maximize the longevity and maintainability of the rehabilitation.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
};

const FullArchImplants = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Full-Arch Implants in New Jersey | Dr. Akshay Parmar";
    return () => {
      document.title = "Dr. Akshay Parmar | Board-Certified Prosthodontist in New Jersey";
    };
  }, []);

  return (
    <main className="bg-background">
      <PageNavigation />

      <PageHero
        subtitle="Board-Certified Prosthodontist · New Jersey"
        title="Full-Arch Implant"
        titleItalic="Rehabilitation"
        paragraphs={[
          "Full-arch implant rehabilitation is designed for patients requiring comprehensive restoration of function, stability, and aesthetics.",
          "Dr. Akshay Parmar provides advanced full-arch implant rehabilitation across New Jersey, focusing on precision-driven planning, biological stability, and long-term functional outcomes.",
          "Treatment is guided by prosthodontic principles, structural biomechanics, and individualized care.",
        ]}
      />

      {/* Clinical Prosthesis Showcase */}
      <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: 'linear-gradient(180deg, hsl(220 20% 10%) 0%, hsl(220 18% 14%) 50%, hsl(220 20% 10%) 100%)' }}>
        <div className="luxury-container px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="font-body text-xs tracking-[0.35em] uppercase mb-6" style={{ color: 'hsl(220 15% 55%)' }}>
              Precision Prosthetics
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[0.95]" style={{ color: 'hsl(40 15% 92%)' }}>
              Full Arch Implant
              <br />
              <span className="italic">Rehabilitation</span>
            </h2>
            <p className="font-body text-sm md:text-base font-light leading-relaxed mt-8 max-w-xl mx-auto" style={{ color: 'hsl(220 10% 55%)' }}>
              Restoring function, stability, and aesthetics through precision-engineered implant reconstruction.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="relative max-w-3xl mx-auto"
          >
            {/* Upper arch */}
            <div className="relative mb-6 md:mb-8">
              <div
                className="absolute inset-0 pointer-events-none z-10"
                style={{
                  background: 'radial-gradient(ellipse 100% 100% at center, transparent 55%, hsl(220 20% 10%) 90%)',
                }}
              />
              <img
                src={fullArchUpper}
                alt="Full arch upper implant prosthesis showcasing precision craftsmanship"
                className="w-full h-auto object-contain relative z-0"
              />
            </div>

            {/* Lower arch */}
            <div className="relative">
              <div
                className="absolute inset-0 pointer-events-none z-10"
                style={{
                  background: 'radial-gradient(ellipse 100% 100% at center, transparent 55%, hsl(220 20% 10%) 90%)',
                }}
              />
              <img
                src={fullArchLower}
                alt="Full arch lower implant prosthesis with natural tissue detail"
                className="w-full h-auto object-contain relative z-0"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy & Differentiators */}
      <section className="section-padding" style={{ background: 'linear-gradient(180deg, hsl(40 15% 96%) 0%, hsl(40 20% 98%) 100%)' }}>
        <div className="luxury-container">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <h2 className="font-display text-3xl md:text-5xl font-light text-navy mb-8">
              Precision. Biology. <span className="italic">Longevity.</span>
            </h2>
            <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
              Full-arch implant rehabilitation is not a single procedure. It is a carefully sequenced integration of diagnostic precision, biological understanding, and prosthetic engineering, designed to restore complete oral function with lasting structural stability and natural aesthetics.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px max-w-4xl mx-auto" style={{ backgroundColor: 'hsl(220 15% 90%)' }}>
            {[
              {
                heading: "Prosthetically Driven Planning",
                text: "Treatment begins with the final restoration. Implant positioning is guided by prosthetic design, ensuring optimal load distribution, emergence profile, and long-term retrievability.",
              },
              {
                heading: "Biologically Respectful Protocols",
                text: "Every clinical decision prioritizes soft tissue stability, bone preservation, and controlled healing. Biological integration is the foundation of lasting outcomes.",
              },
              {
                heading: "Precision Engineered Prosthetics",
                text: "Prosthetic components are designed for structural integrity, passive fit, and natural esthetics. Materials and fabrication methods are selected to maximize longevity and function.",
              },
            ].map((block, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="bg-background p-8 md:p-10"
              >
                <h3 className="font-display text-lg md:text-xl font-medium text-navy mb-3">
                  {block.heading}
                </h3>
                <p className="font-body text-sm text-charcoal-light font-light leading-relaxed">
                  {block.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Benefits */}
      <section className="section-padding bg-background">
        <div className="luxury-container">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="text-center mb-20">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-charcoal-light mb-6">
              Clinical Indications
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-navy">
              Who Benefits from Full-Arch Implants
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-divider max-w-4xl mx-auto">
            {beneficiaries.map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-background p-10 md:p-12"
              >
                <h3 className="font-display text-xl md:text-2xl font-medium text-charcoal mb-4">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-charcoal-light font-light leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Approach */}
      <section className="section-padding bg-warm-gray">
        <div className="luxury-container">
          <motion.div {...fadeUp} transition={{ duration: 1 }} className="max-w-3xl mx-auto text-center">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-charcoal-light mb-6">
              Treatment Philosophy
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-navy mb-12">
              Clinical Approach
            </h2>
            <div className="w-12 h-px bg-navy mx-auto mb-12" />
            <p className="font-display text-xl md:text-2xl font-light text-charcoal leading-relaxed mb-8">
              Full-arch rehabilitation demands precision-driven diagnosis, prosthodontic rehabilitation principles, and biologically respectful protocols to achieve long-term stability and function.
            </p>
            <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed max-w-2xl mx-auto">
              Treatment philosophy reflects principles incorporated within the STABLE IMPLANT Protocol™, emphasizing soft tissue stability, bone preservation, and biomechanical integration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Treatment Goals */}
      <section className="section-padding bg-background">
        <div className="luxury-container">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="text-center mb-20">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-charcoal-light mb-6">
              Rehabilitation Outcomes
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-navy">
              Treatment Goals
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-0">
            {treatmentGoals.map((goal, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="border-b border-divider py-10 md:py-12"
              >
                <h3 className="font-display text-xl md:text-2xl font-medium text-charcoal mb-4">
                  {goal.title}
                </h3>
                <p className="font-body text-sm text-charcoal-light font-light leading-relaxed">
                  {goal.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        description="Begin with a comprehensive evaluation to determine the most appropriate full-arch rehabilitation pathway for your clinical needs."
      />
      <PageFooter />
    </main>
  );
};

export default FullArchImplants;
