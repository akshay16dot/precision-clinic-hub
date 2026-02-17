import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import SiteNavigation from "@/components/SiteNavigation";
import FooterSection from "@/components/FooterSection";
import ClinicalCaseCard from "@/components/ClinicalCaseCard";

import case1After from "@/assets/case1-after.png";
import case1Before from "@/assets/case1-before.png";
import case2After from "@/assets/case2-after.png";
import case2Before from "@/assets/case2-before.png";
import case3After from "@/assets/case3-after.png";
import case3Before from "@/assets/case3-before.png";
import case4After from "@/assets/case4-after.png";
import case4Before from "@/assets/case4-before.png";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
};

const cases = [
  {
    title: "Full Mouth Rehabilitation",
    descriptor: "Comprehensive restorative reconstruction addressing advanced wear, structural compromise, and aesthetic deterioration across the full dentition.",
    afterImg: case1After,
    beforeImg: case1Before,
    challenge: "The patient presented with extensive tooth wear, compromised restorations, and progressive bite instability affecting daily function and confidence. Multiple teeth required comprehensive evaluation for structural viability.",
    strategy: "A staged, digitally planned full-mouth reconstruction was implemented. Treatment sequenced implant placement, custom abutment design, and precision-milled restorations to rebuild occlusal stability from the foundation.",
    functional: "Restore balanced occlusion, eliminate jaw tension, and establish long-term structural integrity across all functional movements.",
    aesthetic: "Achieve natural tooth proportions, harmonious gingival architecture, and a refined smile line consistent with the patient's facial anatomy.",
  },
  {
    title: "Anterior Aesthetic & Soft Tissue Reconstruction",
    descriptor: "Grey crown correction with gum grafting and precision-matched porcelain restorations for seamless anterior integration.",
    afterImg: case2After,
    beforeImg: case2Before,
    challenge: "A failing anterior crown with visible grey discoloration at the gum line had created an unnatural appearance. Soft tissue recession exposed the underlying metal margin, compounding the aesthetic concern.",
    strategy: "Connective tissue grafting was performed to restore gingival volume and coverage. The compromised restoration was replaced with a custom all-ceramic crown designed for optimal light transmission and tissue compatibility.",
    functional: "Maintain anterior guidance integrity and ensure long-term soft tissue health around the restored margin.",
    aesthetic: "Eliminate grey-line visibility, restore natural translucency at the gingival margin, and achieve chromatic continuity with adjacent teeth.",
  },
  {
    title: "Maxillary Denture & Mandibular Fixed Implant Reconstruction",
    descriptor: "All-on-4 mandibular rehabilitation with precision-engineered fixed prosthesis replacing a failing lower dentition.",
    afterImg: case3After,
    beforeImg: case3Before,
    challenge: "Severe periodontal breakdown had rendered the remaining dentition non-restorable. The patient experienced significant functional limitations and progressive bone loss threatening future treatment options.",
    strategy: "Strategic implant placement maximized available bone support. A fixed mandibular prosthesis was precision-engineered for immediate function, while the maxillary arch was restored with a high-retention removable prosthesis.",
    functional: "Restore complete chewing capacity, speech clarity, and eliminate the instability associated with conventional removable solutions.",
    aesthetic: "Engineer natural tooth proportions and gingival contours within the prosthetic framework to achieve a dignified, confident appearance.",
  },
  {
    title: "Bite Collapse Reconstruction with Implants & Crowns",
    descriptor: "Restoration of vertical dimension and functional stability through integrated implant and crown rehabilitation.",
    afterImg: case4After,
    beforeImg: case4Before,
    challenge: "Progressive bite collapse had resulted in loss of vertical dimension, compromised posterior support, and chronic jaw discomfort. The existing dentition showed advanced wear patterns and structural failure.",
    strategy: "A comprehensive approach combined strategic implant placement with full-coverage restorations to re-establish vertical dimension and distribute occlusal forces evenly across the arch.",
    functional: "Rebuild posterior support, restore vertical dimension of occlusion, and establish stable, comfortable jaw function for long-term durability.",
    aesthetic: "Achieve proportional tooth display, balanced smile symmetry, and natural-appearing restorations that complement facial structure.",
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
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Selected Clinical Work | Dr. Akshay Parmar";
    return () => {
      document.title = "Dr. Akshay Parmar | Board-Certified Prosthodontist in New Jersey";
    };
  }, []);

  return (
    <main className="bg-background">
      <SiteNavigation />

      {/* ═══════ SECTION 1 — HERO ═══════ */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Hero background — dominant AFTER image */}
        <div className="absolute inset-0">
          <img
            src={case1After}
            alt="Clinical outcome — Full Mouth Rehabilitation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>

        <div className="relative z-10 text-center px-6 md:px-8 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <p className="font-body text-[10px] tracking-[0.4em] uppercase text-white/50 mb-6">
              Dr. Akshay Parmar · Prosthodontist
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white leading-[0.95] mb-8">
              Selected Clinical <span className="italic">Work</span>
            </h1>
            <div className="w-10 h-px bg-white/25 mx-auto mb-8" />
            <p className="font-body text-sm md:text-[15px] text-white/65 font-light leading-[1.85] max-w-lg mx-auto mb-10">
              Precision-driven dentistry.
              <br />
              Biologically guided reconstruction.
              <br />
              Predictable aesthetic and functional outcomes.
            </p>
            <a
              href="#gallery"
              className="inline-block px-10 py-4 border border-white/25 text-white/85 font-body text-[11px] tracking-[0.25em] uppercase transition-all duration-300 hover:bg-white/10 hover:border-white/40"
            >
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
              Each case presented here reflects a structured clinical process — 
              from comprehensive diagnosis and digital planning through 
              biologically guided execution. These outcomes are the result of 
              precision engineering, respect for biological principles, and a 
              commitment to long-term functional and aesthetic stability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════ SECTION 3 — CLINICAL GALLERY ═══════ */}
      <section
        id="gallery"
        className="py-16 md:py-24 px-6 md:px-8"
        style={{
          background: "linear-gradient(180deg, hsl(40 10% 96%) 0%, hsl(40 12% 94%) 100%)",
        }}
      >
        <div className="luxury-container max-w-5xl">
          <motion.div {...fadeUp} transition={{ duration: 0.7 }} className="text-center mb-16 md:mb-20">
            <p className="font-body text-[10px] tracking-[0.4em] uppercase text-charcoal-light mb-6">
              Clinical Portfolio
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-light text-navy">
              Selected <span className="italic">Cases</span>
            </h2>
          </motion.div>

          <div className="space-y-20 md:space-y-28">
            {cases.map((c, i) => (
              <ClinicalCaseCard key={i} c={c} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 4 — EDUCATIONAL REASSURANCE ═══════ */}
      <section className="py-20 md:py-28 px-6 md:px-8">
        <div className="luxury-container max-w-2xl text-center">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }}>
            <h2 className="font-display text-3xl md:text-4xl font-light text-navy mb-10">
              What These Cases <span className="italic">Represent</span>
            </h2>
            <div className="space-y-4 text-left max-w-lg mx-auto">
              {reassurancePoints.map((point, i) => (
                <motion.div
                  key={i}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-navy/25 mt-2 shrink-0" />
                  <p className="font-body text-sm text-charcoal-light font-light leading-relaxed">
                    {point}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════ SECTION 5 — CONVERSION BLOCK ═══════ */}
      <section
        className="py-20 md:py-28 px-6 md:px-8"
        style={{
          background: "linear-gradient(180deg, hsl(40 10% 96%) 0%, hsl(40 12% 94%) 100%)",
        }}
      >
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
