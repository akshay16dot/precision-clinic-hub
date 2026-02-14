import { motion } from "framer-motion";

const services = [
  {
    title: "Advanced Dental Implants",
    description: "Precision-placed implant solutions for single tooth, multiple teeth, and complex anatomical cases.",
  },
  {
    title: "Full-Arch Rehabilitation",
    description: "Comprehensive restoration of complete dental arches with implant-supported prosthetics.",
  },
  {
    title: "Full Mouth Reconstruction",
    description: "Complete oral rehabilitation addressing function, occlusion, and long-term dental health.",
  },
  {
    title: "Smile Makeovers",
    description: "Aesthetic dentistry rooted in facial harmony, proportional design, and material excellence.",
  },
  {
    title: "Complex Oral Rehabilitation",
    description: "Multidisciplinary treatment planning for medically and dentally compromised patients.",
  },
  {
    title: "Maxillofacial Prosthetics",
    description: "Specialized prosthetic rehabilitation for congenital, surgical, and trauma-related defects.",
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
            Clinical Excellence
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
              <h3 className="font-display text-xl md:text-2xl font-medium text-charcoal mb-4 group-hover:text-navy transition-colors duration-300">
                {service.title}
              </h3>
              <p className="font-body text-sm text-charcoal-light font-light leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
