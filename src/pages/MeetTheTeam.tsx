import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SiteNavigation from "@/components/SiteNavigation";
import PageCTA from "@/components/PageCTA";
import PageFooter from "@/components/PageFooter";
import drParmar from "@/assets/dr-parmar-color-headshot.jpg";
import { usePageSEO } from "@/hooks/usePageSEO";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
};

const MeetTheTeam = () => {
  usePageSEO({
    title: "Meet the Prosthodontic Team | Parmar, Hamilton Township NJ",
    description:
      "Meet the specialist-led team providing coordinated prosthodontic, implant, restorative and maxillofacial care in Hamilton Township, New Jersey.",
  });

  return (
    <main className="bg-background">
      <SiteNavigation />

      <section className="relative overflow-hidden px-6 pb-20 pt-36 md:px-8 md:pb-28 md:pt-44">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_15%,hsl(40_18%_91%/.72),transparent_42%)]" />
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="luxury-container relative max-w-4xl text-center"
        >
          <p className="mb-6 font-body text-[10px] uppercase tracking-[0.4em] text-charcoal-light">
            The People Behind Your Care
          </p>
          <h1 className="font-display text-4xl font-light leading-[0.95] tracking-tight text-navy sm:text-5xl md:text-6xl">
            Individual expertise.
            <br />
            <span className="italic">One coordinated team.</span>
          </h1>
          <p className="mx-auto mt-9 max-w-2xl font-body text-sm font-light leading-[1.9] text-charcoal-light md:text-[15px]">
            Parmar is led by Dr. Akshay Parmar and strengthened by clinicians who bring continuity, experience and thoughtful collaboration to select cases. Your care is planned clearly, communicated carefully and coordinated around the outcome you need.
          </p>
        </motion.div>
      </section>

      <section className="px-6 pb-24 md:px-8 md:pb-32">
        <div className="luxury-container max-w-6xl">
          <motion.article
            {...fadeUp}
            transition={{ duration: 0.8 }}
            className="grid overflow-hidden border border-divider/70 bg-card lg:grid-cols-12"
          >
            <div className="relative min-h-[370px] overflow-hidden bg-[hsl(40_12%_94%)] sm:min-h-[470px] lg:col-span-5 lg:min-h-[620px]">
              <img
                src={drParmar}
                alt="Dr. Akshay Parmar, board-certified prosthodontist"
                className="absolute inset-0 h-full w-full object-cover object-[center_18%]"
                style={{ filter: "contrast(1.02) saturate(0.88)" }}
              />
            </div>
            <div className="flex items-center px-8 py-12 sm:px-12 lg:col-span-7 lg:px-16 xl:px-20">
              <div>
                <p className="mb-5 font-body text-[10px] uppercase tracking-[0.34em] text-charcoal-light">
                  Practice Owner &amp; Clinical Lead
                </p>
                <h2 className="font-display text-4xl font-light tracking-tight text-navy md:text-5xl">
                  Dr. Akshay Parmar
                </h2>
                <p className="mt-3 font-body text-[11px] uppercase tracking-[0.16em] text-charcoal-light/70">
                  BDS, DDS, MDSc, FACP, FAAMP
                </p>
                <div className="my-8 h-px w-10 bg-navy/35" />
                <p className="font-body text-sm font-light leading-[1.9] text-charcoal-light md:text-[15px]">
                  Dr. Parmar is a board-certified prosthodontist and fellowship-trained maxillofacial prosthodontist. He leads diagnosis, treatment planning and complex care across dental implants, full-arch rehabilitation, full-mouth reconstruction, aesthetic dentistry and maxillofacial prosthetics.
                </p>
                <p className="mt-5 font-body text-sm font-light leading-[1.9] text-charcoal-light md:text-[15px]">
                  His approach brings surgery, provisional and final restorations, follow-up and long-term maintenance together through one specialist-led team whenever clinically appropriate.
                </p>
                <Link
                  to="/about"
                  className="mt-9 inline-flex border-b border-navy/35 pb-1 font-body text-[10px] uppercase tracking-[0.24em] text-navy transition-colors hover:border-navy"
                >
                  Training &amp; Clinical Philosophy
                </Link>
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      <section className="bg-[hsl(40_12%_94%)] px-6 py-24 md:px-8 md:py-32">
        <div className="luxury-container max-w-6xl">
          <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-6 font-body text-[10px] uppercase tracking-[0.35em] text-charcoal-light">
              Continuity &amp; Collaboration
            </p>
            <h2 className="font-display text-3xl font-light leading-[0.98] text-navy md:text-5xl">
              Experienced clinicians,
              <br />
              <span className="italic">connected care.</span>
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            <motion.article {...fadeUp} transition={{ duration: 0.7 }} className="border border-divider/70 bg-background p-8 sm:p-10 md:p-12">
              <div className="mb-10 flex h-20 w-20 items-center justify-center rounded-full border border-navy/15 bg-navy text-primary-foreground">
                <span className="font-display text-2xl font-light tracking-[0.08em]">JR</span>
              </div>
              <p className="mb-4 font-body text-[10px] uppercase tracking-[0.28em] text-charcoal-light">
                Board-Certified Prosthodontist
              </p>
              <h3 className="font-display text-3xl font-light text-navy">Dr. Joseph D. Randazzo</h3>
              <p className="mt-2 font-body text-[10px] uppercase tracking-[0.16em] text-charcoal-light/65">
                DDS, FACP · Director, Maxillofacial Prosthetics at MSK
              </p>
              <p className="mt-6 font-body text-sm font-light leading-[1.85] text-charcoal-light">
                Dr. Randazzo is a board-certified prosthodontist with more than 20 years of experience in complex restorative care, dental oncology, facial prosthetics and dental implants. He earned his DDS at New York University, completed residency training at the University of Medicine and Dentistry of New Jersey and Marquette University, and completed fellowships in maxillofacial prosthetics at Memorial Sloan Kettering Cancer Center and implant dentistry at NYU.
              </p>
              <p className="mt-5 font-body text-sm font-light leading-[1.85] text-charcoal-light">
                He serves as Director of Maxillofacial Prosthetics at Memorial Sloan Kettering and remains involved here in select maxillofacial and prosthodontic care. His continued presence preserves longstanding patient relationships and meaningful clinical continuity as the practice moves forward under Dr. Parmar's leadership.
              </p>
              <a
                href="https://www.mskcc.org/cancer-care/doctors/joseph-randazzo"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex border-b border-navy/30 pb-1 font-body text-[10px] uppercase tracking-[0.22em] text-navy transition-colors hover:border-navy"
              >
                Memorial Sloan Kettering Profile
              </a>
            </motion.article>

            <motion.article {...fadeUp} transition={{ duration: 0.7, delay: 0.08 }} className="border border-divider/70 bg-background p-8 sm:p-10 md:p-12">
              <div className="mb-10 flex h-20 w-20 items-center justify-center rounded-full border border-navy/15 bg-navy text-primary-foreground">
                <span className="font-display text-2xl font-light tracking-[0.08em]">NV</span>
              </div>
              <p className="mb-4 font-body text-[10px] uppercase tracking-[0.28em] text-charcoal-light">
                Prosthodontic Care
              </p>
              <h3 className="font-display text-3xl font-light text-navy">Dr. Neel Vakharia</h3>
              <p className="mt-2 font-body text-[10px] uppercase tracking-[0.16em] text-charcoal-light/65">
                DMD · Prosthodontist
              </p>
              <p className="mt-6 font-body text-sm font-light leading-[1.85] text-charcoal-light">
                Dr. Vakharia completed his postdoctoral training at Rutgers School of Dental Medicine and brings an engineering background to his prosthodontic work. He continues to provide select prosthodontic care within the practice, supporting coordinated restorative treatment and continuity for established patients.
              </p>
            </motion.article>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-8 md:py-32">
        <motion.div {...fadeUp} transition={{ duration: 0.8 }} className="luxury-container max-w-4xl text-center">
          <p className="mb-6 font-body text-[10px] uppercase tracking-[0.35em] text-charcoal-light">
            One Standard of Care
          </p>
          <h2 className="font-display text-3xl font-light text-navy md:text-5xl">
            Coordinated from the first conversation
            <br className="hidden md:block" /> to long-term maintenance.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl font-body text-sm font-light leading-[1.9] text-charcoal-light md:text-[15px]">
            Behind every clinician is a clinical and administrative team focused on communication, comfort and thoughtful follow-through. For complex treatment, the goal is simple: fewer gaps, clear responsibility and a plan that stays connected from beginning to end.
          </p>
        </motion.div>
      </section>

      <PageCTA
        title="Meet the Team in Hamilton"
        description="Tell us what you need help with, and our team will guide you toward the right consultation."
      />
      <PageFooter />
    </main>
  );
};

export default MeetTheTeam;
