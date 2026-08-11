import { useEffect } from "react";

/**
 * Central SEO hook.
 *
 * Metadata for every route lives in the PAGE_SEO map below, keyed by path.
 * Page components can keep passing title/description as before, but the map
 * wins when it has an entry. That way all site metadata is edited in one file
 * instead of across 28 page components.
 *
 * To change a page's title or description, edit PAGE_SEO. Do not edit the page.
 */

interface PageSEO {
  title: string;
  description: string;
  /** Optional explicit route path. Defaults to window.location.pathname. */
  path?: string;
  /** Full override URL. Wins over `path`. */
  canonical?: string;
  /** Absolute or root-relative image. Defaults to the site OG image. */
  image?: string;
  /** Open Graph type. */
  type?: string;
  noindex?: boolean;
}

const BASE_URL = "https://drparmardds.com";
const SITE_NAME = "Dr. Akshay Parmar, BDS, DDS, MDSc, FACP, FAAMP";
const DEFAULT_IMAGE = "/og-image.png";

type SeoEntry = { title: string; description: string };

const PAGE_SEO: Record<string, SeoEntry> = {
  "/": {
    title: "Prosthodontist in Hamilton Township, NJ | Dr. Akshay Parmar",
    description:
      "Dental implants, All-on-4, veneers and complex reconstruction coordinated under one roof by a board-certified prosthodontist in Hamilton Township, NJ.",
  },
  "/about": {
    title: "About Dr. Akshay Parmar, DDS, MDSc, FACP | Prosthodontist",
    description:
      "Board-certified prosthodontist, NYU faculty and implant educator. The training, credentials and treatment philosophy behind the Hamilton Township practice.",
  },
  "/contact": {
    title: "Contact Our Hamilton Township, NJ Office | (609) 585-1616",
    description:
      "Visit our prosthodontic practice at 544 Kuser Road, Hamilton, NJ 08619. Office hours, directions, parking and consultation requests.",
  },

  // Service pages
  "/dental-implants-new-jersey": {
    title: "Dental Implants Placed & Restored Under One Roof | Hamilton NJ",
    description:
      "Dental implants placed and restored by one specialist-led team, from 3D planning and surgery through the final tooth and maintenance. Hamilton Township, NJ.",
  },
  "/full-arch-implants-new-jersey": {
    title: "All-on-4 & Full-Arch Implants Under One Roof | Hamilton NJ",
    description:
      "All-on-4 and All-on-X implants coordinated under one roof, from surgery and same-day provisional teeth through the final bridge and maintenance.",
  },
  "/immediate-implant-rehabilitation": {
    title: "Immediate Dental Implants, Teeth in a Day | Hamilton, NJ",
    description:
      "Immediate implants and same-day provisional teeth under one roof when appropriate, from extraction and implant placement through the final restoration.",
  },
  "/full-mouth-reconstruction-new-jersey": {
    title: "Full Mouth Reconstruction in Hamilton Township, NJ",
    description:
      "Full mouth reconstruction as one coordinated plan under one roof: implants, provisional restorations, final teeth and maintenance led by a prosthodontist.",
  },
  // Deconflicted from the page above: this one is bite and vertical dimension.
  "/tooth-wear-rehabilitation": {
    title: "Worn Teeth and Bite Reconstruction | Hamilton Township NJ",
    description:
      "Severe wear, erosion and collapsed bite. Recovering lost vertical dimension with restorations planned around how your jaw actually works.",
  },
  "/veneers-aesthetic-reconstruction": {
    title: "Natural Porcelain Veneers & Aesthetic Dentistry | Hamilton NJ",
    description:
      "Natural porcelain veneers and aesthetic smile reconstruction planned, tested and delivered by a board-certified prosthodontist in one Hamilton office.",
  },
  "/maxillofacial-rehabilitation": {
    title: "Maxillofacial Prosthodontics, Oral Cancer Care | NJ",
    description:
      "Obturators, implant-retained prostheses and rehabilitation after head and neck cancer surgery, by a fellowship-trained maxillofacial prosthodontist.",
  },
  "/smile-design": {
    title: "Digital Smile Design | Hamilton Township, NJ Prosthodontist",
    description:
      "Facial-driven digital smile design and photographic planning, so you preview and approve the result before any tooth is touched.",
  },
  "/teeth-whitening": {
    title: "Professional Teeth Whitening | Hamilton Township, NJ",
    description:
      "Specialist-supervised in-office and take-home whitening, including what to do when you already have crowns, veneers or bonded restorations.",
  },

  // Maxillofacial prosthetics. One page per prosthesis type: the category has
  // almost no real competition, and per-type pages are what rank for the queries
  // patients actually use ("prosthetic nose after cancer", "prosthetic ear").
  "/nasal-prosthesis": {
    title: "Nasal Prosthesis (Prosthetic Nose) | Maxillofacial Prosthodontist NJ",
    description:
      "Custom silicone nasal prostheses after cancer surgery, Mohs resection or trauma. How they are made, how they attach, and how long they last.",
  },
  "/auricular-prosthesis": {
    title: "Auricular Prosthesis (Prosthetic Ear) | Maxillofacial Prosthodontist NJ",
    description:
      "Custom silicone ear prostheses for microtia, cancer surgery and trauma. Adhesive versus implant retention, and how the opposite ear is mirrored.",
  },
  "/orbital-prosthesis": {
    title: "Orbital Prosthesis After Eye Removal | Maxillofacial Prosthodontist NJ",
    description:
      "Custom orbital prostheses after exenteration, with a hand-painted iris matched to your remaining eye. How it differs from an ocular prosthesis.",
  },
  "/facial-prosthesis-insurance-coverage": {
    title: "Does Insurance Cover a Facial Prosthesis? Medicare Codes Explained",
    description:
      "Insurance coverage for nasal, orbital and auricular prostheses: the Medicare HCPCS codes, what triggers replacement, and how to appeal a denial.",
  },

  // Full-arch commercial cluster. The cost page is the highest-intent query in
  // this market and currently has no authoritative local answer.
  "/all-on-4-cost-new-jersey": {
    title: "All-on-4 Cost in New Jersey: An Honest Breakdown | Prosthodontist",
    description:
      "What All-on-4 actually costs in New Jersey, what drives the price from $15,000 to $40,000 per arch, and why quotes differ so widely.",
  },
  "/all-on-4-vs-all-on-6": {
    title: "All-on-4 vs All-on-6 vs Zygomatic: How to Choose | NJ Prosthodontist",
    description:
      "When four implants is enough, when you need six, and when zygomatic implants are the right answer. An honest comparison from a board-certified prosthodontist.",
  },

  // Anterior aesthetics
  "/front-tooth-implant-new-jersey": {
    title: "Front Tooth Implant: The Hardest Case in Implant Dentistry | NJ",
    description:
      "Why replacing a front tooth is the most demanding case in implant dentistry, what goes wrong, and how anterior cases should actually be planned.",
  },

  // The STABLE Protocol. Brand asset: establishes authorship without
  // publishing the paid course content.
  "/stable-protocol": {
    title: "The STABLE Protocol\u2122 | Soft Tissue And Bone Level Esthetics",
    description:
      "The STABLE Protocol\u2122, developed by Dr. Akshay Parmar: a tissue-first system for implants, immediate placement, full-arch and aesthetic restorative work.",
  },

  "/patient-questions": {
    title: "140+ Dental Questions Answered | Implants, All-on-4, Veneers",
    description:
      "Plain answers to 140+ patient questions about implants, All-on-4, dentures, veneers, costs, recovery and complications from a prosthodontist.",
  },

  // Revision and specialist choice
  "/failed-dental-implant-revision": {
    title: "Failed Dental Implant? Revision and Second Opinions | NJ Prosthodontist",
    description:
      "What to do when an implant fails, loosens or was placed wrong. Revision options, what can be saved, and honest second opinions in Hamilton Township, NJ.",
  },
  "/prosthodontist-vs-oral-surgeon": {
    title: "Prosthodontist vs Oral Surgeon vs Periodontist for Implants",
    description:
      "Who should place and restore your dental implants? What each specialty is trained to do, and how to decide which one your case actually needs.",
  },

  // Conversion paths
  "/clinical-assessment": {
    title: "Dental Implant Self-Assessment | Hamilton Township, NJ",
    description:
      "Answer a few questions about your teeth and understand which treatment options fit your situation, before you book anything.",
  },
  "/virtual-consultation": {
    title: "Virtual Consultation with a Prosthodontist | New Jersey",
    description:
      "Send photos and get a specialist opinion on implants, full-arch treatment, a failing restoration or a second opinion, without travelling first.",
  },

  // Proof
  "/clinical-cases": {
    title: "Before and After Cases | Implants and Reconstruction NJ",
    description:
      "Documented full-arch, implant and full mouth reconstruction cases, with the clinical reasoning behind each treatment plan.",
  },
  "/testimonials": {
    title: "Patient Reviews | Dr. Akshay Parmar, Hamilton Township NJ",
    description:
      "What patients say about implant, denture and full mouth reconstruction treatment at our Hamilton Township, NJ prosthodontic practice.",
  },
  "/professional-testimonials": {
    title: "What Referring Dentists Say | Dr. Akshay Parmar, NJ",
    description:
      "Feedback from general dentists and specialists who refer complex implant and prosthodontic cases to our Hamilton Township practice.",
  },
  "/leave-review": {
    title: "Leave a Review | Dr. Akshay Parmar, Hamilton Township NJ",
    description:
      "Share your experience with our Hamilton Township prosthodontic practice. Your feedback helps other patients find specialist care.",
  },

  // Education
  "/patient-education": {
    title: "Patient Education: Implants, Dentures and Reconstruction",
    description:
      "Plain-language answers on dental implants, dentures, full-arch treatment and full mouth reconstruction, written by a prosthodontist.",
  },
  "/professional-education": {
    title: "Implant CE for Dentists | Dr. Akshay Parmar, New Jersey",
    description:
      "Live courses in surgical implant foundations, full-arch prosthetic protocols and digital workflows. New Jersey, New York, Philadelphia, Delhi and Mumbai.",
  },

};

/** Normalize a pathname for map lookup and canonical building. */
function normalizePath(raw: string): string {
  const clean = raw.split("?")[0].split("#")[0].toLowerCase();
  if (clean === "" || clean === "/") return "/";
  return clean.replace(/\/+$/, "");
}

/** Canonical URLs must match sitemap.xml byte for byte. */
function canonicalFor(path: string): string {
  return path === "/" ? `${BASE_URL}/` : `${BASE_URL}${path}`;
}

function absolute(pathOrUrl: string): string {
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  return `${BASE_URL}${pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`}`;
}

/** Create the tag if missing, then set its content. */
function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
}

export function usePageSEO({
  title,
  description,
  path,
  canonical,
  image = DEFAULT_IMAGE,
  type,
  noindex = false,
}: PageSEO) {
  useEffect(() => {
    window.scrollTo(0, 0);

    const routePath = normalizePath(path ?? window.location.pathname);
    const entry = PAGE_SEO[routePath];

    // The central map wins. Props are the fallback for any route not listed.
    const finalTitle = entry?.title ?? title;
    const finalDescription = entry?.description ?? description;
    const url = canonical ? absolute(canonical) : canonicalFor(routePath);
    const imageUrl = absolute(image);
    const ogType = type ?? "website";

    document.title = finalTitle;

    upsertMeta("name", "description", finalDescription);
    upsertLink("canonical", url);

    // Open Graph
    upsertMeta("property", "og:title", finalTitle);
    upsertMeta("property", "og:description", finalDescription);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:image", imageUrl);
    upsertMeta("property", "og:image:alt", finalTitle);
    upsertMeta("property", "og:type", ogType);
    upsertMeta("property", "og:site_name", SITE_NAME);
    upsertMeta("property", "og:locale", "en_US");

    // Twitter
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", finalTitle);
    upsertMeta("name", "twitter:description", finalDescription);
    upsertMeta("name", "twitter:image", imageUrl);

    // Robots. Keep "follow" even when noindex so link equity still flows.
    upsertMeta(
      "name",
      "robots",
      noindex
        ? "noindex, follow"
        : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    );

    // Deliberately no cleanup function.
    // The previous version reset document.title on unmount, which made the title
    // flash back to the homepage title on every route change. Each route sets its
    // own tags on mount, so there is nothing to tear down.
  }, [title, description, path, canonical, image, type, noindex]);
}
