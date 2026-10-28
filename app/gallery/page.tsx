import type { Metadata } from "next";
import { Container } from "../components/ui";
import { PageHero } from "../components/PageHero";
import { CtaBand } from "../components/sections";

export const metadata: Metadata = {
  title: "Grading & Land Clearing Photos",
  description:
    "Photos of the grading, land clearing, and site prep work Mountain Movers Grading handles across East Tennessee, Western North Carolina, and beyond.",
  alternates: { canonical: "/gallery" },
};

const photos: { src: string; alt: string }[] = [
  { src: "/photos/dozer-mountain-site.jpg", alt: "Dozer grading a red-clay site in the mountains" },
  { src: "/photos/land-clearing-dozer.jpg", alt: "Dozer clearing brush and small trees from a wooded lot" },
  { src: "/photos/fill-dirt-dump-truck.jpg", alt: "Dump truck unloading fill dirt while a dozer spreads it" },
  { src: "/photos/gravel-driveway.jpg", alt: "New gravel driveway cut through an autumn forest" },
  { src: "/photos/dozer-graded-pad.jpg", alt: "Dozer on a freshly graded building pad" },
  { src: "/photos/french-drain-trench.jpg", alt: "Drain pipe bedded in gravel in a drainage trench" },
  { src: "/photos/excavator-clearing.jpg", alt: "Excavator clearing brush from a lot" },
  { src: "/photos/concrete-pour.jpg", alt: "Leveling a freshly poured concrete slab" },
  { src: "/photos/footings-aerial.jpg", alt: "Aerial view of footings on a graded building site" },
  { src: "/photos/soil-compactor.jpg", alt: "Soil compactor rolling a graded base" },
  { src: "/photos/dozer-wooded-site.jpg", alt: "Dozer pushing dirt on a wooded site" },
  { src: "/photos/motor-grader.jpg", alt: "Motor grader cutting a finish grade" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Clearing, grading & site prep"
        subtitle="A look at the kind of work we do every day — from raw land to a solid, build-ready base."
        image="/photos/dozer-wooded-site.jpg"
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
