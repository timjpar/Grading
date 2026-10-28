// Per-service content for the /services and /services/[slug] pages.
// Copy is drawn from the Mountain Movers grading and site-prep pages.

import {
  TreeIcon,
  LayersIcon,
  RollerIcon,
  LevelIcon,
  DropIcon,
  RoadIcon,
  SlabIcon,
  type IconProps,
} from "./components/icons";

export type Service = {
  slug: string;
  name: string;
  icon: (props: IconProps) => React.JSX.Element;
  summary: string;
  tagline: string;
  image: string;
  imageAlt: string;
  intro: string;
  body: string[];
  includes: string[];
  goodFor: string[];
  callout?: string;
};

export const services: Service[] = [
  {
    slug: "land-clearing",
    name: "Land Clearing",
    icon: TreeIcon,
    summary:
      "Remove trees, brush, rocks, and debris so you start with a clean slate.",
    tagline:
      "Trees, brush, rocks, and debris cleared out so your project starts with a clean slate.",
    image: "/photos/land-clearing-dozer.jpg",
    imageAlt: "A dozer clearing brush and small trees from a wooded lot",
    intro:
      "Every build starts with clearing. We take raw, overgrown land and open it up — removing trees, brush, rocks, and debris — so the grade work can begin on solid, visible ground.",
    body: [
      "Clearing is about more than knocking things down. We look at where the pad, driveway, and drainage need to go, then clear for the finished site — not just the footprint — so there's room for equipment and water has somewhere to run.",
      "On mountain lots, access is half the job. Our crew is used to steep grades, tight roads, and wooded ridges, and we bring the right machine for the terrain.",
    ],
    includes: [
      "Tree and brush removal",
      "Rock and debris removal",
      "Clearing for pads, driveways, and access",
      "Trimming limbs that hang over the building area",
    ],
    goodFor: [
      "Raw or wooded lots",
      "Mobile and modular home sites",
      "New driveways and access roads",
      "Overgrown yards and fence lines",
    ],
    callout:
      "Tennessee requires that all tree limbs over the top of a mobile home be removed before it can pass inspection.",
  },
  {
    slug: "dirt-import-fill",
    name: "Dirt Import & Fill",
    icon: LayersIcon,
    summary:
      "Bring in quality material to raise low spots and create proper drainage.",
    tagline:
      "Quality fill brought in to raise low spots, build up pads, and get water moving the right way.",
    image: "/photos/fill-dirt-dump-truck.jpg",
    imageAlt: "A dump truck unloading fill dirt while a dozer spreads it",
    intro:
      "When a site sits too low or slopes the wrong way, the fix is dirt. We import quality material to raise low spots, build up pads, and shape the ground so water runs away from what you're building.",
    body: [
      "Most sites need at least some extra fill dirt. The key is what happens after it's dumped — fill dirt must always be compacted, or it will settle and take your foundation with it.",
      "We place and compact fill in layers so the finished grade is firm, even, and ready for footers, a slab, or a gravel pad.",
    ],
    includes: [
      "Importing fill dirt and base material",
      "Raising low spots and building up pads",
      "Shaping for positive drainage",
      "Compacting every lift of fill",
    ],
    goodFor: [
      "Low or soggy building sites",
      "House and home site pads",
      "Backfilling around foundations",
      "Leveling yards",
    ],
    callout: "Fill dirt must always be compacted. No exceptions.",
  },
  {
    slug: "compacting",
    name: "Compacting & Soil Stabilization",
    icon: RollerIcon,
    summary: "Ensure a rock-solid base that won't settle or shift later.",
    tagline:
      "A rock-solid, compacted base that won't settle or shift after your home or slab goes on it.",
    image: "/photos/soil-compactor.jpg",
    imageAlt: "A smooth-drum soil compactor rolling a graded dirt base",
    intro:
      "The ground under your project has to hold its shape for decades. Compaction is what makes that happen — without it, even a perfectly graded pad can settle, crack, or shift.",
    body: [
      "We compact native soil and imported fill so the base is dense and stable before anything is built on it. It's the step you never see once the job is done, and the one that matters most.",
      "Stable soil keeps footers where they belong, keeps slabs from cracking, and keeps a set home level long after we leave.",
    ],
    includes: [
      "Compacting fill and native soil",
      "Stabilizing soft or disturbed ground",
      "Compacted gravel pads",
      "Base prep for slabs and driveways",
    ],
    goodFor: [
      "Any site that received fill",
      "Home pads and footers",
      "Driveways and parking areas",
      "Slabs, patios, and walkways",
    ],
  },
  {
    slug: "grading-leveling",
    name: "Precision Leveling & Grading",
    icon: LevelIcon,
    summary:
      "Achieve perfectly flat, properly sloped pads for foundations, slabs, or yards.",
    tagline:
      "Flat, properly sloped pads for foundations, slabs, and yards — with drainage built in.",
    image: "/photos/dozer-graded-pad.jpg",
    imageAlt: "A dozer leveling a freshly graded building pad",
    intro:
      "Good grading is precise. We shape the ground so your pad is level where it needs to be and sloped where it needs to be — carrying water away from the building instead of under it.",
    body: [
      "Every state has different rules, but they all require positive drainage: water must run away from the home and not sit under it. For a home site, you also want the ground reasonably level — usually no more than a 2-foot slope from any end of the home to another.",
      "Under the home, the ground is crowned if the site is level, or sloped smoothly and consistently to one side if it's on a hill. Around the home, dirt is sloped away from the edge — or a french drain goes in instead.",
    ],
    includes: [
      "Level pads for homes, slabs, and buildings",
      "Finish grading for positive drainage",
      "Crowning or sloping under the home",
      "Yard and lot leveling",
    ],
    goodFor: [
      "Mobile and modular home sites",
      "Stick-built house pads",
      "Garage, shop, and barn pads",
      "Yards and lawns",
    ],
    callout:
      "Grading is required by code to pass inspection — and you can't get power installed to a home without it.",
  },
  {
    slug: "driveways",
    name: "Driveway Construction",
    icon: RoadIcon,
    summary:
      "Cut in new driveways, add gravel, or prepare surfaces for asphalt or concrete.",
    tagline:
      "New driveways cut in, graveled, or prepped for asphalt or concrete — built to handle the traffic.",
    image: "/photos/gravel-driveway.jpg",
    imageAlt: "A new gravel driveway cut through a wooded lot",
    intro:
      "A driveway is only as good as what's under it. We cut in new drives, build them up with a compacted base, and add gravel — or prep the surface for asphalt or concrete.",
    body: [
      "On steep or wooded lots, getting a driveway in is often the first job, because nothing else can happen until trucks and equipment can reach the site.",
      "We grade drives so water sheds off them instead of running down them, which keeps gravel in place and keeps ruts from forming.",
    ],
    includes: [
      "Cutting in new driveways and access roads",
      "Compacted base and gravel",
      "Regrading and repairing existing drives",
      "Prep for asphalt or concrete",
    ],
    goodFor: [
      "New home sites",
      "Steep or wooded lots",
      "Washed-out or rutted drives",
      "Turnarounds and parking areas",
    ],
  },
  {
    slug: "concrete",
    name: "Concrete Work",
    icon: SlabIcon,
    summary:
      "Professional pouring for slabs, footings, patios, sidewalks, and more.",
    tagline:
      "Slabs, footings, patios, sidewalks, and more — poured on a base we prepped ourselves.",
    image: "/photos/concrete-pour.jpg",
    imageAlt: "Leveling a freshly poured concrete slab with a power screed",
    intro:
      "Because we do the dirt work, the concrete goes down on a base we know is right. We pour slabs, footings, patios, sidewalks, and more.",
    body: [
      "All homes require either dirt or concrete footers. Basic footers can be dug to frostline and set without concrete where that's allowed. Concrete footers are sometimes required, and sometimes requested — they cost extra, and we'll tell you up front which your site needs.",
      "One crew handling grading and concrete means no finger-pointing between contractors if something isn't right.",
    ],
    includes: [
      "Concrete footers",
      "Slabs for homes, garages, and shops",
      "Patios and sidewalks",
      "Base prep and forming",
    ],
    goodFor: [
      "Mobile and modular home footers",
      "Garage and shop slabs",
      "Patios, walkways, and steps",
      "Equipment and HVAC pads",
    ],
  },
  {
    slug: "drainage",
    name: "Drainage & French Drains",
    icon: DropIcon,
    summary:
      "Positive drainage and french drains that keep water away from what you build.",
    tagline:
      "Positive drainage and french drains that keep water moving away from your home.",
    image: "/photos/french-drain-trench.jpg",
    imageAlt: "Drain pipe bedded in gravel in an open drainage trench",
    intro:
      "Water is the enemy of every foundation. We grade for positive drainage and install french drains so water runs away from your home instead of pooling underneath it.",
    body: [
      "Most sites require a french drain. Code generally calls for one of two things: dirt sloped away from the edge of the home out 10 feet with at least a 5-inch fall, or a french drain installed on the exact edge of the home instead.",
      "A proper french drain is 1 foot wide and 18 inches deep, with drain pipe, filled with gravel, and no dirt on top. We build them to that standard so they pass inspection and keep working.",
    ],
    includes: [
      "Grading for positive drainage",
      "French drain installation",
      "Sloping dirt away from the home",
      "Routing runoff around pads and driveways",
    ],
    goodFor: [
      "Hillside and mountain lots",
      "Sites where water sits after rain",
      "Home site inspections",
      "Protecting existing foundations",
    ],
    callout:
      'French drain spec: on the exact edge of the home, 1 ft wide, 18" deep, drain pipe filled with gravel — no dirt on top.',
  },
];

export const serviceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug);
