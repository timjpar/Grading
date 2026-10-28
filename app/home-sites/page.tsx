import type { Metadata } from "next";
import { faqs } from "../faqs";
import {
  padRequirements,
  homeownerChecklist,
  priceFactors,
  limbRule,
} from "../grading";
import { breadcrumbJsonLd } from "../seo";
import { Container, SectionHeading } from "../components/ui";
import { PageHero } from "../components/PageHero";
import { JsonLd } from "../components/JsonLd";
import { CtaBand, FaqList, QuoteSection } from "../components/sections";
import { CheckIcon, ClipboardIcon, TreeIcon } from "../components/icons";

export const metadata: Metadata = {
  title: "Home Site Grading & Building Pad Prep",
  description:
    "Home site grading and building pad prep in East Tennessee — positive drainage, level compacted pads, french drains, and footers that pass inspection. For houses, modular, and mobile home sites.",
  alternates: { canonical: "/home-sites" },
};

const siteTypes = [
  "Stick-built house pads",
  "Modular home sites",
  "Mobile & manufactured home sites",
  "Garage, shop, and barn pads",
];

export default function HomeSitesPage() {
  const siteFaqs = faqs.filter((f) =>
    /home site|positive drainage|french drain|compacted|footers|before grading|buried lines|mobile or modular/i.test(f.q),
  );
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home Sites", path: "/home-sites" }])} />
      <PageHero
        eyebrow="Home Site Grading"
        title="A home site that passes inspection"
        subtitle="Grading is required by code to pass inspection on a home site — and it's required to get power installed. We build the pad to the rules, the first time."
        image="/photos/footings-aerial.jpg"
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
              <ul className="grid gap-2 pt-2 sm:grid-cols-2">
                {siteTypes.map((t) => (
                  <li key={t} className="flex gap-2 text-base text-stone-700">
                    <CheckIcon className="mt-1 h-4 w-4 flex-none text-forest-600" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/photos/soil-compactor.jpg"
                alt="A soil compactor rolling a graded pad"
                className="aspect-[4/5] w-full rounded-2xl object-cover shadow-lg"
                loading="lazy"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/photos/french-drain-trench.jpg"
                alt="A french drain trench with pipe bedded in gravel"
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
            title="What your home site needs"
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

      {/* Owner responsibilities */}
      <section className="bg-white py-20">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <SectionHeading
              align="left"
              eyebrow="Before we dig"
              title="What's on you as the owner"
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

      {/* Cost factors */}
      <section className="bg-stone-50 py-20">
        <Container>
          <SectionHeading
            eyebrow="Cost"
            title="What drives the price"
            subtitle="It's impossible to price every site the same — there are too many variables. We walk your site and give you a real number for the work."
          />
          <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">
            <ul className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
              {priceFactors.map((p) => (
                <li key={p} className="flex items-start gap-2 text-stone-700">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-action" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-white pt-20">
        <Container className="max-w-3xl">
          <h2 className="font-display text-center text-3xl font-bold uppercase tracking-tight text-stone-900">
            Home site questions
          </h2>
          <div className="mt-8">
            <FaqList items={siteFaqs} />
          </div>
        </Container>
      </section>

      <QuoteSection
        title="Get your site inspection-ready"
        subtitle="Tell us about your lot and what you're building, and we'll walk the site and give you a real number."
      />

      <CtaBand image="/photos/mountain-meadow.jpg" />
    </>
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
