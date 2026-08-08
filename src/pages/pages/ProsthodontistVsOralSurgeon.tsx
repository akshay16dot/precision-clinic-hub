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

const ProsthodontistVsOralSurgeon = () => {
  usePageSEO({
    title: "Prosthodontist vs Oral Surgeon vs Periodontist for Implants",
    description:
      "Who should place and restore your dental implants? An honest comparison of the three specialties, what each is trained to do, and how to decide which one your case needs.",
  });

  return (
    <ClinicalPage
      eyebrow="Choosing a Specialist"
      title="Prosthodontist, oral surgeon, or periodontist?"
      titleItalic="Who should do your implants."
      standfirst="Three different specialists place dental implants, and the comparison is almost always written by one of them. Here is an honest account of what each is actually trained to do, and how to work out which one your case calls for."
    >
      <Section eyebrow="Why this is confusing">
        <P>
          If you have searched this question before, you have probably found articles
          comparing oral surgeons to periodontists. Those are almost always written by an
          oral surgeon or a periodontist, and the restorative specialist is left out of
          the conversation entirely.
        </P>
        <P>
          That omission matters, because an implant is two separate things: a surgical
          procedure that puts a titanium post in bone, and a restorative procedure that
          builds a functioning tooth on top of it. Patients tend to focus on the first.
          The second is where most long-term problems originate.
        </P>
        <Note label="Our bias, stated plainly">
          This page is written by a prosthodontist, so read it with that in mind. We have
          tried to describe each specialty accurately, including the cases where an oral
          surgeon or a periodontist is genuinely the better choice. Those cases exist and
          are named below.
        </Note>
      </Section>

      <Section alt heading="What each specialist actually" headingItalic="does">
        <RefTable
          head={["Specialty", "Training and focus"]}
          rows={[
            [
              "Oral & Maxillofacial Surgeon",
              "Four to six years of surgical residency after dental school, often with a medical degree. Focused on surgery: extractions, jaw surgery, trauma, pathology, and implant placement. Generally does not make the final teeth.",
            ],
            [
              "Periodontist",
              "Three-year residency focused on gums and the bone supporting teeth. Places implants, performs grafting, and manages gum disease and peri-implantitis. Generally does not make the final teeth.",
            ],
            [
              "Prosthodontist",
              "Three-year residency focused on the design, function and appearance of the replacement teeth themselves. Plans the case from the final result backwards, and in many practices also places the implants.",
            ],
          ]}
        />
        <P>
          The distinction is not about who is more qualified. All three are recognized
          dental specialists with multi-year residency training. The distinction is what
          each residency spends its time on.
        </P>
      </Section>

      <Section heading="The question that actually" headingItalic="matters">
        <P>
          For a single implant in a straightforward site, any of the three will typically
          give you a good outcome. The specialty matters much less than the individual
          clinician.
        </P>
        <P>
          The question becomes important when the case is complex, and specifically when
          the position of the implant determines whether an acceptable tooth can be built
          on it at all.
        </P>
        <H3>Restoratively driven planning</H3>
        <P>
          An implant is placed in bone, but it has to carry a tooth. The two constraints
          do not always agree. The place where bone is most plentiful is not always the
          place where the tooth needs to emerge for it to look natural and function
          correctly.
        </P>
        <P>
          Where those constraints conflict, the case has to be planned backwards from the
          intended final teeth: decide where the teeth go, then work out where the
          implants must sit to support them, then determine what grafting is needed to
          make that possible. This is what prosthodontic training is organized around, and
          it is the reason a substantial share of implant revisions we see involve
          implants that integrated perfectly but were placed where no good restoration
          could be built.
        </P>
        <Note label="The practical version">
          Ask any clinician proposing implants a simple question: what will the final
          teeth look like, and how does the implant position you are proposing produce
          that? If the answer is clear and specific, you are in good hands regardless of
          their specialty. If the answer is vague, that is worth noticing.
        </Note>
      </Section>

      <Section alt heading="When each specialist is the" headingItalic="right choice">
        <H3>See an oral surgeon when</H3>
        <List
          items={[
            "The case involves significant jaw surgery, orthognathic correction, or pathology",
            "There has been facial trauma with fractures",
            "Extensive grafting is needed from a distant donor site",
            "General anaesthesia in a surgical facility is required for medical reasons",
          ]}
        />
        <H3>See a periodontist when</H3>
        <List
          items={[
            "Active gum disease has to be brought under control before anything else",
            "Peri-implantitis around existing implants is the main problem",
            "Soft tissue grafting around teeth or implants is the primary need",
          ]}
        />
        <H3>See a prosthodontist when</H3>
        <List
          items={[
            "The case involves multiple teeth, a full arch, or both arches",
            "Appearance in the visible zone is a significant concern",
            "Previous implant or restorative work has failed and needs revision",
            "The bite is collapsed, worn, or has to be rebuilt",
            "You want one clinician responsible for both placement and the final result",
          ]}
        />
      </Section>

      <Section heading="The handoff problem">
        <P>
          In the common arrangement, a surgeon places the implant and a general dentist
          restores it some months later. This works well when the two have planned the
          case together in advance.
        </P>
        <P>
          It works less well when they have not. The failure mode is familiar: the
          implant is placed, healing goes fine, and at the restorative appointment it
          becomes apparent that the position makes a good result difficult. At that point
          the surgeon considers the job done and the restoring dentist is left
          compensating with a compromised crown. Neither party is being careless. The plan
          simply was not made as one plan.
        </P>
        <P>
          Where a single specialist both places and restores, this particular failure
          cannot occur, because the person choosing the implant position is the person who
          has to build the tooth on it. That is the main practical argument for a
          prosthodontist-led approach on complex cases, and it is a structural argument
          rather than a claim about skill.
        </P>
      </Section>

      <Section alt eyebrow="Common questions" heading="Questions patients ask" headingItalic="most often">
        <FAQ
          items={[
            {
              q: "Is a prosthodontist a real specialist, or is it a marketing term?",
              a: "It is one of the recognized dental specialties in the United States, requiring a three-year full-time residency after dental school. Board certification through the American Board of Prosthodontics is an additional process involving written and oral examinations, and relatively few prosthodontists complete it. There are roughly 3,200 prosthodontists in the country compared with around 170,000 general dentists.",
            },
            {
              q: "Can a general dentist place implants?",
              a: "Yes, legally, and many do so competently, particularly for straightforward single implants. There is no specialty requirement. What varies enormously is training, which can range from a weekend course to years of structured education. For a simple case this may not matter. For a full-arch reconstruction it matters a great deal, and it is entirely reasonable to ask directly what training a clinician has for the specific procedure you need.",
            },
            {
              q: "Do I need a referral to see a prosthodontist?",
              a: "No. You can book directly. Many patients are referred by their general dentist, and many come on their own after researching a complex problem or seeking a second opinion.",
            },
            {
              q: "Is a specialist more expensive?",
              a: "Often somewhat, though less than patients expect, and the comparison depends heavily on what is included. The more useful question is what the total cost is across the whole treatment, including any revision. A cheaper case that fails is not cheaper.",
            },
            {
              q: "What is the difference between board certified and board eligible?",
              a: "Board certified means the examination process has been completed. Board eligible means the residency was completed and the examinations have not been passed, or not yet attempted. Both terms appear in marketing and they mean different things. It is a fair question to ask directly.",
            },
          ]}
        />
      </Section>

      <PageCTA
        heading="Not sure which specialist your case needs?"
        body="A consultation will tell you what your situation actually requires, including whether that is us. If your case is better handled by a surgeon or a periodontist, we will tell you that and help you find the right person."
        note="Dr. Akshay Parmar, BDS, DDS, MDSc, FACP, FAAMP. Board-certified prosthodontist, Hamilton Township, New Jersey."
      />

      <RelatedPages
        links={[
          { to: "/failed-dental-implant-revision", label: "Failed Implant Revision" },
          { to: "/dental-implants-new-jersey", label: "Dental Implants" },
          { to: "/full-arch-implants-new-jersey", label: "Full-Arch Implants" },
          { to: "/about", label: "About Dr. Parmar" },
        ]}
      />
    </ClinicalPage>
  );
};

export default ProsthodontistVsOralSurgeon;
