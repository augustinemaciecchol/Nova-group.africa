# Quantum Synergy Limited

Corporate website for Quantum Synergy Limited — a diversified multi-sector
conglomerate operating across all 10 states of the Republic of South Sudan,
spanning Construction, Technology, Media, Financial Services, and Oil & Gas.

Built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion.
The visual identity is a **"Site Survey"** system inspired by the group's own
trade — construction, engineering, and oil & gas surveying: cyanotype
blueprint-navy panels, dimension-line rules, coordinate stamps, and a
survey-pin network diagram in the hero, paired with a warm paper base,
terracotta (laterite) and brass accents, and the brand's teal carried over
from the Quantum Synergy mark itself.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Project Structure

- `src/app` — routes, layout, global styles
- `src/components` — page sections (Hero, Divisions, Leadership, Contact, …)
- `src/lib/data.ts` — company content (divisions, leadership, CSR, contact info)

## Build

```bash
npm run build
```

`next.config.ts` sets `output: "export"`, so `npm run build` produces a
static site in `./out`, ready to serve from any static host. The GitHub
Actions workflow at `.github/workflows/static.yml` builds and deploys this
`out` directory to GitHub Pages on every push to `main`.
