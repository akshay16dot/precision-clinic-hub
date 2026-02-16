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

      {/* ═══════ EDITORIAL HERO ═══════ */}
      <section className="relative pt-24 md:pt-0 min-h-[85vh] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[85vh]">
          {/* Left: Dominant portrait */}
          <div className="relative lg:col-span-6 xl:col-span-7 min-h-[50vh] lg:min-h-full">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.4, delay: 0.1 }}
              className="absolute inset-0"
            >
              <img
                src={drParmar}
                alt="Dr. Akshay Parmar, Board-Certified Prosthodontist"
                className="w-full h-full object-cover object-top"
                style={{
                  filter: "contrast(1.06) brightness(0.92) saturate(0.4) sepia(0.08)",
                  maskImage: "linear-gradient(to right, black 0%, black 75%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 8%, black 90%, transparent 100%)",
                  maskComposite: "intersect",
                  WebkitMaskImage: "linear-gradient(to right, black 0%, black 75%, transparent 100%)",
                }}
              />
            </motion.div>
          </div>

          {/* Right: Editorial text */}
          <div className="lg:col-span-6 xl:col-span-5 flex items-center px-8 md:px-12 lg:px-16 xl:px-20 py-16 lg:py-0">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="max-w-lg"
            >
              <p className="font-body text-[10px] tracking-[0.4em] uppercase text-charcoal-light mb-10">
                About the Specialist
              </p>

              <h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-light tracking-tight text-navy leading-[0.93] mb-12">
                Precision. Biology.
                <br />
                <span className="italic font-light">Longevity.</span>
              </h1>

              <div className="w-10 h-px bg-navy mb-12" />

              <p className="font-body text-sm md:text-[15px] text-charcoal-light font-light leading-[1.85] mb-6">
                Dr. Akshay Parmar is a board-certified prosthodontist specializing in advanced implant rehabilitation, full-arch reconstruction, and maxillofacial prosthodontics.
              </p>
              <p className="font-body text-sm md:text-[15px] text-charcoal-light font-light leading-[1.85] mb-6">
                He completed advanced specialty training at UConn and fellowship training at Memorial Sloan Kettering Cancer Center (MSKCC), focusing on complex oral rehabilitation and oncology-related reconstruction.
              </p>
              <p className="font-body text-sm md:text-[15px] text-charcoal-light font-light leading-[1.85]">
                His work centers on precision-driven, biologically respectful dentistry designed for long-term stability, function, and facial support.
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
