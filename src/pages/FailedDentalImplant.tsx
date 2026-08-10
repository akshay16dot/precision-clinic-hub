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

const FailedDentalImplant = () => {
  usePageSEO({
    title: "Failed Dental Implant? Revision and Second Opinions | NJ Prosthodontist",
    description:
      "What to do when a dental implant fails, loosens or was placed in the wrong position. Revision options, what can be saved, and honest second opinions from a board-certified prosthodontist.",
  });

  return (
    <ClinicalPage
      eyebrow="Revision and Second Opinions"
      title="Your implant failed."
      titleItalic="Here is what happens next."
      standfirst="Implants fail for reasons that are usually identifiable and often correctable. This page explains what actually goes wrong, what can be saved, and what a revision realistically involves. Written by a board-certified prosthodontist in Hamilton Township, New Jersey."
    >
      <Section eyebrow="Start here">
        <P>
          If you are reading this, something has gone wrong: an implant is loose, painful,
          the crown keeps coming off, the gum around it bleeds, or a full-arch bridge is
          not sitting the way it should. You may have been told to just live with it, or
          quoted a large sum to start over from scratch.
        </P>
        <P>
          Both of those are usually the wrong answer. Most implant problems have a
          specific, identifiable cause, and identifying it correctly determines whether
          you need a small correction or a genuine rebuild. Starting over without knowing
          the cause tends to reproduce the same failure.
        </P>
        <Note label="An honest note about second opinions">
          A second opinion is a normal part of medical care and is not a betrayal of your
          original dentist. Complications happen in every practice, including good ones.
          What matters is whether the problem is being diagnosed accurately now.
        </Note>
      </Section>

      <Section alt heading="Why implants actually" headingItalic="fail">
        <P>
          Failures fall into a small number of recognizable categories, and telling them
          apart is most of the work.
        </P>
        <RefTable
          head={["Cause", "What it looks like"]}
          rows={[
            [
              "Peri-implantitis",
              "Bleeding, swelling, progressive bone loss around an implant that was previously stable. The most common late failure.",
            ],
            [
              "Failed integration",
              "The implant never fused with the bone. Usually shows up within the first months, with mobility and discomfort.",
            ],
            [
              "Poor position",
              "The implant integrated fine but sits too far to one side, too deep, or at an angle that makes a natural-looking crown impossible.",
            ],
            [
              "Component failure",
              "A screw that loosens repeatedly, a fractured abutment, or a cracked crown. Frequently a symptom of a bite problem rather than a faulty part.",
            ],
            [
              "Overload",
              "Too few implants carrying too much force, or a bite that was never properly balanced. Common in full-arch cases done quickly.",
            ],
            [
              "Insufficient bone or soft tissue",
              "The implant is stable but the tissue around it has receded, exposing metal or leaving a visible dark margin.",
            ],
          ]}
        />
        <P>
          These require different responses. Peri-implantitis may be treatable with the
          implant left in place. A badly positioned implant that has integrated perfectly
          may still need to come out, because no restoration will look right on it. A
          repeatedly loosening screw is often a bite problem that will recur on any
          replacement unless the bite is addressed.
        </P>
      </Section>

      <Section heading="What can usually be" headingItalic="saved">
        <P>
          Patients arriving for a revision consultation generally expect the worst. The
          picture is often better than that.
        </P>
        <List
          items={[
            "An implant with early peri-implantitis can frequently be kept, with decontamination and management of the underlying cause.",
            "A well-positioned implant with a failed restoration usually needs only the restoration replaced, not the implant.",
            "In a full-arch case where a few implants have failed, the remaining ones are often still usable, and the plan can be revised around them rather than removing everything.",
            "Where an implant does have to come out, the site can usually be grafted and re-implanted after healing. A failed implant is not a permanently lost site.",
          ]}
        />
        <Note label="What we tell you honestly">
          Sometimes the answer is that the existing work cannot be salvaged and rebuilding
          is the right call. When that is the case we will say so plainly, and explain
          what specifically drove that conclusion, rather than presenting it as the only
          option from the start.
        </Note>
      </Section>

      <Section alt heading="What a revision consultation" headingItalic="involves">
        <List
          items={[
            "A 3D scan, which shows bone levels and implant position in a way a standard X-ray cannot.",
            "Assessment of each implant individually rather than the case as a whole, since they frequently differ.",
            "A bite evaluation, because occlusion is the cause of a large share of the mechanical failures we see and is the thing most often missed.",
            "Identification of the implant system already in place, which determines what components can be reused.",
            "A written plan setting out what is being kept, what is being replaced, why, in what order, and what it costs.",
          ]}
        />
        <P>
          Bring anything you have: previous X-rays, the name of the implant system if you
          know it, and any paperwork from the original treatment. It saves time and
          sometimes saves an unnecessary procedure.
        </P>
      </Section>

      <Section eyebrow="Why a prosthodontist" heading="Who should be handling" headingItalic="a revision">
        <P>
          Implant failures sit at the intersection of surgery and restoration, and a
          large proportion of them originate on the restorative side: bite forces,
          prosthetic design, implant positions chosen without a clear plan for the final
          teeth.
        </P>
        <P>
          A prosthodontist is the specialist trained specifically in the restorative and
          reconstructive side of this work, which is a three-year residency after dental
          school. Board certification through the American Board of Prosthodontics adds a
          further examination process beyond that. In revision cases the relevant question
          is usually not only whether the implant can be placed, but whether a functional,
          natural-looking restoration can be built on it, and that is the question
          prosthodontic training is built around.
        </P>
      </Section>

      <Section alt eyebrow="Common questions" heading="Questions patients ask" headingItalic="most often">
        <FAQ
          items={[
            {
              q: "How do I know if my implant is failing?",
              a: "The signs worth acting on are: any movement of the implant itself, persistent pain or pressure, bleeding or pus around the gum margin, a crown or screw that repeatedly loosens, or gum recession that exposes metal. Any implant that moves needs to be assessed promptly. A crown that comes loose repeatedly is not a nuisance to live with, it is usually telling you something about the bite.",
            },
            {
              q: "Can a failed implant be replaced in the same spot?",
              a: "Usually, yes. The site is cleaned and typically grafted, then allowed to heal, and a new implant placed after several months. Occasionally an immediate replacement is possible where the bone is sound and the failure was not infective. The waiting period is what protects the second attempt.",
            },
            {
              q: "Will I have to pay again for work that already failed?",
              a: "That depends on where the work was done, how long ago, and what warranty was offered. We are not able to speak to another practice's terms. What we can do is tell you exactly what is wrong and what correcting it involves, which is often the information you need to have that conversation with the original provider.",
            },
            {
              q: "My All-on-4 bridge broke. Can it be repaired?",
              a: "Frequently, yes. Acrylic full-arch bridges fracture reasonably often, particularly where the bite was not balanced or the framework underneath was inadequate. Sometimes the repair is straightforward. Sometimes the fracture is a symptom of a design problem that will recur, in which case the honest answer is that the prosthesis needs redesigning rather than repeated repairs.",
            },
            {
              q: "I was told nothing can be done and I should go back to dentures. Is that true?",
              a: "Sometimes it is, but it is worth a second look before accepting it. Bone grafting, zygomatic implants and revised prosthetic designs have made many previously untreatable situations treatable. We will tell you honestly if dentures are genuinely the right answer for your case, but we will not reach that conclusion without a proper assessment.",
            },
          ]}
        />
      </Section>

      <PageCTA
        heading="Bring us the case someone else could not fix"
        body="Revision and complex reconstruction is a substantial part of what this practice does. If you have an implant problem, a failing full-arch case, or a result you were told could not be improved, we will give you an honest assessment of what is achievable."
        note="Dr. Akshay Parmar, BDS, DDS, MDSc, FACP, FAAMP. Board-certified prosthodontist, Hamilton Township, New Jersey."
      />

      <RelatedPages
        links={[
          { to: "/prosthodontist-vs-oral-surgeon", label: "Which Specialist Do You Need?" },
          { to: "/dental-implants-new-jersey", label: "Dental Implants" },
          { to: "/full-arch-implants-new-jersey", label: "Full-Arch Implants" },
          { to: "/full-mouth-reconstruction-new-jersey", label: "Full Mouth Reconstruction" },
        ]}
      />
    </ClinicalPage>
  );
};

export default FailedDentalImplant;
