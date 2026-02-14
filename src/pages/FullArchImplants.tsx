import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const beneficiaries = [
  {
    title: "Extensive Tooth Loss",
    description: "Patients experiencing significant tooth loss requiring comprehensive prosthetic rehabilitation of one or both arches.",
  },
  {
    title: "Failing Dentition",
    description: "Individuals with compromised remaining teeth where extraction and full-arch restoration provides superior long-term outcomes.",
  },
  {
    title: "Functional Instability",
    description: "Cases where existing prosthetics or remaining dentition no longer provide adequate masticatory function or occlusal stability.",
  },
  {
    title: "Advanced Restorative Needs",
    description: "Complex clinical presentations requiring multidisciplinary treatment planning and comprehensive prosthetic rehabilitation.",
  },
];

const treatmentGoals = [
  {
    title: "Functional Restoration",
    description: "Re-establishment of complete masticatory function, phonetics, and oral comfort through implant-supported fixed prosthetics.",
  },
  {
    title: "Structural Stability",
    description: "Biomechanically sound implant positioning and prosthetic design ensuring long-term load distribution and osseous health.",
  },
  {
    title: "Aesthetic Integration",
    description: "Prosthetic design harmonized with facial proportions, soft tissue contours, and natural dental anatomy.",
  },
  {
    title: "Long-Term Predictability",
    description: "Evidence-based protocols and precision engineering designed to maximize the longevity and maintainability of the rehabilitation.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
};

const FullArchImplants = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Full-Arch Implants in New Jersey | Dr. Akshay Parmar";
    return () => {
      document.title = "Dr. Akshay Parmar | Board-Certified Prosthodontist in New Jersey";
    };
  }, []);

  return (
    <main className="bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-divider">
        <div className="luxury-container flex items-center justify-between py-5 px-6 md:px-8">
          <Link to="/" className="font-display text-lg md:text-xl text-navy hover:opacity-70 transition-opacity duration-300">
            Dr. Akshay Parmar
          </Link>
          <Link to="/" className="font-body text-xs tracking-[0.15em] uppercase text-charcoal-light hover:text-navy transition-colors duration-300">
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-8 bg-background">
        <div className="luxury-container text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-body text-xs tracking-[0.35em] uppercase text-charcoal-light mb-8"
          >
            Board-Certified Prosthodontist · New Jersey
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-navy leading-[0.95] mb-10"
          >
            Full-Arch Implant
            <br />
            <span className="italic font-light">Rehabilitation in New Jersey</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="max-w-2xl mx-auto"
          >
            <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed mb-5">
              Full-arch implant rehabilitation is designed for patients requiring comprehensive restoration of function, stability, and aesthetics.
            </p>
            <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed mb-5">
              Dr. Akshay Parmar provides advanced full-arch implant rehabilitation across New Jersey, focusing on precision-driven planning, biological stability, and long-term functional outcomes.
            </p>
            <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
              Treatment is guided by prosthodontic principles, structural biomechanics, and individualized care.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="luxury-container px-6 md:px-8">
        <div className="w-12 h-px bg-navy mx-auto" />
      </div>

      {/* Who Benefits */}
      <section className="section-padding bg-background">
        <div className="luxury-container">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="text-center mb-20">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-charcoal-light mb-6">
              Clinical Indications
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-navy">
              Who Benefits from Full-Arch Implants
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-divider max-w-4xl mx-auto">
            {beneficiaries.map((item, i) => (
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

      {/* Clinical Approach */}
      <section className="section-padding bg-warm-gray">
        <div className="luxury-container">
          <motion.div {...fadeUp} transition={{ duration: 1 }} className="max-w-3xl mx-auto text-center">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-charcoal-light mb-6">
              Treatment Philosophy
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-navy mb-12">
              Clinical Approach
            </h2>

            <div className="w-12 h-px bg-navy mx-auto mb-12" />

            <p className="font-display text-xl md:text-2xl font-light text-charcoal leading-relaxed mb-8">
              Full-arch rehabilitation demands precision-driven diagnosis, prosthodontic rehabilitation principles, and biologically respectful protocols to achieve long-term stability and function.
            </p>

            <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed max-w-2xl mx-auto">
              Treatment philosophy reflects principles incorporated within the STABLE IMPLANT Protocol™, emphasizing soft tissue stability, bone preservation, and biomechanical integration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Treatment Goals */}
      <section className="section-padding bg-background">
        <div className="luxury-container">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="text-center mb-20">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-charcoal-light mb-6">
              Rehabilitation Outcomes
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-navy">
              Treatment Goals
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-0">
            {treatmentGoals.map((goal, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="border-b border-divider py-10 md:py-12"
              >
                <h3 className="font-display text-xl md:text-2xl font-medium text-charcoal mb-4">
                  {goal.title}
                </h3>
                <p className="font-body text-sm text-charcoal-light font-light leading-relaxed">
                  {goal.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy">
        <div className="luxury-container text-center">
          <motion.div {...fadeUp} transition={{ duration: 1 }}>
            <h2 className="font-display text-4xl md:text-5xl font-light text-primary-foreground mb-6">
              Schedule a Consultation
            </h2>
            <p className="font-body text-sm md:text-base text-primary-foreground/70 font-light max-w-xl mx-auto mb-12">
              Begin with a comprehensive evaluation to determine the most appropriate full-arch rehabilitation pathway for your clinical needs.
            </p>
            <a
              href="#contact"
              className="inline-block px-12 py-4 border border-primary-foreground/30 text-primary-foreground font-body text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:bg-primary-foreground hover:text-navy"
            >
              Request Appointment
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 md:px-8 bg-background border-t border-divider">
        <div className="luxury-container text-center">
          <p className="font-display text-xl text-navy mb-2">Dr. Akshay Parmar</p>
          <p className="font-body text-xs tracking-[0.2em] uppercase text-charcoal-light">
            Board-Certified Prosthodontist · New Jersey
          </p>
        </div>
      </footer>
    </main>
  );
};

export default FullArchImplants;
