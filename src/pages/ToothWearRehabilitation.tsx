import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import SiteNavigation from "@/components/SiteNavigation";
import PageCTA from "@/components/PageCTA";
import PageFooter from "@/components/PageFooter";
import heroImage from "@/assets/hero-tooth-wear.png";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

const ToothWearRehabilitation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Tooth Wear & Bite Rehabilitation | Dr. Akshay Parmar";
    return () => { document.title = "Dr. Akshay Parmar | Board-Certified Prosthodontist in New Jersey"; };
  }, []);

  return (
    <main className="bg-background">
      <SiteNavigation />

      {/* ═══════ HERO ═══════ */}
      <section className="relative pt-24 md:pt-0 min-h-[85vh] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[85vh]">
          <div className="relative lg:col-span-5 min-h-[50vh] lg:min-h-full overflow-hidden">
            <motion.img
              src={heroImage}
              alt="Night guard for bite rehabilitation"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.4 }}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/20 lg:to-background/40" />
          </div>

          <div className="lg:col-span-7 flex items-center px-8 md:px-12 lg:px-20 xl:px-28 py-20 lg:py-0 lg:pt-16">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="max-w-lg"
            >
              <p className="font-body text-[10px] tracking-[0.4em] uppercase text-charcoal-light mb-6">
                Aesthetic Dentistry
              </p>

              <h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-light tracking-tight text-navy leading-[0.93] mb-8">
                Tooth Wear &amp; Bite
                <br />
                <span className="italic font-light">Rehabilitation</span>
              </h1>

              <div className="w-10 h-px bg-navy mb-8" />

              <p className="font-body text-sm md:text-[15px] text-charcoal-light font-light leading-[1.85] mb-4">
                Teeth naturally change over time, especially in patients who clench or grind.
              </p>

              <p className="font-body text-sm md:text-[15px] text-charcoal-light font-light leading-[1.85] mb-4">
                Excessive wear can affect appearance, sensitivity, comfort, and long-term stability.
              </p>

              <p className="font-body text-sm md:text-[15px] text-charcoal-light font-light leading-[1.85] mb-4">
                Treatment focuses on restoring structural integrity, protecting remaining tooth structure, and re-establishing a healthy, functional bite.
              </p>

              <p className="font-body text-sm md:text-[15px] text-charcoal-light font-light leading-[1.85]">
                The objective is preservation, function, and longevity.
              </p>

              <div className="mt-10">
                <a href="/patient-education" className="inline-block px-9 py-4 bg-navy font-body text-[11px] tracking-[0.25em] uppercase transition-all duration-300 hover:opacity-90" style={{ color: "hsl(40 20% 98%)" }}>
                  Learn More
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════ UNDERSTANDING WEAR ═══════ */}
      <section className="py-24 md:py-32 px-6 md:px-8" style={{ background: "linear-gradient(180deg, hsl(40 10% 95%) 0%, hsl(40 12% 93%) 100%)" }}>
        <div className="luxury-container max-w-3xl">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="text-center">
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-charcoal-light mb-6">Understanding the Condition</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-navy leading-[0.95] mb-10">
              Why Teeth <span className="italic">Wear</span>
            </h2>
            <p className="font-body text-sm md:text-[15px] text-charcoal-light font-light leading-[1.85] mb-6 max-w-xl mx-auto">
              Tooth wear is a gradual process that often goes unnoticed until significant structure has been lost. Contributing factors include:
            </p>
            <div className="max-w-sm mx-auto space-y-8 mb-12">
              {["Clenching and grinding (bruxism)", "Acidic dietary habits", "Natural aging and attrition", "Previous dental work breakdown", "Bite misalignment"].map((item, i) => (
                <motion.div key={i} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.07 }} className="text-center">
                  <p className="font-display text-lg md:text-xl font-light text-charcoal tracking-tight">{item}</p>
                </motion.div>
              ))}
            </div>
            <p className="font-body text-sm md:text-[15px] text-charcoal-light font-light leading-[1.85] max-w-xl mx-auto">
              Early intervention preserves more natural tooth structure and simplifies treatment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════ TREATMENT APPROACH ═══════ */}
      <section className="py-24 md:py-32 px-6 md:px-8">
        <div className="luxury-container max-w-3xl">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="text-center">
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-charcoal-light mb-6">Treatment Philosophy</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-navy leading-[0.95] mb-10">
              Restoring Structure, <span className="italic">Protecting Biology</span>
            </h2>
            <div className="max-w-xl mx-auto space-y-6 text-left">
              {[
                { title: "Comprehensive Assessment", desc: "A detailed evaluation of wear patterns, bite dynamics, and contributing habits informs every treatment decision." },
                { title: "Conservative Restoration", desc: "Treatment prioritizes preserving healthy tooth structure while rebuilding what has been lost." },
                { title: "Bite Stabilization", desc: "Re-establishing proper occlusal relationships prevents further damage and promotes comfort." },
                { title: "Protective Planning", desc: "Night guards and maintenance protocols safeguard long-term results." },
              ].map((step, i) => (
                <motion.div key={i} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.08 }} className="border-b border-divider pb-6">
                  <h3 className="font-display text-xl font-light text-navy mb-2">{step.title}</h3>
                  <p className="font-body text-sm text-charcoal-light font-light leading-[1.85]">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════ CLOSING ═══════ */}
      <section className="py-20 md:py-28 px-6 md:px-8" style={{ background: "linear-gradient(180deg, hsl(40 10% 95%) 0%, hsl(40 12% 93%) 100%)" }}>
        <div className="luxury-container max-w-2xl text-center">
          <motion.p {...fadeUp} transition={{ duration: 0.8 }} className="font-display text-2xl md:text-3xl font-light text-navy italic leading-snug">
            "Preservation is the foundation of every lasting restoration."
          </motion.p>
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

      <PageCTA
        title="Protect and Restore Your Smile"
        description="Treatment begins with a thorough assessment of your bite, wear patterns, and long-term goals."
      />
      <PageFooter />
    </main>
  );
};

export default ToothWearRehabilitation;
