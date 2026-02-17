import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SiteNavigation from "@/components/SiteNavigation";
import PageCTA from "@/components/PageCTA";
import PageFooter from "@/components/PageFooter";
import { usePageSEO } from "@/hooks/usePageSEO";
import heroImage from "@/assets/hero-teeth-whitening.png";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

const TeethWhitening = () => {
  usePageSEO({
    title: "Teeth Whitening NJ | Specialist-Supervised Whitening",
    description: "Professional teeth whitening supervised by a Board-Certified Prosthodontist in New Jersey. Safe, controlled protocols for natural brightness with clinical precision and shade analysis.",
  });

  return (
    <main className="bg-background">
      <SiteNavigation />

      {/* ═══════ HERO ═══════ */}
      <section className="relative pt-24 md:pt-0 hero-min-h overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 hero-min-h">
          <div className="relative lg:col-span-5 min-h-[300px] sm:min-h-[400px] lg:min-h-full overflow-hidden">
            <motion.img
              src={heroImage}
              alt="Professional shade guide for teeth whitening"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.4 }}
              className="absolute inset-0 w-full h-full object-cover object-[center_30%] sm:object-center"
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
                Teeth
                <br />
                <span className="italic font-light">Whitening</span>
              </h1>

              <div className="w-10 h-px bg-navy mb-8" />

              <p className="font-body text-sm md:text-[15px] text-charcoal-light font-light leading-[1.85] mb-4">
                Tooth color naturally evolves due to age, diet, and lifestyle factors.
              </p>

              <p className="font-body text-sm md:text-[15px] text-charcoal-light font-light leading-[1.85] mb-4">
                Professional whitening offers a controlled, safe, and predictable approach to brightening your smile.
              </p>

              <p className="font-body text-sm md:text-[15px] text-charcoal-light font-light leading-[1.85] mb-4">
                Treatment is tailored to each patient to ensure results appear natural rather than overly bright.
              </p>

              <p className="font-body text-sm md:text-[15px] text-charcoal-light font-light leading-[1.85]">
                Whitening is not about extreme color change. It is about refinement.
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

      {/* ═══════ HOW IT WORKS ═══════ */}
      <section className="py-24 md:py-32 px-6 md:px-8" style={{ background: "linear-gradient(180deg, hsl(40 10% 95%) 0%, hsl(40 12% 93%) 100%)" }}>
        <div className="luxury-container max-w-3xl">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="text-center">
            <p className="font-body text-[10px] tracking-[0.35em] uppercase text-charcoal-light mb-6">The Process</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-navy leading-[0.95] mb-10">
              Professional <span className="italic">Whitening</span>
            </h2>
            <p className="font-body text-sm md:text-[15px] text-charcoal-light font-light leading-[1.85] mb-6 max-w-xl mx-auto">
              Unlike over-the-counter products, professional whitening is supervised, customized, and designed to protect your enamel while delivering consistent results.
            </p>
            <div className="max-w-sm mx-auto space-y-8 mb-12">
              {["Dental health assessment first", "Custom-fitted whitening trays", "Professional-grade materials", "Controlled, gradual brightening", "Sensitivity management"].map((item, i) => (
                <motion.div key={i} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.07 }} className="text-center">
                  <p className="font-display text-lg md:text-xl font-light text-charcoal tracking-tight">{item}</p>
                </motion.div>
              ))}
            </div>
            <p className="font-body text-sm md:text-[15px] text-charcoal-light font-light leading-[1.85] max-w-xl mx-auto">
              The result is a brighter, more refined smile that still looks entirely natural.
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
                { title: "Initial Assessment", desc: "Your teeth and gums are evaluated to ensure whitening is appropriate and safe for you." },
                { title: "Custom Treatment Plan", desc: "Whitening strength and duration are tailored to your starting shade and desired outcome." },
                { title: "Comfortable Application", desc: "Custom trays ensure even coverage and minimize gum irritation or sensitivity." },
                { title: "Natural Results", desc: "Gradual brightening produces results that complement your natural appearance." },
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
            "Refinement, not transformation. That is the standard."
          </motion.p>
        </div>
      </section>

      {/* Patient Guide Link */}
      <section className="py-12 md:py-16 px-6 md:px-8 bg-background">
        <div className="luxury-container text-center">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }}>
            <Link
              to="/guide/teeth-whitening"
              className="inline-block font-body text-[10px] tracking-[0.25em] uppercase text-navy border-b border-navy/30 pb-0.5 hover:border-navy transition-colors"
            >
              Learn About the Process
            </Link>
          </motion.div>
        </div>
      </section>

      <PageCTA
        title="A Brighter, More Confident Smile"
        description="Professional whitening begins with an assessment to ensure the approach is safe, appropriate, and tailored to you."
      />
      <PageFooter />
    </main>
  );
};

export default TeethWhitening;
