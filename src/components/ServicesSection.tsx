import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const coreServices = [
  {
    title: "All-on-X Implant Rehabilitation",
    description: "Full-arch restoration using strategically positioned implants for complete, non-removable tooth replacement. Precision-planned for long-term stability and natural function.",
    link: "/full-arch-implants-new-jersey",
    featured: true,
  },
  {
    title: "Immediate Dental Implants",
    description: "Same-day implant placement at the time of extraction, preserving bone architecture and reducing treatment duration through precision surgical protocols.",
    link: "/dental-implants-new-jersey",
    featured: true,
  },
  {
    title: "Veneers & Esthetic Rehabilitation",
    description: "Custom porcelain restorations and comprehensive smile rehabilitation designed for facial harmony, material excellence, and enduring natural aesthetics.",
    link: "/aesthetic-dentistry",
    featured: true,
  },
];

const additionalServices = [
  {
    title: "Complex Implant Rehabilitation",
    description: "Multidisciplinary treatment planning for anatomically challenging cases, bone augmentation, and previously failed implant treatments.",
    link: "/dental-implants-new-jersey",
  },
  {
    title: "Full Mouth Reconstruction",
    description: "Complete oral rehabilitation addressing function, occlusion, and long-term dental health through coordinated prosthetic solutions.",
    link: "/dental-implants-new-jersey",
  },
  {
    title: "Maxillofacial & Oncology Rehabilitation",
    description: "Specialized prosthetic reconstruction for oncologic, congenital, surgical, and trauma-related defects.",
    link: "/maxillofacial-rehabilitation",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding" style={{ background: "linear-gradient(180deg, hsl(40 15% 96%) 0%, hsl(40 20% 98%) 100%)" }}>
      <div className="luxury-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-charcoal-light mb-6">
            Specialist Treatment
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy">
            Core Focus Areas
          </h2>
        </motion.div>

        {/* Featured services — larger cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-divider mb-px max-w-5xl mx-auto">
          {coreServices.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-background p-8 md:p-10 group"
            >
              <Link to={service.link} className="block h-full">
                <p className="font-body text-[10px] tracking-[0.3em] uppercase text-charcoal-light/60 mb-4">
                  Primary
                </p>
                <h3 className="font-display text-xl md:text-2xl font-medium text-navy mb-4 group-hover:text-charcoal transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-charcoal-light font-light leading-relaxed">
                  {service.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Additional services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-divider max-w-5xl mx-auto">
          {additionalServices.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-background p-8 md:p-10 group"
            >
              <Link to={service.link} className="block">
                <h3 className="font-display text-lg md:text-xl font-medium text-charcoal mb-3 group-hover:text-navy transition-colors duration-300">
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
