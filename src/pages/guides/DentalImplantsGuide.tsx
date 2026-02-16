import PatientGuideLayout from "@/components/PatientGuideLayout";

const data = {
  pageTitle: "Dental Implant Guide | Dr. Akshay Parmar",
  subtitle: "Patient Guide · Dental Implants",
  title: "Dental Implant",
  titleItalic: "Treatment Guide",
  overviewIntro:
    "A dental implant is a small titanium post placed within the jawbone to replace the root of a missing tooth. Once healed, it serves as a stable foundation for a crown, bridge, or full-arch restoration.",
  overviewDetails: [
    "Implants are designed to function and feel like natural teeth. They preserve bone structure, protect adjacent teeth, and restore confident function.",
    "Treatment is carefully planned using advanced imaging and digital workflows. Every decision is guided by your unique anatomy, health history, and goals.",
  ],
  healingPhases: [
    {
      label: "Day of Treatment",
      text: "The procedure is performed under local anesthesia in a calm, controlled environment. Most patients describe the experience as more comfortable than expected. You will receive detailed aftercare instructions before leaving.",
    },
    {
      label: "First 24–72 Hours",
      text: "Mild soreness, slight swelling, and minor bruising are common and expected. Rest, cold compresses, and prescribed medications manage comfort effectively.",
    },
    {
      label: "First Week",
      text: "Gradual improvement each day. Soft foods are recommended. Most patients return to normal activities within a few days. Sutures, if placed, begin dissolving.",
    },
    {
      label: "First Month",
      text: "Tissues continue to heal and mature. The implant begins integrating with the surrounding bone. Follow-up visits monitor your progress.",
    },
    {
      label: "Long-Term Healing",
      text: "Full osseointegration typically occurs over several months. Once complete, your permanent restoration is designed and placed with precision.",
    },
  ],
  healingRecoveryIntro:
    "Healing is a biological process that varies between individuals. Factors such as overall health, bone quality, and treatment complexity influence your unique timeline.",
  healingRecoveryPoints: [
    "Mild discomfort during the first few days is normal and manageable.",
    "Swelling typically peaks at 48–72 hours and gradually subsides.",
    "Most patients feel comfortable returning to daily routines within 2–3 days.",
    "Your specialist monitors healing at each follow-up appointment.",
    "Variations in healing speed are expected and do not indicate complications.",
  ],
  faqs: [
    {
      q: "How long does healing take?",
      a: "Initial comfort returns within a few days. Full integration with the bone takes several months, during which you continue your normal routine. Your specialist guides you through every phase.",
    },
    {
      q: "Will the procedure hurt?",
      a: "Local anesthesia ensures complete comfort during treatment. Post-procedure soreness is typically mild and well-managed with over-the-counter or prescribed medication.",
    },
    {
      q: "When do I receive my crown?",
      a: "Your permanent crown is placed once the implant has fully integrated with the bone. In some cases, a temporary restoration is provided during the healing period.",
    },
    {
      q: "Can I chew normally?",
      a: "Soft foods are recommended during initial healing. Once your permanent restoration is placed, you can enjoy a full, varied diet with confidence.",
    },
    {
      q: "What sensations are normal?",
      a: "Mild pressure, slight tenderness, and occasional warmth around the treatment area are normal signs of healing. These sensations diminish progressively.",
    },
    {
      q: "What should concern me?",
      a: "Persistent or worsening pain, significant swelling beyond the first week, or any unusual symptoms should be communicated to your specialist promptly. Early communication ensures the best outcomes.",
    },
  ],
  practicalGuidance: [
    {
      title: "Eating",
      text: "Begin with soft, nutrient-rich foods: smoothies, yogurt, scrambled eggs, soups. Gradually reintroduce firmer foods as comfort allows.",
    },
    {
      title: "Oral Hygiene",
      text: "Gentle brushing around the treatment area. Avoid vigorous rinsing for the first 24 hours. Your specialist provides specific hygiene instructions.",
    },
    {
      title: "Activity",
      text: "Light activity is fine after the first day. Avoid strenuous exercise for 48–72 hours. Listen to your body and rest as needed.",
    },
    {
      title: "Comfort",
      text: "Cold compresses during the first 24 hours help manage swelling. Prescribed or over-the-counter medication manages discomfort effectively.",
    },
  ],
  reassuranceLines: [
    "Healing is a natural biological process. Your body is designed to integrate and adapt.",
    "Variations in recovery speed are completely normal. Every patient heals at their own pace.",
    "Your specialist is available throughout your journey. Communication is always encouraged.",
    "Clarity replaces uncertainty.",
  ],
};

const DentalImplantsGuide = () => <PatientGuideLayout data={data} />;

export default DentalImplantsGuide;
