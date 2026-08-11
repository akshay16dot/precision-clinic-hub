import { useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SiteNavigation from "@/components/SiteNavigation";
import PageFooter from "@/components/PageFooter";
import OneRoofCare from "@/components/OneRoofCare";
import JsonLd from "@/components/JsonLd";
import { usePageSEO } from "@/hooks/usePageSEO";
import { REGIONAL_CARE, type RegionKey } from "@/data/regionalCare";
import drParmarHero from "@/assets/dr-parmar-hero.jpg";
import surgeryImage from "@/assets/parmar-surgery.jpg";
import dentalImage from "@/assets/hero-dental.jpg";
import clinicalImage from "@/assets/hero-clinical.jpg";
import portraitImage from "@/assets/dr-parmar-color-headshot.jpg";

const images: Record<RegionKey, string> = {
  princeton: drParmarHero,
  mercer: surgeryImage,
  east: dentalImage,
  bucks: portraitImage,
  "new-brunswick": clinicalImage,
};

const treatments = [
  {
    title: "Dental Implants",
    text: "Single and multiple implants planned around the final tooth, with surgical placement and restoration coordinated in the Hamilton office when appropriate.",
    to: "/dental-implants-new-jersey",
  },
  {
    title: "All-on-4 and Full-Arch Care",
    text: "A complete fixed arch planned from extractions and implant surgery through provisional teeth, the final prosthesis and maintenance.",
    to: "/full-arch-implants-new-jersey",
  },
  {
    title: "Full-Mouth Reconstruction",
    text: "A coordinated approach for worn, broken, missing or failing teeth that considers function, appearance and long-term stability together.",
    to: "/full-mouth-reconstruction-new-jersey",
  },
  {
    title: "Maxillofacial Prosthodontics",
    text: "Fellowship-trained prosthetic rehabilitation after head and neck cancer treatment, trauma or congenital differences, including obturator and facial prostheses.",
    to: "/maxillofacial-rehabilitation",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-70px" },
};

const RegionalCare = ({ region }: { region: RegionKey }) => {
  const data = REGIONAL_CARE[region];

  usePageSEO({
    title: data.title,
    description: data.intro,
    path: data.path,
    image: images[region],
  });

  const structuredData = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "@id": `https://drparmardds.com${data.path}/#service`,
          name: `Prosthodontic care for ${data.areas.join(", ")}`,
          serviceType: "Prosthodontics and dental implant rehabilitation",
          provider: { "@id": "https://drparmardds.com/#practice" },
          areaServed: data.areaServed.map((name) => ({ "@type": "Place", name })),
          url: `https://drparmardds.com${data.path}/`,
        },
        {
          "@type": "FAQPage",
          "@id": `https://drparmardds.com${data.path}/#faq`,
          mainEntity: data.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://drparmardds.com/" },
            { "@type": "ListItem", position: 2, name: "Patients Traveling to Hamilton", item: "https://drparmardds.com/patients-traveling-to-hamilton/" },
            { "@type": "ListItem", position: 3, name: data.title, item: `https://drparmardds.com${data.path}/` },
          ],
        },
      ],
    }),
    [data]
  );

  return (
    <main className="bg-background">
      <SiteNavigation />
      <JsonLd id={`region-${region}`} data={structuredData} />

      <section className="relative min-h-[620px] md:min-h-[700px] flex items-end overflow-hidden bg-navy">
        <img
          src={images[region]}
          alt="Dr. Akshay Parmar and specialist prosthodontic care in Hamilton, New Jersey"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/20" />
        <div className="relative z-10 luxury-container w-full px-6 md:px-10 pb-20 md:pb-28 pt-44">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="max-w-3xl">
            <p className="font-body text-[10px] md:text-xs tracking-[0.32em] uppercase text-white/60 mb-7">
              {data.eyebrow}
            </p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-[0.98] mb-8">
              {data.title}<br />
              <span className="italic">{data.titleItalic}</span>
            </h1>
            <p className="font-body text-sm md:text-base text-white/70 font-light leading-[1.85] max-w-2xl">
              {data.intro}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 md:px-8">
        <div className="luxury-container max-w-5xl">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20 items-start">
            <div>
              <p className="font-body text-[10px] tracking-[0.32em] uppercase text-charcoal-light mb-5">Why Patients Travel</p>
              <h2 className="font-display text-3xl md:text-5xl font-light text-navy leading-[1.05]">
                One diagnosis.<br /><span className="italic">One coordinated plan.</span>
              </h2>
            </div>
            <div className="space-y-6">
              <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-[1.85]">{data.perspective}</p>
              <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-[1.85]">{data.coordination}</p>
            </div>
          </motion.div>
        </div>
      </section>

      <OneRoofCare compact />

      <section className="py-20 md:py-28 px-6 md:px-8">
        <div className="luxury-container max-w-5xl">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="text-center mb-14 md:mb-18">
            <p className="font-body text-[10px] tracking-[0.32em] uppercase text-charcoal-light mb-5">Specialist Treatment</p>
            <h2 className="font-display text-3xl md:text-5xl font-light text-navy">Care built around the <span className="italic">whole case</span></h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-divider">
            {treatments.map((treatment, index) => (
              <motion.div key={treatment.title} {...fadeUp} transition={{ duration: 0.6, delay: index * 0.08 }} className="bg-background p-8 sm:p-10 md:p-12">
                <p className="font-body text-[9px] tracking-[0.24em] uppercase text-charcoal-light/50 mb-4">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="font-display text-2xl font-light text-navy mb-4">{treatment.title}</h3>
                <p className="font-body text-sm text-charcoal-light font-light leading-[1.75] mb-6">{treatment.text}</p>
                <Link to={treatment.to} className="font-body text-[10px] tracking-[0.2em] uppercase text-navy border-b border-navy/25 hover:border-navy transition-colors pb-1">Learn More</Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 px-6 md:px-8 bg-warm-gray">
        <div className="luxury-container max-w-4xl">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-10 md:gap-16 items-start">
            <div>
              <p className="font-body text-[10px] tracking-[0.32em] uppercase text-charcoal-light mb-5">Planning Your Visit</p>
              <h2 className="font-display text-3xl md:text-4xl font-light text-navy">From {data.areas[0]} to <span className="italic">Hamilton</span></h2>
            </div>
            <div>
              <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-[1.85] mb-7">{data.routeNote}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/patients-traveling-to-hamilton" className="cta-tactile px-7 py-4 bg-navy text-white font-body text-[10px] tracking-[0.2em] uppercase text-center">Plan Your Visit</Link>
                <Link to="/virtual-consultation" className="cta-tactile px-7 py-4 border border-navy/25 text-navy font-body text-[10px] tracking-[0.2em] uppercase text-center">Start Virtually</Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 md:px-8">
        <div className="luxury-container max-w-3xl">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="text-center mb-12">
            <p className="font-body text-[10px] tracking-[0.32em] uppercase text-charcoal-light mb-5">Common Questions</p>
            <h2 className="font-display text-3xl md:text-4xl font-light text-navy">Before you <span className="italic">visit</span></h2>
          </motion.div>
          <div className="divide-y divide-divider">
            {data.faqs.map((faq) => (
              <div key={faq.question} className="py-8">
                <h3 className="font-display text-xl md:text-2xl font-light text-navy mb-3">{faq.question}</h3>
                <p className="font-body text-sm text-charcoal-light font-light leading-[1.8]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 md:px-8 bg-navy text-center">
        <div className="luxury-container max-w-2xl">
          <p className="font-body text-[10px] tracking-[0.32em] uppercase text-white/45 mb-6">1544 Kuser Road, Suite C3, Hamilton, NJ</p>
          <h2 className="font-display text-3xl md:text-5xl font-light text-white mb-7">Begin with a <span className="italic">clear diagnosis</span></h2>
          <p className="font-body text-sm md:text-base text-white/60 font-light leading-relaxed mb-9">A comprehensive evaluation establishes what can be retained, what should be rebuilt and whether specialist treatment is appropriate.</p>
          <Link to="/contact" className="cta-tactile inline-block px-10 py-4 bg-white text-navy font-body text-[10px] tracking-[0.22em] uppercase">Request a Consultation</Link>
        </div>
      </section>

      <PageFooter />
    </main>
  );
};

export default RegionalCare;
