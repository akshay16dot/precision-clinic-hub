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
      "Dr. Parmar's approach to implant education is rooted in biology and systematic thinking. His courses reshaped how I plan full-arch cases, from diagnostics through prosthetic delivery.",
    name: "Dr. R. Mehta",
    credential: "Prosthodontist, New York",
  },
  {
    quote:
      "The live surgical training was unlike any other program I have attended. The emphasis on tissue management and prosthetic-driven implant placement gave me a framework I apply daily in my practice.",
    name: "Dr. K. Santos",
    credential: "General Dentist, New Jersey",
  },
  {
    quote:
      "What sets this program apart is the philosophy. It is not about memorizing protocols. It is about understanding why each decision is made. That depth of reasoning has made me a more confident clinician.",
    name: "Dr. A. Chen",
    credential: "Periodontist, Connecticut",
  },
  {
    quote:
      "As a young practitioner, having access to a mentor who balances clinical excellence with genuine educational generosity has been invaluable. The STABLE IMPLANT Protocol training was a turning point in my career.",
    name: "Dr. N. Patel",
    credential: "General Dentist, Pennsylvania",
  },
];

const ProfessionalTestimonials = () => {
  usePageSEO({
    title: "Clinician Testimonials | Implant Training Reviews",
    description: "Peer reflections from dentists and specialists on clinical implant education, live surgery mentorship, and prosthodontic training programs.",
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
            Professional Education
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-3xl md:text-5xl font-light text-primary-foreground mb-5"
          >
            Professional <span className="italic">Reflections</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-xs md:text-sm text-primary-foreground/55 font-light tracking-wide"
          >
            Perspectives from clinicians and course participants.
          </motion.p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-20 px-6 md:px-8">
        <div className="luxury-container max-w-2xl text-center">
          <motion.div {...fadeUp} transition={{ duration: 0.7 }}>
            <p className="font-body text-sm md:text-[15px] text-charcoal-light font-light leading-[2] mb-2">
              Education, mentorship, and clinical philosophy extend beyond treatment.
            </p>
            <p className="font-body text-sm md:text-[15px] text-charcoal-light font-light leading-[2]">
              These reflections represent experiences from colleagues and clinicians across programs and live surgical training.
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
                  {t.credential && (
                    <>
                      <span className="w-px h-3 bg-border" />
                      <span className="font-body text-[10px] tracking-[0.15em] text-charcoal-light/50">
                        {t.credential}
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

export default ProfessionalTestimonials;
