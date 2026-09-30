import { Container } from "./ui";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image: string;
}) {
  return (
    <section className="relative overflow-hidden bg-forest-900 text-white">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/85 to-forest-900/60" />
      <Container className="relative py-16 sm:py-20">
        {eyebrow && (
          <span className="eyebrow-tab inline-block bg-action px-2.5 py-1 text-xs text-forest-950">
            {eyebrow}
          </span>
        )}
        <h1 className="font-display mt-4 max-w-3xl text-4xl font-bold uppercase leading-[0.95] tracking-tight drop-shadow sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-lg text-forest-100 drop-shadow">
            {subtitle}
          </p>
        )}
      </Container>
    </section>
  );
}
