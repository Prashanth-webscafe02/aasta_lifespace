# Lightbox + Carousel + Collapsible Side Rail

## 1. Single close button in lightbox
The shadcn `DialogContent` ships with its own X button, and `ProjectsCarousel` adds a second one. Remove the custom X in `ProjectsCarousel.tsx` and restyle the built-in close button (via `className` override) so it sits on a copper/ivory pill against the dark image.

## 2. Carousel autoplay + shuffled order
- Install `embla-carousel-autoplay` (already a peer of the shadcn carousel; one small dep).
- In `ProjectsCarousel.tsx`:
  - Shuffle the `SLIDES` array once on mount with a Fisher–Yates inside `useMemo`, so order is randomized per visit but stable during the session.
  - Pass an Autoplay plugin to `Carousel` with `delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true` so it keeps moving but pauses on hover and while the lightbox is open (pause via the embla api when `active !== null`, resume on close).

## 3. Collapsible side rail (desktop) with full-width expand
Update `src/components/SideRail.tsx` and `src/pages/Index.tsx`:
- Add a `collapsed` state in `SideRail`, persisted to `localStorage` (`aasta:rail`).
- When **expanded** (default): rail is the current 260px panel with a small `X` close button in the top-right corner.
- When **collapsed**: rail shrinks to a 56px vertical strip pinned to the left with just the logo and a `Menu` (hamburger) re-open button. Nav links hidden.
- Lift the state out: convert `SideRail` to accept `collapsed` + `onToggle` props (or expose via a tiny context) so `Index.tsx` knows the width.
- In `Index.tsx`, replace the hard-coded `lg:pl-[260px]` with a dynamic class: `lg:pl-[260px]` when expanded, `lg:pl-14` when collapsed, with a `transition-[padding] duration-500` so content reflows smoothly into full width.
- Mobile behavior unchanged.

## Files touched
- `src/components/ProjectsCarousel.tsx` — remove duplicate X, add autoplay + shuffle, pause on lightbox.
- `src/components/SideRail.tsx` — collapsible desktop variant with close/open controls.
- `src/pages/Index.tsx` — dynamic left padding tied to rail state.
- `package.json` — add `embla-carousel-autoplay`.

No content/copy changes, no business logic touched.
