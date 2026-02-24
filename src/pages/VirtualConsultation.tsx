import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Upload, X, FileText, CheckCircle } from "lucide-react";
import SiteNavigation from "@/components/SiteNavigation";
import PageFooter from "@/components/PageFooter";
import { usePageSEO } from "@/hooks/usePageSEO";
import { supabase } from "@/integrations/supabase/client";

const PRIMARY_CONCERNS = [
  "Cosmetic Evaluation / Smile Design",
  "Dental Implants",
  "Full-Arch Rehabilitation",
  "Implant / Prosthetic Complication",
  "Second Opinion / Case Review",
];

const CLINICAL_SITUATIONS = [
  "Considering major treatment",
  "Existing complex dental work",
  "Prior implant or restorative complications",
  "Seeking cosmetic transformation",
  "Unsure / general concern",
];

const MAX_FILES = 5;
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
};

const VirtualConsultation = () => {
  usePageSEO({
    title: "Virtual Consultation | Board-Certified Prosthodontist NJ",
    description:
      "Request a specialist virtual consultation for treatment planning, cosmetic evaluations, implant concerns, or second opinions with a Board-Certified Prosthodontist.",
  });

  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [primaryConcern, setPrimaryConcern] = useState("");
  const [clinicalSituation, setClinicalSituation] = useState("");
  const [caseDescription, setCaseDescription] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(e.target.files || []);
    const valid = selected.filter((f) => f.size <= MAX_FILE_SIZE);
    setFiles((prev) => [...prev, ...valid].slice(0, MAX_FILES));
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        resolve(result.split(",")[1]);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return;
    setFormState("submitting");

    try {
      let fileNames: string[] = [];
      let fileContents: string[] = [];
      let fileMimeTypes: string[] = [];

      if (files.length > 0) {
        for (const file of files) {
          const base64 = await fileToBase64(file);
          fileNames.push(file.name);
          fileContents.push(base64);
          fileMimeTypes.push(file.type);
        }
      }

      const { data, error } = await supabase.functions.invoke("send-virtual-consultation", {
        body: {
          name: name.trim(),
          email: email.trim(),
          primaryConcern,
          clinicalSituation,
          caseDescription: caseDescription.trim(),
          pageUrl: window.location.href,
          honeypot,
          fileNames: fileNames.length > 0 ? fileNames : undefined,
          fileContents: fileContents.length > 0 ? fileContents : undefined,
          fileMimeTypes: fileMimeTypes.length > 0 ? fileMimeTypes : undefined,
        },
      });

      if (error) throw error;
      if (!data?.success) throw new Error(data?.error || "Submission failed");
      setFormState("success");
    } catch (err) {
      console.error("Virtual consultation submission error:", err);
      setFormState("error");
    }
  };

  if (formState === "success") {
    return (
      <main className="bg-background">
        <SiteNavigation />
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-8 bg-background min-h-screen flex items-center">
          <div className="luxury-container max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="w-12 h-px bg-navy mx-auto mb-12" />

              <h1 className="font-display text-3xl md:text-5xl font-light tracking-tight text-navy leading-[0.95] mb-10">
                Consultation Request
                <br />
                <span className="italic font-light">Received</span>
              </h1>

              <div className="space-y-6 max-w-lg mx-auto mb-12">
                <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
                  Thank you for submitting your Virtual Consultation request.
                </p>
                <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
                  Each request is personally reviewed to ensure appropriate case preparation and clinical suitability.
                </p>
                <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed">
                  Our office will contact you shortly regarding next steps.
                </p>
              </div>

              <div className="w-8 h-px bg-border mx-auto mb-8" />

              <p className="font-body text-xs text-charcoal-light/50 font-light tracking-wide leading-relaxed mb-16">
                Virtual consultations are offered in limited weekly capacity.
              </p>
            </motion.div>

            {/* Post-Consultation Outcome Guidance */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="border border-border/40 p-8 md:p-12 mb-16"
            >
              <p className="font-body text-xs tracking-[0.2em] uppercase text-charcoal-light mb-8 text-center">
                Consultation Outcomes
              </p>

              <div className="space-y-8">
                <div className="border-l-2 border-navy/30 pl-6">
                  <p className="font-body text-xs tracking-[0.15em] uppercase text-navy mb-2">Suitable Candidate</p>
                  <p className="font-body text-sm text-charcoal-light font-light leading-relaxed">
                    Following clinical review, patients identified as suitable candidates will receive guidance on proceeding with a comprehensive in-office evaluation.
                  </p>
                </div>

                <div className="border-l-2 border-border pl-6">
                  <p className="font-body text-xs tracking-[0.15em] uppercase text-charcoal-light mb-2">Requires Further Evaluation</p>
                  <p className="font-body text-sm text-charcoal-light font-light leading-relaxed">
                    In certain cases, additional diagnostic information or clinical examination may be required before a treatment pathway can be confirmed.
                  </p>
                </div>

                <div className="border-l-2 border-border pl-6">
                  <p className="font-body text-xs tracking-[0.15em] uppercase text-charcoal-light mb-2">Alternative Care Pathway</p>
                  <p className="font-body text-sm text-charcoal-light font-light leading-relaxed">
                    When a case falls outside the scope of specialist prosthodontic care, appropriate referral guidance will be provided.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Next Step CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center"
            >
              <p className="font-body text-xs tracking-[0.2em] uppercase text-charcoal-light mb-6">
                Next Step: Clinical Evaluation
              </p>
              <Link
                to="/clinical-assessment"
                className="inline-block px-12 py-4 bg-navy text-primary-foreground font-body text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:bg-navy/90"
              >
                Schedule Clinical Evaluation
              </Link>
              <div className="mt-8">
                <Link
                  to="/"
                  className="font-body text-xs tracking-[0.15em] uppercase text-charcoal-light/60 hover:text-navy transition-colors"
                >
                  Return Home
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
        <PageFooter />
      </main>
    );
  }

  return (
    <main className="bg-background">
      <SiteNavigation />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-8 bg-background">
        <div className="luxury-container text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-body text-xs tracking-[0.35em] uppercase text-charcoal-light mb-8"
          >
            Board-Certified Prosthodontist · Specialist Evaluation
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-navy leading-[0.95] mb-10"
          >
            Virtual
            <br />
            <span className="italic font-light">Consultation</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed max-w-xl mx-auto"
          >
            A structured specialist evaluation for treatment planning discussions, cosmetic evaluations, implant-related concerns, and second opinions.
          </motion.p>
        </div>
      </section>

      <div className="luxury-container px-6 md:px-8">
        <div className="w-12 h-px bg-navy mx-auto" />
      </div>

      {/* Disclaimers */}
      <section className="py-16 md:py-20 px-6 md:px-8 bg-background">
        <div className="luxury-container max-w-3xl mx-auto">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="space-y-8">
            <div className="border border-border/40 p-8 md:p-10">
              <p className="font-body text-xs tracking-[0.2em] uppercase text-charcoal-light mb-5">
                Consultation Scope
              </p>
              <p className="font-body text-sm text-charcoal-light font-light leading-relaxed mb-4">
                Virtual consultations are intended for treatment planning discussions, cosmetic evaluations, implant-related concerns, and second opinions.
              </p>
              <p className="font-body text-sm text-charcoal-light font-light leading-relaxed">
                Virtual consultations are not designed for emergency care or minor dental concerns.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
              <div className="flex-1 border border-border/40 p-8 md:p-10">
                <p className="font-body text-xs tracking-[0.2em] uppercase text-charcoal-light mb-5">
                  Virtual Consultation Fee
                </p>
                <p className="font-display text-2xl md:text-3xl font-light text-navy mb-6">$195</p>
                <p className="font-body text-sm text-charcoal-light font-light leading-relaxed mb-4">
                  This structured consultation is designed for treatment planning discussions, cosmetic evaluations, implant considerations, and second opinions.
                </p>
                <p className="font-body text-sm text-charcoal-light font-light leading-relaxed">
                  The consultation fee is applied toward treatment when pursued.
                </p>
              </div>
              <div className="flex-1 border border-border/40 p-8">
                <p className="font-body text-xs tracking-[0.2em] uppercase text-charcoal-light mb-4">
                  Availability
                </p>
                <p className="font-body text-sm text-charcoal-light font-light leading-relaxed">
                  Virtual consultations are offered in limited weekly capacity to ensure adequate clinical review and case preparation.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Consultation Fee Policy */}
      <section className="py-12 md:py-16 px-6 md:px-8 bg-background">
        <div className="luxury-container max-w-3xl mx-auto">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }}>
            <div className="border border-border/40 p-8 md:p-10">
              <p className="font-body text-xs tracking-[0.2em] uppercase text-charcoal-light mb-5">
                Consultation Fee Policy
              </p>
              <p className="font-body text-sm text-charcoal-light font-light leading-relaxed mb-4">
                The Virtual Consultation Fee covers professional time, clinical review, and evaluation.
              </p>
              <p className="font-body text-sm text-charcoal-light font-light leading-relaxed">
                In cases where a virtual consultation is not clinically appropriate, the fee may be applied toward an in-person clinical evaluation.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="luxury-container px-6 md:px-8">
        <div className="w-12 h-px bg-navy mx-auto" />
      </div>

      {/* Form */}
      <section className="section-padding bg-background">
        <div className="luxury-container max-w-2xl mx-auto">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }}>
            <p className="font-body text-xs tracking-[0.2em] uppercase text-charcoal-light mb-10 text-center">
              Request Virtual Consultation
            </p>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Honeypot */}
              <div className="absolute opacity-0 pointer-events-none" aria-hidden="true" tabIndex={-1}>
                <input type="text" name="website" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} autoComplete="off" tabIndex={-1} />
              </div>

              {/* Name */}
              <div>
                <label className="font-body text-xs tracking-[0.15em] uppercase text-charcoal-light block mb-3">
                  Full Name <span className="text-navy">*</span>
                </label>
                <input
                  type="text"
                  required
                  maxLength={100}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-transparent border-b border-divider py-3 font-body text-sm text-charcoal font-light focus:outline-none focus:border-navy transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label className="font-body text-xs tracking-[0.15em] uppercase text-charcoal-light block mb-3">
                  Email Address <span className="text-navy">*</span>
                </label>
                <input
                  type="email"
                  required
                  maxLength={255}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border-b border-divider py-3 font-body text-sm text-charcoal font-light focus:outline-none focus:border-navy transition-colors"
                />
              </div>

              {/* Primary Concern */}
              <div>
                <label className="font-body text-xs tracking-[0.15em] uppercase text-charcoal-light block mb-3">
                  Primary Concern <span className="text-navy">*</span>
                </label>
                <select
                  required
                  value={primaryConcern}
                  onChange={(e) => setPrimaryConcern(e.target.value)}
                  className="w-full bg-transparent border-b border-divider py-3 font-body text-sm text-charcoal font-light focus:outline-none focus:border-navy transition-colors appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select primary concern</option>
                  {PRIMARY_CONCERNS.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              {/* Clinical Situation */}
              <div>
                <label className="font-body text-xs tracking-[0.15em] uppercase text-charcoal-light block mb-3">
                  Which best describes your situation? <span className="text-navy">*</span>
                </label>
                <div className="space-y-3 mt-4">
                  {CLINICAL_SITUATIONS.map((s) => (
                    <label
                      key={s}
                      onClick={() => setClinicalSituation(s)}
                      className={`flex items-center gap-4 p-4 border cursor-pointer transition-all duration-300 ${
                        clinicalSituation === s
                          ? "border-navy bg-navy/[0.03]"
                          : "border-border/40 hover:border-border"
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                          clinicalSituation === s ? "border-navy" : "border-border"
                        }`}
                      >
                        {clinicalSituation === s && (
                          <div className="w-2 h-2 rounded-full bg-navy" />
                        )}
                      </div>
                      <span className="font-body text-sm text-charcoal font-light">{s}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Case Description */}
              <div>
                <label className="font-body text-xs tracking-[0.15em] uppercase text-charcoal-light block mb-3">
                  Case Description <span className="text-navy">*</span>
                </label>
                <textarea
                  rows={5}
                  required
                  maxLength={3000}
                  placeholder="Please describe your clinical concerns, treatment history, and any relevant details."
                  value={caseDescription}
                  onChange={(e) => setCaseDescription(e.target.value)}
                  className="w-full bg-transparent border-b border-divider py-3 font-body text-sm text-charcoal font-light focus:outline-none focus:border-navy transition-colors resize-none"
                />
              </div>

              {/* Clinical Photo Guidance */}
              <div className="border border-border/40 p-8 md:p-10">
                <p className="font-body text-xs tracking-[0.2em] uppercase text-charcoal-light mb-5">
                  Clinical Photo Guidance
                </p>
                <p className="font-body text-sm text-charcoal-light font-light leading-relaxed mb-6">
                  If clinical records are unavailable, photographs may assist consultation clarity.
                </p>
                <div className="mb-6">
                  <p className="font-body text-xs tracking-[0.15em] uppercase text-charcoal-light mb-3">
                    Recommended Views
                  </p>
                  <ul className="space-y-2">
                    {["Natural smile", "Teeth together (bite)", "Upper teeth", "Lower teeth", "Side views"].map((view) => (
                      <li key={view} className="font-body text-sm text-charcoal font-light flex items-center gap-3">
                        <div className="w-1 h-1 rounded-full bg-navy/40 shrink-0" />
                        {view}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-body text-xs tracking-[0.15em] uppercase text-charcoal-light mb-3">
                    Instructions
                  </p>
                  <ul className="space-y-2">
                    {["Use natural lighting", "Avoid filters or edited images", "Maintain clear visibility"].map((note) => (
                      <li key={note} className="font-body text-xs text-charcoal-light/70 font-light flex items-center gap-3">
                        <div className="w-1 h-1 rounded-full bg-border shrink-0" />
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* File Upload */}
              <div>
                <label className="font-body text-xs tracking-[0.15em] uppercase text-charcoal-light block mb-3">
                  Upload Scans or Radiographs
                  <span className="normal-case tracking-normal text-charcoal-light/60 ml-2">(recommended)</span>
                </label>
                <p className="font-body text-xs text-charcoal-light/50 font-light mb-4">
                  JPEG, PNG, WebP, or PDF · Up to 10 MB per file · Maximum {MAX_FILES} files
                </p>

                {files.length < MAX_FILES && (
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="flex items-center gap-3 px-6 py-3.5 border border-dashed border-border hover:border-navy/40 transition-colors duration-300 group"
                  >
                    <Upload size={16} strokeWidth={1.2} className="text-charcoal-light group-hover:text-navy transition-colors" />
                    <span className="font-body text-xs tracking-[0.1em] uppercase text-charcoal-light group-hover:text-navy transition-colors">
                      Select Files
                    </span>
                  </button>
                )}
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept=".jpg,.jpeg,.png,.webp,.pdf"
                  onChange={handleFileChange}
                  className="hidden"
                />

                {files.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {files.map((file, i) => (
                      <div key={i} className="flex items-center justify-between py-2 px-4 bg-muted/30 border border-border/30">
                        <div className="flex items-center gap-3 min-w-0">
                          <FileText size={14} strokeWidth={1.2} className="text-charcoal-light shrink-0" />
                          <span className="font-body text-xs text-charcoal font-light truncate">
                            {file.name}
                          </span>
                          <span className="font-body text-[10px] text-charcoal-light/50 shrink-0">
                            {(file.size / 1024 / 1024).toFixed(1)} MB
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFile(i)}
                          className="p-1 text-charcoal-light hover:text-navy transition-colors"
                        >
                          <X size={14} strokeWidth={1.5} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Disclaimer */}
              <div className="border-t border-border/30 pt-8">
                <p className="font-body text-xs text-charcoal-light/50 font-light leading-relaxed">
                  Virtual consultations are reviewed prior to confirmation. A clinical examination may be required for definitive diagnosis. By submitting this form, you consent to being contacted regarding your consultation request.
                </p>
              </div>

              {formState === "error" && (
                <p className="font-body text-sm text-red-600 font-light">
                  Something went wrong. Please email{" "}
                  <a href="mailto:drparmardds@gmail.com" className="underline">drparmardds@gmail.com</a>
                </p>
              )}

              <button
                type="submit"
                disabled={formState === "submitting" || !primaryConcern || !clinicalSituation}
                className="w-full sm:w-auto inline-block px-14 py-4 bg-navy text-primary-foreground font-body text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:bg-navy/90 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formState === "submitting" ? "Submitting..." : "Reserve Consultation"}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <PageFooter />
    </main>
  );
};

export default VirtualConsultation;
