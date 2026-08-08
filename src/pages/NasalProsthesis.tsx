import { usePageSEO } from "@/hooks/usePageSEO";
import {
  ClinicalPage,
  Section,
  P,
  H3,
  List,
  Note,
  FAQ,
  PageCTA,
  RelatedPages,
} from "@/components/ClinicalPage";

const NasalProsthesis = () => {
  usePageSEO({
    title: "Nasal Prosthesis (Prosthetic Nose) | Maxillofacial Prosthodontist NJ",
    description:
      "Custom silicone nasal prostheses after cancer surgery, Mohs resection or trauma. How they are made, how they attach, what they cost and how long they last.",
  });

  return (
    <ClinicalPage
      eyebrow="Maxillofacial Prosthetics"
      title="Nasal prosthesis:"
      titleItalic="rebuilding what surgery removed"
      standfirst="A custom silicone nose, sculpted and hand-tinted to match your remaining skin, for patients who have lost part or all of the nose to cancer surgery, Mohs resection or trauma. Made and fitted by a fellowship-trained maxillofacial prosthodontist in Hamilton Township, New Jersey."
    >
      <Section eyebrow="What it is">
        <P>
          A nasal prosthesis is a custom-made silicone replacement for the nose or part
          of it. It is not a generic appliance. Each one is sculpted specifically to your
          face, coloured to match your skin across its full range of tone, and finished
          with edges thin enough to disappear against the surrounding tissue.
        </P>
        <P>
          Patients typically come to this after a rhinectomy for skin cancer, after an
          extensive Mohs procedure, following trauma, or when surgical reconstruction has
          been attempted and has not produced an acceptable result. Some patients choose
          a prosthesis instead of reconstruction from the outset, because it avoids
          further surgery and can produce a more natural result in a defect that is
          difficult to rebuild with tissue.
        </P>
        <Note label="Worth knowing early">
          Prosthetic rehabilitation and surgical reconstruction are not competitors. In
          many cases the best plan uses both, with surgery establishing a stable
          foundation and the prosthesis restoring the visible form. That decision is
          easier to make well before surgery than after.
        </Note>
      </Section>

      <Section alt heading="How a nasal prosthesis is" headingItalic="made">
        <H3>Impression and scanning</H3>
        <P>
          The process starts with a record of the defect and the surrounding face. This
          is taken with a conventional impression, a digital facial scan, or both. It is
          painless and takes under an hour.
        </P>

        <H3>Sculpting</H3>
        <P>
          The nose is sculpted in wax on a cast of your face. This is where most of the
          artistry sits. Where a pre-surgical photograph is available, the sculpt is
          matched to your own nose. Where it is not, the form is developed from facial
          proportion and from photographs you provide.
        </P>

        <H3>Try-in</H3>
        <P>
          You see and approve the sculpt before anything is made in silicone. Shape,
          projection, nostril form and how it sits against the surrounding tissue are all
          adjustable at this stage, and adjusting them here costs nothing but time.
        </P>

        <H3>Colouring and finishing</H3>
        <P>
          The silicone is intrinsically coloured to your base skin tone, then
          hand-tinted with the variation real skin actually has: the slightly redder
          areas, the small vessels, the freckling. Edges are feathered to near
          transparency so the margin is not visible at conversational distance.
        </P>
        <P>
          Fabrication typically runs across several appointments over a few weeks. It is
          not a single-visit process, and any provider who suggests it is should prompt a
          question about how the colour matching is being done.
        </P>
      </Section>

      <Section heading="How it stays" headingItalic="on">
        <P>There are two established approaches, and the right one depends on your defect.</P>
        <H3>Adhesive retention</H3>
        <P>
          Medical-grade adhesive applied to the prosthesis margin. It requires no
          surgery, can be started as soon as tissue has healed, and is straightforward to
          learn. The trade-offs are daily application, adhesive residue that needs
          cleaning, reduced hold in heat and humidity, and gradual skin irritation for
          some patients.
        </P>
        <H3>Implant retention</H3>
        <P>
          Small craniofacial implants placed in the bone around the defect, connected to
          magnets or a bar-and-clip system. The prosthesis clicks on and off. Retention is
          substantially more secure, there is no daily adhesive, and positioning is
          identical every time. The trade-off is a surgical procedure and a healing period
          before the prosthesis can be loaded.
        </P>
        <Note label="Which one">
          Patients who lead active lives, live in hot climates, or have struggled with
          adhesive failure in public tend to be much happier with implant retention. The
          confidence difference is larger than the clinical literature conveys, because
          the fear of a prosthesis loosening in public is what actually keeps people
          indoors.
        </Note>
      </Section>

      <Section alt eyebrow="Practical realities" heading="Living with a nasal" headingItalic="prosthesis">
        <List
          items={[
            "It is removed at night and cleaned daily with mild soap and water.",
            "Most silicone prostheses last one to three years before the colour or the edges require replacement. Sun exposure is the main factor that shortens this.",
            "Glasses can usually be worn, and are often used to help conceal the upper margin.",
            "Swimming and showering are generally done with the prosthesis removed, particularly with adhesive retention.",
            "Breathing is through the prosthesis opening or the underlying airway, depending on your anatomy and the design. This is planned deliberately rather than left to chance.",
            "A second prosthesis is worth considering where budget allows, so that there is no period without one when the first is being remade.",
          ]}
        />
      </Section>

      <Section eyebrow="Common questions" heading="Questions patients ask" headingItalic="most often">
        <FAQ
          items={[
            {
              q: "Will people be able to tell?",
              a: "At conversational distance, a well-made and well-matched prosthesis is generally not obvious. Close inspection in bright direct light is a different matter. The realistic goal is that you can go through an ordinary day without it being the thing people notice, which is achievable for most patients.",
            },
            {
              q: "Does insurance cover it?",
              a: "Usually, yes. Facial prostheses are classified as prosthetic devices rather than cosmetic treatment, and Medicare covers nasal prostheses under HCPCS code L8040. We have written a fuller explanation of coverage, codes and appeals on a separate page.",
            },
            {
              q: "How soon after surgery can it be made?",
              a: "Generally once the surgical site has healed and stabilized, which commonly falls somewhere in the range of six weeks to three months. Tissue continues to change during the first year, so an early prosthesis may need modification. That is expected rather than a problem.",
            },
            {
              q: "Can I have one made if my surgery was years ago?",
              a: "Yes. There is no time limit, and long-healed sites are often easier to work with because the tissue is stable. Patients told years ago that nothing could be done are frequently candidates now, because materials and implant retention have both changed.",
            },
            {
              q: "How far do patients travel for this?",
              a: "There are only eight maxillofacial prosthetics training programs in the United States, so patients routinely travel for this care. Our practice is in Hamilton Township, New Jersey, within reach of Princeton, Philadelphia, Bucks County and central New Jersey, and we see patients from considerably further.",
            },
          ]}
        />
      </Section>

      <PageCTA
        heading="Ask whether a prosthesis is right for your case"
        body="If you are facing surgery, recovering from it, or living with a result you were told could not be improved, a consultation will tell you honestly what is achievable. We coordinate with surgical and oncology teams as a matter of course."
        note="Dr. Akshay Parmar, BDS, DDS, MDSc, FACP, FAAMP. Fellowship trained in maxillofacial prosthetics at Memorial Sloan Kettering Cancer Center."
      />

      <RelatedPages
        links={[
          { to: "/auricular-prosthesis", label: "Auricular Prosthesis" },
          { to: "/orbital-prosthesis", label: "Orbital Prosthesis" },
          { to: "/facial-prosthesis-insurance-coverage", label: "Insurance Coverage" },
          { to: "/maxillofacial-rehabilitation", label: "Maxillofacial Rehabilitation" },
        ]}
      />
    </ClinicalPage>
  );
};

export default NasalProsthesis;
