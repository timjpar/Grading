import type { Metadata } from "next";
import { processSteps, homeownerChecklist } from "../grading";
import { Container, SectionHeading, Button } from "../components/ui";
import { PageHero } from "../components/PageHero";
import { CtaBand, EquipmentChips } from "../components/sections";
import { ClipboardIcon } from "../components/icons";

export const metadata: Metadata = {
  title: "Our Grading Process",
  description:
    "How a grading job runs with Mountain Movers — site walk and quote, land clearing, fill and compaction, grading and drainage, and footers, driveways, and concrete.",
};

const stepImages = [
  { src: "/photos/lot-wooded.jpg", alt: "A raw, wooded lot before any site work" },
  { src: "/photos/g-dozer.jpg", alt: "Walking a mountain site with the dozer on a fresh gravel road" },
  { src: "/photos/ridge-pad-dusk.jpg", alt: "A ridge-top site freshly cleared of trees and brush" },
  { src: "/photos/grade-gravel-pad.jpg", alt: "A compacted gravel pad" },
  { src: "/photos/setup-field-dusk.jpg", alt: "A finished, graded dirt pad with a home set on it" },
  { src: "/photos/setup-footers.jpg", alt: "Concrete footers laid out on a graded red-clay site" },
];

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Process"
        title="How a grading job works"
        subtitle="Every site is different, but the work follows the same order: walk it, clear it, build it up, grade it, and finish it."
        image="/photos/ridge-set-dusk.jpg"
      />

      {/* Step nav */}
      <section className="border-b border-stone-200 bg-stone-50">
        <Container className="flex flex-wrap justify-center gap-2 py-5">
          {processSteps.map((s) => (
            <a
              key={s.n}
              href={`#step-${s.n}`}
              className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-semibold text-forest-800 shadow-sm transition-colors hover:border-forest-600/40 hover:text-forest-700"
            >
              <span className="text-forest-600">{s.n}.</span> {s.title}
            </a>
          ))}
        </Container>
      </section>

      {processSteps.map((s, i) => (
        <section
          key={s.n}
          id={`step-${s.n}`}
          className="scroll-mt-20 border-b border-stone-100 bg-white py-16"
        >
          <Container>
            <div
              className={`grid items-center gap-10 lg:grid-cols-2 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <div>
                <div className="flex items-center gap-4">
                  <span className="font-display flex h-14 w-14 flex-none items-center justify-center rounded-xl bg-forest-700 text-2xl font-bold text-white">
                    {s.n}
                  </span>
                  <h2 className="font-display text-3xl font-bold uppercase leading-none tracking-tight text-stone-900 sm:text-4xl">
                    {s.title}
                  </h2>
                </div>
                <p className="mt-5 text-lg leading-relaxed text-stone-700">{s.body}</p>
                {s.n === "01" && (
                  <div className="mt-6 rounded-xl border border-action/40 bg-action/10 p-5">
                    <p className="font-bold text-stone-900">
                      Squared away before we dig:
                    </p>
                    <ul className="mt-3 space-y-2">
                      {homeownerChecklist.map((item) => (
                        <li key={item} className="flex gap-2.5 text-sm text-stone-700">
                          <ClipboardIcon className="mt-0.5 h-4 w-4 flex-none text-forest-600" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {s.n === "04" && (
                  <p className="mt-5 rounded-lg border-l-4 border-action bg-action/10 p-4 text-stone-800">
                    Fill dirt must <strong>always</strong> be compacted.
                  </p>
                )}
                {s.n === "05" && (
                  <div className="mt-6">
                    <Button href="/mobile-home-pads" variant="secondary" withArrow>
                      Home site requirements
                    </Button>
                  </div>
                )}
              </div>
              <div className="overflow-hidden rounded-2xl shadow-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={stepImages[i].src}
                  alt={stepImages[i].alt}
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </Container>
        </section>
      ))}

      <section className="bg-cream bg-topo py-20">
        <Container>
          <SectionHeading
            eyebrow="The right machine"
            title="Equipment for every stage"
            subtitle="From land clearing to finish grade, we bring the right machine for the job — so the work gets done efficiently, precisely, and with as little disruption to your property as possible."
          />
          <div className="mt-8 flex justify-center">
            <EquipmentChips label="" />
          </div>
        </Container>
      </section>

      <CtaBand allPhones />
    </>
  );
}
