# Section 01 — static hero studies (archived reference)

Status as of 2026-11-04: **preview code and experiment-only media removed; no
option selected or approved**. The notes below preserve the historical study and
list its former file paths; they are not instructions to recreate it. Routine
iterations now happen directly in the selected production homepage section. The
approved headline and supporting text are in [WEBSITE_CONTENT.md](WEBSITE_CONTENT.md). See
[DECISIONS.md](DECISIONS.md) for current status and
[DESIGN_SYSTEM.md](DESIGN_SYSTEM.md) for the visual foundation.

Former preview route: `/design-lab/hero` (removed; returns 404).

## Historical study notes

The page starts in **Compare all** mode. The A, B and C controls isolate a study;
they do not save a preference or select a production design. The route is marked
`noindex, nofollow` and is not linked from the production navigation.

## Studies

| Study | Composition | Email capture |
| --- | --- | --- |
| A — Oblique reveal | Tall headline and a diagonal silver shoulder entering from the right, clipped at the right and lower edges. | Compact filled button and conventional input beneath the supporting paragraph. |
| B — Housing detail | Wider headline measure and a tighter graphite housing/connector crop. Copy starts lower in the frame. | Open underline input and a restrained outlined button. |
| C — Low horizon | Inset text and a quieter, low-right silver detail. More horizontal image rhythm. | Signup separated from the paragraph by a fine rule. |

All three use the same existing concept image, with a transparent background,
different static rotations and crops. These are composition studies, not new
camera renders or photographs of manufactured hardware. Mobile crops sit below
the form in the same continuous ivory surface. No motion is implemented.

## Former files and boundaries

- `app/design-lab/hero/page.tsx`: route and search-indexing metadata.
- `app/design-lab/hero/HeroExploration.tsx`: temporary comparison controls.
- `app/design-lab/hero/hero-lab.css`: styles scoped to the exploration.
- `src/components/design-lab/hero/HeroStudy.tsx`: common preview structure.
- `src/components/design-lab/hero/hero-variants.ts`: line breaks and variant descriptions.
- `src/components/design-lab/hero/hero-content.ts`: verbatim production hero copy and the central preview-media reference.
- `src/components/design-lab/hero/LabEmailCapture.tsx`: unique accessible form IDs for simultaneous previews; no backend or persistence.
- `public/media/hero-lab/joint-cutout.webp`: local transparent concept asset.

The production homepage, six section components, header, global styles and
existing routes were unchanged by the exploration. The current header is inherited from the root
layout. Lab styles do not target it. Existing production links in the samples
lead back to the website.

## Historical media handoff

The study used a transparent render with a three-quarter angle and lighting
suitable for ivory. The old `heroLabMedia` reference and crop styles were removed
with the preview code. Future media integration belongs in the production Hero
task; keep concept labels for future-product visuals. Historical provenance, tool
mode and the exact edit prompt are preserved in `public/media/hero-lab/README.md`.

The signup intentionally retains the production development-state messaging:
valid input shows that the email has **not** been saved or sent. It does not
claim successful registration.
