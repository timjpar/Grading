import Link from "next/link";
import { site, telHref } from "./site";
import { stateSlug } from "./serviceAreas";
import { faqs } from "./faqs";
import { processSteps } from "./grading";
import { Container, SectionHeading, Button } from "./components/ui";
import {
  CtaBand,
  EquipmentChips,
  FaqList,
  QuoteSection,
  ServiceGrid,
} from "./components/sections";
import {
  PhoneIcon,
  ShieldIcon,
  MapPinIcon,
  CheckIcon,
  ArrowIcon,
} from "./components/icons";

// Section order mirrors the Grading page on the Mountain Movers site:
// hero → services → experienced crew & equipment → call to action, with the
// quote form, process, FAQ, and service area added for leads and search.
export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <CrewAndEquipment />
      <QuoteSection />
      <Process />
      <FaqTeaser />
      <ServiceArea />
      <CtaBand image="/photos/footings-aerial.jpg" />
    </>
  );
}

/* ----------------------------------------------------------------- Hero */

function Hero() {
  return (
    <section className="relative isolate flex min-h-[85vh] items-end overflow-hidden bg-forest-950 text-white sm:items-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/photos/dozer-graded-pad.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Bottom-anchored scrim keeps the top of the photo clear — important on mobile. */}
      <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-forest-950 via-forest-950/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-950/75 via-forest-950/25 to-transparent" />
      <div className="pointer-events-none absolute -left-24 bottom-1/3 h-80 w-80 rounded-full bg-action/20 blur-[120px]" />

      <Container className="relative w-full pb-10 pt-24 sm:py-24">
        <p className="eyebrow-tab mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/25 px-3 py-1.5 text-xs text-forest-50 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-action" />
          Grading &amp; Site Prep · {site.base}
        </p>

        <h1 className="font-display max-w-2xl text-4xl font-bold uppercase leading-[0.95] tracking-tight text-shadow-hero sm:text-5xl lg:text-6xl">
          <span className="block text-action">Grading &amp; site prep.</span>
          We&apos;ve got you covered.
        </h1>

        <p className="mt-5 max-w-lg text-base leading-relaxed text-forest-50 text-shadow-hero sm:text-lg">
          {site.tagline}
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button href="#quote" withArrow>
            Request a Quote
          </Button>
          <Button href={telHref(site.phone)} variant="outline">
            <PhoneIcon className="h-4 w-4" />
            Call {site.phone}
          </Button>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------- Trust bar */

function TrustBar() {
  return (
    <section className="border-b border-stone-200/70 bg-cream">
      <Container className="flex flex-col items-center gap-4 py-6 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-6 sm:gap-y-3">
        <span className="text-sm font-semibold uppercase tracking-wider text-stone-500">
          Fully credentialed
        </span>
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {site.credentials.map((c) => (
            <span
              key={c}
              className="inline-flex items-center gap-2 rounded-full border border-forest-100 bg-white px-4 py-2 text-sm font-bold text-forest-800 shadow-sm"
            >
              <ShieldIcon className="h-5 w-5 text-action" />
              {c}
            </span>
          ))}
          <span className="inline-flex items-center gap-2 rounded-full border border-forest-100 bg-white px-4 py-2 text-sm font-bold text-forest-800 shadow-sm">
            <MapPinIcon className="h-5 w-5 text-action" />
            {site.base}
          </span>
        </div>
      </Container>
    </section>
  );
}

/* -------------------------------------------------------------- Services */

function Services() {
  return (
    <section className="bg-cream bg-topo py-20">
      <Container>
        <SectionHeading
          eyebrow="What we do"
          title="Every aspect of site prep"
          subtitle="If it involves moving dirt, shaping land, or building the base layer, it's the kind of work we do every day."
        />
        <div className="mt-12">
          <ServiceGrid />
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------- Crew & equipment */

function CrewAndEquipment() {
  const points = [
    "One crew for clearing, grading, and concrete — no juggling contractors.",
    "Proper drainage and compaction so your base won't settle or shift.",
    "The right machine for the job, from land clearing to finish grade.",
  ];
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/photos/dozer-mountain-site.jpg"
              alt="A dozer grading a red-clay site in the mountains"
              className="aspect-[4/3] h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Why Mountain Movers"
              title="Experienced crew, modern equipment"
              subtitle="Our team has years of hands-on experience with the right machines to get the job done efficiently and precisely — minimizing disruption to your property."
            />
            <ul className="mt-6 space-y-3">
              {points.map((p) => (
                <li key={p} className="flex gap-3 text-stone-700">
                  <CheckIcon className="mt-0.5 h-5 w-5 flex-none text-forest-600" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <EquipmentChips />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* --------------------------------------------------------------- Process */

function Process() {
  return (
    <section className="bg-forest-900 bg-topo-dark py-20 text-white">
      <Container>
        <SectionHeading
          dark
          eyebrow="How it works"
          title="Built from the ground up"
          subtitle="Every site is different, but the work follows the same order: walk it, clear it, build it up, grade it, and finish it."
        />
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((s) => (
            <li key={s.n} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <span className="font-display text-3xl font-bold text-action">{s.n}</span>
              <h3 className="mt-2 font-bold">{s.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-forest-100">{s.body}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10 text-center">
          <Button href="/process" withArrow>
            See the full process
          </Button>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------ FAQ teaser */

function FaqTeaser() {
  return (
    <section className="bg-cream bg-topo py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Good to know"
              title="Grading questions, answered"
              subtitle="What a grading contractor does, what drives the cost, and how to get a number for your site."
            />
            <div className="mt-8">
              <Button href="/faq" variant="secondary" withArrow>
                All grading FAQs
              </Button>
            </div>
          </div>
          <FaqList items={faqs.filter((f) => f.featured)} />
        </div>
      </Container>
    </section>
  );
}

/* ----------------------------------------------------------- Service area */

function ServiceArea() {
  return (
    <section className="bg-white py-20">
      <Container>
        <SectionHeading
          eyebrow="Service area"
          title="Six states, one trusted crew"
          subtitle="Based in Newport, Tennessee and often traveling as far as 200 miles to prep your site."
        />
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {site.states.map((state) => (
            <Link
              key={state}
              href={`/service-area/${stateSlug(state)}`}
              className="group inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-5 py-2.5 text-sm font-semibold text-forest-800 shadow-sm transition-all hover:-translate-y-0.5 hover:border-forest-600/40 hover:text-forest-700 hover:shadow-md"
            >
              <MapPinIcon className="h-4 w-4 text-action" />
              {state}
              <ArrowIcon className="-ml-0.5 h-3.5 w-0 opacity-0 transition-all duration-300 group-hover:w-3.5 group-hover:opacity-100" />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
