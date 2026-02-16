import PatientGuideLayout from "@/components/PatientGuideLayout";

const data = {
  pageTitle: "Maxillofacial Rehabilitation Guide | Dr. Akshay Parmar",
  subtitle: "Patient Guide · Maxillofacial & Oral Reconstruction",
  title: "Maxillofacial",
  titleItalic: "Rehabilitation Guide",
  overviewIntro:
    "Maxillofacial rehabilitation involves the restoration of structures affected by surgery, trauma, congenital conditions, or cancer treatment. This includes prosthetic rehabilitation of the jaws, palate, and facial structures.",
  overviewDetails: [
    "Treatment is highly individualized. Each prosthesis is custom-designed to restore function, comfort, and confidence following complex medical or surgical interventions.",
    "Your specialist works closely with your surgical and oncology teams to ensure coordinated, comprehensive care from diagnosis through long-term follow-up.",
  ],
  healingPhases: [
    {
      label: "Initial Consultation",
      text: "A comprehensive evaluation assesses your surgical history, current anatomy, and functional needs. Impressions, imaging, and collaborative planning with your medical team establish the treatment path.",
    },
    {
      label: "Prosthesis Design & Fabrication",
      text: "Your prosthesis is custom-designed using advanced techniques. Multiple try-in appointments ensure optimal fit, comfort, and function before final delivery.",
    },
    {
      label: "Delivery & Adaptation",
      text: "When your prosthesis is delivered, your specialist adjusts fit and function. An adaptation period is normal as your body adjusts to the new restoration.",
    },
    {
      label: "First Month",
      text: "Gradual adaptation to the prosthesis. Speaking, eating, and swallowing may require adjustment. Regular follow-up visits refine comfort and function.",
    },
    {
      label: "Long-Term Follow-Up",
      text: "Ongoing monitoring ensures the prosthesis continues to function properly. Tissue changes over time may require periodic adjustments or remakes.",
    },
  ],
  healingRecoveryIntro:
    "Recovery following maxillofacial rehabilitation is deeply individual. The nature of your surgical history, treatment, and anatomy all influence the process.",
  healingRecoveryPoints: [
    "Adaptation to a new prosthesis takes time. Patience with the process is important.",
    "Speaking and eating may feel different initially. Function improves with practice.",
    "Tissue changes following surgery or radiation may require prosthetic adjustments.",
    "Emotional adjustment is a natural part of the journey. Support is always available.",
    "Your specialist is a consistent presence throughout your recovery.",
  ],
  faqs: [
    {
      q: "How long does adaptation take?",
      a: "Adaptation varies widely depending on the type and extent of rehabilitation. Most patients notice significant improvement in comfort and function within the first few weeks.",
    },
    {
      q: "Will I be able to eat normally?",
      a: "Function is progressively restored. Dietary modifications may be needed initially, with gradual return to a comfortable, varied diet as adaptation progresses.",
    },
    {
      q: "How often are follow-up visits needed?",
      a: "Frequent visits during the first months ensure optimal function. Long-term follow-up is scheduled at regular intervals to monitor fit, tissue health, and prosthetic integrity.",
    },
    {
      q: "Will the prosthesis look natural?",
      a: "Every prosthesis is individually designed to restore natural appearance as closely as possible. Color, texture, and form are carefully matched to your unique anatomy.",
    },
    {
      q: "What if tissue changes occur?",
      a: "Tissue changes are expected, especially following surgery or radiation therapy. Your specialist adjusts or remakes the prosthesis as needed to maintain optimal function and comfort.",
    },
  ],
  practicalGuidance: [
    {
      title: "Prosthesis Care",
      text: "Clean your prosthesis daily as instructed. Handle with care over a soft surface. Store in the recommended solution when not in use.",
    },
    {
      title: "Eating & Function",
      text: "Start with softer foods and gradually expand your diet. Practice speaking aloud to accelerate adaptation. Patience supports the process.",
    },
    {
      title: "Follow-Up Visits",
      text: "Attend all scheduled appointments. These visits are essential for monitoring fit, tissue health, and making necessary adjustments.",
    },
    {
      title: "Communication",
      text: "Report any discomfort, sore spots, or functional concerns promptly. Early adjustments prevent complications and improve comfort.",
    },
  ],
  reassuranceLines: [
    "Maxillofacial rehabilitation is a specialized field requiring fellowship-level training and institutional expertise.",
    "Your care is coordinated with your entire medical team. You are never navigating this alone.",
    "Every prosthesis is a unique creation, designed to restore not just function, but dignity and confidence.",
    "Diagnosis precedes intervention.",
  ],
};

const MaxillofacialGuide = () => <PatientGuideLayout data={data} />;

export default MaxillofacialGuide;
