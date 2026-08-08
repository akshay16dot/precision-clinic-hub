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

const FacialProsthesisInsurance = () => {
  usePageSEO({
    title: "Does Insurance Cover a Facial Prosthesis? Medicare Codes Explained",
    description:
      "A plain-language guide to insurance coverage for nasal, orbital and auricular prostheses, including the Medicare HCPCS codes, what triggers replacement, and how to appeal a denial.",
  });

  return (
    <ClinicalPage
      eyebrow="Maxillofacial Prosthetics · Coverage Guide"
      title="Does insurance cover"
      titleItalic="a facial prosthesis?"
      standfirst="In most cases, yes. Facial prostheses are classified as prosthetic devices rather than cosmetic treatment, which puts them in a different and far more favorable category than most people expect. This page explains how that coverage actually works."
    >
      <Section eyebrow="The short answer">
        <P>
          A facial prosthesis that replaces a body part lost to cancer surgery, trauma
          or a congenital condition is generally covered as a prosthetic device, not as
          cosmetic dentistry. That distinction matters more than any other single fact
          on this page, because cosmetic treatment is almost never covered and
          prosthetic devices usually are.
        </P>
        <P>
          Medicare Part B covers facial prostheses under its prosthetic device benefit.
          Most commercial insurers follow Medicare's lead on classification, though the
          amount they pay and the paperwork they require varies considerably.
        </P>
        <Note label="Why patients get this wrong">
          Many people never pursue a prosthesis because they assume it will be treated
          as cosmetic and denied. That assumption costs them years of unnecessary
          difficulty. If the prosthesis replaces missing anatomy, it is a prosthetic
          device, and it should be submitted as one.
        </Note>
      </Section>

      <Section alt heading="The codes your claim will use">
        <P>
          Facial prostheses are billed under HCPCS Level II codes in the L8040 to L8049
          range. Knowing which code applies to your situation is useful, because it lets
          you ask your insurer a precise question instead of a general one.
        </P>
        <RefTable
          head={["Code", "What it covers"]}
          rows={[
            ["L8040", "Nasal prosthesis, replacing all or part of the nose"],
            ["L8041", "Midfacial prosthesis"],
            ["L8042", "Orbital prosthesis, replacing the eye and surrounding tissue"],
            ["L8043", "Upper facial prosthesis"],
            ["L8044", "Hemi-facial prosthesis, covering one side of the face"],
            ["L8045", "Auricular prosthesis, replacing all or part of the ear"],
            ["L8046", "Partial facial prosthesis"],
            ["L8047", "Nasal septal prosthesis"],
          ]}
          caption="Additional codes cover repairs, modifications and unspecified maxillofacial prostheses. Coverage rules and payment amounts change over time and differ by plan, so confirm the current policy with your carrier before treatment begins."
        />
        <P>
          Ask your insurer directly: is code L80XX covered under my plan, what is my
          expected out-of-pocket amount, and does it require prior authorization? That
          question gets a far more useful answer than asking whether "a facial
          prosthesis" is covered.
        </P>
      </Section>

      <Section heading="What triggers coverage for a" headingItalic="replacement">
        <P>
          Silicone facial prostheses do not last forever. Colour fades with sun
          exposure, edges thin and tear, and the underlying tissue changes shape over
          time. Most patients need a replacement every few years, and that replacement
          is generally covered when there is a legitimate reason for it.
        </P>
        <P>Medicare recognizes several grounds for replacing a prosthesis:</P>
        <List
          items={[
            "Loss of the prosthesis",
            "Irreparable damage",
            "Normal wear that has made the prosthesis no longer serviceable",
            "A change in the patient's physical condition that alters the fit",
          ]}
        />
        <P>
          Modifications made after an initial fitting period generally become separately
          payable rather than being bundled into the original device. This matters when
          tissue continues to change during the first year after surgery, which is
          common.
        </P>
        <Note label="Practical point">
          Photograph your prosthesis when it is new. When you later request a
          replacement for wear or damage, a clear before-and-after comparison makes the
          medical necessity obvious and shortens the approval process considerably.
        </Note>
      </Section>

      <Section alt heading="What documentation actually gets claims" headingItalic="approved">
        <P>
          Denials at this stage are usually about paperwork rather than eligibility. The
          claims that move through smoothly tend to include the same elements:
        </P>
        <List
          items={[
            "A physician's order or prescription specifying the prosthesis and the diagnosis it addresses",
            "The diagnosis code for the underlying condition, whether that is a malignancy, trauma or a congenital anomaly",
            "Operative reports from the resection or injury that created the defect",
            "Clinical photographs documenting the defect",
            "A statement of functional impact, covering the effects on speech, eating, breathing, eye protection or hearing rather than appearance alone",
          ]}
        />
        <P>
          That last point carries real weight. A prosthesis described purely in terms of
          appearance invites a cosmetic denial. The same prosthesis described in terms of
          what it protects and what function it restores is a different claim entirely.
          An orbital prosthesis shields exposed tissue. A nasal prosthesis affects
          airflow and the filtering of inhaled air. An obturator restores the ability to
          speak intelligibly and to eat without nasal regurgitation. These are functional
          arguments, and they are also true.
        </P>
      </Section>

      <Section heading="If your claim is" headingItalic="denied">
        <P>
          A first denial is common and is not the end of the process. A substantial
          share of denied prosthetic claims are overturned on appeal, particularly where
          the initial submission leaned on appearance rather than function.
        </P>
        <H3>What to do</H3>
        <List
          items={[
            "Request the denial reason in writing, including the specific policy provision cited",
            "Ask your treating surgeon or oncologist for a letter of medical necessity that addresses that specific provision",
            "Resubmit with the functional argument made explicit and documented",
            "If the second denial stands, request an external review, which is available under most plans and through Medicare",
          ]}
        />
        <P>
          Our office prepares this documentation as part of treatment planning rather
          than after a denial arrives. It is far easier to build the claim correctly the
          first time than to rebuild it under appeal.
        </P>
      </Section>

      <Section alt eyebrow="Common questions" heading="Questions patients ask" headingItalic="most often">
        <FAQ
          items={[
            {
              q: "Is a facial prosthesis considered cosmetic?",
              a: "Generally no. When a prosthesis replaces anatomy lost to disease, injury or a congenital condition, it is classified as a prosthetic device. Cosmetic procedures alter otherwise intact anatomy. That is a meaningful legal and billing distinction, and it is the reason coverage is usually available.",
            },
            {
              q: "Does dental insurance or medical insurance pay for this?",
              a: "Medical insurance, in almost all cases. Facial prostheses fall under the prosthetic device benefit of a medical plan rather than under dental coverage, even though the prosthesis may be fabricated by a maxillofacial prosthodontist. Intraoral devices such as obturators can sometimes involve both, which is worth clarifying before treatment starts.",
            },
            {
              q: "How long does a silicone facial prosthesis last?",
              a: "Typically somewhere between one and three years, depending on sun exposure, skin chemistry, adhesive use and how carefully it is handled. Colour fading and edge deterioration are the usual reasons for replacement rather than outright failure.",
            },
            {
              q: "Will Medicare pay for an implant-retained prosthesis?",
              a: "Coverage for craniofacial implants that anchor a prosthesis is evaluated separately from the prosthesis itself and depends on medical necessity documentation. Implant retention is often justifiable where adhesive retention has failed or where the defect makes adhesive impractical. This should be discussed and documented before implants are placed.",
            },
            {
              q: "What if I was told years ago that nothing could be done?",
              a: "It is worth being reassessed. Materials, digital scanning and implant retention have all changed substantially, and patients told they were not candidates a decade ago are frequently candidates now.",
            },
          ]}
        />
      </Section>

      <PageCTA
        heading="We handle the coverage paperwork as part of treatment"
        body="If you are considering a facial prosthesis and are unsure whether it will be covered, we can review your situation and tell you what to expect before you commit to anything. Coordination with your surgical and oncology team is part of how we work."
        note="Dr. Akshay Parmar is a board-certified prosthodontist with fellowship training in maxillofacial prosthetics at Memorial Sloan Kettering Cancer Center."
      />

      <RelatedPages
        links={[
          { to: "/nasal-prosthesis", label: "Nasal Prosthesis" },
          { to: "/auricular-prosthesis", label: "Auricular Prosthesis" },
          { to: "/orbital-prosthesis", label: "Orbital Prosthesis" },
          { to: "/maxillofacial-rehabilitation", label: "Maxillofacial Rehabilitation" },
        ]}
      />
    </ClinicalPage>
  );
};

export default FacialProsthesisInsurance;
