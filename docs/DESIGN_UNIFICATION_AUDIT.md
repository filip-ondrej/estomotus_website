# ESTO MOTUS — implemented design measurements

Measured 2026-11-09 in Chromium, using `getComputedStyle()`, `getBoundingClientRect()` and SVG screen matrices after `document.fonts.ready`. All numbers are CSS pixels unless explicitly marked SVG user units, em, ratios or percentages. Values are rounded to two decimals for presentation; raw captures retain browser precision. Root font size was 16px in every capture. These are measurements of the current implementation, not target specifications.

Production (`localhost:3002`) is the source for all visible sections. Open Projects is absent in production because no projects are published; its values below come from the existing development-only draft preview (`localhost:3000`). Computed CSS matched between development and production for every other captured selector at all eight viewports. Heights use the initial empty-form state, menu closed, first Solution tab selected and static schematic media fallback; they include section padding. Navbar is fixed and is not an extra flow section. Hero already includes its 72px allowance. No website source, tokens, copy, behavior or design was changed during this reporting task.

## 1. Typeface mapping and typography

| Key | Actual computed font-family | Loaded face / source |
| --- | --- | --- |
| P | `primaryFont, "primaryFont Fallback"` | IBM Plex Sans; `app/fonts.ts`, self-hosted WOFF2; normal 400/500/600/700, italic faces supplied |
| M | `technicalFont, "technicalFont Fallback"` | IBM Plex Mono Regular 400; self-hosted WOFF2 |
| Measurement notation | size / line-height / letter-spacing | `normal` is the browser’s computed keyword, not a measured 0px. Font weight is numeric. Italic is marked below. |

### All rendered text roles compared

D = 1440×900; T = 768×1024; M = 390×844. Font family and weight apply to all three columns unless a variation is shown. Hidden navigation roles have computed CSS but no rendered box until their menu is opened; those are identified separately.

| Role | Face / weight | D: size / leading / tracking | T: size / leading / tracking | M: size / leading / tracking |
| --- | --- | --- | --- | --- |
| Navbar wordmark | P / 600 | 19 / 22.8 / 2 | 19 / 22.8 / 2 | 16 / 19.2 / 1.36 |
| Navbar motto (italic) | P / 400 | 11 / 15.4 / 0.17 | 11 / 15.4 / 0.17 | 10 / 14 / 0.15 |
| Navbar desktop link label | P / 500 | 12 / 18 / 1.62 | 12 / 18 / 1.62 | 12 / 18 / 1.62 |
| Early Access — navbar / Hero / closing | P / 600 | 11 / 15.4 / 0.88 | 11 / 15.4 / 0.88 | 11 / 15.4 / 0.88 |
| CTA arrow | P / 600 | 14 / 14 / 0.88 | 14 / 14 / 0.88 | 14 / 14 / 0.88 |
| Navbar menu toggle | P / 500 | 11 / 16.5 / 0.77 | 11 / 16.5 / 0.77 | 10 / 15 / 0.2 |
| Hero label | P / 500 | 12.54 / 20.06 / 1.25 | 12 / 19.2 / 1.2 | 12 / 19.2 / 1.2 |
| Hero headline | P / 500 | 73.32 / 70.39 / -0.73 | 36 / 34.56 / -0.36 | 42.9 / 41.18 / -0.43 |
| Hero paragraph | P / 400 | 18.81 / 29.16 / 0.09 | 16 / 24.8 / 0.08 | 16 / 26.4 / normal |
| Hero / closing email input | P / 400 | 16 / 24 / normal | 16 / 24 / normal | 16 / 24 / normal |
| Signup response (empty initially) | P / 400 | 12 / 20.4 / normal | 12 / 20.4 / normal | 12 / 20.4 / normal |
| Mission headline | P / 500 | 53.28 / 58.61 / -1.33 | 39.94 / 43.93 / -1 | 20.28 / 22.31 / -0.51 |
| Mission paragraph | P / 400 | 18 / 30.6 / normal | 16 / 27.2 / normal | 16 / 27.2 / normal |
| Mission closing statement | P / 500 | 34.56 / 43.2 / -0.69 | 32 / 40 / -0.64 | 17.16 / 21.45 / -0.34 |
| Mission concept caption | M / 400 | 12 / 16.8 / 0.24 | 12 / 16.8 / 0.24 | 12 / 16.8 / 0.24 |
| Mission / Progress / closing boundary label | P / 500 | 12 / 19.2 / 0.78 | 12 / 19.2 / 0.78 | 12 / 19.2 / 0.78 |
| Solution headline | P / 500 | 53.28 / 58.61 / -1.33 | 39.94 / 43.93 / -1 | 20.28 / 22.31 / -0.51 |
| Solution intro paragraph | P / 400 | 18 / 30.6 / normal | 16 / 27.2 / normal | 16 / 27.2 / normal |
| Solution category tab | P / 500 | 12 / 19.2 / 0.78 | 12 / 19.2 / 0.78 | 12 / 19.2 / 0.78 |
| Solution product headline | P / 500 | 34.56 / 43.2 / -0.69 | 32 / 40 / -0.64 | 17.16 / 21.45 / -0.34 |
| Solution detail paragraph | P / 400 | 18 / 30.6 / normal | 16 / 27.2 / normal | 16 / 27.2 / normal |
| Solution technical chip | M / 400 | 12 / 19.2 / normal | 12 / 19.2 / normal | 12 / 19.2 / normal |
| Solution mobile part label | P / 400 → P / 400 → M / 400 | 16 / 24 / normal | 16 / 24 / normal | 12 / 19.2 / normal |
| Solution disclosure caption | P / 400 | 12 / 19.2 / normal | 12 / 19.2 / normal | 12 / 19.2 / normal |
| Progress headline | P / 500 | 53.28 / 58.61 / -1.33 | 39.94 / 43.93 / -1 | 20.28 / 22.31 / -0.51 |
| Progress intro paragraph | P / 400 | 18 / 30.6 / normal | 16 / 27.2 / normal | 16 / 27.2 / normal |
| Progress production status | M / 400 | 11 / 18.7 / normal | 11 / 18.7 / normal | 11 / 18.7 / normal |
| Progress product headline | P / 500 | 34.56 / 43.2 / -0.69 | 32 / 40 / -0.64 | 17.16 / 21.45 / -0.34 |
| Progress “· Batch 01” suffix | P / 500 | 16 / 20 / normal | 16 / 20 / normal | 16 / 20 / normal |
| Progress product description / invitation | P / 400 | 16 / 27.2 / normal | 16 / 27.2 / normal | 16 / 27.2 / normal |
| Progress specification key / value | M / 400 | 12 / 19.2 / normal | 12 / 19.2 / normal | 12 / 19.2 / normal |
| Progress media caption | M / 400 | 11 / 18.7 / normal | 11 / 18.7 / normal | 11 / 18.7 / normal |
| Progress / Projects text link | P / 500 | 14 / 22.4 / normal | 14 / 22.4 / normal | 14 / 22.4 / normal |
| Open Projects section label | P / 500 | 12 / 18 / 1.44 | 12 / 18 / 1.44 | 12 / 18 / 1.44 |
| Open Projects headline | P / 500 | 53.28 / 58.61 / -1.33 | 39.94 / 43.93 / -1 | 32 / 35.2 / -0.8 |
| Open Projects intro paragraph | P / 400 | 18 / 30.6 / normal | 16 / 27.2 / normal | 16 / 27.2 / normal |
| Open Projects status | M / 400 | 12 / 19.2 / normal | 12 / 19.2 / normal | 12 / 19.2 / normal |
| Open Projects project headline | P / 500 | 34.56 / 43.2 / -0.69 | 32 / 40 / -0.64 | 17.16 / 21.45 / -0.34 |
| Open Projects description | P / 400 | 16 / 27.2 / normal | 16 / 27.2 / normal | 16 / 27.2 / normal |
| Open Projects specification key / value | M / 400 | 12 / 19.2 / normal | 12 / 19.2 / normal | 12 / 19.2 / normal |
| Open Projects media placeholder text | M / 400 | 12 / 19.2 / normal | 12 / 19.2 / normal | 12 / 19.2 / normal |
| Closing headline | P / 500 | 68 / 72.08 / -0.68 | 46.4 / 49.18 / -0.46 | 36 / 38.16 / -0.36 |
| Closing paragraph | P / 400 | 18 / 30.6 / normal | 16 / 27.2 / normal | 16 / 27.2 / normal |
| Closing benefits | M / 400 | 12 / 19.2 / 0.18 | 12 / 19.2 / 0.18 | 12 / 19.2 / 0.18 |
| Closing partner invitation | P / 400 | 14 / 23.8 / normal | 14 / 23.8 / normal | 14 / 23.8 / normal |
| Closing partner link | P / 500 | 14 / 22.4 / normal | 14 / 22.4 / normal | 14 / 22.4 / normal |
| Footer wordmark | P / 600 | 20 / 24 / 1.8 | 20 / 24 / 1.8 | 17 / 20.4 / 1.53 |
| Footer motto (italic) | P / 400 | 12 / 16.8 / 0.12 | 12 / 16.8 / 0.12 | 11 / 15.4 / 0.11 |
| Footer positioning / contact copy | P / 400 | 14 / 23.8 / normal | 14 / 23.8 / normal | 14 / 23.8 / normal |
| Footer column heading | P / 500 | 12 / 18 / normal | 12 / 18 / normal | 12 / 18 / normal |
| Footer link / email | P / 400 | 14 / 21 / normal | 14 / 21 / normal | 14 / 21 / normal |
| Footer copyright | P / 400 | 12 / 20.4 / normal | 12 / 20.4 / normal | 12 / 20.4 / normal |

The standard headline weight is 500, but small body/footer text is 400 and Early Access is 600. Navbar desktop links use 12/500; their CSS hover/focus label is 13.5/700 with the existing .135em parent tracking. The navbar arrow is hidden at ≤600px. The mobile part-label row is displayed only at ≤760px. The response paragraph has 12px/20.4px type but zero height while empty.

| Supplementary text/icon role | Computed face / size / weight / line-height / tracking | Scope |
| --- | --- | --- |
| All three raised-tab arrows | M / 14 / 500 / 14 / .78 | Verified at 360×800; same inherited 12px label tracking at every width |
| Mobile menu +/− icon | P / 18 / 500 / 27 / .2 | ≤600px icon override; its parent toggle remains 10/500/15/.2 |
| Editorial link arrow | P / 14 / 500 / 22.4 / normal | Inherits the text-link role |

Boundary arrows request weight 500 from the technical family, while only IBM Plex Mono Regular 400 is installed. This is the computed CSS weight; it does not establish the existence of a real Mono Medium font file (browser synthesis is permitted). For the part-label family variation above, the arrow-separated face/weight entries correspond to D → T → M.

### Main headline size / line-height at every requested viewport

| Section / role | 1920×1080 | 1920×1200 | 1440×900 | 1280×800 | 1024×768 | 768×1024 | 390×844 | 360×800 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Hero | 71.57 / 68.71 | 77.11 / 74.02 | 73.32 / 70.39 | 65.17 / 62.57 | 43.39 / 41.66 | 36 / 34.56 | 42.9 / 41.18 | 39.6 / 38.02 |
| Mission | 56 / 61.6 | 56 / 61.6 | 53.28 / 58.61 | 47.36 / 52.1 | 37.89 / 41.68 | 39.94 / 43.93 | 20.28 / 22.31 | 18.72 / 20.59 |
| Solution | 56 / 61.6 | 56 / 61.6 | 53.28 / 58.61 | 47.36 / 52.1 | 37.89 / 41.68 | 39.94 / 43.93 | 20.28 / 22.31 | 18.72 / 20.59 |
| Progress | 56 / 61.6 | 56 / 61.6 | 53.28 / 58.61 | 47.36 / 52.1 | 37.89 / 41.68 | 39.94 / 43.93 | 20.28 / 22.31 | 18.72 / 20.59 |
| Open Projects preview | 56 / 61.6 | 56 / 61.6 | 53.28 / 58.61 | 47.36 / 52.1 | 37.89 / 41.68 | 39.94 / 43.93 | 32 / 35.2 | 32 / 35.2 |
| Closing CTA | 68 / 72.08 | 68 / 72.08 | 68 / 72.08 | 68 / 72.08 | 59.2 / 62.75 | 46.4 / 49.18 | 36 / 38.16 | 36 / 38.16 |
| Product role: Mission closing, Solution / Progress / Project h3 | 36 / 45 | 36 / 45 | 34.56 / 43.2 | 30.72 / 38.4 | 24.58 / 30.72 | 32 / 40 | 17.16 / 21.45 | 16 / 20 |

### Implemented fluid rules and metric compensation

| Role | Actual CSS expression / breakpoint | Weight / line-height / tracking rule |
| --- | --- | --- |
| Hero | `clamp(2.25rem, 8.235cqi, 4.725rem)`; ≤760px: `clamp(2rem, 11vw, 3rem)` | 500 / .96 / −.01em |
| Hero desktop multiplier | ≥1101px: `clamp(.97, calc(1.72 - .421875 * (100vw / 100svh)), 1.045)` | Multiplies headline, label, body and stack margins; controls are not multiplied |
| Section heading | `clamp(1.25rem, 3.7vw, 3.5rem)`; ≤820px: `clamp(1.125rem, 5.2vw, 2.5rem)` | 500 / 1.1 / −.025em |
| Project section exception | ≤900px: `max(var(--type-editorial-heading), 2rem)` | 32px minimum; explicit break retained at ≤1100px |
| Product / editorial subheading | `clamp(1.5rem, 2.4vw, 2.25rem)`; ≤820px: `clamp(1rem, 4.4vw, 2rem)` | 500 / 1.25 / −.02em |
| Body | `clamp(1rem, 1.25vw, 1.125rem)` | 400 / 1.7; Hero uses 1.55 desktop and 1.65 mobile |
| Closing headline | `clamp(2.25rem, calc(5vw + .5rem), 4.25rem)` | 500 / 1.06 / −.01em |
| Font-size-adjust | Hero ≤760px: headline `ex-height .5`, body `ex-height .512`; Mission/Solution body ≤820px: `ex-height .507` | Changes glyph metrics without changing the reported computed font-size; these tables do not claim equal visible glyph heights |

### Hero aspect-dependent values

| Viewport | Label size / leading | Body size / leading | Label → headline gap | Headline → body gap | Body → form gap |
| --- | --- | --- | --- | --- | --- |
| 1920×1080 | 11.64 / 18.62 | 17.46 / 27.06 | 27.16 | 38.8 | 27.16 |
| 1920×1200 | 12.54 / 20.06 | 18.81 / 29.16 | 29.25 | 41.8 | 29.25 |
| 1440×900 | 12.54 / 20.06 | 18.81 / 29.16 | 29.25 | 41.8 | 29.25 |
| 1280×800 | 12.54 / 20.06 | 16.72 / 25.92 | 29.25 | 41.8 | 29.25 |
| 1024×768 | 12 / 19.2 | 16 / 24.8 | 32 | 16 | 28 |
| 768×1024 | 12 / 19.2 | 16 / 24.8 | 32 | 16 | 28 |
| 390×844 | 12 / 19.2 | 16 / 26.4 | 32 | 24 | 28 |
| 360×800 | 12 / 19.2 | 16 / 26.4 | 32 | 24 | 28 |

### SVG text: computed user units versus screen size

| Viewport | Drawing / text | Computed size / leading | Screen scale | Font-size × measured screen scale |
| --- | --- | --- | --- | --- |
| 1440×900 | Solution schematic | 14px / 21px | 0.76 | 10.59 |
| 1440×900 | Progress schematic | 10px / 15px | 1.1 | 11.02 |
| 768×1024 | Solution schematic | 14px / 21px | 0.58 | 8.06 |
| 768×1024 | Progress schematic | 10px / 15px | 0.49 | 4.86 |
| 390×844 | Solution schematic | 16px / 24px | hidden | hidden |
| 390×844 | Progress schematic | 10px / 15px | 0.49 | 4.94 |

SVG labels use IBM Plex Mono 400 with computed `letter-spacing: normal`; computed leading is 21 user units for 14-unit Solution text and 15 for 10-unit Progress text. Drawing transforms scale their glyphs; treating those as unscaled HTML 14px/10px text would be incorrect. Solution’s hidden mobile SVG text computes to 16/24 under its mobile rule, and is replaced visually by the 12px HTML part labels.

## 2. Section spacing and rendered heights

| Area: padding top / bottom | 1920×1080 | 1920×1200 | 1440×900 | 1280×800 | 1024×768 | 768×1024 | 390×844 | 360×800 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Navbar | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 | 0 / 0 |
| 01 Hero | 72 / 0 | 72 / 0 | 72 / 0 | 72 / 0 | 72 / 0 | 72 / 0 | 72 / 24 | 72 / 24 |
| 02 Mission | 24 / 60 | 24 / 60 | 24 / 55.2 | 24 / 50.4 | 24 / 42.72 | 24 / 36 | 24 / 36 | 24 / 36 |
| 03 Solution | 64 / 96 | 64 / 96 | 64 / 96 | 64 / 96 | 64 / 96 | 64 / 96 | 56 / 80 | 56 / 80 |
| 04 Progress | 40 / 40 | 40 / 40 | 40 / 40 | 40 / 40 | 40 / 40 | 40 / 40 | 40 / 40 | 40 / 40 |
| 05 Open Projects preview | 48 / 96 | 48 / 96 | 48 / 96 | 48 / 96 | 48 / 96 | 48 / 96 | 48 / 96 | 48 / 96 |
| 06 Get Involved | 64 / 48 | 64 / 48 | 64 / 48 | 64 / 48 | 64 / 48 | 64 / 48 | 64 / 48 | 64 / 48 |
| Footer | 48 / 48 | 48 / 48 | 48 / 48 | 48 / 48 | 48 / 48 | 48 / 48 | 48 / 48 | 48 / 48 |

Hero section padding above is 72px top / 0px bottom on desktop and 72px / 24px on mobile. Its nested composition separately has symmetric block padding: 1920×1080: 75.6; 1920×1200: 80; 1440×900: 63; 1280×800: 56; 1024×768: 56; 768×1024: 71.68; 390×844: 63.6; 360×800: 63.6. Padding and vertical centering both contribute to its final height. Mission bottom padding is `clamp(24px, 3vw, 48px) + 12px`; Solution is 64/96px above 760px and 56/80px at ≤760px. Progress stays 40/40px; Projects 48/96px; closing 64/48px; footer 48/48px.

| Area | 1920×1080 | 1920×1200 | 1440×900 | 1280×800 | 1024×768 | 768×1024 | 390×844 | 360×800 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Navbar | 72 | 72 | 72 | 72 | 72 | 72 | 72 | 72 |
| 01 Hero | 1035 | 1155 | 855 | 755 | 723 | 979 | 941.19 | 989.52 |
| 02 Mission | 434.56 | 434.56 | 423.78 | 392.33 | 391 | 510.39 | 484.39 | 505.27 |
| 03 Solution | 807.34 | 807.34 | 801.38 | 778.13 | 792.47 | 864.97 | 890.97 | 932.97 |
| 04 Progress | 733.58 | 733.58 | 686.83 | 622.69 | 599.28 | 730.13 | 951.69 | 957.59 |
| 05 Open Projects preview | 659 | 659 | 620.75 | 576.09 | 544.52 | 978.38 | 876.5 | 860.06 |
| 06 Get Involved | 400.67 | 400.67 | 400.67 | 397.27 | 387.94 | 374.38 | 416.91 | 560.05 |
| Footer | 303 | 303 | 303 | 303 | 453 | 453 | 756.56 | 756.56 |

Open Projects values are development preview heights; **production height is 0 (no DOM section) at every width**. All other measured section heights match between development and production. Navbar’s 72px is counted once in Hero’s allowance. Desktop Hero ends 45px above the viewport bottom for widths ≥761px in these samples; mobile grows with content and does not provide an initial Mission peek. Raised tabs extend into the previous section and do not add to flow height.

### Measured internal spaces

| Relationship (box edges; borders included) | D | T | M |
| --- | --- | --- | --- |
| Hero label → headline | 29.25 | 32 | 32 |
| Hero headline → body | 41.8 | 16 | 24 |
| Hero body → form | 29.25 | 28 | 28 |
| Mission headline → top divider | 20 | 20 | 20 |
| Mission divider → body box | 25 | 25 | 25 |
| Mission body / closing columns or rows | 57.6 / 57.6 | 32 / 32 | 32 / 32 |
| Solution headline → intro body | columns: 57.6 | 20 | 20 |
| Solution intro box → schematic figure | 24 | 24 | 24 |
| Solution detail columns / rows | 57.6 / 16 | 32 / 16 | 32 / 16 |
| Solution paragraph → chip list | 8 | 8 | 8 |
| Solution panel → disclosure | 16 | 16 | 16 |
| Progress headline → intro body | columns: 57.6 | columns: 32 | 16 |
| Progress intro box → release divider | 16 | 16 | 16 |
| Progress copy flex gap | 8 | 8 | 8 |
| Progress media → caption | 8 | 8 | 8 |
| Project label → headline | 17.28 | 16 | 16 |
| Project headline → intro body | columns: 57.6 | 24 | 24 |
| Project divider → first feature content | 24 | 24 | 24 |
| Project status → product title | 12 | 12 | 12 |
| Project description → specs divider | 16 | 16 | 16 |
| Project specs → action target | 16 | 16 | 16 |
| Closing headline → paragraph | 12 | 12 | 12 |
| Closing paragraph → form | 16 | 16 | 16 |
| Closing form → benefits | 12 | 12 | 12 |
| Closing benefits → partner paragraph | 24.81 | 24.81 | 24 |
| Closing benefits row / column gap | 8 / 8 | 8 / 8 | 8 / 8 |
| Footer grid row / column gap | 32 / 43.2 | 32 / 24 | 32 / 24 |
| Footer heading → first link target | 12 | 12 | 12 |

“Columns” means the paragraph is beside the headline, so a vertical headline-to-paragraph gap is not applicable. Divider-to-body includes the 1px divider and content alignment, rather than merely quoting `padding-top`. Inline text/link baselines can create additional line-box space: the closing invitation uses an inline-flex 44px link inside a paragraph, so its rendered box is taller than its nominal 23.8px line-height.

| Existing spacing token(s) | Implemented value(s) at 16px root |
| --- | --- |
| `--space-1,2,3,4,5,6,7,8` | 4, 8, 12, 16, 20, 24, 28, 32px respectively |
| `--space-10,12,14,16,20,24,28` | 40, 48, 56, 64, 80, 96, 112px respectively |
| `--heading-gap` / `--content-gap` | 16px / 24px |
| `--layout-gap` | `clamp(32px, 4vw, 64px)` |
| `--section-inset-compact` / `--section-inset` / `--section-outset` | 40px / 64px / 96px |
| `--section-space` | `clamp(72px, 7vw, 104px)`; generic utility, not the final per-section padding override |
| `--space-chip-block` / `--capture-padding` | 3px / 5px |

## 3. Containers, columns and media

| Viewport | Container width | Actual outer margin each side | Computed gutter formula | Shared 4vw gap |
| --- | --- | --- | --- | --- |
| 1920×1080 | 1440 | 240 | `clamp(24px, 5vw, 80px)` | 64 |
| 1920×1200 | 1440 | 240 | `clamp(24px, 5vw, 80px)` | 64 |
| 1440×900 | 1296 | 72 | `clamp(24px, 5vw, 80px)` | 57.6 |
| 1280×800 | 1152 | 64 | `clamp(24px, 5vw, 80px)` | 51.2 |
| 1024×768 | 921.59 | 51.2 | `clamp(24px, 5vw, 80px)` | 40.96 |
| 768×1024 | 691.19 | 38.41 | `clamp(24px, 5vw, 80px)` | 32 |
| 390×844 | 342 | 24 | `clamp(24px, 5vw, 80px)` | 32 |
| 360×800 | 312 | 24 | `clamp(24px, 5vw, 80px)` | 32 |

All section/header/footer shells use `width: min(1440px, 100% - 2 * gutter)` with zero shell padding. At 1920px, the max-width cap makes actual outer margins 240px despite the 80px gutter token. The final column uses Mission’s actual 32px mobile override at ≤820px, not a claim that every 4vw token becomes 32px.

| Grid | D computed column widths; gap | T computed column widths; gap | M computed column widths; gap |
| --- | --- | --- | --- |
| Navbar shell | 414.45 + 419.08 + 414.47; 24 | 458.84 + 216.34; 16 | 168.81 + 165.19; 8 |
| Hero grid | 12 × 75; 36 | 12 × 35.59; 24 | 342; 24 |
| Mission body | 619.2 + 619.2; 57.6 | 691.19; 32 | 342; 32 |
| Solution intro | 722.39 + 516; 57.6 | 691.19; 20 | 342; 20 |
| Solution detail | 594.2 + 594.2; 57.6 | 641.19; 32 | 292; 32 |
| Solution tabs | 4 × 292; 16 | 4 × 140.8; 16 | flex scroll strip; 16 |
| Progress intro | 722.39 + 516; 57.6 | 384.52 + 274.66; 32 | 342; 16 |
| Progress release media / copy | 756 + 540; normal | 362.05 + 329.14; normal | 342; normal |
| Project intro / feature | 557.28 + 681.13; 57.6 | 691.19; 32 | 342; 32 |
| Footer grid | 371.13 + 265.11 + 318.11 + 212.08; 43.2 | 333.59 + 333.59; 24 | 342; 24 |

| Composition | Implemented proportion / alignment | Responsive exception |
| --- | --- | --- |
| Hero | 12 equal grid tracks; copy spans 8, capped at 896px; intro/body/form share left edge | 761–1100px copy spans 7; ≤760px one column, mobile headline width extends by one gutter |
| Mission | Body / closing 1:1; max text widths 576 / 560px | ≤820px one column with 32px gap |
| Solution | Intro 1.4:1; detail 1:1; 4 equal tab tracks | ≤820px intro/detail stack; ≤760px tabs become horizontal flex scroll strip |
| Progress | Intro 1.4:1; release 1.4:1 | 761–1100px release 1.1:1; ≤760px intro/release stack; copy left inset removed |
| Projects | 45:55 after subtracting column gap; intro and feature share columns | ≤900px one column, 24px row gap; ≥901px label is a separate grid row |
| Closing | Centered intro max 1024px; paragraph max 512px; form max 520px | Benefits stack at ≤760px; signup wraps at ≤380px |
| Footer | 1.4:1:1.2:.8 | ≤1100px two equal columns; ≤760px one column |

| Measured box | D | T | M | 360×800 |
| --- | --- | --- | --- | --- |
| Hero copy | 852×435.73 | 393.19×321.47 | 342×409.5 | 312×480.33 |
| Hero paragraph | 520×116.63 | 393.19×99.19 | 342×105.56 | 312×131.95 |
| Hero image figure | 720×540 | 337.91×253.42 | 390×292.5 | 360×270 |
| Solution schematic | 1296×174 | 691.19×174 | 342×85.5 | 312×78 |
| Progress workshop frame | 731×399.77 | 337.05×184.31 | 342×187.03 | 312×170.63 |
| Progress copy | 540×450.45 | 329.14×480.19 | 342×429.63 | 312×428.19 |
| Project 2:1 preview | 681.13×340.56 | 691.19×345.59 | 342×171 | 312×156 |
| Closing intro | 1024×114.67 | 691.19×88.38 | 342×77.34 | 312×142.69 |
| Closing form | 520×58 | 520×58 | 342×58 | 312×112 |

Hero image CSS: width `min(50vw, 800px)` above 1100px, `44vw` at 761–1100px; right/bottom offsets −16px. At ≤760px it is in normal flow, width `min(100%, 512px)`, top margin 40px and bottom margin −24px. Intrinsic image ratio is 1100:825. Progress frame is 640:350 with an inset 12px video/fallback and 3px inner radius; Project preview/published-image slot is 2:1 (`object-fit: cover` for published media). These are distinct approved media proportions.

## 4. Actual color tokens

| Semantic token | Light computed variable | Dark computed variable |
| --- | --- | --- |
| `--background` | #ece7df | #0b0b0c |
| `--foreground` | #111 | #f5f4f2 |
| `--muted` | #655f58 | #a7a29b |
| `--line` | #d0cbc3 | #292929 |
| `--line-interactive` | #d0cbc3 | #393939 |
| `--surface` | #e2ddd5 | #151516 |
| `--surface-raised` | #f5f4f2 | #1c1c1d |
| `--surface-hover` | #dcd6cc | #252526 |
| `--accent` | #76572e | #c2a16f |
| `--focus` | #76572e | #c2a16f |
| `--button-bg` | #111 | #f5f4f2 |
| `--button-marker` | #c2a16f | #76572e |
| `--button-text` | #f5f4f2 | #111 |
| `--button-hover` | #30302f | #ece7df |
| `--glass-tint` | #ece7dfd9 | #0b0b0cd6 |
| `--glass-border` | #11111124 | #f5f4f22e |
| `--glass-highlight` | #ffffff7a | #f5f4f212 |
| `--glass-shadow` | #1111110f | #00000024 |

| Primitive / graphical use | Actual value |
| --- | --- |
| Graphite / ivory / soft white | #0B0B0C / #ECE7DF / #F5F4F2 |
| Ink / muted silver | #111111 / #8F8B86 |
| Base / light-background / dark-background brass | #A78556 / #76572E / #C2A16F |
| Light / dark border | #D0CBC3 / #292929 |
| Media background | #000000 |
| Hero / closing form background | color(srgb 0.944902 0.933922 0.91549) / color(srgb 0.0798039 0.0798039 0.0837255) (computed color-mix; not a new palette token) |
| Navbar glass tint override, light / dark | rgb(236 231 223 / 72%) / rgb(11 11 12 / 76%) |
| Navbar glass edge override, light / dark | rgb(17 17 17 / 17%) / rgb(245 244 242 / 19%) |
| Navbar highlight / shadow, light | white 65% / ink 9% |
| Navbar highlight / shadow, dark | soft-white 10% / black 25% |

Primary text resolves through `--foreground`; secondary and muted copy both use `--muted` (there are no separate secondary/muted tiers). Mission’s first headline line uses muted, its second foreground. Progress’s first headline line is likewise muted by the existing homepage rule. Brass base remains on graphical schematics and Mission’s 3px closing rule; small interactive tab text uses `--accent`. Navbar uses its own measured glass overrides and 28px blur/120% saturation rather than the generic `.glass` tint and 20px blur/112% saturation.

## 5. Controls, borders, radii and tabs

| Viewport | Navbar CTA box | Hero = closing form box | Hero = closing input box | Hero = closing button box |
| --- | --- | --- | --- | --- |
| 1920×1080 | 155×46 | 520×58 | 345×46 | 155×46 |
| 1920×1200 | 155×46 | 520×58 | 345×46 | 155×46 |
| 1440×900 | 155×46 | 520×58 | 345×46 | 155×46 |
| 1280×800 | 155×46 | 520×58 | 345×46 | 155×46 |
| 1024×768 | 155×46 | 520×58 | 345×46 | 155×46 |
| 768×1024 | 155×46 | 393.19×58 | 218.19×46 | 155×46 |
| 390×844 | 113.19×46 | 342×58 | 167×46 | 155×46 |
| 360×800 | 113.19×46 | 312×112 | 300×46 | 300×46 |

Hero/closing dimensions and typography are equal at every measured viewport. Their actual 58px form row is 46px controls + 2×5px inset + 2×1px border. At ≤380px, controls wrap into a 112px form (46+46+8+10+2). Navbar’s compact ≤600px CTA uses intrinsic width, not 155px; the full CTA in the disclosure panel still includes marker/arrow.

| Component | Computed geometry / CSS | Exceptions / states |
| --- | --- | --- |
| Early Access button | 46px min-height; 155px width; padding T/R/B/L 12/10/12/14px; gap 10px; border 1px; radius 3px | 11px/600/15.4px, .88px tracking; marker 4×4px; arrow 14px with 10px inset and 1px separator |
| Compact navbar CTA | ≤600px padding 12px all sides, gap 8px, width auto | Marker and arrow hidden; common height/type/colors retained |
| Email input | 46px min-height; padding 10/18/10/18px; border 0 inside capture; radius 4px | ≤760px inline padding 12px; transparent background; native input text 16/400/24px |
| Email capture row | Border 1px `--line`; radius 3px; gap 8px; inset 5px | Focus-within border `--focus`; input itself remains borderless |
| Generic button (not the homepage signup override) | 48px min-height; padding 12px 24px; 1px border; 4px radius; 14/500/19.6px | Primary theme button colors; secondary transparent with foreground border |
| Text links | 44px min-height; default arrow gap 16px; 1px text underline and 4px padding below text | Closing partner: gap 8px, underline 40% foreground, 0px underline padding |
| Footer links / menu toggle | 44px minimum targets; toggle also 44px min-width | Footer links have no persistent underline; hover uses accent |
| Solution technical chips | First chip 154.81×27.19 D / 154.81×27.19 M; padding 3px 8px; 1px interactive border; 3px radius | Chip width follows text; informational chips have no forced 44px height |
| Boundary tabs (Mission / Progress / closing) | 250×48px; padding 12px; 8px arrow gap; radius 24px 24px 0 0; no border | 16×16px radial-gradient concave fillets; bottom-to-section-top delta measured 0px at all viewports |
| Solution tabs / panel | Tab button min-height 48px; padding 12px 24px; CSS button radius 0 and border 0 | Visible contour is one SVG path: 1px stroke, 24px panel/cap radius and 16px junction fillets |
| Solution panel / strip | Panel padding 20px 24px, transparent 1px border, margin-top −1px; strip inset 40px, gap 16px | ≤760px panel padding 24px, strip scrolls; outline recalculated to the selected tab |
| Dividers / special rules | Standard 1px theme border; Mission closing left rule 3px brass | Progress figure has a 1px column divider above 760px, bottom divider below; footer top border 1px |
| Radius tokens | control 3px; small 4px; medium 8px; fillet 16px; tab 24px | Tokens do not imply every component has a radius; SVG outline owns the Solution silhouette |
| Hover / active / disabled | Early Access hover theme button-hover; active brightness(.94); disabled opacity .5, not-allowed cursor | Inputs disabled opacity .5; hover rules exclude disabled buttons |
| Keyboard focus | 2px outline `--focus`, offset +5px | Solution tab/panel outline offset −5px; selected/hover/focused tab label has existing scale(1.05) transform |

### Open mobile navigation (measured expanded state)

| Viewport | Full disclosure panel W×H | Link W×H | Link size / weight / leading / tracking | Expanded Early Access W×H |
| --- | --- | --- | --- | --- |
| 1000×900 | 1000×307 | 900×52 | 12 / 500 / 18 / 1.44 | 155×46 |
| 600×900 | 600×307 | 540×52 | 12 / 500 / 18 / 1.44 | 155×46 |
| 390×844 | 390×307 | 342×52 | 12 / 500 / 18 / 1.44 | 155×46 |
| 360×800 | 360×307 | 312×52 | 12 / 500 / 18 / 1.44 | 155×46 |

Expanded disclosure: padding 12px top / 24px bottom, 1px top border, maximum height `100svh - 72px`, overflow-y auto. Menu links have 17px block padding; link type is 12/500 with .12em tracking. The panel is hidden when closed and forcibly hidden at ≥1001px.

## 6. Exact breakpoint effects

| Boundary | Actual CSS/layout change |
| --- | --- |
| 380 / 381px | Email form switches from wrapped full-width controls to inline input + 155px button |
| 600 / 601px | Navbar switches compact CTA/16px wordmark/10px motto/icon-only toggle to full CTA/19px wordmark/11px motto/text toggle |
| 760 / 761px | Hero normal-flow media and mobile type switch to absolute 44vw media / seven-column copy and viewport-height composition; Solution tabs switch scroll strip ↔ grid; Progress release stacks ↔ 1.1:1; footer one ↔ two columns; benefits column ↔ row |
| 820 / 821px | Editorial type formulas switch; Mission and Solution intro/detail stack ↔ columns; mobile font-size-adjust stops |
| 900 / 901px | Projects one column ↔ 45:55; separate label row begins; 32px minimum headline stops |
| 1000 / 1001px | Mobile disclosure/toggle ↔ centered desktop navigation; header grid two ↔ three zones |
| 1100 / 1101px | Hero seven ↔ eight grid columns, 44vw ↔ min(50vw,800px) image and aspect multiplier begins; Progress release 1.1:1 ↔ 1.4:1; footer two ↔ four columns; Projects explicit headline break hidden |

| Viewport | Hero headline | Mission / Solution / Progress headline | Product headline | Project headline | Hero form W×H | Footer computed columns |
| --- | --- | --- | --- | --- | --- | --- |
| 380×900 | 41.8 | 19.76 | 16.72 | 32 | 332×112 | 332px |
| 381×900 | 41.91 | 19.81 | 16.76 | 32 | 333×58 | 333px |
| 600×900 | 48 | 31.2 | 26.4 | 32 | 520×58 | 540px |
| 601×900 | 48 | 31.25 | 26.44 | 32 | 520×58 | 540.891px |
| 760×900 | 48 | 39.52 | 32 | 39.52 | 520×58 | 684px |
| 761×900 | 36 | 39.57 | 32 | 39.57 | 389.52×58 | 330.438px 330.453px |
| 820×900 | 36 | 40 | 32 | 40 | 420.5×58 | 356.703px 356.703px |
| 821×900 | 36 | 30.38 | 24 | 32 | 421.02×58 | 357.125px 357.141px |
| 900×900 | 38.09 | 33.3 | 24 | 33.3 | 462.5×58 | 391.5px 391.5px |
| 901×900 | 38.13 | 33.34 | 24 | 33.34 | 463.02×58 | 391.938px 391.938px |
| 1000×900 | 42.38 | 37 | 24 | 37 | 514.58×58 | 435px 435px |
| 1001×900 | 42.42 | 37.04 | 24.02 | 37.04 | 515.09×58 | 435.438px 435.438px |
| 1100×900 | 46.61 | 40.7 | 26.4 | 40.7 | 520×58 | 478.5px 478.5px |
| 1101×900 | 56.06 | 40.74 | 26.42 | 40.74 | 520×58 | 283.766px 202.688px 243.234px 162.156px |

These width-pair captures all use 900px viewport height; they isolate the breakpoint behavior from aspect-ratio differences in the eight principal samples.

## 7. Differences and exceptions still present — reported without changes

| Finding | Actual implementation | Status / justification |
| --- | --- | --- |
| Progress metadata is not 12px | `.em-meta` is still 11px / 18.7px / normal tracking; this affects status and media caption | Remaining inconsistency; corrects the earlier report’s blanket 12px claim. No change made |
| Technical text has several line-height/tracking roles | Mission caption 12/16.8/.24; Progress status/caption 11/18.7/normal; specs/chips 12/19.2/normal; closing benefits 12/19.2/.18 | Actual local/inherited roles; do not describe them as one identical style |
| Section heading jumps at 820px | 820px: 40px; 821px: 30.377px (computed, rounded in table) | Existing breakpoint discontinuity, not continuously fluid. Also affects product roles; reported, not corrected |
| Hero jumps at 760/761px | Mobile viewport-based type switches to container-based type with 36px minimum | Existing approved responsive composition exception; exact values in boundary table |
| Project heading differs on mobile | 32px minimum versus Mission/Solution/Progress 20.28px at 390px and 18.72px at 360px | Preserved approved Project title exception; not a single universal mobile headline size |
| Hero and closing are display exceptions | Hero aspect/container-scaled; closing max 68px; ordinary section max 56px | Deliberate hierarchy and composition |
| Compact product paragraphs | Progress and Project descriptions use 16/27.2; intro paragraphs use shared body scale | Preserved compact release/project records |
| SVG text is scaled with media | 14-unit Solution and 10-unit Progress labels have viewport-dependent screen glyph size | Drawing annotation exception; screen-size values documented above |
| Navbar / footer lockups differ | Navbar 19px desktop/16px compact versus footer 20px desktop/17px mobile; motto 11/10 versus 12/11 | Existing lockup footprint exceptions, reported explicitly |
| No forced common section height | Per-section padding and content remain different; footer grows for 44px links | Preserved content-driven compositions |
| Project visibility | Draft preview in development; no section in production at zero published projects | Existing visibility contract; no fabricated production measurement |
| Conditional form/media states | Nonempty signup response adds 12px margin plus response line box; loaded video caption changes text | Height tables cover the stated initial state, not every interactive outcome |

## 8. Historical comparison and verification provenance

| Area | Pre-unification height at 1440×900 | Final measured height at 1440×900 | Pre top/bottom → final top/bottom |
| --- | --- | --- | --- |
| Navbar | 72 | 72 | 0/0 → 0 / 0 |
| 01 Hero | 855 | 855 | 72/0 → 72 / 0 |
| 02 Mission | 423.78 | 423.78 | 24/55.2 → 24 / 55.2 |
| 03 Solution | 801.38 | 801.38 | 64/96 → 64 / 96 |
| 04 Progress | 686.83 | 686.83 | 40/40 → 40 / 40 |
| 05 Open Projects preview | 620.75 | 620.75 | 48/96 → 48 / 96 |
| 06 Get Involved | 380.47 | 400.67 | 64/48 → 64 / 48 |
| Footer | 241.78 | 303 | 48/48 → 48 / 48 |

Historical cells are taken from the saved pre-unification browser capture; final cells are from this fresh measurement pass. The previous audit’s unsupported generalizations (Hero label 11.6px at 1440×900, all technical text 12px, and blanket identical lockup metrics) are superseded by the computed tables above.

| Verification / artifact | Result |
| --- | --- |
| Fresh principal viewports | 8 production + 8 development captures; no horizontal page overflow |
| Exact boundary samples | 14 development captures: 380/381, 600/601, 760/761, 820/821, 900/901, 1000/1001, 1100/1101; no horizontal page overflow |
| Production/development parity | All captured computed CSS properties match for shared rendered selectors; project preview is development-only |
| Fillet attachment | All three boundary tabs have 0px bottom-to-section-top offset in every principal capture |
| Raw measurements | Ignored local `.visual-qa/final-measurements.json`, `final-measurements-extra.json`, `final-measurements-icons.json` |
| Source inspection | `app/styles/{tokens,typography,components}.css`, `app/globals.css`, homepage CSS/TSX, header/footer CSS, transition CSS, `app/fonts.ts` |
| Reporting-only integrity | Implementation/config/media and other documentation hashes checked against this task’s baseline; only this report changes |
| Lint/type/build | Not rerun for this documentation-only task; prior implementation-pass checks remain historical verification |
| Existing functional limitations | Forms do not send/save data; legal pages incomplete; draft project media is a placeholder |

