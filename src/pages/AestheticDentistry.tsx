import { motion } from "framer-motion";
import { useEffect } from "react";
import PageNavigation from "@/components/PageNavigation";
import PageHero from "@/components/PageHero";
import PageCTA from "@/components/PageCTA";
import PageFooter from "@/components/PageFooter";

const services = [
  {
    title: "Porcelain Veneers",
    description: "Custom-fabricated porcelain restorations designed to refine tooth shape, alignment, and shade. Each veneer is individually crafted to harmonize with the surrounding dentition and facial proportions.",
  },
  {
    title: "Smile Rehabilitation",
    description: "Comprehensive aesthetic treatment planning addressing multiple concerns, including alignment, proportion, shade, and gingival symmetry, through a coordinated, phased approach to achieve a naturally harmonious result.",
  },
  {
    title: "Ceramic Crowns & Bridges",
    description: "Metal-free ceramic restorations that replicate the translucency, contour, and vitality of natural teeth. Designed for both anterior aesthetics and posterior durability.",
  },
  {
    title: "Functional & Aesthetic Harmony",
    description: "Every aesthetic treatment is planned with equal consideration for occlusal function, biomechanical stability, and long-term material performance, ensuring beauty that endures.",
  },
];

const principles = [
  {
    title: "Facial Integration",
    description: "Aesthetic outcomes are designed relative to facial proportions, lip dynamics, and smile architecture, not isolated tooth appearance.",
  },
  {
    title: "Material Excellence",
    description: "Advanced ceramic systems selected for optical properties that replicate natural enamel translucency, depth, and surface texture.",
  },
  {
    title: "Conservative Approach",
    description: "Preservation of natural tooth structure wherever possible, utilizing minimally invasive preparation techniques and bonded restorations.",
  },
  {
    title: "Predictable Outcomes",
    description: "Digital smile design, diagnostic wax-ups, and provisional restorations ensure the final result is visualized and approved before definitive treatment.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
};

const AestheticDentistry = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Aesthetic & Cosmetic Dentistry | Dr. Akshay Parmar";
    return () => {
      document.title = "Dr. Akshay Parmar | Board-Certified Prosthodontist in New Jersey";
    };
  }, []);

  return (
    <main className="bg-background">
      <PageNavigation />

      <PageHero
        subtitle="Board-Certified Prosthodontist · New Jersey"
        title="Aesthetic &amp; Cosmetic"
        titleItalic="Dentistry"
        paragraphs={[
          "Aesthetic dentistry is the intersection of clinical precision and artistic vision.",
          "Dr. Akshay Parmar approaches every cosmetic case with the rigor of prosthodontic training, ensuring that visual beauty is always supported by functional integrity and long-term material performance.",
          "The result is refined, natural, and enduring.",
        ]}
      />

      <div className="luxury-container px-6 md:px-8">
        <div className="w-12 h-px bg-navy mx-auto" />
      </div>

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="luxury-container">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="text-center mb-20">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-charcoal-light mb-6">
              Aesthetic Services
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-navy">
              Treatment Scope
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-divider max-w-4xl mx-auto">
            {services.map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-background p-10 md:p-12"
              >
                <h3 className="font-display text-xl md:text-2xl font-medium text-charcoal mb-4">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-charcoal-light font-light leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-warm-gray">
        <div className="luxury-container">
          <motion.div {...fadeUp} transition={{ duration: 1 }} className="max-w-3xl mx-auto text-center">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-charcoal-light mb-6">
              Aesthetic Philosophy
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-navy mb-12">
              Beyond Appearance
            </h2>
            <div className="w-12 h-px bg-navy mx-auto mb-12" />
            <p className="font-display text-xl md:text-2xl font-light text-charcoal leading-relaxed mb-8">
              True aesthetic excellence is invisible, it looks natural, feels effortless, and functions without compromise.
            </p>
            <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed max-w-2xl mx-auto">
              Every treatment is designed to honor the natural beauty of the smile while correcting imperfections with precision and restraint.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Principles */}
      <section className="section-padding bg-background">
        <div className="luxury-container">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="text-center mb-20">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-charcoal-light mb-6">
              Clinical Standards
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-navy">
              Guiding Principles
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-0">
            {principles.map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="border-b border-divider py-10 md:py-12"
              >
                <h3 className="font-display text-xl md:text-2xl font-medium text-charcoal mb-4">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-charcoal-light font-light leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        description="Begin with a personalized aesthetic consultation to explore the possibilities for your smile."
      />
      <PageFooter />
    </main>
  );
};

export default AestheticDentistry;
