# Dado IT — glassmorphism website

A standalone, static marketing site for a fictional IT services company
("Dado IT"), built in the glassmorphism style: translucent frosted-glass
panels, blurred gradient orbs, and a live-dashboard hero that ties the
visual language back to the product story ("infrastructure you can see
through").

Plain HTML/CSS/JS — no build step, no framework, no dependencies. This
folder is self-contained and independent of the rest of this repository
(which hosts the separate Quantum Synergy Limited Next.js site).

## Use it

Open `index.html` directly in a browser, or serve the folder with any
static file server:

```bash
npx serve dado-it
# or
python3 -m http.server --directory dado-it 8080
```

## Structure

- `index.html` — markup and copy for every section (header, hero, services,
  process, why-us, testimonial, CTA, contact, footer)
- `styles.css` — design tokens (color/type/layout) and all styling,
  including the glassmorphism primitives (`.glass-card`) and background
  atmosphere (blurred gradient orbs + grid)
- `script.js` — mobile nav toggle, hero parallax tilt on the glass panels,
  scroll reveal, and a client-side-only contact form handler

## Customizing

- Swap colors/fonts in the `:root` token block at the top of `styles.css`.
- Company name, copy, and contact details live directly in `index.html`.
- The contact form does not send anywhere yet — wire `script.js`'s submit
  handler to a backend or a form service (e.g. Formspree) before using it
  for real leads.

## Note on "UI/UX Pro Max" plugin

This site was hand-built with HTML/CSS/JS and does not use a Figma/plugin
pipeline — no such plugin is available in this environment. If you have a
specific plugin's export (assets, tokens, or a Figma file) you'd like this
matched to, share it and the design can be adjusted to fit.
