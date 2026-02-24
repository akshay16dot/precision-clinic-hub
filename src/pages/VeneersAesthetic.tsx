import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import SiteNavigation from "@/components/SiteNavigation";
import PageCTA from "@/components/PageCTA";
import PageFooter from "@/components/PageFooter";
import { usePageSEO } from "@/hooks/usePageSEO";
import case1Before from "@/assets/veneer-case1-before.png";
import case1After from "@/assets/veneer-case1-after.png";
import case2Before from "@/assets/veneer-case2-before.png";
import case2After from "@/assets/veneer-case2-after.png";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

/* ─── Before / After Slider ─── */
const CompareSlider = ({ before, after, label }: { before: string; after: string; label: string }) => {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const update = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pct = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    setPos(pct);
  };

  const onPointerDown = () => { dragging.current = true; };
  const onPointerUp = () => { dragging.current = false; };
  const onPointerMove = (e: React.PointerEvent) => { if (dragging.current) update(e.clientX); };

  return (
    <div className="text-center">
      <div
        ref={containerRef}
        className="relative aspect-[4/3] overflow-hidden cursor-ew-resize select-none touch-none"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
        onPointerMove={onPointerMove}
        onClick={(e) => update(e.clientX)}
      >
        {/* After (full) */}
        <img src={after} alt="After treatment" className="absolute inset-0 w-full h-full object-cover" />
        {/* Before (clipped) */}
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <img src={before} alt="Before treatment" className="w-full h-full object-cover" />
        </div>
        {/* Divider */}
        <div className="absolute top-0 bottom-0 w-px bg-white/80" style={{ left: `${pos}%` }} />
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white/90 shadow-lg flex items-center justify-center"
          style={{ left: `${pos}%` }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M5 3L2 8l3 5M11 3l3 5-3 5" stroke="hsl(215 35% 20%)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
        {/* Labels */}
        <span className="absolute top-4 left-4 font-body text-[10px] tracking-[0.3em] uppercase text-white/70">Before</span>
        <span className="absolute top-4 right-4 font-body text-[10px] tracking-[0.3em] uppercase text-white/70">After</span>
      </div>
      <p className="font-body text-xs text-charcoal-light font-light mt-4 tracking-wide">{label}</p>
    </div>
  );
};

/* ─── Section helpers ─── */
const SectionLabel = ({ children }: { children: string }) => (
  <p className="font-body text-[10px] tracking-[0.35em] uppercase text-charcoal-light mb-6">{children}</p>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-navy leading-[0.95] mb-10">{children}</h2>
);

const VeneersAesthetic = () => {
  usePageSEO({
    title: "Porcelain Veneers & Smile Reconstruction | Prosthodontist | Hamilton Township NJ",
    description: "Precision-driven porcelain veneers and smile reconstruction treatments designed for facial harmony, functional stability, and long-term aesthetics by a board-certified prosthodontist serving Hamilton Township NJ, Princeton, Jersey City, and surrounding New Jersey areas.",
  });

  return (
    <main className="bg-background">
      <SiteNavigation />

      {/* ═══════ HERO ═══════ */}
      <section className="relative pt-36 md:pt-0 hero-min-h overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 hero-min-h">
          {/* Left: Compare slider */}
          <div className="relative lg:col-span-5 min-h-[50vh] lg:min-h-full flex items-center justify-center p-8 lg:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.1 }}
              className="w-full max-w-md"
            >
              <CompareSlider before={case1Before} after={case1After} label="Conservative veneer reconstruction" />
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
              <p className="font-body text-[10px] tracking-[0.4em] uppercase text-charcoal-light mb-6">
                Veneers &amp; Aesthetic Reconstruction
              </p>

              <h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-light tracking-tight text-navy leading-[0.93] mb-8">
                Refining Smiles.
                <br />
                <span className="italic font-light">Preserving Biology.</span>
              </h1>

              <div className="w-10 h-px bg-navy mb-8" />

              <p className="font-body text-sm md:text-[15px] text-charcoal-light font-light leading-[1.85] mb-4">
                Veneers are not simply about making teeth look whiter. They are about reshaping form, proportion, symmetry, and harmony while protecting long-term tooth structure.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <a href="/contact" className="inline-block px-9 py-4 bg-navy font-body text-[11px] tracking-[0.25em] uppercase transition-all duration-300 hover:opacity-90" style={{ color: "hsl(40 20% 98%)" }}>
                  Schedule a Consultation
                </a>
                <a href="#transformations" className="inline-block px-9 py-4 border border-divider text-navy font-body text-[11px] tracking-[0.25em] uppercase transition-all duration-300 hover:border-navy">
                  View Smile Transformations
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════ WHAT ARE VENEERS ═══════ */}
      <section className="py-24 md:py-32 px-6 md:px-8" style={{ background: "linear-gradient(180deg, hsl(40 10% 95%) 0%, hsl(40 12% 93%) 100%)" }}>
        <div className="luxury-container max-w-3xl">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="text-center">
            <SectionLabel>Understanding Treatment</SectionLabel>
            <SectionTitle>What Are <span className="italic">Veneers?</span></SectionTitle>
            <p className="font-body text-sm md:text-[15px] text-charcoal-light font-light leading-[1.85] mb-10">
              Veneers are ultra-thin custom restorations bonded to the front surface of teeth. They are designed to improve:
            </p>
            <div className="max-w-md mx-auto space-y-3 mb-10">
              {["Tooth shape", "Tooth size", "Color", "Alignment appearance", "Smile symmetry"].map((item, i) => (
                <motion.p key={i} {...fadeUp} transition={{ duration: 0.4, delay: i * 0.05 }} className="font-display text-lg font-light text-charcoal tracking-tight border-b border-divider pb-3">
                  {item}
                </motion.p>
              ))}
            </div>
            <p className="font-body text-sm md:text-[15px] text-charcoal-light font-light leading-[1.85] max-w-xl mx-auto">
              Unlike aggressive crowns, veneers allow a highly conservative approach focused on preserving natural tooth biology whenever possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════ WHEN RECOMMENDED ═══════ */}
      <section className="py-24 md:py-32 px-6 md:px-8">
        <div className="luxury-container max-w-3xl">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="text-center">
            <SectionLabel>Indications</SectionLabel>
            <SectionTitle>When Are Veneers <span className="italic">Recommended?</span></SectionTitle>
            <p className="font-body text-sm md:text-[15px] text-charcoal-light font-light leading-[1.85] mb-10">
              Veneers may be appropriate for patients seeking correction of:
            </p>
            <div className="max-w-md mx-auto space-y-3 mb-10">
              {["Discolored teeth", "Chipped or worn teeth", "Uneven tooth shapes", "Minor spacing issues", "Smile asymmetry"].map((item, i) => (
                <motion.p key={i} {...fadeUp} transition={{ duration: 0.4, delay: i * 0.05 }} className="font-display text-lg font-light text-charcoal tracking-tight border-b border-divider pb-3">
                  {item}
                </motion.p>
              ))}
            </div>
            <p className="font-body text-sm md:text-[15px] text-charcoal-light font-light leading-[1.85] max-w-xl mx-auto">
              Every case is evaluated through facial analysis, bite dynamics, and structural integrity, not just visual appearance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════ PROSTHODONTIC APPROACH ═══════ */}
      <section className="py-24 md:py-32 px-6 md:px-8" style={{ background: "linear-gradient(180deg, hsl(40 10% 95%) 0%, hsl(40 12% 93%) 100%)" }}>
        <div className="luxury-container max-w-3xl">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="text-center">
            <SectionLabel>Specialist Philosophy</SectionLabel>
            <SectionTitle>A Prosthodontic Approach <span className="italic">to Veneers</span></SectionTitle>
            <p className="font-body text-sm md:text-[15px] text-charcoal-light font-light leading-[1.85] mb-10 max-w-xl mx-auto">
              As a board-certified prosthodontist, Dr. Akshay Parmar approaches veneers differently from traditional cosmetic workflows. Treatment decisions are guided by:
            </p>
            <div className="max-w-sm mx-auto space-y-8">
              {["Bite stability", "Functional longevity", "Tooth preservation", "Tissue harmony", "Long-term predictability"].map((item, i) => (
                <motion.div key={i} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.07 }} className="text-center">
                  <p className="font-display text-lg md:text-xl font-light text-charcoal tracking-tight">{item}</p>
                </motion.div>
              ))}
            </div>
            <p className="font-body text-sm md:text-[15px] text-charcoal-light font-light leading-[1.85] mt-12 max-w-xl mx-auto">
              This philosophy ensures veneers are not only aesthetic, but biologically and mechanically stable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════ STABLE PROTOCOL™ ═══════ */}
      <section className="py-24 md:py-32 px-6 md:px-8">
        <div className="luxury-container max-w-3xl">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="text-center">
            <SectionLabel>Methodology</SectionLabel>
            <SectionTitle>Precision Through the <span className="italic">STABLE Protocol™</span></SectionTitle>
            <p className="font-body text-sm md:text-[15px] text-charcoal-light font-light leading-[1.85] mb-10 max-w-xl mx-auto">
              Smile reconstruction requires more than artistic judgment. Dr. Parmar applies principles from the STABLE Protocol™, a biologically driven treatment philosophy emphasizing:
            </p>
            <div className="max-w-sm mx-auto space-y-8">
              {["Structural integrity", "Occlusal stability", "Tissue preservation", "Predictable longevity"].map((item, i) => (
                <motion.div key={i} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.07 }} className="text-center">
                  <p className="font-display text-lg md:text-xl font-light text-charcoal tracking-tight">{item}</p>
                </motion.div>
              ))}
            </div>
            <p className="font-body text-sm md:text-[15px] text-charcoal-light font-light leading-[1.85] mt-12 max-w-xl mx-auto">
              This structured approach minimizes future complications while optimizing aesthetic outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════ SMILE TRANSFORMATIONS ═══════ */}
      <section id="transformations" className="py-24 md:py-32 px-6 md:px-8" style={{ background: "linear-gradient(180deg, hsl(40 10% 95%) 0%, hsl(40 12% 93%) 100%)" }}>
        <div className="luxury-container max-w-4xl">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="text-center mb-16">
            <SectionLabel>Clinical Outcomes</SectionLabel>
            <SectionTitle>Smile <span className="italic">Transformations</span></SectionTitle>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <motion.div {...fadeUp} transition={{ duration: 0.7 }}>
              <CompareSlider before={case1Before} after={case1After} label="Conservative veneer-based reconstruction designed to improve symmetry, proportion, and smile harmony." />
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.15 }}>
              <CompareSlider before={case2Before} after={case2After} label="Conservative veneer-based reconstruction restoring natural form, alignment, and tissue harmony." />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════ WHY PRECISION MATTERS ═══════ */}
      <section className="py-24 md:py-32 px-6 md:px-8">
        <div className="luxury-container max-w-3xl">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="text-center">
            <SectionLabel>Clinical Standard</SectionLabel>
            <SectionTitle>Why Precision <span className="italic">Matters</span></SectionTitle>
            <p className="font-body text-sm md:text-[15px] text-charcoal-light font-light leading-[1.85] mb-10 max-w-xl mx-auto">
              Veneers influence far more than appearance. Improper planning can affect:
            </p>
            <div className="max-w-sm mx-auto space-y-8 mb-12">
              {["Bite function", "Tooth health", "Longevity", "Structural durability"].map((item, i) => (
                <motion.div key={i} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.07 }} className="text-center">
                  <p className="font-display text-lg md:text-xl font-light text-charcoal tracking-tight">{item}</p>
                </motion.div>
              ))}
            </div>
            <p className="font-body text-sm md:text-[15px] text-charcoal-light font-light leading-[1.85] max-w-xl mx-auto">
              Specialist-level evaluation ensures restorations integrate seamlessly with biology, mechanics, and aesthetics.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Patient Guide Link */}
      <section className="py-12 md:py-16 px-6 md:px-8 bg-background">
        <div className="luxury-container text-center">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }}>
            <Link
              to="/guide/veneers"
              className="inline-block font-body text-[10px] tracking-[0.25em] uppercase text-navy border-b border-navy/30 pb-0.5 hover:border-navy transition-colors"
            >
              Learn About the Process
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <PageCTA
        title="A Smile Designed for Long-Term Stability"
        description="Every smile is unique. Treatment begins with comprehensive evaluation, digital planning, and biologically respectful design."
      />
      <PageFooter />
    </main>
  );
};

export default VeneersAesthetic;
