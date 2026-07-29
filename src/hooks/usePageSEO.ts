import { useEffect } from "react";

interface PageSEO {
  title: string;
  description: string;
  canonical?: string;
  noindex?: boolean;
}

const BASE_URL = "https://drparmardds.com";
const DEFAULT_TITLE = "Prosthodontist & Dental Implant Specialist | Hamilton Township NJ | Dr. Akshay Parmar";

/**
 * Sets document title, meta description, canonical, and robots for each page.
 * Resets to default on unmount.
 */
export function usePageSEO({ title, description, canonical, noindex = false }: PageSEO) {
  useEffect(() => {
    window.scrollTo(0, 0);

    // Title
    document.title = title;

    // Meta description
    let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (meta) {
      meta.setAttribute("content", description);
    } else {
      meta = document.createElement("meta");
      meta.name = "description";
      meta.content = description;
      document.head.appendChild(meta);
    }

    // OG title
    let ogTitle = document.querySelector('meta[property="og:title"]') as HTMLMetaElement | null;
    if (ogTitle) ogTitle.setAttribute("content", title);

    // OG description
    let ogDesc = document.querySelector('meta[property="og:description"]') as HTMLMetaElement | null;
    if (ogDesc) ogDesc.setAttribute("content", description);

    // Canonical — auto-generate from current path if not provided
    const canonicalUrl = canonical || `${BASE_URL}${window.location.pathname === "/" ? "" : window.location.pathname}`;
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = canonicalUrl;

    // OG URL
    let ogUrl = document.querySelector('meta[property="og:url"]') as HTMLMetaElement | null;
    if (!ogUrl) {
      ogUrl = document.createElement("meta");
      ogUrl.setAttribute("property", "og:url");
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute("content", canonicalUrl);

    // Meta robots
    let robots = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
    if (!robots) {
      robots = document.createElement("meta");
      robots.name = "robots";
      document.head.appendChild(robots);
    }
    robots.setAttribute("content", noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");

    return () => {
      document.title = DEFAULT_TITLE;
    };
  }, [title, description, canonical, noindex]);
}
