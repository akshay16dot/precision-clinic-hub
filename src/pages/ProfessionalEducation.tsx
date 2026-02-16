import { motion } from "framer-motion";
import { useEffect } from "react";
import PageNavigation from "@/components/PageNavigation";
import PageCTA from "@/components/PageCTA";
import PageFooter from "@/components/PageFooter";

const trainingPrograms = [
  {
    title: "Immediate Implant Protocols",
    description:
      "Stability-driven surgical and prosthetic workflows for same-day implant placement and provisionalization. Emphasis on site evaluation, primary stability assessment, and immediate loading criteria.",
  },
  {
    title: "Full-Arch Treatment Planning",
    description:
      "Comprehensive planning for complete-arch rehabilitation including implant positioning strategy, prosthetic design sequencing, and biomechanical load distribution for long-term predictability.",
  },
  {
    title: "Soft Tissue & Emergence Profile Design",
    description:
      "Clinical techniques for optimizing peri-implant soft tissue architecture, emergence profile development, and tissue-level prosthetic transitions for natural aesthetics.",
  },
  {
    title: "Complications & Failure Prevention",
    description:
      "Systematic approaches to identifying, managing, and preventing implant complications. Case-based learning focused on biological, mechanical, and prosthetic failure patterns.",
  },
  {
    title: "Occlusion & Biomechanics",
    description:
      "Functional analysis and occlusal design principles for implant-supported restorations. Integration of bite dynamics, load management, and long-term mechanical stability.",
  },
  {
    title: "Digital Workflows & Integration",
    description:
      "Practical integration of intraoral scanning, CBCT-guided planning, and CAD/CAM fabrication into clinical practice. Emphasis on efficiency, accuracy, and predictable outcomes.",
  },
];

const credentials = [
  { label: "FACP", detail: "Fellow, American College of Prosthodontists" },
  { label: "FAAMP", detail: "Fellow, American Academy of Maxillofacial Prosthetics" },
  { label: "Clinical Instructor", detail: "Advanced implant and prosthetic training programs" },
  { label: "Fellowship Training", detail: "Memorial Sloan Kettering Cancer Center" },
  { label: "Published Research", detail: "Peer-reviewed contributions in prosthodontics and implant science" },
  { label: "Industry Collaborations", detail: "Key opinion leader in implant systems and digital dentistry" },
];

const platforms = [
  {
    name: "The Dental Project",
    description: "Clinical Education & Surgical Training",
    detail:
      "A structured educational platform offering hands-on surgical and prosthetic training for dental professionals seeking to advance their implant dentistry skills.",
    links: [
      { label: "View Platform", url: "https://www.instagram.com/thedental_project/" },
      { label: "View Courses", url: "https://the-dental-project.vercel.app/" },
    ],
  },
  {
    name: "Dr. Akshay Parmar",
    description: "Clinical Work & Insights",
    detail:
      "Professional documentation of clinical cases, treatment philosophies, and insights from advanced implant and prosthodontic rehabilitation.",
    links: [
      { label: "View Platform", url: "https://www.instagram.com/dr.akshayparmar/" },
    ],
  },
  {
    name: "Decoded Weekly",
    description: "Professional Newsletter",
    detail:
      "A curated weekly newsletter delivering clinical insights, emerging research, and practical knowledge for dental professionals committed to continuous learning.",
    links: [
      { label: "View Platform", url: "https://substack.com/@decodedweekly" },
    ],
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
};

const ProfessionalEducation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Education & Courses | Dr. Akshay Parmar";
    return () => {
      document.title =
        "Dr. Akshay Parmar | Board-Certified Prosthodontist in New Jersey";
    };
  }, []);

  return (
    <main className="bg-background">
      <PageNavigation />

      {/* ═══════ HERO ═══════ */}
      <section className="pt-36 pb-14 md:pt-44 md:pb-18 px-6 md:px-8">
        <div className="luxury-container max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-charcoal-light mb-6">
              For Dental Professionals
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-navy leading-[0.95] mb-8">
              Implant Education{" "}
              <span className="italic">Without Shortcuts</span>
            </h1>
            <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed max-w-xl mx-auto">
              Evidence-based surgical and prosthetic training for modern implant dentistry.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="luxury-container px-6 md:px-8">
        <div className="w-12 h-px bg-navy mx-auto" />
      </div>

      {/* ═══════ SECTION 1: EDUCATIONAL PHILOSOPHY ═══════ */}
      <section className="section-padding bg-background">
        <div className="luxury-container">
          <motion.div
            {...fadeUp}
            transition={{ duration: 1 }}
            className="max-w-2xl mx-auto text-center"
          >
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-charcoal-light mb-6">
              Teaching Philosophy
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-light text-navy leading-tight mb-10">
              Education Without <span className="italic">Shortcuts</span>
            </h2>
            <div className="space-y-6 mb-12">
              <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
                Clinical education should build decision-making, not just demonstrate isolated techniques.
              </p>
              <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
                Training is precision-driven, biology-respecting, and prosthetically grounded. Every program emphasizes systems-based thinking over formulaic protocols.
              </p>
              <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
                The focus is treatment planning, complications prevention, and long-term predictability, because patient outcomes depend on clinical judgment, not just surgical execution.
              </p>
            </div>
            <div className="w-12 h-px bg-navy/20 mx-auto mb-8" />
            <p className="font-body text-xs tracking-[0.3em] uppercase text-charcoal-light/60">
              Structure precedes skill. Judgment precedes technique.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════ SECTION 2: TRAINING PROGRAMS ═══════ */}
      <section className="section-padding bg-warm-gray">
        <div className="luxury-container">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-charcoal-light mb-6">
              Clinical Training
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-navy">
              Training Programs
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-divider max-w-4xl mx-auto">
            {trainingPrograms.map((program, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="bg-warm-gray p-10 md:p-12"
              >
                <h3 className="font-display text-xl md:text-2xl font-medium text-charcoal mb-4">
                  {program.title}
                </h3>
                <p className="font-body text-sm text-charcoal-light font-light leading-relaxed">
                  {program.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 3: PROFESSIONAL CREDENTIALS ═══════ */}
      <section className="section-padding bg-background">
        <div className="luxury-container">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-charcoal-light mb-6">
              Professional Authority
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-navy">
              Credentials & Experience
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-0">
            {credentials.map((cred, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="border-b border-divider py-8 md:py-10 flex flex-col md:flex-row md:items-baseline md:gap-8"
              >
                <h3 className="font-display text-xl md:text-2xl font-medium text-navy mb-2 md:mb-0 md:min-w-[220px] md:shrink-0">
                  {cred.label}
                </h3>
                <p className="font-body text-sm text-charcoal-light font-light leading-relaxed">
                  {cred.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 4: EXPLORE & CONNECT ═══════ */}
      <section className="section-padding bg-warm-gray">
        <div className="luxury-container">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-charcoal-light mb-6">
              Professional & Educational Platforms
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-navy">
              Explore & Connect
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-divider max-w-4xl mx-auto">
            {platforms.map((platform, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="bg-warm-gray p-10 flex flex-col items-center text-center"
              >
                <p className="font-body text-[10px] tracking-[0.3em] uppercase text-charcoal-light mb-4">
                  {platform.description}
                </p>
                <h3 className="font-display text-xl font-medium text-charcoal mb-4">
                  {platform.name}
                </h3>
                <p className="font-body text-xs text-charcoal-light font-light leading-relaxed mb-8 flex-1">
                  {platform.detail}
                </p>
                <div className="flex flex-col gap-3">
                  {platform.links.map((link, j) => (
                    <a
                      key={j}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block font-body text-[10px] tracking-[0.2em] uppercase text-navy border-b border-navy/30 pb-0.5 hover:border-navy transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA
        title="Inquire About Training"
        description="For course scheduling, group training inquiries, or collaborative education opportunities, please reach out directly."
        buttonText="Get in Touch"
      />
      <PageFooter />
    </main>
  );
};

export default ProfessionalEducation;
