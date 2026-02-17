import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SiteNavigation from "@/components/SiteNavigation";
import PageHero from "@/components/PageHero";
import PageCTA from "@/components/PageCTA";
import PageFooter from "@/components/PageFooter";
import { usePageSEO } from "@/hooks/usePageSEO";
import fullArchLeft from "@/assets/full-arch-left.png";
import fullArchLower from "@/assets/full-arch-lower.png";
import outcome1Before from "@/assets/outcome-1-before.png";
import outcome1After from "@/assets/outcome-1-after.png";
import outcome2Before from "@/assets/outcome-2-before.png";
import outcome2After from "@/assets/outcome-2-after.png";
import outcome3Before from "@/assets/outcome-3-before.png";
import outcome3After from "@/assets/outcome-3-after.png";

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
  usePageSEO({
    title: "Full-Arch Implant Rehabilitation in NJ | Dr. Akshay Parmar",
    description: "Full-arch implant reconstruction by a Board-Certified Prosthodontist. Comprehensive rehabilitation for patients with extensive tooth loss, failing dentition, or unstable prosthetics in New Jersey.",
  });

  return (
    <main className="bg-background">
      <SiteNavigation />

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
              className="hidden md:block mix-blend-lighten"
            >
              <img
                src={fullArchLeft}
                alt="Full arch implant prosthesis showcasing precision craftsmanship"
                className="w-full h-auto object-contain origin-left"
                style={{
                  filter: 'sepia(0.08) saturate(1.05) brightness(0.95) contrast(1.02)',
                  maskImage: 'radial-gradient(ellipse 90% 85% at 50% 50%, black 40%, transparent 75%)',
                  WebkitMaskImage: 'radial-gradient(ellipse 90% 85% at 50% 50%, black 40%, transparent 75%)',
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
              className="hidden md:block mix-blend-lighten"
            >
              <img
                src={fullArchLower}
                alt="Full arch lower implant prosthesis with natural tissue detail"
                className="w-full h-auto object-contain scale-110 origin-right"
                style={{
                  filter: 'sepia(0.08) saturate(1.05) brightness(0.95) contrast(1.02)',
                  maskImage: 'radial-gradient(ellipse 80% 75% at 45% 50%, black 30%, transparent 70%)',
                  WebkitMaskImage: 'radial-gradient(ellipse 80% 75% at 45% 50%, black 30%, transparent 70%)',
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
              className="mix-blend-lighten"
            >
              <img src={fullArchLeft} alt="Upper arch prosthesis" className="w-full h-auto object-contain" style={{ filter: 'sepia(0.08) saturate(1.05) brightness(0.95) contrast(1.02)', maskImage: 'radial-gradient(ellipse 90% 85% at center, black 35%, transparent 70%)', WebkitMaskImage: 'radial-gradient(ellipse 90% 85% at center, black 35%, transparent 70%)' }} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mix-blend-lighten"
            >
              <img src={fullArchLower} alt="Lower arch prosthesis" className="w-full h-auto object-contain" style={{ filter: 'sepia(0.08) saturate(1.05) brightness(0.95) contrast(1.02)', maskImage: 'radial-gradient(ellipse 90% 85% at center, black 35%, transparent 70%)', WebkitMaskImage: 'radial-gradient(ellipse 90% 85% at center, black 35%, transparent 70%)' }} />
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

      {/* Editorial – Stability & Longevity */}
      <section className="py-24 md:py-36" style={{ background: 'linear-gradient(180deg, hsl(40 18% 97%) 0%, hsl(40 12% 95%) 100%)' }}>
        <div className="luxury-container">
          <motion.div {...fadeUp} transition={{ duration: 1 }} className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-5xl font-light text-navy leading-tight mb-10">
              Designed for Stability.
              <br />
              <span className="italic">Planned for Longevity.</span>
            </h2>
            <div className="space-y-6 mb-12">
              <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
                Full-arch rehabilitation is a highly structured process.
              </p>
              <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
                Every case is designed around bone biology, facial support, function, and long-term mechanical stability.
              </p>
              <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
                Treatment decisions are guided by diagnosis and planning, never speed.
              </p>
              <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
                The objective is not simply to place implants, but to create a restoration that remains stable, comfortable, and biologically harmonious for years to come.
              </p>
            </div>
            <div className="w-12 h-px bg-navy/20 mx-auto mb-8" />
            <p className="font-body text-xs tracking-[0.3em] uppercase text-charcoal-light/60">
              No templates. No shortcuts. Individualized design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Outcomes – Restoration. Stability. Confidence. */}
      <section className="py-24 md:py-36 bg-background">
        <div className="luxury-container">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="text-center mb-20 md:mb-24">
            <h2 className="font-display text-3xl md:text-5xl font-light text-navy leading-tight">
              Restoration. Stability. <span className="italic">Confidence.</span>
            </h2>
          </motion.div>

          {/* Row 1 – Clinical Transformation */}
          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="max-w-5xl mx-auto">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-charcoal-light/60 mb-6">
              Clinical Transformation
            </p>
          </motion.div>
          <motion.div {...fadeUp} transition={{ duration: 0.8, delay: 0.1 }} className="max-w-5xl mx-auto grid grid-cols-2 gap-3 md:gap-5 items-stretch mb-16 md:mb-20">
            <div className="overflow-hidden" style={{ aspectRatio: '4 / 3' }}>
              <img
                src={outcome1Before}
                alt="Pre-treatment smile condition"
                className="w-full h-full object-cover"
                style={{
                  objectPosition: '50% 42%',
                  maskImage: 'radial-gradient(ellipse 95% 90% at 50% 50%, black 60%, transparent 90%)',
                  WebkitMaskImage: 'radial-gradient(ellipse 95% 90% at 50% 50%, black 60%, transparent 90%)',
                }}
              />
            </div>
            <div className="overflow-hidden" style={{ aspectRatio: '4 / 3' }}>
              <img
                src={outcome1After}
                alt="Final rehabilitation outcome"
                className="w-full h-full object-cover"
                style={{
                  objectPosition: '50% 42%',
                  maskImage: 'radial-gradient(ellipse 95% 90% at 50% 50%, black 60%, transparent 90%)',
                  WebkitMaskImage: 'radial-gradient(ellipse 95% 90% at 50% 50%, black 60%, transparent 90%)',
                }}
              />
            </div>
          </motion.div>

          {/* Row 2 – Second transformation */}
          <motion.div {...fadeUp} transition={{ duration: 0.8, delay: 0.15 }} className="max-w-5xl mx-auto grid grid-cols-2 gap-3 md:gap-5 items-stretch mb-16 md:mb-20">
            <div className="overflow-hidden" style={{ aspectRatio: '4 / 3' }}>
              <img
                src={outcome2Before}
                alt="Pre-treatment smile condition"
                className="w-full h-full object-cover"
                style={{
                  objectPosition: '50% 42%',
                  maskImage: 'radial-gradient(ellipse 95% 90% at 50% 50%, black 60%, transparent 90%)',
                  WebkitMaskImage: 'radial-gradient(ellipse 95% 90% at 50% 50%, black 60%, transparent 90%)',
                }}
              />
            </div>
            <div className="overflow-hidden" style={{ aspectRatio: '4 / 3' }}>
              <img
                src={outcome2After}
                alt="Final rehabilitation outcome"
                className="w-full h-full object-cover"
                style={{
                  objectPosition: '50% 42%',
                  maskImage: 'radial-gradient(ellipse 95% 90% at 50% 50%, black 60%, transparent 90%)',
                  WebkitMaskImage: 'radial-gradient(ellipse 95% 90% at 50% 50%, black 60%, transparent 90%)',
                }}
              />
            </div>
          </motion.div>

          {/* Row 3 – Precision Rehabilitation */}
          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }} className="max-w-5xl mx-auto">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-charcoal-light/60 mb-6">
              Precision Rehabilitation
            </p>
          </motion.div>
          <motion.div {...fadeUp} transition={{ duration: 0.8, delay: 0.25 }} className="max-w-5xl mx-auto grid grid-cols-2 gap-3 md:gap-5 items-stretch">
            <div className="overflow-hidden" style={{ aspectRatio: '4 / 3' }}>
              <img
                src={outcome3Before}
                alt="Pre-treatment clinical detail"
                className="w-full h-full object-cover"
                style={{
                  objectPosition: '50% 38%',
                  maskImage: 'radial-gradient(ellipse 95% 90% at 50% 50%, black 60%, transparent 90%)',
                  WebkitMaskImage: 'radial-gradient(ellipse 95% 90% at 50% 50%, black 60%, transparent 90%)',
                }}
              />
            </div>
            <div className="overflow-hidden" style={{ aspectRatio: '4 / 3' }}>
              <img
                src={outcome3After}
                alt="Final prosthetic detail"
                className="w-full h-full object-cover"
                style={{
                  objectPosition: '50% 38%',
                  maskImage: 'radial-gradient(ellipse 95% 90% at 50% 50%, black 60%, transparent 90%)',
                  WebkitMaskImage: 'radial-gradient(ellipse 95% 90% at 50% 50%, black 60%, transparent 90%)',
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Editorial – Structured Process Reassurance */}
      <section className="py-24 md:py-36" style={{ background: 'linear-gradient(180deg, hsl(40 20% 98%) 0%, hsl(40 15% 96%) 100%)' }}>
        <div className="luxury-container">
          <motion.div {...fadeUp} transition={{ duration: 1 }} className="max-w-2xl mx-auto text-center">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-charcoal-light/60 mb-6">
              Your Treatment Journey
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-light text-navy leading-tight mb-10">
              A Structured, <span className="italic">Predictable</span> Process
            </h2>
            <div className="space-y-6 mb-12">
              <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
                Full-arch implant rehabilitation follows a carefully sequenced clinical protocol.
              </p>
              <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
                Each phase is designed to ensure biological stability, functional comfort, and long-term mechanical integrity.
              </p>
              <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
                Treatment is performed in clearly defined stages, allowing healing, adaptation, and refinement at every step.
              </p>
              <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
                For most patients, the process is far more controlled and comfortable than anticipated.
              </p>
            </div>
            <div className="w-12 h-px bg-navy/20 mx-auto mb-8" />
            <p className="font-body text-xs tracking-[0.3em] uppercase text-charcoal-light/60">
              Precision replaces uncertainty.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Editorial – Common Patient Questions */}
      <section className="py-24 md:py-36" style={{ background: 'linear-gradient(180deg, hsl(40 15% 96%) 0%, hsl(40 18% 97%) 100%)' }}>
        <div className="luxury-container">
          <motion.div {...fadeUp} transition={{ duration: 1 }} className="max-w-2xl mx-auto">
            <div className="text-center mb-16 md:mb-20">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-charcoal-light/60 mb-6">
                Patient Guidance
              </p>
              <h2 className="font-display text-3xl md:text-5xl font-light text-navy leading-tight">
                Common Patient <span className="italic">Questions</span>
              </h2>
            </div>

            <div className="space-y-16 md:space-y-20">
              <div>
                <h3 className="font-display text-xl md:text-2xl font-light text-navy mb-5">
                  Is full-arch implant treatment painful?
                </h3>
                <div className="space-y-4">
                  <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
                    Full-arch rehabilitation is performed using modern surgical protocols designed for precision and patient comfort.
                  </p>
                  <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
                    Most patients report significantly less discomfort than anticipated, particularly when treatment is carefully planned and executed in controlled stages.
                  </p>
                </div>
              </div>

              <div className="w-12 h-px bg-navy/10 mx-auto" />

              <div>
                <h3 className="font-display text-xl md:text-2xl font-light text-navy mb-5">
                  How long does the process take?
                </h3>
                <div className="space-y-4">
                  <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
                    Treatment duration varies depending on healing response, biological factors, and case complexity.
                  </p>
                  <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
                    A structured clinical sequence allows each phase to be completed methodically, ensuring stability, adaptation, and refinement at every stage.
                  </p>
                </div>
              </div>

              <div className="w-12 h-px bg-navy/10 mx-auto" />

              <div>
                <h3 className="font-display text-xl md:text-2xl font-light text-navy mb-5">
                  Am I too old for this treatment?
                </h3>
                <div className="space-y-4">
                  <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
                    Full-arch rehabilitation is not defined by age, but by overall health, bone support, and functional needs.
                  </p>
                  <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
                    Many patients across a wide age range successfully undergo treatment following proper clinical evaluation.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

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

      {/* Editorial – What To Expect */}
      <section className="py-24 md:py-36" style={{ background: 'linear-gradient(180deg, hsl(40 18% 97%) 0%, hsl(40 12% 95%) 100%)' }}>
        <div className="luxury-container">
          <motion.div {...fadeUp} transition={{ duration: 1 }} className="max-w-2xl mx-auto text-center">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-charcoal-light/60 mb-6">
              Your Treatment Journey
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-light text-navy leading-tight mb-10">
              What To <span className="italic">Expect</span>
            </h2>
            <div className="space-y-6 mb-12">
              <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
                Full-arch implant rehabilitation is a carefully sequenced clinical process designed for precision, comfort, and long-term stability.
              </p>
              <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
                Treatment typically begins with a comprehensive diagnostic evaluation, including digital imaging, bite analysis, and anatomical assessment.
              </p>
              <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
                Based on this data, a personalized treatment plan is developed to ensure biological compatibility, functional balance, and aesthetic harmony.
              </p>
              <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
                Each phase of care is performed methodically, allowing healing, refinement, and adaptation at every stage.
              </p>
              <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
                For most patients, the experience is significantly more controlled and comfortable than anticipated.
              </p>
            </div>
            <div className="w-12 h-px bg-navy/20 mx-auto mb-8" />
            <p className="font-body text-xs tracking-[0.3em] uppercase text-charcoal-light/60">
              Clarity replaces uncertainty.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Editorial – Specialized Expertise */}
      <section className="py-24 md:py-36" style={{ background: 'linear-gradient(180deg, hsl(40 12% 95%) 0%, hsl(40 15% 96%) 100%)' }}>
        <div className="luxury-container">
          <motion.div {...fadeUp} transition={{ duration: 1 }} className="max-w-2xl mx-auto text-center">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-charcoal-light/60 mb-6">
              Clinical Expertise
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-light text-navy leading-tight mb-10">
              Specialized Expertise <span className="italic">Matters</span>
            </h2>
            <div className="space-y-6 mb-12">
              <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
                Full-arch implant rehabilitation is a highly specialized form of dental reconstruction requiring advanced training in prosthetics, bite dynamics, facial support, and long-term functional stability.
              </p>
              <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
                Successful outcomes depend not only on surgical precision, but on comprehensive prosthetic planning, biological considerations, and structural design.
              </p>
              <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
                Treatment is guided by principles of predictability, stability, and anatomical harmony.
              </p>
            </div>
            <div className="w-12 h-px bg-navy/20 mx-auto mb-8" />
            <p className="font-body text-xs tracking-[0.3em] uppercase text-charcoal-light/60">
              Diagnosis precedes intervention.
            </p>
          </motion.div>
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

      {/* Patient Guide Link */}
      <section className="py-12 md:py-16 px-6 md:px-8 bg-background">
        <div className="luxury-container text-center">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }}>
            <Link
              to="/guide/full-arch-implants"
              className="inline-block font-body text-[10px] tracking-[0.25em] uppercase text-navy border-b border-navy/30 pb-0.5 hover:border-navy transition-colors"
            >
              Learn About the Process
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Editorial – Consultation CTA */}
      <section className="py-28 md:py-40" style={{ background: 'linear-gradient(180deg, hsl(40 18% 97%) 0%, hsl(40 12% 95%) 100%)' }}>
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
                Full-arch implant rehabilitation begins with a detailed clinical assessment designed to evaluate biological, functional, and structural factors unique to each patient.
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

export default FullArchImplants;
