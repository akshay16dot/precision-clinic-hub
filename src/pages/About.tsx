import { motion } from "framer-motion";
import { useEffect } from "react";
import PageNavigation from "@/components/PageNavigation";
import PageCTA from "@/components/PageCTA";
import PageFooter from "@/components/PageFooter";
import logoAP from "@/assets/logo-ap.png";

const credentials = [
  "Board-Certified Prosthodontist",
  "Fellowship-Trained in Implant & Reconstructive Dentistry",
  "Specialist in Full-Arch & Complex Rehabilitation",
  "Developer of the STABLE IMPLANT Protocol™",
  "Creator of the Floxient Digital Dentistry Platform",
];

const values = [
  {
    title: "Precision Over Speed",
    description: "Every treatment plan is developed with meticulous diagnostic analysis and deliberate, evidence-based decision-making. Outcomes are never rushed.",
  },
  {
    title: "Biological Respect",
    description: "Treatment protocols prioritize tissue preservation, osseous health, and long-term biological stability over expedient solutions.",
  },
  {
    title: "Continuous Advancement",
    description: "Ongoing engagement with emerging technologies, materials science, and clinical research ensures that care reflects the current frontier of prosthodontic knowledge.",
  },
  {
    title: "Patient Partnership",
    description: "Rehabilitation is a collaborative process. Patients are informed, included, and empowered throughout every stage of their treatment journey.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
};

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About Dr. Akshay Parmar | Board-Certified Prosthodontist";
    return () => {
      document.title = "Dr. Akshay Parmar | Board-Certified Prosthodontist in New Jersey";
    };
  }, []);

  return (
    <main className="bg-background">
      <PageNavigation />

      {/* Hero — more personal, editorial */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-8 bg-background">
        <div className="luxury-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Logo treatment as visual anchor */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="flex items-center justify-center"
            >
              <div className="relative w-full max-w-md aspect-square flex items-center justify-center bg-navy rounded-sm">
                <img
                  src={logoAP}
                  alt="Dr. Akshay Parmar"
                  className="w-3/4 object-contain brightness-0 invert opacity-90"
                />
              </div>
            </motion.div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <p className="font-body text-xs tracking-[0.35em] uppercase text-charcoal-light mb-8">
                About the Specialist
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-navy leading-[0.95] mb-10">
                Dr. Akshay
                <br />
                <span className="italic font-light">Parmar</span>
              </h1>
              <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed mb-5">
                Dr. Akshay Parmar is a board-certified prosthodontist practicing in New Jersey, specializing in advanced implant rehabilitation, full-arch reconstruction, and complex prosthetic dentistry.
              </p>
              <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed mb-5">
                His clinical practice is built on a foundation of precision-driven diagnostics, biologically respectful treatment planning, and an unwavering commitment to long-term patient outcomes.
              </p>
              <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
                Beyond clinical care, Dr. Parmar is dedicated to advancing the field through the development of innovative protocols and educational platforms for dental professionals worldwide.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="luxury-container px-6 md:px-8">
        <div className="w-12 h-px bg-navy mx-auto" />
      </div>

      {/* Credentials */}
      <section className="section-padding bg-warm-gray">
        <div className="luxury-container">
          <motion.div {...fadeUp} transition={{ duration: 1 }} className="max-w-3xl mx-auto text-center">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-charcoal-light mb-6">
              Credentials
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-navy mb-16">
              Professional Background
            </h2>

            <div className="space-y-6">
              {credentials.map((item, i) => (
                <motion.p
                  key={i}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="font-display text-lg md:text-xl font-light text-charcoal tracking-tight"
                >
                  {item}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="luxury-container">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="text-center mb-20">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-charcoal-light mb-6">
              Clinical Philosophy
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-navy">
              Guiding Values
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-divider max-w-4xl mx-auto">
            {values.map((item, i) => (
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

      <PageCTA
        title="Schedule a Consultation"
        description="Experience the difference that specialist-level care and meticulous planning can make for your dental health."
      />
      <PageFooter />
    </main>
  );
};

export default About;
