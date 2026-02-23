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

interface Pathway {
  title: string;
  titleItalic: string;
  description: string;
  link: string;
  linkLabel: string;
}

interface AssessmentResult {
  primary: Pathway;
  secondary: Pathway[];
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

const PATHWAYS: Record<string, Pathway> = {
  fullArch: {
    title: "Full-Arch",
    titleItalic: "Rehabilitation",
    description:
      "Based on your responses, comprehensive implant-supported rehabilitation may be the most appropriate area of clinical consideration. Full-arch solutions are designed to restore complete dental function and aesthetics with long-term biological stability.",
    link: "/full-arch-implants-new-jersey",
    linkLabel: "Explore Full-Arch Rehabilitation",
  },
  fullMouth: {
    title: "Full Mouth",
    titleItalic: "Reconstruction",
    description:
      "Your responses suggest that comprehensive full-mouth rehabilitation may be the most relevant treatment consideration. This approach addresses both functional limitations and structural instability through coordinated specialist care.",
    link: "/tooth-wear-rehabilitation",
    linkLabel: "Explore Full Mouth Reconstruction",
  },
  implants: {
    title: "Dental Implant",
    titleItalic: "Rehabilitation",
    description:
      "Based on your responses, dental implant rehabilitation appears to be a primary treatment consideration. Implants provide a biologically integrated, long-term solution for missing or failing teeth.",
    link: "/dental-implants-new-jersey",
    linkLabel: "Explore Dental Implants",
  },
  immediateImplants: {
    title: "Immediate Implant",
    titleItalic: "Placement",
    description:
      "Your clinical profile suggests that immediate implant placement at the time of extraction may be a relevant consideration, potentially reducing treatment stages and recovery time.",
    link: "/immediate-implant-rehabilitation",
    linkLabel: "Explore Immediate Implants",
  },
  veneers: {
    title: "Veneers & Smile",
    titleItalic: "Design",
    description:
      "Based on your responses, porcelain veneers or cosmetic reconstruction may be the most appropriate consideration to achieve your aesthetic goals with lasting structural integrity.",
    link: "/veneers-aesthetic-reconstruction",
    linkLabel: "Explore Veneers & Smile Design",
  },
  gumTissue: {
    title: "Gum & Soft Tissue",
    titleItalic: "Enhancement",
    description:
      "Soft tissue health is foundational to long-term treatment success. Clinical evaluation of gum and tissue conditions may be an important part of your care plan.",
    link: "/aesthetic-dentistry",
    linkLabel: "Explore Soft Tissue Procedures",
  },
  medicalComplex: {
    title: "Medically Complex",
    titleItalic: "Care",
    description:
      "Patients with systemic health considerations benefit from specialist coordination to ensure safe, predictable treatment outcomes.",
    link: "/maxillofacial-rehabilitation",
    linkLabel: "Explore Specialized Care",
  },
  consultation: {
    title: "Comprehensive",
    titleItalic: "Consultation",
    description:
      "A specialist consultation provides thorough clinical evaluation and personalized treatment discussion tailored to your unique dental health.",
    link: "/contact",
    linkLabel: "Schedule a Consultation",
  },
};

function getAssessmentResult(answers: Record<string, string>): AssessmentResult {
  // --- Score functional vs aesthetic severity ---
  const missingTeeth = answers["missing-teeth"] === "yes";
  const needsExtractions = answers["missing-teeth"] === "extractions";
  const failedWork = answers["failing-work"] === "yes";
  const failedWorkUnsure = answers["failing-work"] === "unsure";
  const chewingSevere = answers["chewing"] === "yes";
  const chewingSome = answers["chewing"] === "some";
  const smilePrimary = answers["smile-concern"] === "yes";
  const smileSecondary = answers["smile-concern"] === "some";
  const majorTreatment = answers["major-treatment"] === "yes" || answers["major-treatment"] === "second-opinion";
  const gumConcern = answers["gum-tissue"] === "yes" || answers["gum-tissue"] === "unsure";
  const medicalComplex = answers["medical-complexity"] === "yes" || answers["medical-complexity"] === "unsure";

  let functionalScore = 0;
  if (missingTeeth) functionalScore += 3;
  if (needsExtractions) functionalScore += 2;
  if (failedWork) functionalScore += 3;
  if (failedWorkUnsure) functionalScore += 1;
  if (chewingSevere) functionalScore += 3;
  if (chewingSome) functionalScore += 1;
  if (majorTreatment) functionalScore += 2;

  let aestheticScore = 0;
  if (smilePrimary) aestheticScore += 3;
  if (smileSecondary) aestheticScore += 1;
  if (gumConcern) aestheticScore += 1;

  const secondary: Pathway[] = [];
  let primary: Pathway;

  // --- Dominant pathway selection ---
  if (functionalScore >= 6 && majorTreatment && (missingTeeth || needsExtractions)) {
    // Severe functional + major treatment + missing teeth → Full-Arch
    primary = PATHWAYS.fullArch;
    secondary.push(PATHWAYS.implants);
  } else if (functionalScore >= 6 && majorTreatment) {
    // Severe functional + major treatment → Full Mouth Reconstruction
    primary = PATHWAYS.fullMouth;
    if (missingTeeth || needsExtractions) secondary.push(PATHWAYS.implants);
  } else if (missingTeeth || needsExtractions) {
    if (majorTreatment) {
      primary = PATHWAYS.fullArch;
    } else {
      primary = PATHWAYS.implants;
      secondary.push(PATHWAYS.immediateImplants);
    }
  } else if (functionalScore >= 4) {
    // Moderate functional issues without missing teeth
    primary = PATHWAYS.fullMouth;
  } else if (aestheticScore >= 2 && functionalScore <= 2) {
    // Primarily aesthetic concerns
    primary = PATHWAYS.veneers;
    if (gumConcern) secondary.push(PATHWAYS.gumTissue);
  } else if (gumConcern && functionalScore <= 1 && aestheticScore <= 1) {
    primary = PATHWAYS.gumTissue;
  } else {
    primary = PATHWAYS.consultation;
  }

  // Add medically complex as secondary when relevant
  if (medicalComplex && primary !== PATHWAYS.medicalComplex) {
    secondary.push(PATHWAYS.medicalComplex);
  }

  // Add aesthetic secondary if functional is primary and there are aesthetic concerns
  if (functionalScore > aestheticScore && aestheticScore >= 2 && primary !== PATHWAYS.veneers) {
    secondary.push(PATHWAYS.veneers);
  }

  // Deduplicate and limit secondary
  const seen = new Set([primary.link]);
  const uniqueSecondary = secondary.filter((s) => {
    if (seen.has(s.link)) return false;
    seen.add(s.link);
    return true;
  }).slice(0, 2);

  return { primary, secondary: uniqueSecondary };
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

  const result = step === "results" ? getAssessmentResult(answers) : null;

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
          {step === "results" && result && (
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
                    Primary treatment considerations have been identified. Clinical evaluation by a specialist is recommended to determine the most appropriate course of care.
                  </p>
                </div>

                {/* Primary Pathway */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.5 }}
                  className="border border-navy/20 rounded-sm p-10 md:p-12 mb-6"
                >
                  <p className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-4">
                    Primary Treatment Consideration
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl font-light text-navy mb-4">
                    {result.primary.title}{" "}
                    <span className="italic">{result.primary.titleItalic}</span>
                  </h3>
                  <p className="font-body text-[13px] text-muted-foreground leading-relaxed mb-8">
                    {result.primary.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center gap-3 px-14 py-[18px] bg-navy text-primary-foreground font-body text-[11px] tracking-[0.25em] uppercase transition-all duration-300 hover:bg-navy/90"
                    >
                      Schedule Consultation
                      <ArrowRight size={14} strokeWidth={1.5} />
                    </Link>
                    <Link
                      to={result.primary.link}
                      className="inline-flex items-center justify-center gap-2 px-10 py-[18px] border border-border/60 text-muted-foreground font-body text-[11px] tracking-[0.25em] uppercase transition-all duration-300 hover:border-navy/40 hover:text-navy"
                    >
                      {result.primary.linkLabel}
                    </Link>
                  </div>
                </motion.div>

                {/* Secondary Considerations */}
                {result.secondary.length > 0 && (
                  <div className="mt-12 mb-16">
                    <p className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-6">
                      Additional Considerations
                    </p>
                    <div className="space-y-4">
                      {result.secondary.map((sec, i) => (
                        <motion.div
                          key={sec.link}
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                          className="border border-border/40 rounded-sm p-7 md:p-8"
                        >
                          <h4 className="font-display text-lg md:text-xl font-light text-navy mb-2">
                            {sec.title}{" "}
                            <span className="italic">{sec.titleItalic}</span>
                          </h4>
                          <p className="font-body text-[12px] text-muted-foreground/70 leading-relaxed mb-4">
                            {sec.description}
                          </p>
                          <Link
                            to={sec.link}
                            className="inline-flex items-center gap-2 font-body text-[11px] tracking-[0.2em] uppercase text-navy/70 hover:text-navy transition-colors duration-300"
                          >
                            {sec.linkLabel}
                            <ArrowRight size={12} strokeWidth={1.5} />
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Restart */}
                <div className="text-center mt-14 pt-10 border-t border-border/30">
                  <button
                    onClick={handleRestart}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border/60 text-muted-foreground font-body text-[11px] tracking-[0.25em] uppercase transition-all duration-300 hover:border-navy/40 hover:text-navy"
                  >
                    Retake Assessment
                  </button>
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
