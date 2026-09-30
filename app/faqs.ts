// Grading FAQs — used on /faq (all) and the home page (featured).

export type Faq = { q: string; a: string; featured?: boolean };

export const faqs: Faq[] = [
  {
    q: "Do I need grading before my mobile home is set?",
    a: "Yes. Grading is required by code in order to pass inspection, and it's absolutely required to be able to get power installed to your home.",
    featured: true,
  },
  {
    q: "How level does my site need to be?",
    a: "Reasonably level — usually no more than a 2-foot slope from any end of the home to another. Under the home, the ground is crowned if the site is level, or sloped smoothly and consistently to one side if it's on a hill.",
    featured: true,
  },
  {
    q: "What does “positive drainage” mean?",
    a: "Water must run away from the home and not sit under it. Every state requires it. Generally that means dirt sloped away from the edge of the home out 10 feet with at least a 5-inch fall — or a french drain installed instead.",
    featured: true,
  },
  {
    q: "Will my site need a french drain?",
    a: "Most sites do. A proper french drain goes on the exact edge of the home: 1 foot wide, 18 inches deep, with drain pipe, filled with gravel, and no dirt on top.",
    featured: true,
  },
  {
    q: "Do you compact fill dirt?",
    a: "Always. Most sites need some extra fill dirt, and fill dirt must always be compacted — otherwise it settles, and your home or slab settles with it.",
  },
  {
    q: "Do I need dirt or concrete footers?",
    a: "All homes require one or the other. Basic footers can be dug to frostline and set without concrete where that's allowed. Concrete is sometimes required or requested, and it costs extra. We'll tell you which your site needs.",
  },
  {
    q: "What does grading cost?",
    a: "Mobile home site grading and prep starts at $2,500 for a single-wide and $3,500 for a double-wide without concrete, or $4,500 and $6,500 with concrete. Rocky soil, steep or off-level sites, and hard-to-reach lots bring the price up. We give you a real number after we walk the site.",
  },
  {
    q: "What am I responsible for as the homeowner?",
    a: "You'll need to get the building permit and check with the county about where you're allowed to place the home and whether there are special rules for your lot. You may also need a soil test and to have someone probe for septic and well.",
  },
  {
    q: "Do I need to locate buried lines?",
    a: "Yes. Any existing buried lines on the property must be traced so we don't hit them when digging. Note that 811 will only locate up to the edge of the street, not onto the property itself.",
  },
  {
    q: "Do trees have to come down?",
    a: "Sometimes. Tennessee requires that all tree limbs over the top of a mobile home be removed, and trees often have to be cleared for the pad, driveway, or drainage. Land clearing is part of what we do.",
  },
  {
    q: "Do you only grade for mobile homes?",
    a: "No. We clear land, import and compact fill, grade pads for houses, garages, and shops, cut in driveways, and pour slabs, footings, patios, and sidewalks. If it involves moving dirt, shaping land, or building the base layer, we've got you covered.",
  },
  {
    q: "How far do you travel?",
    a: "We're based in Newport, Tennessee, and often travel as far as 200 miles — across Tennessee, North Carolina, Virginia, Georgia, Kentucky, and South Carolina. If you don't see your town listed, call and ask.",
  },
];
