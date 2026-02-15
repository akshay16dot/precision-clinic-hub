import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import logoAP from "@/assets/logo-ap.png";

const cases = [
  {
    category: "Full-Arch Rehabilitation",
    description:
      "Complete maxillary rehabilitation with implant-supported fixed prosthetics following extraction of failing dentition. Treatment planned with guided surgery, immediate provisionalization, and definitive zirconia restoration.",
  },
  {
    category: "Implant Rehabilitation",
    description:
      "Posterior mandibular implant placement with simultaneous guided bone regeneration. Prosthetic restoration designed for optimal occlusal loading and long-term tissue stability.",
  },
  {
    category: "Complex Reconstruction",
    description:
      "Multidisciplinary rehabilitation involving orthodontic alignment, implant placement, and full-mouth prosthodontic reconstruction to restore function, aesthetics, and occlusal harmony.",
  },
  {
    category: "Anterior Implant Aesthetics",
    description:
      "Single-tooth implant replacement in the maxillary aesthetic zone with custom abutment design and layered ceramic restoration, emphasizing soft tissue contour and emergence profile.",
  },
  {
    category: "Full-Arch Rehabilitation",
    description:
      "Mandibular full-arch reconstruction utilizing strategically positioned implants with immediate fixed provisionalization. Definitive prosthesis fabricated with CAD/CAM precision for biomechanical optimization.",
  },
  {
    category: "Implant Rehabilitation",
    description:
      "Staged implant rehabilitation of partially edentulous arches, integrating bone grafting protocols and prosthetic planning to achieve predictable functional and aesthetic outcomes.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
};

const ClinicalCases = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Clinical Cases | Dr. Akshay Parmar";
    return () => {
      document.title =
        "Board-Certified Prosthodontist & Implant Specialist in New Jersey | Dr. Akshay Parmar";
    };
  }, []);

  return (
    <main className="bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-divider">
        <div className="luxury-container flex items-center justify-between py-5 px-6 md:px-8">
          <Link to="/" className="hover:opacity-70 transition-opacity duration-300">
            <img src={logoAP} alt="Dr. Akshay Parmar" className="h-10 md:h-12" />
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
      <section className="pt-36 pb-20 md:pt-44 md:pb-28 px-6 md:px-8 bg-background">
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
            className="font-display text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-navy leading-[0.95] mb-12"
          >
            Selected Clinical Work
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="max-w-2xl mx-auto"
          >
            <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed mb-5">
              Clinical rehabilitation requires precision, planning, and an individualized approach.
            </p>
            <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
              The following cases represent selected examples of implant, prosthodontic, and complex
              rehabilitation treatment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Logo watermark divider */}
      <div className="luxury-container px-6 md:px-8 py-12 md:py-16">
        <div className="flex items-center justify-center">
          <div className="flex-1 h-px bg-divider" />
          <div className="mx-8 md:mx-12">
            <img
              src={logoAP}
              alt=""
              aria-hidden="true"
              className="h-20 md:h-28 opacity-[0.06]"
            />
          </div>
          <div className="flex-1 h-px bg-divider" />
        </div>
      </div>

      {/* Cases */}
      <section className="section-padding bg-background">
        <div className="luxury-container">
          <div className="max-w-3xl mx-auto">
            {cases.map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="border-b border-divider py-12 md:py-16"
              >
                <p className="font-body text-[11px] tracking-[0.3em] uppercase text-charcoal-light mb-5">
                  {item.category}
                </p>
                <p className="font-body text-sm md:text-base text-charcoal font-light leading-relaxed">
                  {item.description}
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
              Begin with a comprehensive evaluation to determine the most appropriate rehabilitation
              pathway for your clinical needs.
            </p>
            <a
              href="#contact"
              className="inline-block px-12 py-4 border border-primary-foreground/30 text-primary-foreground font-body text-[11px] tracking-[0.25em] uppercase transition-all duration-300 hover:bg-primary-foreground hover:text-navy"
            >
              Request Appointment
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 md:px-8 bg-background border-t border-divider">
        <div className="luxury-container text-center">
          <img src={logoAP} alt="Dr. Akshay Parmar" className="h-12 mx-auto mb-4" />
          <p className="font-body text-xs tracking-[0.2em] uppercase text-charcoal-light">
            Board-Certified Prosthodontist · New Jersey
          </p>
        </div>
      </footer>
    </main>
  );
};

export default ClinicalCases;
