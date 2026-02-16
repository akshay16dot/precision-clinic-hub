import { motion } from "framer-motion";

interface PageHeroProps {
  subtitle: string;
  title: string;
  titleItalic: string;
  paragraphs: string[];
}

const PageHero = ({ subtitle, title, titleItalic, paragraphs }: PageHeroProps) => {
  return (
    <section className="pt-36 pb-24 md:pt-44 md:pb-32 px-6 md:px-8 bg-background">
      <div className="luxury-container text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-xs tracking-[0.35em] uppercase text-charcoal-light mb-10"
        >
          {subtitle}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-navy leading-[0.95] mb-12"
        >
          {title}
          <br />
          <span className="italic font-light">{titleItalic}</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="max-w-2xl mx-auto"
        >
          {paragraphs.map((p, i) => (
            <p key={i} className={`font-body text-sm md:text-base text-charcoal-light font-light leading-relaxed ${i < paragraphs.length - 1 ? 'mb-5' : ''}`}>
              {p}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PageHero;
