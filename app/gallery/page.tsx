import type { Metadata } from "next";
import { Container } from "../components/ui";
import { PageHero } from "../components/PageHero";
import { CtaBand } from "../components/sections";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Real grading, clearing, and site prep work by Mountain Movers LLC across the mountains of Tennessee, North Carolina, and beyond.",
};

const photos: { src: string; alt: string }[] = [
  { src: "/photos/setup-footers.jpg", alt: "Graded red-clay site with footers laid out and a dozer on site" },
  { src: "/photos/g-dozer.jpg", alt: "Dozer on a freshly graded gravel mountain road" },
  { src: "/photos/ridge-pad-dusk.jpg", alt: "Cleared ridge-top pad with mountain views at dusk" },
  { src: "/photos/grade-gravel-pad.jpg", alt: "Compacted gravel pad with a home staged on it" },
  { src: "/photos/ridge-set-dusk.jpg", alt: "Graded ridge access road with a home arriving" },
  { src: "/photos/setup-field-dusk.jpg", alt: "Finished dirt pad with a home set at sunset" },
  { src: "/photos/lot-wooded.jpg", alt: "Wooded lot before clearing" },
  { src: "/photos/setup-piers.jpg", alt: "Hillside site graded and sloped for drainage" },
  { src: "/photos/setup-doublewide.jpg", alt: "Double-wide set on a freshly graded site" },
  { src: "/photos/move-through-trees.jpg", alt: "Home brought through a freshly cleared wooded site" },
  { src: "/photos/g-skidsteer-set.jpg", alt: "Dirt drive cut in to a home site" },
  { src: "/photos/g-row-homes.jpg", alt: "Row of homes on graded, seeded sites" },
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
