import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const benefits = [
  {
    title: "Functional Restoration",
    description: "Implant-supported restorations replicate natural tooth function, enabling confident biting, chewing, and speech.",
  },
  {
    title: "Bone Preservation",
    description: "Osseointegrated implants maintain alveolar bone volume, preventing the progressive resorption associated with tooth loss.",
  },
  {
    title: "Long-Term Stability",
    description: "Properly planned and executed implant rehabilitation provides decades of predictable, stable function.",
  },
  {
    title: "Aesthetic Integration",
    description: "Prosthetic design harmonizes with natural dentition, achieving seamless integration of form, contour, and shade.",
  },
];

const implantTypes = [
  {
    title: "Single-Tooth Implants",
    description: "Precision replacement of individual teeth with implant-supported crowns designed for optimal function and aesthetics.",
  },
  {
    title: "Multiple-Tooth Replacement",
    description: "Implant-supported bridges restoring partial edentulism with minimal intervention to adjacent natural teeth.",
  },
  {
    title: "Full-Arch Implant Rehabilitation",
    description: "Comprehensive restoration of complete dental arches using strategically placed implants and fixed prosthetics.",
  },
  {
    title: "Complex Oral Rehabilitation",
    description: "Multidisciplinary treatment planning for medically compromised, anatomically complex, or previously failed cases.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
};

const DentalImplants = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Dental Implants in New Jersey | Dr. Akshay Parmar";
    return () => {
      document.title = "Dr. Akshay Parmar | Board-Certified Prosthodontist in New Jersey";
    };
  }, []);

  return (
    <main className="bg-background">
      {/* Navigation back */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-divider">
        <div className="luxury-container flex items-center justify-between py-5 px-6 md:px-8">
          <Link
            to="/"
            className="font-display text-lg md:text-xl text-navy hover:opacity-70 transition-opacity duration-300"
          >
            Dr. Akshay Parmar
          </Link>
          <Link
            to="/"
            className="font-body text-xs tracking-[0.15em] uppercase text-charcoal-light hover:text-navy transition-colors duration-300"
          >
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
            Advanced Dental Implant
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
              Dental implant treatment requires precision, planning, and a biologically driven approach.
            </p>
            <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed mb-5">
              Dr. Akshay Parmar provides advanced dental implant rehabilitation across New Jersey, focusing on long-term stability, functional integration, and aesthetic harmony.
            </p>
            <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
              Treatment ranges from single-tooth implants to full-arch and complex rehabilitation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="luxury-container px-6 md:px-8">
        <div className="w-12 h-px bg-navy mx-auto" />
      </div>

      {/* Why Dental Implants */}
      <section className="section-padding bg-background">
        <div className="luxury-container">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="text-center mb-20">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-charcoal-light mb-6">
              Clinical Benefits
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-navy">
              Why Dental Implants
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-divider max-w-4xl mx-auto">
            {benefits.map((item, i) => (
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
              Implant rehabilitation is guided by precision-driven planning, prosthodontic principles, and biologically respectful treatment protocols.
            </p>

            <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed max-w-2xl mx-auto">
              Treatment philosophy reflects principles incorporated within the STABLE IMPLANT Protocol™, emphasizing soft tissue stability, bone preservation, and long-term functional integration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Types of Implant Rehabilitation */}
      <section className="section-padding bg-background">
        <div className="luxury-container">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="text-center mb-20">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-charcoal-light mb-6">
              Specialized Services
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-navy">
              Types of Implant Rehabilitation
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-0">
            {implantTypes.map((type, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="border-b border-divider py-10 md:py-12"
              >
                <h3 className="font-display text-xl md:text-2xl font-medium text-charcoal mb-4">
                  {type.title}
                </h3>
                <p className="font-body text-sm text-charcoal-light font-light leading-relaxed">
                  {type.description}
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
              Begin with a comprehensive evaluation to determine the most appropriate implant rehabilitation pathway for your clinical needs.
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

export default DentalImplants;
