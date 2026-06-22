## Aasta Lifespace — refresh pass

### 1. Replace em dashes (—) in visible content
Replace with appropriate punctuation across the site content. Most occurrences are in `src/pages/Index.tsx`, plus a few in `index.html`, `SideRail.tsx`, and `ProjectsCarousel.tsx`. Replacements (case-by-case):
- Section eyebrows like `02 — Our Vision`, `06 — Process`, `12 — Contact` → use middle dot `·` (e.g. `02 · Our Vision`).
- Title tag `Aasta Lifespace — Building Dream Homes Since 1984` → use `|` separator.
- In-sentence em dashes → replace with a comma, period, or colon depending on flow. Examples:
  - "the same — to build…" → "the same: to build…"
  - "simple — to build the kind…" → "simple: to build the kind…"
  - "across generations — and equally excited…" → "across generations, and we're equally excited…"
  - "Yes — modular kitchens…" → "Yes. Modular kitchens…"
  - "please reach out — we evaluate…" → "please reach out; we evaluate…"
  - "honoured — timelines…" → "honoured: timelines…"
  - "single accountable team — eliminating…" → "single accountable team, eliminating…"
  - "Auto-playing — hover to pause…" → "Auto-playing. Hover to pause…"
  - "Est. 1984 — India" → "Est. 1984 · India"
  - Founder signature `— The Founder` → keep as an en-dash signature `– The Founder` (typographic convention for attributions).
- Leave the `—` fallback inside `format-inr.ts` (it's a numeric placeholder, not content).

### 2. Side-rail toggle icon
In `src/components/SideRail.tsx`, the expanded-state collapse button currently uses the `X` icon. Swap it for the `Menu` (hamburger) icon so the same hamburger is used to both open and close the rail. Keep the `aria-label="Collapse menu"`.

### 3. Fresh, vibrant hero image
The current `src/assets/hero.jpg` reads as dull/dusky and the headline merges into it. Plan:
1. Generate 3 hero candidates (premium quality, 1920×1080) with bright, airy, vibrant treatments suited to a luxury home builder. Concepts:
   - **A. Warm golden-hour interior** — sunlit double-height living room, large windows, fresh greenery outside, light travertine + warm oak, soft copper accents.
   - **B. Bright modern facade at dusk** — a contemporary villa with warm interior glow against a soft twilight sky, manicured garden, water feature reflection.
   - **C. Airy courtyard with skylight** — light-filled atrium with indoor plants, white stone, oak slats and a single copper pendant; very clean and editorial.
2. Present the 3 options via a visual question so the user picks one.
3. Replace `src/assets/hero.jpg` with the chosen image.
4. Strengthen text legibility in `Hero` (`src/pages/Index.tsx`): increase the overlay gradient opacity on the headline area (e.g. darker `from-ink/70` bottom-left scrim plus a subtle radial vignette behind the copy) so the headline reads cleanly regardless of which photo is used.

### 4. Projects carousel — fix repetition
Audit `src/assets/arte-*.jpg`, `mohan-*.jpg`, `shrinivas-*.jpg` for visually duplicate / near-duplicate frames (likely culprits inside ARTE 01–11). In `src/components/ProjectsCarousel.tsx`:
- Remove any duplicate imports from `RAW` after the audit.
- Replace the per-mount `shuffle(RAW)` with a deterministic interleave that alternates projects (ARTE → Mohan → Shrinivas → ARTE…) so the same project doesn't appear back-to-back on autoplay.
- Keep autoplay delay at 3500ms; with loop enabled the same image will recur eventually, which is expected — interleaving + de-duping addresses the "repetitive" perception.

### Technical notes
- All edits are presentation-only; no business logic, routing, or data changes.
- New hero asset will be saved to `src/assets/hero.jpg` (overwrite) so existing import stays valid.
- No new dependencies.

### Open question before build
Do you want me to generate the 3 hero options now and have you pick, or do you have a reference image you'd like me to use instead?
