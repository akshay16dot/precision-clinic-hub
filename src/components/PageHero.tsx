import { motion } from "framer-motion";

interface PageHeroProps {
  subtitle: string;
  title: string;
  titleItalic: string;
  paragraphs: string[];
}

const PageHero = ({ subtitle, title, titleItalic, paragraphs }: PageHeroProps) => {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-24 px-6 md:px-8 bg-background">
      <img
        src="/splash-icon.png?v=12"
        alt=""
        aria-hidden="true"
        width="488"
        height="442"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[19rem] w-[19rem] -translate-x-1/2 -translate-y-1/2 object-contain opacity-[0.018] md:h-[28rem] md:w-[28rem]"
        style={{
          filter:
            "brightness(0) saturate(100%) invert(16%) sepia(18%) saturate(1704%) hue-rotate(178deg) brightness(88%) contrast(91%)",
        }}
      />
      <div className="luxury-container relative z-10 text-center">
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
