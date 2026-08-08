# Quantum Synergy Limited

Corporate website for Quantum Synergy Limited — a diversified multi-sector
conglomerate operating across all 10 states of the Republic of South Sudan,
spanning Construction, Technology, Media, Financial Services, and Oil & Gas.

Built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion.
The visual language blends **glassmorphism** (translucent, blurred surfaces)
with **neomorphism** (soft dual-shadow, extruded surfaces) on a dark navy
base with the brand's teal/blue/navy accent palette.

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
