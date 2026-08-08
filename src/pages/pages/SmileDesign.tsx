import { motion } from "framer-motion";
import { usePageSEO } from "@/hooks/usePageSEO";
import {
  ClinicalPage,
  Section,
  P,
  H3,
  List,
  Note,
  RefTable,
  FAQ,
  PageCTA,
  RelatedPages,
  fade,
} from "@/components/ClinicalPage";
import clinicalStart from "@/assets/smile-clinical-start.png";
import digitalAnalysis from "@/assets/smile-digital-analysis.png";
import digitalDesign from "@/assets/smile-digital-design.png";

const stages = [
  { img: clinicalStart, label: "Records", text: "Photographs and video of the face at rest, speaking and smiling." },
  { img: digitalAnalysis, label: "Analysis", text: "Proportion, midline, lip dynamics and tooth display measured against the face." },
  { img: digitalDesign, label: "Design", text: "The proposed result drawn over your own photographs before treatment begins." },
];

const SmileDesign = () => {
  usePageSEO({
    title: "Digital Smile Design | Hamilton Township, NJ Prosthodontist",
    description:
      "Facially driven digital smile design: how the result is planned, tested in your own mouth and approved before any tooth is touched. Board-certified prosthodontist in NJ.",
  });

  return (
    <ClinicalPage
      eyebrow="Digital Smile Design"
      title="See the result first."
      titleItalic="Then decide."
      standfirst="Smile design is a planning method, not a treatment. It establishes what the finished result should look like, tests it in your own mouth, and only then determines what treatment is actually needed to get there. Frequently that turns out to be less than expected."
    >
      <Section eyebrow="What it actually is">
        <P>
          The term gets used loosely, so it is worth being precise. Digital smile design
          is a planning process in which the proposed result is designed against your face
          before any decision is made about how to achieve it.
        </P>
        <P>
          It inverts the usual order. Conventionally a treatment is chosen first, veneers
          or crowns or orthodontics, and the result is whatever that treatment produces.
          Here the result is defined first, and the treatment is chosen as the means to
          reach a target that has already been agreed.
        </P>
        <Note label="Why the face, not the teeth">
          Teeth are judged in the context of a face, not on their own. The midline of your
          teeth should relate to the midline of your face. How much tooth shows depends on
          your lip length and how your lip moves when you speak. A set of teeth that is
          beautiful in isolation and wrong for the face reads as obviously artificial, and
          that mismatch is the single most common reason cosmetic work looks fake.
        </Note>
      </Section>

      {/* Process imagery */}
      <section className="py-14 md:py-20" style={{ background: "linear-gradient(180deg, hsl(40 12% 95%) 0%, hsl(40 15% 96.5%) 100%)" }}>
        <div className="luxury-container px-6 md:px-8">
          <motion.div {...fade} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto">
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-charcoal-light/70 mb-9 text-center">
              From Records to Design
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-7">
              {stages.map((s, i) => (
                <motion.div key={i} {...fade} transition={{ duration: 0.6, delay: i * 0.1 }}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-divider mb-4">
                    <img src={s.img} alt={s.label} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                  <p className="font-body text-[10px] tracking-[0.22em] uppercase text-navy/60 mb-1.5">{s.label}</p>
                  <p className="font-body text-[13.5px] text-charcoal-light font-light leading-[1.65]">{s.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Section heading="The stage that makes it" headingItalic="real">
        <P>
          A design on a screen is a proposal. What turns it into something you can
          actually judge is the mock-up.
        </P>
        <P>
          The approved design is transferred into your mouth as a temporary trial, placed
          over your existing teeth without cutting them. You wear it, look at it in your
          own bathroom mirror rather than under surgery lighting, speak with it, eat with
          it, and show it to people whose opinion you care about.
        </P>
        <List
          items={[
            "Nothing is cut, drilled or removed to place it.",
            "It comes off afterwards and you are exactly where you started.",
            "You can ask for the teeth to be longer, shorter, squarer, more rounded, whiter or less white, and see the change.",
            "You can decide, having seen it, that you do not want treatment at all.",
          ]}
        />
        <Note label="The thing worth knowing">
          A meaningful number of patients look at the mock-up and choose something more
          conservative than they originally asked for, or decide the change they wanted is
          smaller than they thought. That is a good outcome, and it is only possible if
          the trial happens before anything irreversible.
        </Note>
      </Section>

      <Section alt heading="What the design determines" headingItalic="you need">
        <P>
          Once the target is agreed, the treatment is whatever gets there with the least
          intervention. Often that is a combination, and often it is less than the patient
          expected.
        </P>
        <RefTable
          head={["Option", "When the design points to it"]}
          rows={[
            ["Whitening alone", "Where shape and proportion are already good and colour is the only issue. The most conservative outcome and more common than people expect."],
            ["Composite bonding", "Small shape corrections, chips, minor gaps. Added to the tooth, reversible, considerably less expensive. Wears faster and stains over time."],
            ["Porcelain veneers", "Where shape, proportion and colour all need changing across several teeth. Minimal but irreversible preparation."],
            ["Crowns", "Where teeth are already heavily restored or structurally compromised, so partial coverage would not survive."],
            ["Orthodontics first", "Where teeth are in the wrong position. Moving a tooth is usually more conservative than cutting it down to disguise its position."],
            ["Gum recontouring", "Where the teeth are the right size but the gum line is uneven or sits too low."],
          ]}
        />
        <P>
          The honest version of this: if a practice offers only veneers, the design will
          tend to conclude that you need veneers. A design process is only useful if the
          person running it can genuinely recommend the more conservative answer.
        </P>
      </Section>

      <Section eyebrow="Common questions" heading="Questions patients ask" headingItalic="most often">
        <FAQ
          items={[
            {
              q: "Is digital smile design a treatment I pay for separately?",
              a: "It is a planning process, and practices handle it differently. Some include it in the treatment fee, some charge for the design and mock-up stage separately, particularly since it involves real laboratory work and chair time. What matters is that you know before starting, and that you understand what you receive if you decide not to proceed.",
            },
            {
              q: "How accurate is the preview compared with the final result?",
              a: "The mock-up is a close representation of shape, length, proportion and arrangement, and the final restorations are made to reproduce it. What the mock-up cannot fully show is the translucency and surface detail of porcelain, which is generally better than the temporary material. Where the final result differs, it is usually more lifelike, not less.",
            },
            {
              q: "Can it fix crooked teeth without braces?",
              a: "Sometimes, within limits. Mild crowding or rotation can often be disguised with veneers. Significant misalignment usually cannot be, and attempting it means removing a lot of healthy tooth structure to create the illusion of a different position. In those cases orthodontics first, then minimal restorative work, is both more conservative and a better result. A design process should tell you honestly which category you are in.",
            },
            {
              q: "Will it look obviously done?",
              a: "That depends almost entirely on the design decisions rather than the materials: proportion relative to the face, appropriate variation between teeth, a natural gum line, and colour chosen to suit your complexion and age rather than the whitest available. Uniform, oversized, uniformly bright teeth are a design choice, not an inevitable outcome.",
            },
            {
              q: "How long does the whole process take?",
              a: "The design and mock-up stage typically runs across two to three appointments over a few weeks. Treatment time afterwards depends on what the design determined you need, from a single whitening course to several months where orthodontics is involved.",
            },
          ]}
        />
      </Section>

      <PageCTA
        heading="See it before you commit to it"
        body="A design consultation includes full photographic records, a facially driven design, and a trial mock-up worn in your own mouth. You approve the result before any treatment decision is made."
        note="Dr. Akshay Parmar, BDS, DDS, MDSc, FACP, FAAMP. Board-certified prosthodontist, Hamilton Township, New Jersey."
      />

      <RelatedPages
        links={[
          { to: "/veneers-aesthetic-reconstruction", label: "Porcelain Veneers" },
          { to: "/front-tooth-implant-new-jersey", label: "Front Tooth Aesthetics" },
          { to: "/teeth-whitening", label: "Teeth Whitening" },
          { to: "/full-mouth-reconstruction-new-jersey", label: "Full Mouth Reconstruction" },
        ]}
      />
    </ClinicalPage>
  );
};

export default SmileDesign;
