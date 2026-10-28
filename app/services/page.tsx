import type { Metadata } from "next";
import Link from "next/link";
import { services } from "../services";
import { Container, SectionHeading } from "../components/ui";
import { PageHero } from "../components/PageHero";
import { CtaBand, EquipmentChips, ServiceGrid } from "../components/sections";
import { JsonLd } from "../components/JsonLd";
import { breadcrumbJsonLd } from "../seo";
import { ArrowIcon, CheckIcon } from "../components/icons";

export const metadata: Metadata = {
  title: "Grading & Site Prep Services",
  description:
    "Grading and site prep services in Newport, TN and the surrounding region: land clearing, dirt import and fill, soil compaction, precision leveling and grading, driveway construction, concrete work, and french drains.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Services", path: "/services" }])} />
      <PageHero
        eyebrow="Grading & Site Prep Services"
        title="We've got you covered"
        subtitle="We handle every aspect of getting your property ready for construction or improvement — from raw land to a solid, build-ready base."
        image="/photos/motor-grader.jpg"
      />

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

      {/* Alternating detail rows */}
      {services.map((s, i) => (
        <section
          key={s.slug}
          id={s.slug}
          className="scroll-mt-20 border-b border-stone-100 bg-white py-16"
        >
          <Container>
            <div
              className={`grid items-center gap-10 lg:grid-cols-2 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <div>
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-forest-700 text-white">
                    <s.icon className="h-6 w-6" />
                  </span>
                  <h2 className="font-display text-3xl font-bold uppercase leading-none tracking-tight text-stone-900 sm:text-4xl">
                    {s.name}
                  </h2>
                </div>
                <p className="mt-5 leading-relaxed text-stone-700">{s.intro}</p>
                <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                  {s.includes.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm text-stone-700">
                      <CheckIcon className="mt-0.5 h-4 w-4 flex-none text-forest-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services/${s.slug}`}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-forest-700 hover:text-forest-800"
                >
                  More about {s.name.toLowerCase()}
                  <ArrowIcon className="h-4 w-4" />
                </Link>
              </div>
              <div className="overflow-hidden rounded-2xl shadow-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.image}
                  alt={s.imageAlt}
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </Container>
        </section>
      ))}

      <section className="bg-stone-50 py-16">
        <Container className="flex flex-col items-center gap-6 text-center">
          <p className="max-w-2xl text-lg text-stone-700">
            Our team has years of hands-on experience with the right machines to
            get the job done efficiently and precisely.
          </p>
          <EquipmentChips />
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
