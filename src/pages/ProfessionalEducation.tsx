import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageNavigation from "@/components/PageNavigation";
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

const curriculum = [
  {
    title: "Single Tooth Implant Foundations",
    description: "Biological principles of osseointegration, site assessment, implant selection, and prosthetic-driven placement for predictable single-unit outcomes.",
  },
  {
    title: "Immediate Implant Protocols",
    description: "Stability-driven workflows for same-day placement and provisionalization. Emphasis on primary stability, soft tissue management, and loading criteria.",
  },
  {
    title: "Full Arch Diagnosis and Treatment Planning",
    description: "Comprehensive planning for complete-arch rehabilitation including implant positioning strategy, prosthetic sequencing, and biomechanical load distribution.",
  },
  {
    title: "Surgical Execution and Biologic Management",
    description: "Guided flap design, bone management, grafting protocols, and biologic healing principles for optimal hard and soft tissue outcomes.",
  },
  {
    title: "Prosthetic Workflows and Occlusal Strategy",
    description: "From provisionalization to definitive restoration. Occlusal design, material selection, and functional analysis for implant-supported prosthetics.",
  },
  {
    title: "Soft Tissue Grafting and Emergence Profile Design",
    description: "Clinical techniques for optimizing peri-implant soft tissue architecture, connective tissue grafting, and natural emergence profile development.",
  },
  {
    title: "Digital Dentistry: Intraoral Scanning",
    description: "Practical integration of intraoral scanning into clinical workflows. Accuracy protocols, scan strategy, and digital impression techniques.",
  },
  {
    title: "Photogrammetry and Full Arch Digital Workflows",
    description: "Advanced digital capture for full-arch cases. Photogrammetric verification, CAD/CAM fabrication, and digitally guided prosthetic delivery.",
  },
  {
    title: "Clinical Photography and Documentation",
    description: "Systematic photographic documentation for treatment planning, patient communication, case presentation, and professional portfolio development.",
  },
];

const galleryItems = [
  { src: eduLecture1, label: "Lecture Moment" },
  { src: eduLecture2, label: "Workshop Photo" },
  { src: eduDigitalWorkflow, label: "Digital Workflow" },
  { src: eduHandsOn, label: "Hands-On Session" },
  { src: eduLecture3, label: "Lecture Moment" },
  { src: eduMentorship1, label: "Mentorship" },
  { src: eduLiveSurgery, label: "Live Surgery" },
  { src: eduMentorship2, label: "Mentorship" },
  { src: eduSurgeryTeam, label: "Live Surgery" },
];

const peerTestimonials = [
  {
    quote: "Dr. Parmar's approach to implant education is rooted in biology and systematic thinking. His courses reshaped how I plan full-arch cases — from diagnostics through prosthetic delivery.",
    name: "Dr. R. Mehta",
    credential: "Prosthodontist, New York",
  },
  {
    quote: "The live surgical training was unlike any other program I have attended. The emphasis on tissue management and prosthetic-driven implant placement gave me a framework I apply daily.",
    name: "Dr. K. Santos",
    credential: "General Dentist, New Jersey",
  },
  {
    quote: "What sets this program apart is the philosophy. It is not about memorizing protocols — it is about understanding why each decision is made. That depth of reasoning has made me a more confident clinician.",
    name: "Dr. A. Chen",
    credential: "Periodontist, Connecticut",
  },
];

const ProfessionalEducation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Clinical Education & Mentorship | Dr. Akshay Parmar";
    return () => {
      document.title = "Dr. Akshay Parmar | Board-Certified Prosthodontist in New Jersey";
    };
  }, []);

  return (
    <main className="bg-background">
      <PageNavigation />

      {/* ═══════ SECTION 1: HERO ═══════ */}
      <section className="pt-36 pb-16 md:pt-44 md:pb-20 px-6 md:px-8 bg-navy">
        <div className="luxury-container max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-primary-foreground/30 mb-6">
              The Dental Project
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-primary-foreground leading-[0.95] mb-8">
              Clinical Education{" "}
              <span className="italic">&amp; Mentorship</span>
            </h1>
            <p className="font-body text-xs md:text-sm text-primary-foreground/45 font-light leading-relaxed max-w-2xl mx-auto mb-4">
              Biologically driven implant and rehabilitation training, taught through structured diagnosis, prosthetic planning, surgical execution, and long-term stability principles.
            </p>
            <p className="font-body text-[10px] tracking-[0.2em] text-primary-foreground/25 mb-12">
              Courses delivered across Mumbai and New Jersey, with live mentorship and real clinical workflows.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                to="/contact"
                className="inline-block px-14 py-[18px] bg-primary-foreground text-navy font-body text-[11px] tracking-[0.25em] uppercase transition-all duration-300 hover:bg-transparent hover:text-primary-foreground border border-primary-foreground/25"
              >
                Request Course Details
              </Link>
              <a
                href="#gallery"
                className="inline-block px-14 py-[18px] border border-primary-foreground/25 text-primary-foreground/70 font-body text-[11px] tracking-[0.25em] uppercase transition-all duration-300 hover:border-primary-foreground/50 hover:text-primary-foreground"
              >
                View Training Gallery
              </a>
            </div>

            <div className="flex items-center justify-center gap-6">
              <a href="#programs" className="font-body text-[10px] tracking-[0.15em] text-primary-foreground/30 hover:text-primary-foreground/50 transition-colors duration-300">
                Upcoming Programs
              </a>
              <span className="w-px h-3 bg-primary-foreground/15" />
              <a href="#gallery" className="font-body text-[10px] tracking-[0.15em] text-primary-foreground/30 hover:text-primary-foreground/50 transition-colors duration-300">
                Past Programs
              </a>
              <span className="w-px h-3 bg-primary-foreground/15" />
              <Link to="/professional-testimonials" className="font-body text-[10px] tracking-[0.15em] text-primary-foreground/30 hover:text-primary-foreground/50 transition-colors duration-300">
                Peer Feedback
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════ SECTION 2: WHAT WE TEACH ═══════ */}
      <section className="section-padding px-6 md:px-8">
        <div className="luxury-container">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="text-center mb-20">
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-charcoal-light mb-6">
              Structured Curriculum
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-light text-navy">
              What We <span className="italic">Teach</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-14">
            {curriculum.map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <h3 className="font-display text-lg md:text-xl font-medium text-navy mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="font-body text-xs text-charcoal-light font-light leading-[1.8]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 3: STABLE IMPLANT PROTOCOL ═══════ */}
      <section id="stable" className="py-20 md:py-28 px-6 md:px-8 bg-navy">
        <div className="luxury-container max-w-3xl text-center">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }}>
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-primary-foreground/25 mb-6">
              Signature Framework
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-light text-primary-foreground mb-10">
              STABLE IMPLANT <span className="italic">Protocol™</span>
            </h2>
            <p className="font-body text-sm md:text-[15px] text-primary-foreground/50 font-light leading-[2] mb-6 max-w-2xl mx-auto">
              A biologic-first system integrating soft tissue and bone level esthetics with prosthetically driven planning. Built to reduce complications, improve predictability, and create long-term stability in immediate and full arch rehabilitation.
            </p>
            <div className="w-10 h-px bg-primary-foreground/15 mx-auto mb-6" />
            <p className="font-body text-[10px] tracking-[0.2em] uppercase text-primary-foreground/25">
              Taught through lectures, hands-on sessions, and guided live case mentorship.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════ SECTION 4: PROGRAM FORMAT ═══════ */}
      <section className="section-padding px-6 md:px-8">
        <div className="luxury-container max-w-4xl">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="text-center mb-20">
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-charcoal-light mb-6">
              Program Structure
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-light text-navy">
              How the Programs <span className="italic">Run</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
            <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
              <h3 className="font-display text-xl font-medium text-navy mb-4">Lectures</h3>
              <p className="font-body text-sm text-charcoal-light font-light leading-[1.9]">
                Diagnosis, planning, biology, and decision-making frameworks. Each session is built around clinical reasoning rather than isolated technique demonstration.
              </p>
            </motion.div>

            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.08 }}>
              <h3 className="font-display text-xl font-medium text-navy mb-4">Hands-On Training</h3>
              <p className="font-body text-sm text-charcoal-light font-light leading-[1.9]">
                Guided surgical and restorative workflows, including grafting, temporization, intraoral scanning, and photogrammetry. Every participant works through structured clinical exercises.
              </p>
            </motion.div>

            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.16 }} className="md:col-span-2">
              <h3 className="font-display text-xl font-medium text-navy mb-4">Live Case Mentorship</h3>
              <p className="font-body text-sm text-charcoal-light font-light leading-[1.9] max-w-2xl">
                Real patient cases with step-by-step mentoring led by Dr. Akshay Parmar and Dr. Vinita Ved Shah under The Dental Project. From diagnosis through surgical execution and prosthetic delivery.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 5: TRAINING GALLERY ═══════ */}
      <section id="gallery" className="section-padding px-6 md:px-8 bg-warm-gray">
        <div className="luxury-container">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="text-center mb-6">
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-charcoal-light mb-6">
              Training Documentation
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-light text-navy mb-8">
              Training <span className="italic">Gallery</span>
            </h2>
          </motion.div>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.5 }}
            className="font-body text-[10px] tracking-[0.2em] uppercase text-charcoal-light/50 text-center mb-14"
          >
            Selected moments from Mumbai and New Jersey programs. Additional case and course documentation added continuously.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {galleryItems.map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative aspect-[4/3] overflow-hidden group"
              >
                <img
                  src={item.src}
                  alt={item.label}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="font-body text-[10px] tracking-[0.2em] uppercase text-primary-foreground/80">
                    {item.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 6: UPCOMING PROGRAMS ═══════ */}
      <section id="programs" className="section-padding px-6 md:px-8">
        <div className="luxury-container max-w-3xl">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="text-center mb-16">
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-charcoal-light mb-6">
              Schedule
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-light text-navy">
              Upcoming <span className="italic">Programs</span>
            </h2>
          </motion.div>

          <div className="space-y-0">
            <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="border-b border-divider py-10">
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-3">
                <h3 className="font-display text-xl font-medium text-navy">Mumbai, India</h3>
                <span className="font-body text-[10px] tracking-[0.2em] uppercase text-charcoal-light/50">Upcoming</span>
              </div>
              <p className="font-body text-xs text-charcoal-light font-light leading-[1.8] mb-1">
                Partner: Osstem
              </p>
              <p className="font-body text-xs text-charcoal-light font-light leading-[1.8]">
                Format: Live cases + mentoring + full workflow training
              </p>
            </motion.div>

            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.08 }} className="border-b border-divider py-10">
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-3">
                <h3 className="font-display text-xl font-medium text-navy">New Jersey, USA</h3>
                <span className="font-body text-[10px] tracking-[0.2em] uppercase text-charcoal-light/50">Recurring</span>
              </div>
              <p className="font-body text-xs text-charcoal-light font-light leading-[1.8] mb-1">
                Partner: Megagen
              </p>
              <p className="font-body text-xs text-charcoal-light font-light leading-[1.8]">
                Format: Hands-on + live mentorship + digital workflows
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 7: PEER FEEDBACK ═══════ */}
      <section className="section-padding px-6 md:px-8 bg-warm-gray">
        <div className="luxury-container max-w-3xl">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="text-center mb-16">
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-charcoal-light mb-6">
              Clinician Perspectives
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-light text-navy mb-4">
              Professional <span className="italic">Reflections</span>
            </h2>
            <p className="font-body text-xs text-charcoal-light/60 font-light tracking-wide">
              Perspectives from clinicians and course participants.
            </p>
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

          <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="text-center mt-14">
            <Link
              to="/professional-testimonials"
              className="inline-block px-14 py-[18px] border border-navy/15 text-navy font-body text-[11px] tracking-[0.25em] uppercase transition-all duration-300 hover:bg-navy hover:text-primary-foreground"
            >
              Read More Peer Feedback
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════ SECTION 8: FINAL CTA ═══════ */}
      <section className="section-padding px-6 md:px-8 bg-navy">
        <div className="luxury-container max-w-2xl text-center">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }}>
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-primary-foreground/25 mb-6">
              Collaborate
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-light text-primary-foreground mb-6">
              Bring This Training{" "}
              <span className="italic">to Your Team</span>
            </h2>
            <p className="font-body text-sm text-primary-foreground/45 font-light leading-[1.9] mb-12 max-w-lg mx-auto">
              For clinicians seeking structured, biologically driven training with real workflow mentorship.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                to="/contact"
                className="inline-block px-14 py-[18px] bg-primary-foreground text-navy font-body text-[11px] tracking-[0.25em] uppercase transition-all duration-300 hover:bg-transparent hover:text-primary-foreground border border-primary-foreground/25"
              >
                Request Course Details
              </Link>
              <Link
                to="/contact"
                className="inline-block px-14 py-[18px] border border-primary-foreground/25 text-primary-foreground/70 font-body text-[11px] tracking-[0.25em] uppercase transition-all duration-300 hover:border-primary-foreground/50 hover:text-primary-foreground"
              >
                Partner With Us
              </Link>
            </div>

            <p className="font-body text-[10px] tracking-[0.2em] uppercase text-primary-foreground/20">
              Limited cohorts to preserve mentorship quality.
            </p>
          </motion.div>
        </div>
      </section>

      <PageFooter />
    </main>
  );
};

export default ProfessionalEducation;
