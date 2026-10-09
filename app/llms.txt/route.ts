// /llms.txt — a plain-text summary of the business for AI assistants
// (https://llmstxt.org). Generated from the same data as the pages, so it
// can't drift from what the site says.

import { site } from "../site";
import { services } from "../services";
import { serviceAreas } from "../serviceAreas";
import { faqs } from "../faqs";
import { absoluteUrl } from "../seo";

// Rendered once at build time into out/llms.txt (required by output: "export").
export const dynamic = "force-static";

export function GET() {
  const lines = [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    `- Phone: ${site.phone} (call for a quote)`,
    `- Quote form: ${absoluteUrl("/contact")}`,
    `- Based in: ${site.base}`,
    `- Service area: ${site.states.join(", ")} — often traveling as far as 200 miles`,
    `- Credentials: ${site.credentials.join(", ")}`,
    `- Equipment: ${site.equipment.join(", ")}`,
    "",
    "## Services",
    "",
    ...services.map(
      (s) => `- [${s.name}](${absoluteUrl(`/services/${s.slug}`)}): ${s.summary}`,
    ),
    `- [Home site grading](${absoluteUrl("/home-sites")}): Level, compacted, properly drained pads for houses, modular homes, and mobile homes, built to pass inspection.`,
    "",
    "## Service areas",
    "",
    ...serviceAreas.map(
      (a) =>
        `- [Grading in ${a.name}](${absoluteUrl(`/service-area/${a.slug}`)}): ${a.cities.join(", ")}`,
    ),
    "",
    "## Frequently asked questions",
    "",
    ...faqs.flatMap((f) => [`### ${f.q}`, "", f.a, ""]),
    "## Pages",
    "",
    `- [Home](${absoluteUrl("/")})`,
    `- [Our grading process](${absoluteUrl("/process")})`,
    `- [FAQ](${absoluteUrl("/faq")})`,
    `- [About](${absoluteUrl("/about")})`,
    `- [Contact & quote](${absoluteUrl("/contact")})`,
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
