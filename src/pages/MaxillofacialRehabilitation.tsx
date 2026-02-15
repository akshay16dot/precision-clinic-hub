import { motion } from "framer-motion";
import { useEffect } from "react";
import PageNavigation from "@/components/PageNavigation";
import PageHero from "@/components/PageHero";
import PageCTA from "@/components/PageCTA";
import PageFooter from "@/components/PageFooter";

const specialties = [
  {
    title: "Post-Oncologic Rehabilitation",
    description: "Prosthetic restoration following surgical resection for oral, head, and neck cancers. Treatment focuses on re-establishing oral function, speech, swallowing, and facial form through individualized obturator prostheses and implant-supported rehabilitations.",
  },
  {
    title: "Congenital Defect Management",
    description: "Prosthetic solutions for patients born with craniofacial anomalies, including cleft palate and other developmental conditions requiring coordinated, multidisciplinary rehabilitative care.",
  },
  {
    title: "Surgical & Trauma Rehabilitation",
    description: "Prosthetic reconstruction following facial trauma, accident-related injuries, or complex surgical interventions. Restorations are designed to restore both function and natural appearance.",
  },
  {
    title: "Extraoral Prosthetics",
    description: "Fabrication of custom facial prostheses — including orbital, auricular, and nasal prostheses — for patients who have experienced tissue loss due to disease, surgery, or trauma.",
  },
];

const approach = [
  {
    title: "Multidisciplinary Coordination",
    description: "Close collaboration with surgical oncologists, radiation oncologists, speech pathologists, and other specialists to ensure comprehensive, well-timed rehabilitation.",
  },
  {
    title: "Patient-Centered Planning",
    description: "Every rehabilitation plan is developed with deep respect for the patient's emotional journey, personal goals, and quality-of-life priorities.",
  },
  {
    title: "Precision Prosthetic Design",
    description: "Advanced materials and digital workflows ensure prosthetic outcomes that are functionally sound, aesthetically refined, and personally meaningful.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
};

const MaxillofacialRehabilitation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Maxillofacial & Oncology Rehabilitation | Dr. Akshay Parmar";
    return () => {
      document.title = "Dr. Akshay Parmar | Board-Certified Prosthodontist in New Jersey";
    };
  }, []);

  return (
    <main className="bg-background">
      <PageNavigation />

      <PageHero
        subtitle="Board-Certified Prosthodontist · New Jersey"
        title="Maxillofacial &amp; Oncology"
        titleItalic="Rehabilitation"
        paragraphs={[
          "Maxillofacial prosthetic rehabilitation addresses some of the most complex and deeply personal clinical challenges in dentistry.",
          "Dr. Akshay Parmar provides specialized care for patients who have experienced tissue loss or functional compromise due to cancer treatment, congenital conditions, or trauma.",
          "Every case is approached with clinical precision, human compassion, and a commitment to restoring dignity and quality of life.",
        ]}
      />

      <div className="luxury-container px-6 md:px-8">
        <div className="w-12 h-px bg-navy mx-auto" />
      </div>

      {/* Specialties */}
      <section className="section-padding bg-background">
        <div className="luxury-container">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="text-center mb-20">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-charcoal-light mb-6">
              Specialized Care
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-navy">
              Areas of Expertise
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-divider max-w-4xl mx-auto">
            {specialties.map((item, i) => (
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

      {/* Philosophy */}
      <section className="section-padding bg-warm-gray">
        <div className="luxury-container">
          <motion.div {...fadeUp} transition={{ duration: 1 }} className="max-w-3xl mx-auto text-center">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-charcoal-light mb-6">
              Rehabilitation Philosophy
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-navy mb-12">
              Restoring More Than Function
            </h2>
            <div className="w-12 h-px bg-navy mx-auto mb-12" />
            <p className="font-display text-xl md:text-2xl font-light text-charcoal leading-relaxed mb-8">
              Maxillofacial rehabilitation is not simply about replacing what was lost. It is about restoring confidence, comfort, and connection to the world.
            </p>
            <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed max-w-2xl mx-auto">
              Treatment is guided by a deep understanding of the physical and emotional dimensions of recovery, ensuring that every prosthetic solution serves the whole patient.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Approach */}
      <section className="section-padding bg-background">
        <div className="luxury-container">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="text-center mb-20">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-charcoal-light mb-6">
              Clinical Standards
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-navy">
              Our Approach
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-0">
            {approach.map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="border-b border-divider py-10 md:py-12"
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

      <PageCTA
        title="Begin the Conversation"
        description="If you or a loved one requires maxillofacial or oncologic rehabilitation, we welcome the opportunity to discuss how we can help."
        buttonText="Schedule a Consultation"
      />
      <PageFooter />
    </main>
  );
};

export default MaxillofacialRehabilitation;
