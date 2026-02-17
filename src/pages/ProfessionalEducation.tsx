import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import SiteNavigation from "@/components/SiteNavigation";
import PageFooter from "@/components/PageFooter";

import eduLecture1 from "@/assets/edu-lecture-1.jpg";
import eduLecture2 from "@/assets/edu-lecture-2.jpg";
import eduLecture3 from "@/assets/edu-lecture-3.jpg";
import eduDigitalWorkflow from "@/assets/edu-digital-workflow.jpg";
import eduHandsOn from "@/assets/edu-hands-on.jpg";
import eduMentorship1 from "@/assets/edu-mentorship-1.jpg";
import eduMentorship2 from "@/assets/edu-mentorship-2.jpg";
import eduLiveSurgery from "@/assets/edu-live-surgery.jpg";
import eduSurgeryTeam from "@/assets/edu-surgery-team.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

const GOOGLE_REVIEWS_READ = "GOOGLE_REVIEWS_READ_LINK_PLACEHOLDER";
const GOOGLE_REVIEWS_WRITE = "GOOGLE_REVIEW_LINK_PLACEHOLDER";

const educationalScope = [
  {
    title: "Single Tooth & Conventional Implants",
    description: "Diagnosis, planning, surgical execution, prosthetic integration",
  },
  {
    title: "Immediate Implant Therapy",
    description: "Extraction protocols, grafting, temporization, tissue preservation",
  },
  {
    title: "Full-Arch Rehabilitation",
    description: "Prosthetic space, occlusion, biomechanics, long-term stability",
  },
  {
    title: "Soft Tissue & Biologic Management",
    description: "Grafting strategies, emergence profile control, stability protocols",
  },
  {
    title: "Digital Workflows",
    description: "Intraoral scanning, photogrammetry, prosthetic accuracy systems",
  },
];

const galleryItems = [
  { src: eduLecture1, caption: "Mumbai" },
  { src: eduLecture2, caption: "Hands-On Training" },
  { src: eduDigitalWorkflow, caption: "New Jersey" },
  { src: eduHandsOn, caption: "Live Surgery" },
  { src: eduLecture3, caption: "Mentorship" },
  { src: eduMentorship1, caption: "Mumbai" },
  { src: eduLiveSurgery, caption: "Live Surgery" },
  { src: eduMentorship2, caption: "Hands-On Training" },
  { src: eduSurgeryTeam, caption: "New Jersey" },
];

const peerTestimonials = [
  {
    quote: "Exceptionally structured program. The integration of biology, prosthetics, and surgical decision-making was unlike conventional implant courses.",
    name: "Dr. R. Mehta",
    credential: "Prosthodontist",
  },
  {
    quote: "The live surgical training was unlike any other program I have attended. The emphasis on tissue management and prosthetic-driven implant placement gave me a framework I apply daily.",
    name: "Dr. K. Santos",
    credential: "General Dentist, New Jersey",
  },
  {
    quote: "What sets this program apart is the philosophy. It is not about memorizing protocols. It is about understanding why each decision is made. That depth of reasoning has made me a more confident clinician.",
    name: "Dr. A. Chen",
    credential: "Periodontist, Connecticut",
  },
  {
    quote: "Dr. Parmar's approach to implant education is rooted in biology and systematic thinking. His courses reshaped how I plan full-arch cases, from diagnostics through prosthetic delivery.",
    name: "Dr. N. Patel",
    credential: "General Dentist, Pennsylvania",
  },
];

const ProfessionalEducation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Education for Dentists | Dr. Akshay Parmar";
    return () => {
      document.title = "Dr. Akshay Parmar | Board-Certified Prosthodontist in New Jersey";
    };
  }, []);

  return (
    <main className="bg-background">
      <SiteNavigation />

      {/* ═══════ SECTION 1: HERO ═══════ */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={eduLiveSurgery}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              filter: "brightness(0.2) contrast(1.1) saturate(0.1)",
              transform: "scale(1.05)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, hsl(220 30% 10% / 0.7) 0%, hsl(220 30% 10% / 0.85) 50%, hsl(220 30% 10% / 0.95) 100%)",
            }}
          />
        </div>

        <div className="relative z-10 text-center px-6 md:px-8 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-primary-foreground leading-[0.95] mb-6">
              Education for <span className="italic">Dentists</span>
            </h1>
            <p className="font-body text-xs md:text-sm text-primary-foreground/55 font-light leading-relaxed max-w-2xl mx-auto mb-4">
              Advanced Implant, Prosthetic, and Biologic Rehabilitation Training
            </p>
            <p className="font-body text-[10px] tracking-[0.25em] uppercase text-primary-foreground/45 mb-14">
              Global Programs &nbsp;·&nbsp; Surgical Precision &nbsp;·&nbsp; Prosthetic Intelligence
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <a
                href="#programs"
                className="inline-block px-14 py-[18px] bg-primary-foreground text-navy font-body text-[11px] tracking-[0.25em] uppercase transition-all duration-300 hover:bg-transparent hover:text-primary-foreground border border-primary-foreground/25"
              >
                View Programs
              </a>
              <Link
                to="/professional-testimonials"
                className="inline-block px-14 py-[18px] border border-primary-foreground/25 text-primary-foreground/70 font-body text-[11px] tracking-[0.25em] uppercase transition-all duration-300 hover:border-primary-foreground/50 hover:text-primary-foreground"
              >
                Peer Feedback
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════ SECTION 2: STABLE IMPLANT PROTOCOL ═══════ */}
      <section id="stable" className="section-padding px-6 md:px-8">
        <div className="luxury-container max-w-3xl">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="text-center mb-14">
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-charcoal-light mb-6">
              Signature Framework
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-light text-navy mb-3">
              STABLE IMPLANT <span className="italic">Protocol™</span>
            </h2>
            <p className="font-body text-xs tracking-[0.15em] uppercase text-charcoal-light/50 mb-0">
              Soft Tissue And Bone Level Esthetics
            </p>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.7 }} className="max-w-2xl mx-auto">
            <p className="font-body text-sm md:text-[15px] text-charcoal font-light leading-[2] mb-6">
              The STABLE IMPLANT Protocol™ is a biologically driven treatment philosophy centered on long-term tissue stability, structural preservation, and prosthetic predictability.
            </p>
            <p className="font-body text-sm md:text-[15px] text-charcoal font-light leading-[2] mb-6">
              This protocol is not limited to implants.
            </p>
            <p className="font-body text-sm md:text-[15px] text-charcoal font-light leading-[2] mb-3">
              It is a comprehensive framework applicable across:
            </p>
            <ul className="font-body text-sm md:text-[15px] text-charcoal-light font-light leading-[2] mb-8 pl-5 space-y-1">
              <li>Natural teeth rehabilitation</li>
              <li>Conventional implant therapy</li>
              <li>Immediate implant placement</li>
              <li>Full-arch reconstruction</li>
            </ul>

            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-charcoal-light mb-5">
              Core Principles
            </p>
            <ul className="font-body text-sm md:text-[15px] text-charcoal-light font-light leading-[2] mb-8 pl-5 space-y-1">
              <li>Soft tissue architecture first</li>
              <li>Bone preservation and stability</li>
              <li>Prosthetically driven planning</li>
              <li>Biologic-mechanical harmony</li>
              <li>Long-term risk mitigation</li>
            </ul>

            <p className="font-body text-sm md:text-[15px] text-charcoal font-light leading-[2] mb-10">
              The protocol integrates surgical execution, prosthetic design, digital workflows, and tissue management into a unified clinical system.
            </p>

            <div className="text-center">
              <div className="w-10 h-px bg-navy/15 mx-auto mb-5" />
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-charcoal-light/40">
                Precision &nbsp;·&nbsp; Biology &nbsp;·&nbsp; Stability
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════ SECTION 3: EDUCATIONAL SCOPE ═══════ */}
      <section className="section-padding px-6 md:px-8" style={{ background: "linear-gradient(180deg, hsl(40 10% 96%) 0%, hsl(40 20% 98%) 100%)" }}>
        <div className="luxury-container">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="text-center mb-20">
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-charcoal-light mb-6">
              Curriculum
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-light text-navy">
              Educational <span className="italic">Scope</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-16">
            {educationalScope.map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className={i === educationalScope.length - 1 && educationalScope.length % 3 !== 0 ? "lg:col-start-2" : ""}
              >
                <h3 className="font-display text-lg md:text-xl font-medium text-navy mb-4 leading-snug">
                  {item.title}
                </h3>
                <p className="font-body text-xs text-charcoal-light font-light leading-[1.85] tracking-wide">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 4: GALLERY ═══════ */}
      <section id="gallery" className="section-padding px-6 md:px-8">
        <div className="luxury-container">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="text-center mb-6">
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-charcoal-light mb-6">
              Programs & Training
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-light text-navy mb-4">
              Clinical & Educational <span className="italic">Programs</span>
            </h2>
          </motion.div>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.5 }}
            className="font-body text-[10px] tracking-[0.2em] uppercase text-charcoal-light/50 text-center mb-14"
          >
            Selected Highlights from Global Courses & Live Surgical Programs
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {galleryItems.map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="relative aspect-[4/3] overflow-hidden group"
              >
                <img
                  src={item.src}
                  alt={item.caption}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/35 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="font-body text-[10px] tracking-[0.2em] uppercase text-primary-foreground/80">
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 5: UPCOMING PROGRAMS ═══════ */}
      <section id="programs" className="section-padding px-6 md:px-8" style={{ background: "linear-gradient(180deg, hsl(40 10% 96%) 0%, hsl(40 20% 98%) 100%)" }}>
        <div className="luxury-container max-w-3xl">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="text-center mb-16">
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-charcoal-light mb-6">
              Schedule
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-light text-navy">
              Upcoming <span className="italic">Programs</span>
            </h2>
          </motion.div>

          {/* Mumbai */}
          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="border-b border-divider pb-12 mb-12">
            <h3 className="font-display text-xl md:text-2xl font-medium text-navy mb-2">
              Mumbai, India
            </h3>
            <p className="font-body text-[10px] tracking-[0.2em] uppercase text-charcoal-light/50 mb-5">
              Live Clinical Program
            </p>
            <p className="font-body text-xs text-charcoal-light font-light leading-[1.9] mb-1">
              Immediate Implants · Full-Arch Reconstruction · STABLE Protocol™
            </p>
            <p className="font-body text-xs text-charcoal-light/50 font-light leading-[1.9] mb-6">
              Mentorship · Live Cases · Surgical & Prosthetic Integration
            </p>
            <Link
              to="/contact"
              className="inline-block px-10 py-4 border border-navy/15 text-navy font-body text-[11px] tracking-[0.25em] uppercase transition-all duration-300 hover:bg-navy hover:text-primary-foreground"
            >
              Request Program Details
            </Link>
          </motion.div>

          {/* New Jersey */}
          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.08 }}>
            <h3 className="font-display text-xl md:text-2xl font-medium text-navy mb-2">
              New Jersey, USA
            </h3>
            <p className="font-body text-[10px] tracking-[0.2em] uppercase text-charcoal-light/50 mb-5">
              Recurring Program
            </p>
            <p className="font-body text-xs text-charcoal-light font-light leading-[1.9] mb-1">
              Hands-On Training · Live Mentorship · Digital Workflows
            </p>
            <p className="font-body text-xs text-charcoal-light/50 font-light leading-[1.9] mb-6">
              Mentorship · Live Cases · Surgical & Prosthetic Integration
            </p>
            <Link
              to="/contact"
              className="inline-block px-10 py-4 border border-navy/15 text-navy font-body text-[11px] tracking-[0.25em] uppercase transition-all duration-300 hover:bg-navy hover:text-primary-foreground"
            >
              Request Program Details
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════ SECTION 6: PEER FEEDBACK ═══════ */}
      <section className="section-padding px-6 md:px-8">
        <div className="luxury-container max-w-3xl">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="text-center mb-16">
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-charcoal-light mb-6">
              Professional Perspectives
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-light text-navy">
              Dentist Peer <span className="italic">Feedback</span>
            </h2>
          </motion.div>

          <div className="space-y-14">
            {peerTestimonials.map((t, i) => (
              <motion.blockquote
                key={i}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="border-l border-border pl-8 md:pl-10"
              >
                <p className="font-body text-sm md:text-[15px] text-charcoal font-light leading-[1.95] italic mb-5">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <span className="font-body text-[11px] tracking-[0.1em] text-charcoal font-medium">
                    {t.name}
                  </span>
                  <span className="w-px h-3 bg-border" />
                  <span className="font-body text-[10px] tracking-[0.15em] text-charcoal-light/50">
                    {t.credential}
                  </span>
                </div>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 7: REVIEW CTA ═══════ */}
      <section className="pb-20 md:pb-28 px-6 md:px-8">
        <div className="luxury-container max-w-3xl">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="text-center pt-12 border-t border-divider"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <a
                href={GOOGLE_REVIEWS_READ}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 md:px-14 py-[18px] border border-navy/15 text-navy font-body text-[11px] tracking-[0.25em] uppercase transition-all duration-300 hover:bg-navy hover:text-primary-foreground"
              >
                Read Verified Google Reviews
                <ExternalLink size={13} strokeWidth={1.5} />
              </a>
              <a
                href={GOOGLE_REVIEWS_WRITE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 md:px-14 py-[18px] border border-navy/15 text-navy font-body text-[11px] tracking-[0.25em] uppercase transition-all duration-300 hover:bg-navy hover:text-primary-foreground"
              >
                Share Professional Feedback
                <ExternalLink size={13} strokeWidth={1.5} />
              </a>
            </div>
            <p className="font-body text-[10px] tracking-[0.15em] text-charcoal-light/40">
              Peer feedback reflects professional educational experiences. Verified public reviews available on Google.
            </p>
          </motion.div>
        </div>
      </section>

      <PageFooter />
    </main>
  );
};

export default ProfessionalEducation;
