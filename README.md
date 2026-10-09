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
