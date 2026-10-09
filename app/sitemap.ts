import type { MetadataRoute } from "next";
import { absoluteUrl } from "./seo";
import { services } from "./services";
import { serviceAreas } from "./serviceAreas";

// Rendered once at build time (required by output: "export").
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const page = (path: string, priority: number) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency: "monthly" as const,
    priority,
  });

  return [
    page("/", 1),
    page("/services", 0.9),
    ...services.map((s) => page(`/services/${s.slug}`, 0.8)),
    page("/home-sites", 0.8),
    page("/contact", 0.8),
    page("/process", 0.6),
    page("/faq", 0.7),
    ...serviceAreas.map((a) => page(`/service-area/${a.slug}`, 0.6)),
    page("/about", 0.5),
    page("/gallery", 0.4),
  ];
}
