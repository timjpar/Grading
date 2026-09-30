import type { Metadata } from "next";
import { site } from "../site";
import { faqs } from "../faqs";
import {
  padRequirements,
  homeownerChecklist,
  padPricing,
  priceFactors,
  limbRule,
  fmt,
} from "../grading";
import { Container, SectionHeading, Button } from "../components/ui";
import { PageHero } from "../components/PageHero";
import { CtaBand, FaqList } from "../components/sections";
import { CheckIcon, ClipboardIcon, TreeIcon, TruckIcon } from "../components/icons";

export const metadata: Metadata = {
  title: "Mobile Home Site Grading & Prep",
  description:
    "Grading, drainage, french drains, and footers for mobile and modular home sites — built to pass inspection so you can get power installed. Pricing starts at $2,500.",
};

export default function MobileHomePadsPage() {
  return (
    <>
      <PageHero
        eyebrow="Mobile & Modular Home Sites"
        title="Grading that passes inspection"
        subtitle="Grading is required by code to pass inspection — and it's absolutely required to get power installed to your home. We build the site to the rules, the first time."
        image="/photos/setup-footers.jpg"
      />

      {/* Intro */}
      <section className="bg-white py-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-5 text-lg leading-relaxed text-stone-700">
              <p className="text-xl font-semibold text-stone-900">
                Every state has different rules, but they all require positive
                drainage — water must run away from the home and not sit under it.
              </p>
              <p>
                You also want your site reasonably level, usually no more than a
                2-foot slope from any end of the home to another. Most sites
                require a french drain and possibly extra fill dirt — and fill
                dirt must always be compacted.
              </p>
              <p>
                We have a knowledgeable, experienced team, so you don&apos;t have
                to hire another contractor and hope they don&apos;t mess it up.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/photos/grade-gravel-pad.jpg"
                alt="A single-wide staged on a compacted gravel pad"
                className="aspect-[4/5] w-full rounded-2xl object-cover shadow-lg"
                loading="lazy"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/photos/setup-piers.jpg"
                alt="A home on a hillside site graded and sloped for drainage"
                className="mt-10 aspect-[4/5] w-full rounded-2xl object-cover shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Requirements */}
      <section className="bg-cream bg-topo py-20">
        <Container>
          <SectionHeading
            eyebrow="What the inspector checks"
            title="What your site needs"
            subtitle="Every state's rules have to be confirmed individually, but these are the grading requirements nearly every home site has to meet."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {padRequirements.map((r, i) => (
              <div
                key={r.title}
                className="flex gap-4 rounded-2xl border border-stone-200/80 bg-white p-6 shadow-sm"
              >
                <span className="font-display flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-forest-700 text-lg font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-bold text-stone-900">{r.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-stone-600">{r.body}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-6 flex max-w-3xl items-start gap-3 rounded-xl border-l-4 border-action bg-white p-4 text-stone-800 shadow-sm">
            <TreeIcon className="mt-0.5 h-5 w-5 flex-none text-forest-600" />
            <span>
              {limbRule} Clearing is part of what we do.
            </span>
          </p>

          {/* French drain spec */}
          <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
            <div className="grid gap-0 md:grid-cols-[1fr_1.1fr]">
              <div className="bg-forest-900 p-6 text-white sm:p-8">
                <span className="eyebrow-tab inline-block bg-action px-2.5 py-1 text-xs text-forest-950">
                  French drain spec
                </span>
                <p className="mt-4 text-forest-100">
                  When the dirt can&apos;t be sloped away 10 feet, a french drain
                  goes on the exact edge of the home instead.
                </p>
              </div>
              <div className="p-6 sm:p-8">
                <FrenchDrainDiagram />
                <dl className="mt-4 grid grid-cols-3 gap-3 text-center">
                  {[
                    ["1 ft", "Wide"],
                    ['18"', "Deep"],
                    ["None", "Dirt on top"],
                  ].map(([v, l]) => (
                    <div key={l} className="rounded-lg bg-stone-50 p-3">
                      <dt className="font-display text-2xl font-bold text-forest-800">{v}</dt>
                      <dd className="text-xs font-semibold uppercase tracking-wider text-stone-500">{l}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Homeowner responsibilities */}
      <section className="bg-white py-20">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <SectionHeading
              align="left"
              eyebrow="Before we dig"
              title="What's on you as the homeowner"
              subtitle="We handle the dirt work. A few things have to be squared away with the county and the property first."
            />
            <ul className="space-y-3">
              {homeownerChecklist.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 rounded-xl border border-stone-200 bg-stone-50 p-4 text-stone-700"
                >
                  <ClipboardIcon className="mt-0.5 h-5 w-5 flex-none text-forest-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Pricing */}
      <section id="pricing" className="scroll-mt-20 bg-stone-50 py-20">
        <Container>
          <SectionHeading
            eyebrow="Basic price list"
            title="A good starting point"
            subtitle="It's impossible to price every site the same — there are too many variables — but here is a good starting point. Final pricing comes after we walk your site."
          />

          <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
            {padPricing.map((p) => (
              <div
                key={p.title}
                className="flex flex-col rounded-2xl border border-stone-200 bg-white p-7 shadow-sm"
              >
                <h3 className="text-lg font-bold text-stone-900">{p.title}</h3>
                <p className="mt-1 text-sm text-stone-500">Grading &amp; prep</p>
                <div className="mt-5 space-y-3 border-t border-stone-100 pt-5">
                  <PriceRow label="No concrete" amount={p.noConcrete} />
                  <PriceRow label="With concrete footers" amount={p.withConcrete} />
                </div>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-6 max-w-4xl text-sm text-stone-500">
            Basic pricing assumes a relatively easy site with no surprises.
            Concrete is sometimes required and sometimes requested — it costs
            extra either way.
          </p>

          <div className="mx-auto mt-12 max-w-4xl rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
            <h3 className="text-lg font-bold text-stone-900">
              Things that bring the price up
            </h3>
            <ul className="mt-4 grid gap-x-8 gap-y-2 sm:grid-cols-2">
              {priceFactors.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm text-stone-700">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-action" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Moving cross-link */}
      <section className="bg-white py-16">
        <Container>
          <div className="flex flex-col items-start gap-6 rounded-2xl border border-action/40 bg-action/10 p-6 sm:flex-row sm:items-center sm:p-8">
            <span className="flex h-14 w-14 flex-none items-center justify-center rounded-xl bg-forest-800 text-action">
              <TruckIcon className="h-7 w-7" />
            </span>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-stone-900">
                Need the home moved and set, too?
              </h2>
              <p className="mt-1 text-stone-700">
                {site.shortName} also moves single-wides, double-wides, and modular
                sections — and sets them level, anchored, and ready for
                inspection. We handle the moving permits and setup inspections.
              </p>
            </div>
            <Button href={site.movingSite} variant="secondary" withArrow>
              Moving &amp; setup
            </Button>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-t border-stone-100 bg-white pb-20 pt-4">
        <Container className="max-w-3xl">
          <h2 className="font-display text-center text-3xl font-bold uppercase tracking-tight text-stone-900">
            Common questions
          </h2>
          <div className="mt-8">
            <FaqList items={faqs.slice(0, 7)} />
          </div>
        </Container>
      </section>

      <CtaBand
        title="Get your site inspection-ready"
        body="Tell us about your lot and your home, and we'll walk the site and give you a real number."
        image="/photos/setup-field-dusk.jpg"
        allPhones
      />
    </>
  );
}

function PriceRow({ label, amount }: { label: string; amount: number }) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <span className="flex items-center gap-2 text-stone-600">
        <CheckIcon className="h-4 w-4 text-forest-600" />
        {label}
      </span>
      <span className="text-right">
        <span className="mr-1 text-xs font-semibold text-stone-500">from</span>
        <span className="font-display text-3xl font-bold text-forest-800">{fmt(amount)}</span>
      </span>
    </div>
  );
}

// Cross-section of a french drain at the edge of the home.
function FrenchDrainDiagram() {
  return (
    <svg
      viewBox="0 0 320 150"
      className="w-full"
      role="img"
      aria-label="Cross-section of a french drain: a trench 1 foot wide and 18 inches deep at the edge of the home, with drain pipe at the bottom and filled with gravel to the surface."
    >
      {/* ground */}
      <path d="M0 50 H110 V140 H170 V50 H320 V150 H0 Z" className="fill-stone-300" />
      <path d="M0 50 H110 M170 50 H320" className="stroke-stone-500" strokeWidth="2" fill="none" />
      {/* home edge */}
      <rect x="10" y="10" width="100" height="26" rx="2" className="fill-forest-700" />
      <text x="60" y="27" textAnchor="middle" className="fill-white" fontSize="11" fontWeight="700">HOME</text>
      <path d="M110 36 V50" className="stroke-forest-700" strokeWidth="2" strokeDasharray="3 3" />
      {/* gravel */}
      <rect x="110" y="50" width="60" height="90" className="fill-stone-100" />
      {Array.from({ length: 36 }).map((_, i) => (
        <circle
          key={i}
          cx={116 + (i % 6) * 9.6}
          cy={58 + Math.floor(i / 6) * 13.5}
          r="3.4"
          className="fill-stone-400"
        />
      ))}
      {/* pipe */}
      <circle cx="140" cy="124" r="10" className="fill-white stroke-forest-800" strokeWidth="2.5" />
      <circle cx="140" cy="124" r="4" className="fill-forest-800" />
      {/* dims */}
      <path d="M110 44 H170" className="stroke-action" strokeWidth="2" />
      <text x="140" y="40" textAnchor="middle" className="fill-stone-700" fontSize="10" fontWeight="700">1 ft</text>
      <path d="M182 50 V140" className="stroke-action" strokeWidth="2" />
      <text x="188" y="99" className="fill-stone-700" fontSize="10" fontWeight="700">18&quot;</text>
    </svg>
  );
}
