import { useEffect } from "react";

interface PageSEO {
  title: string;
  description: string;
  canonical?: string;
}

const DEFAULT_TITLE = "Prosthodontist in New Jersey | Implant & Reconstruction Specialist";

/**
 * Sets document title and meta description for each page.
 * Resets to default on unmount.
 */
export function usePageSEO({ title, description, canonical }: PageSEO) {
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

    // Canonical
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (canonical) {
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = canonical;
    }

    return () => {
      document.title = DEFAULT_TITLE;
    };
  }, [title, description, canonical]);
}
