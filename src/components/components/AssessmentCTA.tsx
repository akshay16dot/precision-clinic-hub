import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const AssessmentCTA = () => (
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.6 }}
    className="py-20 md:py-28 px-6"
  >
    <div className="max-w-2xl mx-auto text-center">
      <p className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-5">
        Clinical Guidance
      </p>
      <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-light text-navy leading-snug mb-4">
        Not Sure Which Treatment Is Right{" "}
        <span className="italic">For You?</span>
      </h2>
      <p className="font-body text-[13px] md:text-sm text-muted-foreground leading-relaxed max-w-lg mx-auto mb-8">
        Our guided Clinical Self-Assessment helps patients understand treatment
        considerations prior to consultation.
      </p>
      <Link
        to="/clinical-assessment"
        className="inline-flex items-center gap-3 px-10 py-4 border border-navy/20 text-navy font-body text-[11px] tracking-[0.25em] uppercase transition-all duration-300 hover:bg-navy hover:text-primary-foreground"
      >
        Start Clinical Self-Assessment
        <ArrowRight size={14} strokeWidth={1.5} />
      </Link>
    </div>
  </motion.section>
);

export default AssessmentCTA;
