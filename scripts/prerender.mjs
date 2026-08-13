// Prerender: renders every route of the built SPA to static HTML.
// Runs after `vite build`. Output: dist/<route>/index.html with full body
// content and correct per-route head tags, so crawlers that do not execute
// JavaScript (GPTBot, ClaudeBot, PerplexityBot, social preview bots) receive
// the real page.
import { createServer } from "node:http";
import { readFileSync, writeFileSync, mkdirSync, existsSync, statSync } from "node:fs";
import { join, dirname, extname } from "node:path";
import { chromium } from "playwright";

const DIST = new URL("../dist", import.meta.url).pathname;
const PORT = 4173;

const ROUTES = [
  "/",
  "/about",
  "/meet-the-team",
  "/contact",
  "/dental-implants-new-jersey",
  "/full-arch-implants-new-jersey",
  "/immediate-implant-rehabilitation",
  "/full-mouth-reconstruction-new-jersey",
  "/veneers-aesthetic-reconstruction",
  "/maxillofacial-rehabilitation",
  "/smile-design",
  "/tooth-wear-rehabilitation",
  "/teeth-whitening",
  "/clinical-assessment",
  "/virtual-consultation",
  "/patients-traveling-to-hamilton",
  "/prosthodontist-princeton-nj",
  "/prosthodontist-mercer-county-nj",
  "/prosthodontist-robbinsville-cranbury-nj",
  "/prosthodontist-bucks-county-pa",
  "/prosthodontist-new-brunswick-edison-nj",
  "/clinical-cases",
  "/clinical-case/full-mouth-rehabilitation",
  "/clinical-case/bite-reconstruction",
  "/clinical-case/full-arch-implant-reconstruction",
  "/clinical-case/failed-implant-rehabilitation",
  "/clinical-case/implant-overdenture",
  "/clinical-case/anterior-implant-aesthetics",
  "/testimonials",
  "/professional-testimonials",
  "/leave-review",
  "/patient-education",
  "/patient-questions",
  "/professional-education",
  // Maxillofacial prosthetics
  "/nasal-prosthesis",
  "/auricular-prosthesis",
  "/orbital-prosthesis",
  "/facial-prosthesis-insurance-coverage",
  // Revision and specialist choice
  "/failed-dental-implant-revision",
  "/prosthodontist-vs-oral-surgeon",
  // Full-arch commercial cluster
  "/all-on-4-cost-new-jersey",
  "/all-on-4-vs-all-on-6",
  // The STABLE Protocol
  "/stable-protocol",
  // Anterior aesthetics
  "/front-tooth-implant-new-jersey",
  // Legacy URLs: emit static HTML at the old paths so GitHub Pages does not
  // return a 404 before React can redirect to the canonical destination.
  "/aesthetic-dentistry",
  "/guide/dental-implants",
  "/guide/immediate-implants",
  "/guide/full-arch-implants",
  "/guide/teeth-whitening",
  "/guide/veneers",
  "/guide/maxillofacial-rehabilitation",
];

const MIME = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".png": "image/png", ".jpg": "image/jpeg", ".svg": "image/svg+xml", ".ico": "image/x-icon", ".webmanifest": "application/manifest+json", ".xml": "application/xml", ".txt": "text/plain", ".woff2": "font/woff2" };

// tiny static server with SPA fallback
const server = createServer((req, res) => {
  const urlPath = decodeURIComponent(new URL(req.url, "http://x").pathname);
  let file = join(DIST, urlPath);
  if (!existsSync(file) || statSync(file).isDirectory()) file = join(DIST, "index.html");
  res.setHeader("content-type", MIME[extname(file)] ?? "application/octet-stream");
  res.end(readFileSync(file));
});

await new Promise((r) => server.listen(PORT, r));

// GitHub Pages has no SPA fallback: serve the app shell as 404.html so
// unknown URLs return a real 404 status but still render the branded
// NotFound page client-side.
writeFileSync(join(DIST, "404.html"), readFileSync(join(DIST, "index.html")));

// CI note: on a fresh runner, `npx playwright install chromium` first.
// Locally/container: reuse a preinstalled Chromium via env override.
const executablePath = process.env.CHROMIUM_PATH || undefined;
const browser = await chromium.launch(executablePath ? { executablePath } : {});
const page = await browser.newPage();
let failures = 0;

for (const route of ROUTES) {
  try {
    await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: "networkidle", timeout: 30000 });
    // let framer-motion entrance animations settle so text is in the DOM
    await page.waitForTimeout(700);
    let html = await page.content();
    // absolute-ify nothing; asset URLs are already root-relative from Vite
    const outDir = route === "/" ? DIST : join(DIST, route);
    mkdirSync(outDir, { recursive: true });
    writeFileSync(join(outDir, "index.html"), "<!DOCTYPE html>\n" + html.replace(/^<!DOCTYPE html>\s*/i, ""));
    const title = await page.title();
    const textLen = (await page.evaluate(() => document.body.innerText.length));
    console.log(`ok  ${route}  title="${title.slice(0, 60)}"  bodyText=${textLen}`);
  } catch (e) {
    failures++;
    console.error(`FAIL ${route}: ${e.message}`);
  }
}

await browser.close();
server.close();
if (failures) { console.error(`${failures} route(s) failed`); process.exit(1); }
console.log(`\nPrerendered ${ROUTES.length} routes into dist/`);
