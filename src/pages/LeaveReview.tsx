import { motion } from "framer-motion";
import SiteNavigation from "@/components/SiteNavigation";
import PageFooter from "@/components/PageFooter";
import InquiryForm from "@/components/InquiryForm";
import { ExternalLink } from "lucide-react";
import { usePageSEO } from "@/hooks/usePageSEO";

const LeaveReview = () => {
  usePageSEO({
    title: "Leave a Review | Prosthodontist Dr. Akshay Parmar NJ",
    description: "Share your experience with Board-Certified Prosthodontist Dr. Akshay Parmar. Patient feedback supports others seeking specialist implant and prosthetic care in New Jersey.",
  });

  return (
    <main className="bg-background">
      <SiteNavigation />

      <section className="pt-32 md:pt-40 pb-16 md:pb-20 px-6 md:px-8">
        <div className="luxury-container max-w-2xl text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="font-body text-[10px] tracking-[0.35em] uppercase text-charcoal-light/60 mb-6"
          >
            Feedback
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-3xl md:text-5xl font-light text-navy mb-5"
          >
            Share Your <span className="italic">Experience</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-xs md:text-sm text-charcoal-light font-light tracking-wide mb-10"
          >
            Your perspective helps others make informed decisions.
          </motion.p>
        </div>
      </section>

      {/* Google Review CTA */}
      <section className="pb-12 md:pb-16 px-6 md:px-8">
        <div className="luxury-container max-w-lg text-center">
          <motion.a
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            href="https://g.page/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-14 py-[18px] bg-navy text-primary-foreground font-body text-[11px] tracking-[0.25em] uppercase transition-all duration-300 hover:opacity-90 border border-navy"
          >
            Leave a Google Review
            <ExternalLink size={14} strokeWidth={1.5} />
          </motion.a>
        </div>
      </section>

      {/* Divider */}
      <div className="luxury-container px-6 md:px-8">
        <div className="w-12 h-px bg-navy/20 mx-auto my-8" />
      </div>

      {/* Written Review Form */}
      <section className="pb-24 md:pb-32 px-6 md:px-8">
        <div className="luxury-container max-w-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="font-body text-xs text-charcoal-light font-light tracking-wide text-center mb-10">
              Alternatively, share your experience directly below and we will receive it privately.
            </p>
            <InquiryForm
              formType="Patient Review"
              pageSource="Leave a Review"
              heading=""
              messageLabel="Your Experience"
              messagePlaceholder="Please share your experience..."
              submitLabel="Submit Review"
              fields={["name", "email", "message"]}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="font-body text-[10px] tracking-[0.2em] uppercase text-charcoal-light/35 mt-10 text-center"
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
