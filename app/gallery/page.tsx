import type { Metadata } from "next";
import { Container } from "../components/ui";
import { PageHero } from "../components/PageHero";
import { CtaBand } from "../components/sections";

export const metadata: Metadata = {
  title: "Grading & Land Clearing Photos",
  description:
    "Photos of grading, land clearing, and site prep work by Mountain Movers Grading across East Tennessee, Western North Carolina, and beyond.",
  alternates: { canonical: "/gallery" },
};

const photos: { src: string; alt: string }[] = [
  { src: "/photos/setup-footers.jpg", alt: "Graded red-clay site with footers laid out and a dozer on site" },
  { src: "/photos/g-dozer.jpg", alt: "Dozer on a freshly graded gravel mountain road" },
  { src: "/photos/ridge-pad-dusk.jpg", alt: "Cleared ridge-top pad with mountain views at dusk" },
  { src: "/photos/grade-gravel-pad.jpg", alt: "Compacted gravel building pad on a wooded lot" },
  { src: "/photos/setup-field-dusk.jpg", alt: "Finished graded dirt pad at sunset" },
  { src: "/photos/lot-wooded.jpg", alt: "Wooded lot before clearing" },
  { src: "/photos/setup-piers.jpg", alt: "Hillside site graded and sloped for drainage" },
  { src: "/photos/setup-doublewide.jpg", alt: "Freshly graded red-clay home site" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Real sites, real dirt"
        subtitle="A look at the land we've cleared, graded, and prepped across the mountains."
        image="/photos/ridge-pad-dusk.jpg"
      />

      <section className="py-16">
        <Container>
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
            {photos.map((photo) => (
              <figure
                key={photo.src}
                className="overflow-hidden rounded-xl border border-stone-200 bg-stone-100 shadow-sm break-inside-avoid"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full object-cover transition-transform duration-300 hover:scale-[1.03]"
                  loading="lazy"
                />
              </figure>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand title="Your site could be next" />
    </>
  );
}
