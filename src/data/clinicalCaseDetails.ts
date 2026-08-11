import case1Before from "@/assets/case1-before.png";
import case1After from "@/assets/case1-after.png";
import case2BeforeLeft from "@/assets/case2-before-left.png";
import case2AfterLeft from "@/assets/case2-after-left.png";
import case2BeforeRight from "@/assets/case2-before-right.png";
import case2AfterRight from "@/assets/case2-after-right.png";
import case3Before from "@/assets/case3-before.png";
import case3After from "@/assets/case3-after.png";
import case4Before from "@/assets/case4-before.png";
import case4After from "@/assets/case4-after.png";
import case5Before from "@/assets/case5-before.png";
import case5After from "@/assets/case5-after.png";
import case8Before from "@/assets/case8-before.png";
import case8After from "@/assets/case8-after.png";

export type ClinicalCaseSlug =
  | "full-mouth-rehabilitation"
  | "bite-reconstruction"
  | "full-arch-implant-reconstruction"
  | "failed-implant-rehabilitation"
  | "implant-overdenture"
  | "anterior-implant-aesthetics";

interface CaseImagePair {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
}

export interface ClinicalCaseDetail {
  slug: ClinicalCaseSlug;
  path: string;
  title: string;
  titleItalic: string;
  eyebrow: string;
  metaTitle: string;
  metaDescription: string;
  overview: string;
  images: CaseImagePair[];
  sections: { label: string; title: string; text: string }[];
  sequence: string[];
  maintenance: string;
  related: { label: string; to: string }[];
}

export const CLINICAL_CASE_DETAILS: Record<ClinicalCaseSlug, ClinicalCaseDetail> = {
  "full-mouth-rehabilitation": {
    slug: "full-mouth-rehabilitation",
    path: "/clinical-case/full-mouth-rehabilitation",
    title: "Full-Mouth",
    titleItalic: "Rehabilitation",
    eyebrow: "Documented clinical case · Implants, crowns and bridges",
    metaTitle: "Full-Mouth Rehabilitation Case | Dr. Akshay Parmar",
    metaDescription:
      "A documented full-mouth rehabilitation case addressing severe wear, failing restorations and bite instability with implants, crowns and bridges.",
    overview:
      "This patient presented with extensive tooth wear, compromised restorations and progressive bite instability. The challenge was not to improve one tooth in isolation, but to rebuild a functional system while preserving every structure that could predictably remain.",
    images: [{
      before: case1Before,
      after: case1After,
      beforeAlt: "Before full-mouth rehabilitation showing worn and compromised teeth",
      afterAlt: "After full-mouth rehabilitation with implants, crowns and bridge reconstruction",
    }],
    sections: [
      {
        label: "01 · Diagnosis",
        title: "A failing system, not a single failing tooth",
        text: "The clinical examination considered structural damage, existing restorations, missing teeth, periodontal support, the position of the bite and the relationship between the upper and lower arches. Each tooth was evaluated for whether it could be retained and contribute to the final plan.",
      },
      {
        label: "02 · Planning",
        title: "The final teeth guided the sequence",
        text: "Diagnostic records and digital planning established the intended tooth position, vertical dimension and occlusal relationships before definitive treatment. Implant positions and restorative decisions were organized around that planned result.",
      },
      {
        label: "03 · Rehabilitation",
        title: "Staged reconstruction with continuity",
        text: "Treatment combined strategic implant placement, provisional restorations and definitive crowns and bridges. Provisional stages allowed function, comfort and appearance to be evaluated before the final restorations were completed.",
      },
      {
        label: "04 · Outcome",
        title: "Function and appearance rebuilt together",
        text: "The completed rehabilitation restored posterior support, coordinated the bite and established tooth proportions designed to fit the patient's facial anatomy. The result shown is specific to this patient and reflects that individual's diagnosis and treatment response.",
      },
    ],
    sequence: ["Comprehensive examination and records", "Functional and aesthetic planning", "Implant and provisional phases", "Definitive crowns and bridges", "Protective and preventive maintenance"],
    maintenance:
      "Full-mouth rehabilitation requires ongoing professional evaluation. Maintenance is individualized and may include hygiene visits, radiographs, bite review, implant assessment and a protective appliance when indicated.",
    related: [
      { label: "Full-Mouth Reconstruction", to: "/full-mouth-reconstruction-new-jersey" },
      { label: "Worn Teeth and Bite Reconstruction", to: "/tooth-wear-rehabilitation" },
    ],
  },
  "bite-reconstruction": {
    slug: "bite-reconstruction",
    path: "/clinical-case/bite-reconstruction",
    title: "Comprehensive Bite",
    titleItalic: "Reconstruction",
    eyebrow: "Documented clinical case · Implant-supported rehabilitation",
    metaTitle: "Bite Reconstruction Case for Severe Tooth Wear | NJ",
    metaDescription:
      "A documented implant-supported bite reconstruction case addressing severe wear, loss of vertical dimension and posterior collapse.",
    overview:
      "Progressive wear had reduced tooth structure and posterior support across both arches. The patient needed a plan that addressed vertical dimension, tooth position and the distribution of biting forces as one coordinated problem.",
    images: [
      { before: case2BeforeLeft, after: case2AfterLeft, beforeAlt: "Left side before comprehensive bite reconstruction", afterAlt: "Left side after comprehensive bite reconstruction" },
      { before: case2BeforeRight, after: case2AfterRight, beforeAlt: "Right side before comprehensive bite reconstruction", afterAlt: "Right side after comprehensive bite reconstruction" },
    ],
    sections: [
      { label: "01 · Clinical Problem", title: "Loss of support changed the entire bite", text: "Advanced wear and posterior collapse reduced vertical dimension and created an unstable relationship between the arches. The lateral views document why both sides needed to be evaluated rather than treating only the teeth that looked most damaged." },
      { label: "02 · Design", title: "A proposed bite was tested before finalization", text: "The planned vertical dimension and tooth arrangement were developed from diagnostic records. A provisional phase allowed the proposed changes to be assessed for function, appearance, speech and cleansability before definitive restorations." },
      { label: "03 · Treatment", title: "Implants and restorations restored posterior support", text: "Strategic implants and full-coverage restorations were sequenced to rebuild support and distribute functional forces. The restorative plan coordinated both arches so the result did not depend on isolated crowns working against an unstable opposing bite." },
      { label: "04 · Result", title: "Balanced support across both sides", text: "The final rehabilitation re-established posterior contacts, vertical dimension and tooth proportions. Clinical outcomes vary, and the images represent this patient's result after individualized planning and treatment." },
    ],
    sequence: ["Wear and bite analysis", "Diagnostic design", "Provisional bite testing", "Implant-supported reconstruction", "Definitive restorations and review"],
    maintenance:
      "The reconstructed bite is reviewed over time for wear, material integrity, implant health and changes in occlusal contacts. A protective appliance may be recommended when parafunction or grinding is present.",
    related: [
      { label: "Tooth Wear Rehabilitation", to: "/tooth-wear-rehabilitation" },
      { label: "Full-Mouth Reconstruction", to: "/full-mouth-reconstruction-new-jersey" },
    ],
  },
  "full-arch-implant-reconstruction": {
    slug: "full-arch-implant-reconstruction",
    path: "/clinical-case/full-arch-implant-reconstruction",
    title: "Full-Arch Implant",
    titleItalic: "Reconstruction",
    eyebrow: "Documented clinical case · Fixed full-arch prosthesis",
    metaTitle: "Full-Arch Implant Reconstruction Case | All-on-X NJ",
    metaDescription:
      "A documented fixed full-arch implant case for non-restorable teeth affected by extensive caries and periodontal breakdown.",
    overview:
      "Severe periodontal breakdown and extensive caries had left the remaining dentition with a poor restorative prognosis. The case required a transition from failing teeth to a fixed implant-supported prosthesis while protecting available bone and planning the final tooth position from the outset.",
    images: [{ before: case3Before, after: case3After, beforeAlt: "Before full-arch implant reconstruction with failing teeth", afterAlt: "After fixed full-arch implant reconstruction" }],
    sections: [
      { label: "01 · Assessment", title: "The question was what could predictably remain", text: "The examination reviewed periodontal support, decay, bone availability, smile display, restorative space and medical factors. Full-arch treatment was considered only after assessing whether retaining selected teeth would offer a stable alternative." },
      { label: "02 · Prosthetic Planning", title: "The bridge position guided implant placement", text: "The proposed tooth arrangement established the restorative envelope. Implant number and position were planned to support the prosthesis while considering available anatomy, force distribution and access for hygiene." },
      { label: "03 · One-Roof Sequence", title: "Surgery and prosthesis were one treatment plan", text: "When clinically appropriate, the Hamilton team coordinates extractions, implant placement, provisional teeth, the definitive bridge and maintenance. This case followed a prosthetically driven sequence rather than treating surgery and the final teeth as separate objectives." },
      { label: "04 · Outcome", title: "A fixed restoration with a maintenance plan", text: "The completed prosthesis restored a continuous arch for chewing, speech and appearance. The result shown belongs to this patient. Candidacy, healing, implant number and the final design differ from case to case." },
    ],
    sequence: ["Restorability and bone assessment", "Digital prosthetic design", "Surgical and provisional phase", "Healing and definitive records", "Final bridge and maintenance"],
    maintenance:
      "A fixed full-arch bridge is not maintenance-free. Professional cleaning, implant and tissue review, home-care instruction and periodic prosthetic evaluation are necessary for long-term service.",
    related: [
      { label: "All-on-4 and Full-Arch Implants", to: "/full-arch-implants-new-jersey" },
      { label: "All-on-4 Cost in New Jersey", to: "/all-on-4-cost-new-jersey" },
    ],
  },
  "failed-implant-rehabilitation": {
    slug: "failed-implant-rehabilitation",
    path: "/clinical-case/failed-implant-rehabilitation",
    title: "Failed Implant and Prosthetic",
    titleItalic: "Rehabilitation",
    eyebrow: "Documented clinical case · Corrective reconstruction",
    metaTitle: "Failed Implant Prosthesis Correction Case | NJ",
    metaDescription:
      "A documented corrective case addressing a fractured, poorly fitting implant prosthesis, unstable bite and compromised tissue health.",
    overview:
      "The patient presented with an implant-supported prosthesis affected by fracture, poor fit, unstable occlusion and compromised aesthetics. Corrective treatment began by identifying which components and implants could be retained and which parts of the previous design required replacement.",
    images: [{ before: case4Before, after: case4After, beforeAlt: "Before correction of a failing implant-supported prosthesis", afterAlt: "After corrective implant and prosthetic rehabilitation" }],
    sections: [
      { label: "01 · Failure Analysis", title: "Why did the previous treatment fail?", text: "A useful revision plan must investigate fit, implant position, component condition, tissue health, cleansability, restorative space and occlusal loading. Replacing a fractured part without understanding the cause risks repeating the same problem." },
      { label: "02 · Salvage Decisions", title: "Retain what remains biologically and mechanically sound", text: "The case was reviewed component by component. Corrective treatment focused on preserving usable support while changing the prosthetic and occlusal factors that contributed to instability." },
      { label: "03 · Reconstruction", title: "The prosthesis and bite were re-engineered together", text: "The corrective design addressed passive fit, force distribution and material support. The occlusal scheme was reorganized to reduce unfavorable loading and create a restoration that could be cleaned and monitored." },
      { label: "04 · Outcome", title: "Correction included a plan for surveillance", text: "The completed rehabilitation improved prosthetic stability, tissue access and aesthetic integration. Revision outcomes depend on the condition and position of the existing implants, which means some cases require a different pathway." },
    ],
    sequence: ["Records and failure analysis", "Implant and component assessment", "Corrective provisional design", "Definitive prosthetic reconstruction", "Tissue and mechanical monitoring"],
    maintenance:
      "Corrected implant work is reviewed for tissue inflammation, screw or component changes, prosthetic wear and occlusal stability. Maintenance intervals are based on the patient's risk and the complexity of the reconstruction.",
    related: [
      { label: "Failed Dental Implant Revision", to: "/failed-dental-implant-revision" },
      { label: "Dental Implants", to: "/dental-implants-new-jersey" },
    ],
  },
  "implant-overdenture": {
    slug: "implant-overdenture",
    path: "/clinical-case/implant-overdenture",
    title: "Implant-Assisted",
    titleItalic: "Overdenture",
    eyebrow: "Documented clinical case · Retention and stability",
    metaTitle: "Implant Overdenture Case | Denture Stability NJ",
    metaDescription:
      "A documented implant-assisted overdenture case addressing poor denture retention, chewing difficulty and functional confidence.",
    overview:
      "The patient's conventional denture moved during function and lacked dependable retention. The treatment objective was not necessarily a fixed bridge, but a removable prosthesis with improved anchorage, easier hygiene and a design appropriate to the available anatomy.",
    images: [{ before: case5Before, after: case5After, beforeAlt: "Before implant-assisted overdenture rehabilitation", afterAlt: "After implant-assisted overdenture rehabilitation" }],
    sections: [
      { label: "01 · Functional Problem", title: "A denture can look acceptable and still fail during function", text: "Retention, border extension, tissue support, bite relationships and available bone were reviewed. The patient's primary limitation was instability during eating and speaking rather than appearance alone." },
      { label: "02 · Treatment Choice", title: "Removable treatment can be the right specialist solution", text: "An implant-assisted overdenture was selected to improve retention while remaining removable for cleaning. The number and location of implants, attachment design and prosthetic contours were planned together." },
      { label: "03 · Prosthetic Design", title: "Attachments require space, alignment and maintenance access", text: "The overdenture was designed around the implant attachments, available restorative space and tissue support. The bite and polished surfaces were refined for function, stability and patient handling." },
      { label: "04 · Outcome", title: "Retention improved without sacrificing hygiene access", text: "The completed overdenture provided a more secure prosthesis for daily function while allowing removal for cleaning. Attachment wear and individual adaptation vary, so periodic adjustment remains part of care." },
    ],
    sequence: ["Denture and bone assessment", "Implant and attachment planning", "Implant placement and healing", "Overdenture fabrication", "Attachment service and recall"],
    maintenance:
      "Overdenture attachments and inserts wear with use and may need replacement. The implants, supporting tissues, prosthesis fit and bite should be reviewed at regular maintenance visits.",
    related: [
      { label: "Dental Implant Options", to: "/dental-implants-new-jersey" },
      { label: "All-on-4 vs All-on-6", to: "/all-on-4-vs-all-on-6" },
    ],
  },
  "anterior-implant-aesthetics": {
    slug: "anterior-implant-aesthetics",
    path: "/clinical-case/anterior-implant-aesthetics",
    title: "Anterior Implant and",
    titleItalic: "Soft-Tissue Aesthetics",
    eyebrow: "Documented clinical case · Biologic and aesthetic correction",
    metaTitle: "Anterior Implant and Soft-Tissue Aesthetic Case | NJ",
    metaDescription:
      "A documented anterior aesthetic correction case addressing grey shadowing, thin soft tissue and compromised restorative contours.",
    overview:
      "Visible grey shadowing and thin tissue around an anterior restoration created an unnatural transition at the gingival margin. The case required correction of the tissue and underlying restorative conditions rather than masking the problem with a brighter crown alone.",
    images: [{ before: case8Before, after: case8After, beforeAlt: "Before anterior implant and soft-tissue aesthetic correction", afterAlt: "After anterior implant and soft-tissue aesthetic correction" }],
    sections: [
      { label: "01 · Aesthetic Diagnosis", title: "Color was only the visible part of the problem", text: "Tissue thickness, gingival level, underlying restorative materials, implant or abutment position and adjacent tooth form were considered. Grey show-through can persist when the biologic and structural causes are not addressed." },
      { label: "02 · Tissue Strategy", title: "The restorative result depended on the soft tissue", text: "A staged approach increased soft-tissue volume and allowed the gingival architecture to mature. Timing was important because the definitive restoration needed a stable tissue frame." },
      { label: "03 · Ceramic Design", title: "Light transmission and contour were planned together", text: "The final all-ceramic restoration was designed to integrate with the neighboring teeth while supporting a cleansable, biologically respectful emergence profile. Shade alone could not create the result." },
      { label: "04 · Outcome", title: "A more natural transition at the gingival margin", text: "The completed treatment reduced grey shadowing and improved tissue volume, contour and shade integration. Anterior implant outcomes depend heavily on baseline anatomy and tissue response, so every case requires individualized risk assessment." },
    ],
    sequence: ["Aesthetic and tissue analysis", "Biologic correction", "Tissue maturation", "Custom ceramic restoration", "Tissue and shade review"],
    maintenance:
      "The tissue and restoration are monitored for inflammation, recession, contact changes and cleansability. Gentle home care and appropriate professional maintenance help protect the aesthetic result.",
    related: [
      { label: "Front Tooth Implants", to: "/front-tooth-implant-new-jersey" },
      { label: "Smile Design", to: "/smile-design" },
    ],
  },
};

export const CLINICAL_CASE_LIST = Object.values(CLINICAL_CASE_DETAILS);
