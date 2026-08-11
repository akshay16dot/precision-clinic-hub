import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const steps = [
  {
    num: "01",
    title: "Consult",
    body: "An unhurried hour. Photographs, a 3D scan, and every reasonable option explained with its honest trade-offs, including the ones we don't offer.",
  },
  {
    num: "02",
    title: "Plan",
    body: "You receive a written treatment plan: staged, priced and signed. No surprises mid-treatment, no decisions made in the chair.",
  },
  {
    num: "03",
    title: "Rebuild",
    body: "One specialist-led team coordinates surgery, provisional teeth, the final prosthesis and maintenance in one office, with same-day provisionals where the case allows.",
  },
];

const HowItWorks = () => {
  return (
    <section
      className="section-padding"
      style={{
        background:
          "linear-gradient(180deg, hsl(40 15% 97%) 0%, hsl(40 12% 95%) 100%)",
      }}
    >
      <div className="luxury-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14 md:mb-20"
        >
          <p className="font-body text-[10px] tracking-[0.4em] uppercase text-charcoal-light mb-5">
            What to Expect
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-navy leading-[1.05]">
            Three steps, <span className="italic">no guesswork</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="text-center md:text-left"
            >
              <p className="font-display text-4xl md:text-5xl font-light text-navy/20 mb-4">
                {step.num}
              </p>
              <h3 className="font-display text-xl md:text-2xl font-medium text-navy mb-3">
                {step.title}
              </h3>
              <p className="font-body text-sm text-charcoal-light font-light leading-relaxed max-w-xs mx-auto md:mx-0">
                {step.body}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-14 md:mt-16"
        >
          <Link
            to="/contact"
            className="cta-tactile inline-block px-12 py-[18px] bg-navy text-primary-foreground font-body text-[12px] tracking-[0.25em] uppercase font-medium transition-all duration-300 hover:bg-navy/90"
          >
            Book a Consultation
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
