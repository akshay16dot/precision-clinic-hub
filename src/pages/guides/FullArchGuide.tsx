import PatientGuideLayout from "@/components/PatientGuideLayout";

const data = {
  pageTitle: "Full Arch Implant Guide | All-on-X Treatment NJ",
  pageDescription: "Patient guide to full-arch implant rehabilitation and All-on-X reconstruction. Treatment timeline, surgical process, recovery, and long-term outcomes explained by a Board-Certified Prosthodontist.",
  subtitle: "Patient Guide · Full-Arch Rehabilitation",
  title: "Full-Arch Implant",
  titleItalic: "Rehabilitation Guide",
  overviewIntro:
    "Full-arch implant rehabilitation replaces an entire arch of teeth using strategically placed implants and a fixed prosthetic restoration. This is often referred to as the All-on-X concept.",
  overviewDetails: [
    "The procedure provides a complete, non-removable set of teeth supported by as few as four to six implants per arch. It is designed for strength, comfort, and long-term function.",
    "This option is often recommended for patients with multiple failing teeth, advanced wear, or significant bone loss who seek a permanent, life-changing solution.",
  ],
  healingPhases: [
    {
      label: "Day of Treatment",
      text: "Surgery is performed under anesthesia in a controlled clinical setting. A temporary fixed prosthesis is often placed the same day, allowing you to leave with a full set of functional teeth.",
    },
    {
      label: "First 24–72 Hours",
      text: "Swelling, mild bruising, and discomfort are expected. These responses are normal. Cold compresses, rest, and prescribed medications support your comfort.",
    },
    {
      label: "First Week",
      text: "A soft diet is essential during this phase. Speech may feel slightly different initially but normalizes quickly. Most patients notice daily improvement.",
    },
    {
      label: "First Month",
      text: "Tissues continue maturing. Swelling fully resolves. Follow-up visits monitor healing and implant integration. Dietary progression is guided by your specialist.",
    },
    {
      label: "Long-Term Healing",
      text: "Full osseointegration occurs over several months. Once confirmed, your permanent, precision-engineered prosthesis is designed and delivered.",
    },
  ],
  healingRecoveryIntro:
    "Full-arch rehabilitation involves a more comprehensive healing process than single-implant treatment. Understanding what to expect helps you navigate recovery with confidence.",
  healingRecoveryPoints: [
    "Swelling and bruising may extend to the cheeks or under the chin. This is normal and temporary.",
    "Speech may feel slightly altered for the first few days as you adapt to the temporary prosthesis.",
    "Numbness or tingling near the treatment area is typically temporary.",
    "Energy levels may be reduced for the first 2–3 days. Rest supports healing.",
    "Your specialist provides a structured recovery plan with clear milestones.",
  ],
  faqs: [
    {
      q: "What can I eat after surgery?",
      a: "A nutrient-rich soft diet is essential for the first several weeks: protein shakes, blended soups, yogurt, soft fish, mashed vegetables. Your specialist guides dietary progression based on healing.",
    },
    {
      q: "How long does swelling last?",
      a: "Swelling typically peaks at 48–72 hours and gradually subsides over 7–10 days. Cold compresses and elevation help manage the response.",
    },
    {
      q: "Will speech feel different?",
      a: "Slight changes in speech are common during the first few days. Your mouth adapts quickly, and normal speech patterns return as you adjust to the new restoration.",
    },
    {
      q: "When do final teeth come?",
      a: "Your permanent prosthesis is delivered once all implants have fully integrated with the bone. This typically occurs several months after surgery.",
    },
    {
      q: "Will it feel strange initially?",
      a: "Yes, a new full-arch prosthesis feels different at first. This is entirely normal. Within a few weeks, most patients describe the teeth as feeling natural and comfortable.",
    },
  ],
  practicalGuidance: [
    {
      title: "Eating",
      text: "Strict soft diet for 2–4 weeks. Protein shakes, smoothies, blended soups, soft eggs. Your specialist provides a structured dietary progression timeline.",
    },
    {
      title: "Oral Hygiene",
      text: "Gentle cleaning with a soft brush. Water irrigation may be recommended. Detailed hygiene protocols are provided at your follow-up appointments.",
    },
    {
      title: "Activity",
      text: "Rest for 2–3 days after surgery. Avoid heavy lifting and vigorous exercise for at least one week. Gradual return to normal activity as comfort allows.",
    },
    {
      title: "Comfort",
      text: "Prescribed pain management, cold compresses, and rest. Sleep with your head elevated for the first few nights. Most patients feel significantly better by day 5–7.",
    },
  ],
  reassuranceLines: [
    "Full-arch rehabilitation is a transformative treatment. The healing process, while more involved, follows a well-established biological pathway.",
    "Every stage is monitored. Every milestone is confirmed.",
    "Temporary adjustments in eating and speaking are short-lived. Long-term comfort and function are the outcome.",
    "Precision replaces uncertainty.",
  ],
};

const FullArchGuide = () => <PatientGuideLayout data={data} />;

export default FullArchGuide;
