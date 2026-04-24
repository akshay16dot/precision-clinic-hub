import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import case1After from "@/assets/case1-after.png";
import case2AfterLeft from "@/assets/case2-after-left.png";
import case3After from "@/assets/case3-after.png";
import case4After from "@/assets/case4-after.png";
import case5After from "@/assets/case5-after.png";
import case6After from "@/assets/case6-after.png";

const cases = [
  { label: "Case 1", img: case1After, title: "Full Mouth Rehabilitation" },
  { label: "Case 2", img: case2AfterLeft, title: "Bite Reconstruction" },
  { label: "Case 3", img: case3After, title: "Full Arch Implants" },
  { label: "Case 4", img: case4After, title: "Failed Implant Correction" },
  { label: "Case 5", img: case5After, title: "Overdenture Rehabilitation" },
  { label: "Case 6", img: case6After, title: "Maxillomandibular Rehab" },
];

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
            A Look at the <span className="italic">Work</span>
          </h2>
          <p className="font-body text-sm md:text-[15px] text-charcoal-light font-light leading-relaxed max-w-xl mx-auto">
            Selected cases from Dr. Parmar's practice, full-mouth rebuilds, implant restorations, and corrective work for patients who came in looking for a lasting result.
          </p>
          <div className="w-12 h-px bg-navy/20 mx-auto mt-8" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6 max-w-5xl mx-auto">
          {cases.map((c, i) => (
            <Link to="/clinical-cases" key={i} aria-label={`View ${c.title} case`}>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: Math.min(i, 3) * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="relative aspect-[4/3] group cursor-pointer overflow-hidden rounded-sm border border-divider hover:border-navy/20 hover:shadow-[0_10px_30px_-12px_hsl(220_20%_15%/0.18)] transition-all duration-500"
              >
                <img
                  src={c.img}
                  alt={c.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  loading="lazy"
                />
                {/* Persistent subtle bottom gradient for label legibility on mobile */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/55 to-transparent sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500" />
                {/* Persistent label on mobile, reveal on desktop */}
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 sm:translate-y-2 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 transition-all duration-500">
                  <p className="font-body text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-white/90 font-light">
                    {c.title}
                  </p>
                </div>
              </motion.div>
            </Link>
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
            Every case shown is treatment completed in this practice. Photographs reflect actual patient outcomes.
          </p>
          <Link
            to="/clinical-cases"
            className="font-body text-[10px] tracking-[0.25em] uppercase text-navy/60 hover:text-navy transition-colors duration-300 border-b border-navy/15 hover:border-navy/40 pb-px"
          >
            View All Clinical Work
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
