import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { usePageSEO } from "@/hooks/usePageSEO";
import SiteNavigation from "@/components/SiteNavigation";
import PageFooter from "@/components/PageFooter";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

const Education = () => {
  usePageSEO({
    title: "Education | Patient Guides & Dentist Training Programs",
    description: "Specialist-authored educational resources for patients and dental professionals. Treatment guides, clinical implant training, and evidence-based protocols from a Board-Certified Prosthodontist.",
  });

  return (
    <main className="bg-background">
      <SiteNavigation />

      {/* Hero */}
      <section className="pt-48 md:pt-56 pb-20 md:pb-28 px-6 md:px-8">
        <div className="luxury-container text-center">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-body text-[10px] tracking-[0.4em] uppercase text-charcoal-light mb-8"
          >
            Knowledge & Understanding
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-navy leading-[0.95] mb-10"
          >
            Education
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="w-10 h-px bg-navy mx-auto mb-10"
          />

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="font-body text-sm md:text-[15px] text-charcoal-light font-light leading-[1.85] max-w-lg mx-auto"
          >
            Whether you are a patient seeking clarity or a clinician pursuing excellence, informed understanding is the foundation of every great outcome.
          </motion.p>
        </div>
      </section>

      {/* Audience Split */}
      <section className="pb-28 md:pb-36 px-6 md:px-8">
        <div className="luxury-container max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-divider">
            {/* For Patients */}
            <motion.div {...fadeUp} transition={{ duration: 0.8, delay: 0.1 }}>
              <Link
                to="/patient-education"
                className="group block bg-background p-12 md:p-14 lg:p-16 h-full transition-colors duration-500 hover:bg-warm-gray"
              >
                <p className="font-body text-[10px] tracking-[0.4em] uppercase text-charcoal-light mb-8">
                  For Patients
                </p>

                <h2 className="font-display text-2xl md:text-3xl font-light text-navy leading-[1.05] mb-6">
                  Treatment
                  <br />
                  <span className="italic">Guide</span>
                </h2>

                <div className="w-8 h-px bg-navy/30 mb-8" />

                <p className="font-body text-sm text-charcoal-light font-light leading-[1.85] mb-10">
                  Understand treatments. Know what to expect. Make informed decisions.
                </p>

                <span className="inline-flex items-center gap-2 font-body text-[10px] tracking-[0.25em] uppercase text-navy group-hover:gap-3 transition-all duration-300">
                  Explore Guide
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </motion.div>

            {/* For Professionals */}
            <motion.div {...fadeUp} transition={{ duration: 0.8, delay: 0.25 }}>
              <Link
                to="/professional-education"
                className="group block bg-background p-12 md:p-14 lg:p-16 h-full transition-colors duration-500 hover:bg-warm-gray"
              >
                <p className="font-body text-[10px] tracking-[0.4em] uppercase text-charcoal-light mb-8">
                  For Dental Professionals
                </p>

                <h2 className="font-display text-2xl md:text-3xl font-light text-navy leading-[1.05] mb-6">
                  Clinical
                  <br />
                  <span className="italic">Education</span>
                </h2>

                <div className="w-8 h-px bg-navy/30 mb-8" />

                <p className="font-body text-sm text-charcoal-light font-light leading-[1.85] mb-10">
                  Evidence-based clinical education and advanced protocols.
                </p>

                <span className="inline-flex items-center gap-2 font-body text-[10px] tracking-[0.25em] uppercase text-navy group-hover:gap-3 transition-all duration-300">
                  View Programs
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Closing line */}
      <section className="pb-24 md:pb-32 px-6 md:px-8">
        <div className="luxury-container max-w-2xl text-center">
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.8 }}
            className="font-display text-xl md:text-2xl font-light text-navy italic leading-snug"
          >
            "Clarity replaces uncertainty."
          </motion.p>
        </div>
      </section>

      <PageFooter />
    </main>
  );
};

export default Education;
