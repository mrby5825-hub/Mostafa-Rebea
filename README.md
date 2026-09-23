# Mostafa Rebea Ahmed — Portfolio

A premium, production-ready portfolio for **Mostafa Rebea Ahmed** — Data Analyst, Power BI
Developer, and Machine Learning Practitioner. Built with React 19, TypeScript, Tailwind CSS,
and Framer Motion.

Every fact, stat, project, and certificate on this site comes directly from the resume,
portfolio CV, and dashboard/notebook screenshots supplied for this project — nothing is
invented. Where a case study didn't have full detail yet (a few of the "Additional Projects"),
the page says so explicitly with a "detail to be added" placeholder instead of guessing.

## Tech stack

- **React 19** + **TypeScript** + **Vite**
- **Tailwind CSS** (custom design tokens — see `tailwind.config.ts`)
- **Framer Motion** for page transitions, reveals, and micro-interactions
- **React Router v6** for client-side routing
- **React Icons** for iconography
- ESLint + Prettier for code quality

## Folder structure

```
src/
  animations/     Shared Framer Motion variants
  components/     Reusable UI building blocks (Navbar, ProjectCard, etc.)
  constants/      All resume/project content (data.ts) + GitHub link registry (links.ts)
  hooks/          useTheme, useScrollProgress, useCountUp
  layouts/        MainLayout (navbar + footer + scroll progress + back-to-top)
  pages/          One file per route
  types/          Shared TypeScript interfaces
  utils/          Small helpers (cn — class name joiner)
public/
  images/         Real project screenshots, certificates, and profile photo
  cv/             Downloadable resume PDF
```

## Adding GitHub links per project

Open `src/constants/links.ts`:

```ts
export const PROJECT_LINKS: Record<string, string> = {
  olist: '',        // <- paste the repo URL here
  telcoChurn: '',
  chinook: '',
  // ...
};
```

The moment a key has a non-empty URL, the **GitHub** button appears automatically on that
project's card and case-study modal. No other file needs to change.

## Running locally

```bash
npm install
npm run dev        # http://localhost:5173
```

## Building for production

```bash
npm run build       # type-checks with tsc, then builds with Vite into dist/
npm run preview      # serve the production build locally to sanity-check it
```

## Linting

```bash
npm run lint
```

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Deploy — no environment variables are required for the base site.

Alternatively, from the CLI:

```bash
npm i -g vercel
vercel
```

## Wiring up the contact form

The contact form (`src/pages/Contact.tsx`) currently simulates a send so the UI and validation
can be reviewed without any external account. To make it send real email, choose one:

**EmailJS**
```bash
npm install @emailjs/browser
```
```ts
import emailjs from '@emailjs/browser';
await emailjs.send(SERVICE_ID, TEMPLATE_ID, formValues, PUBLIC_KEY);
```

**Formspree**
```ts
await fetch('https://formspree.io/f/your-form-id', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formValues),
});
```

Replace the `submitContactForm` function in `Contact.tsx` with whichever you choose.

## Notes on a few "extra features" from the brief

To keep the codebase honest and maintainable, a couple of items from the original feature
wish-list were intentionally scoped out rather than faked:

- **Custom cursor** and **command palette** were left out — they add real complexity for
  limited benefit on a content-first portfolio, and a half-working version would hurt more
  than help. Both can be added cleanly later (e.g. `cmdk` for a command palette).
- **Full PWA (service worker, offline caching)** — the manifest and icon are in place;
  a service worker can be added with `vite-plugin-pwa` when there's an actual offline use case.
- The **contact form** submits to a stub function by design (see above) since it needs a real
  EmailJS/Formspree account tied to your email to actually send mail.

Everything else in the brief — all 8 pages, dark/light mode, scroll progress, back-to-top,
loading screen, filtering/search, project modals, animated counters, SEO meta/OG/structured
data, sitemap, robots.txt — is implemented and verified with a clean `tsc` and `vite build`.
