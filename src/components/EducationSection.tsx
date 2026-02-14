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
    <section id="education" className="section-padding bg-background">
      <div className="luxury-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-charcoal-light mb-6">
            For Dental Professionals
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-navy mb-6">
            Implant Education
            <br />
            <span className="italic">Without Shortcuts</span>
          </h2>
          <p className="font-body text-sm text-charcoal-light font-light leading-relaxed max-w-xl mx-auto">
            Evidence-based surgical & prosthetic training for modern implant dentistry.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-divider max-w-4xl mx-auto">
          {courses.map((course, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-background p-10 text-center group"
            >
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-charcoal-light mb-4">
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
