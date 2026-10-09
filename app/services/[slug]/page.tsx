import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site, telHref } from "../../site";
import { services, serviceBySlug } from "../../services";
import { Container, Button } from "../../components/ui";
import { PageHero } from "../../components/PageHero";
import { CtaBand, EquipmentChips } from "../../components/sections";
import { JsonLd } from "../../components/JsonLd";
import { breadcrumbJsonLd, serviceJsonLd } from "../../seo";
import { CheckIcon, MapPinIcon, ArrowIcon, PhoneIcon } from "../../components/icons";

// Static export: prerender one page per service, nothing on demand.
export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = serviceBySlug(slug);
  if (!s) return {};
  return {
    title: `${s.name} in Newport, TN & East Tennessee`,
    description: `${s.tagline} Mountain Movers Grading — call ${site.phone} for a quote.`,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: { images: [s.image] },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = serviceBySlug(slug);
  if (!s) notFound();

  const others = services.filter((o) => o.slug !== s.slug);

  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd(s),
          breadcrumbJsonLd([
            { name: "Services", path: "/services" },
            { name: s.name, path: `/services/${s.slug}` },
          ]),
        ]}
      />
      <PageHero eyebrow="Grading & Site Prep" title={s.name} subtitle={s.tagline} image={s.image} />

      <section className="bg-white py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
            {/* Main copy */}
            <div className="space-y-6 text-lg leading-relaxed text-stone-700">
              <p className="text-xl font-semibold text-stone-900">{s.intro}</p>
              {s.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
              {s.callout && (
                <p className="rounded-lg border-l-4 border-action bg-action/10 p-4 text-base text-stone-800">
                  {s.callout}
                </p>
              )}
              <div className="overflow-hidden rounded-2xl shadow-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.image}
                  alt={s.imageAlt}
                  className="aspect-[16/10] w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6">
                <h2 className="eyebrow-tab text-sm text-forest-700">What it covers</h2>
                <ul className="mt-4 space-y-2.5">
                  {s.includes.map((item) => (
                    <li key={item} className="flex gap-2.5 text-stone-700">
                      <CheckIcon className="mt-0.5 h-5 w-5 flex-none text-forest-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-stone-200 bg-white p-6">
                <h2 className="eyebrow-tab text-sm text-forest-700">Good for</h2>
                <ul className="mt-4 space-y-2">
                  {s.goodFor.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-stone-700">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-action" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <EquipmentChips />
                </div>
              </div>
              <div className="rounded-2xl bg-forest-900 p-6 text-white">
                <p className="font-display text-2xl font-bold uppercase leading-tight">
                  Get a real number
                </p>
                <p className="mt-2 text-sm text-forest-100">
                  We&apos;ll come out, walk the site, and tell you exactly what it
                  takes.
                </p>
                <div className="mt-5">
                  <Button href="/contact" withArrow className="w-full">
                    Request a Quote
                  </Button>
                </div>
                <a
                  href={telHref(site.phone)}
                  className="mt-4 flex items-center justify-center gap-2 text-sm font-bold text-white hover:text-action"
                >
                  <PhoneIcon className="h-4 w-4 text-action" />
                  Or call {site.phone}
                </a>
                <p className="mt-3 flex items-center justify-center gap-2 text-xs text-forest-100">
                  <MapPinIcon className="h-4 w-4 text-action" />
                  Based in {site.base}
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* Other services */}
      <section className="bg-cream bg-topo py-16">
        <Container>
          <h2 className="text-center text-sm font-bold uppercase tracking-wider text-stone-500">
            More of what we do
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/services/${o.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-5 py-2.5 text-sm font-semibold text-forest-800 shadow-sm transition-colors hover:border-forest-600/40 hover:text-forest-700"
              >
                <o.icon className="h-4 w-4 text-action" />
                {o.name}
              </Link>
            ))}
            <Link
              href="/home-sites"
              className="inline-flex items-center gap-2 rounded-full bg-action px-5 py-2.5 text-sm font-bold text-stone-900 shadow-sm hover:bg-action-dark"
            >
              Home site grading
              <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
