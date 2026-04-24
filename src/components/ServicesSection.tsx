import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const coreServices = [
  {
    title: "Dental Implants",
    description: "Permanent replacements for missing teeth that look, feel, and function like your own. Single tooth or multiple, planned for long-term stability.",
    link: "/dental-implants-new-jersey",
    icon: "01",
  },
  {
    title: "Same-Day Implants",
    description: "When possible, your implant is placed the same day a tooth is removed, fewer visits, less bone loss, and a faster path back to a complete smile.",
    link: "/dental-implants-new-jersey",
    icon: "02",
  },
  {
    title: "All-on-X / Full-Arch",
    description: "A full set of fixed teeth supported by just a few implants. A life-changing option for patients with failing teeth or long-term dentures.",
    link: "/full-arch-implants-new-jersey",
    icon: "03",
  },
  {
    title: "Porcelain Veneers",
    description: "Custom-made veneers designed for your face, not a template. Natural shape, natural color, and a smile that still looks like you.",
    link: "/aesthetic-dentistry",
    icon: "04",
  },
  {
    title: "Full-Mouth Reconstruction",
    description: "For worn, broken, or failing teeth, a coordinated plan that rebuilds bite, function, and appearance, all in the right order.",
    link: "/dental-implants-new-jersey",
    icon: "05",
  },
  {
    title: "Complex & Maxillofacial Cases",
    description: "Specialist care for patients with significant bone loss, congenital differences, or jaw and facial reconstruction needs.",
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
          className="text-center mb-20"
        >
          <p className="font-body text-[10px] tracking-[0.4em] uppercase text-charcoal-light mb-5">
            What Dr. Parmar Treats
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy mb-4">
            Specialist <span className="italic">Treatments</span>
          </h2>
          <div className="w-12 h-px bg-navy/20 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-7 max-w-5xl mx-auto">
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
