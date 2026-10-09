// Structured data (schema.org JSON-LD) and SEO helpers. Everything reads from
// site.ts / services.ts so the facts search engines and AI assistants see stay
// identical to what's on the page.

import { site } from "./site";
import { services, type Service } from "./services";
import { serviceAreas, type ServiceArea } from "./serviceAreas";

export const BUSINESS_ID = `${site.url}/#business`;
const WEBSITE_ID = `${site.url}/#website`;

export const absoluteUrl = (path: string) =>
  path === "/" ? site.url : `${site.url}${path}`;

/** Grading-only topics the business is an authority on. */
export const gradingTopics = [
  "Grading",
  "Site preparation",
  "Land clearing",
  "Lot clearing",
  "Dirt work",
  "Fill dirt",
  "Soil compaction",
  "Soil stabilization",
  "Building pad grading",
  "House pad preparation",
  "Mobile home site grading",
  "Positive drainage",
  "French drain installation",
  "Driveway construction",
  "Gravel driveways",
  "Concrete slabs",
  "Concrete footings",
];

export function businessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": BUSINESS_ID,
    name: site.name,
    url: site.url,
    description: site.description,
    slogan: "From raw land to a solid, build-ready base.",
    telephone: `+1-${site.phone}`,
    image: absoluteUrl("/photos/g-dozer.jpg"),
    logo: absoluteUrl("/photos/logo.png"),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Newport",
      addressRegion: "TN",
      addressCountry: "US",
    },
    areaServed: [
      ...site.states.map((name) => ({ "@type": "State", name })),
      ...serviceAreas.flatMap((a) =>
        a.cities.map((city) => ({
          "@type": "City",
          name: `${city}, ${a.abbr}`,
        })),
      ),
    ],
    knowsAbout: gradingTopics,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Grading & site prep services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          url: absoluteUrl(`/services/${s.slug}`),
        },
      })),
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: `+1-${site.phone}`,
      contactType: "sales",
      areaServed: "US",
      availableLanguage: "English",
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: site.name,
    url: site.url,
    publisher: { "@id": BUSINESS_ID },
    inLanguage: "en-US",
  };
}

export function serviceJsonLd(s: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    serviceType: s.name,
    description: s.intro,
    url: absoluteUrl(`/services/${s.slug}`),
    image: absoluteUrl(s.image),
    provider: { "@id": BUSINESS_ID },
    areaServed: site.states.map((name) => ({ "@type": "State", name })),
  };
}

export function areaServiceJsonLd(area: ServiceArea) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Grading & site prep in ${area.name}`,
    serviceType: "Grading and site preparation",
    description: area.intro,
    url: absoluteUrl(`/service-area/${area.slug}`),
    provider: { "@id": BUSINESS_ID },
    areaServed: [
      { "@type": "State", name: area.name },
      ...area.cities.map((city) => ({ "@type": "City", name: `${city}, ${area.abbr}` })),
    ],
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
