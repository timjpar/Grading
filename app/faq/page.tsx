import type { Metadata } from "next";
import { site, telHref } from "../site";
import { faqs } from "../faqs";
import { Container } from "../components/ui";
import { PageHero } from "../components/PageHero";
import { CtaBand, FaqList } from "../components/sections";
import { PhoneIcon } from "../components/icons";

export const metadata: Metadata = {
  title: "Grading FAQ",
  description:
    "Answers to common grading and site prep questions — drainage, french drains, how level a site needs to be, footers, permits, buried lines, and pricing.",
};

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        eyebrow="FAQ"
        title="Grading questions, answered"
        subtitle="The rules every site has to meet, what's on you as the homeowner, and what it costs."
        image="/photos/grade-gravel-pad.jpg"
      />

      <section className="bg-cream bg-topo py-20">
        <Container className="max-w-3xl">
          <FaqList items={faqs} />
          <div className="mt-10 rounded-2xl border border-stone-200 bg-white p-6 text-center shadow-sm">
            <p className="font-bold text-stone-900">Don&apos;t see your question?</p>
            <p className="mt-1 text-stone-600">
              Call the line for your state — you&apos;ll talk to the owners.
            </p>
            <div className="mt-4 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-6">
              {site.phones.map((p) => (
                <a
                  key={p.label}
                  href={telHref(p.number)}
                  className="inline-flex items-center gap-2 font-bold text-forest-700 hover:text-forest-800"
                >
                  <PhoneIcon className="h-4 w-4" />
                  {p.label}: {p.number}
                </a>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
