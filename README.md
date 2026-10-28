# Mountain Movers Grading

Grading & site prep site for **mountainmoversgrading.com**. Built on the same
stack and design system as the Mountain Movers moving site
([timjpar/Mountain](https://github.com/timjpar/Mountain)), with content based on
its Grading page.

- Next.js 16 (App Router) with `output: "export"` — fully static HTML in `out/`
- Tailwind CSS 4, themes defined in `app/globals.css`
- Hosted on Vercel (project `grading`, team `tim-s-projects-4d`); pushing to
  `main` deploys to production

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Where the content lives

| File | What's in it |
| --- | --- |
| `app/site.ts` | Business name, domain, phone, lead email, states, equipment, GA id, nav |
| `app/services.ts` | Each service card and its `/services/[slug]` page |
| `app/grading.ts` | Process steps, home-site requirements, cost factors |
| `app/faqs.ts` | FAQ page (and the featured ones on the home page) |
| `app/serviceAreas.ts` | `/service-area/[state]` pages |
| `app/seo.ts` | schema.org JSON-LD (business, services, breadcrumbs) |

Photos live in `public/photos/`.

## Photo credits

Every photo except `logo.png` is a free stock photo, used under the
[Unsplash License](https://unsplash.com/license) or the
[Pexels License](https://www.pexels.com/license/). Both allow commercial use
with no attribution required; the sources are listed here so they're easy to
trace or replace with real job photos later.

| File | Source |
| --- | --- |
| `dozer-graded-pad.jpg` | [Harry Dona, Unsplash](https://unsplash.com/photos/yellow-and-black-heavy-equipment-on-gray-sand-during-daytime-AI2YT94sSeA) |
| `dozer-mountain-site.jpg` | [Siborey Sean, Unsplash](https://unsplash.com/photos/bulldozer-working-on-a-dirt-construction-site-1aAV98wetYY) |
| `land-clearing-dozer.jpg` | [Erik Morales, Unsplash](https://unsplash.com/photos/a-bulldozer-clearing-brush-in-a-wooded-area-kj7IE88UQt4) |
| `excavator-clearing.jpg` | [Roger Starnes Sr, Unsplash](https://unsplash.com/photos/a-yellow-excavator-sits-on-grass-near-trees-and-brush-GX2T0ZM9LiQ) |
| `dozer-wooded-site.jpg` | [Billy Freeman, Unsplash](https://unsplash.com/photos/yellow-and-black-heavy-equipment-on-brown-soil-tWptj-b6IqM) |
| `fill-dirt-dump-truck.jpg` | [Corey Willett, Unsplash](https://unsplash.com/photos/a-dump-truck-is-dumping-dirt-in-front-of-a-building-L6yvv2Byy3c) |
| `soil-compactor.jpg` | [Evan Porter, Unsplash](https://unsplash.com/photos/a-large-yellow-soil-compactor-working-on-a-dirt-path--uim3LxFj4A) |
| `motor-grader.jpg` | [Evan Porter, Unsplash](https://unsplash.com/photos/yellow-john-deere-road-grader-on-a-gravel-road-E5pSapSZe1I) |
| `gravel-driveway.jpg` | [Chandler Cruttenden, Unsplash](https://unsplash.com/photos/skid-steer-loader-on-a-gravel-road-in-autumn-forest-8EEH4AZ66AU) |
| `footings-aerial.jpg` | [Scott Blake, Unsplash](https://unsplash.com/photos/yellow-and-black-heavy-equipment-on-brown-field-during-daytime-DodJfxuH46I) |
| `smoky-mountains.jpg` | [Joshua Burdick, Unsplash](https://unsplash.com/photos/a-landscape-with-trees-and-hills-OqZ0j8PKe8Q) |
| `wooded-land.jpg` | [Amanda Kevin, Unsplash](https://unsplash.com/photos/a-forest-filled-with-lots-of-green-and-yellow-trees-N1LF_EZBsog) |
| `mountain-meadow.jpg` | [Angela Loria, Unsplash](https://unsplash.com/photos/green-grass-field-near-green-mountains-under-white-clouds-and-blue-sky-during-daytime-dk7v9MqV4X0) |
| `concrete-pour.jpg` | [Pexels](https://www.pexels.com/photo/construction-worker-smoothing-fresh-concrete-surface-37121398/) |
| `french-drain-trench.jpg` | [Pexels](https://www.pexels.com/photo/drainage-pipe-installation-in-elk-grove-trench-37627673/) |

## Search & AI optimization

Everything is generated from the files above, so it stays in sync with the pages:

- `/sitemap.xml` and `/robots.txt` (`app/sitemap.ts`, `app/robots.ts`). AI
  crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended…) are explicitly
  allowed.
- `/llms.txt` (`app/llms.txt/route.ts`) — plain-text summary for AI assistants.
- JSON-LD on every page: `GeneralContractor` + `WebSite` site-wide, plus
  `Service`, `FAQPage`, and `BreadcrumbList` where relevant.
- Canonical URLs on every page, all pointing at `site.url`.

## Quote form

The form posts straight from the visitor's browser to
[FormSubmit](https://formsubmit.co), which emails each request to
`site.leadEmail` (`sebastian.dusonchet@gmail.com`). See `app/submitForm.ts`. No
API key, no environment variable, no server code — same setup as amhatchery.

It posts from the browser on purpose: FormSubmit answers HTTP 403 to requests
from cloud infrastructure, so a Vercel function can't send it.

**Activation is scoped to recipient + origin.** Until the recipient clicks the
"Activate Form" link FormSubmit emails them, submissions are *rejected* and the
visitor sees a "please call 423-608-5805" notice instead of a false success.
Changing the domain or the lead email needs a fresh activation. To trigger the
activation email from any non-cloud machine:

```bash
curl -s -X POST "https://formsubmit.co/ajax/sebastian.dusonchet%40gmail.com" -H "Content-Type: application/json" -H "Origin: https://mountainmoversgrading.com" -d '{"Name":"Activation test","Message":"Activating the mountainmoversgrading.com quote form","_captcha":"false"}'
```

Spam handling is the hidden `_honey` field plus FormSubmit's own filtering.

## Domain

`mountainmoversgrading.com` is registered through Vercel and is the production
domain. `www` 308-redirects to the apex (see `vercel.json`).
