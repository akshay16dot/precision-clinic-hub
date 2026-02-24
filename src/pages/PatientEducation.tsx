import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import SiteNavigation from "@/components/SiteNavigation";
import FooterSection from "@/components/FooterSection";
import { usePageSEO } from "@/hooks/usePageSEO";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
};

interface FAQ {
  q: string;
  a: string;
}

interface EducationSection {
  id: string;
  label: string;
  title: string;
  titleItalic: string;
  description: string;
  link: string;
  linkLabel?: string;
  faqs: FAQ[];
}

const sections: EducationSection[] = [
  {
    id: "dental-implants",
    label: "Implant Rehabilitation",
    title: "Dental",
    titleItalic: "Implants",
    description:
      "Dental implants are precision-engineered replacements that integrate with your jawbone, restoring natural function, stability, and aesthetics. Treatment is individually planned based on bone quality, tissue health, and long-term structural requirements.",
    link: "/guide/dental-implants",
    faqs: [
      {
        q: "What makes dental implants different from bridges or dentures?",
        a: "Implants are anchored directly into the jawbone, providing independent support without affecting adjacent teeth. Unlike bridges, they preserve surrounding tooth structure. Unlike dentures, they eliminate slipping and progressive bone loss.",
      },
      {
        q: "How long do dental implants typically last?",
        a: "With proper care, dental implants are designed for decades of function. Longevity depends on oral hygiene, bone quality, and regular clinical follow-up. Many patients retain their implants for a lifetime.",
      },
      {
        q: "Is implant treatment painful?",
        a: "Most patients report the procedure is more comfortable than anticipated. Local anesthesia ensures a pain-free experience, and mild post-operative soreness is typically managed with standard over-the-counter medication.",
      },
      {
        q: "What if I have been told I don't have enough bone for implants?",
        a: "Advanced grafting techniques and strategic implant positioning often make treatment possible even with reduced bone. A specialist evaluation can determine whether your case is treatable with contemporary approaches.",
      },
    ],
  },
  {
    id: "immediate-implants",
    label: "Same-Day Solutions",
    title: "Immediate",
    titleItalic: "Implants",
    description:
      "In carefully selected cases, implants can be placed at the same visit as tooth extraction. This approach preserves natural tissue architecture and may significantly reduce overall treatment time while maintaining biologic stability.",
    link: "/guide/immediate-implants",
    faqs: [
      {
        q: "Am I a candidate for immediate implants?",
        a: "Candidacy depends on bone quality, infection status, and structural factors at the extraction site. Your specialist performs a thorough evaluation to determine whether immediate placement is safe and predictable for your situation.",
      },
      {
        q: "Is healing different with immediate implants compared to traditional placement?",
        a: "The integration timeline is similar. Immediate placement preserves existing bone and soft tissue, which can improve long-term outcomes. Your specialist monitors healing carefully with scheduled follow-up visits.",
      },
      {
        q: "Will I leave the appointment with a tooth?",
        a: "In many cases, a provisional restoration is placed the same day, so you do not leave with a gap. The final restoration is crafted after complete integration to ensure optimal fit and longevity.",
      },
    ],
  },
  {
    id: "full-arch",
    label: "Complete Rehabilitation",
    title: "Full-Arch Rehabilitation",
    titleItalic: "(All-on-X)",
    description:
      "Full-arch treatment replaces an entire set of teeth using strategically positioned implants. This approach is designed for patients with multiple failing teeth, advanced wear, or long-term instability, restoring complete oral function and confidence.",
    link: "/guide/full-arch-implants",
    faqs: [
      {
        q: "What does 'All-on-X' mean?",
        a: "All-on-X refers to a full arch of teeth supported by a specific number of strategically placed implants, typically four to six. The approach maximizes available bone and provides immediate stability for a complete restoration.",
      },
      {
        q: "How long does full-arch treatment take from start to finish?",
        a: "Treatment typically spans several months, including planning, surgery, healing, and final prosthetic delivery. Many patients receive functional provisional teeth on the day of surgery while the final restoration is fabricated.",
      },
      {
        q: "Can full-arch implants fail?",
        a: "When planned and executed by a trained specialist with proper patient selection, full-arch rehabilitation has high long-term success rates. Risk factors include smoking, uncontrolled systemic conditions, and inadequate follow-up care.",
      },
      {
        q: "Is this suitable for patients with significant bone loss?",
        a: "Yes. Strategic implant angulation and, when necessary, grafting procedures allow treatment even in cases with reduced bone volume. A comprehensive clinical evaluation determines the optimal approach for each patient.",
      },
    ],
  },
  {
    id: "veneers-smile-design",
    label: "Aesthetic Reconstruction",
    title: "Veneers & Smile",
    titleItalic: "Design",
    description:
      "Porcelain veneers and smile design treatments are precision-crafted to enhance shape, color, symmetry, and facial harmony. Each case is individually designed based on dental anatomy, functional requirements, and long-term stability.",
    link: "/guide/veneers",
    faqs: [
      {
        q: "How long do porcelain veneers last?",
        a: "With proper care, high-quality porcelain veneers typically last 10 to 20 years or longer. Longevity depends on material selection, bonding precision, bite forces, and patient maintenance habits.",
      },
      {
        q: "Do veneers damage natural teeth?",
        a: "Modern veneer preparation is conservative, preserving as much natural tooth structure as possible. Your specialist designs the treatment to enhance your teeth while protecting their long-term structural integrity.",
      },
      {
        q: "What is smile design, and how does it differ from just placing veneers?",
        a: "Smile design is a comprehensive planning process that analyzes facial proportions, lip dynamics, gum architecture, and functional bite relationships before any restorations are placed. It ensures harmonious, natural-looking results.",
      },
    ],
  },
  {
    id: "full-mouth-reconstruction",
    label: "Complex Rehabilitation",
    title: "Full Mouth",
    titleItalic: "Reconstruction",
    description:
      "Full mouth reconstruction addresses extensive dental breakdown through a coordinated treatment plan involving multiple restorative procedures. This approach restores function, vertical dimension, structural stability, and long-term oral health.",
    link: "/aesthetic-dentistry",
    linkLabel: "Explore Treatment Options",
    faqs: [
      {
        q: "Who needs full mouth reconstruction?",
        a: "Patients with extensive wear, multiple failing restorations, bite collapse, or long-standing dental neglect may benefit from comprehensive reconstruction. The goal is to restore complete function and structural integrity.",
      },
      {
        q: "How long does full mouth reconstruction take?",
        a: "Treatment timelines vary based on complexity, typically spanning several months to over a year. Phased treatment plans allow for predictable outcomes while maintaining patient comfort throughout the process.",
      },
      {
        q: "Is full mouth reconstruction painful?",
        a: "Comfort is prioritized at every stage. Procedures are performed under appropriate anesthesia, and recovery is managed with clear post-operative guidance. Most patients find the process far more comfortable than they expected.",
      },
    ],
  },
  {
    id: "gum-soft-tissue",
    label: "Tissue Enhancement",
    title: "Gum & Soft Tissue",
    titleItalic: "Procedures",
    description:
      "Healthy gum tissue is essential for implant success, prosthetic stability, and aesthetic outcomes. Soft tissue procedures address recession, inadequate tissue volume, and biologic deficiencies that affect long-term treatment predictability.",
    link: "/contact",
    linkLabel: "Discuss Your Needs",
    faqs: [
      {
        q: "Can gum grafting improve implant longevity?",
        a: "Yes. Adequate keratinized tissue around implants reduces inflammation risk and improves long-term stability. Grafting procedures strengthen the biologic seal that protects the implant-bone interface.",
      },
      {
        q: "Is gum surgery painful?",
        a: "Soft tissue procedures are performed under local anesthesia with minimal discomfort. Post-operative soreness is typically mild and well-managed. Most patients resume normal activities within a few days.",
      },
      {
        q: "Why is soft tissue important for aesthetics?",
        a: "The gum line frames your smile. Proper tissue volume, contour, and symmetry are critical for natural-looking results, whether around natural teeth, veneers, or implant-supported restorations.",
      },
    ],
  },
  {
    id: "failed-dental-work",
    label: "Corrective Care",
    title: "Failed Dental Work &",
    titleItalic: "Complications",
    description:
      "Previous dental treatments can fail due to material fatigue, improper planning, biologic complications, or progressive disease. Specialist evaluation identifies the underlying cause and develops a corrective treatment pathway focused on long-term stability.",
    link: "/contact",
    linkLabel: "Request Evaluation",
    faqs: [
      {
        q: "What happens if previous dental work has failed?",
        a: "A thorough clinical and radiographic evaluation determines the cause of failure. Treatment may involve removal, tissue recovery, and a revised rehabilitation plan designed to address the original shortcomings.",
      },
      {
        q: "Can failed implants be replaced?",
        a: "In many cases, yes. After careful assessment of bone quality, infection status, and tissue health, a revised implant strategy can be developed. Timing and approach depend on the specific circumstances of failure.",
      },
      {
        q: "How do I know if my current dental work is failing?",
        a: "Signs include persistent pain, loosening, recurring infections, visible fractures, or progressive bite changes. Early specialist evaluation can identify problems before they become more complex and costly to address.",
      },
    ],
  },
  {
    id: "medically-complex",
    label: "Special Care",
    title: "Medically Complex &",
    titleItalic: "Special Care Dentistry",
    description:
      "Patients with systemic conditions, medication complexities, or unique medical histories require coordinated, biologically guided treatment planning. Specialist prosthodontic care ensures safe, predictable outcomes tailored to individual health profiles.",
    link: "/contact",
    linkLabel: "Schedule Consultation",
    faqs: [
      {
        q: "How are medically complex patients evaluated?",
        a: "Treatment planning begins with a comprehensive medical review, including coordination with physicians and specialists. Risk factors are identified and managed before, during, and after dental treatment to ensure safety.",
      },
      {
        q: "Can patients on blood thinners or immune-suppressing medications receive implants?",
        a: "Many patients on complex medication regimens can receive implant treatment with appropriate medical coordination and modified protocols. Each case is individually assessed for safety and predictability.",
      },
      {
        q: "What conditions require special dental treatment planning?",
        a: "Conditions such as diabetes, autoimmune disorders, osteoporosis, cardiac conditions, history of radiation therapy, and organ transplant require careful coordination between your medical and dental care teams.",
      },
    ],
  },
];

const FAQItem = ({ faq, index, sectionId }: { faq: FAQ; index: number; sectionId: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-divider last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-start justify-between py-5 text-left group"
        aria-expanded={isOpen}
        aria-controls={`${sectionId}-faq-${index}`}
      >
        <span className="font-display text-base md:text-lg font-light text-charcoal group-hover:text-navy transition-colors pr-4 leading-snug">
          {faq.q}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-charcoal-light mt-1.5 shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        id={`${sectionId}-faq-${index}`}
        className={`overflow-hidden transition-all duration-300 ease-out ${
          isOpen ? "max-h-[500px] opacity-100 pb-5" : "max-h-0 opacity-0"
        }`}
      >
        <p className="font-body text-sm text-charcoal-light font-light leading-relaxed pr-8">
          {faq.a}
        </p>
      </div>
    </div>
  );
};

const EducationBlock = ({
  section,
  isAlt,
}: {
  section: EducationSection;
  isAlt: boolean;
}) => {
  const [showFaqs, setShowFaqs] = useState(false);

  return (
    <section
      id={section.id}
      className="py-16 md:py-20 px-6 md:px-8"
      style={
        isAlt
          ? {
              background:
                "linear-gradient(180deg, hsl(40 10% 95%) 0%, hsl(40 12% 93%) 100%)",
            }
          : undefined
      }
    >
      <div className="luxury-container max-w-3xl">
        <motion.div {...fadeUp} transition={{ duration: 0.7 }}>
          {/* Label */}
          <p className="font-body text-[10px] tracking-[0.35em] uppercase text-charcoal-light mb-5">
            {section.label}
          </p>

          {/* Headline */}
          <h2 className="font-display text-3xl md:text-4xl font-light text-navy mb-5 leading-[1.1]">
            {section.title} <span className="italic">{section.titleItalic}</span>
          </h2>

          {/* Description */}
          <p className="font-body text-sm md:text-[15px] text-charcoal-light font-light leading-[1.85] mb-8 max-w-2xl">
            {section.description}
          </p>

          {/* Action row */}
          <div className="flex flex-wrap items-center gap-4 mb-2">
            <Link
              to={section.link}
              className="inline-block px-8 py-3 border border-navy/20 text-navy font-body text-[10px] tracking-[0.25em] uppercase transition-all duration-300 hover:border-navy/50 hover:bg-navy hover:text-primary-foreground"
            >
              {section.linkLabel || "Learn More"}
            </Link>
            <button
              onClick={() => setShowFaqs(!showFaqs)}
              className="inline-flex items-center gap-2 px-4 py-3 text-charcoal-light font-body text-[10px] tracking-[0.25em] uppercase transition-colors duration-300 hover:text-navy"
              aria-expanded={showFaqs}
            >
              Common Questions
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-300 ${
                  showFaqs ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>

          {/* FAQ panel */}
          <div
            className={`overflow-hidden transition-all duration-500 ease-out ${
              showFaqs ? "max-h-[2000px] opacity-100 mt-6" : "max-h-0 opacity-0 mt-0"
            }`}
          >
            <div className="border-t border-divider pt-2">
              {section.faqs.map((faq, i) => (
                <FAQItem key={i} faq={faq} index={i} sectionId={section.id} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const PatientEducation = () => {
  usePageSEO({
    title:
      "Patient Education | Dental Implants, Veneers & Reconstruction Guide | NJ Prosthodontist",
    description:
      "Specialist-authored patient education covering dental implants, All-on-X rehabilitation, porcelain veneers, full mouth reconstruction, and complex restorative care. Understand your treatment options with confidence.",
  });

  return (
    <main className="bg-background">
      <SiteNavigation />

      {/* Hero */}
      <section className="pt-48 pb-16 md:pt-56 md:pb-20 px-6 md:px-8">
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
            <div className="w-10 h-px bg-navy mx-auto mb-8" />
            <p className="font-body text-sm md:text-[15px] text-charcoal-light font-light leading-[1.85] max-w-lg mx-auto">
              Understand your options. Know what to expect.
              <br />
              Make decisions with confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Navigation anchors */}
      <section className="pb-8 px-6 md:px-8">
        <div className="luxury-container max-w-3xl">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-x-6 gap-y-3"
          >
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="font-body text-[10px] tracking-[0.2em] uppercase text-charcoal-light hover:text-navy transition-colors duration-300"
              >
                {s.label}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Content sections */}
      {sections.map((section, i) => (
        <EducationBlock key={section.id} section={section} isAlt={i % 2 === 0} />
      ))}

      {/* Soft CTA */}
      <section
        className="py-16 md:py-20 px-6 md:px-8"
        style={{
          background:
            "linear-gradient(180deg, hsl(40 10% 95%) 0%, hsl(40 12% 93%) 100%)",
        }}
      >
        <div className="luxury-container max-w-3xl text-center">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }}>
            <h2 className="font-display text-3xl md:text-4xl font-light text-navy mb-5">
              Every Journey Begins with{" "}
              <span className="italic">Understanding</span>
            </h2>
            <p className="font-body text-sm md:text-[15px] text-charcoal-light font-light leading-[1.85] max-w-xl mx-auto mb-8">
              If you have questions about your treatment options, candidacy, or
              what to expect, we welcome the conversation. Clarity replaces
              uncertainty.
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
