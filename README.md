# Marian Ohwerhi — Portfolio

A personal portfolio website for a Healthcare Data Analyst and Registered
Mental Health Nurse, built to showcase Power BI, SQL, and Excel project work
to recruiters in the UK healthcare and healthtech sector.

**Live site:** `https://marianohwerhi.github.io/` (once deployed — see below)

## Tech stack

Built entirely from scratch, on purpose:

- HTML5 (semantic markup, no template framework)
- CSS3 (custom properties, Grid, Flexbox — no Bootstrap/Tailwind)
- Vanilla JavaScript (no React, no build step, no dependencies)
- Hosted on GitHub Pages

No frameworks or website builders were used. Every line is hand-written and
commented.

## Project status

- [x] Milestone 1 — Project scaffold, design system (CSS tokens), Home page
- [x] Milestone 2 — Work hub + individual case study pages
- [x] Milestone 3 — About, Insights, Contact pages
- [x] Milestone 4 — Assets (real screenshots, favicon, social preview image), SEO (sitemap, robots.txt, structured data)
- [ ] Milestone 5 — Deploy to GitHub Pages
- [ ] Outstanding — add `assets/documents/resume.pdf` once the finalised CV is ready, then update the two "Résumé"/"Download CV" links currently pointing at LinkedIn (marked with `TODO` comments in `index.html`)

## Folder structure

```
portfolio-website/
├── index.html                          Home page
├── work.html                            Case study hub
├── about.html                           Full bio + skills + education
├── insights.html                        Original written article
├── contact.html                         Contact details
├── robots.txt                           Crawler rules + sitemap pointer
├── sitemap.xml                          Full page list for search engines
├── .nojekyll                            Tells GitHub Pages to skip Jekyll processing
├── case-studies/
│   ├── hiv-treatment-effectiveness.html
│   └── hospital-patient-dashboard.html
├── assets/
│   ├── css/
│   │   ├── variables.css                Design tokens: every colour, spacing and
│   │   │                                 font-size value used site-wide
│   │   ├── base.css                      CSS reset + base element styling +
│   │   │                                 accessibility helpers
│   │   ├── layout.css                    Header/nav, footer, section grids
│   │   └── components.css                Buttons, badges, cards, callouts, meta lists
│   ├── js/
│   │   └── main.js                       Mobile nav toggle + small enhancements
│   ├── images/
│   │   ├── favicon.svg                   Primary favicon
│   │   ├── favicon-32.png / favicon-16.png / apple-touch-icon.png
│   │   ├── social-preview.png            Open Graph share image (1200×630)
│   │   ├── headshot.jpg                  Real photo, used on About
│   │   └── projects/                     Real project screenshots, optimised for web
│   └── documents/                        resume.pdf goes here once finalised
├── .gitignore
└── README.md                             You are here
```

## Design system summary

Full rationale was worked through before any code was written. Quick
reference:

| Token | Value | Use |
|---|---|---|
| Canvas | `#ffffff` | Background |
| Ink | `#14181f` | Headlines, primary text |
| Slate | `#4b5563` | Body copy |
| Teal (accent) | `#0c6b54` | Links, primary CTA, badges |
| Violet (spotlight) | `#5b4fe0` | Reserved for one flagged finding per case study |

Typeface: **Inter**, weights 400/500/600 only. Type scale uses `clamp()` so
text sizes fluidly between mobile and desktop rather than jumping at fixed
breakpoints.

## Local development

No build step is required — this is a static site.

1. Clone the repository.
2. Open `index.html` directly in a browser, **or** serve it locally so
   relative paths behave exactly as they will in production:
   ```bash
   # Python 3
   python3 -m http.server 8000

   # Node (if you have it)
   npx serve .
   ```
3. Visit `http://localhost:8000`.

## Deployment (GitHub Pages)

1. Push this repository to GitHub.
2. In the repository, go to **Settings → Pages**.
3. Under **Source**, select the `main` branch and the `/ (root)` folder.
4. Save — GitHub Pages will build and publish automatically within a few
   minutes at `https://<your-username>.github.io/<repository-name>/`.
5. If using a custom domain, add a `CNAME` file at the project root
   containing the domain name, and configure DNS accordingly.

## Accessibility notes

- Semantic landmarks (`header`, `nav`, `main`, `footer`) throughout.
- A visually-hidden "Skip to main content" link is the first focusable
  element on every page.
- All interactive elements have a visible `:focus-visible` outline —
  never removed, only restyled.
- Colour combinations are checked against WCAG AA contrast minimums.
- `prefers-reduced-motion` is respected globally.
- Every image will carry descriptive `alt` text (added in Milestone 4).

## Browser support

Built on standard, well-supported CSS and JS (custom properties, Grid,
`clamp()`, `matchMedia`) — no vendor-specific hacks required for current
versions of Chrome, Firefox, Safari, and Edge.
