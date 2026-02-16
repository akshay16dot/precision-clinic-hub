import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface PageCTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
};

const PageCTA = ({
  title = "Schedule a Consultation",
  description = "Begin with a comprehensive evaluation to determine the most appropriate treatment pathway for your clinical needs.",
  buttonText = "Request Appointment",
  buttonLink = "/contact",
}: PageCTAProps) => {
  return (
    <section className="section-padding-lg bg-navy">
      <div className="luxury-container text-center">
        <motion.div {...fadeUp} transition={{ duration: 1 }}>
          <h2 className="font-display text-4xl md:text-5xl font-light text-primary-foreground mb-6">
            {title}
          </h2>
          <p className="font-body text-sm md:text-base text-primary-foreground/70 font-light max-w-xl mx-auto mb-14">
            {description}
          </p>
          <Link
            to={buttonLink}
            className="inline-block px-14 py-[18px] border border-primary-foreground/30 text-primary-foreground font-body text-[11px] tracking-[0.25em] uppercase transition-all duration-300 hover:bg-primary-foreground hover:text-navy"
          >
            {buttonText}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PageCTA;
