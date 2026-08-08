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
} from "@/components/ClinicalPage";

const ToothWearRehabilitation = () => {
  usePageSEO({
    title: "Worn Teeth and Bite Reconstruction | Hamilton Township NJ",
    description:
      "Severe tooth wear, erosion and collapsed bite. Why worn teeth are a functional problem rather than a cosmetic one, and how lost vertical dimension is rebuilt.",
  });

  return (
    <ClinicalPage
      eyebrow="Tooth Wear & Bite Reconstruction"
      title="Worn teeth are not"
      titleItalic="a cosmetic problem"
      standfirst="Teeth that have worn short are usually the visible end of a process that has also changed your bite, your jaw position and the load on everything still standing. Treating the appearance without addressing the cause guarantees it happens again."
    >
      <Section eyebrow="What is actually happening">
        <P>
          Enamel does not grow back. Once it is gone, the softer dentine underneath wears
          several times faster, which is why tooth wear tends to accelerate rather than
          progress steadily. Teeth that took twenty years to shorten by a millimetre can
          lose considerably more in the following five.
        </P>
        <P>
          As the teeth shorten, the jaw closes further than it was designed to. The
          distance between your nose and chin reduces. That is what dentists mean by a
          collapsed bite or lost vertical dimension, and it is why people with advanced
          wear often look older than they are, with a shortened lower face and deeper
          lines at the corners of the mouth.
        </P>
        <Note label="Why this matters clinically">
          If you rebuild worn teeth without restoring the lost height, you are building
          taller teeth into a space that no longer exists. They chip, they fracture, or
          they push the jaw somewhere it does not want to go. Restoring the vertical
          dimension is not an upsell, it is what makes the restorations survivable.
        </Note>
      </Section>

      <Section alt heading="Three causes, and they need different" headingItalic="answers">
        <RefTable
          head={["Type", "Cause and what it looks like"]}
          rows={[
            [
              "Attrition",
              "Tooth against tooth, usually grinding or clenching. Flat, polished, matching wear facets on opposing teeth. Often worst on the canines and front teeth.",
            ],
            [
              "Erosion",
              "Acid dissolving enamel. Dietary acid, reflux, or frequent vomiting. Smooth, scooped, glossy surfaces, often with cupped hollows on the biting surfaces and thinning behind the upper front teeth.",
            ],
            [
              "Abrasion",
              "Something mechanical other than teeth. Aggressive brushing, abrasive pastes, habits like holding objects between the teeth. Typically notching at the gum line.",
            ],
          ]}
          caption="Most advanced cases are a combination, and identifying the dominant cause changes the treatment plan and what has to change afterwards to protect it."
        />
        <P>
          This distinction is the part most often skipped. Rebuilding an erosion case
          without addressing the acid source, or a grinding case without a night guard,
          means the new restorations are exposed to exactly what destroyed the originals.
        </P>
      </Section>

      <Section heading="How lost height is" headingItalic="rebuilt">
        <H3>Establishing where the bite should sit</H3>
        <P>
          Records, imaging and an assessment of how the jaw moves and where it is
          comfortable establish the target position. This is a measured decision rather
          than an estimate.
        </P>

        <H3>Testing it before committing</H3>
        <P>
          The proposed new height is trialled first, usually with provisional restorations
          or a removable appliance worn for a period. You eat, speak and sleep in the
          proposed bite, and it is adjusted based on how it performs. Muscles and the jaw
          joint adapt over weeks rather than instantly.
        </P>

        <H3>Rebuilding</H3>
        <P>
          Once the tested position is confirmed, the definitive restorations reproduce it.
          Depending on how much structure remains, this may be onlays and partial coverage
          restorations, full crowns, or in less advanced cases direct composite. Preserving
          tooth structure is prioritized wherever the loading allows it.
        </P>

        <H3>Protecting the result</H3>
        <P>
          A night guard where grinding was the driver, and management of the acid source
          where erosion was. This is not optional maintenance. It is the difference
          between a rebuild that lasts fifteen years and one that fails in three.
        </P>
      </Section>

      <Section alt heading="Catching it" headingItalic="early is cheaper">
        <P>
          Wear is one of the few dental problems where the cost curve is genuinely steep.
          Early intervention can often be additive, meaning material is added to the teeth
          without cutting them down. Advanced cases usually require full coverage
          restorations on many teeth.
        </P>
        <List
          items={[
            "Front teeth looking shorter than they used to, or becoming more transparent at the edges",
            "Flat, shiny wear surfaces that match up with the opposing teeth",
            "Increasing sensitivity to cold or sweet things",
            "Chipping at the edges of the front teeth",
            "A partner mentioning grinding at night, or waking with jaw or temple soreness",
            "Old fillings that appear to be standing proud of the surrounding tooth, which usually means the tooth around them has worn down",
          ]}
        />
        <Note label="If you recognize several of these">
          It is worth an assessment even if nothing hurts. Wear is painless for most of
          its course, which is precisely why it is usually addressed late. Photographic
          records taken now also give a baseline to measure against, which is useful even
          if no treatment is done yet.
        </Note>
      </Section>

      <Section eyebrow="Common questions" heading="Questions patients ask" headingItalic="most often">
        <FAQ
          items={[
            {
              q: "Can worn teeth just be built back up without crowns?",
              a: "In earlier cases, frequently yes. Composite bonding added to the worn surfaces can restore shape and height without cutting the tooth, and it is reversible and considerably less expensive. It wears faster than porcelain and needs maintenance, but for a younger patient with moderate wear it is often the better first step precisely because it preserves options.",
            },
            {
              q: "Will changing my bite feel strange?",
              a: "Initially, usually yes, and that is expected. Most people adapt over two to six weeks. This is exactly why the new position is tested in provisionals first, so any difficulty adapting is discovered while the position can still be changed easily.",
            },
            {
              q: "Will a night guard alone fix it?",
              a: "A night guard prevents further wear. It does not restore what has already been lost. For someone with early wear it can be the entire treatment, and that is a good outcome. For someone whose bite has already collapsed, it protects the situation but does not correct it.",
            },
            {
              q: "Is grinding caused by stress?",
              a: "Stress is one contributor, but sleep-disordered breathing, certain medications, reflux and airway issues are all associated with nocturnal grinding. Where the pattern suggests a sleep or airway component, that is worth investigating rather than assuming stress and stopping there.",
            },
            {
              q: "Will insurance cover it?",
              a: "Coverage is generally better when the treatment is documented as functional rather than cosmetic, which is how genuine wear cases should be presented, with photographs and records showing structural loss. Annual maximums still limit what is realistically recoverable on a large case.",
            },
          ]}
        />
      </Section>

      <PageCTA
        heading="Find out how much has actually been lost"
        body="An assessment establishes the cause, measures what has been lost, and sets out whether this is a case for monitoring, conservative additive treatment, or a full rebuild. Many patients need considerably less than they expect."
        note="Dr. Akshay Parmar, BDS, DDS, MDSc, FACP, FAAMP. Board-certified prosthodontist, Hamilton Township, New Jersey."
      />

      <RelatedPages
        links={[
          { to: "/full-mouth-reconstruction-new-jersey", label: "Full Mouth Reconstruction" },
          { to: "/veneers-aesthetic-reconstruction", label: "Porcelain Veneers" },
          { to: "/smile-design", label: "Digital Smile Design" },
          { to: "/clinical-cases", label: "Before & After Cases" },
        ]}
      />
    </ClinicalPage>
  );
};

export default ToothWearRehabilitation;
