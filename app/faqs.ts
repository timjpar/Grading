// Grading FAQs — used on /faq (all, with FAQPage schema) and the home page
// (featured). Answers are written to stand on their own, so search engines and
// AI assistants can quote them directly.

import { site } from "./site";

export type Faq = { q: string; a: string; featured?: boolean };

export const faqs: Faq[] = [
  {
    q: "What does a grading contractor do?",
    a: "A grading contractor shapes the ground so it's ready to build on. Mountain Movers Grading clears the land, brings in and compacts fill dirt, levels and slopes pads so water drains away, installs french drains, cuts in driveways, and pours concrete slabs, footings, patios, and sidewalks.",
    featured: true,
  },
  {
    q: "How do I get a grading quote?",
    a: `Call ${site.phone} or fill out the quote form on this site. We'll come out, walk your property, and give you a real number for the work.`,
    featured: true,
  },
  {
    q: "What affects the cost of grading and site prep?",
    a: "Every site is different. Rocky soil, steep or off-level ground, a site that's hard to get equipment in and out of, heavy clearing or tree work, extra fill dirt, french drains, and concrete footers all bring the price up. That's why we walk the site before we give you a number.",
    featured: true,
  },
  {
    q: "Where do you do grading work?",
    a: `We're based in ${site.base} and often travel as far as 200 miles — across ${site.states.slice(0, -1).join(", ")}, and ${site.states.at(-1)}. If you don't see your town listed, call and ask.`,
    featured: true,
  },
  {
    q: "What does “positive drainage” mean?",
    a: "Water must run away from what you build and not sit under it. Every state requires it for a home site. Generally that means dirt sloped away from the edge of the home out 10 feet with at least a 5-inch fall — or a french drain installed instead.",
  },
  {
    q: "When do I need a french drain?",
    a: "When the ground can't be sloped away from the home, and on most home sites. A proper french drain goes on the exact edge of the home: 1 foot wide, 18 inches deep, with drain pipe, filled with gravel, and no dirt on top.",
  },
  {
    q: "Why does fill dirt have to be compacted?",
    a: "Uncompacted fill settles, and whatever is built on it settles with it — footers shift, slabs crack, and homes go out of level. Fill dirt must always be compacted, so we compact every site that gets fill.",
  },
  {
    q: "How level does a home site need to be?",
    a: "Reasonably level — usually no more than a 2-foot slope from any end of the home to another. Under the home, the ground is crowned if the site is level, or sloped smoothly and consistently to one side if it's on a hill.",
  },
  {
    q: "Is grading required before a mobile or modular home can be set?",
    a: "Yes. Grading is required by code in order to pass inspection, and it's required to be able to get power installed to the home.",
  },
  {
    q: "Do I need dirt or concrete footers?",
    a: "All homes require one or the other. Basic footers can be dug to frostline and set without concrete where that's allowed. Concrete is sometimes required or requested, and it costs extra. We'll tell you which your site needs.",
  },
  {
    q: "What do I need to take care of before grading starts?",
    a: "As the property owner, you'll need the building permit and should check with the county about where you're allowed to build and whether there are special rules for your lot. You may also need a soil test and to have someone probe for septic and well.",
  },
  {
    q: "Do I need to locate buried lines before you dig?",
    a: "Yes. Any existing buried lines on the property must be traced so we don't hit them when digging. Note that 811 will only locate up to the edge of the street, not onto the property itself.",
  },
  {
    q: "Do you clear trees?",
    a: "Yes. Land clearing — trees, brush, rocks, and debris — is often the first step of a grading job. Tennessee also requires that all tree limbs over the top of a mobile home be removed before it can pass inspection.",
  },
  {
    q: "Do you only do home sites?",
    a: "No. We clear land, import and compact fill, grade pads for houses, garages, shops, and barns, level yards, cut in driveways, and pour slabs, footings, patios, and sidewalks. If it involves moving dirt, shaping land, or building the base layer, we've got you covered.",
  },
];
