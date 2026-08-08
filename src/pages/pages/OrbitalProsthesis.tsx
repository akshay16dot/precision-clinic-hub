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

const OrbitalProsthesis = () => {
  usePageSEO({
    title: "Orbital Prosthesis After Eye Removal | Maxillofacial Prosthodontist NJ",
    description:
      "Custom orbital prostheses after orbital exenteration, including the hand-painted iris, adhesive versus implant retention, and the difference from an ocular prosthesis.",
  });

  return (
    <ClinicalPage
      eyebrow="Maxillofacial Prosthetics"
      title="Orbital prosthesis:"
      titleItalic="after the eye and socket are removed"
      standfirst="A custom silicone prosthesis restoring the eye, eyelids and surrounding tissue after orbital exenteration, with a hand-painted iris matched to your remaining eye. Made by a fellowship-trained maxillofacial prosthodontist in New Jersey."
    >
      <Section eyebrow="First, an important distinction">
        <P>
          Two very different devices get called an eye prosthesis, and patients are
          frequently given information about the wrong one.
        </P>
        <H3>An ocular prosthesis</H3>
        <P>
          Fits inside an intact eye socket after the eye itself has been removed but the
          eyelids and surrounding tissue remain. It sits behind the lids like a large
          contact lens, and the lids move over it. This is made by an ocularist.
        </P>
        <H3>An orbital prosthesis</H3>
        <P>
          Replaces the eye and the surrounding structures after an orbital exenteration,
          where the socket contents, and often the eyelids, have been removed. It is an
          external prosthesis that sits on the face and includes the eye, the lids, the
          lashes and the surrounding skin as one piece. This is the province of a
          maxillofacial prosthodontist.
        </P>
        <Note label="Which one applies to you">
          If your eyelids are intact and you close your eye normally, you likely need an
          ocular prosthesis. If the socket and lids were removed, leaving an open cavity,
          you need an orbital prosthesis. This page is about the second.
        </Note>
      </Section>

      <Section alt heading="How an orbital prosthesis is" headingItalic="made">
        <H3>Recording the defect</H3>
        <P>
          An impression or facial scan captures the cavity and the surrounding face.
          Where the exenteration is recent, we wait until the site has healed and
          stabilized.
        </P>

        <H3>Sculpting the lids and surrounding tissue</H3>
        <P>
          The prosthesis is sculpted to mirror your opposite eye: the position and slope
          of the lid margins, the depth of the upper lid crease, the way the outer corner
          sits. Symmetry with the remaining side is what makes the result read correctly,
          and small errors here are noticeable in a way they are not elsewhere on the
          face.
        </P>

        <H3>The iris</H3>
        <P>
          The eye is either a custom hand-painted iris or a stock iris colour-matched to
          your remaining eye. Hand painting reproduces the specific pattern of your own
          iris, including the flecking and the variation in the collarette, and it is
          worth the additional time in most cases. Painting is done under magnification
          while comparing directly against your eye.
        </P>

        <H3>Lashes and finishing</H3>
        <P>
          Individual lashes are placed into the silicone. Brow hair is added where the
          brow was included in the resection. Edges are feathered thin so the margin
          falls where it is least conspicuous, generally along natural creases and the
          brow line.
        </P>
      </Section>

      <Section heading="What the prosthesis actually" headingItalic="does">
        <P>
          Appearance is the reason most patients seek one, but it is not the only
          function, and this matters when documenting medical necessity for insurance.
        </P>
        <List
          items={[
            "Covers and protects an open cavity that is otherwise exposed to dust, debris and impact",
            "Reduces the drying and crusting that an open socket produces",
            "Supports glasses, where the defect has removed the structure that would normally do so",
            "Restores facial symmetry, which affects how people are perceived and treated in ordinary daily interaction",
          ]}
        />
        <Note label="A realistic expectation">
          An orbital prosthesis does not blink and the eye does not track with your
          remaining eye. At conversational distance, and particularly in profile or in
          photographs, a well-made prosthesis is generally not identified as one. Direct
          sustained eye contact in bright light is where the difference is most apparent.
          Most patients find that the freedom to be in public without an eye patch far
          outweighs this.
        </Note>
      </Section>

      <Section alt heading="Retention: adhesive or" headingItalic="implants">
        <P>
          The orbital region is a strong candidate for implant retention. The prosthesis
          is relatively large, the margins sit in a mobile area of the face, and the
          bone around the orbital rim generally offers good implant sites.
        </P>
        <H3>Implant retention</H3>
        <P>
          Two to four implants in the orbital rim, connected to a bar-and-clip or magnet
          system. Positioning is repeatable to the millimetre, which matters more here
          than anywhere else on the face because symmetry with the opposite eye is what
          sells the result. No daily adhesive at the lid margins.
        </P>
        <H3>Adhesive retention</H3>
        <P>
          Viable and requires no surgery, but the orbital region is a harder place for
          adhesive to perform well. Facial movement, tearing from the remaining eye and
          perspiration all work against it.
        </P>
        <P>
          Prior radiation to the orbit affects implant planning and healing, and needs
          to be discussed specifically. It does not automatically rule implants out, but
          it changes the assessment.
        </P>
      </Section>

      <Section eyebrow="Common questions" heading="Questions patients ask" headingItalic="most often">
        <FAQ
          items={[
            {
              q: "Will the prosthetic eye move?",
              a: "No. An orbital prosthesis is fixed and does not track with your remaining eye or blink. This is the main visible limitation and the honest reason some patients choose to continue with a patch in certain settings. Most wear the prosthesis routinely and reserve nothing for special occasions.",
            },
            {
              q: "How closely can the iris be matched?",
              a: "Very closely with hand painting. The iris is painted while comparing directly against your remaining eye, reproducing the base colour, the flecking and the pattern variation. Stock irises are quicker and less expensive but match less precisely.",
            },
            {
              q: "Can I wear glasses?",
              a: "Yes, and glasses are often part of the plan. They break up the visual field around the prosthesis and help conceal the upper margin. With implant retention the frame can generally be worn normally.",
            },
            {
              q: "Is it covered by insurance?",
              a: "Generally yes. Medicare covers orbital prostheses under HCPCS code L8042 as a prosthetic device rather than cosmetic treatment. Because the prosthesis also protects an open cavity, the medical necessity argument is usually strong. We cover coverage, documentation and appeals on a separate page.",
            },
            {
              q: "How soon after exenteration can it be made?",
              a: "Typically once the site has healed and stabilized, commonly two to three months, though this varies with the extent of surgery and whether radiation is planned. If radiation is scheduled, sequencing should be discussed early, because it affects both timing and implant planning.",
            },
            {
              q: "I was told years ago that nothing could be done. Is that still true?",
              a: "Very likely not. Digital scanning, current silicone materials and craniofacial implant systems have all changed substantially. Patients previously deemed unsuitable, including those with prior radiation, are frequently candidates now. It is worth a reassessment.",
            },
          ]}
        />
      </Section>

      <PageCTA
        heading="A consultation will tell you what is realistic"
        body="If you are facing an exenteration, recovering from one, or have been living with a patch because you were told a prosthesis was not possible, we can give you an honest assessment. We coordinate with ocular oncology and surgical teams routinely."
        note="Dr. Akshay Parmar, BDS, DDS, MDSc, FACP, FAAMP. Fellowship trained in maxillofacial prosthetics at Memorial Sloan Kettering Cancer Center."
      />

      <RelatedPages
        links={[
          { to: "/nasal-prosthesis", label: "Nasal Prosthesis" },
          { to: "/auricular-prosthesis", label: "Auricular Prosthesis" },
          { to: "/facial-prosthesis-insurance-coverage", label: "Insurance Coverage" },
          { to: "/maxillofacial-rehabilitation", label: "Maxillofacial Rehabilitation" },
        ]}
      />
    </ClinicalPage>
  );
};

export default OrbitalProsthesis;
