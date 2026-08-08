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

const FrontToothImplant = () => {
  usePageSEO({
    title: "Front Tooth Implant: The Hardest Case in Implant Dentistry | NJ",
    description:
      "Replacing a front tooth is the most demanding case in implant dentistry. Why the gum matters more than the tooth, what goes wrong, and how anterior cases should be planned.",
  });

  return (
    <ClinicalPage
      eyebrow="Anterior Aesthetics"
      title="Front teeth are the hardest thing"
      titleItalic="in implant dentistry"
      standfirst="A molar implant has to work. A front tooth implant has to work and be invisible, in the one part of the mouth everyone sees, where a millimetre of gum in the wrong place is the difference between a result nobody notices and one nobody stops noticing."
    >
      <Section eyebrow="Why this is different">
        <P>
          Most implant content treats all implants as the same procedure in different
          locations. They are not. Replacing an upper front tooth is a fundamentally
          harder problem than replacing a molar, and the reason has almost nothing to do
          with the implant itself.
        </P>
        <P>
          At the back of the mouth, success means the tooth functions and lasts. Nobody
          examines the gum contour around your second molar. At the front, the implant can
          be perfectly integrated and the case can still be a visible failure, because the
          tissue around it did not turn out right.
        </P>
        <Note label="The thing that actually decides the result">
          The gum, not the tooth. A beautifully made crown emerging from a receded or
          asymmetric gum line looks wrong, and no amount of ceramic work fixes it. The
          soft tissue is the case.
        </Note>
      </Section>

      <Section alt heading="What makes the front of the mouth" headingItalic="unforgiving">
        <RefTable
          head={["Factor", "Why it matters at the front"]}
          rows={[
            [
              "Thin bone",
              "The bone on the outer surface of the upper front jaw is often less than a millimetre thick. It resorbs readily after extraction, and once lost, the gum above it collapses.",
            ],
            [
              "The gum line",
              "Your existing teeth set the reference. The implant crown has to emerge at the same height as its neighbours and mirror the tooth on the opposite side. Asymmetry of a millimetre is visible.",
            ],
            [
              "The papilla",
              "The small triangle of gum between teeth. It depends on bone height between the implant and the adjacent tooth. Lose it and you get a dark triangle, which is one of the most common visible failures.",
            ],
            [
              "Your smile line",
              "If you show gum when you smile, every detail is exposed. If your lip covers the gum line, the tolerance is much wider. This should be assessed before planning, not after.",
            ],
            [
              "Translucency",
              "Front teeth are translucent at the edge and pick up light differently from back teeth. Matching a single central incisor to its neighbour is the hardest shade problem in dentistry.",
            ],
          ]}
        />
      </Section>

      <Section heading="Why timing matters more here than" headingItalic="anywhere else">
        <P>
          When a front tooth is removed, the bone that supported it begins resorbing
          immediately, and the thin outer plate is the first thing to go. What happens in
          the weeks after extraction largely determines what is achievable.
        </P>
        <H3>Immediate placement</H3>
        <P>
          Placing the implant at the same appointment the tooth is removed, where the
          bone and the surrounding tissue allow it. This preserves the architecture that
          already exists rather than trying to rebuild it later, and it is generally the
          best available outcome for a front tooth when conditions permit.
        </P>
        <H3>Socket preservation, then delayed placement</H3>
        <P>
          Where immediate placement is not advisable, such as with active infection or
          insufficient bone to stabilize the implant, grafting the socket at the time of
          extraction limits the collapse and preserves options.
        </P>
        <H3>Delayed placement with no preservation</H3>
        <P>
          The tooth is removed, the site heals unaided for months, and the implant is
          placed later. This is the most common route and the one that most often produces
          a compromised aesthetic result, because by then the ridge has flattened and the
          tissue has to be rebuilt rather than maintained.
        </P>
        <Note label="If a front tooth is failing and has not been removed yet">
          This is the moment when your options are widest. Get the case planned before the
          extraction, not after. Once the socket has healed flat, you are rebuilding
          rather than preserving, and the ceiling on the result is lower.
        </Note>
      </Section>

      <Section alt heading="What actually goes" headingItalic="wrong">
        <List
          items={[
            "A grey shadow through the gum, where a metal component shows through thin tissue. Preventable with the right abutment material and adequate tissue thickness.",
            "A dark triangle between the implant and the neighbouring tooth, from lost papilla.",
            "A crown that sits visibly higher or lower than the tooth beside it.",
            "A crown that is too long, because the gum receded after placement and the tooth had to be extended to meet it.",
            "A shade that matches under the office light and does not match in daylight.",
            "An implant angled so the screw access hole would come out through the front of the tooth, forcing a compromise.",
          ]}
        />
        <P>
          Every one of these traces back to a planning decision rather than a surgical
          accident. That is the argument for planning anterior cases backwards from the
          intended final tooth, and it is the specific thing prosthodontic training is
          built around.
        </P>
      </Section>

      <Section heading="How an anterior case should be" headingItalic="planned">
        <List
          items={[
            "Photographs and a smile analysis first, including how much gum shows when you smile and speak.",
            "A 3D scan to assess the bone available, particularly the thickness of the outer plate.",
            "A digital design of the final tooth before any surgery, so the implant position is chosen to support that tooth rather than the other way round.",
            "A surgical guide made from that design, so the implant goes where the plan says rather than where the drill wants to go.",
            "A provisional crown used deliberately to shape the gum during healing, which is how the emergence contour is developed.",
            "A final crown made only once the tissue has matured and stabilized.",
          ]}
        />
        <Note label="The provisional is not a placeholder">
          In anterior cases the temporary crown is a tool. Its shape trains the gum into
          the contour the final crown will emerge from. Skipping that stage, or using a
          generic temporary, gives away most of the control over the final result.
        </Note>
      </Section>

      <Section alt eyebrow="Common questions" heading="Questions patients ask" headingItalic="most often">
        <FAQ
          items={[
            {
              q: "Will anyone be able to tell it is an implant?",
              a: "In a well-planned case with adequate tissue, generally no. The realistic caveats are that a single central incisor next to a natural one is the hardest match in dentistry, and that patients with a high smile line have less margin for error. Both are assessable before treatment starts, and you should be told honestly which category you are in.",
            },
            {
              q: "Can I have a tooth the same day?",
              a: "Often yes. Where the implant achieves enough initial stability, a provisional crown can be fitted immediately so you are not without a front tooth. It is made not to take biting force during healing. Where stability is insufficient, forcing an immediate crown risks the implant, and a temporary bridge or retainer is used instead.",
            },
            {
              q: "What if I have already lost the bone?",
              a: "Grafting can rebuild both bone and soft tissue, and connective tissue grafting can restore thickness where the gum is thin. It adds time and cost, and the result is generally very good though rebuilding lost papilla is the hardest part. It is worth an assessment rather than assuming the situation is fixed.",
            },
            {
              q: "Is a bridge better than an implant for a front tooth?",
              a: "Sometimes. A bridge requires cutting down the neighbouring teeth, which is a real cost if those teeth are healthy. But where the adjacent teeth already have large restorations or crowns, a bridge can be the more conservative choice overall. Anyone who recommends an implant without discussing this is not giving you the full picture.",
            },
            {
              q: "How long will the crown last?",
              a: "The implant itself frequently lasts decades. The crown typically lasts ten to fifteen years or more, though it may need replacing sooner for aesthetic reasons if the gum changes or if the adjacent natural teeth shift in shade over time.",
            },
          ]}
        />
      </Section>

      <PageCTA
        heading="Bring us the front tooth case"
        body="If you have a failing front tooth, an implant crown that never looked right, or you have been told nothing more can be done about the appearance, we will give you an honest assessment of what is achievable."
        note="Dr. Akshay Parmar, BDS, DDS, MDSc, FACP, FAAMP. Board-certified prosthodontist, Hamilton Township, New Jersey."
      />

      <RelatedPages
        links={[
          { to: "/immediate-implant-rehabilitation", label: "Immediate Implants" },
          { to: "/veneers-aesthetic-reconstruction", label: "Porcelain Veneers" },
          { to: "/smile-design", label: "Digital Smile Design" },
          { to: "/failed-dental-implant-revision", label: "Failed Implant Revision" },
        ]}
      />
    </ClinicalPage>
  );
};

export default FrontToothImplant;
