import { motion } from "framer-motion";
import { useEffect } from "react";
import PageNavigation from "@/components/PageNavigation";
import PageCTA from "@/components/PageCTA";
import PageFooter from "@/components/PageFooter";
import drParmar from "@/assets/dr-parmar-about.png";

const focusAreas = [
  "Dental Implants",
  "Immediate Implants",
  "Full-Arch Implant Rehabilitation",
  "Veneers & Aesthetic Reconstruction",
  "Maxillofacial Prosthodontics",
];

const authority = [
  "Board-Certified Prosthodontist",
  "Implant & Full-Arch Specialist",
  "Founder, STABLE IMPLANT Protocol™",
  "Former Teaching Faculty, NYU Prosthodontics",
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
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

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-6 md:px-8">
        <div className="luxury-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Portrait — blended into background */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex items-center justify-center lg:justify-end"
            >
              <div className="relative">
                <img
                  src={drParmar}
                  alt="Dr. Akshay Parmar, Board-Certified Prosthodontist"
                  className="w-72 md:w-80 lg:w-[22rem] object-cover"
                  style={{
                    filter: "contrast(1.05) brightness(0.93) saturate(0.3) sepia(0.15)",
                    maskImage:
                      "radial-gradient(ellipse 88% 82% at 50% 38%, black 40%, transparent 85%)",
                    WebkitMaskImage:
                      "radial-gradient(ellipse 88% 82% at 50% 38%, black 40%, transparent 85%)",
                  }}
                />
              </div>
            </motion.div>

            {/* Intro */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <p className="font-body text-[10px] tracking-[0.35em] uppercase text-charcoal-light mb-6">
                About the Specialist
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-navy leading-[0.95] mb-8">
                Precision. Biology.
                <br />
                <span className="italic">Longevity.</span>
              </h1>
              <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed mb-4">
                Dr. Akshay Parmar is a board-certified prosthodontist specializing in advanced implant, full-arch, and complex oral rehabilitation.
              </p>
              <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
                His work centers on precision-driven, biologically respectful dentistry, restoring function, aesthetics, and long-term stability through carefully engineered treatment planning.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Focus Areas */}
      <section className="py-14 md:py-20 px-6 md:px-8"
        style={{
          background: "linear-gradient(180deg, hsl(40 10% 95%) 0%, hsl(40 12% 93%) 100%)",
        }}
      >
        <div className="luxury-container max-w-3xl">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="text-center mb-10">
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-charcoal-light mb-4">
              Core Focus
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-light text-navy">
              Areas of <span className="italic">Specialization</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {focusAreas.map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="border-b border-divider pb-4"
              >
                <p className="font-display text-lg md:text-xl font-light text-charcoal tracking-tight">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Authority Positioning */}
      <section className="py-14 md:py-20 px-6 md:px-8">
        <div className="luxury-container max-w-3xl">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="text-center mb-10">
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-charcoal-light mb-4">
              Credentials
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-light text-navy">
              Professional <span className="italic">Authority</span>
            </h2>
          </motion.div>

          <div className="space-y-4 text-center">
            {authority.map((item, i) => (
              <motion.p
                key={i}
                {...fadeUp}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="font-display text-lg md:text-xl font-light text-charcoal tracking-tight"
              >
                {item}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-14 md:py-20 px-6 md:px-8"
        style={{
          background: "linear-gradient(180deg, hsl(40 10% 95%) 0%, hsl(40 12% 93%) 100%)",
        }}
      >
        <div className="luxury-container max-w-3xl">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="text-center">
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-charcoal-light mb-4">
              Philosophy
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-light text-navy mb-8">
              Clinical <span className="italic">Philosophy</span>
            </h2>
            <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed mb-4">
              Modern dentistry is not simply about replacing teeth, it is about rebuilding biology, mechanics, and aesthetics in harmony.
            </p>
            <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
              Every treatment decision is guided by structural integrity, tissue preservation, and long-term predictability.
            </p>
          </motion.div>
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
