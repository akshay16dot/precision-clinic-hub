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

const AllOnFourVsAllOnSix = () => {
  usePageSEO({
    title: "All-on-4 vs All-on-6 vs Zygomatic: How to Choose | NJ Prosthodontist",
    description:
      "An honest comparison of full-arch implant configurations. When four implants is enough, when you need six, and when zygomatic implants are the right answer.",
  });

  return (
    <ClinicalPage
      eyebrow="Full-Arch Implants · Comparison"
      title="All-on-4, All-on-6, or zygomatic?"
      titleItalic="How the choice is actually made."
      standfirst="The number of implants is not a package you choose from a menu. It is determined by your bone, your bite and the prosthesis being planned. Here is how that decision is genuinely made, and what happens when it is made wrong."
    >
      <Section eyebrow="First, a clarification">
        <P>
          All-on-4 is a specific technique developed in the 1990s, in which four implants
          support a full arch of fixed teeth. Two are placed vertically at the front and
          two are angled at the back to avoid the sinus and the nerve. The trademark is
          owned by an implant manufacturer, which is part of why the name is used so
          widely in marketing.
        </P>
        <P>
          All-on-6 and All-on-X are not competing trademarked systems. They describe the
          same principle with a different number of implants. When a practice advertises
          All-on-X, it usually means they select the number based on the case rather than
          committing to four in advance.
        </P>
        <Note label="What this means practically">
          Do not choose between these as if they were product tiers. The right question
          is not which package you want, it is what your anatomy requires. A good
          clinician will tell you the number after examining you, not before.
        </Note>
      </Section>

      <Section alt heading="How the three options actually" headingItalic="compare">
        <RefTable
          head={["Configuration", "When it is the right choice"]}
          rows={[
            [
              "Four implants",
              "Good bone volume in the front of the jaw, moderate bite forces, and a prosthesis design that distributes load well. The lower jaw tolerates four implants considerably better than the upper.",
            ],
            [
              "Six implants",
              "Heavier bite forces, a history of grinding, an upper arch where bone is softer, or a longer prosthesis needing support further back. Also preferred where one implant failing should not compromise the whole case.",
            ],
            [
              "Zygomatic implants",
              "Severe upper jaw bone loss where conventional implants have nothing to anchor into. Long implants anchored in the cheekbone, avoiding extensive grafting and the year of healing it requires.",
            ],
          ]}
        />
        <P>
          There is no configuration that is universally better. Four well-placed implants
          in good bone will outperform six poorly placed ones. The number matters less
          than whether the plan matches the anatomy.
        </P>
      </Section>

      <Section heading="Upper and lower jaws are not the" headingItalic="same problem">
        <P>
          This distinction is frequently glossed over in marketing and it matters a great
          deal.
        </P>
        <H3>The lower jaw</H3>
        <P>
          Denser bone, and the front of the mandible is usually the most reliable implant
          site in the mouth. Four implants in a lower arch is a well-supported approach
          with a long track record.
        </P>
        <H3>The upper jaw</H3>
        <P>
          Softer bone, the sinuses limit where implants can go, and the arch is generally
          longer. The upper jaw is meaningfully more demanding, and it is where additional
          implants most often earn their cost. A case treated with four implants above
          because four worked below is a common planning error.
        </P>
        <Note label="If you are being quoted for both arches">
          It is entirely reasonable for the plan to be four implants below and six above.
          That is not upselling on the upper. It reflects a real anatomical difference.
        </Note>
      </Section>

      <Section alt heading="What happens when the number is" headingItalic="too low">
        <P>
          Under-supporting a case is one of the more common causes of the revision work we
          see, and the failures follow a recognizable sequence.
        </P>
        <List
          items={[
            "The prosthesis flexes under load, because four implants across a long arch leave unsupported spans at the back.",
            "That flexing loads the rearmost implants at an angle they were not designed to take.",
            "Screws begin loosening repeatedly. Patients are told this is normal maintenance. It is usually a warning.",
            "The prosthesis fractures, most often at the back where the leverage is greatest.",
            "One of the terminal implants loses bone and eventually fails, and because there were only four, losing one compromises the entire arch.",
          ]}
        />
        <P>
          The important point is that this can take three to six years to play out. A case
          that felt fine for years can still have been under-planned from the start.
        </P>
      </Section>

      <Section heading="When zygomatic implants are genuinely the right" headingItalic="answer">
        <P>
          Zygomatic implants are longer implants anchored in the cheekbone rather than the
          upper jaw. They exist for patients whose upper jaw bone has resorbed so
          extensively that conventional implants have nothing to hold onto.
        </P>
        <P>
          The alternative for these patients is extensive grafting followed by roughly a
          year of healing before implants can even be placed. Zygomatic treatment avoids
          that, and for a patient who has been in dentures for a decade and has been told
          repeatedly that they are not a candidate, it is frequently the option that
          changes things.
        </P>
        <P>
          They are also a more demanding surgical procedure requiring specific training,
          they cost considerably more, and they are not a substitute for conventional
          implants where conventional implants would work. Anyone proposing them for a
          patient with adequate bone is solving a problem that does not exist.
        </P>
      </Section>

      <Section alt eyebrow="Common questions" heading="Questions patients ask" headingItalic="most often">
        <FAQ
          items={[
            {
              q: "Is All-on-6 always better than All-on-4?",
              a: "No. In good bone with controlled bite forces, four implants is a well-established approach with strong long-term data. Six implants in poorly chosen positions is worse than four in good ones. More implants adds redundancy and load distribution, which matters most in the upper jaw, in heavy grinders, and in longer arches.",
            },
            {
              q: "Can I add implants later if four turns out not to be enough?",
              a: "Sometimes, but it is not straightforward. Adding an implant to an existing full-arch case usually means remaking the prosthesis, because the existing one was designed around the original implant positions. It is considerably cheaper to plan the right number at the start than to retrofit.",
            },
            {
              q: "What if one implant fails?",
              a: "With six, losing one is often manageable and the case can frequently be maintained on the remaining five with a modified prosthesis. With four, losing one usually compromises the whole arch and requires a substantial rebuild. This redundancy is a real part of the argument for six in higher-risk cases.",
            },
            {
              q: "I was told I do not have enough bone for implants at all. Is that final?",
              a: "Frequently not. That assessment is often made without a 3D scan or without considering grafting, angled placement or zygomatic options. It is worth a second opinion from someone who does full-arch work regularly before accepting that dentures are the only option.",
            },
            {
              q: "How do I know if the number I have been quoted is right for me?",
              a: "Ask why that number specifically, for your anatomy. A clear answer will reference your bone volume, your bite, and the prosthesis being planned. If the answer is essentially that four is what they do, that is worth a second opinion.",
            },
          ]}
        />
      </Section>

      <PageCTA
        heading="Find out what your case actually needs"
        body="A consultation includes a 3D scan and an honest assessment of the configuration your anatomy calls for, including cases where a less extensive treatment would serve you better."
        note="Dr. Akshay Parmar, BDS, DDS, MDSc, FACP, FAAMP. Board-certified prosthodontist, Hamilton Township, New Jersey."
      />

      <RelatedPages
        links={[
          { to: "/all-on-4-cost-new-jersey", label: "All-on-4 Cost" },
          { to: "/full-arch-implants-new-jersey", label: "Full-Arch Implants" },
          { to: "/failed-dental-implant-revision", label: "Failed Implant Revision" },
          { to: "/guide/full-arch-implants", label: "Full-Arch Patient Guide" },
        ]}
      />
    </ClinicalPage>
  );
};

export default AllOnFourVsAllOnSix;
