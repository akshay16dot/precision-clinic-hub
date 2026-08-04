import { motion } from "framer-motion";

const affiliations = [
  "Memorial Sloan Kettering",
  "NYU College of Dentistry",
  "American Board of Prosthodontics",
  "American College of Prosthodontists",
  "American Academy of Maxillofacial Prosthetics",
  "Straumann Faculty",
];

const CredentialStrip = () => {
  return (
    <section
      aria-label="Affiliations and credentials"
      className="border-y border-divider"
      style={{ background: "hsl(40 12% 96%)" }}
    >
      <div className="luxury-container px-6 md:px-10 py-7 md:py-8">
        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 md:gap-x-12 list-none m-0 p-0"
        >
          {affiliations.map((name, i) => (
            <li
              key={i}
              className="font-display text-[13px] md:text-[15px] font-medium text-charcoal-light/70 tracking-[0.06em] whitespace-nowrap"
            >
              {name}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default CredentialStrip;
