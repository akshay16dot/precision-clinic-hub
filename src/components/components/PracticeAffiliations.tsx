import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

const affiliates = [
  {
    name: "Dental Associates of Jersey City",
    location: "Jersey City, NJ",
    url: "https://www.dentalassociatesofjerseycity.com/meet-the-team/akshay-parmar/",
  },
  {
    name: "Dr. Richard Romano",
    location: "Brooklyn, NY",
    url: "https://www.drrichardromano.com/our-practice/meet-the-team/",
  },
  {
    name: "Randazzo Dental",
    location: "Hamilton Township, NJ",
    url: "https://www.jrandazzodds.net/",
  },
];

const PracticeAffiliations = () => {
  return (
    <section
      className="section-padding px-6 md:px-8"
      style={{
        background:
          "linear-gradient(180deg, hsl(40 10% 95%) 0%, hsl(40 12% 93%) 100%)",
      }}
    >
      <div className="luxury-container max-w-3xl">
        <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="text-center mb-16">
          <p className="font-body text-[10px] tracking-[0.35em] uppercase text-charcoal-light mb-6">
            Clinical Presence
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-navy leading-[0.95]">
            Practice &amp;{" "}
            <span className="italic">Affiliations</span>
          </h2>
        </motion.div>

        {/* Primary Practice */}
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-14">
          <p className="font-body text-[10px] tracking-[0.35em] uppercase text-charcoal-light mb-5">
            Primary Practice
          </p>
          <p className="font-display text-xl md:text-2xl font-light text-charcoal tracking-tight mb-2">
            House of Prosthodontics
          </p>
          <p className="font-body text-sm text-charcoal-light font-light">
            Hamilton Township, NJ
          </p>
        </motion.div>

        <div className="w-10 h-px bg-navy/20 mx-auto mb-14" />

        {/* Affiliated Practices */}
        <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="text-center mb-10">
          <p className="font-body text-[10px] tracking-[0.35em] uppercase text-charcoal-light mb-8">
            Affiliated Clinical Practices
          </p>
          <div className="space-y-8 max-w-xl mx-auto">
            {affiliates.map((practice, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="text-center"
              >
                <a
                  href={practice.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display text-lg md:text-xl font-light text-charcoal tracking-tight hover:text-navy transition-colors duration-300"
                >
                  {practice.name}
                </a>
                <p className="font-body text-sm text-charcoal-light font-light mt-1">
                  {practice.location}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PracticeAffiliations;
