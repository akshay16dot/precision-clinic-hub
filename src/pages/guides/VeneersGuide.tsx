import PatientGuideLayout from "@/components/PatientGuideLayout";

const data = {
  pageTitle: "Porcelain Veneers Guide | Aesthetic Reconstruction NJ",
  pageDescription: "Specialist-authored guide to porcelain veneers and aesthetic reconstruction. Treatment planning, preparation, bonding process, and long-term care from a Board-Certified Prosthodontist.",
  subtitle: "Patient Guide · Veneers & Aesthetic Reconstruction",
  title: "Veneers & Aesthetic",
  titleItalic: "Reconstruction Guide",
  overviewIntro:
    "Porcelain veneers are precision-crafted ceramic restorations bonded to the front surfaces of teeth. They refine shape, color, alignment, and proportion to achieve natural, harmonious aesthetics.",
  overviewDetails: [
    "Treatment planning prioritizes structural integrity and long-term stability. Each veneer is individually designed based on facial proportions, dental anatomy, and functional requirements.",
    "This is not cosmetic decoration. It is restorative architecture, guided by prosthodontic principles and biomechanical precision.",
  ],
  timelineTitle: "Your Treatment Timeline",
  healingPhases: [
    {
      label: "Consultation & Design",
      text: "Your specialist evaluates your teeth, bite, and facial proportions. Digital imaging and diagnostic models guide the design process. You participate in shaping the aesthetic vision.",
    },
    {
      label: "Tooth Preparation",
      text: "A minimal amount of enamel is conservatively prepared to create space for the veneer. Temporary restorations are placed to protect your teeth and preview the final result.",
    },
    {
      label: "First 24–72 Hours",
      text: "Temporary veneers may feel slightly different. Mild sensitivity to temperature is normal. Avoid sticky or hard foods that could dislodge temporaries.",
    },
    {
      label: "Final Placement",
      text: "Your custom porcelain veneers are bonded with precision. Color, fit, and function are verified before final cementation. The result is immediate and transformative.",
    },
    {
      label: "Long-Term Care",
      text: "With proper hygiene and regular follow-up, veneers provide decades of stable, beautiful function. Your specialist monitors their integrity over time.",
    },
  ],
  healingRecoveryIntro:
    "Veneer treatment involves minimal recovery. Most patients adapt quickly to their new restorations and experience no significant discomfort.",
  healingRecoveryPoints: [
    "Mild sensitivity to temperature may occur after preparation. This is temporary.",
    "Temporary veneers protect your teeth during the fabrication period.",
    "Final veneers feel smooth and natural once bonded.",
    "Bite adjustment, if needed, is performed at the placement appointment.",
    "Most patients describe the experience as comfortable and straightforward.",
  ],
  faqs: [
    {
      q: "Are veneers permanent?",
      a: "Veneers involve conservative enamel preparation, making the process irreversible. However, high-quality porcelain veneers are designed to last for many years with proper care.",
    },
    {
      q: "Will teeth feel sensitive?",
      a: "Some patients experience mild, temporary sensitivity after preparation. This typically resolves within a few days. Sensitivity after final bonding is uncommon.",
    },
    {
      q: "How long do veneers last?",
      a: "With proper care, porcelain veneers can last 15–20 years or longer. Longevity depends on oral hygiene, bite forces, and regular follow-up care.",
    },
    {
      q: "Can I eat normally?",
      a: "Yes. Once final veneers are bonded, you can eat a normal diet. Avoid using teeth as tools or biting extremely hard objects to protect the restorations.",
    },
    {
      q: "Will they look natural?",
      a: "Absolutely. Modern porcelain veneers are designed to replicate the translucency, texture, and shade variations of natural teeth. The result is refined and authentic.",
    },
  ],
  practicalGuidance: [
    {
      title: "With Temporaries",
      text: "Avoid sticky, crunchy, or very hard foods. Brush gently. If a temporary dislodges, contact your specialist. It can usually be reattached easily.",
    },
    {
      title: "After Final Placement",
      text: "Resume normal oral hygiene. Brush and floss as usual. Your specialist may recommend a night guard if you have a strong bite or grinding habit.",
    },
    {
      title: "Long-Term Care",
      text: "Regular professional cleanings maintain porcelain luster. Avoid biting nails, pens, or ice. These habits can stress veneers over time.",
    },
    {
      title: "Follow-Up",
      text: "Periodic check-ups allow your specialist to monitor veneer integrity, gum health, and bite stability. Proactive care ensures lasting results.",
    },
  ],
  reassuranceLines: [
    "Veneer treatment is a refined, well-established process guided by precision and artistry.",
    "Your comfort is prioritized at every stage, from design through final placement.",
    "The result is natural, durable, and uniquely yours.",
    "Precision replaces uncertainty.",
  ],
};

const VeneersGuide = () => <PatientGuideLayout data={data} />;

export default VeneersGuide;
