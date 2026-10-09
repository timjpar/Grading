import Link from "next/link";
import { site, telHref, nav } from "../site";
import { services } from "../services";
import { serviceAreas } from "../serviceAreas";
import { PhoneIcon, MapPinIcon, ArrowIcon } from "./icons";

export function Footer() {
  return (
    <footer className="bg-forest-900 text-forest-100">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <span className="text-xl font-extrabold uppercase tracking-tight text-white">
              {site.name}
            </span>
            <span className="eyebrow-tab mt-1 block text-xs text-action">
              Grading &amp; Site Prep
            </span>
            <p className="mt-4 max-w-sm text-sm leading-relaxed">{site.blurb}</p>
            <p className="mt-4 text-sm font-semibold text-white">
              {site.credentials.join(" · ")}
            </p>
            <a
              href={telHref(site.phone)}
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-action px-4 py-2.5 text-sm font-bold text-stone-900 transition-colors hover:bg-action-dark"
            >
              <PhoneIcon className="h-4 w-4" />
              Call {site.phone}
            </a>
          </div>

          <nav aria-label="Pages">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Pages
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/about" className="hover:text-white">
                  About
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Services">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="hover:text-white">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Service areas">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Service Areas
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {serviceAreas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/service-area/${area.slug}`}
                    className="hover:text-white"
                  >
                    Grading in {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Get in touch
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <PhoneIcon className="mt-0.5 h-4 w-4 flex-none text-action" />
                <a href={telHref(site.phone)} className="font-semibold text-white hover:text-action">
                  {site.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <ArrowIcon className="mt-0.5 h-4 w-4 flex-none text-action" />
                <Link href="/contact" className="font-semibold text-white hover:text-action">
                  Request a quote
                </Link>
              </li>
              <li className="flex items-start gap-2">
                <MapPinIcon className="mt-0.5 h-4 w-4 flex-none text-action" />
                <span>Based in {site.base}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-forest-100/70 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Grading &amp; site prep serving {site.states.join(", ")}.</p>
        </div>
      </div>
    </footer>
  );
}
