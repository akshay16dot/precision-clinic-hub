import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import case1After from "@/assets/case1-after.png";
import case1Before from "@/assets/case1-before.png";
import case2AfterLeft from "@/assets/case2-after-left.png";
import case2BeforeLeft from "@/assets/case2-before-left.png";
import case3After from "@/assets/case3-after.png";
import case3Before from "@/assets/case3-before.png";
import case4After from "@/assets/case4-after.png";
import case4Before from "@/assets/case4-before.png";
import case5After from "@/assets/case5-after.png";
import case5Before from "@/assets/case5-before.png";
import case6After from "@/assets/case6-after.png";
import case6Before from "@/assets/case6-before.png";
import veneer1After from "@/assets/veneer-case1-after.png";
import veneer1Before from "@/assets/veneer-case1-before.png";
import veneer2After from "@/assets/veneer-case2-after.png";
import veneer2Before from "@/assets/veneer-case2-before.png";
import immediate1After from "@/assets/immediate-case1-after.png";
import immediate1Before from "@/assets/immediate-case1-before.png";
import outcome2After from "@/assets/outcome-2-after.png";
import outcome2Before from "@/assets/outcome-2-before.png";
import patientABefore from "@/assets/patientA-before.jpg";
import patientAAfter from "@/assets/patientA-after.jpg";
import patientBBefore from "@/assets/patientB-before.jpg";
import patientBAfter from "@/assets/patientB-after.jpg";
import patientCBeforeFace from "@/assets/patientC-before-face.jpg";
import patientCAfterFace from "@/assets/patientC-after-face.jpg";
import patientDBefore from "@/assets/patientD-before.jpg";
import patientDAfter from "@/assets/patientD-after.jpg";
import patientEBefore from "@/assets/patientE-before.jpg";
import patientEAfter from "@/assets/patientE-after.jpg";
import outcome3After from "@/assets/outcome-3-after.png";
import outcome3Before from "@/assets/outcome-3-before.png";

const featured = {
  after: patientCAfterFace,
  before: patientCBeforeFace,
  title: "Complete Smile Rehabilitation",
  caption: "She stopped smiling for photographs. This is her now.",
};

const cases = [
  { after: patientAAfter, before: patientABefore, title: "Full Upper & Lower Rehabilitation" },
  { after: patientBAfter, before: patientBBefore, title: "Complete Arch Reconstruction" },
  { after: patientDAfter, before: patientDBefore, title: "Complete Upper Restoration" },
  { after: patientEAfter, before: patientEBefore, title: "Failing Dentition, Rebuilt" },
  { after: case1After, before: case1Before, title: "Full Mouth Rehabilitation" },
  { after: case3After, before: case3Before, title: "Full Arch Implants" },
  { after: veneer1After, before: veneer1Before, title: "Porcelain Veneers" },
  { after: case2AfterLeft, before: case2BeforeLeft, title: "Bite Reconstruction" },
  { after: immediate1After, before: immediate1Before, title: "Immediate Implants" },
  { after: case4After, before: case4Before, title: "Failed Implant Correction" },
  { after: veneer2After, before: veneer2Before, title: "Veneers & Smile Design" },
  { after: outcome2After, before: outcome2Before, title: "Complex Restorative Case" },
  { after: case5After, before: case5Before, title: "Overdenture Rehabilitation" },
  { after: outcome3After, before: outcome3Before, title: "Complex Rehabilitation" },
  { after: case6After, before: case6Before, title: "Maxillomandibular Rehab" },
];

const CaseCard = ({ c, i }: { c: (typeof cases)[number]; i: number }) => {
  const [showBefore, setShowBefore] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: Math.min(i, 3) * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="relative aspect-[4/3] group overflow-hidden rounded-sm border border-divider hover:border-navy/20 hover:shadow-[0_10px_30px_-12px_hsl(220_20%_15%/0.18)] transition-all duration-500 cursor-pointer"
      onMouseEnter={() => setShowBefore(true)}
      onMouseLeave={() => setShowBefore(false)}
      onClick={(e) => {
        // On touch devices the first tap reveals the before; keep navigation on the link below
        if (window.matchMedia("(hover: none)").matches) {
          e.preventDefault();
          setShowBefore((v) => !v);
        }
      }}
    >
      {/* After (default) */}
      <img
        src={c.after}
        alt={`${c.title}, result`}
        loading="lazy"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${showBefore ? "opacity-0" : "opacity-100"}`}
      />
      {/* Before (revealed) */}
      <img
        src={c.before}
        alt={`${c.title}, before treatment`}
        loading="lazy"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${showBefore ? "opacity-100" : "opacity-0"}`}
      />

      {/* State badge */}
      <div className="absolute top-3 left-3">
        <span
          className={`inline-block px-2.5 py-1 font-body text-[9px] tracking-[0.22em] uppercase rounded-sm transition-colors duration-300 ${
            showBefore
              ? "bg-black/60 text-white/90"
              : "bg-white/75 text-navy/80 backdrop-blur-sm"
          }`}
        >
          {showBefore ? "Before" : "After"}
        </span>
      </div>

      {/* Label */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/55 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 flex items-end justify-between gap-2">
        <p className="font-body text-[9px] md:text-[10px] tracking-[0.28em] uppercase text-white/90 font-light">
          {c.title}
        </p>
        <p className="font-body text-[8px] tracking-[0.16em] uppercase text-white/55 hidden sm:block">
          {showBefore ? "" : "Hover for before"}
        </p>
      </div>
    </motion.div>
  );
};

const GallerySection = () => {
  return (
    <section
      className="section-padding-lg"
      style={{
        background: "linear-gradient(180deg, hsl(40 15% 97%) 0%, hsl(40 10% 95%) 100%)",
      }}
    >
      <div className="luxury-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16 max-w-2xl mx-auto"
        >
          <p className="font-body text-[10px] tracking-[0.4em] uppercase text-charcoal-light mb-5 md:mb-6">
            Real Patients · Real Outcomes
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-navy mb-5 leading-[1.05]">
            The Before, and <span className="italic">the After</span>
          </h2>
          <p className="font-body text-sm md:text-[15px] text-charcoal-light font-light leading-relaxed max-w-xl mx-auto">
            Hover over any case to see where it began. Full-mouth rebuilds,
            implant restorations, veneers and corrective work, every case
            treated in this practice.
          </p>
          <div className="w-12 h-px bg-navy/20 mx-auto mt-8" />
        </motion.div>

        {/* Featured full-face case */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto mb-5 md:mb-6"
        >
          <div className="grid grid-cols-2 rounded-sm overflow-hidden border border-divider shadow-[0_14px_44px_-18px_hsl(220_20%_15%/0.25)]">
            <div className="relative aspect-[3/4] sm:aspect-[4/4]">
              <img src={featured.before} alt={`${featured.title}, before treatment`} loading="lazy" className="absolute inset-0 w-full h-full object-cover object-[center_30%]" />
              <span className="absolute top-3 left-3 px-2.5 py-1 font-body text-[9px] tracking-[0.22em] uppercase rounded-sm bg-black/55 text-white/90">Before</span>
            </div>
            <div className="relative aspect-[3/4] sm:aspect-[4/4]">
              <img src={featured.after} alt={`${featured.title}, after treatment`} loading="lazy" className="absolute inset-0 w-full h-full object-cover object-[center_30%]" />
              <span className="absolute top-3 left-3 px-2.5 py-1 font-body text-[9px] tracking-[0.22em] uppercase rounded-sm bg-white/80 text-navy/85 backdrop-blur-sm">After</span>
            </div>
          </div>
          <div className="flex items-baseline justify-between mt-3 px-1">
            <p className="font-body text-[10px] md:text-[11px] tracking-[0.28em] uppercase text-charcoal">{featured.title}</p>
            <p className="font-body text-[11px] md:text-xs text-charcoal-light/75 italic font-light">{featured.caption}</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6 max-w-5xl mx-auto">
          {cases.map((c, i) => (
            <CaseCard key={i} c={c} i={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12 md:mt-14"
        >
          <p className="font-body text-[11px] text-charcoal-light/65 font-light italic mb-5 max-w-md mx-auto leading-relaxed">
            Every case shown is treatment completed in this practice.
            Photographs reflect actual patient outcomes.
          </p>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <Link
              to="/clinical-cases"
              className="font-body text-[10px] tracking-[0.25em] uppercase text-navy/60 hover:text-navy transition-colors duration-300 border-b border-navy/15 hover:border-navy/40 pb-px"
            >
              View All Clinical Work
            </Link>
            <a
              href="https://www.instagram.com/dr.akshayparmar/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[10px] tracking-[0.25em] uppercase text-navy/60 hover:text-navy transition-colors duration-300 border-b border-navy/15 hover:border-navy/40 pb-px"
            >
              More Transformations on Instagram →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
