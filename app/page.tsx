import Link from "next/link";
import { site, telHref } from "./site";
import { stateSlug } from "./serviceAreas";
import { services } from "./services";
import { faqs } from "./faqs";
import { processSteps, padRequirements, padPricing, fmt } from "./grading";
import { Container, SectionHeading, Button } from "./components/ui";
import { GoogleReviews } from "./components/GoogleReviews";
import {
  CtaBand,
  EquipmentChips,
  FaqList,
  ServiceGrid,
} from "./components/sections";
import {
  PhoneIcon,
  ShieldIcon,
  MapPinIcon,
  CheckIcon,
  ArrowIcon,
} from "./components/icons";

export default function Home() {
  return (
    <>
      <LocalBusinessJsonLd />
      <Hero />
      <TrustBar />
      <Services />
      <HomePads />
      <WhyUs />
      <Process />
      <ServiceArea />
      <FaqTeaser />
      <GoogleReviews />
      <CtaBand image="/photos/ridge-set-dusk.jpg" allPhones />
    </>
  );
}

/* ----------------------------------------------------------------- Hero */

function Hero() {
  const primary = site.phones[0];
  return (
    <section className="relative isolate flex min-h-[88vh] items-end overflow-hidden bg-forest-950 text-white sm:items-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/photos/g-dozer.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Bottom-anchored scrim keeps the top of the photo clear — important on mobile. */}
      <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-forest-950 via-forest-950/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-950/70 via-forest-950/20 to-transparent" />
      <div className="pointer-events-none absolute -left-24 bottom-1/3 h-80 w-80 rounded-full bg-action/20 blur-[120px]" />

      <Container className="relative w-full pb-10 pt-24 sm:py-24">
        <p className="eyebrow-tab mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/25 px-3 py-1.5 text-xs text-forest-50 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-action" />
          Grading &amp; Site Prep · Based in {site.base}
        </p>

        <h1 className="font-display max-w-2xl text-4xl font-bold uppercase leading-[0.95] tracking-tight text-shadow-hero sm:text-5xl lg:text-6xl">
          From raw land to
          <span className="text-action"> a build-ready base.</span>
        </h1>

        <p className="mt-5 max-w-lg text-base leading-relaxed text-forest-50 text-shadow-hero sm:text-lg">
          Land clearing, fill and compaction, precision grading, french drains,
          driveways, and concrete — one licensed, bonded, and insured crew across
          six states.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button href="/contact" withArrow>
            Request a Quote
          </Button>
          <Button href={telHref(primary.number)} variant="outline">
            <PhoneIcon className="h-4 w-4" />
            {primary.number}
          </Button>
        </div>

        <dl className="mt-12 hidden max-w-xl grid-cols-3 gap-6 border-t border-white/15 pt-8 sm:grid">
          {[
            { stat: "6", label: "States Served" },
            { stat: "200mi", label: "Typical Reach" },
            { stat: "100%", label: "Licensed & Insured" },
          ].map((item) => (
            <div key={item.label}>
              <dt className="font-display text-4xl font-bold text-action">{item.stat}</dt>
              <dd className="mt-1 text-sm text-forest-100">{item.label}</dd>
            </div>
          ))}
        </dl>
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
          subtitle="We handle every aspect of getting your property ready for construction or improvement — so you don't have to juggle three contractors and hope they get it right."
        />
        <div className="mt-12">
          <ServiceGrid />
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------- Home pads */

function HomePads() {
  const featured = padRequirements.slice(0, 4);
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/photos/setup-footers.jpg"
                alt="A graded red-clay home site with footers laid out and a dozer on site"
                className="aspect-[4/3] h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-5 left-5 rounded-xl border border-stone-200 bg-white px-5 py-3 shadow-lg">
              <span className="block text-xs font-semibold uppercase tracking-wider text-stone-500">
                Home site grading from
              </span>
              <span className="font-display text-3xl font-bold text-forest-800">
                {fmt(padPricing[0].noConcrete)}
              </span>
            </div>
          </div>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Mobile & modular home sites"
              title="Grading that passes inspection"
              subtitle="Grading is required by code to pass inspection — and you can't get power installed to your home without it. We build the site to the rules, the first time."
            />
            <ul className="mt-6 space-y-3">
              {featured.map((r) => (
                <li key={r.title} className="flex gap-3 text-stone-700">
                  <CheckIcon className="mt-0.5 h-5 w-5 flex-none text-forest-600" />
                  <span>
                    <strong className="text-stone-900">{r.title}.</strong> {r.body}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href="/mobile-home-pads" variant="secondary" withArrow>
                Home site requirements &amp; pricing
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------------------------------------------------------------- Why us */

function WhyUs() {
  const points = [
    "One crew for clearing, grading, drainage, and concrete — no juggling contractors.",
    "Proper drainage and compaction so your base won't settle or shift.",
    "The right machine for the job, from land clearing to finish grade.",
    "Family-owned: you deal with the owners, not a call center.",
  ];
  return (
    <section className="bg-cream bg-topo py-20">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="lg:order-2">
            <div className="overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/photos/ridge-pad-dusk.jpg"
                alt="A freshly cleared ridge-top site with a dozer and mountain views"
                className="aspect-[4/3] h-full w-full object-cover"
                loading="lazy"
              />
            </div>
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
            <div className="mt-8">
              <Button href="/about" variant="secondary" withArrow>
                Meet the team
              </Button>
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

/* ------------------------------------------------------------ FAQ teaser */

function FaqTeaser() {
  return (
    <section className="border-t border-stone-100 bg-white py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Good to know"
              title="Grading questions, answered"
              subtitle="The rules every home site has to meet — and what they mean for your property."
            />
            <div className="mt-8">
              <Button href="/faq" variant="secondary" withArrow>
                All FAQs
              </Button>
            </div>
          </div>
          <FaqList items={faqs.filter((f) => f.featured)} />
        </div>
      </Container>
    </section>
  );
}

/* ---------------------------------------------------------- Structured data */

function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: site.brand,
    description: site.blurb,
    telephone: `+1-${site.phones[0].number}`,
    email: site.email,
    image: "/photos/setup-footers.jpg",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Newport",
      addressRegion: "TN",
      addressCountry: "US",
    },
    areaServed: site.states.map((name) => ({ "@type": "State", name })),
    makesOffer: services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.name },
    })),
    sameAs: [site.social.facebook, site.movingSite],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
