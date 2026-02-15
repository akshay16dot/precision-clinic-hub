import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

const credentials = [
  "Founder – STABLE IMPLANT Protocol™",
  "Founder – Floxient Digital Dentistry Platform",
  "Former Teaching Faculty – NYU Prosthodontics",
  "Clinical Educator – Implant & Rehabilitation Dentistry",
  "Key Opinion Leader – Advanced Implant Systems",
];

const AuthoritySection = () => {
  return (
    <section className="section-padding" style={{ background: "linear-gradient(180deg, hsl(40 10% 94.5%) 0%, hsl(40 12% 93%) 100%)" }}>
      <div className="luxury-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="font-body text-xs tracking-[0.3em] uppercase text-charcoal-light text-center mb-16">
            Clinical &nbsp;•&nbsp; Educational &nbsp;•&nbsp; Technological Leadership
          </h2>

          <div className="space-y-6 mb-20">
            {credentials.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="border-b border-divider pb-5"
              >
                <p className="font-display text-xl md:text-2xl font-light text-charcoal">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Instagram link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 group"
            >
              <Instagram className="w-5 h-5 text-charcoal-light group-hover:text-navy transition-colors duration-300" />
              <div className="text-left">
                <p className="font-body text-sm text-charcoal group-hover:text-navy transition-colors duration-300">
                  Clinical Education & Professional Insights
                </p>
                <p className="font-body text-xs text-charcoal-light mt-0.5">
                  For Dental Professionals
                </p>
              </div>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AuthoritySection;
