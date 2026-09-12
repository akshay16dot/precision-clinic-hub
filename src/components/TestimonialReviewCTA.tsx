import { hamiltonReviewLinks } from "@/data/reviewLinks";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};


const TestimonialReviewCTA = () => {
  return (
    <motion.div
      {...fadeUp}
      transition={{ duration: 0.6 }}
      className="text-center mt-24 pt-12 border-t border-divider"
    >
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
        <a
          href={hamiltonReviewLinks.read}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-10 md:px-14 py-[18px] border border-navy/15 text-navy font-body text-[11px] tracking-[0.25em] uppercase transition-all duration-300 hover:bg-navy hover:text-primary-foreground"
        >
          Read Hamilton Google Reviews
          <ExternalLink size={13} strokeWidth={1.5} />
        </a>
        <a
          href={hamiltonReviewLinks.write}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-10 md:px-14 py-[18px] border border-navy/15 text-navy font-body text-[11px] tracking-[0.25em] uppercase transition-all duration-300 hover:bg-navy hover:text-primary-foreground"
        >
          Review Your Hamilton Visit
          <ExternalLink size={13} strokeWidth={1.5} />
        </a>
      </div>
      <p className="font-body text-[10px] tracking-[0.15em] text-charcoal-light/40">
        These links open the Hamilton listing. Please review only care you personally received at that location.
      </p>
    </motion.div>
  );
};

export default TestimonialReviewCTA;
