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
  "/contact",
  "/dental-implants-new-jersey",
  "/full-arch-implants-new-jersey",
  "/immediate-implant-rehabilitation",
  "/aesthetic-dentistry",
  "/veneers-aesthetic-reconstruction",
  "/maxillofacial-rehabilitation",
  "/smile-design",
  "/tooth-wear-rehabilitation",
  "/teeth-whitening",
  "/clinical-assessment",
  "/virtual-consultation",
  "/clinical-cases",
  "/testimonials",
  "/professional-testimonials",
  "/leave-review",
  "/education",
  "/patient-education",
  "/professional-education",
  "/guide/dental-implants",
  "/guide/full-arch-implants",
  "/guide/immediate-implants",
  "/guide/veneers",
  "/guide/maxillofacial-rehabilitation",
  "/guide/teeth-whitening",
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
