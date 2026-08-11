import { useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Camera, Car, FileText, MapPin } from "lucide-react";
import SiteNavigation from "@/components/SiteNavigation";
import PageFooter from "@/components/PageFooter";
import OneRoofCare from "@/components/OneRoofCare";
import JsonLd from "@/components/JsonLd";
import { usePageSEO } from "@/hooks/usePageSEO";
import { REGION_LIST } from "@/data/regionalCare";
import heroImage from "@/assets/dr-parmar-hero.jpg";

const steps = [
  {
    icon: Camera,
    title: "Begin from home",
    text: "A virtual consultation can organize your concern, photographs and available records before you decide whether to travel for a clinical examination.",
  },
  {
    icon: FileText,
    title: "Bring the useful records",
    text: "Recent radiographs, scans, implant information, treatment plans, medication lists and relevant medical or surgical records help avoid unnecessary repetition.",
  },
  {
    icon: Car,
    title: "Plan the sequence",
    text: "You will know which appointments are diagnostic, surgical, restorative or maintenance visits. Compatible steps may be coordinated when it is clinically appropriate.",
  },
  {
    icon: MapPin,
    title: "Stay connected locally",
    text: "Your general dentist or specialist can remain involved. With your permission, the Hamilton team can communicate the completed care and follow-up requirements.",
  },
];

const faqs = [
  {
    question: "How far do patients travel to see Dr. Parmar?",
    answer:
      "The practice welcomes patients from Mercer County, Princeton, Central Jersey, Bucks County and other communities. Whether travel is worthwhile depends on the complexity of the problem and the specialist care required, not a fixed mileage rule.",
  },
  {
    question: "Can a virtual consultation confirm my treatment?",
    answer:
      "No. It can clarify the concern, review photographs or available records and determine the appropriate next step. Diagnosis and definitive treatment planning require an in-person clinical examination and any necessary imaging.",
  },
  {
    question: "Can visits be combined?",
    answer:
      "Some diagnostic or restorative steps may be coordinated, but healing intervals and laboratory stages cannot be rushed. The team explains the likely visit sequence before treatment begins.",
  },
  {
    question: "Where is the office?",
    answer:
      "Dr. Parmar's practice is at 1544 Kuser Road, Suite C3, Hamilton, New Jersey 08619. Patients can call (609) 585-1616 for arrival guidance.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-70px" },
};

const TravelingPatients = () => {
  usePageSEO({
    title: "Traveling to Hamilton for Prosthodontic Care | Dr. Parmar",
    description:
      "Plan specialist implant, full-arch, reconstruction or maxillofacial care in Hamilton, NJ. Virtual consultation, records, travel and coordinated visits.",
    path: "/patients-traveling-to-hamilton",
    image: heroImage,
  });

  const structuredData = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "FAQPage",
          "@id": "https://drparmardds.com/patients-traveling-to-hamilton/#faq",
          mainEntity: faqs.map((faq) => ({
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
          ],
        },
      ],
    }),
    []
  );

  return (
    <main className="bg-background">
      <SiteNavigation />
      <JsonLd id="traveling-patients" data={structuredData} />

      <section className="relative min-h-[650px] md:min-h-[760px] flex items-end overflow-hidden bg-navy">
        <img src={heroImage} alt="Dr. Akshay Parmar, board-certified prosthodontist in Hamilton, New Jersey" className="absolute inset-0 w-full h-full object-cover object-[62%_center] sm:object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/75 to-navy/25" />
        <div className="relative z-10 luxury-container w-full px-6 md:px-10 pb-20 md:pb-28 pt-44">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="max-w-3xl">
            <p className="font-body text-[10px] md:text-xs tracking-[0.32em] uppercase text-white/60 mb-7">For patients traveling to Hamilton, New Jersey</p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-[0.98] mb-8">
              Specialist care worth<br /><span className="italic">planning for.</span>
            </h1>
            <p className="font-body text-sm md:text-base text-white/70 font-light leading-[1.85] max-w-2xl">
              For complex implants, full-arch treatment, full-mouth reconstruction or maxillofacial rehabilitation, the right plan matters more than the shortest drive. We make the journey clear before treatment begins.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 md:px-8">
        <div className="luxury-container max-w-5xl">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="max-w-3xl mx-auto text-center mb-16">
            <p className="font-body text-[10px] tracking-[0.32em] uppercase text-charcoal-light mb-5">A Considered Visit</p>
            <h2 className="font-display text-3xl md:text-5xl font-light text-navy mb-7">Fewer unknowns. <span className="italic">Better continuity.</span></h2>
            <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-[1.85]">
              Traveling for specialist care should feel organized, not complicated. The team helps gather the right information, explains the sequence and remains responsible through the stages completed in the Hamilton office.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-divider">
            {steps.map((step, index) => (
              <motion.div key={step.title} {...fadeUp} transition={{ duration: 0.6, delay: index * 0.08 }} className="bg-background p-8 md:p-9">
                <step.icon className="w-5 h-5 text-navy/55 mb-7" strokeWidth={1.3} />
                <h3 className="font-display text-xl md:text-2xl font-light text-navy mb-4">{step.title}</h3>
                <p className="font-body text-sm text-charcoal-light font-light leading-[1.75]">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <OneRoofCare compact />

      <section className="py-20 md:py-28 px-6 md:px-8">
        <div className="luxury-container max-w-5xl">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="text-center mb-14">
            <p className="font-body text-[10px] tracking-[0.32em] uppercase text-charcoal-light mb-5">Regional Patient Guides</p>
            <h2 className="font-display text-3xl md:text-5xl font-light text-navy">Care from across the <span className="italic">region</span></h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-divider">
            {REGION_LIST.map((region, index) => (
              <motion.div key={region.path} {...fadeUp} transition={{ duration: 0.55, delay: index * 0.06 }} className={`bg-background p-8 sm:p-10 md:p-12 ${index === REGION_LIST.length - 1 ? "md:col-span-2" : ""}`}>
                <p className="font-body text-[9px] tracking-[0.24em] uppercase text-charcoal-light/55 mb-4">{region.areas.join(" · ")}</p>
                <h3 className="font-display text-2xl md:text-3xl font-light text-navy mb-5">{region.titleItalic}</h3>
                <p className="font-body text-sm text-charcoal-light font-light leading-[1.75] mb-6 max-w-2xl">{region.intro}</p>
                <Link to={region.path} className="font-body text-[10px] tracking-[0.2em] uppercase text-navy border-b border-navy/25 hover:border-navy transition-colors pb-1">View Regional Guide</Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 px-6 md:px-8 bg-warm-gray">
        <div className="luxury-container max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }}>
            <p className="font-body text-[10px] tracking-[0.32em] uppercase text-charcoal-light mb-5">Before You Travel</p>
            <h2 className="font-display text-3xl md:text-4xl font-light text-navy mb-7">Start with the <span className="italic">right information</span></h2>
            <ul className="space-y-4 font-body text-sm text-charcoal-light font-light leading-relaxed">
              <li className="border-b border-divider pb-4">Recent dental radiographs or 3D scans, if available</li>
              <li className="border-b border-divider pb-4">Names or records for existing dental implants</li>
              <li className="border-b border-divider pb-4">Previous treatment plans and relevant medical history</li>
              <li className="border-b border-divider pb-4">A list of medications and treating physicians</li>
              <li>Clear photographs of the smile and the area of concern</li>
            </ul>
          </motion.div>
          <motion.div {...fadeUp} transition={{ duration: 0.8, delay: 0.1 }}>
            <p className="font-body text-[10px] tracking-[0.32em] uppercase text-charcoal-light mb-5">The First Step</p>
            <h2 className="font-display text-3xl md:text-4xl font-light text-navy mb-7">Virtual or <span className="italic">in person</span></h2>
            <p className="font-body text-sm md:text-base text-charcoal-light font-light leading-[1.85] mb-8">A virtual consultation can clarify whether the concern belongs in this practice and what records would make the in-person visit more useful. Patients ready for examination may request a comprehensive consultation directly.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/virtual-consultation" className="cta-tactile px-7 py-4 bg-navy text-white font-body text-[10px] tracking-[0.2em] uppercase text-center">Virtual Consultation</Link>
              <Link to="/contact" className="cta-tactile px-7 py-4 border border-navy/25 text-navy font-body text-[10px] tracking-[0.2em] uppercase text-center">Request a Visit</Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 md:px-8">
        <div className="luxury-container max-w-3xl">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="text-center mb-12">
            <p className="font-body text-[10px] tracking-[0.32em] uppercase text-charcoal-light mb-5">Travel Questions</p>
            <h2 className="font-display text-3xl md:text-4xl font-light text-navy">What patients <span className="italic">ask</span></h2>
          </motion.div>
          <div className="divide-y divide-divider">
            {faqs.map((faq) => (
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
          <p className="font-body text-[10px] tracking-[0.32em] uppercase text-white/45 mb-6">Hamilton, New Jersey</p>
          <h2 className="font-display text-3xl md:text-5xl font-light text-white mb-7">Plan the first step <span className="italic">before the drive</span></h2>
          <p className="font-body text-sm md:text-base text-white/60 font-light leading-relaxed mb-9">Call the office or begin virtually. We will help identify the information that makes your specialist evaluation more useful.</p>
          <a href="tel:+16095851616" className="cta-tactile inline-block px-10 py-4 bg-white text-navy font-body text-[10px] tracking-[0.22em] uppercase">Call (609) 585-1616</a>
        </div>
      </section>

      <PageFooter />
    </main>
  );
};

export default TravelingPatients;
