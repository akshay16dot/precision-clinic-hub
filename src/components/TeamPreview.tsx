import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const clinicians = [
  {
    initials: "AP",
    name: "Dr. Akshay Parmar",
    role: "Practice Owner & Clinical Lead",
    featured: true,
  },
  {
    initials: "JR",
    name: "Dr. Joseph D. Randazzo",
    role: "Maxillofacial & Prosthodontic Care",
  },
  {
    initials: "NV",
    name: "Dr. Neel Vakharia",
    role: "Prosthodontic Care",
  },
];

const TeamPreview = () => {
  return (
    <section className="overflow-hidden bg-navy px-6 py-24 md:px-8 md:py-32">
      <div className="luxury-container grid max-w-6xl gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
        >
          <p className="mb-6 font-body text-[10px] uppercase tracking-[0.38em] text-primary-foreground/45">
            The People Behind Your Care
          </p>
          <h2 className="font-display text-4xl font-light leading-[0.98] text-primary-foreground md:text-5xl lg:text-6xl">
            Led with vision.
            <br />
            <span className="italic">Strengthened by continuity.</span>
          </h2>
          <p className="mt-8 max-w-xl font-body text-sm font-light leading-[1.9] text-primary-foreground/62 md:text-[15px]">
            Every complex treatment begins with Dr. Parmar's diagnosis and clinical direction. Dr. Randazzo remains involved in select maxillofacial and prosthodontic care, while Dr. Vakharia provides select prosthodontic care. Together, the team offers clear leadership, trusted experience and coordinated treatment.
          </p>
          <Link
            to="/meet-the-team"
            className="mt-9 inline-flex border-b border-primary-foreground/35 pb-1 font-body text-[10px] uppercase tracking-[0.25em] text-primary-foreground transition-colors hover:border-primary-foreground"
          >
            Meet the Team
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 22 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: 0.08 }}
          className="border-y border-primary-foreground/15"
        >
          {clinicians.map((clinician) => (
            <div
              key={clinician.name}
              className={`grid grid-cols-[3.25rem_1fr] items-center gap-5 border-b border-primary-foreground/15 py-7 last:border-b-0 sm:grid-cols-[4rem_1fr] sm:gap-7 ${
                clinician.featured ? "bg-primary-foreground/[0.035]" : ""
              }`}
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full border font-display text-base font-light tracking-[0.08em] sm:h-14 sm:w-14 ${
                  clinician.featured
                    ? "border-primary-foreground/45 bg-primary-foreground text-navy"
                    : "border-primary-foreground/22 text-primary-foreground/78"
                }`}
              >
                {clinician.initials}
              </div>
              <div>
                <p className="font-display text-xl font-light text-primary-foreground sm:text-2xl">
                  {clinician.name}
                </p>
                <p className="mt-1.5 font-body text-[9px] uppercase tracking-[0.2em] text-primary-foreground/42 sm:text-[10px]">
                  {clinician.role}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamPreview;
