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

const AllOnFourCost = () => {
  usePageSEO({
    title: "All-on-4 Cost in New Jersey: An Honest Breakdown | Prosthodontist",
    description:
      "What All-on-4 actually costs in New Jersey, what drives the price from $15,000 to $40,000 per arch, and why quotes differ so widely. Written by a board-certified prosthodontist.",
  });

  return (
    <ClinicalPage
      eyebrow="Full-Arch Implants · Cost Guide"
      title="What All-on-4 actually costs"
      titleItalic="in New Jersey"
      standfirst="Quotes in this market run from under $15,000 to over $40,000 per arch, and almost nobody explains why. This page breaks down what you are actually paying for, what changes the number, and what questions to ask before you sign anything."
    >
      <Section eyebrow="The short answer">
        <P>
          Across New Jersey and eastern Pennsylvania, full-arch implant treatment
          generally falls somewhere between $15,000 and $40,000 per arch. That is an
          enormous range, and the spread is not mostly about profit margin. It reflects
          genuinely different treatments being sold under the same name.
        </P>
        <P>
          Two quotes twenty minutes apart can differ by a factor of two and both be
          honest. What separates them is what is included, what materials are used, who
          is doing the work, and what happens when something goes wrong three years from
          now.
        </P>
        <Note label="Why we publish this">
          Most practices will not put numbers on a website. We think that is a
          disservice. You cannot evaluate a quote you have nothing to compare it against,
          and the absence of published pricing is a large part of why this market is so
          confusing.
        </Note>
      </Section>

      <Section alt heading="What is actually in the" headingItalic="price">
        <P>
          A full-arch case is not one procedure. It is a sequence, and different practices
          include different parts of that sequence in the headline number.
        </P>
        <RefTable
          head={["Component", "What it is"]}
          rows={[
            [
              "Diagnostics",
              "3D CBCT scan, digital scans, photographs, and the planning time to design the case before anything is done.",
            ],
            [
              "Extractions",
              "Removal of remaining teeth. Sometimes quoted separately, sometimes bundled.",
            ],
            [
              "Bone preparation",
              "Reshaping the ridge to create the space the prosthesis needs. Grafting where required.",
            ],
            [
              "Implants",
              "Usually four to six per arch. Brand and quality vary considerably and materially affect long-term cost.",
            ],
            [
              "The provisional",
              "The temporary set of teeth fitted on the day, worn for several months while healing occurs.",
            ],
            [
              "The definitive prosthesis",
              "The final teeth. This is where the largest cost variation sits, and where the difference between materials is most consequential.",
            ],
            [
              "Follow-up and adjustment",
              "The appointments after delivery. Frequently excluded from the headline price.",
            ],
          ]}
          caption="When comparing quotes, ask which of these seven items are included. A number that excludes extractions, the final prosthesis or follow-up is not comparable to one that includes them."
        />
      </Section>

      <Section heading="The materials question, which drives" headingItalic="most of the difference">
        <H3>Acrylic on a titanium bar</H3>
        <P>
          The most common option at the lower end of the market. Acrylic teeth set into a
          denture base, supported by a metal framework. It works, it looks reasonable, and
          it is considerably less expensive. The trade-off is that acrylic wears and
          stains over time, and the teeth can fracture off the bar. Most acrylic
          prostheses need significant repair or replacement somewhere in the five to ten
          year range.
        </P>
        <H3>Monolithic zirconia</H3>
        <P>
          Milled from a single block of zirconia. Substantially stronger, does not stain,
          resists wear, and holds its appearance far longer. It is also considerably more
          expensive, and if it does fracture, repair is harder. For patients with heavy
          bite forces or a history of breaking things, it is usually the better long-term
          value despite the higher upfront cost.
        </P>
        <H3>Porcelain layered on zirconia</H3>
        <P>
          The most lifelike option, because the porcelain layer can be characterized in a
          way monolithic material cannot. Also the most expensive, and the layered
          porcelain can chip. Generally reserved for cases where appearance is the
          dominant concern and the bite is well controlled.
        </P>
        <Note label="The honest version">
          If someone quotes you a very low number, ask what the final prosthesis is made
          of and whether the quote covers the definitive prosthesis or only the temporary
          one. That single question explains a large share of the price differences in this
          market.
        </Note>
      </Section>

      <Section alt heading="What else moves the" headingItalic="number">
        <List
          items={[
            "How many implants. Four is the minimum for the technique. Some cases need five or six for adequate support, and a case that needs six but is treated with four tends to fail later.",
            "Bone grafting. Where the ridge has resorbed, grafting or a sinus procedure adds both cost and time.",
            "Zygomatic implants. For severe upper jaw bone loss, longer implants anchored in the cheekbone avoid extensive grafting. These are a specialized procedure and cost considerably more.",
            "Sedation. IV sedation or general anaesthesia adds to the total, and is sometimes quoted separately.",
            "One arch or two. Treating both arches together is more than one arch but generally less than two separate cases.",
            "Who is doing the work. A general dentist, an oral surgeon working with a separate restoring dentist, and a prosthodontist handling both stages produce different cost structures.",
          ]}
        />
      </Section>

      <Section heading="Why the cheapest quote is often the" headingItalic="most expensive">
        <P>
          This is not a sales argument, it is what revision cases actually look like. A
          substantial part of our practice is correcting full-arch work done elsewhere,
          and the pattern is consistent.
        </P>
        <P>
          The failures we see most are not implants that did not integrate. They are
          implants placed where the bone was convenient rather than where the teeth needed
          to be, prostheses designed without a properly balanced bite, and cases treated
          with the minimum number of implants when the anatomy called for more. Each of
          those is a decision made at the planning stage, and each is invisible in a price
          quote.
        </P>
        <P>
          When one of those cases fails at year four, the correction costs more than the
          original treatment, because the failed implants have to be removed, the sites
          grafted, and the case restarted after healing.
        </P>
        <Note label="What we are not saying">
          Expensive does not automatically mean good, and there are excellent clinicians
          charging in the middle of this range. The point is that price alone tells you
          almost nothing. What the number includes and who is planning the case tells you
          a great deal.
        </Note>
      </Section>

      <Section alt heading="Questions worth asking before you" headingItalic="commit">
        <List
          items={[
            "What material is the final prosthesis, and is it included in this price?",
            "How many implants, and why that number for my anatomy specifically?",
            "Are extractions, grafting, sedation and follow-up appointments included?",
            "Who places the implants and who makes the final teeth? Is that the same person or the same practice?",
            "What happens if a component fails at year three? What is covered and for how long?",
            "How many of these cases do you complete a year?",
            "Can I see before and after photographs of your own cases, not stock images?",
          ]}
        />
        <P>
          A practice that answers these clearly and in writing is generally worth taking
          seriously regardless of where their number falls. A practice that deflects them
          is telling you something useful.
        </P>
      </Section>

      <Section eyebrow="Common questions" heading="Questions patients ask" headingItalic="most often">
        <FAQ
          items={[
            {
              q: "Does insurance cover All-on-4?",
              a: "Dental insurance typically covers a small fraction at most, because annual maximums on dental plans are usually between $1,000 and $2,500 and full-arch treatment far exceeds that. Some medical plans contribute where tooth loss resulted from trauma or cancer treatment. It is worth checking both rather than assuming, and our office will help you find out which applies.",
            },
            {
              q: "Are there financing options?",
              a: "Yes, and most patients use them. Third-party healthcare financing is widely available and many practices including ours offer payment plans. It is worth comparing the total cost of financing rather than only the monthly payment, since terms vary considerably.",
            },
            {
              q: "Is treatment abroad worth considering?",
              a: "It is genuinely cheaper upfront, and some clinics abroad do good work. The honest risks are that follow-up and adjustment appointments are difficult, that complications arising after you return home have to be managed by someone who did not do the original work, and that repairing a prosthesis made with an unfamiliar system can be complicated. If you are considering it, ask specifically who will handle maintenance and what happens if something fails.",
            },
            {
              q: "Why is your price different from the $14,999 I saw advertised?",
              a: "Advertised entry prices usually reflect a specific configuration: four implants, an acrylic prosthesis, and a case with no complicating factors. That is a legitimate treatment for the right patient. It becomes misleading when the actual case needs more implants, grafting, or a stronger material, and the final number lands well above the advertised one. Ask what the advertised price assumes and what your case actually requires.",
            },
            {
              q: "How long does All-on-4 last?",
              a: "The implants themselves, when well placed and maintained, frequently last decades. The prosthesis on top is the part with a finite lifespan: acrylic commonly needs significant work at five to ten years, zirconia lasts considerably longer. Budgeting for prosthesis replacement at some point is realistic rather than pessimistic.",
            },
          ]}
        />
      </Section>

      <PageCTA
        heading="Get a written plan with real numbers"
        body="A consultation includes a 3D scan, an assessment of what your case actually requires, and a written treatment plan that is staged and priced. If a less extensive treatment would serve you better, we will tell you that."
        note="Dr. Akshay Parmar, BDS, DDS, MDSc, FACP, FAAMP. Board-certified prosthodontist, Hamilton Township, New Jersey."
      />

      <RelatedPages
        links={[
          { to: "/all-on-4-vs-all-on-6", label: "All-on-4 vs All-on-6" },
          { to: "/full-arch-implants-new-jersey", label: "Full-Arch Implants" },
          { to: "/failed-dental-implant-revision", label: "Failed Implant Revision" },
          { to: "/guide/full-arch-implants", label: "Full-Arch Patient Guide" },
        ]}
      />
    </ClinicalPage>
  );
};

export default AllOnFourCost;
