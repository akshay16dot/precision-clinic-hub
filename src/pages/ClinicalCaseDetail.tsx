import { useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SiteNavigation from "@/components/SiteNavigation";
import PageFooter from "@/components/PageFooter";
import OneRoofCare from "@/components/OneRoofCare";
import JsonLd from "@/components/JsonLd";
import { usePageSEO } from "@/hooks/usePageSEO";
import { CLINICAL_CASE_DETAILS, type ClinicalCaseSlug } from "@/data/clinicalCaseDetails";

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-70px" },
};

const ClinicalCaseDetail = ({ slug }: { slug: ClinicalCaseSlug }) => {
  const clinicalCase = CLINICAL_CASE_DETAILS[slug];

  usePageSEO({
    title: clinicalCase.metaTitle,
    description: clinicalCase.metaDescription,
    path: clinicalCase.path,
    image: clinicalCase.images[0].after,
    type: "article",
  });

  const structuredData = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalWebPage",
          "@id": `https://drparmardds.com${clinicalCase.path}/#page`,
          url: `https://drparmardds.com${clinicalCase.path}/`,
          name: clinicalCase.metaTitle,
          description: clinicalCase.metaDescription,
          about: ["Prosthodontics", "Dental implants", "Oral rehabilitation"],
          author: { "@id": "https://drparmardds.com/#akshay-parmar" },
          publisher: { "@id": "https://drparmardds.com/#practice" },
          primaryImageOfPage: {
            "@type": "ImageObject",
            contentUrl: `https://drparmardds.com${clinicalCase.images[0].after}`,
            caption: clinicalCase.images[0].afterAlt,
          },
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://drparmardds.com/" },
            { "@type": "ListItem", position: 2, name: "Clinical Cases", item: "https://drparmardds.com/clinical-cases/" },
            { "@type": "ListItem", position: 3, name: `${clinicalCase.title} ${clinicalCase.titleItalic}`, item: `https://drparmardds.com${clinicalCase.path}/` },
          ],
        },
      ],
    }),
    [clinicalCase]
  );

  return (
    <main className="bg-background">
      <SiteNavigation />
      <JsonLd id={`clinical-case-${slug}`} data={structuredData} />

      <section className="pt-44 md:pt-52 pb-16 md:pb-24 px-6 md:px-8">
        <div className="luxury-container max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85 }} className="max-w-3xl">
            <Link to="/clinical-cases" className="font-body text-[9px] tracking-[0.24em] uppercase text-charcoal-light/60 hover:text-navy transition-colors">Clinical Cases</Link>
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-charcoal-light mt-8 mb-6">{clinicalCase.eyebrow}</p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-navy leading-[0.98] mb-8">
              {clinicalCase.title}<br /><span className="italic">{clinicalCase.titleItalic}</span>
            </h1>
            <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-[1.85] max-w-2xl">{clinicalCase.overview}</p>
          </motion.div>
        </div>
      </section>

      <section className="pb-20 md:pb-28 px-6 md:px-8">
        <div className="luxury-container max-w-6xl space-y-5">
          {clinicalCase.images.map((pair, index) => (
            <motion.div key={pair.beforeAlt} {...fadeUp} transition={{ duration: 0.75, delay: index * 0.08 }} className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
              <figure className="relative overflow-hidden bg-warm-gray">
                <img src={pair.before} alt={pair.beforeAlt} className="w-full h-full object-cover aspect-[4/3]" />
                <figcaption className="absolute bottom-0 left-0 bg-navy/80 text-white px-4 py-2 font-body text-[9px] tracking-[0.22em] uppercase">Before</figcaption>
              </figure>
              <figure className="relative overflow-hidden bg-warm-gray">
                <img src={pair.after} alt={pair.afterAlt} className="w-full h-full object-cover aspect-[4/3]" />
                <figcaption className="absolute bottom-0 left-0 bg-navy/80 text-white px-4 py-2 font-body text-[9px] tracking-[0.22em] uppercase">After</figcaption>
              </figure>
            </motion.div>
          ))}
          <p className="font-body text-[11px] text-charcoal-light/55 font-light leading-relaxed pt-2">
            Photographs document this patient's treatment. Individual anatomy, diagnosis, healing and outcomes vary. Images are educational and do not promise a particular result.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 md:px-8 bg-warm-gray">
        <div className="luxury-container max-w-5xl">
          <div className="space-y-16 md:space-y-20">
            {clinicalCase.sections.map((section, index) => (
              <motion.div key={section.label} {...fadeUp} transition={{ duration: 0.7 }} className="grid grid-cols-1 md:grid-cols-[0.7fr_1.3fr] gap-5 md:gap-16 border-t border-divider pt-8 md:pt-10">
                <div>
                  <p className="font-body text-[9px] tracking-[0.28em] uppercase text-charcoal-light/60">{section.label}</p>
                </div>
                <div>
                  <h2 className="font-display text-2xl md:text-4xl font-light text-navy leading-[1.08] mb-5">{section.title}</h2>
                  <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-[1.85]">{section.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <OneRoofCare compact />

      <section className="py-20 md:py-28 px-6 md:px-8">
        <div className="luxury-container max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20">
          <motion.div {...fadeUp} transition={{ duration: 0.75 }}>
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-charcoal-light mb-6">Treatment Sequence</p>
            <h2 className="font-display text-3xl md:text-4xl font-light text-navy mb-8">A staged path to the <span className="italic">final result</span></h2>
            <ol className="space-y-0">
              {clinicalCase.sequence.map((step, index) => (
                <li key={step} className="flex gap-5 items-baseline border-b border-divider py-4 first:pt-0">
                  <span className="font-body text-[9px] tracking-[0.2em] text-charcoal-light/45">{String(index + 1).padStart(2, "0")}</span>
                  <span className="font-body text-sm text-charcoal-light font-light">{step}</span>
                </li>
              ))}
            </ol>
          </motion.div>
          <motion.div {...fadeUp} transition={{ duration: 0.75, delay: 0.08 }}>
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-charcoal-light mb-6">Long-Term Care</p>
            <h2 className="font-display text-3xl md:text-4xl font-light text-navy mb-8">The case continues after <span className="italic">delivery</span></h2>
            <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-[1.85] mb-9">{clinicalCase.maintenance}</p>
            <div className="flex flex-wrap gap-x-7 gap-y-3">
              {clinicalCase.related.map((item) => (
                <Link key={item.to} to={item.to} className="font-body text-[10px] tracking-[0.16em] uppercase text-navy/65 hover:text-navy border-b border-navy/25 hover:border-navy pb-1 transition-colors">{item.label}</Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 md:px-8 bg-navy text-center">
        <div className="luxury-container max-w-2xl">
          <p className="font-body text-[10px] tracking-[0.3em] uppercase text-white/45 mb-6">Your diagnosis will be your own</p>
          <h2 className="font-display text-3xl md:text-5xl font-light text-white mb-7">Begin with a <span className="italic">comprehensive evaluation</span></h2>
          <p className="font-body text-sm md:text-base text-white/60 font-light leading-relaxed mb-9">Clinical photographs can show what is possible in one case. An examination determines what is appropriate and predictable for you.</p>
          <Link to="/contact" className="cta-tactile inline-block px-10 py-4 bg-white text-navy font-body text-[10px] tracking-[0.22em] uppercase">Request a Consultation</Link>
        </div>
      </section>

      <PageFooter />
    </main>
  );
};

export default ClinicalCaseDetail;
