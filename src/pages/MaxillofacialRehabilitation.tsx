import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SiteNavigation from "@/components/SiteNavigation";
import PageCTA from "@/components/PageCTA";
import PageFooter from "@/components/PageFooter";
import { usePageSEO } from "@/hooks/usePageSEO";
import drParmarMSK from "@/assets/dr-parmar-msk.png";
import obturatorProsthesis from "@/assets/obturator-prosthesis.png";
import obturatorProsthesis2 from "@/assets/obturator-prosthesis-2.png";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
};

const specialties = [
  {
    title: "Post-Oncologic Rehabilitation",
    description: "Prosthetic restoration following surgical resection for oral, head, and neck cancers. Treatment focuses on re-establishing oral function, speech, swallowing, and facial form through individualized obturator prostheses and implant-supported rehabilitations.",
  },
  {
    title: "Congenital Defect Management",
    description: "Prosthetic solutions for patients born with craniofacial anomalies, including cleft palate and other developmental conditions requiring coordinated, multidisciplinary rehabilitative care.",
  },
  {
    title: "Surgical & Trauma Rehabilitation",
    description: "Prosthetic reconstruction following facial trauma, accident-related injuries, or complex surgical interventions. Restorations are designed to restore both function and natural appearance.",
  },
  {
    title: "Extraoral Prosthetics",
    description: "Fabrication of custom facial prostheses, including orbital, auricular, and nasal prostheses, for patients who have experienced tissue loss due to disease, surgery, or trauma.",
  },
];

const approach = [
  {
    title: "Multidisciplinary Coordination",
    description: "Close collaboration with surgical oncologists, radiation oncologists, speech pathologists, and other specialists to ensure comprehensive, well-timed rehabilitation.",
  },
  {
    title: "Patient-Centered Planning",
    description: "Every rehabilitation plan is developed with deep respect for the patient's emotional journey, personal goals, and quality-of-life priorities.",
  },
  {
    title: "Precision Prosthetic Design",
    description: "Advanced materials and digital workflows ensure prosthetic outcomes that are functionally sound, aesthetically refined, and personally meaningful.",
  },
];

const MaxillofacialRehabilitation = () => {
  usePageSEO({
    title: "Maxillofacial Prosthodontist NJ | Oncology Reconstruction",
    description: "Fellowship-trained maxillofacial prosthodontist in New Jersey. Post-oncologic rehabilitation, obturator prostheses, craniofacial reconstruction, and complex surgical prosthetics. Memorial Sloan Kettering trained.",
  });

  return (
    <main className="bg-background">
      <SiteNavigation />

      {/* ═══════ CINEMATIC HERO ═══════ */}
      <section
        className="relative hero-min-h hero-navy-fallback overflow-hidden"
        style={{
          background: "linear-gradient(160deg, hsl(220 20% 7%) 0%, hsl(220 18% 10%) 40%, hsl(220 15% 12%) 70%, hsl(220 20% 8%) 100%)",
        }}
      >
        {/* Mobile background portrait (visible only on small screens) */}
        <div className="absolute inset-0 lg:hidden">
          <img
            src={drParmarMSK}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-[center_20%]"
            style={{
              filter: "brightness(0.45) contrast(1.05) saturate(0.15)",
            }}
          />
          <div className="absolute inset-0 hero-dark-overlay" />
        </div>

        {/* Split imagery (desktop only) */}
        <div className="absolute inset-0 hidden lg:grid grid-cols-2">
          {/* Left: Portrait */}
          <div className="relative">
            <img
              src={drParmarMSK}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover object-top"
              style={{
                filter: "brightness(0.4) contrast(1.1) saturate(0.15) sepia(0.08)",
                maskImage: "linear-gradient(to right, transparent 0%, black 15%, black 70%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 85%, transparent 100%)",
                maskComposite: "intersect",
                WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 15%, black 70%, transparent 100%)",
              }}
            />
          </div>

          {/* Right: Obturator prosthesis */}
          <div className="relative flex items-center justify-center">
            <img
              src={obturatorProsthesis}
              alt=""
              aria-hidden="true"
              className="w-[75%] max-w-md object-contain"
              style={{
                filter: "brightness(0.85) contrast(1.1) saturate(0.35) sepia(0.05)",
                maskImage: "radial-gradient(ellipse 85% 85% at center, black 40%, transparent 100%)",
                WebkitMaskImage: "radial-gradient(ellipse 85% 85% at center, black 40%, transparent 100%)",
                mixBlendMode: "lighten",
              }}
            />
          </div>
        </div>

        {/* Dark overlay for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, hsl(220 20% 7% / 0.3) 0%, hsl(220 20% 7% / 0.65) 50%, hsl(220 20% 7% / 0.95) 100%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 hero-min-h flex flex-col justify-end px-6 md:px-12 lg:px-24 pb-16 md:pb-24">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-body text-[10px] md:text-xs tracking-[0.35em] uppercase mb-8"
              style={{ color: "hsl(40 15% 90% / 0.35)" }}
            >
              Board-Certified Prosthodontist · Fellow, AAMP
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="font-display text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[0.93] mb-8"
              style={{ color: "hsl(40 15% 92%)" }}
            >
              Maxillofacial &amp; Oncology
              <br />
              <span className="italic font-light">Rehabilitation</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="font-display text-lg md:text-xl font-light leading-relaxed mb-12 max-w-2xl"
              style={{ color: "hsl(40 15% 90% / 0.6)" }}
            >
              Restoring function, comfort, and quality of life following cancer treatment.
            </motion.p>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              href="/contact"
              className="inline-block px-10 py-4 border font-body text-[11px] tracking-[0.25em] uppercase transition-all duration-300 hover:bg-transparent"
              style={{
                borderColor: "hsl(40 15% 90% / 0.25)",
                backgroundColor: "hsl(40 15% 92%)",
                color: "hsl(220 20% 10%)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "hsl(40 15% 92%)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "hsl(40 15% 92%)";
                e.currentTarget.style.color = "hsl(220 20% 10%)";
              }}
            >
              Request a Consultation
            </motion.a>
          </div>
        </div>
      </section>

      {/* ═══════ TREATMENT EXPLANATION ═══════ */}
      <section
        className="py-28 md:py-36 px-6 md:px-8"
        style={{ background: "linear-gradient(180deg, hsl(40 15% 97%) 0%, hsl(40 12% 95%) 100%)" }}
      >
        <div className="max-w-2xl mx-auto">
          <motion.div {...fadeUp} transition={{ duration: 1 }}>
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-charcoal-light mb-8 text-center">
              Understanding Rehabilitation
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-light text-navy text-center mb-14 leading-[0.95]">
              Beyond Teeth Alone
            </h2>
            <div className="w-12 h-px bg-navy mx-auto mb-14" />

            <div className="space-y-6">
              <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
                Cancer treatment often creates complex oral and facial challenges that extend far beyond teeth alone.
              </p>
              <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
                Surgical resection, radiation therapy, and chemotherapy may affect speech, chewing, swallowing, comfort, facial support, and long-term oral stability.
              </p>
              <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
                Rehabilitation requires a highly individualized, medically informed approach designed around biology, function, and structural integrity.
              </p>
              <p className="font-display text-lg md:text-xl font-light text-charcoal leading-relaxed mt-10">
                Care is never standardized. It is engineered.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════ SPECIALIST AUTHORITY ═══════ */}
      <section
        className="py-28 md:py-36 px-6 md:px-8"
        style={{ background: "linear-gradient(180deg, hsl(220 18% 9%) 0%, hsl(220 15% 11%) 100%)" }}
      >
        <div className="max-w-2xl mx-auto">
          <motion.div {...fadeUp} transition={{ duration: 1 }}>
            <p
              className="font-body text-[10px] tracking-[0.35em] uppercase mb-8 text-center"
              style={{ color: "hsl(40 15% 90% / 0.35)" }}
            >
              Fellowship-Trained Expertise
            </p>
            <h2
              className="font-display text-3xl md:text-5xl font-light text-center mb-14 leading-[0.95]"
              style={{ color: "hsl(40 15% 92%)" }}
            >
              Specialist Authority
            </h2>
            <div className="w-12 h-px mx-auto mb-14" style={{ backgroundColor: "hsl(40 15% 90% / 0.2)" }} />

            <div className="space-y-6">
              <p className="font-body text-sm md:text-base font-light leading-relaxed" style={{ color: "hsl(40 15% 90% / 0.55)" }}>
                This care is directed by fellowship-trained expertise in maxillofacial prosthetics and complex oral rehabilitation.
              </p>
              <p className="font-body text-sm md:text-base font-light leading-relaxed" style={{ color: "hsl(40 15% 90% / 0.55)" }}>
                Clinical training includes advanced fellowship experience at Memorial Sloan Kettering Cancer Center, working closely with surgeons, oncologists, and multidisciplinary medical teams.
              </p>
              <p
                className="font-display text-lg md:text-xl font-light leading-relaxed mt-10"
                style={{ color: "hsl(40 15% 90% / 0.75)" }}
              >
                Fellow of the American Academy of Maxillofacial Prosthetics (FAAMP)
              </p>
              <p className="font-body text-sm md:text-base font-light leading-relaxed" style={{ color: "hsl(40 15% 90% / 0.55)" }}>
                Treatment scope includes rehabilitation using precision prosthetic designs, implant-supported restorations, and biologically guided restorative strategies.
              </p>
            </div>

            {/* Clinical prosthesis image — mobile/tablet only */}
            <div className="lg:hidden flex justify-center my-12">
              <img
                src={obturatorProsthesis2}
                alt="Obturator prosthesis examples"
                className="w-[75%] max-w-sm object-contain"
                style={{
                  filter: "brightness(0.85) contrast(1.05) saturate(0.4) sepia(0.05)",
                  mixBlendMode: "lighten",
                }}
              />
            </div>

            <p
              className="font-body text-[10px] tracking-[0.3em] uppercase mt-16 text-center"
              style={{ color: "hsl(40 15% 90% / 0.2)" }}
            >
              Patients referred by hospitals, specialists, and surgeons throughout New Jersey and neighboring states
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════ REASSURANCE NARRATIVE ═══════ */}
      <section
        className="py-28 md:py-36 px-6 md:px-8"
        style={{ background: "linear-gradient(180deg, hsl(40 12% 95%) 0%, hsl(40 15% 97%) 100%)" }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <motion.div {...fadeUp} transition={{ duration: 1 }}>
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-charcoal-light mb-8">
              Your Journey
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-light text-navy mb-14 leading-[0.95]">
              Every Journey Is Different
            </h2>
            <div className="w-12 h-px bg-navy mx-auto mb-14" />

            <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed mb-6">
              Treatment decisions are guided by diagnosis, biology, structural needs, and long-term functional goals, never speed or templates.
            </p>

            <p className="font-display text-lg md:text-xl font-light text-charcoal leading-relaxed mt-10 mb-10">
              Precision rehabilitation. Individualized design. Long-term stability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════ COLLABORATIVE CARE ═══════ */}
      <section
        className="py-28 md:py-36 px-6 md:px-8"
        style={{ background: "linear-gradient(180deg, hsl(220 18% 9%) 0%, hsl(220 15% 12%) 100%)" }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <motion.div {...fadeUp} transition={{ duration: 1 }}>
            <p
              className="font-body text-[10px] tracking-[0.35em] uppercase mb-8"
              style={{ color: "hsl(40 15% 90% / 0.35)" }}
            >
              Coordinated Rehabilitation
            </p>
            <h2
              className="font-display text-3xl md:text-5xl font-light mb-14 leading-[0.95]"
              style={{ color: "hsl(40 15% 92%)" }}
            >
              Your Clinical Partner
            </h2>
            <div className="w-12 h-px mx-auto mb-14" style={{ backgroundColor: "hsl(40 15% 90% / 0.2)" }} />

            <p className="font-body text-sm md:text-base font-light leading-relaxed mb-6" style={{ color: "hsl(40 15% 90% / 0.55)" }}>
              We work closely with your restorative dentist and medical team to ensure continuity of care and long-term stability.
            </p>
            <p className="font-body text-sm md:text-base font-light leading-relaxed mb-6" style={{ color: "hsl(40 15% 90% / 0.55)" }}>
              This role functions as both specialist and clinical partner, guiding design, function, maintenance, and outcomes.
            </p>
            <p
              className="font-display text-lg md:text-xl font-light leading-relaxed mt-10"
              style={{ color: "hsl(40 15% 90% / 0.7)" }}
            >
              Think of this as expert-directed rehabilitation, supported by a coordinated care team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════ AREAS OF EXPERTISE ═══════ */}
      <section className="section-padding" style={{ background: "linear-gradient(180deg, hsl(40 15% 97%) 0%, hsl(40 12% 95%) 100%)" }}>
        <div className="luxury-container">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="text-center mb-20">
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-charcoal-light mb-6">
              Specialized Care
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-light text-navy">
              Areas of Expertise
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px max-w-4xl mx-auto" style={{ backgroundColor: "hsl(220 15% 90%)" }}>
            {specialties.map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-10 md:p-12"
                style={{ backgroundColor: "hsl(40 15% 97%)" }}
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

      {/* ═══════ PHILOSOPHY ═══════ */}
      <section className="section-padding bg-warm-gray">
        <div className="luxury-container">
          <motion.div {...fadeUp} transition={{ duration: 1 }} className="max-w-3xl mx-auto text-center">
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-charcoal-light mb-6">
              Rehabilitation Philosophy
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-light text-navy mb-12 leading-[0.95]">
              Restoring More Than Function
            </h2>
            <div className="w-12 h-px bg-navy mx-auto mb-12" />
            <p className="font-display text-xl md:text-2xl font-light text-charcoal leading-relaxed mb-8">
              Maxillofacial rehabilitation is not simply about replacing what was lost. It is about restoring confidence, comfort, and connection to the world.
            </p>
            <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed max-w-2xl mx-auto">
              Treatment is guided by a deep understanding of the physical and emotional dimensions of recovery, ensuring that every prosthetic solution serves the whole patient.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════ APPROACH ═══════ */}
      <section className="section-padding" style={{ background: "linear-gradient(180deg, hsl(40 12% 95%) 0%, hsl(40 15% 97%) 100%)" }}>
        <div className="luxury-container">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="text-center mb-20">
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-charcoal-light mb-6">
              Clinical Standards
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-light text-navy">
              Our Approach
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-0">
            {approach.map((item, i) => (
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

      {/* Patient Guide Link */}
      <section className="py-12 md:py-16 px-6 md:px-8 bg-background">
        <div className="luxury-container text-center">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }}>
            <Link
              to="/guide/maxillofacial-rehabilitation"
              className="inline-block font-body text-[10px] tracking-[0.25em] uppercase text-navy border-b border-navy/30 pb-0.5 hover:border-navy transition-colors"
            >
              Learn About the Process
            </Link>
          </motion.div>
        </div>
      </section>

      <PageCTA
        title="Begin the Conversation"
        description="If you or a loved one requires maxillofacial or oncologic rehabilitation, we welcome the opportunity to discuss how we can help. Every recommendation is diagnosis-driven."
        buttonText="Request a Consultation"
      />
      <PageFooter />
    </main>
  );
};

export default MaxillofacialRehabilitation;
