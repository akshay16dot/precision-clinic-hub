import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { REGION_LIST } from "@/data/regionalCare";

const RegionalReach = () => (
  <section className="py-16 md:py-20 px-6 md:px-8 bg-warm-gray">
    <div className="luxury-container max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-70px" }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        <p className="font-body text-[10px] tracking-[0.32em] uppercase text-charcoal-light mb-5">Patients Across the Region</p>
        <h2 className="font-display text-3xl md:text-4xl font-light text-navy mb-7">For patients across <span className="italic">NJ, NYC &amp; Philadelphia</span></h2>
        <p className="font-body text-sm text-charcoal-light font-light leading-relaxed max-w-2xl mx-auto mb-9">
          Considering travel for implant, reconstructive or maxillofacial care? Meet Dr. Parmar in Hamilton or Jersey City, and plan the evaluation, treatment sequence and follow-up with your chosen practice.
        </p>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-8">
          {REGION_LIST.map((region) => (
            <Link key={region.path} to={region.path} className="font-body text-[10px] tracking-[0.16em] uppercase text-navy/65 hover:text-navy border-b border-navy/20 hover:border-navy/50 pb-1 transition-colors">
              {region.areas[0]}
            </Link>
          ))}
        </div>
        <Link to="/traveling-for-care" className="font-body text-[10px] tracking-[0.2em] uppercase text-navy border-b border-navy/30 hover:border-navy pb-1 transition-colors">
          Plan Your Visit from NJ, NYC or Philadelphia
        </Link>
      </motion.div>
    </div>
  </section>
);

export default RegionalReach;
