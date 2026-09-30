import Link from "next/link";
import { site, telHref } from "../site";
import { services } from "../services";
import type { Faq } from "../faqs";
import { Container, Button } from "./ui";
import { ArrowIcon, PhoneIcon, PlusCircleIcon } from "./icons";

/* ------------------------------------------------------------ CTA band */

export function CtaBand({
  title = "Ready to break ground?",
  body = "Tell us about your site and we'll come out, walk it, and give you a real number for the work.",
  image,
  allPhones = false,
}: {
  title?: string;
  body?: string;
  image?: string;
  allPhones?: boolean;
}) {
  const phones = allPhones ? site.phones : site.phones.slice(0, 1);
  return (
    <section className="relative overflow-hidden bg-forest-900 text-white">
      {image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={image}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
          loading="lazy"
        />
      )}
      <Container className="relative py-16 text-center sm:py-20">
        <h2 className="font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight sm:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-forest-100">{body}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/contact" withArrow>
            Request a Quote
          </Button>
          {phones.map((phone) => (
            <Button key={phone.label} href={telHref(phone.number)} variant="outline">
              <PhoneIcon className="h-4 w-4" />
              {allPhones ? `${phone.label}: ${phone.number}` : phone.number}
            </Button>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------- Service cards */

export function ServiceGrid({ showCatchAll = true }: { showCatchAll?: boolean }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {services.map(({ slug, icon: Icon, name, summary }) => (
        <Link
          key={slug}
          href={`/services/${slug}`}
          className="group relative flex flex-col overflow-hidden rounded-2xl border border-stone-200/80 bg-white p-7 shadow-sm ring-1 ring-black/[0.03] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:ring-forest-600/20"
        >
          <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-forest-600 to-action opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-forest-600 to-forest-800 text-white shadow-md shadow-forest-900/20">
            <Icon className="h-7 w-7" />
          </div>
          <h3 className="mt-5 text-lg font-bold text-stone-900">{name}</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600">
            {summary}
          </p>
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-forest-700">
            Learn more
            <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </Link>
      ))}
      {showCatchAll && (
        <Link
          href="/contact"
          className="group flex flex-col rounded-2xl border-2 border-dashed border-forest-600/30 bg-forest-50/60 p-7 transition-colors hover:border-forest-600/60"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-action text-forest-950">
            <PlusCircleIcon className="h-7 w-7" />
          </div>
          <h3 className="mt-5 text-lg font-bold text-stone-900">
            And virtually anything else
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600">
            If it involves moving dirt, shaping land, or building the base layer,
            we&apos;ve got you covered.
          </p>
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-forest-700">
            Ask about your project
            <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </Link>
      )}
    </div>
  );
}

/* ----------------------------------------------------------- Equipment */

export function EquipmentChips({
  items = site.equipment,
  label = "Some of our equipment",
}: {
  items?: readonly string[];
  label?: string;
}) {
  return (
    <div>
      {label && (
        <p className="mb-2 text-sm font-bold uppercase tracking-wider text-stone-500">
          {label}
        </p>
      )}
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-forest-100 bg-forest-50 px-3 py-1 text-sm font-semibold text-forest-700"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------- FAQ */

export function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="divide-y divide-stone-200 overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
      {items.map((f) => (
        <details key={f.q} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left font-bold text-stone-900 transition-colors hover:bg-stone-50 [&::-webkit-details-marker]:hidden">
            {f.q}
            <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-forest-50 text-forest-700 transition-transform duration-200 group-open:rotate-45">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </span>
          </summary>
          <p className="px-6 pb-6 leading-relaxed text-stone-600">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
