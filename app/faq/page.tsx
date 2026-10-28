import type { Metadata } from "next";
import { site, telHref } from "../site";
import { faqs } from "../faqs";
import { breadcrumbJsonLd } from "../seo";
import { Container } from "../components/ui";
import { PageHero } from "../components/PageHero";
import { JsonLd } from "../components/JsonLd";
import { CtaBand, FaqList } from "../components/sections";
import { PhoneIcon } from "../components/icons";

export const metadata: Metadata = {
  title: "Grading & Site Prep FAQ",
  description:
    "Answers to common grading and site prep questions — what a grading contractor does, what drives the cost, positive drainage, french drains, compaction, footers, and buried lines.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  const faqJsonLd = {
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
      <JsonLd data={[faqJsonLd, breadcrumbJsonLd([{ name: "FAQ", path: "/faq" }])]} />
      <PageHero
        eyebrow="FAQ"
        title="Grading questions, answered"
        subtitle="What a grading contractor does, the rules every site has to meet, what's on you as the owner, and what drives the cost."
        image="/photos/soil-compactor.jpg"
      />

      <section className="bg-cream bg-topo py-20">
        <Container className="max-w-3xl">
          <FaqList items={faqs} />
          <div className="mt-10 rounded-2xl border border-stone-200 bg-white p-6 text-center shadow-sm">
            <p className="font-bold text-stone-900">Don&apos;t see your question?</p>
            <p className="mt-1 text-stone-600">Give us a call — we&apos;re happy to talk through your site.</p>
            <a
              href={telHref(site.phone)}
              className="mt-4 inline-flex items-center gap-2 font-bold text-forest-700 hover:text-forest-800"
            >
              <PhoneIcon className="h-4 w-4" />
              {site.phone}
            </a>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
