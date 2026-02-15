import { motion } from "framer-motion";
import { useEffect } from "react";
import PageNavigation from "@/components/PageNavigation";
import PageHero from "@/components/PageHero";
import PageCTA from "@/components/PageCTA";
import PageFooter from "@/components/PageFooter";

const courses = [
  {
    title: "Surgical Implant Foundations",
    type: "Hands-On Program",
    description:
      "A comprehensive, hands-on surgical training program covering implant placement fundamentals, flap design, osteotomy preparation, and immediate loading protocols. Designed for clinicians building confidence in surgical implant dentistry.",
  },
  {
    title: "Full-Arch Prosthetic Protocols",
    type: "Advanced Module",
    description:
      "Advanced prosthetic training focused on full-arch treatment planning, All-on-X concepts, immediate provisionalization, and definitive prosthetic design. Integrates digital workflows with clinical decision-making.",
  },
  {
    title: "Digital Workflow Integration",
    type: "Clinical Workshop",
    description:
      "Practical workshop on integrating intraoral scanning, CBCT-guided planning, and CAD/CAM prosthetic fabrication into everyday clinical practice. Emphasis on efficiency, accuracy, and predictable outcomes.",
  },
];

const platforms = [
  {
    name: "The Dental Project",
    description: "Clinical Education & Surgical Training",
    detail:
      "A structured educational platform offering hands-on surgical and prosthetic training for dental professionals seeking to advance their implant dentistry skills.",
    url: "https://www.instagram.com/thedental_project/",
  },
  {
    name: "Dr. Akshay Parmar",
    description: "Clinical Work & Insights",
    detail:
      "Professional documentation of clinical cases, treatment philosophies, and insights from advanced implant and prosthodontic rehabilitation.",
    url: "https://www.instagram.com/dr.akshayparmar/",
  },
  {
    name: "Decoded Weekly",
    description: "Professional Newsletter",
    detail:
      "A curated weekly newsletter delivering clinical insights, emerging research, and practical knowledge for dental professionals committed to continuous learning.",
    url: "https://substack.com/@decodedweekly",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
};

const Education = () => {
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

      <PageHero
        subtitle="For Dental Professionals"
        title="Implant Education"
        titleItalic="Without Shortcuts"
        paragraphs={[
          "Evidence-based surgical and prosthetic training for modern implant dentistry.",
          "Dr. Akshay Parmar's educational programs are designed for clinicians who value precision, biological principles, and long-term clinical outcomes over expedient techniques.",
          "Training reflects the same standard of care applied in clinical practice, rigorous, methodical, and uncompromising.",
        ]}
      />

      <div className="luxury-container px-6 md:px-8">
        <div className="w-12 h-px bg-navy mx-auto" />
      </div>

      {/* Courses */}
      <section className="section-padding bg-background">
        <div className="luxury-container">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-charcoal-light mb-6">
              Training Programs
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-navy">
              Course Offerings
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-0">
            {courses.map((course, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="border-b border-divider py-10 md:py-12"
              >
                <p className="font-body text-[10px] tracking-[0.3em] uppercase text-charcoal-light mb-3">
                  {course.type}
                </p>
                <h3 className="font-display text-xl md:text-2xl font-medium text-charcoal mb-4">
                  {course.title}
                </h3>
                <p className="font-body text-sm text-charcoal-light font-light leading-relaxed">
                  {course.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Platforms */}
      <section className="section-padding bg-warm-gray">
        <div className="luxury-container">
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-charcoal-light mb-6">
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
                className="bg-warm-gray p-10 text-center"
              >
                <p className="font-body text-[10px] tracking-[0.3em] uppercase text-charcoal-light mb-4">
                  {platform.description}
                </p>
                <h3 className="font-display text-xl font-medium text-charcoal mb-4">
                  {platform.name}
                </h3>
                <p className="font-body text-xs text-charcoal-light font-light leading-relaxed mb-6">
                  {platform.detail}
                </p>
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-body text-[10px] tracking-[0.2em] uppercase text-navy border-b border-navy/30 pb-0.5 hover:border-navy transition-colors"
                >
                  View Platform
                </a>
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

export default Education;
