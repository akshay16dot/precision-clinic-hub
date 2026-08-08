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

const AuricularProsthesis = () => {
  usePageSEO({
    title: "Auricular Prosthesis (Prosthetic Ear) | Maxillofacial Prosthodontist NJ",
    description:
      "Custom silicone ear prostheses for microtia, cancer surgery and trauma. Adhesive versus implant retention, how they are matched to the opposite ear, and what to expect.",
  });

  return (
    <ClinicalPage
      eyebrow="Maxillofacial Prosthetics"
      title="Auricular prosthesis:"
      titleItalic="a custom prosthetic ear"
      standfirst="A hand-sculpted silicone ear, mirrored from your own opposite ear where one exists, for patients with microtia, surgical loss or traumatic amputation. Fabricated and fitted by a fellowship-trained maxillofacial prosthodontist in New Jersey."
    >
      <Section eyebrow="Who this is for">
        <P>
          An auricular prosthesis replaces all or part of the external ear. Patients
          arrive at this from three main directions: born with microtia or anotia, ear
          loss following cancer surgery, or traumatic amputation from an accident, burn
          or animal bite.
        </P>
        <P>
          The ear is one of the most difficult structures in the body to reconstruct
          surgically. Rib cartilage reconstruction is a multi-stage procedure with a
          result that varies considerably between surgeons and patients. A prosthesis
          offers a different trade: it comes off at night, but the form and detail
          achievable are generally superior, and where an opposite ear exists it can be
          mirrored almost exactly.
        </P>
        <Note label="This is a genuine choice">
          Neither option is universally better. Surgical reconstruction gives a
          permanently attached ear with a less detailed form. A prosthesis gives a highly
          detailed, well-matched ear that is removable. Age, the state of the local
          tissue, patient preference and the quality of the available surgical option all
          feed into it. A good discussion covers both honestly.
        </Note>
      </Section>

      <Section alt heading="How the ear is" headingItalic="made">
        <H3>Mirroring the opposite ear</H3>
        <P>
          Where you have one intact ear, that ear is the template. It is scanned or
          impressed, then digitally or manually mirrored to produce the opposite side.
          This is why unilateral cases often achieve such close matches: we are not
          inventing a form, we are reproducing yours.
        </P>
        <P>
          In bilateral cases the ear is designed from facial proportion, family
          photographs where available, and the anatomy of the surrounding area.
        </P>

        <H3>Sculpting the detail</H3>
        <P>
          The helix, antihelix, tragus, concha and lobe are each sculpted individually.
          Ear anatomy is intricate and the eye is unusually good at detecting when it is
          wrong, so this stage takes time and is where the quality of the final result is
          largely determined.
        </P>

        <H3>Colour</H3>
        <P>
          Silicone is intrinsically pigmented to your base tone, then hand-tinted for the
          variation that real skin has. Ears carry more visible vascularity than most
          facial skin, particularly at the helical rim and the lobe, and reproducing that
          is part of why a prosthetic ear reads as real.
        </P>
      </Section>

      <Section heading="Adhesive or" headingItalic="implant retention">
        <P>
          For ears specifically, implant retention has a stronger case than it does for
          some other facial prostheses. The ear projects from the head, is knocked
          frequently in ordinary life, and is exactly where glasses, masks and helmets
          apply force.
        </P>
        <H3>Implant retention</H3>
        <P>
          Two or three small implants are placed in the mastoid bone behind the ear and
          connected to a bar-and-clip or magnetic system. The prosthesis clips on
          securely and positions identically every time. For children with microtia this
          is frequently the preferred route once bone development allows.
        </P>
        <H3>Adhesive retention</H3>
        <P>
          Medical adhesive at the margins. No surgery required, and a reasonable starting
          point for patients who want to try a prosthesis before committing to implants,
          or for whom surgery is not advisable. Hold is less secure, particularly during
          sport or in hot weather.
        </P>
        <Note label="A practical detail patients raise">
          Glasses are the most common daily question. With implant retention, glasses can
          usually be worn normally and rest on the prosthesis. With adhesive retention the
          arm of the glasses is more likely to disturb the margin, so frame choice and
          positioning need thought.
        </Note>
      </Section>

      <Section alt eyebrow="Practical realities" heading="Living with a prosthetic" headingItalic="ear">
        <List
          items={[
            "Removed at night, cleaned daily with mild soap and water.",
            "Typical lifespan is one to three years before colour or edge deterioration warrants replacement.",
            "Hair can be worn over the margin, though a well-made prosthesis does not require concealment.",
            "It does not restore hearing. Where hearing loss is also present, a bone-anchored hearing device can often be planned alongside the prosthesis, and the two are frequently coordinated on the same implant planning.",
            "Sport is generally manageable with implant retention. Contact sport needs individual discussion.",
            "Children with microtia are usually assessed for implant candidacy around school age, though timing depends on bone development and is decided case by case.",
          ]}
        />
      </Section>

      <Section eyebrow="Common questions" heading="Questions patients ask" headingItalic="most often">
        <FAQ
          items={[
            {
              q: "How closely will it match my other ear?",
              a: "Where you have an intact opposite ear, very closely. It is mirrored directly from your own anatomy rather than approximated. The main visible difference in ordinary life tends to be that a prosthesis does not move or flex the way a natural ear does, which is rarely noticed.",
            },
            {
              q: "Will it restore my hearing?",
              a: "No. An auricular prosthesis restores the appearance and form of the external ear. It does not affect hearing. Where hearing loss is present, a bone-anchored hearing aid can often be planned at the same time, and coordinating the implant planning for both at once avoids problems later.",
            },
            {
              q: "Is this covered by insurance?",
              a: "Generally yes. Auricular prostheses are prosthetic devices rather than cosmetic treatment, and Medicare covers them under HCPCS code L8045. We explain the coverage process, the documentation that gets claims approved, and what to do about a denial on a separate page.",
            },
            {
              q: "Can a child have one?",
              a: "Yes, and adhesive-retained prostheses can be made for young children. Implant retention is generally deferred until the mastoid bone is sufficiently developed. Children outgrow prostheses as the opposite ear grows, so replacement is more frequent during growth years.",
            },
            {
              q: "How long does the whole process take?",
              a: "For adhesive retention, typically several appointments across four to eight weeks. Implant retention adds a surgical procedure and a healing period of several months before the prosthesis is made, so the full timeline is longer.",
            },
          ]}
        />
      </Section>

      <PageCTA
        heading="Find out what is achievable in your case"
        body="Whether you are weighing a prosthesis against surgical reconstruction, or have had reconstruction that did not give the result you hoped for, a consultation will tell you honestly what is possible."
        note="Dr. Akshay Parmar, BDS, DDS, MDSc, FACP, FAAMP. Fellowship trained in maxillofacial prosthetics at Memorial Sloan Kettering Cancer Center."
      />

      <RelatedPages
        links={[
          { to: "/nasal-prosthesis", label: "Nasal Prosthesis" },
          { to: "/orbital-prosthesis", label: "Orbital Prosthesis" },
          { to: "/facial-prosthesis-insurance-coverage", label: "Insurance Coverage" },
          { to: "/maxillofacial-rehabilitation", label: "Maxillofacial Rehabilitation" },
        ]}
      />
    </ClinicalPage>
  );
};

export default AuricularProsthesis;
