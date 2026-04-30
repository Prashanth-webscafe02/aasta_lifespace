## Aasta Lifespace — Luxurious Scrollable Site

A single-page, story-driven website inspired by aasta-lifespace.vercel.app, elevated with refined typography, generous whitespace, slow cinematic reveals, and an editorial feel suited to a 40-year-old luxury construction firm.

### Brand & Design Language

- **Logo**: uploaded "Aasta Lifespace" wordmark + bird mark, placed top-left, persistent on the side rail.
- **Palette**: warm ivory background (`#FBF9F4`), deep charcoal text (`#1A1A1A`), signature copper/terracotta accent (`#B86A3D` — taken from the logo underline & "Defined" word), soft taupe muted tones.
- **Typography**: serif display (Cormorant Garamond / Fraunces) for headlines; clean sans (Inter) for body; small uppercase tracked labels for section numbers ("• 01 — Origin").
- **Motion**: fade-up on scroll, parallax on hero & project images, subtle image scale on hover, slow easing.

### Layout

Fixed left side rail (desktop) holds the logo + numbered nav (01–08). Main content scrolls on the right. Mobile collapses the rail into a top bar with a hamburger sheet.

```text
┌─────────┬──────────────────────────────┐
│  LOGO   │  HERO (full-bleed image)     │
│         ├──────────────────────────────┤
│ 01 Home │  ABOUT / ORIGIN              │
│ 02 About│  SERVICES                    │
│  ...    │  PROJECTS (grid)             │
│ 08 Cont │  APPROACH (6 steps)          │
│         │  PRICING (3 tiers)           │
│         │  PHILOSOPHY                  │
│         │  CONTACT / FOOTER            │
└─────────┴──────────────────────────────┘
```

### Sections

1. **Hero** — Full-viewport luxury architectural image, vignette, headline "Built on Legacy. *Defined* by Precision." with the accent word in copper italic serif. Subtle scroll cue.
2. **Origin / About** — Section label "• 01 — Origin", large serif heading "A legacy of building, thoughtfully evolved.", three paragraphs, a 2-image collage (portrait + landscape) revealing on scroll.
3. **Practice / Services** — "• 02 — Practice", three offerings (Construction, Design & Build, Turnkey Interiors) as elegant cards with hairline dividers and number indices.
4. **Selected Work / Projects** — "• 03 — Selected Work", asymmetric staggered image grid of 5 projects (LW Residence, JM House, KM Residence, JM House, San Francisco) with overlay numbers and names; hover zoom.
5. **Methods / Approach** — "• 04 — Methods", vertical zig-zag timeline of 6 steps (Understanding, Design, Planning, Execution, Refinement, Handover) with large numerals and short descriptions.
6. **Engagements / Pricing** — "• 05 — Engagements", three tiers (Essential ₹1,850, Signature ₹2,650 — marked "Most chosen", Atelier — On request) as tall minimal cards with check-mark feature lists and a "Begin a conversation" CTA.
7. **Philosophy** — "• 06 — Philosophy", two-column layout: text (Materials, Light, Longevity) beside a tall atmospheric image.
8. **Contact / Footer** — "• 07 — Let's Build", oversized serif "Start your project." + simple inquiry form (name, email, project type, message) and footer with logo, address placeholder, social links, copyright.

### Imagery

Use high-quality Unsplash architectural/nature photography (luxury homes, warm interiors, lush landscapes) consistent with the reference's mood. All images lazy-loaded.

### Technical Details

- React + Vite + Tailwind, single `Index.tsx` composed of small section components under `src/components/sections/`.
- Logo copied to `src/assets/aasta-logo.png` and imported as ES module.
- Design tokens (ivory bg, copper accent, serif display) added to `src/index.css` (HSL vars) and `tailwind.config.ts` (`font-display`, `font-sans`, color tokens).
- Google Fonts (Fraunces + Inter) loaded via `index.html`.
- Scroll animations via a tiny custom `useInView` hook + Tailwind transition classes (no heavy libs).
- Smooth-scroll anchor navigation; active section highlight in the side rail via IntersectionObserver.
- Fully responsive (side rail → top bar < lg breakpoint).
- Form is non-functional UI (toast on submit) — backend can be added later if desired.

### Out of Scope (for this pass)

- CMS / dynamic project data
- Backend form submission / email
- Multi-page routing (everything on `/`)
