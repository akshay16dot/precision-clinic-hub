import { motion } from "framer-motion";
import PageNavigation from "@/components/PageNavigation";
import PageFooter from "@/components/PageFooter";
import { Link } from "react-router-dom";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

const testimonials = [
  {
    quote:
      "After years of struggling with failing teeth, I finally found a specialist who took the time to explain every option. The implants feel completely natural, and I can eat and speak with confidence again. The level of care and precision throughout the entire process was unlike anything I had experienced before.",
    initials: "M.R.",
    tag: "Full-Arch Rehabilitation",
  },
  {
    quote:
      "I wanted my smile to look better but still look like me. Dr. Parmar understood that immediately. The veneers are so natural that even close friends assumed nothing had changed, just that I looked healthier. That subtlety is exactly what I was hoping for.",
    initials: "S.K.",
    tag: "Veneers & Aesthetics",
  },
  {
    quote:
      "My case was complicated, and other offices were not sure how to approach it. Dr. Parmar walked me through every step of the reconstruction clearly and honestly. I never felt rushed, and the result exceeded what I thought was possible. I finally trust my teeth again.",
    initials: "J.L.",
    tag: "Complex Reconstruction",
  },
  {
    quote:
      "From the first consultation, I knew I was in the right hands. The attention to detail in my implant treatment was remarkable. Everything was planned precisely, and the recovery was smoother than I expected.",
    initials: "A.T.",
    tag: "Dental Implants",
  },
  {
    quote:
      "I had been told by multiple dentists that my case was too complex. Dr. Parmar not only took it on, but delivered a result that changed my quality of life. I can smile without thinking about it now.",
    initials: "D.P.",
    tag: "Aesthetic Rehabilitation",
  },
];

const Testimonials = () => {
  return (
    <main className="bg-background">
      <PageNavigation />

      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 px-6 md:px-8 bg-navy">
        <div className="luxury-container text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="font-body text-[10px] tracking-[0.35em] uppercase text-primary-foreground/30 mb-6"
          >
            Patient Experience
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-3xl md:text-5xl font-light text-primary-foreground"
          >
            Curated <span className="italic">Testimonials</span>
          </motion.h1>
        </div>
      </section>

      {/* Testimonials grid */}
      <section className="section-padding px-6 md:px-8">
        <div className="luxury-container max-w-4xl">
          <div className="space-y-16 md:space-y-20">
            {testimonials.map((t, i) => (
              <motion.blockquote
                key={i}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="text-center max-w-2xl mx-auto"
              >
                <p className="font-body text-sm md:text-[15px] text-charcoal font-light leading-[1.9] italic mb-6">
                  "{t.quote}"
                </p>
                <div className="flex items-center justify-center gap-4">
                  <span className="font-body text-[11px] tracking-[0.15em] text-charcoal-light font-medium">
                    {t.initials}
                  </span>
                  <span className="w-px h-3 bg-border" />
                  <span className="font-body text-[10px] tracking-[0.2em] uppercase text-charcoal-light/60">
                    {t.tag}
                  </span>
                </div>
              </motion.blockquote>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="text-center mt-20 pt-12 border-t border-divider"
          >
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-charcoal-light/60 mb-6">
              Your experience matters
            </p>
            <Link
              to="/leave-review"
              className="inline-block px-14 py-[18px] border border-navy/20 text-navy font-body text-[11px] tracking-[0.25em] uppercase transition-all duration-300 hover:bg-navy hover:text-primary-foreground"
            >
              Leave a Review
            </Link>
          </motion.div>
        </div>
      </section>

      <PageFooter />
    </main>
  );
};

export default Testimonials;
