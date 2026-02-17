import PatientGuideLayout from "@/components/PatientGuideLayout";

const data = {
  pageTitle: "Immediate Implant Guide | Same-Day Tooth Replacement NJ",
  pageDescription: "Patient guide to immediate implant placement and same-day tooth replacement. Candidacy, procedure, healing, and outcomes explained by a Board-Certified Prosthodontist in New Jersey.",
  subtitle: "Patient Guide · Immediate Implants",
  title: "Immediate Implant",
  titleItalic: "Treatment Guide",
  overviewIntro:
    "Immediate implant placement means the implant is placed at the same appointment as tooth removal. In many cases, a temporary restoration is provided the same day, so you leave with a functional, natural-looking tooth.",
  overviewDetails: [
    "This approach preserves bone and soft tissue architecture, reduces the total number of procedures, and shortens overall treatment time.",
    "Candidacy depends on bone quality, infection status, and clinical factors. Your specialist evaluates each situation individually to ensure optimal results.",
  ],
  healingPhases: [
    {
      label: "Day of Treatment",
      text: "Tooth removal and implant placement occur in a single visit. A temporary restoration is often placed immediately. You leave the office with function and aesthetics intact.",
    },
    {
      label: "First 24–72 Hours",
      text: "Swelling and mild soreness are expected. These are normal healing responses. Cold compresses and medication help manage comfort.",
    },
    {
      label: "First Week",
      text: "Soft foods are recommended. Most patients notice significant improvement daily. The temporary restoration provides comfort and confidence during healing.",
    },
    {
      label: "First Month",
      text: "Soft tissue healing progresses. The implant begins bonding with the jawbone. Follow-up appointments ensure everything is on track.",
    },
    {
      label: "Long-Term Healing",
      text: "Full integration occurs over several months. Once confirmed, your permanent, precision-crafted restoration replaces the temporary.",
    },
  ],
  healingRecoveryIntro:
    "Because the implant is placed immediately after extraction, your body heals around the new support simultaneously. This is a well-established, biologically favorable process.",
  healingRecoveryPoints: [
    "Gum tissue adapts naturally around the temporary restoration.",
    "Swelling is typically most noticeable at 48–72 hours, then steadily improves.",
    "Mild bruising in the surrounding area is normal and temporary.",
    "Most patients return to daily routines within 1–2 days.",
    "Your specialist monitors tissue adaptation at each visit.",
  ],
  faqs: [
    {
      q: "How fast will my gums heal?",
      a: "Initial gum healing begins within the first week. Full soft tissue maturation takes several weeks. The temporary restoration supports tissue contour during this process.",
    },
    {
      q: "Is swelling normal?",
      a: "Yes. Mild to moderate swelling is a natural part of healing. It typically peaks within 48–72 hours and resolves progressively over the following days.",
    },
    {
      q: "Can I eat after surgery?",
      a: "Yes, with modifications. Soft, nutrient-rich foods are recommended for the first week. Your temporary restoration allows gentle function while the implant heals.",
    },
    {
      q: "When are final teeth placed?",
      a: "Once the implant has fully integrated with the bone, your permanent restoration is designed and delivered. Timing depends on your individual healing response.",
    },
    {
      q: "Is discomfort normal?",
      a: "Mild discomfort for the first few days is expected and manageable. Most patients describe it as less intense than anticipated. Medication keeps you comfortable.",
    },
  ],
  practicalGuidance: [
    {
      title: "Eating",
      text: "Soft foods for the first 1–2 weeks: smoothies, yogurt, mashed vegetables, soft fish. Avoid chewing directly on the temporary restoration initially.",
    },
    {
      title: "Oral Hygiene",
      text: "Gentle cleaning around the area with a soft brush. Avoid aggressive rinsing. Your specialist provides a detailed hygiene protocol.",
    },
    {
      title: "Activity",
      text: "Rest on the day of treatment. Light daily activities can resume the next day. Avoid intense exercise for 3–5 days.",
    },
    {
      title: "Comfort",
      text: "Ice packs during the first 24 hours reduce swelling. Take medications as prescribed. Sleep with your head slightly elevated if helpful.",
    },
  ],
  reassuranceLines: [
    "Immediate placement is a well-researched, predictable approach when conditions are favorable.",
    "Your body heals efficiently when supported by precision planning and biological protocols.",
    "Each follow-up visit confirms your progress. You are never without guidance.",
    "Diagnosis precedes intervention.",
  ],
};

const ImmediateImplantsGuide = () => <PatientGuideLayout data={data} />;

export default ImmediateImplantsGuide;
