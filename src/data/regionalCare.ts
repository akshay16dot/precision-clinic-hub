export type RegionKey = "princeton" | "mercer" | "east" | "bucks" | "new-brunswick";

export interface RegionCareData {
  key: RegionKey;
  path: string;
  eyebrow: string;
  title: string;
  titleItalic: string;
  areas: string[];
  intro: string;
  perspective: string;
  routeNote: string;
  coordination: string;
  areaServed: string[];
  faqs: { question: string; answer: string }[];
}

export const REGIONAL_CARE: Record<RegionKey, RegionCareData> = {
  princeton: {
    key: "princeton",
    path: "/prosthodontist-princeton-nj",
    eyebrow: "Specialist care near Princeton, New Jersey",
    title: "Prosthodontic Care for",
    titleItalic: "Princeton-Area Patients",
    areas: ["Princeton", "West Windsor", "Plainsboro", "Pennington"],
    intro:
      "Patients from Princeton and the surrounding communities visit Dr. Akshay Parmar in Hamilton for dental implants, All-on-4 and All-on-X treatment, natural aesthetic dentistry, full-mouth reconstruction and complex prosthodontic care.",
    perspective:
      "Complex treatment is easier to understand when one clinician sees the entire case. As a board-certified prosthodontist, Dr. Parmar plans the final teeth first, then coordinates the surgical and restorative phases around that result. When clinically appropriate, implant placement, provisional teeth, the final prosthesis and maintenance are completed by one specialist-led team in one office.",
    routeNote:
      "The Hamilton office is south of Princeton with access from the Route 1, I-295 and local Mercer County corridors. Appointment times can be planned to reduce unnecessary travel, and a virtual consultation can help determine whether an in-person specialist evaluation is the appropriate next step.",
    coordination:
      "Patients who already have a trusted general dentist may keep that relationship. The office can communicate findings, respect the requested scope of care and coordinate maintenance or routine dentistry with the referring practice.",
    areaServed: ["Princeton", "West Windsor Township", "Plainsboro Township", "Pennington"],
    faqs: [
      {
        question: "Do you see dental implant patients from Princeton?",
        answer:
          "Yes. The Hamilton practice welcomes patients from Princeton, West Windsor, Plainsboro and nearby communities for implant placement and restoration, full-arch care, complex reconstruction and second opinions.",
      },
      {
        question: "Can my Princeton dentist remain involved?",
        answer:
          "Yes. With the patient's permission, Dr. Parmar can communicate with the general dentist, complete only the agreed specialist treatment and coordinate the patient's return for routine care or maintenance.",
      },
      {
        question: "Can I begin with a virtual consultation?",
        answer:
          "Yes. Photos and available records can be reviewed to clarify the concern and determine whether an in-office clinical examination is the appropriate next step. A virtual consultation does not replace an examination or diagnosis.",
      },
    ],
  },
  mercer: {
    key: "mercer",
    path: "/prosthodontist-mercer-county-nj",
    eyebrow: "Advanced prosthodontics in Mercer County",
    title: "Specialist Dental Care for",
    titleItalic: "Mercer County",
    areas: ["Hamilton", "Lawrenceville", "Trenton", "Ewing"],
    intro:
      "Located in Hamilton, the practice provides specialist implant, aesthetic and reconstructive dentistry for patients across Mercer County, including Lawrenceville, Trenton, Ewing, Hamilton Square and Mercerville.",
    perspective:
      "The practice is designed for patients whose needs extend beyond routine dentistry: missing teeth, failing implants, unstable dentures, severe tooth wear, a collapsing bite, aesthetic concerns or rehabilitation after head and neck treatment. Each plan begins with diagnosis, photography and digital or radiographic information appropriate to the case.",
    routeNote:
      "The office is located at 1544 Kuser Road, Suite C3, Hamilton, NJ 08619. Patients can call before their visit for parking or arrival guidance. Treatment sequences are explained in advance so patients understand which visits require more time and how maintenance will be handled.",
    coordination:
      "Dr. Parmar welcomes direct patient consultations and professional referrals. When another dentist or specialist is involved, the office communicates the plan, stays within the requested scope and coordinates the patient's next stage of care.",
    areaServed: ["Hamilton Township", "Lawrence Township", "Trenton", "Ewing Township", "Mercerville", "Hamilton Square"],
    faqs: [
      {
        question: "Where is the prosthodontic office in Mercer County?",
        answer:
          "The practice is at 1544 Kuser Road, Suite C3, Hamilton, New Jersey 08619, serving Hamilton, Lawrenceville, Trenton, Ewing and the surrounding Mercer County communities.",
      },
      {
        question: "What problems does a prosthodontist treat?",
        answer:
          "A prosthodontist manages complex replacement and reconstruction of teeth, including dental implants, full-arch fixed teeth, dentures, worn or failing teeth, bite reconstruction, veneers and treatment after significant oral or facial surgery.",
      },
      {
        question: "Are implant surgery and the final teeth completed in the same office?",
        answer:
          "When clinically appropriate, Dr. Parmar and the Hamilton team coordinate diagnosis, implant surgery, provisional teeth, the final prosthesis and long-term maintenance under one roof.",
      },
    ],
  },
  east: {
    key: "east",
    path: "/prosthodontist-robbinsville-cranbury-nj",
    eyebrow: "Specialist care near Robbinsville and Cranbury",
    title: "Implant and Reconstructive Care",
    titleItalic: "Close to Home",
    areas: ["Robbinsville", "East Windsor", "Cranbury", "Hightstown"],
    intro:
      "The Hamilton office is positioned for patients traveling from Robbinsville, East Windsor, Hightstown and Cranbury who need dental implants, full-arch rehabilitation, aesthetic reconstruction or a specialist second opinion.",
    perspective:
      "Implant treatment is not only the placement of a fixture. The position of the implant, the tissue around it, the provisional restoration and the final tooth all influence the result. Dr. Parmar brings the surgical and prosthetic decisions together, with the final restoration guiding the plan from the beginning.",
    routeNote:
      "Patients approaching from eastern Mercer County and the Cranbury area can reach the office through the local Route 130 and Hamilton road network. For larger treatment plans, the team can organize the sequence so diagnostic, surgical and restorative visits are clear before care begins.",
    coordination:
      "If a local dentist provides cleanings, emergency care or other routine treatment, that relationship can continue. Specialist care can be limited to the implant, full-arch, reconstruction or prosthetic phase that has been requested.",
    areaServed: ["Robbinsville Township", "East Windsor Township", "Cranbury Township", "Hightstown"],
    faqs: [
      {
        question: "Do you serve patients from Robbinsville and East Windsor?",
        answer:
          "Yes. Patients from Robbinsville, East Windsor, Hightstown, Cranbury and nearby communities visit the Hamilton office for complex implant and prosthodontic care.",
      },
      {
        question: "Can Dr. Parmar restore implants placed by another surgeon?",
        answer:
          "Often, yes. The existing implant position, health, components and restorative space must first be evaluated. Dr. Parmar can also coordinate with the placing surgeon when a shared approach is preferred.",
      },
      {
        question: "Do you provide second opinions for a full-mouth treatment plan?",
        answer:
          "Yes. A second-opinion visit can review the diagnosis, the teeth that may be retained, implant options, restorative materials, treatment sequence and maintenance needs before a patient commits to care.",
      },
    ],
  },
  bucks: {
    key: "bucks",
    path: "/prosthodontist-bucks-county-pa",
    eyebrow: "New Jersey specialist care for Bucks County patients",
    title: "Complex Dental Care for",
    titleItalic: "Bucks County Patients",
    areas: ["Yardley", "Newtown", "Lower Makefield", "Morrisville"],
    intro:
      "Patients cross from Bucks County into Hamilton for complex dental implant treatment, All-on-4 and All-on-X rehabilitation, full-mouth reconstruction, aesthetic dentistry and maxillofacial prosthetic care with Dr. Akshay Parmar.",
    perspective:
      "Travel is most worthwhile when it provides continuity. For appropriate cases, the same specialist-led team coordinates diagnosis, 3D planning, implant placement, provisional teeth, the definitive prosthesis and maintenance. This avoids separating the surgical goal from the design of the final teeth.",
    routeNote:
      "The Hamilton office is reached from Lower Bucks County through the Delaware River crossings and the Mercer County road network. Actual travel time depends on the starting point and traffic. A virtual consultation can be used before the first trip to organize photographs, records and the clinical question.",
    coordination:
      "Patients may continue routine dentistry in Pennsylvania. With permission, the Hamilton office can share the treatment plan and maintenance recommendations with the patient's dentist, oral surgeon, periodontist, endodontist or physician.",
    areaServed: ["Yardley", "Newtown", "Lower Makefield Township", "Morrisville", "Bucks County"],
    faqs: [
      {
        question: "Can Pennsylvania patients receive treatment at the Hamilton office?",
        answer:
          "Yes. Patients from Yardley, Newtown, Lower Makefield, Morrisville and other Bucks County communities may travel to the New Jersey office for evaluation and treatment provided there.",
      },
      {
        question: "Can appointments be coordinated for patients traveling from Bucks County?",
        answer:
          "The team can explain the expected sequence and, when clinically appropriate, coordinate compatible parts of care. The number and timing of visits still depend on healing, laboratory stages and the complexity of treatment.",
      },
      {
        question: "Can I keep my general dentist in Pennsylvania?",
        answer:
          "Yes. Specialist treatment does not require giving up an established general dentist. The practices can communicate about the treatment completed, recall needs and long-term maintenance.",
      },
    ],
  },
  "new-brunswick": {
    key: "new-brunswick",
    path: "/prosthodontist-new-brunswick-edison-nj",
    eyebrow: "Complex care for Central New Jersey",
    title: "Prosthodontic Care for",
    titleItalic: "New Brunswick and Edison",
    areas: ["New Brunswick", "Edison", "North Brunswick", "South Brunswick"],
    intro:
      "Patients from the New Brunswick and Edison corridor visit the Hamilton practice for advanced implant rehabilitation, full-arch fixed teeth, corrective treatment, full-mouth reconstruction and maxillofacial prosthodontics.",
    perspective:
      "The value of a prosthodontic evaluation is not a predetermined procedure. It is a diagnosis that considers which teeth can be retained, how the bite functions, whether implants are appropriate, what surgery may be required and how the final restorations will be maintained. Complex cases are sequenced around long-term function rather than speed alone.",
    routeNote:
      "Hamilton is reached from the New Brunswick area through the Central Jersey highway network. Patients considering a longer trip may begin with a virtual consultation, then bring available radiographs, treatment plans and implant information to a comprehensive clinical visit.",
    coordination:
      "The practice can collaborate with an existing dentist or specialist in Middlesex County. For referred patients, the requested scope is respected and records can be returned to the referring office with the patient's permission.",
    areaServed: ["New Brunswick", "Edison Township", "North Brunswick Township", "South Brunswick Township", "Middlesex County"],
    faqs: [
      {
        question: "Why would a patient travel from New Brunswick or Edison to a prosthodontist?",
        answer:
          "Patients often seek a prosthodontist when treatment involves several teeth, a failing bite, multiple implants, a complete arch, previous complications or the need to coordinate surgical and restorative decisions as one plan.",
      },
      {
        question: "Can you evaluate failed or uncomfortable implant work?",
        answer:
          "Yes. Evaluation may include the implant position, bone and tissue health, prosthetic fit, bite, cleansability and available implant components. Recommendations depend on what can predictably be retained or corrected.",
      },
      {
        question: "Do you coordinate with physicians or cancer teams?",
        answer:
          "Yes. Maxillofacial and medically complex care may require communication with head and neck surgeons, oncologists, speech-language pathologists and other clinicians, with the patient's authorization.",
      },
    ],
  },
};

export const REGION_LIST = Object.values(REGIONAL_CARE);
