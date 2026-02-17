import PatientGuideLayout from "@/components/PatientGuideLayout";

const data = {
  pageTitle: "Teeth Whitening Guide | Professional Whitening NJ",
  pageDescription: "Patient guide to professional teeth whitening. Understand the process, expected results, sensitivity management, and maintenance for lasting brightness.",
  subtitle: "Patient Guide · Teeth Whitening",
  title: "Teeth Whitening",
  titleItalic: "Treatment Guide",
  overviewIntro:
    "Professional teeth whitening is a controlled, clinically supervised process that lightens the natural shade of your teeth. It is one of the most requested aesthetic treatments in modern dentistry.",
  overviewDetails: [
    "Unlike over-the-counter products, professional whitening uses precisely calibrated concentrations and custom-fitted application trays to ensure even, predictable results.",
    "Your specialist evaluates your teeth, gums, and existing restorations before recommending a whitening protocol tailored to your unique situation.",
  ],
  healingPhases: [
    {
      label: "Day of Treatment",
      text: "Custom trays are fabricated from impressions of your teeth, ensuring precise fit and even gel distribution. In-office sessions may also be available for accelerated results.",
    },
    {
      label: "First 24–72 Hours",
      text: "You may notice initial brightening. Mild sensitivity to temperature is common and temporary. Avoid deeply pigmented foods and beverages during this period.",
    },
    {
      label: "First Week",
      text: "Results become progressively visible. Sensitivity, if present, typically diminishes within 2–3 days. Continue following the prescribed whitening schedule.",
    },
    {
      label: "First Month",
      text: "Full whitening results are typically achieved within 2–4 weeks of consistent use. Your specialist evaluates the outcome and advises on maintenance.",
    },
    {
      label: "Long-Term Maintenance",
      text: "Periodic touch-up treatments maintain your results. Avoiding tobacco and minimizing staining beverages supports lasting brightness.",
    },
  ],
  healingRecoveryIntro:
    "Teeth whitening is a non-invasive treatment with minimal recovery. Understanding what to expect ensures a comfortable, confident experience.",
  healingRecoveryPoints: [
    "Temporary sensitivity to cold or hot is the most common experience.",
    "Sensitivity is not harmful and typically resolves within 24–48 hours.",
    "Gum tissue may feel slightly irritated if gel contacts soft tissue. This is temporary.",
    "Results vary based on natural tooth composition and staining patterns.",
    "Your specialist adjusts the protocol if sensitivity occurs.",
  ],
  faqs: [
    {
      q: "Will my teeth become sensitive?",
      a: "Some patients experience mild, temporary sensitivity during whitening. This is a normal response and does not indicate damage. Your specialist can adjust the protocol to minimize discomfort.",
    },
    {
      q: "What if sensitivity occurs?",
      a: "Use the desensitizing gel provided with your kit. Reduce wearing time temporarily. Sensitivity resolves quickly once treatment is paused or adjusted.",
    },
    {
      q: "How white will my teeth get?",
      a: "Results depend on your natural tooth structure and the type of staining. Most patients achieve a noticeably brighter, more even shade. Your specialist sets realistic expectations during your consultation.",
    },
    {
      q: "Is whitening safe?",
      a: "Professional whitening, supervised by a specialist, is one of the most well-researched aesthetic dental treatments. It does not damage enamel when used as directed.",
    },
    {
      q: "How long do results last?",
      a: "With proper maintenance and periodic touch-ups, whitening results can last for years. Dietary habits and oral care influence longevity.",
    },
  ],
  practicalGuidance: [
    {
      title: "During Treatment",
      text: "Wear custom trays as prescribed. Avoid eating or drinking while trays are in place. Follow the recommended daily wearing schedule.",
    },
    {
      title: "Diet Considerations",
      text: "Minimize coffee, tea, red wine, and deeply pigmented foods during active whitening. These can reduce treatment effectiveness.",
    },
    {
      title: "Sensitivity Management",
      text: "Use provided desensitizing products. If sensitivity is significant, skip a day and resume. Never exceed the recommended wearing time.",
    },
    {
      title: "Maintenance",
      text: "Periodic touch-up sessions maintain brightness. Good oral hygiene and regular professional cleanings support lasting results.",
    },
  ],
  reassuranceLines: [
    "Professional whitening is a safe, well-established treatment when supervised by a specialist.",
    "Sensitivity is temporary and manageable. Your comfort is always prioritized.",
    "Results are natural-looking and tailored to your individual aesthetic goals.",
    "Clarity replaces uncertainty.",
  ],
};

const TeethWhiteningGuide = () => <PatientGuideLayout data={data} />;

export default TeethWhiteningGuide;
