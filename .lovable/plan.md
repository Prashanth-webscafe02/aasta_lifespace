# Extract PDF Images → src/assets/

## What you'll do
Upload the PDF in your next message. I'll handle the rest.

## What I'll do
1. Parse the PDF with `pdfimages` (poppler) to pull every embedded image at original resolution.
2. Convert all extracted images to **PNG** (lossless).
3. Save them to `src/assets/` with clean sequential names: `pdf-image-01.png`, `pdf-image-02.png`, etc.
4. Report back with a list of extracted files, dimensions, and file sizes so you can decide which to use where.

## What I won't do (yet)
- I won't wire the images into any page/section until you tell me where they should go (e.g. replace project tiles, add to founder section, etc.). Just extraction in this step.

## Notes
- If the PDF is scanned (pages are themselves images), each page becomes one PNG.
- If the PDF has many tiny decorative images (icons, bullets), I'll flag them so we can drop noise before using any.
