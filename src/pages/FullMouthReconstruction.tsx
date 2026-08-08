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
import fullmouthBefore from "@/assets/fullmouth-case1-before.jpg";
import fullmouthAfter from "@/assets/fullmouth-case1-after.jpg";

const FullMouthReconstruction = () => {
  usePageSEO({
    title: "Full Mouth Reconstruction in Hamilton Township, NJ | Prosthodontist",
    description:
      "Rebuilding a failing dentition as one plan rather than a series of repairs. What full mouth reconstruction involves, how it is sequenced, what it costs and how long it takes.",
  });

  return (
    <ClinicalPage
      eyebrow="Full Mouth Reconstruction"
      title="When the problem is not one tooth,"
      titleItalic="it is all of them"
      standfirst="Full mouth reconstruction is what happens when repairing teeth one at a time has stopped working. It rebuilds function, bite and appearance as a single plan rather than a decade of separate emergencies. Planned and delivered by a board-certified prosthodontist in Hamilton Township, New Jersey."
    >
      <Section eyebrow="Who this is for">
        <P>
          Most people arrive here after years of individual repairs. A crown here, a
          root canal there, a bridge that failed and was replaced, teeth that have
          gradually worn down or shifted. Each treatment was reasonable on its own. The
          problem is that none of them were part of a plan.
        </P>
        <P>
          Eventually the mouth reaches a point where fixing the next thing in isolation
          makes the overall situation worse, because the bite has changed, the remaining
          teeth are carrying loads they were never designed for, and each new restoration
          has to compensate for the last one.
        </P>
        <Note label="The distinction that matters">
          Full mouth reconstruction is not cosmetic dentistry done at scale. It is a
          functional rebuild in which appearance is one of the outputs. If someone is
          selling you a full mouth reconstruction primarily on how it will look, that is
          worth questioning.
        </Note>
      </Section>

      <Section alt heading="What actually drives the" headingItalic="decision">
        <P>
          Reconstruction becomes the right answer when several of these are true at once:
        </P>
        <List
          items={[
            "Multiple teeth are failing or have already been lost, and the remaining ones are compensating.",
            "The bite has collapsed, meaning the teeth have worn or shifted enough that the jaw closes further than it should.",
            "Existing crowns, bridges or implants are reaching the end of their life at roughly the same time.",
            "Chewing has become limited, painful or restricted to one side.",
            "There is jaw joint discomfort, muscle soreness or frequent headaches associated with the bite.",
            "The appearance of the teeth has changed noticeably, usually shorter and darker, as wear has progressed.",
          ]}
        />
        <P>
          One of these on its own rarely justifies reconstruction. Several together usually
          mean that continuing to treat individual teeth is the more expensive path,
          because each repair is being built onto an unstable foundation.
        </P>
      </Section>

      <Section heading="How a reconstruction is" headingItalic="sequenced">
        <P>
          The order matters more than any individual procedure. A reconstruction done in
          the wrong sequence produces beautiful teeth on an unstable bite, which fails.
        </P>

        <H3>1. Diagnosis and records</H3>
        <P>
          Photographs, 3D imaging, digital scans, and a full assessment of how the jaw
          actually moves. This stage establishes where the bite should sit, which is the
          reference every later decision is measured against.
        </P>

        <H3>2. Stabilization</H3>
        <P>
          Anything actively deteriorating is addressed first. Active decay, gum disease,
          failing restorations, teeth that cannot be saved. Nothing definitive is built
          until the foundation is sound.
        </P>

        <H3>3. Testing the new bite</H3>
        <P>
          Where the bite is being changed, the new position is trialled in provisional
          restorations before anything permanent is made. You live in the proposed bite
          for a period, and it is adjusted based on how it actually performs rather than
          how it looked on a model.
        </P>

        <H3>4. Definitive restoration</H3>
        <P>
          The final restorations are made to reproduce the provisional design that has
          already been tested. This is why the provisional stage is not a delay. It is
          the stage that makes the final result predictable.
        </P>

        <H3>5. Protection and review</H3>
        <P>
          A night guard where grinding contributed to the original problem, and a review
          schedule. A reconstruction that is not protected from the force that caused the
          original damage will fail in the same way.
        </P>

        <Note label="Why the provisional stage gets skipped">
          It adds time and cost, and patients understandably want to reach the end. It is
          also the single stage most predictive of whether the reconstruction lasts. If a
          plan does not include a tested provisional phase for a case involving a bite
          change, ask why.
        </Note>
      </Section>

      {/* Case in point */}
      <section className="py-14 md:py-20" style={{ background: "linear-gradient(180deg, hsl(40 12% 95%) 0%, hsl(40 15% 96.5%) 100%)" }}>
        <div className="luxury-container px-6 md:px-8">
          <motion.div {...fade} transition={{ duration: 0.8 }} className="max-w-3xl mx-auto">
            <p className="font-body text-[10px] tracking-[0.3em] uppercase text-charcoal-light/70 mb-5 text-center">
              A Case in Point
            </p>
            <h2 className="font-display text-2xl md:text-[32px] font-light text-navy leading-[1.2] mb-9 text-center">
              Worn, failing dentition <em className="italic">rebuilt</em>
            </h2>
            <div className="grid grid-cols-2 rounded-sm overflow-hidden border border-divider shadow-[0_14px_44px_-18px_hsl(220_20%_15%/0.25)]">
              <div className="relative aspect-[4/3]">
                <img src={fullmouthBefore} alt="Full mouth reconstruction, before treatment" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                <span className="absolute top-3 left-3 px-2.5 py-1 font-body text-[9px] tracking-[0.22em] uppercase rounded-sm bg-black/55 text-white/90">Before</span>
              </div>
              <div className="relative aspect-[4/3]">
                <img src={fullmouthAfter} alt="Full mouth reconstruction, after treatment" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                <span className="absolute top-3 left-3 px-2.5 py-1 font-body text-[9px] tracking-[0.22em] uppercase rounded-sm bg-white/80 text-navy/85 backdrop-blur-sm">After</span>
              </div>
            </div>
            <p className="font-body text-[12px] text-charcoal-light/70 font-light italic mt-4 text-center leading-relaxed">
              Treatment completed in this practice. Photographs reflect an actual patient outcome.
            </p>
          </motion.div>
        </div>
      </section>

      <Section heading="What it is built" headingItalic="from">
        <P>
          A reconstruction is usually a combination rather than one type of restoration.
          What goes where is a clinical decision, not a package.
        </P>
        <RefTable
          head={["Component", "Where it is used"]}
          rows={[
            ["Crowns", "Teeth with enough sound structure to be kept but not enough to be left alone."],
            ["Onlays and partial coverage", "A more conservative option where only part of the tooth needs rebuilding. Preferred where the tooth allows it."],
            ["Implants", "Where teeth are missing or cannot be saved. Positioned to support the planned bite rather than placed wherever bone is easiest."],
            ["Bridges", "Spanning gaps where implants are not suitable, or where adjacent teeth already need crowning."],
            ["Veneers", "Front teeth where the structure is largely intact and the requirement is shape, colour and proportion."],
            ["Night guard", "Almost always, where wear or grinding contributed to the original breakdown."],
          ]}
        />
      </Section>

      <Section alt heading="Time and" headingItalic="cost">
        <P>
          Both vary enormously with the extent of the case, so anyone quoting a figure
          before examining you is guessing. What can be described honestly is the shape.
        </P>
        <H3>Time</H3>
        <P>
          Most reconstructions run somewhere between six and eighteen months from first
          consultation to final restoration. Where implants are involved, healing time
          drives the schedule rather than appointment availability. Cases requiring
          grafting take longer.
        </P>
        <H3>Cost</H3>
        <P>
          Reconstruction is priced by what it contains, so the range is wide. What is
          worth insisting on is a written plan that itemizes each stage rather than a
          single headline number, so you can see what you are committing to and in what
          order. Treatment can often be staged over time, which spreads cost, provided the
          staging is planned deliberately rather than improvised.
        </P>
        <Note label="A fair question to ask">
          Ask what happens if you complete only the first stage. A well-sequenced plan
          leaves you better off at every stopping point. A plan that only works if you
          complete all of it is a plan with a risk you should know about in advance.
        </Note>
      </Section>

      <Section eyebrow="Common questions" heading="Questions patients ask" headingItalic="most often">
        <FAQ
          items={[
            {
              q: "Will I be without teeth at any point?",
              a: "No. Provisional restorations are worn throughout, and they are designed to look and function acceptably rather than merely fill a gap. You should never be in a position where you cannot work or socialize during treatment, and if a plan requires that, it should be flagged clearly at the outset.",
            },
            {
              q: "Does it have to happen all at once?",
              a: "Often not. Many reconstructions can be staged over months or years, treating the most urgent quadrant first. What matters is that the staging is planned from a single overall design, so each stage is compatible with the next rather than being an improvised repair.",
            },
            {
              q: "Will insurance cover any of it?",
              a: "Some components typically are covered, such as crowns on teeth with existing damage, though dental annual maximums are usually between $1,000 and $2,500, which covers a small fraction of a full reconstruction. Where tooth loss followed trauma or medical treatment, some medical coverage may apply. We help you determine what applies rather than assuming.",
            },
            {
              q: "How long will the result last?",
              a: "Well-executed reconstructions frequently last fifteen years or more, and individual components longer. Longevity depends heavily on two things you control: whether you wear the night guard if one was prescribed, and whether you attend maintenance reviews. The most common cause of premature failure is the original force that caused the damage being allowed to continue unchecked.",
            },
            {
              q: "Why see a prosthodontist rather than a general dentist for this?",
              a: "Full mouth reconstruction is essentially the definition of prosthodontic training, which is a three-year residency focused specifically on rebuilding function, bite and appearance across a whole mouth. Many general dentists do this work well. The relevant question is how many complete cases a clinician finishes in a year, and that is entirely fair to ask directly.",
            },
          ]}
        />
      </Section>

      <PageCTA
        heading="Start with a written plan, not a quote"
        body="A consultation includes full records, an assessment of what is actually driving the breakdown, and a staged written plan with the sequence and pricing set out. If a less extensive treatment would serve you better, we will tell you that."
        note="Dr. Akshay Parmar, BDS, DDS, MDSc, FACP, FAAMP. Board-certified prosthodontist, Hamilton Township, New Jersey."
      />

      <RelatedPages
        links={[
          { to: "/tooth-wear-rehabilitation", label: "Worn Teeth & Bite" },
          { to: "/full-arch-implants-new-jersey", label: "All-on-4 & Full Arch" },
          { to: "/veneers-aesthetic-reconstruction", label: "Porcelain Veneers" },
          { to: "/clinical-cases", label: "Before & After Cases" },
        ]}
      />
    </ClinicalPage>
  );
};

export default FullMouthReconstruction;
