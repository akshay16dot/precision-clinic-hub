import { motion } from "framer-motion";

const courses = [
  {
    title: "Surgical Implant Foundations",
    type: "Hands-On Program",
  },
  {
    title: "Full-Arch Prosthetic Protocols",
    type: "Advanced Module",
  },
  {
    title: "Digital Workflow Integration",
    type: "Clinical Workshop",
  },
];

const EducationSection = () => {
  return (
    <section
      id="education"
      className="section-padding"
      style={{
        background: "linear-gradient(180deg, hsl(40 15% 97%) 0%, hsl(40 18% 96%) 100%)",
      }}
    >
      <div className="luxury-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-14"
        >
          <p className="font-body text-[10px] tracking-[0.4em] uppercase text-charcoal-light mb-5">
            For Dental Professionals
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy mb-5">
            Implant Education
            <br />
            <span className="italic">Without Shortcuts</span>
          </h2>
          <p className="font-body text-sm text-charcoal-light font-light leading-relaxed max-w-xl mx-auto">
            Evidence-based surgical & prosthetic training for modern implant dentistry.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {courses.map((course, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="p-10 text-center border border-divider bg-background group transition-all duration-500 hover:border-navy/20 hover:shadow-[0_4px_20px_-8px_hsl(220_20%_15%/0.1)]"
            >
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-charcoal-light/50 mb-4">
                {course.type}
              </p>
              <h3 className="font-display text-xl font-medium text-charcoal group-hover:text-navy transition-colors duration-300">
                {course.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
