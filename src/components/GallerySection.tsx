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
          className="text-center mb-16"
        >
          <p className="font-body text-[10px] tracking-[0.4em] uppercase text-charcoal-light mb-6">
            Selected Work
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy mb-4">
            Clinical <span className="italic">Cases</span>
          </h2>
          <div className="w-12 h-px bg-navy/20 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6 max-w-5xl mx-auto">
          {cases.map((c, i) => (
            <Link to="/clinical-cases" key={i}>
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative aspect-[4/3] group cursor-pointer overflow-hidden rounded-sm border border-divider hover:border-navy/15 hover:shadow-[0_6px_24px_-10px_hsl(220_20%_15%/0.1)] transition-all duration-500"
              >
                <img
                  src={c.img}
                  alt={c.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="font-body text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-white/80 font-light">
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
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            to="/clinical-cases"
            className="font-body text-[10px] tracking-[0.25em] uppercase text-navy/50 hover:text-navy transition-colors duration-300 border-b border-navy/15 hover:border-navy/35 pb-px"
          >
            View All Clinical Work
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
