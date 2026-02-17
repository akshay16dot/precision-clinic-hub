import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SiteNavigation from "@/components/SiteNavigation";
import PageFooter from "@/components/PageFooter";
import { usePageSEO } from "@/hooks/usePageSEO";

const treatments = [
  {
    title: "Porcelain Veneers",
    text: "Transform shape, color, symmetry, and smile harmony.",
    link: "/veneers-aesthetic-reconstruction",
  },
  {
    title: "Smile Design",
    text: "Comprehensive aesthetic planning driven by facial and functional analysis.",
    link: "/smile-design",
  },
  {
    title: "Tooth Wear Rehabilitation",
    text: "Restore lost tooth structure with biomechanical precision.",
    link: "/tooth-wear-rehabilitation",
  },
  {
    title: "Whitening & Enhancement",
    text: "Conservative refinements for brighter, natural aesthetics.",
    link: "/teeth-whitening",
  },
];

const trustPoints = [
  "Prosthodontic precision and structural planning",
  "Facially driven smile design principles",
  "Long-term material performance considerations",
  "Biological preservation and functional stability",
];

const fade = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

const AestheticDentistry = () => {
  usePageSEO({
    title: "Aesthetic Dentistry NJ | Veneers & Smile Reconstruction",
    description: "Aesthetic dental rehabilitation by a Board-Certified Prosthodontist in New Jersey. Porcelain veneers, smile design, bite reconstruction, and tooth wear restoration guided by structural precision.",
  });

  return (
    <main className="bg-background">
      <SiteNavigation />

      {/* ── Hero ── */}
      <section className="pt-44 pb-24 md:pt-52 md:pb-32 lg:pb-36 bg-background">
        <div className="luxury-container px-6 md:px-8">
          <motion.div
            {...fade}
            transition={{ duration: 1 }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-charcoal-light mb-8">
              Aesthetic Dentistry
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-navy leading-[1.15] mb-6">
              Refined Aesthetics.{" "}
              <em className="italic">Engineered Longevity.</em>
            </h1>
            <p className="font-display text-lg md:text-xl font-light text-charcoal leading-relaxed mb-6">
              Aesthetic dentistry is where artistic vision meets biomechanical precision.
            </p>
            <p className="font-body text-sm md:text-[15px] text-charcoal-light font-light leading-relaxed max-w-2xl mx-auto mb-12">
              Dr. Akshay Parmar approaches aesthetic treatment through the lens of prosthodontic engineering, ensuring beauty is always supported by structural integrity, functional harmony, and long-term biological stability.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-3.5 bg-navy text-primary-foreground font-body text-[11px] tracking-[0.2em] uppercase hover:opacity-90 transition-opacity duration-300"
              >
                Schedule a Consultation
              </Link>
              <a
                href="#treatments"
                className="px-8 py-3.5 border border-navy text-navy font-body text-[11px] tracking-[0.2em] uppercase hover:bg-navy hover:text-primary-foreground transition-all duration-300"
              >
                Explore Treatments
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="luxury-container px-6 md:px-8">
        <div className="w-12 h-px bg-navy mx-auto" />
      </div>

      {/* ── Philosophy / Authority ── */}
      <section className="section-padding bg-background">
        <div className="luxury-container">
          <motion.div
            {...fade}
            transition={{ duration: 0.9 }}
            className="max-w-2xl mx-auto text-center"
          >
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-charcoal-light mb-8">
              Philosophy
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-navy leading-[1.15] mb-10">
              A Specialist Approach to{" "}
              <em className="italic">Aesthetic Dentistry</em>
            </h2>
            <p className="font-body text-sm md:text-[15px] text-charcoal-light font-light leading-relaxed mb-6">
              True aesthetic dentistry is not simply about creating whiter teeth. It is about designing proportion, balance, function, and longevity. Every treatment is guided by facial analysis, occlusal principles, material science, and biological preservation.
            </p>
            <p className="font-display text-lg md:text-xl font-light text-charcoal italic leading-relaxed">
              The goal is not artificial perfection. The goal is refined, natural, enduring results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Treatment Pathways ── */}
      <section id="treatments" className="section-padding bg-warm-gray">
        <div className="luxury-container">
          <motion.div {...fade} transition={{ duration: 0.8 }} className="text-center mb-20">
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-charcoal-light mb-6">
              Services
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-navy">
              Treatment Pathways
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-divider max-w-4xl mx-auto">
            {treatments.map((item, i) => (
              <motion.div
                key={i}
                {...fade}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="bg-background p-10 md:p-14 group"
              >
                <h3 className="font-display text-xl md:text-2xl font-medium text-navy mb-4 group-hover:opacity-80 transition-opacity duration-300">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-charcoal-light font-light leading-relaxed">
                  {item.text}
                </p>
                {item.link && (
                  <Link
                    to={item.link}
                    className="inline-block mt-6 font-body text-[11px] tracking-[0.2em] uppercase text-navy hover:opacity-70 transition-opacity duration-300"
                  >
                    Learn More →
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust / Differentiation ── */}
      <section className="section-padding bg-background">
        <div className="luxury-container">
          <motion.div
            {...fade}
            transition={{ duration: 0.9 }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-14">
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-charcoal-light mb-6">
                Differentiation
              </p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-navy">
                Why Specialist-Led Aesthetic Dentistry Matters
              </h2>
            </div>

            <div className="space-y-6 mb-14">
              {trustPoints.map((point, i) => (
                <motion.div
                  key={i}
                  {...fade}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex items-start gap-4 py-2"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-navy shrink-0" />
                  <p className="font-body text-sm md:text-[15px] text-charcoal font-light leading-relaxed">
                    {point}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.p
              {...fade}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-display text-lg md:text-xl font-light text-charcoal italic text-center leading-relaxed"
            >
              Aesthetic dentistry, when engineered correctly, is not cosmetic. It is restorative architecture.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Footer Transition ── */}
      <section className="py-20 md:py-28 bg-warm-gray">
        <div className="luxury-container px-6 md:px-8">
          <motion.div
            {...fade}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <div className="w-12 h-px bg-navy mx-auto mb-10" />
            <p className="font-display text-xl md:text-2xl font-light text-navy italic">
              Because lasting beauty is never accidental.
            </p>
            <div className="mt-10">
              <Link
                to="/contact"
                className="px-8 py-3.5 bg-navy text-primary-foreground font-body text-[11px] tracking-[0.2em] uppercase hover:opacity-90 transition-opacity duration-300"
              >
                Schedule a Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <PageFooter />
    </main>
  );
};

export default AestheticDentistry;
