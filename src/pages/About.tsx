import { motion } from "framer-motion";
import { useEffect } from "react";
import PageNavigation from "@/components/PageNavigation";
import PageCTA from "@/components/PageCTA";
import PageFooter from "@/components/PageFooter";
import drParmar from "@/assets/dr-parmar-color-headshot.jpg";

const focusAreas = [
  "Dental Implants",
  "Immediate Implants",
  "Full-Arch Implant Rehabilitation",
  "Veneers & Aesthetic Reconstruction",
  "Maxillofacial Prosthodontics",
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

      {/* ═══════ EDITORIAL HERO ═══════ */}
      <section className="relative pt-24 md:pt-0 min-h-[90vh] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[90vh]">
          {/* Left: Dominant color portrait */}
          <div className="relative lg:col-span-5 xl:col-span-5 min-h-[55vh] lg:min-h-full">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.4, delay: 0.1 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <img
                src={drParmar}
                alt="Dr. Akshay Parmar, Board-Certified Prosthodontist"
                className="w-full h-full object-contain"
                style={{
                  objectPosition: "center 22%",
                  transform: "scale(0.82)",
                  filter: "contrast(1.03) brightness(0.99) saturate(0.9)",
                  maskImage: "linear-gradient(to right, black 0%, black 93%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to right, black 0%, black 93%, transparent 100%)",
                }}
              />
            </motion.div>
          </div>

          {/* Right: Editorial text */}
          <div className="lg:col-span-7 xl:col-span-7 flex items-center px-8 md:px-12 lg:px-24 xl:px-32 py-16 lg:py-0">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="max-w-lg"
            >
              <p className="font-body text-[10px] tracking-[0.4em] uppercase text-charcoal-light mb-8">
                About the Specialist
              </p>

              <h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-light tracking-tight text-navy leading-[0.93] mb-10">
                Precision. Biology.
                <br />
                <span className="italic font-light">Longevity.</span>
              </h1>

              <div className="w-10 h-px bg-navy mb-10" />

              <p className="font-body text-sm md:text-[15px] text-charcoal-light font-light leading-[1.85] mb-5">
                Dr. Akshay Parmar is a board-certified prosthodontist specializing in advanced implant dentistry, full-arch rehabilitation, aesthetic reconstruction, and maxillofacial prosthodontics.
              </p>
              <p className="font-body text-sm md:text-[15px] text-charcoal-light font-light leading-[1.85] mb-11">
                His work centers on precision-driven, biologically respectful dentistry, restoring function, aesthetics, and long-term stability through carefully engineered treatment planning.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="inline-block px-9 py-4 bg-navy font-body text-[11px] tracking-[0.25em] uppercase transition-all duration-300 hover:opacity-90"
                  style={{ color: "hsl(40 20% 98%)" }}
                >
                  Schedule a Consultation
                </a>
                <a
                  href="/#services"
                  className="inline-block px-9 py-4 border border-divider text-navy font-body text-[11px] tracking-[0.25em] uppercase transition-all duration-300 hover:border-navy"
                >
                  Explore Treatments
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════ PROFESSIONAL AUTHORITY ═══════ */}
      <section
        className="py-24 md:py-32 px-6 md:px-8"
        style={{ background: "linear-gradient(180deg, hsl(40 10% 95%) 0%, hsl(40 12% 93%) 100%)" }}
      >
        <div className="luxury-container max-w-3xl">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="text-center mb-16">
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-charcoal-light mb-6">
              Credentials
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-navy leading-[0.95]">
              Professional Authority &amp;
              <br />
              <span className="italic">Advanced Credentials</span>
            </h2>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            {/* Board Certification */}
            <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-14">
              <p className="font-display text-xl md:text-2xl font-light text-charcoal tracking-tight mb-6">
                Board-Certified Prosthodontist
              </p>
              <div className="space-y-2">
                <p className="font-body text-sm text-charcoal-light font-light leading-relaxed">
                  Fellow of the American College of Prosthodontists (FACP)
                </p>
                <p className="font-body text-sm text-charcoal-light font-light leading-relaxed">
                  Fellow of the American Academy of Maxillofacial Prosthetics (FAAMP)
                </p>
              </div>
            </motion.div>

            <div className="w-10 h-px bg-navy/20 mx-auto mb-14" />

            {/* Specialization */}
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="text-center mb-14">
              <p className="font-display text-xl md:text-2xl font-light text-charcoal tracking-tight mb-3">
                Implant &amp; Full-Arch Rehabilitation Specialist
              </p>
              <p className="font-body text-sm text-charcoal-light font-light">
                Founder, STABLE IMPLANT Protocol™
              </p>
            </motion.div>

            <div className="w-10 h-px bg-navy/20 mx-auto mb-14" />

            {/* Fellowship */}
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }} className="text-center mb-14">
              <p className="font-display text-xl md:text-2xl font-light text-charcoal tracking-tight">
                Advanced Fellowship Training
              </p>
              <p className="font-body text-sm text-charcoal-light font-light mt-3">
                Memorial Sloan Kettering Cancer Center
              </p>
            </motion.div>

            <div className="w-10 h-px bg-navy/20 mx-auto mb-14" />

            {/* KOL */}
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.3 }} className="text-center mb-14">
              <p className="font-display text-xl md:text-2xl font-light text-charcoal tracking-tight mb-4">
                Key Opinion Leader &amp; Clinical Educator
              </p>
              <p className="font-body text-sm text-charcoal-light font-light leading-relaxed max-w-xl mx-auto">
                Actively involved in teaching and mentoring dentists through the STABLE IMPLANT Protocol™, both in the United States and internationally.
              </p>
            </motion.div>

            <div className="w-10 h-px bg-navy/20 mx-auto mb-14" />

            {/* Industry */}
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.4 }} className="text-center">
              <p className="font-body text-xs tracking-[0.25em] uppercase text-charcoal-light font-light">
                Recognized Industry Collaborations with Leading Implant Systems &amp; Dental Laboratories
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Focus Areas */}
      <section className="py-20 md:py-28 px-6 md:px-8">
        <div className="luxury-container max-w-3xl">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="text-center mb-14">
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

      {/* Philosophy */}
      <section
        className="py-20 md:py-28 px-6 md:px-8"
        style={{ background: "linear-gradient(180deg, hsl(40 10% 95%) 0%, hsl(40 12% 93%) 100%)" }}
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
