import { motion } from "framer-motion";
import drParmar from "@/assets/dr-parmar-portrait.png";

const credentials = [
  "Board-Certified Prosthodontist",
  "Implant & Full-Arch Specialist",
  "Veneers & Smile Reconstruction",
  "Maxillofacial Prosthodontics",
  "Founder, STABLE IMPLANT Protocol™",
  "Former Teaching Faculty, NYU Prosthodontics",
];

const AuthoritySection = () => {
  return (
    <section
      className="section-padding"
      style={{
        background:
          "linear-gradient(180deg, hsl(40 10% 95%) 0%, hsl(40 12% 93%) 100%)",
      }}
    >
      <div className="luxury-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-5xl mx-auto">
          {/* Portrait — immersive blend */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <img
                src={drParmar}
                alt="Dr. Akshay Parmar, Board-Certified Prosthodontist"
                className="w-72 md:w-80 lg:w-96 object-cover"
                style={{
                  filter: "contrast(1.04) brightness(0.97) saturate(0.85)",
                  maskImage:
                    "radial-gradient(ellipse 85% 75% at 50% 35%, black 40%, transparent 90%)",
                  WebkitMaskImage:
                    "radial-gradient(ellipse 85% 75% at 50% 35%, black 40%, transparent 90%)",
                }}
              />
              {/* Soft shadow beneath for dimensional separation */}
              <div
                className="absolute inset-0 -z-10 scale-105 translate-y-2"
                style={{
                  background:
                    "radial-gradient(ellipse at center 50%, hsl(220 20% 15% / 0.12) 0%, transparent 65%)",
                }}
              />
            </div>
          </motion.div>

          {/* Credentials */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
          >
            <p className="font-body text-[10px] tracking-[0.4em] uppercase text-charcoal-light mb-6">
              About Dr. Parmar
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-light text-navy mb-2">
              Clinical <span className="italic">Authority</span>
            </h2>
            <p className="font-body text-sm text-charcoal-light font-light leading-relaxed mb-8 max-w-md">
              A specialist committed to precision-driven, biologically respectful rehabilitation, restoring function, aesthetics, and long-term stability.
            </p>

            <div className="space-y-4">
              {credentials.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="border-b border-divider pb-4"
                >
                  <p className="font-display text-lg md:text-xl font-light text-charcoal">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
