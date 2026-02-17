import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SiteNavigation from "@/components/SiteNavigation";
import FooterSection from "@/components/FooterSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { usePageSEO } from "@/hooks/usePageSEO";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
};

const faqs = [
  {
    q: "Is implant placement painful?",
    a: "Most patients report that the procedure is more comfortable than expected. Local anesthesia ensures you feel no pain during treatment. Mild soreness afterward is normal and typically manageable with over-the-counter medication.",
  },
  {
    q: "How long do dental implants last?",
    a: "With proper care and maintenance, dental implants are designed to function for decades. Their longevity depends on oral hygiene, regular follow-up visits, and overall health. Many patients enjoy their implants for a lifetime.",
  },
  {
    q: "How long does healing take?",
    a: "Most patients feel comfortable within a few days. Full integration of the implant with the bone occurs over several weeks to months, during which you continue your normal routine. Your specialist monitors progress at each follow-up.",
  },
  {
    q: "How do I care for my implants?",
    a: "Implant care is similar to natural tooth care. Regular brushing, flossing, and professional cleanings help maintain long-term health. Your specialist will provide specific guidance tailored to your treatment.",
  },
  {
    q: "Am I a candidate for implant treatment?",
    a: "Candidacy depends on several factors including bone quality, gum health, and overall medical history. A comprehensive evaluation determines the best approach for your individual situation. Most patients have viable treatment options.",
  },
  {
    q: "Are there risks I should be aware of?",
    a: "As with any clinical procedure, there are considerations your specialist will discuss with you in detail. Modern techniques, precision planning, and experienced care significantly reduce complications. Informed decision-making is always prioritized.",
  },
];

const PatientEducation = () => {
  usePageSEO({
    title: "Patient Education | Dental Implant & Treatment Guides",
    description: "Comprehensive patient treatment guides covering dental implants, full-arch rehabilitation, veneers, whitening, and maxillofacial care. Understand your options with confidence.",
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
              For Patients
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-navy leading-[0.95] mb-8">
              Patient Education &{" "}
              <span className="italic">Treatment Guide</span>
            </h1>
            <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed max-w-xl mx-auto">
              Understand your options.
              <br />
              Know what to expect.
              <br />
              Make decisions with confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 1: Dental Implants */}
      <section
        className="py-12 md:py-16 px-6 md:px-8"
        style={{
          background:
            "linear-gradient(180deg, hsl(40 10% 95%) 0%, hsl(40 12% 93%) 100%)",
        }}
      >
        <div className="luxury-container max-w-3xl">
          <motion.div {...fadeUp} transition={{ duration: 0.7 }}>
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-charcoal-light mb-4">
              Treatment Guide
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-light text-navy mb-5">
              What Are <span className="italic">Dental Implants?</span>
            </h2>
            <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed mb-4">
              Dental implants are modern tooth replacements designed to function
              like natural teeth.
            </p>
            <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed mb-8">
              They are small titanium supports placed in the jawbone that act as
              artificial roots. Once healed, they support crowns, bridges, or
              full-arch restorations.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {["Natural function", "Long-term stability", "Bone preservation", "Improved comfort"].map(
                (b, i) => (
                  <div key={i} className="border-t border-divider pt-3">
                    <p className="font-body text-xs text-charcoal font-light tracking-wide">
                      {b}
                    </p>
                  </div>
                )
              )}
            </div>
            <Link
              to="/guide/dental-implants"
              className="inline-block px-8 py-3 border border-navy/20 text-navy font-body text-[10px] tracking-[0.25em] uppercase transition-all duration-300 hover:border-navy/50 hover:bg-navy hover:text-primary-foreground"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Immediate Implants */}
      <section className="py-12 md:py-16 px-6 md:px-8">
        <div className="luxury-container max-w-3xl">
          <motion.div {...fadeUp} transition={{ duration: 0.7 }}>
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-charcoal-light mb-4">
              Treatment Guide
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-light text-navy mb-5">
              What Are <span className="italic">Immediate Implants?</span>
            </h2>
            <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed mb-4">
              In selected cases, implants can be placed at the same visit as
              tooth removal. This approach may reduce treatment time and preserve
              natural tissue architecture.
            </p>
            <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed mb-8">
              Not every patient is a candidate. Treatment decisions depend on
              bone quality, infection status, and structural factors. Your
              specialist will guide you through the evaluation process.
            </p>
            <Link
              to="/guide/immediate-implants"
              className="inline-block px-8 py-3 border border-navy/20 text-navy font-body text-[10px] tracking-[0.25em] uppercase transition-all duration-300 hover:border-navy/50 hover:bg-navy hover:text-primary-foreground"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Full-Arch */}
      <section
        className="py-12 md:py-16 px-6 md:px-8"
        style={{
          background:
            "linear-gradient(180deg, hsl(40 10% 95%) 0%, hsl(40 12% 93%) 100%)",
        }}
      >
        <div className="luxury-container max-w-3xl">
          <motion.div {...fadeUp} transition={{ duration: 0.7 }}>
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-charcoal-light mb-4">
              Treatment Guide
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-light text-navy mb-5">
              Full-Arch Implant{" "}
              <span className="italic">Rehabilitation</span>
            </h2>
            <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed mb-8">
              Full-arch treatment replaces an entire set of teeth using
              strategically placed implants. This option is often recommended
              for patients experiencing significant dental challenges.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="font-body text-[10px] tracking-[0.3em] uppercase text-charcoal-light mb-3">
                  Often Recommended For
                </p>
                <ul className="space-y-2.5">
                  {[
                    "Multiple failing teeth",
                    "Advanced wear",
                    "Severe bone loss",
                    "Long-term instability",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="font-body text-sm text-charcoal font-light leading-relaxed pl-4 border-l-2 border-divider"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-body text-[10px] tracking-[0.3em] uppercase text-charcoal-light mb-3">
                  Treatment Focus
                </p>
                <ul className="space-y-2.5">
                  {[
                    "Designed for strength and longevity",
                    "Focused on function and comfort",
                    "Precision-planned treatment",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="font-body text-sm text-charcoal font-light leading-relaxed pl-4 border-l-2 border-divider"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-8">
              <Link
                to="/guide/full-arch-implants"
                className="inline-block px-8 py-3 border border-navy/20 text-navy font-body text-[10px] tracking-[0.25em] uppercase transition-all duration-300 hover:border-navy/50 hover:bg-navy hover:text-primary-foreground"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Veneers */}
      <section className="py-12 md:py-16 px-6 md:px-8">
        <div className="luxury-container max-w-3xl">
          <motion.div {...fadeUp} transition={{ duration: 0.7 }}>
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-charcoal-light mb-4">
              Treatment Guide
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-light text-navy mb-5">
              Veneers & Aesthetic{" "}
              <span className="italic">Reconstruction</span>
            </h2>
            <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed mb-4">
              Veneers are precision-crafted restorations designed to enhance the
              shape, color, and harmony of teeth.
            </p>
            <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed mb-8">
              Treatment planning prioritizes structural integrity and long-term
              stability. Each case is individually designed based on facial
              proportions, dental anatomy, and functional requirements.
            </p>
            <Link
              to="/guide/veneers"
              className="inline-block px-8 py-3 border border-navy/20 text-navy font-body text-[10px] tracking-[0.25em] uppercase transition-all duration-300 hover:border-navy/50 hover:bg-navy hover:text-primary-foreground"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Section 5: Teeth Whitening */}
      <section
        className="py-12 md:py-16 px-6 md:px-8"
        style={{
          background:
            "linear-gradient(180deg, hsl(40 10% 95%) 0%, hsl(40 12% 93%) 100%)",
        }}
      >
        <div className="luxury-container max-w-3xl">
          <motion.div {...fadeUp} transition={{ duration: 0.7 }}>
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-charcoal-light mb-4">
              Treatment Guide
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-light text-navy mb-5">
              Professional <span className="italic">Teeth Whitening</span>
            </h2>
            <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed mb-4">
              Professional whitening uses precisely calibrated concentrations and custom-fitted trays to achieve even, predictable brightening under clinical supervision.
            </p>
            <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed mb-8">
              Results are tailored to your natural tooth composition and aesthetic goals. Safety and comfort are prioritized throughout.
            </p>
            <Link
              to="/guide/teeth-whitening"
              className="inline-block px-8 py-3 border border-navy/20 text-navy font-body text-[10px] tracking-[0.25em] uppercase transition-all duration-300 hover:border-navy/50 hover:bg-navy hover:text-primary-foreground"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Section 6: Maxillofacial */}
      <section className="py-12 md:py-16 px-6 md:px-8">
        <div className="luxury-container max-w-3xl">
          <motion.div {...fadeUp} transition={{ duration: 0.7 }}>
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-charcoal-light mb-4">
              Treatment Guide
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-light text-navy mb-5">
              Maxillofacial & Oral <span className="italic">Reconstruction</span>
            </h2>
            <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed mb-4">
              Rehabilitation of structures affected by surgery, trauma, or cancer treatment. Custom prostheses restore function, comfort, and confidence.
            </p>
            <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed mb-8">
              Treatment is coordinated with your surgical and oncology teams for comprehensive, individualized care.
            </p>
            <Link
              to="/guide/maxillofacial-rehabilitation"
              className="inline-block px-8 py-3 border border-navy/20 text-navy font-body text-[10px] tracking-[0.25em] uppercase transition-all duration-300 hover:border-navy/50 hover:bg-navy hover:text-primary-foreground"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Section 7: Candidacy */}
      <section
        className="py-12 md:py-16 px-6 md:px-8"
        style={{
          background:
            "linear-gradient(180deg, hsl(40 10% 95%) 0%, hsl(40 12% 93%) 100%)",
        }}
      >
        <div className="luxury-container max-w-3xl">
          <motion.div {...fadeUp} transition={{ duration: 0.7 }}>
            <h2 className="font-display text-3xl md:text-4xl font-light text-navy mb-5">
              How Do I Know If I Am a{" "}
              <span className="italic">Candidate?</span>
            </h2>
            <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed mb-8">
              Candidacy is determined through comprehensive clinical evaluation.
              Every treatment plan is individually designed based on your unique
              situation.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {[
                "Bone support",
                "Gum health",
                "Bite forces",
                "Structural condition",
                "Medical history",
                "Treatment goals",
              ].map((factor, i) => (
                <div key={i} className="border-t border-divider pt-3">
                  <p className="font-body text-xs text-charcoal font-light tracking-wide">
                    {factor}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 6: Day of Treatment */}
      <section className="py-12 md:py-16 px-6 md:px-8">
        <div className="luxury-container max-w-3xl">
          <motion.div {...fadeUp} transition={{ duration: 0.7 }} className="mb-10">
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-charcoal-light mb-4">
              Your Experience
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-light text-navy mb-5">
              What to Expect on the{" "}
              <span className="italic">Day of Treatment</span>
            </h2>
          </motion.div>

          <div className="space-y-0">
            {[
              {
                num: "01",
                title: "Comfortable Environment",
                text: "You are welcomed into a controlled, calm clinical setting designed for your comfort and confidence.",
              },
              {
                num: "02",
                title: "Anesthesia and Comfort",
                text: "Local anesthesia ensures complete comfort throughout the procedure. Sedation options are available if preferred.",
              },
              {
                num: "03",
                title: "Clear Communication",
                text: "Your specialist explains each step before and during treatment. You are informed and in control throughout.",
              },
              {
                num: "04",
                title: "Post-Treatment Instructions",
                text: "Detailed aftercare guidance is provided. You will know exactly what to expect, what to eat, and when to rest.",
              },
              {
                num: "05",
                title: "Going Home",
                text: "Most patients return home the same day. A follow-up appointment is scheduled to monitor your progress.",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="grid grid-cols-[2.5rem_1fr] gap-4 items-start pb-7"
              >
                <span className="font-display text-lg font-light text-navy/30 pt-0.5">
                  {step.num}
                </span>
                <div className="border-b border-divider pb-7">
                  <p className="font-display text-lg font-light text-navy mb-1.5">
                    {step.title}
                  </p>
                  <p className="font-body text-sm text-charcoal-light font-light leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: First Week */}
      <section
        className="py-12 md:py-16 px-6 md:px-8"
        style={{
          background:
            "linear-gradient(180deg, hsl(40 10% 95%) 0%, hsl(40 12% 93%) 100%)",
        }}
      >
        <div className="luxury-container max-w-3xl">
          <motion.div {...fadeUp} transition={{ duration: 0.7 }}>
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-charcoal-light mb-4">
              Recovery
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-light text-navy mb-5">
              First Week of <span className="italic">Healing</span>
            </h2>
            <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed mb-6">
              Normal experiences during the first week may include mild
              swelling, temporary soreness, and a recommendation for softer
              foods. These are expected signs that your body is healing
              properly.
            </p>
            <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
              Most patients notice gradual improvement each day. Healing
              responses vary between individuals, and your specialist is
              available to answer any questions throughout your recovery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 8: Food Guidance */}
      <section className="py-12 md:py-16 px-6 md:px-8">
        <div className="luxury-container max-w-3xl">
          <motion.div {...fadeUp} transition={{ duration: 0.7 }} className="mb-10">
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-charcoal-light mb-4">
              Dietary Guidance
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-light text-navy">
              Eating After <span className="italic">Treatment</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
            <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-charcoal-light mb-4">
                Single Implants
              </p>
              <p className="font-body text-sm text-charcoal-light font-light leading-relaxed mb-3">
                Soft foods are recommended initially. Smoothies, yogurt,
                scrambled eggs, and soups are excellent choices for the first
                few days.
              </p>
              <p className="font-body text-sm text-charcoal-light font-light leading-relaxed">
                Most patients gradually return to their normal diet within one
                to two weeks as comfort improves.
              </p>
            </motion.div>

            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-charcoal-light mb-4">
                Full-Arch Treatment
              </p>
              <p className="font-body text-sm text-charcoal-light font-light leading-relaxed mb-3">
                A structured healing diet supports successful integration.
                Nutrient-rich soft foods such as blended soups, protein shakes,
                and soft fish are recommended during the initial phase.
              </p>
              <p className="font-body text-sm text-charcoal-light font-light leading-relaxed">
                Your specialist provides guided dietary progression as healing
                advances. Most patients are pleased by how naturally they eat
                once fully healed.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 9: Stability Block */}
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
              Designed for Long-Term{" "}
              <span className="italic">Stability</span>
            </h2>
            <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed max-w-xl mx-auto mb-3">
              Modern implant and restorative treatments are planned with
              precision, biology, and structural mechanics in mind.
            </p>
            <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed max-w-xl mx-auto">
              Every decision prioritizes longevity and tissue preservation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 10: FAQ */}
      <section className="py-12 md:py-16 px-6 md:px-8">
        <div className="luxury-container max-w-3xl">
          <motion.div {...fadeUp} transition={{ duration: 0.7 }} className="text-center mb-10">
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-charcoal-light mb-4">
              Your Questions
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-light text-navy">
              Common <span className="italic">Questions</span>
            </h2>
          </motion.div>

          <Accordion type="single" collapsible>
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.4, delay: i * 0.04 }}
              >
                <AccordionItem
                  value={`faq-${i}`}
                  className="border-b border-divider"
                >
                  <AccordionTrigger className="py-5 font-display text-lg md:text-xl font-light text-charcoal hover:text-navy transition-colors text-left hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 font-body text-sm text-charcoal-light font-light leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Soft CTA */}
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
              Ready to Learn <span className="italic">More?</span>
            </h2>
            <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed max-w-xl mx-auto mb-8">
              Every treatment journey begins with understanding. If you have
              questions or would like to explore your options, we welcome the
              conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-block px-10 py-4 bg-navy text-primary-foreground font-body text-[11px] tracking-[0.25em] uppercase transition-all duration-300 hover:bg-navy/90"
              >
                Schedule Consultation
              </Link>
              <Link
                to="/contact"
                className="inline-block px-10 py-4 border border-navy/25 text-navy font-body text-[11px] tracking-[0.25em] uppercase transition-all duration-300 hover:border-navy/50"
              >
                Am I a Candidate?
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
};

export default PatientEducation;
