// Central business details — defined once, used across every page.

export const site = {
  name: "Mountain Movers LLC",
  shortName: "Mountain Movers",
  brand: "Mountain Movers Grading & Site Prep",
  tagline:
    "From raw land to a solid, build-ready base — clearing, grading, drainage, driveways, and concrete.",
  base: "Newport, Tennessee",
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
  equipment: ["Excavator", "Dozer", "Skidsteer", "Compactor"],
  phones: [
    { label: "Tennessee", number: "423-616-2111" },
    { label: "North Carolina", number: "828-708-0812" },
  ],
  email: "mountainmoversmobile@gmail.com",
  // Sister site for mobile home moving & setup.
  movingSite: "https://www.mountainmoverstn.com",
  // NOTE: confirm which photo is Mike vs Luke and update if swapped.
  team: [
    { name: "Mike", role: "Owner & Operator", photo: "/photos/team-1.jpg" },
    { name: "Luke", role: "Owner & Operator", photo: "/photos/team-2.jpg" },
  ],
  // Google Analytics 4 measurement id for this site. Leave empty to disable.
  // (Create a separate GA4 property so grading traffic isn't mixed with the
  // moving site's numbers.)
  gaId: "",
  // Google reviews. Paste the Featurable widget id below once created
  // (https://featurable.com → free signup → add this business → create widget).
  // While it's empty, the site shows real review excerpts + Google buttons.
  googleReviewsWidgetId: "",
  googleReviewUrl:
    "https://www.google.com/maps/place/Mountain+Movers+Mobile+Homes/@35.7942184,-84.5824526,8z/data=!3m1!4b1!4m5!3m4!1s0x885bc37a4a0b140b:0x3a450507dbcbb210!8m2!3d35.7994229!4d-83.4612765",
  social: {
    facebook: "https://www.facebook.com/tnmobilehomemovers/",
    instagram: "#",
    youtube: "#",
    google:
      "https://www.google.com/maps/place/Mountain+Movers+Mobile+Homes/@35.7942184,-84.5824526,8z/data=!3m1!4b1!4m5!3m4!1s0x885bc37a4a0b140b:0x3a450507dbcbb210!8m2!3d35.7994229!4d-83.4612765",
  },
} as const;

export const telHref = (number: string) => `tel:+1${number.replace(/-/g, "")}`;

export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Home Pads", href: "/mobile-home-pads" },
  { label: "Process", href: "/process" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
