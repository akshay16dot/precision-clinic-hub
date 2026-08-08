/**
 * Patient journey content, formerly the six standalone /guide/* pages.
 *
 * Those pages duplicated their service pages and competed with them for the
 * same queries. The content itself is good, so it now lives here and is
 * rendered inside the matching service page by <TreatmentJourney />.
 */

export interface HealingPhase {
  label: string;
  text: string;
}

export interface PracticalItem {
  title: string;
  text: string;
}

export interface TreatmentGuide {
  overviewIntro: string;
  overviewDetails: string[];
  timelineTitle?: string;
  healingPhases: HealingPhase[];
  healingRecoveryIntro: string;
  healingRecoveryPoints: string[];
  faqs: { q: string; a: string }[];
  practicalGuidance: PracticalItem[];
  reassuranceLines: string[];
}

export const dentalImplantsJourney: TreatmentGuide = {
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

export const fullArchJourney: TreatmentGuide = {
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

export const immediateImplantsJourney: TreatmentGuide = {
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

export const maxillofacialJourney: TreatmentGuide = {
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

export const teethWhiteningJourney: TreatmentGuide = {
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

export const veneersJourney: TreatmentGuide = {
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

