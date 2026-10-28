// Per-state service-area content for the /service-area/[state] pages.
// Order mirrors site.states so the home-page pills map cleanly.

export type ServiceArea = {
  slug: string;
  name: string;
  abbr: string;
  tagline: string;
  intro: string;
  cities: string[];
  image: string;
};

export const stateSlug = (name: string) =>
  name.toLowerCase().replace(/\s+/g, "-");

export const serviceAreas: ServiceArea[] = [
  {
    slug: "tennessee",
    name: "Tennessee",
    abbr: "TN",
    tagline:
      "Our home state — licensed, bonded, and insured grading and site prep across East Tennessee and beyond.",
    intro:
      "We're based in Newport, Tennessee, right in the heart of the state we know best. From the Smokies to the Cumberland Plateau, we clear lots, bring in and compact fill, grade pads, cut in driveways, and pour concrete.",
    cities: [
      "Knoxville",
      "Chattanooga",
      "Sevierville",
      "Newport",
      "Morristown",
      "Gatlinburg",
    ],
    image: "/photos/dozer-mountain-site.jpg",
  },
  {
    slug: "north-carolina",
    name: "North Carolina",
    abbr: "NC",
    tagline:
      "A second home base for our crew — grading and site prep across Western North Carolina.",
    intro:
      "Just over the mountains from Newport, Western North Carolina is one of our busiest areas. Steep lots and tight roads are normal here — we clear, grade, and drain hillside sites so they're ready to build on and ready to pass inspection.",
    cities: [
      "Asheville",
      "Hendersonville",
      "Boone",
      "Waynesville",
      "Marion",
      "Sylva",
    ],
    image: "/photos/smoky-mountains.jpg",
  },
  {
    slug: "virginia",
    name: "Virginia",
    abbr: "VA",
    tagline:
      "Reaching into Southwest Virginia with clearing, grading, drainage, and concrete.",
    intro:
      "We regularly travel into Southwest Virginia for site work. Every county has its own rules — we know how to grade for positive drainage, install french drains, and set footers so your site passes inspection the first time.",
    cities: ["Bristol", "Abingdon", "Wytheville", "Marion", "Galax"],
    image: "/photos/wooded-land.jpg",
  },
  {
    slug: "georgia",
    name: "Georgia",
    abbr: "GA",
    tagline:
      "Serving North Georgia's mountains with clearing, grading, and a compacted pad that won't settle.",
    intro:
      "From Blue Ridge to Dalton, we build the base your project sits on across North Georgia — clearing, grading, drainage, and a compacted pad that won't settle or shift later.",
    cities: ["Blue Ridge", "Blairsville", "Dalton", "Dahlonega", "Ellijay"],
    image: "/photos/mountain-meadow.jpg",
  },
  {
    slug: "kentucky",
    name: "Kentucky",
    abbr: "KY",
    tagline: "Grading and site prep across Southeastern Kentucky.",
    intro:
      "We reach into Southeastern Kentucky with the right equipment for narrow roads and steep hollows — plus the grade work needed to pass inspection and get power turned on.",
    cities: ["Middlesboro", "Corbin", "London", "Williamsburg", "Barbourville"],
    image: "/photos/dozer-wooded-site.jpg",
  },
  {
    slug: "south-carolina",
    name: "South Carolina",
    abbr: "SC",
    tagline:
      "Full-service grading and site prep across Upstate South Carolina.",
    intro:
      "We serve the Upstate — Greenville, Spartanburg, and the surrounding counties — with land clearing, grading, driveways, drainage, and concrete handled by one experienced crew.",
    cities: ["Greenville", "Spartanburg", "Greer", "Seneca", "Gaffney"],
    image: "/photos/footings-aerial.jpg",
  },
];

export const serviceAreaBySlug = (slug: string) =>
  serviceAreas.find((a) => a.slug === slug);
