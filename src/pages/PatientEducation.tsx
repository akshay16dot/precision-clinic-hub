import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import SiteNavigation from "@/components/SiteNavigation";
import PageCTA from "@/components/PageCTA";
import FooterSection from "@/components/FooterSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
};

/* ─── Treatment data ─── */
const treatments = [
  {
    id: "dental-implants",
    title: "Dental Implants",
    description:
      "A dental implant is a small titanium post placed into the jawbone to replace a missing tooth root. Once healed, it supports a custom-made crown that looks, feels, and functions like a natural tooth.",
    candidates: [
      "Missing one or more teeth",
      "Looking for a permanent, stable replacement",
      "Wanting to preserve jawbone health",
      "Seeking a solution that feels natural",
    ],
    benefits: [
      "Restores natural chewing comfort",
      "Preserves surrounding teeth and bone",
      "Looks and feels like your own tooth",
      "Designed for long-term stability",
    ],
    expectations:
      "The process typically involves a brief, comfortable placement procedure followed by a healing period. A custom crown is then attached, completing your smile with a result that blends seamlessly with your natural teeth.",
    link: "/dental-implants-new-jersey",
  },
  {
    id: "immediate-implants",
    title: "Immediate Implants",
    description:
      "Immediate implants allow placement on the same day as tooth removal, reducing the total number of procedures and healing time. This approach is ideal when conditions allow for a streamlined treatment experience.",
    candidates: [
      "Needing a tooth extracted",
      "Wanting to minimize total treatment time",
      "Suitable bone quality for same-day placement",
      "Seeking fewer appointments and procedures",
    ],
    benefits: [
      "Fewer surgical visits",
      "Reduced overall healing time",
      "Immediate aesthetic improvement",
      "Streamlined, efficient process",
    ],
    expectations:
      "After careful evaluation, the damaged tooth is gently removed and the implant is placed in the same appointment. A temporary restoration may be placed immediately, so you leave with a complete smile from day one.",
    link: "/dental-implants-new-jersey",
  },
  {
    id: "full-arch",
    title: "Full-Arch Rehabilitation (All-on-X)",
    description:
      "Full-arch treatment replaces an entire row of teeth using a small number of strategically positioned implants. This provides a fixed, non-removable set of teeth that restore full function and confidence.",
    candidates: [
      "Missing most or all teeth in one or both arches",
      "Currently wearing dentures and seeking a permanent solution",
      "Experiencing significant tooth deterioration",
      "Looking for a life-changing improvement in comfort and function",
    ],
    benefits: [
      "A complete, fixed set of teeth",
      "No more adhesives or removable dentures",
      "Restored ability to eat, speak, and smile with confidence",
      "Designed for lasting comfort and stability",
    ],
    expectations:
      "Treatment begins with detailed planning using advanced imaging. On the day of surgery, implants are placed and a temporary set of teeth is typically provided. After healing, your final custom teeth are secured for a permanent, beautiful result.",
    link: "/full-arch-implants-new-jersey",
  },
  {
    id: "veneers",
    title: "Veneers",
    description:
      "Veneers are thin, custom-crafted porcelain shells bonded to the front surface of your teeth. They correct imperfections in shape, color, spacing, and alignment, creating a naturally beautiful smile.",
    candidates: [
      "Wanting to improve the shape or symmetry of your smile",
      "Addressing discoloration that whitening cannot correct",
      "Closing small gaps between teeth",
      "Seeking a refined, natural-looking result",
    ],
    benefits: [
      "Instantly transforms your smile",
      "Natural, lifelike appearance",
      "Minimal tooth preparation required",
      "Stain-resistant and durable",
    ],
    expectations:
      "A small amount of enamel is gently prepared. Impressions are taken and your custom veneers are crafted. At the final visit, your veneers are bonded in place, giving you a beautiful, lasting smile.",
    link: "/aesthetic-dentistry",
  },
  {
    id: "maxillofacial",
    title: "Maxillofacial Rehabilitation",
    description:
      "Maxillofacial rehabilitation restores form and function for patients who have experienced changes to the face, jaw, or mouth due to surgery, trauma, or congenital conditions. Prosthetic solutions are custom-designed to restore appearance, comfort, and confidence.",
    candidates: [
      "Following cancer treatment or facial surgery",
      "Congenital or developmental conditions",
      "Facial trauma requiring reconstruction",
      "Seeking specialized, compassionate rehabilitative care",
    ],
    benefits: [
      "Restores natural facial appearance",
      "Improves speech, swallowing, and comfort",
      "Custom-designed for each individual",
      "Compassionate, specialist-level care",
    ],
    expectations:
      "Treatment involves detailed evaluation and custom design of prosthetic devices tailored to your unique anatomy. Your specialist works closely with your medical team to ensure integrated, thoughtful care throughout your journey.",
    link: "/maxillofacial-rehabilitation",
  },
];

/* ─── FAQ data ─── */
const faqs = [
  {
    q: "Is implant surgery painful?",
    a: "Most patients are pleasantly surprised by how comfortable the experience is. Local anesthesia ensures you feel no pain during the procedure. Afterward, mild soreness is normal and manageable with over-the-counter medication. Many patients return to daily activities the next day.",
  },
  {
    q: "How long does healing take?",
    a: "Healing varies depending on the treatment, but most patients feel comfortable within a few days. The implant integrates with your bone over several weeks to months, during which you go about your normal routine. Your specialist monitors progress at each follow-up visit.",
  },
  {
    q: "Will I be without teeth during treatment?",
    a: "No. Temporary teeth are typically provided at the time of surgery, so you never have to go without a smile. These provisional restorations are designed to look natural and allow you to eat and speak comfortably while your permanent teeth are being crafted.",
  },
  {
    q: "How do I eat after surgery?",
    a: "You will start with soft, comfortable foods for the first few days. Gradually, as healing progresses, you reintroduce firmer textures. Most patients return to their normal diet within a few weeks. Detailed dietary guidance is provided for every stage of recovery.",
  },
  {
    q: "What is normal during healing?",
    a: "Mild swelling, light sensitivity, and slight bruising are all normal and typically resolve within the first week. These are signs that your body is healing properly. Cold compresses and rest help ease any discomfort during the initial days.",
  },
  {
    q: "When should I contact the office?",
    a: "If you experience anything unexpected, such as persistent discomfort, unusual swelling, or any concern at all, please reach out. Our team is here to support you at every stage. It is always better to ask, and we welcome your questions.",
  },
];

/* ─── Surgery day steps ─── */
const surgeryDaySteps = [
  {
    title: "Arrival",
    text: "You will be warmly welcomed and guided to a comfortable treatment room. The team reviews your plan and answers any last questions, ensuring you feel calm and prepared.",
  },
  {
    title: "Comfort and Anesthesia",
    text: "Local anesthesia is administered to ensure complete comfort throughout the procedure. Sedation options are available if preferred. You will feel relaxed and at ease.",
  },
  {
    title: "The Procedure",
    text: "Your specialist performs the treatment with precision and care. The process is typically smoother and shorter than most patients expect. You are monitored comfortably throughout.",
  },
  {
    title: "Immediately After",
    text: "You may feel mild pressure or numbness as the anesthesia wears off. This is completely normal. Temporary teeth are placed if applicable, so you leave with a complete smile.",
  },
  {
    title: "Going Home",
    text: "Detailed aftercare instructions are provided. You will know exactly what to expect, what to eat, and when to rest. A follow-up appointment is scheduled to ensure smooth healing.",
  },
];

const PatientEducation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title =
      "Patient Education | Understanding Your Treatment | Dr. Akshay Parmar";
    return () => {
      document.title =
        "Dr. Akshay Parmar | Board-Certified Prosthodontist in New Jersey";
    };
  }, []);

  return (
    <main className="bg-background">
      <SiteNavigation />

      {/* ── Hero ── */}
      <section className="pt-36 pb-16 md:pt-44 md:pb-20 px-6 md:px-8">
        <div className="luxury-container max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-charcoal-light mb-6">
              Patient Education
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-navy leading-[0.95] mb-8">
              Understanding Your{" "}
              <span className="italic">Treatment</span>
            </h1>
            <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed max-w-2xl mx-auto">
              Making decisions about your dental health should feel clear,
              informed, and comfortable. This guide explains common treatments
              in simple terms, helping you understand your options, what to
              expect, and how modern dentistry restores function, comfort, and
              aesthetics.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Treatment Sections ── */}
      {treatments.map((t, idx) => (
        <section
          key={t.id}
          id={t.id}
          className="py-14 md:py-20 px-6 md:px-8"
          style={
            idx % 2 === 0
              ? {
                  background:
                    "linear-gradient(180deg, hsl(40 10% 95%) 0%, hsl(40 12% 93%) 100%)",
                }
              : undefined
          }
        >
          <div className="luxury-container max-w-3xl">
            <motion.div {...fadeUp} transition={{ duration: 0.8 }}>
              <p className="font-body text-[10px] tracking-[0.35em] uppercase text-charcoal-light mb-4">
                Treatment Guide
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-light text-navy mb-6">
                {t.title}
              </h2>
              <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed mb-10">
                {t.description}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
              {/* Candidates */}
              <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
                <p className="font-body text-[10px] tracking-[0.3em] uppercase text-charcoal-light mb-4">
                  You May Be a Candidate If
                </p>
                <ul className="space-y-3">
                  {t.candidates.map((c, i) => (
                    <li
                      key={i}
                      className="font-body text-sm text-charcoal font-light leading-relaxed pl-4 border-l-2 border-divider"
                    >
                      {c}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Benefits */}
              <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }}>
                <p className="font-body text-[10px] tracking-[0.3em] uppercase text-charcoal-light mb-4">
                  Key Benefits
                </p>
                <ul className="space-y-3">
                  {t.benefits.map((b, i) => (
                    <li
                      key={i}
                      className="font-body text-sm text-charcoal font-light leading-relaxed pl-4 border-l-2 border-divider"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* What to Expect */}
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.3 }}>
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-charcoal-light mb-4">
                What to Expect
              </p>
              <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed mb-6">
                {t.expectations}
              </p>
              <Link
                to={t.link}
                className="inline-block font-body text-[11px] tracking-[0.2em] uppercase text-navy border-b border-navy/30 pb-1 hover:border-navy transition-colors duration-300"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        </section>
      ))}

      {/* ── Surgery Day ── */}
      <section className="py-14 md:py-20 px-6 md:px-8">
        <div className="luxury-container max-w-3xl">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="text-center mb-12">
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-charcoal-light mb-4">
              Your Experience
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-light text-navy mb-6">
              What to Expect on the{" "}
              <span className="italic">Day of Surgery</span>
            </h2>
            <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed max-w-xl mx-auto">
              Knowing what to expect helps you feel calm and confident. Here is
              a step-by-step overview of your experience.
            </p>
          </motion.div>

          <div className="space-y-0">
            {surgeryDaySteps.map((step, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="grid grid-cols-[2.5rem_1fr] gap-4 items-start pb-8"
              >
                <div className="flex flex-col items-center">
                  <span className="font-display text-lg font-light text-navy/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {i < surgeryDaySteps.length - 1 && (
                    <div className="w-px flex-1 bg-divider mt-2" />
                  )}
                </div>
                <div className="pb-2">
                  <p className="font-display text-lg md:text-xl font-light text-navy mb-2">
                    {step.title}
                  </p>
                  <p className="font-body text-sm text-charcoal-light font-light leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Food Guidance ── */}
      <section
        className="py-14 md:py-20 px-6 md:px-8"
        style={{
          background:
            "linear-gradient(180deg, hsl(40 10% 95%) 0%, hsl(40 12% 93%) 100%)",
        }}
      >
        <div className="luxury-container max-w-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* Single Implant */}
            <motion.div {...fadeUp} transition={{ duration: 0.7 }}>
              <p className="font-body text-[10px] tracking-[0.35em] uppercase text-charcoal-light mb-4">
                Dietary Guidance
              </p>
              <h3 className="font-display text-2xl md:text-3xl font-light text-navy mb-5">
                Eating After{" "}
                <span className="italic">Single Implant Surgery</span>
              </h3>
              <div className="space-y-4">
                <p className="font-body text-sm text-charcoal-light font-light leading-relaxed">
                  For the first few days, soft, room-temperature foods are ideal.
                  Think smoothies, yogurt, scrambled eggs, and soups.
                </p>
                <p className="font-body text-sm text-charcoal-light font-light leading-relaxed">
                  Temporarily avoid very hot, crunchy, or hard foods near the
                  treatment area. This allows the site to heal undisturbed.
                </p>
                <p className="font-body text-sm text-charcoal-light font-light leading-relaxed">
                  Within a week or two, most patients comfortably return to their
                  normal diet. Your body will guide you, and each day feels
                  easier.
                </p>
              </div>
            </motion.div>

            {/* Full-Arch */}
            <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.1 }}>
              <p className="font-body text-[10px] tracking-[0.35em] uppercase text-charcoal-light mb-4">
                Dietary Guidance
              </p>
              <h3 className="font-display text-2xl md:text-3xl font-light text-navy mb-5">
                Eating After{" "}
                <span className="italic">Full-Arch Treatment</span>
              </h3>
              <div className="space-y-4">
                <p className="font-body text-sm text-charcoal-light font-light leading-relaxed">
                  During the initial healing phase, a softer diet supports
                  successful integration. Nutrient-rich options like blended
                  soups, protein shakes, soft fish, and mashed vegetables are
                  excellent choices.
                </p>
                <p className="font-body text-sm text-charcoal-light font-light leading-relaxed">
                  Softer textures help protect your new teeth while the implants
                  bond with your bone. This phase is temporary and essential for
                  long-term success.
                </p>
                <p className="font-body text-sm text-charcoal-light font-light leading-relaxed">
                  Over the following weeks, you gradually reintroduce firmer
                  foods. Most patients are amazed at how naturally they eat once
                  fully healed.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Healing Guidance ── */}
      <section className="py-14 md:py-20 px-6 md:px-8">
        <div className="luxury-container max-w-3xl">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="text-center mb-10">
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-charcoal-light mb-4">
              Recovery
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-light text-navy mb-6">
              One Week After{" "}
              <span className="italic">Surgery</span>
            </h2>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.7 }} className="space-y-5">
            <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
              By one week after your procedure, most patients notice significant
              improvement. Any initial swelling has typically subsided, and
              tenderness continues to decrease each day.
            </p>
            <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
              Mild sensitivity around the treatment area is normal and a sign
              that your body is healing as expected. Gentle daily care and
              prescribed rinses support this process.
            </p>
            <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
              Most patients feel comfortable returning to their full routine
              within this first week. If anything feels unusual or concerning,
              simply reach out. Your care team is always here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section
        className="py-14 md:py-20 px-6 md:px-8"
        style={{
          background:
            "linear-gradient(180deg, hsl(40 10% 95%) 0%, hsl(40 12% 93%) 100%)",
        }}
      >
        <div className="luxury-container max-w-3xl">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="text-center mb-12">
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-charcoal-light mb-4">
              Your Questions
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-light text-navy">
              Common <span className="italic">Questions</span>
            </h2>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-0">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <AccordionItem
                  value={`faq-${i}`}
                  className="border-b border-divider"
                >
                  <AccordionTrigger className="py-5 font-display text-lg md:text-xl font-light text-charcoal hover:text-navy transition-colors text-left hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 font-body text-sm text-charcoal-light font-light leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ── Soft CTA ── */}
      <section className="py-14 md:py-20 px-6 md:px-8">
        <div className="luxury-container max-w-3xl text-center">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }}>
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-charcoal-light mb-4">
              Next Steps
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-light text-navy mb-6">
              Ready to Learn{" "}
              <span className="italic">More?</span>
            </h2>
            <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed max-w-xl mx-auto mb-10">
              Every treatment journey begins with understanding. If you have
              questions or would like to explore your options, we welcome the
              conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-block px-10 py-4 bg-navy text-primary-foreground font-body text-[11px] tracking-[0.25em] uppercase transition-all duration-300 hover:bg-navy/90"
              >
                Schedule Consultation
              </Link>
              <Link
                to="/contact"
                className="inline-block px-10 py-4 border border-navy/25 text-navy font-body text-[11px] tracking-[0.25em] uppercase transition-all duration-300 hover:border-navy/50"
              >
                Am I a Candidate?
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
};

export default PatientEducation;
