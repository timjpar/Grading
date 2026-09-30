import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site } from "../../site";
import { serviceAreas, serviceAreaBySlug } from "../../serviceAreas";
import { Container, SectionHeading } from "../../components/ui";
import { PageHero } from "../../components/PageHero";
import { CtaBand, ServiceGrid } from "../../components/sections";
import { MapPinIcon } from "../../components/icons";

// Static export: prerender one page per state, nothing on demand.
export const dynamicParams = false;

export function generateStaticParams() {
  return serviceAreas.map((area) => ({ state: area.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string }>;
}): Promise<Metadata> {
  const { state } = await params;
  const area = serviceAreaBySlug(state);
  if (!area) return {};
  return {
    title: `Grading & Site Prep in ${area.name}`,
    description: `${site.shortName} clears, grades, and preps sites across ${area.name} — land clearing, fill and compaction, drainage, driveways, and concrete. Licensed, bonded, and insured, based in ${site.base}.`,
  };
}

export default async function ServiceAreaPage({
  params,
}: {
  params: Promise<{ state: string }>;
}) {
  const { state } = await params;
  const area = serviceAreaBySlug(state);
  if (!area) notFound();

  const others = serviceAreas.filter((a) => a.slug !== area.slug);

  return (
    <>
      <PageHero
        eyebrow="Service Area"
        title={area.name}
        subtitle={area.tagline}
        image={area.image}
      />

      {/* Intro + cities */}
      <section className="bg-white py-20">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <SectionHeading
              align="left"
              eyebrow={`Serving ${area.name}`}
              title={`Site prep in ${area.name}, start to finish`}
              subtitle={area.intro}
            />
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-stone-500">
                Areas we cover in {area.name}
              </p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {area.cities.map((city) => (
                  <span
                    key={city}
                    className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-semibold text-forest-800 shadow-sm"
                  >
                    <MapPinIcon className="h-4 w-4 text-action" />
                    {city}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-sm text-stone-500">
                Based in {site.base}{" "}and often traveling as far as 200
                miles — if you don&apos;t see your town, call and ask.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* What we handle */}
      <section className="bg-cream bg-topo py-20">
        <Container>
          <SectionHeading
            eyebrow="What we do"
            title={`Grading services in ${area.name}`}
            subtitle="Clearing, dirt work, drainage, driveways, and concrete — one crew handling the whole base layer."
          />
          <div className="mt-12">
            <ServiceGrid />
          </div>
        </Container>
      </section>

      {/* Other service areas */}
      <section className="bg-white py-16">
        <Container>
          <h2 className="text-center text-sm font-bold uppercase tracking-wider text-stone-500">
            We also serve
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {others.map((a) => (
              <Link
                key={a.slug}
                href={`/service-area/${a.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-5 py-2.5 text-sm font-semibold text-forest-800 shadow-sm transition-colors hover:border-forest-600/40 hover:text-forest-700"
              >
                <MapPinIcon className="h-4 w-4 text-action" />
                {a.name}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title={`Prepping a site in ${area.name}?`}
        body="Tell us about the property and we'll walk it and give you a real number."
        allPhones
      />
    </>
  );
}
