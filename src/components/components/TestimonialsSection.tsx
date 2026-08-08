import { motion } from "framer-motion";
import TestimonialReviewCTA from "@/components/TestimonialReviewCTA";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

const testimonials = [
  {
    quote:
      "After years of struggling with failing teeth, I finally found a specialist who took the time to explain every option. The implants feel completely natural, and I can eat and speak with confidence again. The level of care and precision throughout the entire process was unlike anything I had experienced before.",
    attribution: "Full-Arch Rehabilitation Patient",
  },
  {
    quote:
      "I wanted my smile to look better but still look like me. Dr. Parmar understood that immediately. The veneers are so natural that even close friends assumed nothing had changed, just that I looked healthier. That subtlety is exactly what I was hoping for.",
    attribution: "Veneers & Aesthetic Patient",
  },
  {
    quote:
      "My case was complicated, and other offices were not sure how to approach it. Dr. Parmar walked me through every step of the reconstruction clearly and honestly. I never felt rushed, and the result exceeded what I thought was possible. I finally trust my teeth again.",
    attribution: "Complex Reconstructive Patient",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding px-6 md:px-8">
      <div className="luxury-container max-w-4xl">
        <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="text-center mb-16">
          <p className="font-body text-[10px] tracking-[0.35em] uppercase text-charcoal-light mb-6">
            Patient Experience
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-light text-navy">
            Words from Those{" "}
            <span className="italic">We Have Treated</span>
          </h2>
        </motion.div>

        <div className="space-y-16">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={i}
              {...fadeUp}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center max-w-2xl mx-auto"
            >
              <p className="font-body text-sm md:text-[15px] text-charcoal font-light leading-[1.9] italic mb-5">
                "{t.quote}"
              </p>
              <cite className="font-body text-[10px] tracking-[0.3em] uppercase text-charcoal-light not-italic">
                {t.attribution}
              </cite>
            </motion.blockquote>
          ))}
        </div>

        <TestimonialReviewCTA />
      </div>
    </section>
  );
};

export default TestimonialsSection;
