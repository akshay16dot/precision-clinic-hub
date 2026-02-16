import { motion } from "framer-motion";
import { useEffect } from "react";
import PageNavigation from "@/components/PageNavigation";
import PageCTA from "@/components/PageCTA";
import PageFooter from "@/components/PageFooter";
import heroImage from "@/assets/hero-smile-design.png";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

const SmileDesign = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Smile Design | Dr. Akshay Parmar";
    return () => { document.title = "Dr. Akshay Parmar | Board-Certified Prosthodontist in New Jersey"; };
  }, []);

  return (
    <main className="bg-background">
      <PageNavigation />

      {/* ═══════ HERO ═══════ */}
      <section className="relative pt-24 md:pt-0 min-h-[85vh] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[85vh]">
          {/* Left: Image */}
          <div className="relative lg:col-span-5 min-h-[50vh] lg:min-h-full overflow-hidden">
            <motion.img
              src={heroImage}
              alt="Digital smile design scanning"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.4 }}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/20 lg:to-background/40" />
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
                Aesthetic Dentistry
              </p>

              <h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-light tracking-tight text-navy leading-[0.93] mb-8">
                Smile
                <br />
                <span className="italic font-light">Design</span>
              </h1>

              <div className="w-10 h-px bg-navy mb-8" />

              <p className="font-body text-sm md:text-[15px] text-charcoal-light font-light leading-[1.85] mb-4">
                Your smile is not simply treated. It is carefully designed.
              </p>

              <p className="font-body text-sm md:text-[15px] text-charcoal-light font-light leading-[1.85] mb-4">
                Using advanced digital technology, we analyze facial proportions, tooth shape, symmetry, and function to create a smile that looks natural, balanced, and timeless.
              </p>

              <p className="font-body text-sm md:text-[15px] text-charcoal-light font-light leading-[1.85] mb-4">
                Every detail is planned before treatment begins, allowing patients to visualize potential outcomes with precision.
              </p>

              <p className="font-body text-sm md:text-[15px] text-charcoal-light font-light leading-[1.85]">
                The goal is harmony, not artificial perfection.
              </p>

              <div className="mt-10">
                <a href="/contact" className="inline-block px-9 py-4 bg-navy font-body text-[11px] tracking-[0.25em] uppercase transition-all duration-300 hover:opacity-90" style={{ color: "hsl(40 20% 98%)" }}>
                  Schedule a Consultation
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════ APPROACH ═══════ */}
      <section className="py-24 md:py-32 px-6 md:px-8" style={{ background: "linear-gradient(180deg, hsl(40 10% 95%) 0%, hsl(40 12% 93%) 100%)" }}>
        <div className="luxury-container max-w-3xl">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="text-center">
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-charcoal-light mb-6">Our Approach</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-navy leading-[0.95] mb-10">
              Comprehensive Aesthetic <span className="italic">Planning</span>
            </h2>
            <p className="font-body text-sm md:text-[15px] text-charcoal-light font-light leading-[1.85] mb-6 max-w-xl mx-auto">
              Smile design begins with understanding the patient as a whole, not just the teeth. Every treatment plan is informed by:
            </p>
            <div className="max-w-sm mx-auto space-y-8 mb-12">
              {["Facial proportion analysis", "Digital smile visualization", "Functional bite evaluation", "Material selection planning", "Long-term stability assessment"].map((item, i) => (
                <motion.div key={i} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.07 }} className="text-center">
                  <p className="font-display text-lg md:text-xl font-light text-charcoal tracking-tight">{item}</p>
                </motion.div>
              ))}
            </div>
            <p className="font-body text-sm md:text-[15px] text-charcoal-light font-light leading-[1.85] max-w-xl mx-auto">
              This structured methodology ensures aesthetic outcomes are predictable, functional, and enduring.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════ WHAT TO EXPECT ═══════ */}
      <section className="py-24 md:py-32 px-6 md:px-8">
        <div className="luxury-container max-w-3xl">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="text-center">
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-charcoal-light mb-6">Patient Experience</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-navy leading-[0.95] mb-10">
              What to <span className="italic">Expect</span>
            </h2>
            <div className="max-w-xl mx-auto space-y-6 text-left">
              {[
                { title: "Initial Consultation", desc: "A thorough evaluation of your dental health, facial aesthetics, and personal goals." },
                { title: "Digital Planning", desc: "Advanced imaging and digital design tools allow you to preview potential outcomes before any treatment begins." },
                { title: "Collaborative Design", desc: "Your preferences guide the process. Every decision is made together, with clarity and transparency." },
                { title: "Precision Execution", desc: "Treatment is delivered with meticulous attention to detail, ensuring results that feel natural and last." },
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
            "A beautiful smile is never rushed. It is designed with intention, precision, and care."
          </motion.p>
        </div>
      </section>

      <PageCTA
        title="Begin Your Smile Design Journey"
        description="Every smile is unique. Treatment begins with a comprehensive evaluation, digital planning, and a clear understanding of your goals."
      />
      <PageFooter />
    </main>
  );
};

export default SmileDesign;
