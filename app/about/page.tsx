import type { Metadata } from "next";
import { site } from "../site";
import { Container, SectionHeading } from "../components/ui";
import { PageHero } from "../components/PageHero";
import { CtaBand, EquipmentChips } from "../components/sections";
import { ShieldIcon, MapPinIcon, CheckIcon, TruckIcon } from "../components/icons";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Mountain Movers LLC is a family-owned grading and site prep company based in Newport, Tennessee — licensed, bonded, and insured across several states.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A family-owned crew that knows dirt"
        image="/photos/ridge-pad-dusk.jpg"
      />

      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-lg leading-relaxed text-stone-700">
            <p>
              We are a family-owned business based in{" "}
              <strong className="text-stone-900">Newport, Tennessee</strong>, but
              often traveling as far as <strong className="text-stone-900">200
              miles</strong>. We know our business and everything it takes to get
              the job done safely.
            </p>
            <p className="mt-5">
              We handle every aspect of getting your property ready for
              construction or improvement — clearing, fill, compaction, grading,
              drainage, driveways, and concrete — so you don&apos;t have to hire
              three contractors and hope they get it right.
            </p>
            <p className="mt-5">
              We are <strong className="text-stone-900">licensed, bonded, and
              insured</strong> in several states — not just Tennessee — so your
              property is protected from the first tree down to the final grade.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
            {[
              { icon: MapPinIcon, label: "Based in Newport, TN" },
              { icon: ShieldIcon, label: "Licensed · Bonded · Insured" },
              { icon: CheckIcon, label: "Family-owned & operated" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-xl border border-stone-200 bg-stone-50 p-4 text-sm font-semibold text-forest-800"
              >
                <Icon className="h-6 w-6 flex-none text-forest-600" />
                {label}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-stone-50 py-20">
        <Container>
          <SectionHeading
            eyebrow="Meet the team"
            title="The people on your site"
            subtitle="When you call Mountain Movers, you talk to the owners — the same people running the equipment."
          />
          <div className="mx-auto mt-12 grid max-w-2xl gap-8 sm:grid-cols-2">
            {site.team.map((member) => (
              <figure
                key={member.name}
                className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={member.photo}
                  alt={member.name}
                  className="aspect-[4/5] w-full object-cover"
                  loading="lazy"
                />
                <figcaption className="p-5 text-center">
                  <span className="block text-lg font-bold text-stone-900">
                    {member.name}
                  </span>
                  <span className="block text-sm text-forest-600">
                    {member.role}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/photos/g-dozer.jpg"
                alt="Our dozer on a freshly graded mountain road"
                className="aspect-[4/3] h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <SectionHeading
                align="left"
                eyebrow="Our equipment"
                title="The right machine for the job"
                subtitle="Our team has years of hands-on experience with the right machines to get the job done efficiently and precisely — minimizing disruption to your property."
              />
              <div className="mt-6">
                <EquipmentChips label="" />
              </div>
              <div className="mt-8 flex items-start gap-3 rounded-xl border border-stone-200 bg-stone-50 p-4 text-sm text-stone-700">
                <TruckIcon className="h-5 w-5 flex-none text-forest-600" />
                <span>
                  We also move and set mobile homes.{" "}
                  <a href={site.movingSite} className="font-bold text-forest-700 underline hover:text-forest-800">
                    Visit our moving &amp; setup site
                  </a>
                  .
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand title="Have a site that needs work?" allPhones />
    </>
  );
}
