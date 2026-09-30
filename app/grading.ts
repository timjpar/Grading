// Shared grading content: how a job runs, code requirements for home pads,
// and the basic price list. Pulled from the Mountain Movers site so the two
// stay consistent.

export const processSteps = [
  {
    n: "01",
    title: "Tell us about the site",
    body: "Call or send a quote request with the address, what you're building, and anything you know about the land — slope, trees, soil, water.",
  },
  {
    n: "02",
    title: "We walk it",
    body: "We come out, walk the property, and look at access, drainage, soil, and what has to come down. Then we give you a real number for the work.",
  },
  {
    n: "03",
    title: "Clear the land",
    body: "Trees, brush, rocks, and debris come out so we're working on clean, visible ground — with room for equipment and drainage.",
  },
  {
    n: "04",
    title: "Fill & compact",
    body: "We bring in quality fill where the site sits low, and compact it so the base won't settle or shift later.",
  },
  {
    n: "05",
    title: "Grade & drain",
    body: "We shape a level, properly sloped pad with positive drainage — and install a french drain where the site needs one.",
  },
  {
    n: "06",
    title: "Footers, drives & concrete",
    body: "Dirt or concrete footers, gravel, driveways, slabs — whatever finishes the job so it's ready to build on and ready for inspection.",
  },
];

// What the homeowner handles before we dig.
export const homeownerChecklist = [
  "Get the building permit",
  "Check with the county on where the home can be placed and any special rules for your lot",
  "Get the soil tested, if your county requires it",
  "Have someone probe for septic and well",
  "Trace any existing buried lines on the property — 811 only locates to the edge of the street",
];

// Code requirements that come down to the grade work.
export const padRequirements = [
  {
    title: "Positive drainage",
    body: "Water must run away from the home and not sit under it. Every state requires it.",
  },
  {
    title: "Reasonably level",
    body: "Usually no more than a 2-foot slope from any end of the home to another.",
  },
  {
    title: "Slope or french drain",
    body: 'Dirt sloped away from the edge of the home out 10 ft with a 5" minimum fall — or a french drain on the exact edge: 1 ft wide, 18" deep, drain pipe, filled with gravel, no dirt on top.',
  },
  {
    title: "Crowned or sloped underneath",
    body: "Crowned under the home if the site is level, or sloped to one side smoothly and consistently if it's on a hill.",
  },
  {
    title: "Compacted fill",
    body: "Most sites need some extra fill dirt, and fill dirt must always be compacted.",
  },
  {
    title: "Footers",
    body: "All homes require dirt or concrete footers. Basic footers can be dug to frostline and set without concrete where allowed.",
  },
];

export const limbRule =
  "Tennessee also requires that all tree limbs over the top of the home be removed.";

export const fmt = (n: number) => `$${n.toLocaleString()}`;

export const padPricing = [
  { title: "Single-Wide Site", noConcrete: 2500, withConcrete: 4500 },
  { title: "Double-Wide Site", noConcrete: 3500, withConcrete: 6500 },
];

export const priceFactors = [
  "Rocky soil",
  "Off-level site",
  "Steep hills",
  "Difficult site to get in or out of",
  "Extra fill dirt needed",
  "French drain required",
  "Concrete footers required or requested",
  "Heavy clearing or tree work",
];
