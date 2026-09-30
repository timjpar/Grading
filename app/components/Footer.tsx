import Link from "next/link";
import { site, telHref, nav } from "../site";
import { services } from "../services";
import { serviceAreas } from "../serviceAreas";
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  TruckIcon,
  FacebookIcon,
  InstagramIcon,
  YouTubeIcon,
  GoogleIcon,
} from "./icons";

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
              {site.credentials.join(" · ")} in multiple states
            </p>
            <div className="mt-5 flex gap-3">
              <Social label="Facebook" href={site.social.facebook}>
                <FacebookIcon className="h-5 w-5" />
              </Social>
              <Social label="Instagram" href={site.social.instagram}>
                <InstagramIcon className="h-5 w-5" />
              </Social>
              <Social label="YouTube" href={site.social.youtube}>
                <YouTubeIcon className="h-5 w-5" />
              </Social>
              <Social label="Google" href={site.social.google}>
                <GoogleIcon className="h-5 w-5" />
              </Social>
            </div>
            <a
              href={site.movingSite}
              className="mt-6 inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-3 py-2 text-sm font-semibold text-white transition-colors hover:border-action hover:text-action"
            >
              <TruckIcon className="h-4 w-4 text-action" />
              Need a home moved? Mountain Movers
            </a>
          </div>

          <div>
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
                <Link href="/faq" className="hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
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
          </div>

          <div>
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
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Get in touch
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {site.phones.map((phone) => (
                <li key={phone.label} className="flex items-start gap-2">
                  <PhoneIcon className="mt-0.5 h-4 w-4 flex-none text-action" />
                  <span>
                    <span className="block text-xs uppercase tracking-wider text-forest-100/70">
                      {phone.label}
                    </span>
                    <a href={telHref(phone.number)} className="font-semibold text-white hover:text-action">
                      {phone.number}
                    </a>
                  </span>
                </li>
              ))}
              <li className="flex items-start gap-2">
                <MailIcon className="mt-0.5 h-4 w-4 flex-none text-action" />
                <a href={`mailto:${site.email}`} className="break-words font-semibold text-white hover:text-action">
                  {site.email.split("@")[0]}@<wbr />
                  {site.email.split("@")[1]}
                </a>
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
          <p>Serving {site.states.join(", ")}.</p>
        </div>
      </div>
    </footer>
  );
}

function Social({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-action hover:text-stone-900"
    >
      {children}
    </a>
  );
}
