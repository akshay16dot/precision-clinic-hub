import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SiteNavigation from "@/components/SiteNavigation";
import FooterSection from "@/components/FooterSection";
import ClinicalCaseCard from "@/components/ClinicalCaseCard";
import type { ClinicalCase } from "@/components/ClinicalCaseCard";
import { usePageSEO } from "@/hooks/usePageSEO";

import case1After from "@/assets/case1-after.png";
import case1Before from "@/assets/case1-before.png";
import case2BeforeLeft from "@/assets/case2-before-left.png";
import case2AfterLeft from "@/assets/case2-after-left.png";
import case2BeforeRight from "@/assets/case2-before-right.png";
import case2AfterRight from "@/assets/case2-after-right.png";
import case3After from "@/assets/case3-after.png";
import case3Before from "@/assets/case3-before.png";
import case4Before from "@/assets/case4-before.png";
import case4After from "@/assets/case4-after.png";
import case5Before from "@/assets/case5-before.png";
import case5After from "@/assets/case5-after.png";
import case6Before from "@/assets/case6-before.png";
import case6After from "@/assets/case6-after.png";
import case7Before from "@/assets/case7-before.png";
import case7After from "@/assets/case7-after.png";
import case8Before from "@/assets/case8-before.png";
import case8After from "@/assets/case8-after.png";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
};

const primaryCases: ClinicalCase[] = [
  {
    title: "Full Mouth Rehabilitation",
    subtitle: "Implants, Crowns & Bridge Reconstruction",
    descriptor: "Collapsed bite reconstruction caused by severe wear. Restoration of function, stability, and aesthetics.",
    imagePairs: [{ beforeImg: case1Before, afterImg: case1After }],
    details: [
      { label: "Clinical Challenge", text: "The patient presented with extensive tooth wear, compromised restorations, and progressive bite instability affecting daily function and confidence. Multiple teeth required comprehensive evaluation for structural viability." },
      { label: "Treatment Strategy", text: "A staged, digitally planned full-mouth reconstruction was implemented. Treatment sequenced implant placement, custom abutment design, and precision-milled restorations to rebuild occlusal stability from the foundation." },
      { label: "Functional Objectives", text: "Restore balanced occlusion, eliminate jaw tension, and establish long-term structural integrity across all functional movements." },
      { label: "Aesthetic Outcome", text: "Natural tooth proportions, harmonious gingival architecture, and a refined smile line consistent with the patient's facial anatomy." },
    ],
  },
  {
    title: "Comprehensive Bite Reconstruction",
    subtitle: "Implant-Supported Rehabilitation",
    descriptor: "Severe occlusal wear with bite collapse. Precision-guided full mouth reconstruction.",
    imagePairs: [
      { beforeImg: case2BeforeLeft, afterImg: case2AfterLeft, beforeLabel: "Before, Left Lateral", afterLabel: "After, Left Lateral" },
      { beforeImg: case2BeforeRight, afterImg: case2AfterRight, beforeLabel: "Before, Right Lateral", afterLabel: "After, Right Lateral" },
    ],
    details: [
      { label: "Clinical Challenge", text: "Progressive occlusal wear had resulted in significant loss of vertical dimension, posterior bite collapse, and chronic jaw discomfort. The existing dentition showed advanced structural failure across both arches." },
      { label: "Treatment Strategy", text: "A comprehensive approach combined strategic implant placement with full-coverage restorations to re-establish vertical dimension and distribute occlusal forces evenly across both arches." },
      { label: "Functional Objectives", text: "Rebuild posterior support, restore vertical dimension of occlusion, and establish stable, comfortable jaw function for long-term durability." },
      { label: "Aesthetic Outcome", text: "Achieve proportional tooth display, balanced smile symmetry, and natural-appearing restorations that complement facial structure from all lateral perspectives." },
    ],
  },
  {
    title: "Full Arch Implant Reconstruction",
    subtitle: "Advanced Restorative Rehabilitation",
    descriptor: "Extensive caries and periodontal damage. Full arch implant-supported restoration.",
    imagePairs: [{ beforeImg: case3Before, afterImg: case3After }],
    details: [
      { label: "Clinical Challenge", text: "Severe periodontal breakdown and extensive caries had rendered the remaining dentition non-restorable. The patient experienced significant functional limitations and progressive bone loss threatening future treatment options." },
      { label: "Treatment Strategy", text: "Strategic implant placement maximized available bone support. A fixed full-arch prosthesis was precision-engineered for immediate function, restoring complete dental architecture from a compromised foundation." },
      { label: "Functional Objectives", text: "Restore complete chewing capacity, speech clarity, and eliminate the instability associated with the failing natural dentition." },
      { label: "Aesthetic Outcome", text: "Engineer natural tooth proportions and gingival contours within the prosthetic framework to achieve a dignified, confident appearance." },
    ],
  },
];

const correctiveCases: ClinicalCase[] = [
  {
    title: "Failed Implant & Prosthetic Rehabilitation",
    subtitle: "Corrective Reconstruction",
    descriptor: "Correction of previously failing implants and prosthesis. Restoration of structural stability, function, and aesthetics.",
    imagePairs: [{ beforeImg: case4Before, afterImg: case4After }],
    details: [
      { label: "Clinical Complication", text: "The patient presented with failing implant-supported prostheses exhibiting fracture, poor fit, and compromised aesthetics. Previous treatment had resulted in unstable occlusion and progressive peri-implant tissue deterioration." },
      { label: "Corrective Strategy", text: "A systematic corrective approach addressed prosthetic design failures, re-engineered the occlusal scheme, and replaced compromised components with precision-milled restorations designed for long-term biomechanical stability." },
      { label: "Biomechanical Objectives", text: "Redistribute occlusal forces across the implant framework, eliminate cantilever stress, and restore passive fit to protect peri-implant bone integrity." },
      { label: "Outcome", text: "Stable, well-integrated prostheses with balanced occlusion, improved tissue health, and natural aesthetic integration achieving long-term predictability." },
    ],
  },
  {
    title: "Implant-Assisted Overdenture Rehabilitation",
    subtitle: "Retention & Stability Restoration",
    descriptor: "Management of an unstable, poorly retentive denture. Implant-supported overdenture restoring retention and function.",
    imagePairs: [{ beforeImg: case5Before, afterImg: case5After }],
    details: [
      { label: "Functional Limitation", text: "The patient experienced chronic denture instability with poor retention, compromised chewing efficiency, and significant social discomfort. The existing prosthesis lacked adequate support and failed to provide functional confidence." },
      { label: "Treatment Strategy", text: "Strategic implant placement provided anchorage for a precision-engineered overdenture system. The prosthetic design maximized retention through implant-assisted attachments while maintaining ease of hygiene and maintenance." },
      { label: "Retention & Stability Goals", text: "Achieve predictable snap-fit retention, eliminate denture displacement during function, and restore patient confidence in daily eating, speaking, and social interactions." },
      { label: "Outcome", text: "A securely retained overdenture delivering reliable function, natural appearance, and restored quality of life through implant-assisted stabilization." },
    ],
  },
  {
    title: "Maxillomandibular Rehabilitation",
    subtitle: "Removable–Fixed Prosthetic Integration",
    descriptor: "Failed dentition managed with a maxillary retentive denture over mandibular zirconia complete arch fixed implant prosthesis.",
    imagePairs: [{ beforeImg: case6Before, afterImg: case6After }],
    details: [
      { label: "Clinical Challenge", text: "Complete dental failure across both arches required a dual-modality prosthetic solution. The maxillary arch presented with insufficient bone for fixed implant rehabilitation, while the mandible retained adequate support for a fixed approach." },
      { label: "Prosthetic Design Strategy", text: "A maxillary high-retention denture was engineered for optimal tissue adaptation, paired with a mandibular zirconia complete arch fixed implant prosthesis. Each arch was independently optimized for its biomechanical environment." },
      { label: "Functional Objectives", text: "Establish coordinated maxillomandibular function between removable and fixed modalities, ensuring stable occlusion, efficient mastication, and clear phonetics across both prosthetic platforms." },
      { label: "Outcome", text: "Harmonized dual-arch rehabilitation delivering complete functional restoration with architectural precision and natural aesthetics across both prosthetic systems." },
    ],
  },
  {
    title: "Posterior Bite Collapse Rehabilitation",
    subtitle: "Vertical Dimension Restoration",
    descriptor: "Uneven occlusal plane and posterior collapse. Implant-supported reconstruction with vertical dimension restoration.",
    imagePairs: [{ beforeImg: case7Before, afterImg: case7After }],
    details: [
      { label: "Occlusal Instability", text: "Progressive posterior tooth loss and occlusal plane discrepancy had resulted in bite collapse, uneven loading, and compensatory wear patterns across the remaining dentition. The patient experienced chronic jaw fatigue and functional limitation." },
      { label: "Rehabilitation Strategy", text: "Implant placement in strategic posterior positions re-established vertical support. Full-coverage restorations were sequenced to rebuild the occlusal plane, restore vertical dimension, and redistribute functional forces symmetrically." },
      { label: "Functional Stabilization Goals", text: "Re-establish posterior occlusal stops, normalize the occlusal plane, and eliminate compensatory muscle patterns to achieve balanced, comfortable jaw function." },
      { label: "Outcome", text: "Restored vertical dimension with stable posterior support, balanced bilateral occlusion, and elimination of jaw discomfort through precision-guided reconstruction." },
    ],
  },
  {
    title: "Anterior Aesthetic Rehabilitation",
    subtitle: "Implant & Soft Tissue Reconstruction",
    descriptor: "Correction of grey shadowing caused by thin soft tissue and compromised underlying structures. Biologic correction and aesthetic refinement restoring natural shade integration and harmonized gingival architecture.",
    imagePairs: [{ beforeImg: case8Before, afterImg: case8After }],
    details: [
      { label: "Aesthetic Compromise", text: "Existing restorations exhibited visible grey tonal show-through near gingival margins, caused by thin soft tissue overlying compromised underlying structures. The unnatural discoloration undermined the aesthetic zone despite otherwise intact tooth form." },
      { label: "Biologic & Prosthetic Strategy", text: "A staged approach addressed the underlying tissue deficiency through connective tissue grafting to increase soft tissue volume, followed by custom all-ceramic restorations engineered for natural shade integration and optimal light transmission without grey translucency." },
      { label: "Tissue Architecture Goals", text: "Restore adequate soft tissue thickness to mask underlying structures, achieve harmonized gingival contours, and deliver enhanced biological contours that support long-term aesthetic stability without grey shadowing." },
      { label: "Outcome", text: "Correction of underlying structural and tissue deficiencies resulting in aesthetic normalization, natural shade integration, eliminated grey shadowing, improved soft tissue volume, and harmonized gingival architecture." },
    ],
  },
];

const reassurancePoints = [
  "Individualized diagnosis based on clinical and radiographic evaluation",
  "Digital treatment planning for predictable, measurable outcomes",
  "Biologically guided dentistry respecting tissue health and healing",
  "Long-term functional stability as the primary treatment objective",
  "Aesthetic integration engineered to complement natural anatomy",
];

const ClinicalCases = () => {
  usePageSEO({
    title: "Clinical Cases | Implant & Prosthetic Rehabilitation Results",
    description: "Selected clinical cases demonstrating advanced implant reconstruction, full-arch rehabilitation, corrective prosthetics, and aesthetic restoration by Board-Certified Prosthodontist Dr. Akshay Parmar.",
  });

  return (
    <main className="bg-background">
      <SiteNavigation />

      {/* ═══════ SECTION 1 — HERO ═══════ */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={case1After}
            alt="Clinical outcome, Full Mouth Rehabilitation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>
        <div className="relative z-10 text-center px-6 md:px-8 max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }}>
            <p className="font-body text-[10px] tracking-[0.4em] uppercase text-white/50 mb-6">
              Dr. Akshay Parmar · Prosthodontist
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white leading-[0.95] mb-8">
              Selected Clinical <span className="italic">Work</span>
            </h1>
            <div className="w-10 h-px bg-white/25 mx-auto mb-8" />
            <p className="font-body text-sm md:text-[15px] text-white/65 font-light leading-[1.85] max-w-lg mx-auto mb-10">
              Precision-driven dentistry.<br />
              Biologically guided reconstruction.<br />
              Predictable aesthetic and functional outcomes.
            </p>
            <a href="#gallery" className="inline-block px-10 py-4 border border-white/25 text-white/85 font-body text-[11px] tracking-[0.25em] uppercase transition-all duration-300 hover:bg-white/10 hover:border-white/40">
              Explore Clinical Transformations
            </a>
          </motion.div>
        </div>
      </section>

      {/* ═══════ SECTION 2 — AUTHORITY FRAMING ═══════ */}
      <section className="py-20 md:py-28 px-6 md:px-8">
        <div className="luxury-container max-w-2xl text-center">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }}>
            <h2 className="font-display text-3xl md:text-4xl font-light text-navy leading-[0.95] mb-8">
              Real Dentistry. Real Patients.{" "}
              <span className="italic">Real Outcomes.</span>
            </h2>
            <div className="w-10 h-px bg-navy/20 mx-auto mb-8" />
            <p className="font-body text-sm md:text-[15px] text-charcoal-light font-light leading-[1.85]">
              Each case presented here reflects a structured clinical process,
              from comprehensive diagnosis and digital planning through
              biologically guided execution. These outcomes are the result of
              precision engineering, respect for biological principles, and a
              commitment to long-term functional and aesthetic stability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════ SECTION 3 — PRIMARY CLINICAL GALLERY ═══════ */}
      <section
        id="gallery"
        className="py-16 md:py-24 px-6 md:px-8"
        style={{ background: "linear-gradient(180deg, hsl(40 10% 96%) 0%, hsl(40 12% 94%) 100%)" }}
      >
        <div className="luxury-container max-w-5xl">
          <motion.div {...fadeUp} transition={{ duration: 0.7 }} className="text-center mb-16 md:mb-20">
            <p className="font-body text-[10px] tracking-[0.4em] uppercase text-charcoal-light mb-6">Clinical Portfolio</p>
            <h2 className="font-display text-3xl md:text-4xl font-light text-navy">
              Selected <span className="italic">Cases</span>
            </h2>
          </motion.div>
          <div className="space-y-20 md:space-y-28">
            {primaryCases.map((c, i) => (
              <ClinicalCaseCard key={i} c={c} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 3B — CORRECTIVE & COMPLEX REHABILITATION ═══════ */}
      <section className="py-16 md:py-24 px-6 md:px-8">
        <div className="luxury-container max-w-5xl">
          <motion.div {...fadeUp} transition={{ duration: 0.7 }} className="text-center mb-16 md:mb-20">
            <p className="font-body text-[10px] tracking-[0.4em] uppercase text-charcoal-light mb-6">Advanced Clinical Work</p>
            <h2 className="font-display text-3xl md:text-4xl font-light text-navy">
              Corrective & Complex <span className="italic">Rehabilitation</span>
            </h2>
          </motion.div>
          <div className="space-y-20 md:space-y-28">
            {correctiveCases.map((c, i) => (
              <ClinicalCaseCard key={i + 3} c={c} index={i + 3} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 4 — EDUCATIONAL REASSURANCE ═══════ */}
      <section
        className="py-20 md:py-28 px-6 md:px-8"
        style={{ background: "linear-gradient(180deg, hsl(40 10% 96%) 0%, hsl(40 12% 94%) 100%)" }}
      >
        <div className="luxury-container max-w-2xl text-center">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }}>
            <h2 className="font-display text-3xl md:text-4xl font-light text-navy mb-10">
              What These Cases <span className="italic">Represent</span>
            </h2>
            <div className="space-y-4 text-left max-w-lg mx-auto">
              {reassurancePoints.map((point, i) => (
                <motion.div key={i} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.08 }} className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-navy/25 mt-2 shrink-0" />
                  <p className="font-body text-sm text-charcoal-light font-light leading-relaxed">{point}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════ SECTION 5 — CONVERSION BLOCK ═══════ */}
      <section className="py-20 md:py-28 px-6 md:px-8">
        <div className="luxury-container max-w-2xl text-center">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }}>
            <h2 className="font-display text-3xl md:text-4xl font-light text-navy mb-6">
              Considering <span className="italic">Treatment?</span>
            </h2>
            <p className="font-body text-sm md:text-[15px] text-charcoal-light font-light leading-[1.85] max-w-lg mx-auto mb-10">
              Every reconstruction begins with structured evaluation,
              diagnosis, and digital planning. A comprehensive consultation
              establishes the clinical foundation for predictable outcomes.
            </p>
            <Link
              to="/contact"
              className="inline-block px-12 py-[18px] bg-navy font-body text-[11px] tracking-[0.25em] uppercase transition-all duration-300 hover:bg-navy/90"
              style={{ color: "hsl(40 20% 98%)" }}
            >
              Schedule Consultation
            </Link>
          </motion.div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
};

export default ClinicalCases;
