import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Advanced Dental Implants",
    description: "Precision-placed implant solutions for single tooth, multiple teeth, and complex anatomical cases.",
    link: "/dental-implants-new-jersey",
  },
  {
    title: "Full-Arch Rehabilitation",
    description: "Comprehensive restoration of complete dental arches with implant-supported prosthetics.",
    link: "/full-arch-implants-new-jersey",
  },
  {
    title: "Aesthetic & Cosmetic Dentistry",
    description: "Veneers, smile rehabilitation, and ceramic restorations rooted in facial harmony and material excellence.",
    link: "/aesthetic-dentistry",
  },
  {
    title: "Maxillofacial & Oncology Rehabilitation",
    description: "Specialized prosthetic rehabilitation for oncologic, congenital, surgical, and trauma-related defects.",
    link: "/maxillofacial-rehabilitation",
  },
  {
    title: "Full Mouth Reconstruction",
    description: "Complete oral rehabilitation addressing function, occlusion, and long-term dental health.",
    link: "/dental-implants-new-jersey",
  },
  {
    title: "Complex Oral Rehabilitation",
    description: "Multidisciplinary treatment planning for medically and dentally compromised patients.",
    link: "/dental-implants-new-jersey",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="luxury-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-charcoal-light mb-6">
            Specialized Services
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy">
            Prosthodontic &amp; Implant Services
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-divider">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-background p-10 md:p-12 group"
            >
              <Link to={service.link} className="block">
                <h3 className="font-display text-xl md:text-2xl font-medium text-charcoal mb-4 group-hover:text-navy transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-charcoal-light font-light leading-relaxed">
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
