import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import noseFront from "@/assets/maxfac-nose-front.jpg";
import ear from "@/assets/maxfac-ear.jpg";
import eye from "@/assets/maxfac-eye.jpg";

const pieces = [
  { img: noseFront, alt: "Hand-crafted silicone nasal prosthesis on its mold", label: "Nasal prosthesis" },
  { img: ear, alt: "Hand-tinted silicone auricular prosthesis", label: "Auricular prosthesis" },
  { img: eye, alt: "Orbital prosthesis with hand-painted ocular", label: "Orbital prosthesis" },
];

const MaxfacStrip = () => {
  return (
    <section
      className="section-padding"
      style={{ background: "linear-gradient(180deg, hsl(40 12% 95%) 0%, hsl(40 15% 97%) 100%)" }}
    >
      <div className="luxury-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16 max-w-2xl mx-auto"
        >
          <p className="font-body text-[10px] tracking-[0.4em] uppercase text-charcoal-light mb-5">
            Maxillofacial Prosthetics
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-navy leading-[1.05] mb-5">
            When illness takes <span className="italic">more than teeth</span>
          </h2>
          <p className="font-body text-sm md:text-[15px] text-charcoal-light font-light leading-relaxed max-w-xl mx-auto">
            A nose. An ear. An eye. For patients recovering from cancer surgery
            or trauma, each prosthesis is sculpted and tinted by hand until it
            belongs to the face it returns to. Fellowship-trained care,
            coordinated with your surgical team.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 gap-3 md:gap-5 max-w-4xl mx-auto">
          {pieces.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative aspect-[3/4] overflow-hidden rounded-sm border border-divider"
            >
              <img
                src={p.img}
                alt={p.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/45 to-transparent" />
              <p className="absolute bottom-2.5 left-3 font-body text-[8.5px] md:text-[10px] tracking-[0.22em] uppercase text-white/85">
                {p.label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-10 md:mt-12"
        >
          <Link
            to="/maxillofacial-rehabilitation"
            className="font-body text-[10px] tracking-[0.25em] uppercase text-navy/60 hover:text-navy transition-colors duration-300 border-b border-navy/15 hover:border-navy/40 pb-px"
          >
            About Maxillofacial Rehabilitation
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default MaxfacStrip;
