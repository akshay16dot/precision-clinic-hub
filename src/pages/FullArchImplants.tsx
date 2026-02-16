import { motion } from "framer-motion";
import { useEffect } from "react";
import PageNavigation from "@/components/PageNavigation";
import PageHero from "@/components/PageHero";
import PageCTA from "@/components/PageCTA";
import PageFooter from "@/components/PageFooter";
import fullArchUpper from "@/assets/full-arch-upper-dark.png";
import fullArchLower from "@/assets/full-arch-lower-dark.png";

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

      {/* Clinical Prosthesis Showcase – Three Column Editorial */}
      <section className="relative py-16 md:py-24 overflow-hidden" style={{ background: 'linear-gradient(180deg, hsl(30 8% 10%) 0%, hsl(28 6% 12%) 50%, hsl(30 8% 10%) 100%)' }}>
        <div className="relative max-w-[90rem] mx-auto px-0">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-0">
            
            {/* Left image – edge anchored */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2 }}
              className="hidden md:block"
            >
              <img
                src={fullArchUpper}
                alt="Full arch upper implant prosthesis showcasing precision craftsmanship"
                className="w-full h-auto object-contain scale-110 origin-left"
                style={{
                  maskImage: 'radial-gradient(ellipse 75% 70% at 55% 50%, black 40%, transparent 80%)',
                  WebkitMaskImage: 'radial-gradient(ellipse 75% 70% at 55% 50%, black 40%, transparent 80%)',
                }}
              />
            </motion.div>

            {/* Center text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-center px-6 md:px-10 lg:px-14 py-8 md:py-0 max-w-lg mx-auto"
            >
              <p className="font-body text-xs tracking-[0.35em] uppercase mb-6" style={{ color: 'hsl(30 6% 50%)' }}>
                Precision Prosthetics
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[0.95]" style={{ color: 'hsl(40 15% 92%)' }}>
                Full Arch Implant
                <br />
                <span className="italic">Rehabilitation</span>
              </h2>
              <p className="font-body text-sm md:text-base font-light leading-relaxed mt-8" style={{ color: 'hsl(30 6% 50%)' }}>
                Restoring function, stability, and aesthetics through precision-engineered implant reconstruction.
              </p>
            </motion.div>

            {/* Right image – edge anchored */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.3 }}
              className="hidden md:block"
            >
              <img
                src={fullArchLower}
                alt="Full arch lower implant prosthesis with natural tissue detail"
                className="w-full h-auto object-contain scale-110 origin-right"
                style={{
                  maskImage: 'radial-gradient(ellipse 75% 70% at 45% 50%, black 40%, transparent 80%)',
                  WebkitMaskImage: 'radial-gradient(ellipse 75% 70% at 45% 50%, black 40%, transparent 80%)',
                }}
              />
            </motion.div>
          </div>

          {/* Mobile: stacked images */}
          <div className="md:hidden px-6 mt-8 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={fullArchUpper}
                alt="Upper arch prosthesis"
                className="w-full h-auto object-contain"
                style={{
                  maskImage: 'radial-gradient(ellipse 90% 85% at center, black 40%, transparent 80%)',
                  WebkitMaskImage: 'radial-gradient(ellipse 90% 85% at center, black 40%, transparent 80%)',
                }}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <img
                src={fullArchLower}
                alt="Lower arch prosthesis"
                className="w-full h-auto object-contain"
                style={{
                  maskImage: 'radial-gradient(ellipse 90% 85% at center, black 40%, transparent 80%)',
                  WebkitMaskImage: 'radial-gradient(ellipse 90% 85% at center, black 40%, transparent 80%)',
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Patient Education – What Is Full Arch */}
      <section className="section-padding bg-background">
        <div className="luxury-container">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="max-w-3xl mx-auto text-center mb-14 md:mb-18">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-charcoal-light mb-6">
              Patient Guide
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-light text-navy mb-8">
              What Is Full Arch Implant Rehabilitation?
            </h2>
            <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
              Full arch implant rehabilitation is a fixed, non-removable solution designed to replace an entire set of missing or failing teeth. Using a small number of strategically placed dental implants, a complete set of teeth is securely anchored to the jaw, restoring natural chewing function, speech clarity, and confident aesthetics.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px max-w-4xl mx-auto" style={{ backgroundColor: 'hsl(220 15% 90%)' }}>
            {[
              {
                title: "Who Is This Treatment For?",
                text: "Patients experiencing multiple missing teeth, failing dental work, loose or uncomfortable dentures, or difficulty chewing. This treatment is designed for those seeking a permanent, stable solution.",
              },
              {
                title: "How Does It Work?",
                text: "A small number of implants are placed into the jawbone to support a full set of fixed teeth. The result is a restoration that looks, feels, and functions like natural teeth, without the need for removal or adhesives.",
              },
              {
                title: "What Are the Benefits?",
                text: "Restored chewing strength and comfort. Improved speech clarity. Preserved jawbone health. A natural, confident appearance. Long-term stability designed to last.",
              },
              {
                title: "Is It Right for Me?",
                text: "Candidacy depends on bone support, gum health, and overall medical condition. A comprehensive clinical evaluation will determine the most appropriate treatment pathway for your individual needs.",
              },
            ].map((block, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-background p-8 md:p-10"
              >
                <h3 className="font-display text-lg md:text-xl font-medium text-navy mb-3">
                  {block.title}
                </h3>
                <p className="font-body text-sm text-charcoal-light font-light leading-relaxed">
                  {block.text}
                </p>
              </motion.div>
            ))}
          </div>
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
