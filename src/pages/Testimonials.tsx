import { motion } from "framer-motion";
import SiteNavigation from "@/components/SiteNavigation";
import PageFooter from "@/components/PageFooter";
import TestimonialReviewCTA from "@/components/TestimonialReviewCTA";
import { usePageSEO } from "@/hooks/usePageSEO";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

const testimonials = [
  {
    quote:
      "After years of struggling with failing teeth, I finally found a specialist who took the time to explain every option. The implants feel completely natural, and I can eat and speak with confidence again.",
    name: "M.R.",
    tag: "Full-Arch Rehabilitation",
  },
  {
    quote:
      "I wanted my smile to look better but still look like me. Dr. Parmar understood that immediately. The veneers are so natural that even close friends assumed nothing had changed, just that I looked healthier.",
    name: "Sarah",
    tag: "Veneers & Aesthetics",
  },
  {
    quote:
      "My case was complicated, and other offices were not sure how to approach it. Dr. Parmar walked me through every step of the reconstruction clearly and honestly. I never felt rushed, and the result exceeded what I thought was possible.",
    name: "J.L.",
    tag: "Complex Reconstruction",
  },
  {
    quote:
      "From the first consultation, I knew I was in the right hands. The attention to detail in my implant treatment was remarkable. Everything was planned precisely, and the recovery was smoother than I expected.",
    name: "A.T.",
    tag: "Dental Implants",
  },
  {
    quote:
      "I had been told by multiple dentists that my case was too complex. Dr. Parmar not only took it on, but delivered a result that changed my quality of life. I can smile without thinking about it now.",
    name: "Diana",
    tag: "Aesthetic Rehabilitation",
  },
];

const Testimonials = () => {
  usePageSEO({
    title: "Patient Reviews | Prosthodontist in New Jersey",
    description: "Patient experiences with dental implant rehabilitation, full-arch reconstruction, veneers, and complex prosthetic care. Verified outcomes from a Board-Certified Prosthodontist practice in NJ.",
  });

  return (
    <main className="bg-background">
      <SiteNavigation />

      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 px-6 md:px-8 bg-navy">
        <div className="luxury-container max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="font-body text-[10px] tracking-[0.35em] uppercase text-primary-foreground/45 mb-6"
          >
            Patient Experience
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-3xl md:text-5xl font-light text-primary-foreground mb-5"
          >
            Patient <span className="italic">Experiences</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-xs md:text-sm text-primary-foreground/55 font-light tracking-wide"
          >
            Reflections on care, comfort, and clinical transformation.
          </motion.p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-20 px-6 md:px-8">
        <div className="luxury-container max-w-2xl text-center">
          <motion.div {...fadeUp} transition={{ duration: 0.7 }}>
            <p className="font-body text-sm md:text-[15px] text-charcoal-light font-light leading-[2] mb-2">
              Every rehabilitation journey is unique.
            </p>
            <p className="font-body text-sm md:text-[15px] text-charcoal-light font-light leading-[2]">
              Beyond clinical outcomes, these experiences reflect comfort, function, confidence, and quality of life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="pb-20 md:pb-28 px-6 md:px-8">
        <div className="luxury-container max-w-3xl">
          <div className="space-y-16 md:space-y-20">
            {testimonials.map((t, i) => (
              <motion.blockquote
                key={i}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="border-l border-border pl-8 md:pl-10"
              >
                <p className="font-body text-sm md:text-[15px] text-charcoal font-light leading-[1.95] italic mb-6">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <span className="font-body text-[11px] tracking-[0.1em] text-charcoal font-medium">
                    {t.name}
                  </span>
                  {t.tag && (
                    <>
                      <span className="w-px h-3 bg-border" />
                      <span className="font-body text-[10px] tracking-[0.2em] uppercase text-charcoal-light/50">
                        {t.tag}
                      </span>
                    </>
                  )}
                </div>
              </motion.blockquote>
            ))}
          </div>

          <TestimonialReviewCTA />
        </div>
      </section>

      <PageFooter />
    </main>
  );
};

export default Testimonials;
