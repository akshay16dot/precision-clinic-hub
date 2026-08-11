import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SiteNavigation from "@/components/SiteNavigation";
import PageHero from "@/components/PageHero";
import PageCTA from "@/components/PageCTA";
import PageFooter from "@/components/PageFooter";
import { usePageSEO } from "@/hooks/usePageSEO";
import TreatmentJourney from "@/components/TreatmentJourney";
import OneRoofCare from "@/components/OneRoofCare";
import { dentalImplantsJourney } from "@/data/treatmentGuides";

const benefits = [
  {
    title: "Functional Restoration",
    description: "Implant-supported restorations replicate natural tooth function, enabling confident biting, chewing, and speech.",
  },
  {
    title: "Bone Preservation",
    description: "Osseointegrated implants maintain alveolar bone volume, preventing the progressive resorption associated with tooth loss.",
  },
  {
    title: "Long-Term Stability",
    description: "Properly planned and executed implant rehabilitation provides decades of predictable, stable function.",
  },
  {
    title: "Aesthetic Integration",
    description: "Prosthetic design harmonizes with natural dentition, achieving seamless integration of form, contour, and shade.",
  },
];

const treatmentScope = [
  {
    title: "Single-Tooth Implants",
    description: "Precision replacement of individual teeth with implant-supported crowns designed for optimal function, contour, and natural aesthetics. Each restoration is planned to integrate seamlessly with the surrounding dentition.",
  },
  {
    title: "Immediate Implant Placement",
    description: "In selected clinical situations, implants can be placed at the time of tooth extraction. This approach preserves bone and soft tissue architecture, reduces overall treatment time, and minimizes the number of surgical interventions.",
  },
  {
    title: "Multiple-Tooth Replacement",
    description: "Implant-supported bridges restore areas of partial tooth loss without compromising adjacent natural teeth. Strategic implant positioning provides stable, long-lasting support for the prosthetic restoration.",
  },
  {
    title: "Full-Arch Implant Rehabilitation",
    description: "Comprehensive restoration of an entire dental arch using strategically placed implants and fixed prosthetics. Often referred to as the All-on-X concept, this approach provides a complete, non-removable set of teeth supported by as few as four to six implants per arch.",
  },
  {
    title: "Complex Implant Rehabilitation",
    description: "Multidisciplinary treatment planning for medically compromised patients, anatomically challenging cases, or previously failed implant treatments. These cases require advanced diagnostic planning, bone augmentation procedures, and individualized prosthetic solutions.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
};

const DentalImplants = () => {
  usePageSEO({
    title: "Dental Implants Placed & Restored Under One Roof | Hamilton NJ",
    description: "Dental implants placed and restored by one specialist-led team in Hamilton Township, NJ, from 3D planning and surgery through the final tooth and long-term maintenance.",
  });

  return (
    <main className="bg-background">
      <SiteNavigation />

      <PageHero
        subtitle="Board-Certified Prosthodontist · New Jersey"
        title="Advanced Dental Implant"
        titleItalic="Rehabilitation"
        paragraphs={[
          "Dental implant treatment requires precision, planning, and a biologically driven approach.",
          "Dr. Akshay Parmar provides advanced dental implant rehabilitation across New Jersey, focusing on long-term stability, functional integration, and aesthetic harmony.",
          "From a single front tooth to All-on-4 full-arch care, planning, implant placement, restoration and maintenance can be coordinated by one specialist-led team in the Hamilton office when clinically appropriate.",
        ]}
      />

      <OneRoofCare compact />

      <div className="luxury-container px-6 md:px-8">
        <div className="w-12 h-px bg-navy mx-auto" />
      </div>

      {/* Why Dental Implants */}
      <section className="section-padding bg-background">
        <div className="luxury-container">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="text-center mb-20">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-charcoal-light mb-6">
              Clinical Benefits
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-navy">
              Why Dental Implants
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-divider max-w-4xl mx-auto">
            {benefits.map((item, i) => (
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
              Implant rehabilitation is guided by precision-driven planning, prosthodontic principles, and biologically respectful treatment protocols.
            </p>
            <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed max-w-2xl mx-auto">
              Treatment philosophy reflects principles incorporated within the STABLE IMPLANT Protocol™, emphasizing soft tissue stability, bone preservation, and long-term functional integration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Treatment Scope */}
      <section className="section-padding bg-background">
        <div className="luxury-container">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="text-center mb-20">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-charcoal-light mb-6">
              Treatment Scope
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-navy">
              Types of Implant Rehabilitation
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-0">
            {treatmentScope.map((type, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="border-b border-divider py-10 md:py-12"
              >
                <h3 className="font-display text-xl md:text-2xl font-medium text-charcoal mb-4">
                  {type.title}
                </h3>
                <p className="font-body text-sm text-charcoal-light font-light leading-relaxed">
                  {type.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related reading */}
      <section className="py-14 md:py-20 px-6 md:px-8 bg-background">
        <div className="luxury-container">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="max-w-2xl mx-auto text-center">
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-charcoal-light/70 mb-7">
              Related Reading
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3.5">
              {[
                { to: "/front-tooth-implant-new-jersey", label: "Front Tooth Implants" },
                { to: "/immediate-implant-rehabilitation", label: "Same-Day Implants" },
                { to: "/failed-dental-implant-revision", label: "Failed Implant Revision" },
                { to: "/prosthodontist-vs-oral-surgeon", label: "Which Specialist Do I Need?" },
              ].map((l, i) => (
                <Link
                  key={i}
                  to={l.to}
                  className="font-body text-[11px] tracking-[0.16em] uppercase text-navy/65 hover:text-navy transition-colors duration-300 border-b border-navy/20 hover:border-navy/50 pb-px"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <TreatmentJourney data={dentalImplantsJourney} />

      <PageCTA
        description="Begin with a comprehensive evaluation to determine the most appropriate implant rehabilitation pathway for your clinical needs."
      />
      <PageFooter />
    </main>
  );
};

export default DentalImplants;
