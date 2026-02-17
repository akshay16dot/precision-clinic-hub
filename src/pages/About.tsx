import { motion } from "framer-motion";
import { useEffect } from "react";
import SiteNavigation from "@/components/SiteNavigation";
import PageCTA from "@/components/PageCTA";
import PageFooter from "@/components/PageFooter";
import PracticeAffiliations from "@/components/PracticeAffiliations";
import TestimonialsSection from "@/components/TestimonialsSection";
import drParmar from "@/assets/dr-parmar-color-headshot.jpg";

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
      <SiteNavigation />

      {/* ═══════ EDITORIAL HERO ═══════ */}
      <section className="relative pt-24 md:pt-0 min-h-[85vh] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[85vh]">
          {/* Left: Portrait */}
          <div className="relative lg:col-span-5 min-h-[50vh] lg:min-h-full">
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

          {/* Right: Text */}
          <div className="lg:col-span-7 flex items-center px-8 md:px-12 lg:px-20 xl:px-28 py-14 lg:py-0">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="max-w-lg"
            >
              <p className="font-body text-[10px] tracking-[0.4em] uppercase text-charcoal-light mb-3">
                Board-Certified Prosthodontist
              </p>
              <p className="font-body text-[11px] md:text-xs tracking-[0.12em] text-charcoal-light/55 font-light mb-8">
                Including Maxillofacial &amp; Oncology Reconstruction
              </p>

              <h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-light tracking-tight text-navy leading-[0.93] mb-8">
                Precision. Biology.
                <br />
                <span className="italic font-light">Longevity.</span>
              </h1>

              <div className="w-10 h-px bg-navy mb-8" />

              <p className="font-body text-sm md:text-[15px] text-charcoal-light font-light leading-[1.85] mb-4">
                Dr. Akshay Parmar is a board-certified prosthodontist whose practice is defined by the intersection of advanced implant dentistry, full-arch rehabilitation, aesthetic reconstruction, and maxillofacial prosthodontics.
              </p>
              <p className="font-body text-sm md:text-[15px] text-charcoal-light font-light leading-[1.85] mb-10">
                His clinical work reflects a philosophy grounded in biological respect, structural precision, and long-term predictability. Every treatment is approached as an engineering challenge, restoring function, aesthetics, and stability through carefully sequenced, individualized planning.
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

      {/* ═══════ SPECIALIST BIO ═══════ */}
      <section className="section-padding px-6 md:px-8">
        <div className="luxury-container max-w-3xl">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="text-center mb-16">
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-charcoal-light mb-6">
              Specialist Profile
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-navy leading-[0.95]">
              Clinical Identity &amp;{" "}
              <span className="italic">Philosophy</span>
            </h2>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="max-w-2xl mx-auto space-y-5">
            <p className="font-body text-sm md:text-[15px] text-charcoal-light font-light leading-[1.85]">
              Dr. Parmar's expertise spans the full scope of prosthodontic care, from single-tooth implant restorations and veneer-based smile reconstruction to complex full-arch rehabilitation and maxillofacial prosthetics for oncology patients. His training across multiple institutions, including UCSF, the University of Connecticut, and Memorial Sloan Kettering Cancer Center, has shaped an approach that prioritizes biological outcomes over cosmetic shortcuts.
            </p>
            <p className="font-body text-sm md:text-[15px] text-charcoal-light font-light leading-[1.85]">
              He founded the STABLE IMPLANT Protocol to bring structure and predictability to implant treatment planning, emphasizing tissue preservation, prosthetic-driven positioning, and occlusal stability. His work with the Floxient digital dentistry platform reflects a commitment to advancing collaborative, 3D-guided workflows that improve clinical precision and patient outcomes.
            </p>
            <p className="font-body text-sm md:text-[15px] text-charcoal-light font-light leading-[1.85]">
              As a Fellow of both the American College of Prosthodontists and the American Academy of Maxillofacial Prosthetics, Dr. Parmar holds board-level distinctions that reflect depth across restorative, implant, and oncological disciplines. His clinical philosophy is direct: understand the biology, respect the structure, and plan for longevity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════ PROFESSIONAL AUTHORITY ═══════ */}
      <section
        className="section-padding px-6 md:px-8"
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

          <div className="max-w-2xl mx-auto space-y-12">
            <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center">
              <p className="font-display text-xl md:text-2xl font-light text-charcoal tracking-tight mb-5">
                Board-Certified Prosthodontist
              </p>
              <p className="font-body text-sm text-charcoal-light font-light leading-relaxed mb-1.5">
                Fellow of the American College of Prosthodontists (FACP)
              </p>
              <p className="font-body text-sm text-charcoal-light font-light leading-relaxed mb-1.5">
                Fellow of the American Academy of Maxillofacial Prosthetics (FAAMP)
              </p>
            </motion.div>

            <div className="w-10 h-px bg-navy/20 mx-auto" />

            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="text-center">
              <p className="font-display text-xl md:text-2xl font-light text-charcoal tracking-tight mb-2">
                Implant &amp; Full-Arch Rehabilitation Specialist
              </p>
              <p className="font-body text-sm text-charcoal-light font-light">
                Founder, STABLE IMPLANT Protocol™
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════ ACADEMIC & INSTITUTIONAL FOUNDATION ═══════ */}
      <section className="section-padding px-6 md:px-8">
        <div className="luxury-container max-w-3xl">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="text-center mb-16">
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-charcoal-light mb-6">
              Education &amp; Training
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-navy leading-[0.95]">
              Academic &amp; Institutional
              <br />
              <span className="italic">Foundation</span>
            </h2>
          </motion.div>

          <div className="max-w-2xl mx-auto space-y-10">
            {[
              { title: "Gold Medalist", detail: "BDS, India" },
              { title: "Dental Training", detail: "UCSF, USA" },
              { title: "Advanced Prosthodontic Training", detail: "University of Connecticut (UConn), USA" },
              { title: "Fellowship Training", detail: "Maxillofacial Prosthetics & Oncology Rehabilitation, MSKCC, USA" },
            ].map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="text-center"
              >
                <p className="font-display text-lg md:text-xl font-light text-charcoal tracking-tight">
                  {item.title}
                </p>
                <p className="font-body text-sm text-charcoal-light font-light mt-1.5">
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ LEADERSHIP & PROFESSIONAL SERVICE ═══════ */}
      <section
        className="section-padding px-6 md:px-8"
        style={{ background: "linear-gradient(180deg, hsl(40 10% 95%) 0%, hsl(40 12% 93%) 100%)" }}
      >
        <div className="luxury-container max-w-3xl">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="text-center mb-16">
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-charcoal-light mb-6">
              Professional Leadership
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-navy leading-[0.95]">
              Leadership &amp;
              <br />
              <span className="italic">Professional Service</span>
            </h2>
          </motion.div>

          <div className="max-w-2xl mx-auto space-y-10">
            {[
              { title: "Board Member", detail: "American College of Prosthodontists Education Foundation (ACPEF)" },
              { title: "Meeting Organizer", detail: "American Academy of Maxillofacial Prosthetics (AAMP)" },
              { title: "International Educator & Lecturer", detail: "USA & India" },
              { title: "Key Opinion Leader (KOL)", detail: "Implant & Dental Lab and Technology Industry" },
            ].map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="text-center"
              >
                <p className="font-display text-lg md:text-xl font-light text-charcoal tracking-tight">
                  {item.title}
                </p>
                <p className="font-body text-sm text-charcoal-light font-light mt-1.5">
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ RESEARCH & SCHOLARLY CONTRIBUTION ═══════ */}
      <section className="section-padding px-6 md:px-8">
        <div className="luxury-container max-w-3xl">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="text-center">
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-charcoal-light mb-6">
              Research &amp; Publications
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-light text-navy mb-10">
              Scholarly <span className="italic">Contribution</span>
            </h2>
            <p className="font-body text-sm md:text-[15px] text-charcoal-light font-light leading-[1.85] max-w-xl mx-auto">
              Dr. Parmar has contributed to multiple research initiatives and scholarly work in implant dentistry, prosthodontics, and complex oral rehabilitation, with a continued focus on biologic stability and long-term treatment predictability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════ INNOVATION & TECHNOLOGY ═══════ */}
      <section
        className="section-padding px-6 md:px-8"
        style={{ background: "linear-gradient(180deg, hsl(40 10% 95%) 0%, hsl(40 12% 93%) 100%)" }}
      >
        <div className="luxury-container max-w-3xl">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="text-center">
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-charcoal-light mb-6">
              Innovation &amp; Technology
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-navy leading-[0.95] mb-10">
              Advancing the Future of
              <br />
              <span className="italic">Digital Dentistry</span>
            </h2>
            <p className="font-body text-sm md:text-[15px] text-charcoal-light font-light leading-[1.85] max-w-xl mx-auto mb-6">
              Dr. Parmar is the founder of Floxient™, a next-generation digital dentistry platform focused on advancing collaborative treatment planning, 3D workflows, and biologically guided implant rehabilitation.
            </p>
            <p className="font-body text-xs tracking-[0.2em] uppercase text-navy/50 font-light">
              Precision-engineered for the future of patient care
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════ PRACTICE & AFFILIATIONS ═══════ */}
      <PracticeAffiliations />

      {/* ═══════ CLINICAL PHILOSOPHY ═══════ */}
      <section className="section-padding px-6 md:px-8">
        <div className="luxury-container max-w-3xl">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="text-center">
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-charcoal-light mb-6">
              Philosophy
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-light text-navy mb-10">
              Clinical <span className="italic">Philosophy</span>
            </h2>
            <p className="font-body text-sm md:text-[15px] text-charcoal-light font-light leading-[1.85] mb-4">
              Modern dentistry is not simply about replacing teeth. It is about rebuilding biology, mechanics, and aesthetics in harmony.
            </p>
            <p className="font-body text-sm md:text-[15px] text-charcoal-light font-light leading-[1.85]">
              Every treatment decision is guided by structural integrity, tissue preservation, and long-term predictability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════ TESTIMONIALS ═══════ */}
      <TestimonialsSection />

      <PageCTA
        title="Schedule a Consultation"
        description="Experience the difference that specialist-level care and meticulous planning can make for your dental health."
      />
      <PageFooter />
    </main>
  );
};

export default About;
