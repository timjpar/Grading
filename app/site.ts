// Central business details — defined once, used across every page, the
// structured data, sitemap, robots.txt, and llms.txt.

export const site = {
  name: "Mountain Movers Grading",
  shortName: "Mountain Movers",
  url: "https://mountainmoversgrading.com",
  tagline:
    "We handle every aspect of getting your property ready for construction or improvement — from raw land to a solid, build-ready base.",
  base: "Newport, Tennessee",
  // Short, factual description reused in metadata, JSON-LD, and llms.txt.
  description:
    "Mountain Movers Grading is a family-owned grading and site prep contractor based in Newport, Tennessee. We handle land clearing, dirt import and fill, compacting and soil stabilization, precision leveling and grading, drainage and french drains, driveway construction, and concrete work.",
  blurb:
    "Family-owned grading and site prep based in Newport, Tennessee — often traveling as far as 200 miles. One experienced crew for clearing, dirt work, drainage, driveways, and concrete.",
  states: [
    "Tennessee",
    "North Carolina",
    "Virginia",
    "Georgia",
    "Kentucky",
    "South Carolina",
  ],
  credentials: ["Licensed", "Bonded", "Insured"],
  equipment: ["Excavator", "Skidsteer", "Compactor", "Dozer"],
  phone: "423-608-5805",
  // Where quote-form submissions are emailed (via FormSubmit). Not shown on
  // the site; visitors are pointed to the phone and the form instead.
  leadEmail: "sebastian.dusonchet@gmail.com",
  // Google Analytics 4 measurement id for this site. Leave empty to disable.
  gaId: "",
} as const;

export const telHref = (number: string) => `tel:+1${number.replace(/-/g, "")}`;

export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Home Sites", href: "/home-sites" },
  { label: "Process", href: "/process" },
  { label: "FAQ", href: "/faq" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];
