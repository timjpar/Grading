# Mountain Movers — Grading & Site Prep

Marketing site for Mountain Movers LLC's grading and site prep work. Sister site
to the mobile home moving site ([timjpar/Mountain](https://github.com/timjpar/Mountain)),
built on the same stack and design system.

- Next.js 16 (App Router) with `output: "export"` — fully static HTML in `out/`
- Tailwind CSS 4, themes defined in `app/globals.css`
- Hosted on Vercel (settings in `vercel.json`)

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Where the content lives

| File | What's in it |
| --- | --- |
| `app/site.ts` | Business name, phones, email, states, equipment, GA id, nav |
| `app/services.ts` | Each service card and its `/services/[slug]` page |
| `app/grading.ts` | Process steps, home-site code requirements, price list |
| `app/faqs.ts` | FAQ page (and the featured ones on the home page) |
| `app/serviceAreas.ts` | `/service-area/[state]` pages |

Photos live in `public/photos/`.

## Deploy

Pushing to `main` deploys to production on Vercel.
