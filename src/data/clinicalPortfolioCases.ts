import allOn4MissingBrokenBefore from "@/assets/clinical-portfolio/dual-arch-all-on-4-missing-broken-teeth-before.webp";
import allOn4MissingBrokenAfter from "@/assets/clinical-portfolio/dual-arch-all-on-4-missing-broken-teeth-after.webp";
import allOn4FailingBefore from "@/assets/clinical-portfolio/dual-arch-all-on-4-failing-dentition-before.webp";
import allOn4FailingAfter from "@/assets/clinical-portfolio/dual-arch-all-on-4-failing-dentition-after.webp";
import allOn4MissingBefore from "@/assets/clinical-portfolio/dual-arch-all-on-4-missing-teeth-before.webp";
import allOn4MissingAfter from "@/assets/clinical-portfolio/dual-arch-all-on-4-missing-teeth-after.webp";
import maxillaryAllOn4Before from "@/assets/clinical-portfolio/maxillary-all-on-4-before.webp";
import maxillaryAllOn4After from "@/assets/clinical-portfolio/maxillary-all-on-4-after.webp";
import veneersBefore from "@/assets/clinical-portfolio/veneers-crowns-intrinsic-staining-before.webp";
import veneersAfter from "@/assets/clinical-portfolio/veneers-crowns-intrinsic-staining-after.webp";
import biteCollapseBefore from "@/assets/clinical-portfolio/full-mouth-reconstruction-bite-collapse-before.webp";
import biteCollapseAfter from "@/assets/clinical-portfolio/full-mouth-reconstruction-bite-collapse-after.webp";
import allOn6FailingBefore from "@/assets/clinical-portfolio/dual-arch-all-on-6-failing-dentition-before.webp";
import allOn6FailingAfter from "@/assets/clinical-portfolio/dual-arch-all-on-6-failing-dentition-after.webp";
import periodontalAllOn6Before from "@/assets/clinical-portfolio/maxillary-all-on-6-periodontal-before.webp";
import periodontalAllOn6After from "@/assets/clinical-portfolio/maxillary-all-on-6-periodontal-after.webp";
import posteriorCollapseBefore from "@/assets/clinical-portfolio/full-mouth-reconstruction-posterior-collapse-before.webp";
import posteriorCollapseAfter from "@/assets/clinical-portfolio/full-mouth-reconstruction-posterior-collapse-after.webp";

export interface ClinicalPortfolioCase {
  id: string;
  title: string;
  category: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
  portrait?: boolean;
}

export const clinicalPortfolioCases: ClinicalPortfolioCase[] = [
  {
    id: "dual-arch-all-on-4-missing-broken-teeth",
    title: "Dual-Arch All-on-4 Rehabilitation",
    category: "Full-Arch Implant Rehabilitation",
    description:
      "Missing and broken teeth treated with fixed implant-supported rehabilitation in the upper and lower arches.",
    beforeImage: allOn4MissingBrokenBefore,
    afterImage: allOn4MissingBrokenAfter,
    beforeAlt:
      "Before dual-arch All-on-4 treatment showing missing and broken upper and lower teeth",
    afterAlt:
      "After dual-arch All-on-4 rehabilitation showing fixed upper and lower implant-supported teeth",
  },
  {
    id: "dual-arch-all-on-4-failing-dentition",
    title: "All-on-4 for Failing Dentition",
    category: "Dual-Arch Fixed Implant Teeth",
    description:
      "Missing and failing teeth transitioned to fixed implant-supported rehabilitation across both arches.",
    beforeImage: allOn4FailingBefore,
    afterImage: allOn4FailingAfter,
    beforeAlt:
      "Before All-on-4 treatment showing missing and failing upper and lower teeth",
    afterAlt:
      "After dual-arch All-on-4 treatment showing fixed implant-supported teeth",
  },
  {
    id: "dual-arch-all-on-4-missing-teeth",
    title: "Full-Arch Implant Rehabilitation",
    category: "Upper and Lower All-on-4",
    description:
      "Extensive tooth loss managed with coordinated upper and lower fixed full-arch implant prostheses.",
    beforeImage: allOn4MissingBefore,
    afterImage: allOn4MissingAfter,
    beforeAlt:
      "Before upper and lower All-on-4 rehabilitation showing extensive missing teeth",
    afterAlt:
      "After upper and lower All-on-4 rehabilitation showing a restored fixed smile",
  },
  {
    id: "maxillary-all-on-4",
    title: "Maxillary All-on-4 Rehabilitation",
    category: "Upper Full-Arch Implant Teeth",
    description:
      "A failing upper arch restored with a fixed, implant-supported full-arch prosthesis.",
    beforeImage: maxillaryAllOn4Before,
    afterImage: maxillaryAllOn4After,
    beforeAlt:
      "Before maxillary All-on-4 treatment showing a failing upper dental arch",
    afterAlt:
      "After maxillary All-on-4 rehabilitation showing fixed upper implant-supported teeth",
  },
  {
    id: "veneers-crowns-intrinsic-staining",
    title: "Veneers and Crowns, Canine to Canine",
    category: "Aesthetic Reconstruction",
    description:
      "Intrinsic discoloration and tooth misalignment corrected with a planned combination of veneers and crowns.",
    beforeImage: veneersBefore,
    afterImage: veneersAfter,
    beforeAlt:
      "Before aesthetic reconstruction showing intrinsic tooth staining and misaligned front teeth",
    afterAlt:
      "After canine-to-canine veneers and crowns showing aligned natural-looking front teeth",
    portrait: true,
  },
  {
    id: "full-mouth-reconstruction-bite-collapse",
    title: "Full-Mouth Rehabilitation for Bite Collapse",
    category: "Implants and Crowns",
    description:
      "Severely worn teeth and loss of posterior bite rebuilt with implants and crowns as one coordinated reconstruction.",
    beforeImage: biteCollapseBefore,
    afterImage: biteCollapseAfter,
    beforeAlt:
      "Before full-mouth rehabilitation showing worn teeth and loss of posterior bite support",
    afterAlt:
      "After full-mouth rehabilitation with implants and crowns showing restored tooth form and bite support",
    portrait: true,
  },
  {
    id: "dual-arch-all-on-6-failing-dentition",
    title: "Dual-Arch All-on-6 Rehabilitation",
    category: "Upper and Lower Fixed Implant Teeth",
    description:
      "A failing upper and lower dentition restored with fixed full-arch prostheses supported by six implants per arch.",
    beforeImage: allOn6FailingBefore,
    afterImage: allOn6FailingAfter,
    beforeAlt:
      "Before dual-arch All-on-6 treatment showing a failing upper and lower dentition",
    afterAlt:
      "After dual-arch All-on-6 rehabilitation showing fixed upper and lower implant-supported teeth",
  },
  {
    id: "maxillary-all-on-6-periodontal",
    title: "Maxillary All-on-6 Rehabilitation",
    category: "Periodontally Compromised Teeth",
    description:
      "Loose upper teeth affected by periodontal breakdown replaced with a fixed full-arch prosthesis supported by six implants.",
    beforeImage: periodontalAllOn6Before,
    afterImage: periodontalAllOn6After,
    beforeAlt:
      "Before maxillary All-on-6 treatment showing loose periodontally compromised upper teeth",
    afterAlt:
      "After maxillary All-on-6 rehabilitation showing fixed upper implant-supported teeth",
  },
  {
    id: "full-mouth-reconstruction-posterior-collapse",
    title: "Full-Mouth Reconstruction",
    category: "Worn Teeth and Posterior Bite Loss",
    description:
      "Worn teeth and reduced posterior support reconstructed with a coordinated combination of implants and crowns.",
    beforeImage: posteriorCollapseBefore,
    afterImage: posteriorCollapseAfter,
    beforeAlt:
      "Before full-mouth reconstruction showing worn teeth and reduced posterior bite support",
    afterAlt:
      "After full-mouth reconstruction with implants and crowns showing restored tooth form and function",
  },
];
