import type { Metadata } from "next";
import Link from "next/link";
import { site, telHref } from "../site";
import { services } from "../services";
import { breadcrumbJsonLd } from "../seo";
import { Container, SectionHeading } from "../components/ui";
import { PageHero } from "../components/PageHero";
import { JsonLd } from "../components/JsonLd";
import { CtaBand, EquipmentChips } from "../components/sections";
import { ShieldIcon, MapPinIcon, CheckIcon } from "../components/icons";

export const metadata: Metadata = {
  title: "About Our Grading Company",
  description:
    "Mountain Movers Grading is a family-owned grading and site prep company based in Newport, Tennessee — licensed, bonded, and insured, with an experienced crew and modern equipment.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const facts: Array<[string, React.ReactNode]> = [
    ["Business", site.name],
    ["What we do", "Grading and site prep"],
    ["Based in", site.base],
    ["Service area", `${site.states.join(", ")} — often traveling as far as 200 miles`],
    [
      "Services",
      services.map((s, i) => (
        <span key={s.slug}>
          {i > 0 && ", "}
          <Link href={`/services/${s.slug}`} className="text-forest-700 underline hover:text-forest-800">
            {s.name}
          </Link>
        </span>
      )),
    ],
    ["Equipment", site.equipment.join(", ")],
    ["Credentials", site.credentials.join(", ")],
    [
      "Phone",
      <a key="phone" href={telHref(site.phone)} className="font-bold text-forest-700 underline">
        {site.phone}
      </a>,
    ],
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "About", path: "/about" }])} />
      <PageHero
        eyebrow="About Us"
        title="A family-owned crew that knows dirt"
        image="/photos/ridge-pad-dusk.jpg"
      />

      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-lg leading-relaxed text-stone-700">
            <p>
              <strong className="text-stone-900">{site.name}</strong> is a
              family-owned grading and site prep business based in{" "}
              <strong className="text-stone-900">Newport, Tennessee</strong>, often
              traveling as far as <strong className="text-stone-900">200
              miles</strong>. We know our business and everything it takes to get
              the job done safely.
            </p>
            <p className="mt-5">
              We handle every aspect of getting your property ready for
              construction or improvement — clearing, fill, compaction, grading,
              drainage, driveways, and concrete — so you don&apos;t have to hire
              three contractors and hope they get it right.
            </p>
            <p className="mt-5">
              We are <strong className="text-stone-900">licensed, bonded, and
              insured</strong>, so your property is protected from the first tree
              down to the final grade.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
            {[
              { icon: MapPinIcon, label: "Based in Newport, TN" },
              { icon: ShieldIcon, label: "Licensed · Bonded · Insured" },
              { icon: CheckIcon, label: "Family-owned & operated" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-xl border border-stone-200 bg-stone-50 p-4 text-sm font-semibold text-forest-800"
              >
                <Icon className="h-6 w-6 flex-none text-forest-600" />
                {label}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Quick facts — plain, quotable answers for people and AI assistants. */}
      <section className="bg-stone-50 py-20">
        <Container className="max-w-3xl">
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-stone-900">
            Quick facts
          </h2>
          <dl className="mt-6 divide-y divide-stone-200 overflow-hidden rounded-2xl border border-stone-200 bg-white">
            {facts.map(([label, value]) => (
              <div key={label} className="grid gap-1 px-5 py-4 sm:grid-cols-[10rem_1fr] sm:gap-4">
                <dt className="text-sm font-bold uppercase tracking-wider text-stone-500">{label}</dt>
                <dd className="text-stone-800">{value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/photos/g-dozer.jpg"
                alt="Our dozer on a freshly graded mountain road"
                className="aspect-[4/3] h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <SectionHeading
                align="left"
                eyebrow="Our equipment"
                title="Experienced crew, modern equipment"
                subtitle="Our team has years of hands-on experience with the right machines to get the job done efficiently and precisely — minimizing disruption to your property."
              />
              <div className="mt-6">
                <EquipmentChips label="" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand title="Have a site that needs work?" />
    </>
  );
}
