# Quantum Synergy Limited — Corporate Website

A single-page, responsive corporate website for **Quantum Synergy Limited**, a diversified
multi-sector conglomerate operating across all 10 states of the Republic of South Sudan
(Construction &amp; Engineering, Technology &amp; Digital, Media &amp; Advertisement,
Financial Services, and Oil &amp; Gas).

Built as plain, dependency-free HTML/CSS/JS so it deploys directly on GitHub Pages with
no build step.

## Structure

```
index.html            Single-page site: hero, about, divisions, leadership, CSR, contact
assets/css/style.css   All styling (navy & gold brand theme, responsive)
assets/js/main.js      Mobile nav, division tabs, scroll effects
assets/img/favicon.svg Brand favicon
```

## Run locally

No build tools required — just serve the folder:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploy

This repo already ships `.github/workflows/static.yml`, which publishes the repository
root to **GitHub Pages** on every push to `main`. Once merged, enable Pages under
**Settings → Pages → Source: GitHub Actions** (if not already enabled) and the site will
be live at `https://<owner>.github.io/<repo>/` — or attach a custom domain such as
`quantumsynergy.ss` / `nova-group.africa` under Pages settings.

## Editing content

All copy comes from the Quantum Synergy company profile deck. To update text, logos, or
contact details, edit the relevant section directly in `index.html`.
