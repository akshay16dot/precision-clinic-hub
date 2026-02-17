import { motion } from "framer-motion";
import PageNavigation from "@/components/PageNavigation";
import PageFooter from "@/components/PageFooter";
import { ExternalLink } from "lucide-react";

const LeaveReview = () => {
  return (
    <main className="bg-background">
      <PageNavigation />

      <section className="pt-32 md:pt-40 pb-20 md:pb-28 px-6 md:px-8">
        <div className="luxury-container max-w-2xl text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="font-body text-[10px] tracking-[0.35em] uppercase text-charcoal-light mb-6"
          >
            Patient Feedback
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-3xl md:text-5xl font-light text-navy mb-8"
          >
            Share Your <span className="italic">Experience</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="font-body text-sm md:text-[15px] text-charcoal-light font-light leading-[1.9] mb-14 max-w-lg mx-auto"
          >
            If we helped you smile, function, or heal better — your review helps others find the right care.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            href="https://g.page/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-14 py-[18px] bg-navy text-primary-foreground font-body text-[11px] tracking-[0.25em] uppercase transition-all duration-300 hover:bg-navy-light border border-navy"
          >
            Leave a Google Review
            <ExternalLink size={14} strokeWidth={1.5} />
          </motion.a>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="font-body text-[10px] tracking-[0.2em] uppercase text-charcoal-light/40 mt-10"
          >
            Your privacy is always respected
          </motion.p>
        </div>
      </section>

      <PageFooter />
    </main>
  );
};

export default LeaveReview;
