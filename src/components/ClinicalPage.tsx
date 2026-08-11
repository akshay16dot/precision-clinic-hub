import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SiteNavigation from "@/components/SiteNavigation";
import PageFooter from "@/components/PageFooter";

/**
 * Shared layout for the long-form clinical content pages.
 *
 * These pages exist to rank and to be cited by AI search, so the structure is
 * deliberate: server-rendered prose (no content behind interaction), question-led
 * H2s, self-contained answers, and real specifics rather than marketing copy.
 */

export const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

/* ── Page shell with a light hero that clears the fixed nav ── */
export const ClinicalPage = ({
  eyebrow,
  title,
  titleItalic,
  standfirst,
  children,
}: {
  eyebrow: string;
  title: string;
  titleItalic?: string;
  standfirst: string;
  children: ReactNode;
}) => (
  <main className="bg-background">
    <SiteNavigation />

    <section className="pt-40 md:pt-48 pb-14 md:pb-20 bg-background">
      <div className="luxury-container px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="font-body text-[10px] tracking-[0.34em] uppercase text-charcoal-light mb-7">
            {eyebrow}
          </p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-navy leading-[1.12] mb-7">
            {title}
            {titleItalic && (
              <>
                {" "}
                <em className="italic">{titleItalic}</em>
              </>
            )}
          </h1>
          <p className="font-body text-[15px] md:text-base text-charcoal-light font-light leading-relaxed max-w-2xl mx-auto">
            {standfirst}
          </p>
          <div className="w-12 h-px bg-navy/20 mx-auto mt-10" />
        </motion.div>
      </div>
    </section>

    {children}

    <PageFooter />
  </main>
);

/* ── A prose section. `alt` gives the subtle warm background. ── */
export const Section = ({
  heading,
  headingItalic,
  eyebrow,
  alt = false,
  children,
}: {
  heading?: string;
  headingItalic?: string;
  eyebrow?: string;
  alt?: boolean;
  children: ReactNode;
}) => (
  <section
    className="py-14 md:py-20"
    style={{
      background: alt
        ? "linear-gradient(180deg, hsl(40 12% 95%) 0%, hsl(40 15% 96.5%) 100%)"
        : "hsl(40 20% 98%)",
    }}
  >
    <div className="luxury-container px-6 md:px-8">
      <motion.div {...fade} transition={{ duration: 0.7 }} className="max-w-2xl mx-auto">
        {eyebrow && (
          <p className="font-body text-[10px] tracking-[0.3em] uppercase text-charcoal-light/70 mb-5">
            {eyebrow}
          </p>
        )}
        {heading && (
          <h2 className="font-display text-2xl md:text-[32px] font-light text-navy leading-[1.2] mb-6">
            {heading}
            {headingItalic && (
              <>
                {" "}
                <em className="italic">{headingItalic}</em>
              </>
            )}
          </h2>
        )}
        <div className="space-y-4">{children}</div>
      </motion.div>
    </div>
  </section>
);

/* ── Case gallery. Composite before/after photographs on a dark section so it
      reads as a break from the surrounding prose. Each image is a single file
      with "before" stacked above "after", labelled with two small pinned tags
      rather than split into two crops, since splitting risks cutting a photo
      at the wrong line. Only ever pass photographs with documented consent. ── */
export const CaseGallery = ({
  eyebrow,
  heading,
  headingItalic,
  intro,
  cases,
}: {
  eyebrow?: string;
  heading?: string;
  headingItalic?: string;
  intro?: string;
  cases: { image: string; alt: string; label: string }[];
}) => (
  <section className="py-14 md:py-20" style={{ background: "hsl(220 32% 12%)" }}>
    <div className="luxury-container px-6 md:px-8">
      <motion.div
        {...fade}
        transition={{ duration: 0.7 }}
        className="max-w-2xl mx-auto text-center mb-12 md:mb-14"
      >
        {eyebrow && (
          <p className="font-body text-[10px] tracking-[0.3em] uppercase text-primary-foreground/45 mb-5">
            {eyebrow}
          </p>
        )}
        {heading && (
          <h2 className="font-display text-2xl md:text-[32px] font-light text-primary-foreground leading-[1.2] mb-5">
            {heading}
            {headingItalic && (
              <>
                {" "}
                <em className="italic">{headingItalic}</em>
              </>
            )}
          </h2>
        )}
        {intro && (
          <p className="font-body text-sm text-primary-foreground/60 font-light leading-relaxed">
            {intro}
          </p>
        )}
      </motion.div>

      <div
        className={`grid gap-6 md:gap-8 mx-auto ${
          cases.length > 1 ? "max-w-4xl sm:grid-cols-2" : "max-w-md"
        }`}
      >
        {cases.map((c, i) => (
          <motion.figure
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: Math.min(i, 3) * 0.08 }}
            className="relative overflow-hidden rounded-sm border border-primary-foreground/10"
          >
            <img src={c.image} alt={c.alt} loading="lazy" className="w-full h-auto block" />
            <span className="absolute left-4 top-4 px-2.5 py-1 bg-[hsl(220_30%_8%/0.72)] backdrop-blur-sm font-body text-[9px] tracking-[0.22em] uppercase text-primary-foreground/85">
              Before
            </span>
            <span className="absolute left-4 top-[54%] px-2.5 py-1 bg-[hsl(220_30%_8%/0.72)] backdrop-blur-sm font-body text-[9px] tracking-[0.22em] uppercase text-primary-foreground/85">
              After
            </span>
            <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[hsl(220_30%_8%/0.9)] to-transparent px-5 pt-12 pb-4">
              <span className="font-body text-[10.5px] tracking-[0.08em] text-primary-foreground/90">
                {c.label}
              </span>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </div>
  </section>
);

/* ── Body paragraph ── */
export const P = ({ children }: { children: ReactNode }) => (
  <p className="font-body text-[15px] md:text-base text-charcoal-light font-light leading-[1.75]">
    {children}
  </p>
);

/* ── Sub-heading inside a section ── */
export const H3 = ({ children }: { children: ReactNode }) => (
  <h3 className="font-display text-lg md:text-xl font-light text-navy pt-4 leading-snug">
    {children}
  </h3>
);

/* ── Bulleted list ── */
export const List = ({ items }: { items: ReactNode[] }) => (
  <ul className="space-y-3 pt-1">
    {items.map((item, i) => (
      <li key={i} className="flex gap-3.5">
        <span className="mt-[9px] w-1 h-1 rounded-full bg-navy/40 shrink-0" />
        <span className="font-body text-[15px] md:text-base text-charcoal-light font-light leading-[1.7]">
          {item}
        </span>
      </li>
    ))}
  </ul>
);

/* ── Pulled-out note, used for the things patients most need to know ── */
export const Note = ({ label, children }: { label?: string; children: ReactNode }) => (
  <div className="border-l-2 border-navy/25 pl-5 md:pl-6 py-1 my-6">
    {label && (
      <p className="font-body text-[10px] tracking-[0.24em] uppercase text-navy/55 mb-2.5">
        {label}
      </p>
    )}
    <p className="font-body text-[14.5px] md:text-[15px] text-charcoal font-light leading-[1.7]">
      {children}
    </p>
  </div>
);

/* ── Simple two-column reference table ── */
export const RefTable = ({
  caption,
  head,
  rows,
}: {
  caption?: string;
  head: [string, string];
  rows: [string, string][];
}) => (
  <div className="my-7">
    <div className="border border-divider rounded-sm overflow-hidden bg-white/60">
      <div className="grid grid-cols-[1fr_1.4fr] gap-0 bg-navy/[0.04] border-b border-divider">
        <div className="px-4 py-3 font-body text-[9.5px] tracking-[0.18em] uppercase text-charcoal-light">
          {head[0]}
        </div>
        <div className="px-4 py-3 font-body text-[9.5px] tracking-[0.18em] uppercase text-charcoal-light border-l border-divider">
          {head[1]}
        </div>
      </div>
      {rows.map(([a, b], i) => (
        <div
          key={i}
          className={`grid grid-cols-[1fr_1.4fr] gap-0 ${i < rows.length - 1 ? "border-b border-divider/70" : ""}`}
        >
          <div className="px-4 py-3.5 font-body text-[13.5px] text-navy font-medium">{a}</div>
          <div className="px-4 py-3.5 font-body text-[13.5px] text-charcoal-light font-light leading-relaxed border-l border-divider/70">
            {b}
          </div>
        </div>
      ))}
    </div>
    {caption && (
      <p className="font-body text-[11.5px] text-charcoal-light/65 font-light italic mt-3 leading-relaxed">
        {caption}
      </p>
    )}
  </div>
);

/* ── FAQ block. Rendered open in the DOM on purpose: AI crawlers do not run JS,
      so anything behind a click does not exist to them. ── */
export const FAQ = ({ items }: { items: { q: string; a: ReactNode }[] }) => (
  <div className="space-y-9 pt-2">
    {items.map((item, i) => (
      <div key={i}>
        <h3 className="font-display text-lg md:text-xl font-light text-navy mb-3 leading-snug">
          {item.q}
        </h3>
        <p className="font-body text-[15px] text-charcoal-light font-light leading-[1.75]">
          {item.a}
        </p>
      </div>
    ))}
  </div>
);

/* ── Closing call to action ── */
export const PageCTA = ({
  heading,
  body,
  note,
}: {
  heading: string;
  body: string;
  note?: string;
}) => (
  <section
    className="py-20 md:py-28"
    style={{ background: "linear-gradient(180deg, hsl(40 15% 96.5%) 0%, hsl(40 12% 94.5%) 100%)" }}
  >
    <div className="luxury-container px-6 md:px-8">
      <motion.div {...fade} transition={{ duration: 0.8 }} className="max-w-2xl mx-auto text-center">
        <div className="w-12 h-px bg-navy/20 mx-auto mb-10" />
        <h2 className="font-display text-2xl md:text-4xl font-light text-navy leading-[1.15] mb-6">
          {heading}
        </h2>
        <p className="font-body text-[15px] text-charcoal-light font-light leading-relaxed mb-9">
          {body}
        </p>
        <Link
          to="/contact"
          className="cta-tactile inline-block px-11 py-[17px] bg-navy text-primary-foreground font-body text-[11.5px] tracking-[0.22em] uppercase font-medium transition-all duration-300 hover:bg-navy/90"
        >
          Request a Consultation
        </Link>
        {note && (
          <p className="font-body text-[12px] text-charcoal-light/60 font-light mt-6 leading-relaxed">
            {note}
          </p>
        )}
      </motion.div>
    </div>
  </section>
);

/* ── Cross-links between the related clinical pages ── */
export const RelatedPages = ({ links }: { links: { to: string; label: string }[] }) => (
  <section className="py-12 md:py-16" style={{ background: "hsl(40 20% 98%)" }}>
    <div className="luxury-container px-6 md:px-8">
      <motion.div {...fade} transition={{ duration: 0.6 }} className="max-w-2xl mx-auto">
        <p className="font-body text-[10px] tracking-[0.3em] uppercase text-charcoal-light/70 mb-6 text-center">
          Related
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
          {links.map((l, i) => (
            <Link
              key={i}
              to={l.to}
              className="font-body text-[11.5px] tracking-[0.14em] uppercase text-navy/65 hover:text-navy transition-colors duration-300 border-b border-navy/15 hover:border-navy/40 pb-px"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);
