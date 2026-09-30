"use client";

import { useEffect } from "react";
import { site } from "../site";
import { Container, SectionHeading } from "./ui";
import { Stars, GoogleIcon, ArrowIcon } from "./icons";

// Real excerpts from his Google listing, shown until the live widget is wired up.
const fallbackReviews = [
  {
    quote:
      "This crew worked flawlessly! Very professional, hardworking, and get the job done. You can count on them to figure out the logistics and get it done right.",
    where: "Google review",
  },
  {
    quote:
      "Had the absolute best experience. Super professional and very easy to get in touch with. A great group of people.",
    where: "Google review",
  },
  {
    quote:
      "Extremely hard working and very dedicated — they don't stop till the work is done. Highly recommend.",
    where: "Google review",
  },
];

export function GoogleReviews() {
  const widgetId = site.googleReviewsWidgetId;

  useEffect(() => {
    if (!widgetId) return;
    const id = "featurable-embed-script";
    if (document.getElementById(id)) return;
    const s = document.createElement("script");
    s.id = id;
    s.src = "https://featurable.com/assets/js/embed.js";
    s.async = true;
    document.body.appendChild(s);
  }, [widgetId]);

  return (
    <section className="bg-cream bg-topo py-20">
      <Container>
        <SectionHeading
          eyebrow="Reviews"
          title="What our customers say on Google"
          subtitle="Real reviews from customers across the mountains."
        />

        {widgetId ? (
          <div className="mt-12">
            <div id={`featurable-${widgetId}`} data-featurable-async />
          </div>
        ) : (
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {fallbackReviews.map((review, i) => (
              <figure
                key={i}
                className="flex flex-col rounded-xl border border-stone-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <Stars className="text-action" />
                  <GoogleIcon className="h-5 w-5 text-stone-400" />
                </div>
                <blockquote className="mt-4 flex-1 text-stone-700">
                  “{review.quote}”
                </blockquote>
                <figcaption className="mt-5 border-t border-stone-100 pt-4 text-sm text-stone-500">
                  {review.where}
                </figcaption>
              </figure>
            ))}
          </div>
        )}

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={site.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-stone-300 bg-white px-5 py-3 text-sm font-bold text-stone-800 shadow-sm transition-colors hover:border-forest-600/40 hover:text-forest-700"
          >
            <GoogleIcon className="h-4 w-4" />
            See all reviews on Google
          </a>
          <a
            href={site.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-action px-5 py-3 text-sm font-bold text-stone-900 shadow-sm transition-colors hover:bg-action-dark"
          >
            Leave us a review
            <ArrowIcon className="h-4 w-4" />
          </a>
        </div>
      </Container>
    </section>
  );
}
