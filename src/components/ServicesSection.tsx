import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const coreServices = [
  {
    title: "Dental Implants",
    description: "Precision-placed titanium implants for permanent tooth replacement. Single-tooth, multiple, and complex cases with predictable long-term outcomes.",
    link: "/dental-implants-new-jersey",
    icon: "01",
  },
  {
    title: "Immediate Implants",
    description: "Same-day implant placement at the time of extraction, preserving bone architecture, reducing treatment time, and accelerating rehabilitation.",
    link: "/dental-implants-new-jersey",
    icon: "02",
  },
  {
    title: "All-on-X / Full-Arch",
    description: "Complete arch rehabilitation using strategically positioned implants for non-removable, full-arch tooth replacement with immediate function.",
    link: "/full-arch-implants-new-jersey",
    icon: "03",
  },
  {
    title: "Veneers",
    description: "Custom porcelain veneers and smile rehabilitation designed for facial harmony, material excellence, and enduring natural aesthetics.",
    link: "/aesthetic-dentistry",
    icon: "04",
  },
  {
    title: "Prosthodontic Reconstruction",
    description: "Full mouth reconstruction addressing function, occlusion, and long-term dental health through coordinated advanced prosthetic solutions.",
    link: "/dental-implants-new-jersey",
    icon: "05",
  },
  {
    title: "Maxillofacial Prosthodontics",
    description: "Specialized rehabilitation of complex maxillofacial defects, restoring form, function, and quality of life through precision prosthetic solutions.",
    link: "/maxillofacial-rehabilitation",
    icon: "06",
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="section-padding"
      style={{
        background:
          "linear-gradient(180deg, hsl(40 15% 97%) 0%, hsl(40 10% 94%) 50%, hsl(40 15% 97%) 100%)",
      }}
    >
      <div className="luxury-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-[10px] tracking-[0.4em] uppercase text-charcoal-light mb-5">
            Specialist Treatment
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy mb-4">
            Core Focus <span className="italic">Areas</span>
          </h2>
          <div className="w-12 h-px bg-navy/20 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {coreServices.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <Link
                to={service.link}
                className="block h-full p-8 md:p-10 border border-divider bg-background hover:bg-card group transition-all duration-500 hover:border-navy/20 hover:shadow-[0_8px_30px_-12px_hsl(220_20%_15%/0.12)]"
              >
                <p className="font-body text-[10px] tracking-[0.3em] uppercase text-charcoal-light/40 mb-6 group-hover:text-navy/40 transition-colors duration-500">
                  {service.icon}
                </p>
                <h3 className="font-display text-xl md:text-2xl font-medium text-navy mb-4 group-hover:text-charcoal transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="font-body text-xs text-charcoal-light font-light leading-relaxed">
                  {service.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
