import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import imgImplants from "@/assets/implants-card-editorial.jpg";
import imgImmediate from "@/assets/immediate-card-lab.jpg";
import imgFullArch from "@/assets/fullarch-prosthesis.jpg";
import imgVeneers from "@/assets/veneer-case1-after.png";
import imgFullMouth from "@/assets/outcome-1-after.png";
import imgMaxfac from "@/assets/obturator-prosthesis.png";

const coreServices = [
  {
    title: "Dental Implants",
    description: "Permanent replacements for missing teeth that look, feel, and function like your own. Single tooth or multiple, planned for long-term stability.",
    link: "/dental-implants-new-jersey",
    icon: "01",
    img: imgImplants,
    contain: true,
  },
  {
    title: "Same-Day Implants",
    description: "When possible, your implant is placed the same day a tooth is removed, fewer visits, less bone loss, and a faster path back to a complete smile.",
    link: "/immediate-implant-rehabilitation",
    icon: "02",
    img: imgImmediate,
  },
  {
    title: "All-on-X / Full-Arch",
    description: "A full set of fixed teeth supported by just a few implants. A life-changing option for patients with failing teeth or long-term dentures.",
    link: "/full-arch-implants-new-jersey",
    icon: "03",
    img: imgFullArch,
  },
  {
    title: "Porcelain Veneers",
    description: "Custom-made veneers designed for your face, not a template. Natural shape, natural color, and a smile that still looks like you.",
    link: "/veneers-aesthetic-reconstruction",
    icon: "04",
    img: imgVeneers,
  },
  {
    title: "Full-Mouth Reconstruction",
    description: "For worn, broken, or failing teeth, a coordinated plan that rebuilds bite, function, and appearance, all in the right order.",
    link: "/full-mouth-reconstruction-new-jersey",
    icon: "05",
    img: imgFullMouth,
  },
  {
    title: "Complex & Maxillofacial Cases",
    description: "Specialist care for patients with significant bone loss, congenital differences, or jaw and facial reconstruction needs.",
    link: "/maxillofacial-rehabilitation",
    icon: "06",
    img: imgMaxfac,
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
              className="h-full"
            >
              <Link
                to={service.link}
                className="flex flex-col h-full border border-divider bg-background hover:bg-card group transition-all duration-500 hover:border-navy/20 hover:shadow-[0_8px_30px_-12px_hsl(220_20%_15%/0.12)] overflow-hidden"
              >
                <div className={`relative aspect-[16/9] overflow-hidden shrink-0 ${service.contain ? "bg-navy-deep" : ""}`}>
                  <img
                    src={service.img}
                    alt={service.title}
                    loading="lazy"
                    className={`w-full h-full transition-transform duration-700 group-hover:scale-[1.05] ${service.contain ? "object-contain" : "object-cover"}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
                  <p className="absolute bottom-2.5 left-4 font-body text-[10px] tracking-[0.3em] uppercase text-white/70">
                    {service.icon}
                  </p>
                </div>
                <div className="p-7 md:p-8 flex flex-col flex-1">
                  <h3 className="font-display text-xl md:text-2xl font-medium text-navy mb-4 group-hover:text-charcoal transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="font-body text-xs text-charcoal-light font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
