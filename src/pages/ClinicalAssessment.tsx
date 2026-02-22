import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import SiteNavigation from "@/components/SiteNavigation";
import FooterSection from "@/components/FooterSection";
import { usePageSEO } from "@/hooks/usePageSEO";

// --- Types ---

interface Question {
  id: string;
  text: string;
  subtext?: string;
  options: { label: string; value: string }[];
}

interface Recommendation {
  title: string;
  titleItalic: string;
  description: string;
  link: string;
  linkLabel: string;
}

// --- Data ---

const questions: Question[] = [
  {
    id: "missing-teeth",
    text: "Are you currently missing one or more teeth?",
    subtext: "This includes teeth lost due to decay, trauma, or previous extraction.",
    options: [
      { label: "Yes, one or more teeth", value: "yes" },
      { label: "No, but I may need extractions", value: "extractions" },
      { label: "No", value: "no" },
    ],
  },
  {
    id: "failing-work",
    text: "Do you have dental work that feels loose, uncomfortable, or has failed?",
    subtext: "This may include crowns, bridges, dentures, or previous implants.",
    options: [
      { label: "Yes, existing work has failed or is failing", value: "yes" },
      { label: "I'm unsure about the condition of my dental work", value: "unsure" },
      { label: "No, my current dental work is stable", value: "no" },
    ],
  },
  {
    id: "chewing",
    text: "Are you experiencing difficulty chewing or persistent bite discomfort?",
    subtext: "Functional limitations can indicate underlying structural or prosthetic concerns.",
    options: [
      { label: "Yes, significant difficulty", value: "yes" },
      { label: "Occasional discomfort", value: "some" },
      { label: "No functional concerns", value: "no" },
    ],
  },
  {
    id: "smile-concern",
    text: "Are you concerned about the appearance of your teeth or smile?",
    subtext: "This includes discoloration, spacing, wear, chips, or overall alignment.",
    options: [
      { label: "Yes, appearance is a primary concern", value: "yes" },
      { label: "Somewhat, but function is more important", value: "some" },
      { label: "No aesthetic concerns", value: "no" },
    ],
  },
  {
    id: "major-treatment",
    text: "Have you been advised that you may require significant dental treatment?",
    subtext: "For example, multiple extractions, full-mouth rehabilitation, or implant surgery.",
    options: [
      { label: "Yes, major treatment has been recommended", value: "yes" },
      { label: "I'm seeking a second opinion", value: "second-opinion" },
      { label: "No", value: "no" },
    ],
  },
  {
    id: "gum-tissue",
    text: "Do you have concerns about your gum health or soft tissue appearance?",
    subtext: "This includes gum recession, uneven gum lines, or tissue inflammation.",
    options: [
      { label: "Yes, gum or tissue concerns", value: "yes" },
      { label: "I'm not sure", value: "unsure" },
      { label: "No gum concerns", value: "no" },
    ],
  },
  {
    id: "medical-complexity",
    text: "Do you have medical conditions that may affect dental treatment?",
    subtext: "Conditions such as diabetes, osteoporosis, blood disorders, or a history of cancer treatment.",
    options: [
      { label: "Yes, I have medical considerations", value: "yes" },
      { label: "I'm not sure if my health affects treatment", value: "unsure" },
      { label: "No relevant medical conditions", value: "no" },
    ],
  },
];

function getRecommendations(answers: Record<string, string>): Recommendation[] {
  const recs: Recommendation[] = [];

  const needsImplants =
    answers["missing-teeth"] === "yes" ||
    answers["missing-teeth"] === "extractions";
  const failedWork =
    answers["failing-work"] === "yes" || answers["failing-work"] === "unsure";
  const chewingIssues =
    answers["chewing"] === "yes" || answers["chewing"] === "some";
  const smileConcern =
    answers["smile-concern"] === "yes" || answers["smile-concern"] === "some";
  const majorTreatment =
    answers["major-treatment"] === "yes" ||
    answers["major-treatment"] === "second-opinion";
  const gumConcern =
    answers["gum-tissue"] === "yes" || answers["gum-tissue"] === "unsure";
  const medicalComplex =
    answers["medical-complexity"] === "yes" ||
    answers["medical-complexity"] === "unsure";

  if (needsImplants) {
    recs.push({
      title: "Dental",
      titleItalic: "Implants",
      description:
        "Based on your responses, dental implant rehabilitation may be a relevant treatment consideration. Implants offer a biologically integrated solution for missing teeth.",
      link: "/dental-implants-new-jersey",
      linkLabel: "Explore Dental Implants",
    });
  }

  if (needsImplants && majorTreatment) {
    recs.push({
      title: "Full-Arch",
      titleItalic: "Rehabilitation",
      description:
        "Your responses suggest that comprehensive implant-supported rehabilitation, including full-arch solutions, may warrant clinical evaluation.",
      link: "/full-arch-implants-new-jersey",
      linkLabel: "Explore Full-Arch Solutions",
    });
  }

  if (needsImplants && !majorTreatment) {
    recs.push({
      title: "Immediate Implant",
      titleItalic: "Placement",
      description:
        "Depending on clinical factors, immediate implant placement at the time of extraction may be a consideration worth exploring with your specialist.",
      link: "/immediate-implant-rehabilitation",
      linkLabel: "Explore Immediate Implants",
    });
  }

  if (smileConcern && !majorTreatment) {
    recs.push({
      title: "Veneers & Smile",
      titleItalic: "Design",
      description:
        "Treatment considerations may include porcelain veneers or cosmetic reconstruction to address appearance-related concerns with long-term stability.",
      link: "/veneers-aesthetic-reconstruction",
      linkLabel: "Explore Veneers & Smile Design",
    });
  }

  if ((chewingIssues && majorTreatment) || (failedWork && majorTreatment)) {
    recs.push({
      title: "Full Mouth",
      titleItalic: "Reconstruction",
      description:
        "Your responses indicate that comprehensive full-mouth rehabilitation may be an appropriate area of clinical discussion to restore function and stability.",
      link: "/tooth-wear-rehabilitation",
      linkLabel: "Explore Full Mouth Reconstruction",
    });
  }

  if (gumConcern) {
    recs.push({
      title: "Gum & Soft Tissue",
      titleItalic: "Procedures",
      description:
        "Soft tissue health plays a foundational role in long-term treatment success. Clinical evaluation of gum and tissue conditions may be beneficial.",
      link: "/aesthetic-dentistry",
      linkLabel: "Explore Gum & Tissue Procedures",
    });
  }

  if (failedWork) {
    recs.push({
      title: "Failed Dental Work &",
      titleItalic: "Complications",
      description:
        "Addressing previously failed or compromised dental work requires specialist-level evaluation to determine appropriate corrective pathways.",
      link: "/patient-education#failed-work",
      linkLabel: "Explore Treatment of Failed Work",
    });
  }

  if (medicalComplex) {
    recs.push({
      title: "Medically Complex",
      titleItalic: "Care",
      description:
        "Patients with systemic health considerations benefit from specialist coordination to ensure safe, predictable treatment planning.",
      link: "/maxillofacial-rehabilitation",
      linkLabel: "Explore Specialized Care",
    });
  }

  // Ensure at least one recommendation
  if (recs.length === 0) {
    recs.push({
      title: "Comprehensive",
      titleItalic: "Consultation",
      description:
        "A specialist consultation allows for thorough clinical evaluation and personalized treatment discussion based on your unique dental health.",
      link: "/contact",
      linkLabel: "Schedule a Consultation",
    });
  }

  // Deduplicate by link
  const seen = new Set<string>();
  return recs.filter((r) => {
    if (seen.has(r.link)) return false;
    seen.add(r.link);
    return true;
  });
}

// --- Components ---

const fadeVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -16 },
};

const ProgressBar = ({ current, total }: { current: number; total: number }) => (
  <div className="w-full max-w-md mx-auto mb-10">
    <div className="flex justify-between mb-2">
      <span className="font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
        Question {current} of {total}
      </span>
    </div>
    <div className="h-[2px] bg-border/60 rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-navy"
        initial={false}
        animate={{ width: `${(current / total) * 100}%` }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
    </div>
  </div>
);

const ClinicalAssessment = () => {
  const [step, setStep] = useState<"intro" | "questions" | "results">("intro");
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  usePageSEO({
    title: "Clinical Self-Assessment | Dental Implants & Prosthodontic Evaluation",
    description:
      "An educational self-assessment tool to help patients understand potential treatment considerations including dental implants, veneers, full-arch rehabilitation, and complex restorative care.",
  });

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
    // Small delay for visual feedback
    setTimeout(() => {
      if (currentQ < questions.length - 1) {
        setCurrentQ((prev) => prev + 1);
      } else {
        setStep("results");
      }
    }, 250);
  };

  const handleBack = () => {
    if (currentQ > 0) {
      setCurrentQ((prev) => prev - 1);
    } else {
      setStep("intro");
    }
  };

  const handleRestart = () => {
    setStep("intro");
    setCurrentQ(0);
    setAnswers({});
  };

  const recommendations = step === "results" ? getRecommendations(answers) : [];

  return (
    <>
      <SiteNavigation />
      <main className="min-h-screen bg-background">
        <AnimatePresence mode="wait">
          {/* --- INTRO --- */}
          {step === "intro" && (
            <motion.section
              key="intro"
              variants={fadeVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="hero-min-h flex items-center justify-center px-6"
            >
              <div className="max-w-2xl text-center pt-28 pb-16">
                <p className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-6">
                  Guided Educational Tool
                </p>
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-navy leading-[1.05] mb-6">
                  Clinical Self-
                  <span className="italic">Assessment</span>
                </h1>
                <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed max-w-lg mx-auto mb-4">
                  This guided experience helps you understand potential treatment considerations based on your dental health concerns. Your responses will help identify relevant areas for clinical discussion.
                </p>
                <p className="font-body text-[11px] text-muted-foreground/60 leading-relaxed max-w-md mx-auto mb-10">
                  This tool is educational in nature and does not constitute a diagnosis, treatment recommendation, or professional evaluation. A clinical consultation is necessary for any treatment planning.
                </p>
                <button
                  onClick={() => setStep("questions")}
                  className="inline-flex items-center gap-3 px-10 py-4 bg-navy text-primary-foreground font-body text-[11px] tracking-[0.25em] uppercase transition-all duration-300 hover:bg-navy/90"
                >
                  Begin Assessment
                  <ArrowRight size={14} strokeWidth={1.5} />
                </button>
              </div>
            </motion.section>
          )}

          {/* --- QUESTIONS --- */}
          {step === "questions" && (
            <motion.section
              key={`q-${currentQ}`}
              variants={fadeVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4 }}
              className="hero-min-h flex flex-col items-center justify-center px-6"
            >
              <div className="max-w-xl w-full pt-28 pb-16">
                <ProgressBar current={currentQ + 1} total={questions.length} />

                <div className="text-center mb-10">
                  <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-light text-navy leading-snug mb-3">
                    {questions[currentQ].text}
                  </h2>
                  {questions[currentQ].subtext && (
                    <p className="font-body text-[13px] text-muted-foreground/70 leading-relaxed max-w-md mx-auto">
                      {questions[currentQ].subtext}
                    </p>
                  )}
                </div>

                <div className="space-y-3 max-w-md mx-auto">
                  {questions[currentQ].options.map((opt) => {
                    const isSelected = answers[questions[currentQ].id] === opt.value;
                    return (
                      <button
                        key={opt.value}
                        onClick={() => handleAnswer(questions[currentQ].id, opt.value)}
                        className={`w-full text-left px-6 py-5 border rounded-sm font-body text-[13px] tracking-wide transition-all duration-300 ${
                          isSelected
                            ? "border-navy bg-navy/5 text-navy"
                            : "border-border/60 text-muted-foreground hover:border-navy/40 hover:text-navy"
                        }`}
                      >
                        {opt.label}
                      </button>
                    );
                  })}
                </div>

                <div className="mt-10 text-center">
                  <button
                    onClick={handleBack}
                    className="inline-flex items-center gap-2 font-body text-[11px] tracking-[0.2em] uppercase text-muted-foreground hover:text-navy transition-colors duration-300"
                  >
                    <ArrowLeft size={13} strokeWidth={1.5} />
                    Back
                  </button>
                </div>
              </div>
            </motion.section>
          )}

          {/* --- RESULTS --- */}
          {step === "results" && (
            <motion.section
              key="results"
              variants={fadeVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="px-6 pt-32 pb-20"
            >
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16">
                  <p className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-5">
                    Assessment Summary
                  </p>
                  <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-navy leading-[1.05] mb-5">
                    Based on Your <span className="italic">Responses</span>
                  </h2>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-lg mx-auto">
                    The following treatment considerations may be relevant to your situation. Clinical evaluation by a specialist is recommended to determine the most appropriate course of care.
                  </p>
                </div>

                <div className="space-y-6 mb-16">
                  {recommendations.map((rec, i) => (
                    <motion.div
                      key={rec.link}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 + i * 0.1, duration: 0.5 }}
                      className="border border-border/60 rounded-sm p-8 md:p-10 hover:border-navy/30 transition-colors duration-300"
                    >
                      <h3 className="font-display text-xl md:text-2xl font-light text-navy mb-3">
                        {rec.title}{" "}
                        <span className="italic">{rec.titleItalic}</span>
                      </h3>
                      <p className="font-body text-[13px] text-muted-foreground leading-relaxed mb-5">
                        {rec.description}
                      </p>
                      <Link
                        to={rec.link}
                        className="inline-flex items-center gap-2 font-body text-[11px] tracking-[0.2em] uppercase text-navy hover:text-navy/70 transition-colors duration-300"
                      >
                        {rec.linkLabel}
                        <ArrowRight size={13} strokeWidth={1.5} />
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Consultation CTA */}
                <div className="text-center border-t border-border/40 pt-14">
                  <p className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-4">
                    Next Step
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl font-light text-navy mb-4">
                    Schedule a <span className="italic">Consultation</span>
                  </h3>
                  <p className="font-body text-[13px] text-muted-foreground leading-relaxed max-w-md mx-auto mb-8">
                    A comprehensive clinical evaluation provides the clarity needed for confident, informed treatment decisions.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-navy text-primary-foreground font-body text-[11px] tracking-[0.25em] uppercase transition-all duration-300 hover:bg-navy/90"
                    >
                      Request Consultation
                      <ArrowRight size={14} strokeWidth={1.5} />
                    </Link>
                    <button
                      onClick={handleRestart}
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border/60 text-muted-foreground font-body text-[11px] tracking-[0.25em] uppercase transition-all duration-300 hover:border-navy/40 hover:text-navy"
                    >
                      Retake Assessment
                    </button>
                  </div>
                </div>

                {/* Disclaimer */}
                <p className="font-body text-[10px] text-muted-foreground/50 text-center mt-14 max-w-lg mx-auto leading-relaxed">
                  This self-assessment is for educational purposes only and does not constitute a clinical diagnosis, treatment plan, or professional recommendation. All treatment decisions require in-person evaluation by a qualified dental specialist.
                </p>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>
      <FooterSection />
    </>
  );
};

export default ClinicalAssessment;
