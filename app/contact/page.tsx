import type { Metadata } from "next";
import { site, telHref } from "../site";
import { breadcrumbJsonLd } from "../seo";
import { Container } from "../components/ui";
import { PhoneIcon, MapPinIcon } from "../components/icons";
import { PageHero } from "../components/PageHero";
import { JsonLd } from "../components/JsonLd";
import { QuoteForm } from "../components/QuoteForm";

export const metadata: Metadata = {
  title: "Request a Grading Quote",
  description: `Request a grading or site prep quote from Mountain Movers Grading in Newport, TN. Call ${site.phone} or fill out the form and we'll come walk your site.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Contact", path: "/contact" }])} />
      <PageHero
        eyebrow="Contact Us"
        title="Request a quote"
        subtitle="Tell us about your property and what you're building. The more detail you give us, the better we can help."
        image="/photos/setup-footers.jpg"
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left: info */}
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-stone-900">
                Call, or send us your details
              </h2>
              <p className="mt-4 text-stone-600">
                Call or fill out the form — whatever&apos;s easiest. We&apos;re a
                family-owned grading company based in {site.base}.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href={telHref(site.phone)}
                  className="group flex items-center gap-4 rounded-xl border border-stone-200 bg-white p-5 shadow-sm transition-colors hover:border-forest-600/40"
                >
                  <span className="flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-forest-700 text-white">
                    <PhoneIcon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-stone-500">
                      Call for a quote
                    </span>
                    <span className="font-display block text-3xl font-bold text-forest-800">
                      {site.phone}
                    </span>
                  </span>
                </a>

                <div className="flex items-center gap-4 rounded-xl border border-stone-200 bg-white p-4 shadow-sm">
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-forest-50 text-forest-700">
                    <MapPinIcon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-stone-500">
                      Service area
                    </span>
                    <span className="block text-base font-bold text-forest-800">
                      {site.states.join(", ")}
                    </span>
                  </span>
                </div>
              </div>

              {/* What happens next */}
              <div className="mt-8 rounded-2xl border border-action/40 bg-action/10 p-6">
                <h3 className="text-lg font-bold text-stone-900">What happens next</h3>
                <ol className="mt-3 space-y-2 text-sm leading-relaxed text-stone-700">
                  <li>
                    <strong>1.</strong> We get in touch to talk through your
                    project.
                  </li>
                  <li>
                    <strong>2.</strong> We come out and walk the site — access,
                    slope, soil, drainage, and what has to come down.
                  </li>
                  <li>
                    <strong>3.</strong> You get a real number for the work, not a
                    guess.
                  </li>
                </ol>
              </div>
            </div>

            {/* Right: form */}
            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-xl font-bold text-stone-900">Send us your details</h2>
              <p className="mt-2 text-sm text-stone-500">
                Name and phone are all we need — the rest helps us give you a
                faster, more accurate answer.
              </p>
              <div className="mt-6">
                <QuoteForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
