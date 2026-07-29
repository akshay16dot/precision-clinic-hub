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
  /** Open Graph type. Guides are auto-set to "article". */
  type?: string;
  noindex?: boolean;
}

const BASE_URL = "https://drparmardds.com";
const SITE_NAME = "Dr. Akshay Parmar, DDS, FACP, FAAMP";
const DEFAULT_IMAGE = "/og-image.png";

type SeoEntry = { title: string; description: string };

const PAGE_SEO: Record<string, SeoEntry> = {
  "/": {
    title: "Prosthodontist in Hamilton Township, NJ | Dr. Akshay Parmar",
    description:
      "Board-certified prosthodontist in Hamilton Township, NJ. Dental implants, full-arch reconstruction and complex restorative care. Call (609) 585-1616.",
  },
  "/about": {
    title: "About Dr. Akshay Parmar, DDS, MDSc, FACP | Prosthodontist",
    description:
      "Board-certified prosthodontist, NYU faculty and implant educator. The training, credentials and treatment philosophy behind the Hamilton Township practice.",
  },
  "/contact": {
    title: "Contact Our Hamilton Township, NJ Office | (609) 585-1616",
    description:
      "Visit our prosthodontic practice at 1544 Kuser Rd, Suite C3, Hamilton Township, NJ 08619. Office hours, directions, parking and consultation requests.",
  },

  // Service pages
  "/dental-implants-new-jersey": {
    title: "Dental Implants in Hamilton Township, NJ | Prosthodontist",
    description:
      "Single and multiple dental implants placed and restored by a board-certified prosthodontist in Hamilton Township, NJ. Serving Mercer County.",
  },
  "/full-arch-implants-new-jersey": {
    title: "All-on-4 and Full-Arch Implants | Hamilton Township, NJ",
    description:
      "Full-arch implant rehabilitation, All-on-4 and All-on-X, for failing or missing teeth. Planned and restored by a prosthodontist in Hamilton Township, NJ.",
  },
  "/immediate-implant-rehabilitation": {
    title: "Immediate Dental Implants, Teeth in a Day | Hamilton, NJ",
    description:
      "Immediate implant placement with same-day provisional teeth. Who qualifies, what the protocol involves, and how the result is protected long term.",
  },
  // NOTE: this route is the full mouth rehabilitation page, not cosmetic dentistry.
  "/aesthetic-dentistry": {
    title: "Full Mouth Reconstruction in Hamilton Township, NJ",
    description:
      "Rebuilding a failing dentition as one plan: implants, crowns and restorations sequenced for function first, appearance second. Board-certified prosthodontist.",
  },
  // Deconflicted from the page above: this one is bite and vertical dimension.
  "/tooth-wear-rehabilitation": {
    title: "Worn Teeth and Bite Reconstruction | Hamilton Township NJ",
    description:
      "Severe wear, erosion and collapsed bite. Recovering lost vertical dimension with restorations planned around how your jaw actually works.",
  },
  "/veneers-aesthetic-reconstruction": {
    title: "Porcelain Veneers in Hamilton Township, NJ | Prosthodontist",
    description:
      "Conservative porcelain veneers designed and placed by a prosthodontist. Preparation, materials, realistic lifespan and what actually lasts.",
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
  "/education": {
    title: "Education and Resources | Dr. Akshay Parmar, Prosthodontist",
    description:
      "Patient guides and clinician training from a board-certified prosthodontist and implant faculty member based in New Jersey.",
  },
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

  // Guides (og:type is set to "article" automatically)
  "/guide/dental-implants": {
    title: "Dental Implants: A Complete Patient Guide from a Specialist",
    description:
      "How implants work, who qualifies, the timeline, what they cost and what makes them fail. Written by a board-certified prosthodontist.",
  },
  "/guide/full-arch-implants": {
    title: "All-on-X Full-Arch Implants: Patient Guide and Costs",
    description:
      "All-on-4 versus All-on-6, materials, surgical timeline, cost ranges and the maintenance nobody warns you about.",
  },
  "/guide/immediate-implants": {
    title: "Immediate Implants: Are You a Candidate? Patient Guide",
    description:
      "When a tooth can be replaced the same day, when it should not be, and what the evidence actually shows about success rates.",
  },
  "/guide/veneers": {
    title: "Porcelain Veneers: Types, Cost and Longevity Guide",
    description:
      "Feldspathic versus pressed versus composite, how much tooth is removed, realistic lifespan, and when veneers are the wrong answer.",
  },
  "/guide/maxillofacial-rehabilitation": {
    title: "Maxillofacial Prosthetics: A Patient Guide After Cancer",
    description:
      "Rehabilitation after head and neck cancer surgery: obturators, implant-retained prostheses, timing, and what recovery actually looks like.",
  },
  "/guide/teeth-whitening": {
    title: "Teeth Whitening: What Actually Works, From a Specialist",
    description:
      "Peroxide concentrations, sensitivity, why whitening never changes crowns or veneers, and how to avoid ending up with a mismatched smile.",
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
    const ogType = type ?? (routePath.startsWith("/guide/") ? "article" : "website");

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
