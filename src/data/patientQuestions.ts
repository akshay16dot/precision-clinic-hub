/**
 * Patient questions knowledge base.
 *
 * Written to be genuinely useful rather than promotional, because content that
 * reads as advertising does not get cited by search engines or AI assistants,
 * and because a patient who gets an honest answer here is more likely to call.
 *
 * Several answers deliberately say "you may not need this" or point at a
 * cheaper alternative. That is intentional.
 */

export type Stage = "before" | "during" | "after";

export interface PatientQuestion {
  q: string;
  a: string;
  cat: string;
  stage: Stage;
}

export const CATEGORIES: { id: string; label: string }[] = [
  { id: "implants", label: "Dental Implants" },
  { id: "immediate", label: "Immediate & Same-Day" },
  { id: "fullarch", label: "All-on-4 & Full Arch" },
  { id: "dentures", label: "Dentures" },
  { id: "aesthetic", label: "Veneers & Aesthetics" },
  { id: "reconstruction", label: "Full Mouth Reconstruction" },
  { id: "maxfac", label: "Maxillofacial Prosthetics" },
  { id: "cost", label: "Cost & Insurance" },
  { id: "choosing", label: "Choosing a Provider" },
  { id: "recovery", label: "Recovery & Aftercare" },
  { id: "problems", label: "Problems & Complications" },
];

export const STAGES: { id: Stage; label: string }[] = [
  { id: "before", label: "Before treatment" },
  { id: "during", label: "During treatment" },
  { id: "after", label: "After treatment" },
];

export const QUESTIONS: PatientQuestion[] = [
  /* ─────────────  DENTAL IMPLANTS  ───────────── */
  {
    cat: "implants", stage: "before",
    q: "What is a dental implant, exactly?",
    a: "A small titanium post placed into the jawbone to replace the root of a missing tooth. Bone grows onto its surface over several months, which is what makes it stable. A separate crown is then attached on top. The implant is the root replacement, not the visible tooth.",
  },
  {
    cat: "implants", stage: "before",
    q: "Am I too old for dental implants?",
    a: "Age itself is not a barrier. Implants are routinely placed in patients in their eighties and nineties. What matters is bone quality, general health, medications and healing capacity, not the number. Some medications and conditions do affect planning, which is why the medical history matters more than the birth date.",
  },
  {
    cat: "implants", stage: "before",
    q: "Do dental implants hurt?",
    a: "The procedure itself is done under local anaesthetic and should be entirely painless. Afterwards most patients describe soreness rather than pain, comparable to an extraction, peaking around 48 to 72 hours and manageable with ordinary pain relief. Most people are surprised it is milder than expected.",
  },
  {
    cat: "implants", stage: "before",
    q: "How long do dental implants last?",
    a: "The implant itself frequently lasts decades and often a lifetime when well placed and maintained. The crown on top has a shorter life, commonly ten to fifteen years or more. So the realistic expectation is a permanent root replacement with a restoration that may need replacing once or twice over a long life.",
  },
  {
    cat: "implants", stage: "before",
    q: "What is the success rate of dental implants?",
    a: "Published success rates for well-planned implants are generally in the mid to high nineties over ten years. That figure is for cases planned and executed properly. Success is not evenly distributed: smoking, uncontrolled diabetes, untreated gum disease and heavy grinding all reduce it meaningfully.",
  },
  {
    cat: "implants", stage: "before",
    q: "Can I get an implant if I smoke?",
    a: "Yes, but the failure rate is higher, roughly double in many studies, because smoking impairs blood supply to healing bone and tissue. Stopping even a few weeks before and after surgery measurably improves the odds. A clinician who does not raise this with you is not doing you a favour.",
  },
  {
    cat: "implants", stage: "before",
    q: "Do I have enough bone for an implant?",
    a: "This is answered by a 3D scan, not by looking in your mouth. Bone shrinks after a tooth is removed, so how long the space has been empty matters. Where bone is insufficient, grafting can usually build it back. Being told you have no bone without a 3D scan is worth a second opinion.",
  },
  {
    cat: "implants", stage: "before",
    q: "What is a bone graft and will I need one?",
    a: "Adding bone material to a site that has too little, so an implant has something to anchor into. It may be a small amount placed at the same appointment as the implant, or a separate procedure requiring months of healing first. Whether you need one depends on the scan, not on a general rule.",
  },
  {
    cat: "implants", stage: "before",
    q: "Implant or bridge, which is better?",
    a: "It depends on the neighbouring teeth. A bridge requires cutting down the teeth either side, which is a real cost if those teeth are healthy and untouched. If they already have large fillings or crowns, a bridge may be the more conservative overall choice. Anyone recommending an implant without discussing this is giving you half the picture.",
  },
  {
    cat: "implants", stage: "before",
    q: "Can I have an implant if I have gum disease?",
    a: "Not until it is under control. Implants are susceptible to a similar disease process around them, and placing one into an actively infected mouth substantially raises the risk of losing it. Gum disease is treated first, then the implant is planned. This sequencing is not a delay tactic.",
  },
  {
    cat: "implants", stage: "during",
    q: "How long does implant surgery take?",
    a: "A single straightforward implant typically takes 30 to 60 minutes. Multiple implants or cases involving grafting take longer. The appointment usually feels shorter than patients expect, and most of the time is spent on preparation and verification rather than the placement itself.",
  },
  {
    cat: "implants", stage: "during",
    q: "Will I be put to sleep?",
    a: "Not usually. Most implant surgery is done under local anaesthetic with the patient awake and comfortable. Sedation is available for anxious patients or longer, more complex cases, and general anaesthesia is reserved for extensive surgery or specific medical reasons.",
  },
  {
    cat: "implants", stage: "during",
    q: "Will I have a gap while it heals?",
    a: "Rarely, and not in the visible zone if it can be avoided. Depending on the case you may receive an immediate temporary crown, a temporary bridge, or a removable retainer with a tooth on it. You should not be sent away with a visible gap without that having been discussed and agreed beforehand.",
  },
  {
    cat: "implants", stage: "after",
    q: "How long before I get the permanent crown?",
    a: "Typically three to four months after placement in healthy patients, longer where grafting was done or where healing is slower. The wait exists so the bone can fully integrate before the implant carries load. Rushing this stage is one of the more common causes of early failure.",
  },
  {
    cat: "implants", stage: "after",
    q: "How do I clean an implant?",
    a: "Brushing as normal, plus cleaning between and around it with floss, interdental brushes or a water flosser. Implants cannot decay, but the gum and bone around them can become inflamed and recede. Cleaning around an implant is more important than cleaning a natural tooth, not less.",
  },

  /* ─────────────  IMMEDIATE / SAME-DAY  ───────────── */
  {
    cat: "immediate", stage: "before",
    q: "Can I have a tooth out and an implant put in the same day?",
    a: "Often yes, when the socket allows stable placement and there is no active infection preventing it. This is called immediate placement. It preserves the bone and gum architecture that already exists rather than letting it collapse and rebuilding it later, which is why it frequently gives a better final result.",
  },
  {
    cat: "immediate", stage: "before",
    q: "Does same-day mean I walk out with a permanent tooth?",
    a: "No, and this is the most common misunderstanding. Same-day means you leave with a temporary tooth attached the same day. The permanent restoration is made months later after healing. Any practice implying you get final teeth in a day is overselling it.",
  },
  {
    cat: "immediate", stage: "before",
    q: "Am I a candidate for an immediate implant?",
    a: "More people are than expect to be. The determining factors are whether the implant can achieve enough initial stability, whether infection can be cleared, and whether there is adequate bone beyond the socket. It is assessed on a 3D scan and confirmed during the extraction itself.",
  },
  {
    cat: "immediate", stage: "before",
    q: "Is immediate placement riskier than waiting?",
    a: "In properly selected cases the success rates are comparable to delayed placement. The risk comes from doing it in cases that were not suitable. It requires a more demanding technique and careful case selection, which is why outcomes vary more between clinicians than between the two approaches.",
  },
  {
    cat: "immediate", stage: "before",
    q: "Why does timing matter so much for front teeth?",
    a: "The bone on the outer surface of the upper front jaw is often less than a millimetre thick and starts resorbing as soon as the tooth is removed. Once it collapses, the gum above it drops with it. Acting before that collapse preserves architecture that is difficult to rebuild afterwards.",
  },
  {
    cat: "immediate", stage: "before",
    q: "My tooth is infected. Can I still have an immediate implant?",
    a: "Sometimes. Chronic low-grade infection is often manageable with thorough cleaning of the socket at the time of surgery. Acute, spreading infection usually means treating it first and placing the implant later. This is a judgement made on the day with the socket visible, not decided in advance.",
  },
  {
    cat: "immediate", stage: "during",
    q: "What happens on the day of an immediate implant?",
    a: "The tooth is removed as atraumatically as possible, the socket is cleaned and assessed, the implant is placed, the gap between implant and socket wall is grafted, and depending on stability either a temporary crown or a healing component is fitted. It is usually one appointment of one to two hours.",
  },
  {
    cat: "immediate", stage: "during",
    q: "Why do they graft at the same time?",
    a: "Because the implant is narrower than the socket it sits in, leaving a gap. If that gap is left empty it fills with soft tissue rather than bone, and the outer plate of bone resorbs. Filling it is what protects the facial contour years later. It is not an optional extra.",
  },
  {
    cat: "immediate", stage: "during",
    q: "Will the temporary tooth look normal?",
    a: "It should look natural enough for ordinary daily life, though it is generally not as refined as the final restoration. Its more important job is shaping the gum during healing so the final crown emerges from the right contour. It is a tool, not just a placeholder.",
  },
  {
    cat: "immediate", stage: "after",
    q: "Can I eat on a same-day implant?",
    a: "Not normally on that tooth. The temporary is usually designed to be out of heavy contact so it does not load the implant during early healing. You eat on the other side and keep to softer food initially. Loading an implant too early is a genuine cause of failure.",
  },
  {
    cat: "immediate", stage: "after",
    q: "How long until the final tooth after an immediate implant?",
    a: "Commonly three to four months, sometimes longer in softer bone or where extensive grafting was done. The timeline is driven by integration, not by convenience, and a clinician who shortens it without a reason is taking a risk with your case.",
  },
  {
    cat: "immediate", stage: "after",
    q: "What if the immediate implant fails?",
    a: "The site is cleaned, usually grafted, and allowed to heal for a few months before a second attempt. A failed immediate implant does not mean you have lost the site permanently. Second attempts after proper healing have good success rates.",
  },

  /* ─────────────  ALL-ON-4 / FULL ARCH  ───────────── */
  {
    cat: "fullarch", stage: "before",
    q: "What is All-on-4?",
    a: "A technique where a full arch of fixed teeth is supported by four implants, two placed vertically at the front and two angled at the back to avoid the sinus and nerve. It was developed in the 1990s and the name is a trademark owned by an implant manufacturer, which is part of why it is used so widely in marketing.",
  },
  {
    cat: "fullarch", stage: "before",
    q: "Is All-on-6 better than All-on-4?",
    a: "Not automatically. Four well-placed implants in good bone outperform six poorly placed ones. More implants add load distribution and redundancy, which matters most in the upper jaw, in heavy grinders, and in longer arches. The right number is determined by your anatomy, not chosen from a menu.",
  },
  {
    cat: "fullarch", stage: "before",
    q: "Why would the upper jaw need more implants than the lower?",
    a: "The lower jaw has denser bone and the front of it is the most reliable implant site in the mouth. The upper jaw has softer bone, sinuses limiting where implants can go, and a longer arch. A plan of four below and six above is common and reflects real anatomy rather than upselling.",
  },
  {
    cat: "fullarch", stage: "before",
    q: "What are zygomatic implants?",
    a: "Longer implants anchored in the cheekbone rather than the upper jaw, for patients whose upper jaw bone has resorbed so severely that conventional implants have nothing to hold onto. They avoid extensive grafting and the year of healing it requires, but they are a more demanding procedure and cost considerably more.",
  },
  {
    cat: "fullarch", stage: "before",
    q: "I have been in dentures for years. Am I too late?",
    a: "Usually not. Long-term denture wearers lose bone, sometimes a lot, but grafting, angled placement and zygomatic implants have made many previously untreatable situations treatable. Being told years ago that you were not a candidate is worth revisiting, because what is possible has changed.",
  },
  {
    cat: "fullarch", stage: "before",
    q: "Do all my remaining teeth have to come out?",
    a: "For a full-arch fixed bridge, yes for that arch. That is a significant decision and deserves genuine scrutiny. If several teeth are sound and strategically placed, a partial solution may serve you better. Be cautious of any plan that clears an arch without a clear explanation of why each tooth cannot be kept.",
  },
  {
    cat: "fullarch", stage: "before",
    q: "What is the difference between fixed and removable full arch?",
    a: "Fixed teeth are screwed to the implants and only your dentist removes them. An implant overdenture clips onto implants and you take it out to clean. Fixed feels more like natural teeth and costs more. Overdentures use fewer implants, cost less, and are easier to clean, which matters if dexterity is limited.",
  },
  {
    cat: "fullarch", stage: "before",
    q: "Acrylic or zirconia, which should I choose?",
    a: "Acrylic on a titanium bar is less expensive and works well, but it wears, stains and can fracture, commonly needing significant repair at five to ten years. Monolithic zirconia is much stronger, does not stain and holds appearance far longer, at a higher upfront cost. For heavy bite forces, zirconia is usually better value over time.",
  },
  {
    cat: "fullarch", stage: "before",
    q: "How many teeth are on a full-arch bridge?",
    a: "Usually ten to twelve per arch. It generally does not extend to the very back molars, because the load there is high and the benefit small. Most patients find chewing is fully restored without them.",
  },
  {
    cat: "fullarch", stage: "during",
    q: "Do I get teeth the same day for full arch?",
    a: "In most cases yes, a fixed temporary bridge is attached the same day. It is not the final prosthesis. You wear it for several months while the implants integrate, and it is deliberately designed to be easier to adjust than the definitive one.",
  },
  {
    cat: "fullarch", stage: "during",
    q: "How long does full-arch surgery take?",
    a: "Typically three to six hours for one arch including extractions, implant placement and fitting the temporary bridge. Both arches together is a long day. Sedation is common for this length of procedure.",
  },
  {
    cat: "fullarch", stage: "after",
    q: "What can I eat after full-arch surgery?",
    a: "Soft food for the first several weeks, then gradually firmer. The temporary bridge is not designed for full biting force. Most protocols restrict hard and chewy food until the final prosthesis is fitted, and following that restriction genuinely affects the outcome.",
  },
  {
    cat: "fullarch", stage: "after",
    q: "How do I clean a fixed full-arch bridge?",
    a: "Under it, not just on it. A water flosser, superfloss and interdental brushes are used to clean beneath the bridge where it meets the gum. This is the single biggest factor in long-term success and it takes a few minutes daily. If you will not do it, an overdenture may suit you better.",
  },
  {
    cat: "fullarch", stage: "after",
    q: "Will I speak normally with full-arch teeth?",
    a: "There is usually an adaptation period of a few weeks, and some patients notice a temporary lisp on S sounds. It generally resolves as the tongue adapts. Persistent speech difficulty after a couple of months usually indicates the prosthesis design needs adjusting rather than more time.",
  },
  {
    cat: "fullarch", stage: "after",
    q: "How often do full-arch implants need maintenance?",
    a: "Professional cleaning and assessment at least twice a year, and the prosthesis is usually unscrewed and cleaned thoroughly once a year. Screws are checked, the bite is reviewed, and bone levels are radiographed periodically. Skipping maintenance is how small problems become expensive ones.",
  },
  {
    cat: "fullarch", stage: "after",
    q: "What happens if the bridge breaks?",
    a: "Acrylic bridges fracture reasonably often and are usually repairable. What matters is why it broke. A one-off accident is different from repeated fractures, which usually mean the bite is unbalanced or the framework underneath is inadequate. Repeated repairs without addressing the cause is treating the symptom.",
  },
  {
    cat: "fullarch", stage: "after",
    q: "How long does a full-arch bridge last?",
    a: "The implants often last decades. The bridge on top has a finite life: acrylic commonly needs major work at five to ten years, zirconia considerably longer. Budgeting for prosthesis replacement at some point during your lifetime is realistic rather than pessimistic.",
  },

  /* ─────────────  DENTURES  ───────────── */
  {
    cat: "dentures", stage: "before",
    q: "Are dentures still a reasonable option?",
    a: "Yes, and it is worth saying plainly. A well-made denture is a legitimate treatment, not a failure. It is removable, considerably less expensive, requires no surgery and suits many patients well, particularly where health, budget or bone volume make implants difficult. The problem is poorly made dentures, not dentures.",
  },
  {
    cat: "dentures", stage: "before",
    q: "What is the difference between a complete and a partial denture?",
    a: "A complete denture replaces all teeth in an arch and rests on the gum. A partial denture replaces some teeth and is supported by the remaining ones, usually with clasps or precision attachments. Partials are generally more stable because natural teeth are doing some of the work.",
  },
  {
    cat: "dentures", stage: "before",
    q: "What is an implant overdenture?",
    a: "A denture that clips onto two or more implants instead of resting only on the gum. You still remove it to clean, but it does not move while eating or speaking. For lower dentures in particular, which are notoriously unstable, two implants transform the experience for a fraction of the cost of fixed teeth.",
  },
  {
    cat: "dentures", stage: "before",
    q: "Why do lower dentures move around so much?",
    a: "Because there is far less surface area and no suction to hold them, and the tongue and cheek muscles constantly displace them. Upper dentures seal against the palate and are usually stable. A lower denture that will not stay put is a known limitation of the design, not something you are doing wrong.",
  },
  {
    cat: "dentures", stage: "before",
    q: "How many implants do I need to stabilise a denture?",
    a: "Two is the established minimum for a lower overdenture and makes a substantial difference. Four gives more stability and better load distribution. For an upper overdenture, four or more is usually needed because the bone is softer and the palate coverage is often what patients want removed.",
  },
  {
    cat: "dentures", stage: "before",
    q: "Can I have the palate removed from my upper denture?",
    a: "Only if it is implant-supported. The palate is what provides suction and support on a conventional upper denture. Removing it without implants leaves a denture that will not stay in. With four or more implants, a horseshoe-shaped design is usually possible and most patients find eating much more enjoyable.",
  },
  {
    cat: "dentures", stage: "before",
    q: "Will dentures change how my face looks?",
    a: "Yes, and this is under the clinician's control rather than inevitable. Teeth support the lips and cheeks and set the height of the lower face. A well-designed denture restores that. A denture made too short makes the face look collapsed and older, which is one of the most common complaints about poorly made ones.",
  },
  {
    cat: "dentures", stage: "before",
    q: "What is an immediate denture?",
    a: "A denture made in advance and fitted the same day the teeth are removed, so you are never without teeth. The trade-off is that the gum shrinks considerably as it heals, so it will need relining and often replacing after several months. That is expected, not a fault.",
  },
  {
    cat: "dentures", stage: "during",
    q: "How long does it take to make a denture?",
    a: "Usually four to six appointments over several weeks: impressions, bite records, a try-in where you see and approve the teeth before they are finished, then fitting and adjustment. The try-in stage matters. Approving the appearance before the denture is processed is what prevents disappointment.",
  },
  {
    cat: "dentures", stage: "during",
    q: "Can I see what they will look like before they are made?",
    a: "Yes, and you should insist on it. At the try-in stage the teeth are set in wax so shape, colour, position and lip support can be assessed and changed. Once the denture is processed, changes are far harder. Any process that skips this stage is removing your say in the result.",
  },
  {
    cat: "dentures", stage: "after",
    q: "How long does it take to get used to dentures?",
    a: "Usually several weeks for speech and a few months for confident eating, and longer for a first-time wearer than for a replacement. Increased saliva, a feeling of bulk and some difficulty with certain sounds are all normal early on and settle. Persistent pain is not normal and needs adjusting.",
  },
  {
    cat: "dentures", stage: "after",
    q: "Should I use denture adhesive?",
    a: "It can help, particularly during adaptation. But heavy reliance on adhesive usually means the denture does not fit well, and the right response is relining or remaking it rather than more adhesive. If you cannot manage without it, that is diagnostic information.",
  },
  {
    cat: "dentures", stage: "after",
    q: "How often do dentures need replacing?",
    a: "Typically every five to ten years, and relining sooner. This is not because the denture wears out so much as because the gum and bone underneath continue to shrink, so a denture that fitted perfectly gradually stops fitting. An old denture on a changed ridge causes sore spots and accelerates bone loss.",
  },
  {
    cat: "dentures", stage: "after",
    q: "Do dentures cause bone loss?",
    a: "They do not prevent it. Bone shrinks after teeth are removed because it no longer receives stimulation, and a denture resting on the gum does not replace that. Implants do stimulate bone, which is the strongest functional argument for them over a conventional denture.",
  },
  {
    cat: "dentures", stage: "after",
    q: "Should I sleep with my dentures in?",
    a: "Generally no. Leaving them out overnight lets the tissue recover and reduces the risk of fungal infection and inflammation. Store them in water or a cleaning solution so they do not dry out and distort. There are occasional clinical reasons to wear them at night, but they should be specified rather than assumed.",
  },

  /* ─────────────  VENEERS & AESTHETICS  ───────────── */
  {
    cat: "aesthetic", stage: "before",
    q: "What is the difference between veneers and crowns?",
    a: "A veneer covers the front surface and edge of a tooth, removing a small amount of enamel. A crown covers the whole tooth and requires considerably more reduction. Veneers are more conservative and are for teeth that are structurally sound. A heavily filled or cracked tooth usually needs a crown.",
  },
  {
    cat: "aesthetic", stage: "before",
    q: "Do veneers ruin your teeth?",
    a: "Properly prepared veneers remove a small amount of enamel, typically half a millimetre, which is irreversible but conservative. The damage people associate with veneers usually comes from over-preparation, from veneers used to disguise misaligned teeth that should have been moved orthodontically, or from crowns being called veneers.",
  },
  {
    cat: "aesthetic", stage: "before",
    q: "How many veneers will I need?",
    a: "Fewer than most people expect. It depends on how many teeth show when you smile and speak. Some patients need only the four front teeth, many need six to eight, and some need ten. A design process should tell you the minimum that achieves the result rather than defaulting to a set number.",
  },
  {
    cat: "aesthetic", stage: "before",
    q: "Can I see what my smile will look like first?",
    a: "Yes, and you should. A mock-up places the proposed design directly onto your teeth without cutting anything, so you can wear it, look at it in your own mirror and change it. It comes off afterwards. A meaningful number of patients choose something more conservative once they see it.",
  },
  {
    cat: "aesthetic", stage: "before",
    q: "Veneers or braces for crooked teeth?",
    a: "For mild crowding, veneers can disguise it. For significant misalignment they cannot, and forcing it means removing a lot of healthy tooth structure to create the illusion of a different position. Straightening first and then doing minimal restorative work is usually both more conservative and a better result.",
  },
  {
    cat: "aesthetic", stage: "before",
    q: "Will veneers look fake?",
    a: "That is a design decision, not an inevitability. Uniform, oversized, uniformly bright teeth look artificial. Proportion relative to your face, subtle variation between teeth, a natural gum line and a colour suited to your complexion and age are what make them read as real. Ask to see cases the clinician has actually done.",
  },
  {
    cat: "aesthetic", stage: "before",
    q: "Is bonding a good alternative to veneers?",
    a: "For smaller corrections, often yes. Composite bonding is added to the tooth without cutting it, is reversible, and costs considerably less. It stains and wears faster than porcelain and needs maintenance. For a younger patient with modest concerns it is frequently the better first step precisely because it preserves options.",
  },
  {
    cat: "aesthetic", stage: "before",
    q: "Why is one front tooth so hard to match?",
    a: "Because you are matching a single tooth against its natural neighbour, and the eye is extremely good at detecting differences in translucency, surface texture and the way light passes through the edge. It is generally considered the hardest aesthetic problem in dentistry. It is achievable, but it deserves an honest conversation about expectations.",
  },
  {
    cat: "aesthetic", stage: "during",
    q: "What happens while veneers are being made?",
    a: "You wear temporary veneers, usually made from the approved mock-up, for one to two weeks. They let you test shape and length in real life. They are more fragile than the finished porcelain, so hard and sticky food is avoided during that period.",
  },
  {
    cat: "aesthetic", stage: "during",
    q: "Does getting veneers hurt?",
    a: "Preparation is done under local anaesthetic and is not painful. Some sensitivity to cold between preparation and fitting is common and usually settles once the final veneers are bonded. Ongoing significant sensitivity afterwards is not normal and should be reviewed.",
  },
  {
    cat: "aesthetic", stage: "after",
    q: "How long do veneers last?",
    a: "Commonly ten to fifteen years and often longer with good maintenance. They can chip or debond, particularly in patients who grind. A night guard significantly extends their life and is generally worth the cost. The gum line changing over time is a more common reason for replacement than the porcelain failing.",
  },
  {
    cat: "aesthetic", stage: "after",
    q: "Can veneers be whitened later?",
    a: "No. Porcelain does not respond to whitening. This is why whitening your natural teeth first, then matching the veneers to the whitened shade, is the correct order. Doing it the other way round leaves you unable to change the colour without replacing the veneers.",
  },
  {
    cat: "aesthetic", stage: "after",
    q: "Do I need a night guard with veneers?",
    a: "If you grind or clench, yes, and it is not an upsell. Grinding forces are the most common cause of veneer fracture. A guard costs a fraction of replacing several veneers and is the single most effective thing you can do to protect the investment.",
  },
  {
    cat: "aesthetic", stage: "after",
    q: "Will my gums recede around veneers?",
    a: "They can, over years, as they can around natural teeth. If it happens, a line at the margin may become visible. Good margin placement, healthy gums and thorough cleaning reduce the risk. Where recession does occur, the veneer may need replacing or the gum may be treatable.",
  },
  {
    cat: "aesthetic", stage: "before",
    q: "Does teeth whitening damage enamel?",
    a: "Professionally supervised whitening at appropriate concentrations does not damage enamel. Sensitivity during treatment is common and temporary. The risks come from unsupervised high-concentration products, over-frequent use, and shop-bought trays that leak gel onto the gums.",
  },

  /* ─────────────  FULL MOUTH RECONSTRUCTION  ───────────── */
  {
    cat: "reconstruction", stage: "before",
    q: "What is full mouth reconstruction?",
    a: "Rebuilding function, bite and appearance across the whole mouth as one plan, rather than repairing teeth one at a time as they fail. It usually combines crowns, implants, onlays and sometimes veneers, sequenced deliberately. It is a functional rebuild in which appearance is one of the outputs, not a cosmetic exercise.",
  },
  {
    cat: "reconstruction", stage: "before",
    q: "How do I know if I need one?",
    a: "Usually several of these together: multiple failing or missing teeth, a bite that has collapsed from wear, several old restorations reaching the end of their life at once, chewing limited to one side, and jaw or muscle discomfort. One alone rarely justifies it. Several together mean treating teeth individually is the more expensive path.",
  },
  {
    cat: "reconstruction", stage: "before",
    q: "Does it all have to be done at once?",
    a: "Often not. Many reconstructions can be staged over months or years, treating the most urgent area first. What matters is that the staging comes from a single overall design, so each phase is compatible with the next rather than being an improvised repair.",
  },
  {
    cat: "reconstruction", stage: "before",
    q: "How long does full mouth reconstruction take?",
    a: "Commonly six to eighteen months from first consultation to final restoration. Where implants are involved, healing time drives the schedule rather than appointment availability. Cases requiring grafting take longer.",
  },
  {
    cat: "reconstruction", stage: "before",
    q: "Why do worn teeth need the bite rebuilt rather than just capped?",
    a: "Because as teeth wear down the jaw closes further than it was designed to. If you rebuild the teeth to their original height without restoring that lost space, the new restorations have nowhere to go. They chip, fracture, or push the jaw somewhere it does not want to be.",
  },
  {
    cat: "reconstruction", stage: "during",
    q: "What is the provisional stage and why does it matter?",
    a: "Temporary restorations built to the proposed new bite, worn for a period so you can eat, speak and sleep in it before anything permanent is made. It is the stage most predictive of whether the reconstruction lasts, and the stage most often skipped because it adds time and cost.",
  },
  {
    cat: "reconstruction", stage: "during",
    q: "Will I be without teeth during reconstruction?",
    a: "No. Provisional restorations are worn throughout and are designed to look and function acceptably rather than merely fill gaps. If a proposed plan requires you to be without teeth at any point, that should be stated clearly at the outset.",
  },
  {
    cat: "reconstruction", stage: "during",
    q: "Will my new bite feel strange?",
    a: "Initially, usually yes. Most people adapt within two to six weeks. That is precisely why the new position is tested in provisionals first, so difficulty adapting is discovered while the position can still be changed easily.",
  },
  {
    cat: "reconstruction", stage: "after",
    q: "How long does a reconstruction last?",
    a: "Well-executed reconstructions frequently last fifteen years or more, and individual components longer. Longevity depends heavily on two things you control: wearing the night guard if one was prescribed, and attending maintenance reviews.",
  },
  {
    cat: "reconstruction", stage: "after",
    q: "Why do I need a night guard afterwards?",
    a: "Because if grinding contributed to the original breakdown, that force has not gone away. A reconstruction not protected from the force that destroyed the original teeth will fail in the same way, usually faster because restorations are less forgiving than enamel.",
  },

  /* ─────────────  MAXILLOFACIAL  ───────────── */
  {
    cat: "maxfac", stage: "before",
    q: "What is a maxillofacial prosthodontist?",
    a: "A prosthodontist with additional fellowship training in replacing facial and oral structures lost to cancer surgery, trauma or congenital conditions. There are only eight such training programmes in the United States, which is why these clinicians are rare and patients often travel for this care.",
  },
  {
    cat: "maxfac", stage: "before",
    q: "What is an obturator?",
    a: "A prosthesis that seals an opening between the mouth and the nasal cavity or sinus, usually after surgery for a tumour in the upper jaw. It restores the ability to speak intelligibly, eat without food and liquid escaping into the nose, and swallow normally.",
  },
  {
    cat: "maxfac", stage: "before",
    q: "Can a nose, ear or eye really be replaced with a prosthesis?",
    a: "Yes. Custom silicone prostheses are sculpted and hand-tinted to match your own skin, and where you have an intact opposite ear or eye, it is mirrored from your own anatomy. At conversational distance a well-made prosthesis is generally not identified as one.",
  },
  {
    cat: "maxfac", stage: "before",
    q: "Is a facial prosthesis covered by insurance?",
    a: "Usually, and this is the one area where coverage is often substantial. Facial prostheses are classified as prosthetic devices rather than cosmetic treatment, and Medicare covers them under specific HCPCS codes. We prepare the documentation and submit on your behalf. Denials are typically about paperwork rather than eligibility and are frequently overturned when the functional argument is made properly.",
  },
  {
    cat: "maxfac", stage: "before",
    q: "How does a facial prosthesis stay on?",
    a: "Either medical adhesive at the margins, which requires no surgery, or small implants placed in the bone with magnets or clips, which gives far more secure retention and no daily adhesive. Implant retention requires surgery and healing time but changes how confident people feel in public.",
  },
  {
    cat: "maxfac", stage: "before",
    q: "I was told years ago nothing could be done. Is that still true?",
    a: "Very likely not. Digital scanning, current silicone materials and craniofacial implants have all changed substantially. Patients previously deemed unsuitable, including those who have had radiation, are frequently candidates now. It is worth a reassessment.",
  },
  {
    cat: "maxfac", stage: "during",
    q: "How long does it take to make a facial prosthesis?",
    a: "Typically several appointments across four to eight weeks for an adhesive-retained prosthesis. Implant retention adds a surgical procedure and several months of healing before the prosthesis is made. Colour matching in particular is not something that can be rushed.",
  },
  {
    cat: "maxfac", stage: "during",
    q: "When can treatment start after cancer surgery?",
    a: "Generally once the surgical site has healed and stabilised, commonly six weeks to three months. If radiation is planned, sequencing should be discussed early because it affects both timing and whether implants are advisable.",
  },
  {
    cat: "maxfac", stage: "after",
    q: "How long does a silicone facial prosthesis last?",
    a: "Typically one to three years before colour fading or edge deterioration warrants replacement. Sun exposure is the main factor that shortens it. Replacement for normal wear is a recognised reason for insurance coverage, not an out-of-pocket surprise.",
  },
  {
    cat: "maxfac", stage: "after",
    q: "How do I look after a facial prosthesis?",
    a: "It is removed at night and cleaned daily with mild soap and water. Adhesive residue is cleaned from both the prosthesis and the skin. Keeping it out of prolonged direct sunlight meaningfully extends its life.",
  },

  /* ─────────────  COST & INSURANCE  ───────────── */
  {
    cat: "cost", stage: "before",
    q: "Why do implant quotes vary so much between practices?",
    a: "Because different treatments are being sold under the same name. What is included differs, materials differ, the number of implants differs, and who is doing the work differs. A quote excluding extractions, the final prosthesis or follow-up is not comparable to one that includes them.",
  },
  {
    cat: "cost", stage: "before",
    q: "What should a quote include?",
    a: "Diagnostics and planning, extractions, any bone preparation or grafting, the implants themselves, the temporary restoration, the definitive restoration, and follow-up appointments. Ask which of those seven are in the number you have been given. That single question explains most of the variation in this market.",
  },
  {
    cat: "cost", stage: "before",
    q: "Is a cheaper quote a bad sign?",
    a: "Not automatically, and there are good clinicians across the price range. But an advertised entry price usually assumes a specific configuration with no complicating factors. Ask what it assumes and what your case actually requires. The gap between those two is where the surprises live.",
  },
  {
    cat: "cost", stage: "before",
    q: "Do you take my insurance?",
    a: "We are a fee-for-service practice, which means we are not contracted with insurance networks and you pay the practice directly. We then prepare and submit the documentation so you can claim back whatever your plan allows. In practice this means we work on the clinical merits of your case rather than what a network permits.",
  },
  {
    cat: "cost", stage: "before",
    q: "So will my insurance pay anything at all?",
    a: "Often yes, and we help you get it. Most dental plans have annual maximums between $1,000 and $2,500, so they cover a portion rather than the whole. Some plans exclude implants but contribute the equivalent of a bridge. We check your specific plan and tell you what to realistically expect before you commit.",
  },
  {
    cat: "cost", stage: "before",
    q: "What does fee-for-service actually mean for me?",
    a: "You pay the practice directly and we submit claims on your behalf for reimbursement. The practical difference is that treatment decisions are made on what your case needs, not on what a network contract covers or how long it will authorise. The trade-off is that more of the cost sits with you upfront.",
  },
  {
    cat: "cost", stage: "before",
    q: "Will medical insurance cover any of this?",
    a: "Sometimes, where treatment follows trauma, cancer treatment or a congenital condition, or where medical necessity is documented. Facial and maxillofacial prostheses are usually billed medically rather than dentally. We pursue both routes rather than assuming dental is the only one, because medical coverage is frequently the larger of the two.",
  },
  {
    cat: "cost", stage: "before",
    q: "Are there financing options?",
    a: "Yes, and most patients use them. Third-party healthcare financing is widely available and many practices offer payment plans. Compare the total cost of financing rather than only the monthly payment, since terms vary considerably and long low-payment plans can cost far more overall.",
  },
  {
    cat: "cost", stage: "before",
    q: "Is dental treatment abroad worth considering?",
    a: "It is genuinely cheaper upfront and some clinics abroad do good work. The real risks are follow-up and adjustment appointments, complications arising after you return home that must be managed by someone who did not do the original work, and repairs to unfamiliar implant systems. Ask specifically who handles maintenance.",
  },
  {
    cat: "cost", stage: "before",
    q: "Why is a specialist more expensive?",
    a: "Longer training, more time per case, and usually more diagnostic work before treatment starts. Whether that is worth it depends on complexity. For a single straightforward implant it may not matter. For a full arch or a case that has already failed once, it usually does.",
  },
  {
    cat: "cost", stage: "before",
    q: "Can I spread treatment over time to spread the cost?",
    a: "Often yes, and it is a reasonable thing to ask for. What matters is that the staging is planned from a single design so each phase is compatible with the next. Ask what happens if you complete only the first stage. A good plan leaves you better off at every stopping point.",
  },
  {
    cat: "cost", stage: "before",
    q: "Should I get a second opinion on a large treatment plan?",
    a: "For anything involving multiple implants, a full arch or a full mouth reconstruction, yes. It is normal medical practice and no reasonable clinician takes offence. Bring your scans and the written plan so the second opinion is assessing the same information.",
  },
  {
    cat: "cost", stage: "after",
    q: "What ongoing costs should I expect?",
    a: "Maintenance appointments, periodic radiographs, a night guard if prescribed and its eventual replacement, and at some point replacement of the restoration itself. Implants are not a one-time purchase with no further cost, and a plan presented that way is incomplete.",
  },
  {
    cat: "cost", stage: "after",
    q: "Who pays if the work fails?",
    a: "It depends on the practice, how long ago, and what warranty was offered. Ask before treatment what is covered, for how long, and what would void it. Get the answer in writing. This is a fair question and the answer tells you something about the practice.",
  },

  /* ─────────────  CHOOSING A PROVIDER  ───────────── */
  {
    cat: "choosing", stage: "before",
    q: "What is a prosthodontist?",
    a: "A dental specialist with three years of full-time residency training after dental school, focused on replacing and restoring teeth: crowns, bridges, implants, dentures and full mouth reconstruction. There are roughly 3,200 in the United States compared with around 170,000 general dentists.",
  },
  {
    cat: "choosing", stage: "before",
    q: "Prosthodontist, oral surgeon or periodontist for implants?",
    a: "All three place implants. Oral surgeons and periodontists focus on the surgical side, prosthodontists on the design and function of the teeth that go on top. For a single straightforward implant, any is fine. For complex, aesthetic or previously failed cases, who plans the final result matters more.",
  },
  {
    cat: "choosing", stage: "before",
    q: "Can a general dentist place implants?",
    a: "Yes, legally, and many do so competently. There is no specialty requirement. What varies is training, from a weekend course to years of structured education. For a simple case that may not matter. For a full arch it matters a great deal, and it is reasonable to ask directly what training they have.",
  },
  {
    cat: "choosing", stage: "before",
    q: "What does board certified actually mean?",
    a: "That the clinician has completed specialty residency and then passed a further set of written and oral examinations set by the specialty board. Board eligible means the residency was completed but the examinations were not passed or not yet attempted. They are different things and both appear in advertising.",
  },
  {
    cat: "choosing", stage: "before",
    q: "What questions should I ask at a consultation?",
    a: "What will the final teeth look like and how does the proposed implant position achieve that. How many of these cases do you complete a year. What is included in the price. What happens if something fails. Can I see photographs of your own cases. Clear answers to those five tell you most of what you need.",
  },
  {
    cat: "choosing", stage: "before",
    q: "Do I need a referral to see a specialist?",
    a: "No. You can book directly. Many patients are referred by their general dentist, and many come independently after researching a complex problem or seeking a second opinion.",
  },
  {
    cat: "choosing", stage: "before",
    q: "Is it a problem if surgery and restoration are done by different people?",
    a: "Not if they plan the case together beforehand. It becomes a problem when they do not, because the implant can be placed somewhere that makes a good final tooth difficult, and the restoring dentist is left compensating. Ask whether they plan jointly and who holds overall responsibility.",
  },
  {
    cat: "choosing", stage: "before",
    q: "Can implant surgery and the final teeth be done under one roof?",
    a: "Yes. In a specialist-led implant practice, the same team can coordinate diagnosis, 3D planning, implant placement, provisional teeth, the final restoration and maintenance. The advantage is continuity: the person planning the final tooth also controls the implant position and remains responsible for how the result functions. Some patients still need an outside medical or surgical specialist, and a good practice will say so when that is safer.",
  },
  {
    cat: "choosing", stage: "before",
    q: "Who is responsible for my All-on-4 teeth after surgery?",
    a: "Ask this before treatment. Full-arch care continues well after implants are placed: the provisional bridge needs adjustment, the final bridge must be designed and delivered, and the implants and prosthesis need lifelong maintenance. A complete plan names the clinician and office responsible for every stage rather than ending at surgery.",
  },
  {
    cat: "choosing", stage: "before",
    q: "How do I judge before and after photographs?",
    a: "Look for consistent lighting and angles between the two, full-face images rather than only close-ups, and cases that resemble yours. Be cautious of galleries showing only ideal cases, and ask whether the clinician personally did the work shown.",
  },

  /* ─────────────  RECOVERY & AFTERCARE  ───────────── */
  {
    cat: "recovery", stage: "after",
    q: "How much swelling is normal after implant surgery?",
    a: "Swelling typically peaks at 48 to 72 hours and then subsides. Cold compresses in the first 24 hours help. Swelling that is increasing after day three, or accompanied by fever or spreading redness, is not normal and should be reported the same day.",
  },
  {
    cat: "recovery", stage: "after",
    q: "How long until I can go back to work?",
    a: "Most patients return within one to three days after a single implant. Full-arch surgery usually needs a few days to a week. Physically demanding work warrants longer, since raised blood pressure in the first days can cause bleeding.",
  },
  {
    cat: "recovery", stage: "after",
    q: "What can I eat after surgery?",
    a: "Soft, nutrient-dense food for the first several days: smoothies, yogurt, eggs, soups, avoiding anything hot enough to disturb clotting in the first day. Firmer food is reintroduced gradually as comfort allows. Chewing on the surgical site is avoided until advised.",
  },
  {
    cat: "recovery", stage: "after",
    q: "When can I exercise again?",
    a: "Light activity after the first day is usually fine. Strenuous exercise is avoided for 48 to 72 hours because raised blood pressure can restart bleeding. For full-arch surgery, longer. If in doubt, ask rather than guess.",
  },
  {
    cat: "recovery", stage: "after",
    q: "Can I smoke or drink alcohol after implant surgery?",
    a: "Both should be avoided during early healing. Smoking meaningfully increases the risk of implant failure and is the single most modifiable risk factor. Alcohol interferes with healing and interacts with prescribed medication. The first two weeks matter most.",
  },
  {
    cat: "recovery", stage: "after",
    q: "How do I clean around a healing implant?",
    a: "Gently. Avoid vigorous rinsing for the first day, then use a soft brush around the area and any prescribed rinse. Keeping the site clean matters, but aggressive cleaning disturbs healing. Specific instructions are given because they vary with the procedure.",
  },
  {
    cat: "recovery", stage: "after",
    q: "When do stitches come out?",
    a: "Usually around two weeks if non-dissolving sutures were used. Dissolving sutures generally disappear on their own within one to two weeks. Sutures that come loose early are usually not an emergency but are worth reporting.",
  },
  {
    cat: "recovery", stage: "after",
    q: "What sensations are normal during healing?",
    a: "Mild pressure, tenderness, occasional warmth and slight bruising are normal and diminish over days. Numbness that persists beyond the anaesthetic wearing off, sharp increasing pain, or a bad taste and discharge are not, and should be reported promptly.",
  },
  {
    cat: "recovery", stage: "after",
    q: "How often should I have check-ups with implants?",
    a: "At least twice a year, and often more in the first year. Reviews check the gum around the implant, the bite, screw tightness and bone levels on radiographs. Problems caught at a review are usually straightforward; the same problems found late usually are not.",
  },
  {
    cat: "recovery", stage: "after",
    q: "Do I still need to see a hygienist if I have no natural teeth?",
    a: "Yes. Implants and the tissue around them need professional cleaning, and fixed full-arch bridges are usually unscrewed and cleaned thoroughly once a year. The absence of natural teeth removes the risk of decay, not the need for maintenance.",
  },
  {
    cat: "recovery", stage: "after",
    q: "Can I use an electric toothbrush and water flosser on implants?",
    a: "Yes, both are generally recommended. A water flosser is particularly useful around full-arch bridges and under bridgework where floss is awkward. Use a soft brush head and avoid abrasive pastes, which can scratch polished restoration surfaces.",
  },
  {
    cat: "recovery", stage: "after",
    q: "What if I have a problem out of hours?",
    a: "Ask before treatment what the arrangement is. Genuine emergencies after implant surgery are uncommon but the ones that matter, such as uncontrolled bleeding, spreading swelling affecting breathing or swallowing, or fever, need same-day contact rather than waiting.",
  },

  /* ─────────────  PROBLEMS & COMPLICATIONS  ───────────── */
  {
    cat: "problems", stage: "after",
    q: "How do I know if my implant is failing?",
    a: "Any movement of the implant itself, persistent pain or pressure, bleeding or pus at the gum margin, a crown or screw that loosens repeatedly, or recession exposing metal. An implant that moves needs assessment promptly. A crown that keeps coming loose is usually telling you something about the bite.",
  },
  {
    cat: "problems", stage: "after",
    q: "What is peri-implantitis?",
    a: "Inflammation and progressive bone loss around an implant, broadly similar to gum disease around a natural tooth. It is the most common late complication. Caught early it is often treatable with the implant kept in place. Caught late, the bone loss may be too advanced to save it.",
  },
  {
    cat: "problems", stage: "after",
    q: "My implant crown keeps coming loose. Why?",
    a: "Most often the bite, not a faulty component. If the implant is taking force at an angle it was not designed for, the screw loosens repeatedly. Retightening treats the symptom. The underlying cause is usually occlusal and will recur on any replacement unless the bite is addressed.",
  },
  {
    cat: "problems", stage: "after",
    q: "Can a failed implant be replaced in the same place?",
    a: "Usually yes. The site is cleaned, typically grafted, and allowed to heal for several months before a new implant is placed. Occasionally immediate replacement is possible. A failed implant is not a permanently lost site.",
  },
  {
    cat: "problems", stage: "after",
    q: "There is a grey shadow through my gum. What is it?",
    a: "Usually a metal component showing through thin tissue, most visible around front teeth. It is a known aesthetic complication, often preventable with the right abutment material and adequate tissue thickness. It can frequently be improved by replacing the abutment or grafting tissue.",
  },
  {
    cat: "problems", stage: "after",
    q: "I have a dark triangle between my implant and the next tooth.",
    a: "That is lost papilla, the small triangle of gum between teeth, and it depends on bone height between the implant and the adjacent tooth. It is one of the harder things to rebuild. Sometimes the restoration can be reshaped to close the space visually where tissue cannot be regained.",
  },
  {
    cat: "problems", stage: "after",
    q: "My implant was placed in the wrong position. What now?",
    a: "It depends on how wrong. Minor deviations can sometimes be compensated for with a custom abutment. An implant angled so that no natural-looking restoration is possible usually needs to come out, even if it integrated perfectly. That is a difficult conversation but an honest one.",
  },
  {
    cat: "problems", stage: "after",
    q: "Was told to live with it. Is that reasonable?",
    a: "Sometimes, but it is worth a second opinion before accepting it. Many implant problems have identifiable causes and available corrections. Being told to live with pain, repeated loosening or a visibly poor result without a clear explanation of why nothing can be done is a reason to ask someone else.",
  },
  {
    cat: "problems", stage: "after",
    q: "Do I have to pay again to fix work that failed?",
    a: "That depends on where it was done, how long ago and what warranty was offered. A second-opinion clinician cannot speak to another practice's terms, but they can tell you exactly what is wrong and what correcting it involves, which is usually the information you need for that conversation.",
  },
  {
    cat: "problems", stage: "after",
    q: "My All-on-4 bridge broke. Can it be repaired?",
    a: "Frequently yes. Acrylic bridges fracture reasonably often. What matters is whether it is a one-off or a pattern. Repeated fractures usually indicate an unbalanced bite or an inadequate framework, in which case repeated repairs are treating the symptom rather than the cause.",
  },
  {
    cat: "problems", stage: "after",
    q: "Can implants be removed if I change my mind?",
    a: "They can be removed surgically, though it is more involved than placing them and usually leaves a bone defect requiring grafting. It is not a decision to take lightly, which is why the planning stage deserves the time it takes.",
  },
  {
    cat: "problems", stage: "before",
    q: "What are the risks I should be told about?",
    a: "Failure to integrate, infection, damage to adjacent teeth or nerves, sinus involvement in upper implants, altered sensation which is usually temporary but occasionally permanent, and aesthetic complications such as recession or visible metal. A consent discussion that does not cover these is incomplete.",
  },
];
