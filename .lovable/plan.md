# Content Rewrite + New Sections

All work is in `src/pages/Index.tsx` (plus small new components for new sections). Visual design, layout grids, animations, fonts, and the existing cost estimator stay untouched — only copy and section structure change.

## 1. Copy replacements (existing sections)

**Hero**
- Headline: "Building Dream Homes Since 1984" with italic accent on "Dream Homes"
- Supporting paragraph: "From architectural design and construction to complete interiors, Aasta Lifespace creates homes, villas, and commercial spaces that are thoughtfully designed, expertly built, and made to last for generations."
- Sub-line: "40+ years of experience. End-to-end execution. One trusted team for Architecture, Construction, Interiors, and Project Management."
- Add two CTA buttons under the scroll cue: **Start Your Project** (→ #contact) and **View Our Work** (→ #projects). Styled to match the existing ivory/copper hero palette (outline + filled copper), not generic shadcn buttons.

**About — "Four Decades of Building Trust"**
- New headline with italic on "Building Trust".
- Replace the three paragraphs with the four provided paragraphs (1984 origin, multidisciplinary practice, four decades helping families/businesses/investors, closing commitment statement).

**Services — "Everything Your Project Needs. Under One Roof."**
- Expand `SERVICES` from 3 to 4 items: Architecture & Design, Construction, Design & Build, Turnkey Interiors.
- Each item gets its description plus a sub-list of deliverables (e.g. Architectural Design, Space Planning, 3D Visualization…). Sub-items render as a tight copper-bulleted list under the description, keeping the existing numbered row layout.

**Projects — "Real Spaces. Real Stories."**
- New heading + intro paragraph.
- Add an "Explore Projects" text-link CTA below the grid (no image changes — current 5-image layout stays exactly as rearranged).

**Approach → "Your Journey With Aasta"**
- Replace the six STEPS with the new titles/bodies: Discovery, Design, Planning, Construction, Interior Completion, Handover.

**Philosophy — "Spaces Carefully Brought To Life"**
- New intro paragraph.
- Replace the three PILLARS with: Natural Light & Ventilation, Timeless Design, Built To Last (with new bodies).

**Contact — "Let's Build Something Meaningful Together"**
- New headline + supporting paragraph.
- Submit button label → "Start Your Project Today".

**Pricing section** — copy unchanged (estimator stays). Only existing intro line stays as-is.

## 2. New sections (inserted in this order)

```text
Hero → About → Vision (new) → Services → WhyChoose (new) → Projects
→ Stats (new) → Approach → Founder (new) → Pricing → Philosophy
→ Testimonials (new) → FAQs (new) → Contact
```

Each new section reuses existing primitives (`Reveal`, `FloatTitle`, `SectionLabel`) and the same px-6/lg:px-20 + py-32/lg:py-44 rhythm. Section index labels are renumbered 01–12 to stay consistent with the existing numbering system.

- **Vision** — short centered statement section on ivory: "Creating Spaces That Enrich Life" + two-line body.
- **Why Choose Aasta** — 6-cell grid on `bg-ivory-deep`: 40+ Years, End-to-End Execution, Transparent Process, Quality First, Personalized Design, On-Time Delivery. Each cell = copper number/icon + title + body, matching the Approach card treatment but lighter.
- **Stats** — full-width dark band (`bg-ink`) with 4 large display-font figures: 40+ Years, 500+ Projects, Sq.Ft. Delivered, Cities Served. The two "XX" values will be left as editable placeholders ("XX Mn", "XX") with a TODO comment so the user can supply real numbers.
- **Founder's Message** — split layout: portrait placeholder image on the left (uses an existing about image as fallback so no new asset is required), personal note on the right with italic signature line.
- **Testimonials** — 3-up grid of cards on ivory with placeholder quotes/names/locations clearly marked as samples (user can replace). Each card: short quote, name, project type.
- **FAQs** — accordion using the existing `@/components/ui/accordion` shadcn primitive, themed to the site (no purple/indigo defaults — copper accents, ink text, hairline separators). 5 questions from the brief; answers written in the brand voice.

## 3. SideRail nav

`src/components/SideRail.tsx` currently lists the section anchors. Update it to include the new sections (or a curated subset to avoid overflow): About, Services, Projects, Approach, Pricing, Philosophy, FAQs, Contact. Vision/WhyChoose/Stats/Founder/Testimonials remain scrollable but aren't added to the rail to keep it short. (Will confirm by viewing the file before editing.)

## 4. Technical notes

- No new dependencies. Accordion + existing tokens cover all UI.
- All new copy goes through `FloatTitle` for the left-to-right title animation already established.
- Section IDs added: `#vision`, `#why`, `#stats`, `#founder`, `#testimonials`, `#faqs` for anchor links.
- SEO: update `index.html` `<title>` and `<meta name="description">` to reflect "Building Dream Homes Since 1984 — Architecture, Construction & Interiors" since the homepage messaging is changing.
- No business logic touched. Cost estimator, contact form handler, toast, and routing remain identical.

## Out of scope (ask if you want these next)

- Real testimonial content / photos
- Founder portrait photo
- Final numbers for Sq.Ft. Delivered and Cities Served
- Wiring "View Our Work" / "Explore Projects" to a dedicated projects page (currently scrolls to #projects)
