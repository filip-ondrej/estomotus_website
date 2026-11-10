# ESTO MOTUS — decisions and implementation status

Updated: 2026-11-09. This is the starting point for design decisions in fresh
conversations. The user is the creative director and final decision-maker.
Agent recommendations, existing previews and code are not approvals.

Read [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md) for visual rules and
[WEBSITE_CONTENT.md](WEBSITE_CONTENT.md) for exact approved copy. A new explicit
user decision overrides the older record for that decision. Update the affected
document and add a dated entry below; do not rely on chat history.

## Current development workflow

**2026-11-09 override:** The user explicitly confirms that all six homepage static
compositions have been approved individually and authorizes a whole-site design
consistency/responsive audit without redesign. Earlier “IN PROGRESS” and “NOT YET
DESIGNED” statuses below are historical and superseded for those compositions.
Current task: unify shared roles and verify responsive layout. No animation is
authorized. See [DESIGN_UNIFICATION_AUDIT.md](DESIGN_UNIFICATION_AUDIT.md) for measured
before/after results, final tokens and preserved exceptions.

- Implement routine UI/UX iterations directly on the main homepage in the selected production section component. Work chronologically, one section at a time.
- Current section: **01 — Hero, static design IN PROGRESS — implemented for user review**. The supplied joint image is integrated. The latest explicit brief authorizes the Mission transition: approved Mission copy now renders with its cue inside the dark section.
- Keep every iteration limited to that section. Preserve the current navigation, all six section components/content, tokens, fonts, routes and unrelated functionality.
- Do not create `/design-lab`, experimental routes, variant utilities or multiple designs unless explicitly requested. The previous preview code has been removed; none of its options was selected.
- The user reviews and approves designs. Approved content and design decisions remain locked until explicitly reopened. A request for an iteration is not final approval of its result.
- Preserve previous versions through Git, without rewriting history. Final animations and scroll interactions wait until static designs for all six sections are finalized and approved.

**Git state:** inspection during cleanup found an unborn `main` branch with no
commits and untracked project files. Git rollback is therefore not available yet.
Establish an initial project commit before the next design iteration to fulfill
the intended version-history workflow; this cleanup does not create commits or
alter Git configuration. Before deleting experiment files, a verified recovery
archive was saved at `.visual-qa/cleanup-recovery-20261104-172103.zip`. It is an
ignored local safety copy, not Git history. Production code is preserved.

Cleanup exceptions: existing documentation and production QA tooling are retained.
The unreferenced `public/file.svg`, `globe.svg`, `next.svg`, `vercel.svg` and
`window.svg` were not proven to belong to UI experiments, so they are untouched.
Windows denied removal of the ignored browser-cache folders
`.visual-qa/edge-header-c`, `edge-header-lab`, `edge-header-studies` and
`edge-hero-static`; these are not application routes or imported code. Do not
change file ownership or unrelated browser processes to remove them.

## LOCKED

| Decision | Date | Explanation |
| --- | --- | --- |
| Six-section homepage structure and approved copy | 2026-11-04 | Hero → Mission → Solution → Already in Motion → Open Projects → Get Involved. Exact copy is in WEBSITE_CONTENT.md. Section 05 hides its content when there are no published projects; its modular slot remains. |
| Brand color palette | 2026-11-04 | Ivory, graphite, soft white, dark text, silver, warm/dark borders and restrained brass; see DESIGN_SYSTEM.md. |
| Typography direction | 2026-11-04 | Licensed Neue Haas Grotesk preferred; IBM Plex Sans fallback; IBM Plex Mono for technical text. Self-host fonts. |
| Modular section architecture | 2026-11-04 | Each section owns its TSX component; shared layout/UI remain reusable. Preserve the current root App Router. |
| Static design before animations | 2026-11-04 | All six static sections require approval before new animations or scroll interactions. |
| No unsolicited redesigns | 2026-11-04 | Work only in the currently selected section, directly on the homepage when requested. No separate experiments or multiple variants unless explicitly requested. The user approves the result. |

Locked decisions change only through an explicit user decision. Their presence
here is not blanket authorization to synchronize all production code.

## PROVISIONALLY APPROVED

| Decision | Date | Explanation |
| --- | --- | --- |
| Current three-zone, full-width glass navigation concept | 2026-11-04 | Brand left, centered uppercase navigation, Early Access right; warm/smoked adaptive glass. Latest brief marks the concept provisional. Preserve the existing implementation unless a header task is requested. |
| Intended section background sequence | 2026-11-04 | Ivory → graphite → graphite → ivory → ivory → graphite, with Section 05 conditional on published projects. No scroll animation approval. |

Provisional is not final approval of every dimension, effect or future variation.
Do not use it as permission to redesign the current header or section layouts.

## IN PROGRESS

| Work | Date | State |
| --- | --- | --- |
| Section 01 hero static UI/UX | 2026-11-05 | IN PROGRESS, awaiting review of the fine-tuning pass. Boundary remains Y = 750.22px at 1600 × 900, including the unchanged header. Headline remains approximately 93px, weight 600, with two lines and 0.97 line-height. Image source/scale, copy, structure and alignment are preserved; image offset, paragraph measure, form finish, annotation and Mission cue clarity are refined. Mission cue remains centered inside the dark section and links to approved Mission content. No final design approval is implied. |
| Cropped partial joint visual and editorial composition | 2026-11-05 | The user supplied `src/heropicture.png` and explicitly requested its integration. A byte-identical copy at `public/media/heropicture.png` is displayed with its original aspect ratio, transparency and colors, without an image box or generated substitute. This source selection supersedes the earlier missing rear/three-quarter asset requirement. A visible caption identifies it as a concept in development. |

## NOT YET DESIGNED

| Work | Date | State |
| --- | --- | --- |
| Static UI/UX for Sections 02–06 | 2026-11-04 | Content/purpose is approved; final section designs are not. Existing compositions are implementation history, not new design approvals. |
| Final animations and scroll interactions | 2026-11-04 | Deferred until all six static sections are complete and approved. No GSAP or cinematic scroll implementation is authorized now. |

## Implementation differences — recorded, not authorized work

The cleanup preserves the current production website. A future section task must
explicitly scope any of the following changes; these are not automatic work orders.

| Area | Approved direction / current implementation |
| --- | --- |
| Hero copy and image | Approved headline and exact supporting paragraph are implemented. The user's supplied `heropicture.png` remains integrated with its concept caption. The boundary and functional Mission cue are implemented under the latest explicit transition brief. No experimental route is used. |
| Mission | Exact approved copy from WEBSITE_CONTENT.md now renders by default, preserving the existing optional children interface. The centered cue is inside the dark section and targets `#mission-content`. Final Mission static design approval remains pending. Earlier inactive-slot notes are historical. |
| Solution | Approved headline, four categories and shared panel are documented. Current code still has the older "Less time integrating" content and a three-step workflow. Exact new panel/body copy remains to be supplied during section work. |
| Already in Motion | New Batch 01 copy is approved. Current `ProgressSection.tsx` retains the older "Designed here. Built here." treatment. |
| Open Projects | Approved behavior is published-only and hidden at zero releases. Current data contains two planned, unreleased studies and the section still previews them. No published projects are evidenced in the repository. |
| Get Involved | Approved two-path participation section differs from the current founder-led composition. Founder content should primarily live on `/about`; do not move it during this task. |
| Primary font | IBM Plex Sans is installed as the current primary via next/font/local (official IBM 1.1.0, OFL-1.1, normal/italic 400–700). IBM Plex Mono remains technical-only. Licensed Neue Haas files are not supplied. |
| Header height/status | The latest brief gives 80–88px as a desktop starting reference and calls the concept provisional. Current code is 72px, following an earlier compact-header adjustment. Preserve 72px until a scoped header decision; do not silently resize it. |
| App Router location | The brief's intended example is `src/app/page.tsx`; actual working routing is root `app/` with `app/page.tsx`. Document the convention, preserve the current router, and require a separate migration task before moving it. |
| Signup, inquiries and contact | Existing forms explicitly do not send/save data. The approved email text is `hello@estomotus.com`; mailbox delivery/functionality is unverified. Verify before describing it as operational, without sending unsolicited test messages. |
| Legal pages | Required in the wider architecture; no implemented legal routes were found. Real legal/company content is still needed. |

## Dated change log

### 2026-11-09 — Approved compositions; shared design unification

- The user confirms all six static homepage compositions are individually approved,
  superseding the older section approval statuses. This does not approve agent-created
  redesigns or start animation work.
- Authorized one-pass typography, spacing, color, control, grid and responsive
  corrections across the website. Preserved approved copy, line breaks, media and
  project preview/publication rules. Consolidated existing tokens and primitives;
  retained content-driven section heights and deliberate display exceptions.
- Measured all eight requested homepage viewports, verified subpage layouts and
  interactions, and documented the results in DESIGN_UNIFICATION_AUDIT.md. Existing
  form persistence and incomplete legal content remain outside this visual task.

### 2026-11-05 — Authorized typography and token consistency audit

- User requested IBM Plex Sans installation and design-system consistency without redesign, and identified Hero, Mission and navbar as visually approved. This supersedes the earlier missing-Plex implementation gap; historical decisions and entries are retained.
- Installed official IBM Plex Sans 1.1.0 WOFF2 normal/italic faces at weights 400, 500, 600 and 700, with provenance and OFL license. Local Next.js font loading keeps browser and build font requests self-contained. Neue Haas remains uninstalled; Mono remains technical-only.
- Named existing Hero/Mission type roles, UI/focus strokes, control/tab/fillet radii and the current stronger Solution outline. Solution reuses these tokens with accessible brass active-tab text; its copy, outlined layout, chips, schematic and interactions are preserved.
- Local font-metric compensation and measured control widths preserve approved section dimensions, declared type sizes/tracking/leading, spacing and text wrapping at the audited viewports. This audit does not approve a new composition or add animation.

### 2026-11-05 — Hero fine-tuning without boundary or structure changes

- User authorized fine adjustments only. Preserved the headline, all copy, image source/scale, navbar, palette, section structure and heights. At 1600 × 900 the unchanged Hero/Mission boundary is **Y = 750.22px**; boundaries at 1440px and 390px remain **731.70px** and **949.64px**. Mission content geometry is also unchanged.
- Moved the image **24px left and 16px up** on desktop, retaining right/bottom cropping and the 704px width at 1600px. Tablet offset adjustment is 12px left / 8px up; mobile image flow is unchanged. The exact concept annotation is now 11px technical text, positioned closer to the product without adding decoration.
- Paragraph and form now share a 512px maximum. Desktop paragraph uses balanced line wrapping and 0.005em tracking; font size, line-height, line count and rendered height are unchanged. Mobile retains its existing paragraph wrapping behavior.
- Form remains inline and **58px tall**: refined 5px outer padding, 46px controls, warmer theme-derived surface, 3px corners, a compact semibold CTA with a subtle inset highlight and arrow divider, plus visible keyboard focus. Availability disclosure and truthful unsaved-email response are preserved; no new functionality or motion.
- Mission cue uses higher-contrast palette-derived text, weight 500, an 8px label/arrow gap and a 14px brass arrow. It retains its centered position, 44px target and existing anchor behavior. Mission content styling is untouched.
- Production screenshots reviewed at 1600 × 900, 1440 × 900 and 390 × 844; tablet also checked during development. Before/after measurements confirm identical boundaries, heights, paragraph line counts and form height, with no text/image collisions or horizontal overflow. Keyboard submission and Mission anchor pass; browser console has no errors. Lint and production build pass without warnings. Changes are limited to `HeroSection.css`, `MissionSection.css` and this record. Design remains **IN PROGRESS**.

### 2026-11-05 — Corrected Y=750 boundary and implemented Mission transition

- The user explicitly corrected the target: Hero must end at Y ≈ 750px from the viewport top, **including** the header. This supersedes the previous interpretation of 750px excluding the header. Reduced only desktop Hero bottom padding from 128px to 54px. Typography, two-line headline, all copy/alignment, gearbox asset/scale/right/bottom offsets, colors and navigation are unchanged. Header remains its existing 72px; it was not resized to 80px.
- The brief explicitly scopes changes at the top of Mission. Activated its previously inactive default content using the exact approved headline, paragraph and closing statement from WEBSITE_CONTENT.md, with existing section/container/typography primitives. Preserved the optional `children` content interface. Added no alternate copy, decoration, spacer or transition section. Sections 03–06, subpages and shared design-system files are unchanged.
- `ABOUT OUR MISSION ↓` is inside the graphite Mission section, horizontally centered in the viewport, with a brass arrow and a 44px link target. It links to `#mission-content`, which uses the existing 96px scroll margin to account for the fixed header. Native link behavior and the existing reduced-motion support are preserved; no animation was added.
- Actual production measurements at 1600 × 900: Hero bottom and Mission top are both **Y = 750.22px**, with zero gap; **149.78px** of Mission is initially visible. The cue occupies **Y = 774.22–818.22px**, is precisely centered and fully visible without scrolling. At 1440 × 900, the boundary is Y = 731.70px. At 390 × 844, Hero grows naturally to Y = 949.64px, with the form fully visible in its flow and no horizontal overflow.
- Reviewed browser screenshots at all three requested sizes. Verified click navigation to `#mission-content`: content lands at Y = 96.22px below the unchanged 72px header, and focus moves to the content target. Normal native scrolling uses the existing smooth setting; reduced motion uses `auto`. Headline/image/form do not overlap; browser console has no errors. Lint and production build pass without warnings. Changed `HeroSection.css`, `MissionSection.tsx`, new `MissionSection.css` and this record. Design remains **IN PROGRESS** for user review; no further creative adjustments were made.

### 2026-11-05 — Hero scale and visual rhythm refinement

- The user's latest composition brief authorizes a larger headline, more distinct stack spacing and a 740–760px hero excluding the header. Implemented in hero-only CSS: measured height is 752.22px at 1600 × 900, plus the unchanged 72px header allowance. At 1440 × 900 it is 733.70px excluding the header. Height follows content and padding, with no fixed height, viewport minimum or vertical centering of the whole stack.
- Desktop headline occupies eight grid columns, capped at 896px; it measures 93.18px at 1600px and 88.61px at 1440px, with weight 600, 0.97 line-height and -0.055em tracking. Both desktop lines fit without intersecting the image. Shared alignment is retained. Label/headline/paragraph/form/disclosure gaps are 38 / 56 / 32 / 12px; body is 18px with 1.65 line-height and a 530px maximum, shared by the signup.
- Preserved image bytes, transparency and orientation. At 1600px it is 704px wide, positioned 128px beyond the right edge and 32px below the hero boundary for deliberate cropping. The concept caption remains attached to the figure. Tablet uses a smaller image and seven text columns; mobile keeps natural flow with the image below all controls and reduced spacing.
- Mission still renders nothing. Asked whether its approved copy could be activated as an exception to the explicit restriction on other-section changes; no answer was available during this iteration. Mission and all other sections remain untouched. The requested Mission cue remains pending; the small graphite portion visible below the hero is currently Solution, not Mission.
- Actual production screenshots reviewed at 1600 × 900, 1440 × 900, 1024 × 768 and 390 × 844. Common alignment, exact hero copy, two desktop/tablet headline lines and natural mobile wrapping are preserved, with no image/text/form overlap or horizontal page overflow. Browser console has no errors. Lint and production build pass without warnings. Only `HeroSection.css` and this record changed; Hero remains **IN PROGRESS**.

### 2026-11-05 — Supplied hero image integration; Mission cue pending

- Integrated the user's transparent `src/heropicture.png` through a byte-identical copy at `public/media/heropicture.png`. During work the source was externally updated from 1050 × 840 to 1100 × 825; the public copy and intrinsic dimensions were refreshed to match the latest supplied file. No agent edits were made to the source image. `HeroSection.tsx` uses `next/image` with intrinsic dimensions, preload and `unoptimized`, preserving supplied image bytes rather than generating or transforming media. Only hero-boundary clipping is applied in CSS.
- At 1600px the image is 720px wide, anchored to the hero bottom and offset 40px beyond the right viewport edge. It has no background, border, shadow or card. Caption: "Concept visualization · In development". At tablet widths it scales to 38vw; mobile places a proportional image below all copy and controls.
- The latest brief's semibold request supersedes weight 500. Desktop headline is weight 600, approximately 85.63px at 1600px, with 0.98 line-height and two lines. Body/form retain their 500px maximum and common left alignment. Stack gaps are 32 / 36 / 24 / 12px. Hero ends at approximately 679px at 1600 × 900 and 655px at 1440 × 900, including the existing header allowance. No viewport minimum height or animation was added.
- Mission still renders nothing. Asked whether to activate its documented approved copy as the sole exception to the instruction to preserve other sections; no answer was available during integration. The Mission cue is pending, not rendered as a dead link or pointed to Solution. The graphite section currently visible below the hero is Solution. Mission and all other section components remain unchanged.
- Actual screenshots reviewed at 1600 × 900, 1440 × 900, 1024 × 768 and 390 × 844: image loads at the correct ratio, anchors to the hero bottom, never overlaps the headline/form, and causes no horizontal page overflow. Desktop/tablet preserve two headline lines; mobile uses three natural lines and lets the hero grow with content. Hero static design remains **IN PROGRESS**.
- Final production verification with the latest 1100 × 825 image passed at all four sizes. Served PNG bytes match the latest source exactly; no browser errors were reported. Keyboard focus remains visible, and signup reports that the dummy email was not saved or sent. Lint and production build pass without warnings. Baseline hashes show no unrelated implementation changes; the source-image update was external and was preserved.

### 2026-11-05 — Weight 500 and larger title

- The user explicitly selected headline weight 500 and requested a further size increase. Desktop sizing is now `10.9cqi`, capped at 92px (89.74px measured at 1600px). Tracking is -0.055em to retain the two-line desktop composition within the existing grid. Mobile sizing increases to `11vw`, bounded at 32–48px, with -0.04em tracking.
- Existing spacing and all other content/components are preserved. Browser screenshots at 1600 × 900, 1440 × 900, 1024 × 768 and 390 × 844 confirm no overflow, two desktop/tablet headline lines and three natural mobile lines. Hero remains **IN PROGRESS**. The selected weight is recorded without implying approval of the whole hero.

### 2026-11-05 — Lighter headline and restored breathing room

- The user clarified that impact should come from size rather than heavy weight, and requested a moderately taller hero. Reduced headline weight from 700 to 600; increased desktop sizing to `10.4cqi`, capped at 88px. At 1600px the actual size is 85.63px, with both lines contained in the existing text region.
- Increased desktop composition top padding to a fluid 56–96px and bottom padding to 48px, with 48px section bottom padding. Hero height at 1600 × 900 is approximately 721px, up from 649px. Mobile keeps its existing composition spacing, with only 16px more section bottom space. No fixed or viewport minimum height was introduced.
- Changed only `HeroSection.css` and this record. Copy, grid alignment, form widths, navigation, other sections and the pending Mission transition are preserved. Design remains **IN PROGRESS**.
- Lint and production build pass without warnings. Actual screenshots reviewed at 1600 × 900, 1440 × 900, 1024 × 768 and 390 × 844: no hero overflow; two desktop/tablet headline lines and natural three-line mobile wrapping. QA artifacts are under `.visual-qa/hero-balance-20261105/`.

### 2026-11-05 — Hero prominence and shorter proportions; Mission transition pending

- The user's proportions brief supersedes the previous 69px headline and full-viewport minimum height. Hero-only CSS now uses seven of twelve desktop columns for the headline region, capped at 832px, with 700 weight, 0.98 line-height and sizing bounded at 84px. Measured headline size at 1600px is 81.51px; both desktop lines fit within the left region. Paragraph/signup widths and shared left alignment are preserved.
- Removed the `100svh` height minimum. Content determines height with 48–64px top spacing below the header, 32px composition bottom spacing and 32px section bottom spacing. At 1600 × 900 the section ends at approximately 649px including its 72px fixed-header allowance. The future visual region remains empty at the lower right; no image or placeholder was added.
- Mission is still an inactive slot: `MissionSection` returns null without children and the homepage supplies none. The user was asked whether to activate it with the documented exact approved copy or leave it inactive. No reply was available during this iteration. Mission content/composition remains untouched, and the requested cue is pending rather than linked to the unrelated Solution section or a nonexistent target. The visible dark section below the shortened hero is currently Solution, not Mission.
- Actual browser screenshots reviewed at 1600 × 900, 1440 × 900, 1024 × 768 and 390 × 844: no hero overflow, shared alignment preserved, two headline lines on desktop/tablet and natural mobile wrapping. `npm run lint` and `npm run build` pass without warnings. Hero remains **IN PROGRESS**; the Mission transition is not claimed complete.

### 2026-11-05 — Hero 01 grid and typography correction

- The user's layout-correction brief supersedes the previous oversized full-width headline, column-2 body/form offset, forced mobile phrase breaks and floating development-status label. Approved headline/paragraph copy, navigation, other sections and the global design system remain unchanged. Hero design remains **IN PROGRESS** until the user reviews it.
- Moved all left-side elements into one production `HeroSection.tsx` stack. Kept the empty right-side visualization region in the desktop/tablet grid, with no image, card or decorative placeholder. Removed visible development-status text; a truthful development/concept caption must accompany the actual visualization when supplied.
- Hero-local container geometry uses the existing 1440px maximum and fluid gutters without a second internal inset. At 1600px: 80px outer margins, a 660px content stack, 80px clear space before the reserved visualization area, and a 12-column grid. The stack occupies columns 1–6 on desktop, columns 1–7 at 761–1100px, and one column on mobile. Global container/header geometry is untouched.
- Headline uses the existing primary font stack at weight 600, line-height 1.01 and tracking -0.04em. Its desktop size follows the actual stack width (`10.5cqi`, bounded at 32–70px): measured 69.3px at 1600px, 66.15px at 1440px and 55.33px at 1024px. Mobile uses fluid 32–46px sizing and natural balanced wrapping, measured at 40.95px over three lines at 390px. No font download or global typography change.
- Intro label: 12px, weight 500 and 0.10em tracking with the existing small brass square. Paragraph and signup are capped at 500px; desktop body text is 18px with 1.6 line-height. Shared form/button styling is reused. Stack gaps are 32px, 36px, 26px and 12px from label through disclosure, with one common left edge.
- The group is vertically centered as a unit in a minimum-height area of `100svh - 72px`, below the unchanged header offset. Height grows with content rather than clipping it. Screenshot measurements confirm equal space above/below the stack within that area.
- Verification: lint and production build pass without warnings. Reviewed actual production-browser screenshots at **1600 × 900, 1440 × 900, 1024 × 768 and 390 × 844**. All show aligned label/headline/paragraph/form/disclosure, unchanged exact copy, no hero overflow, a headline contained within the left region, and appropriate form sizing. The first three show two headline lines; mobile shows three natural lines. Screenshots and geometry measurements are saved under the ignored `.visual-qa/hero-layout-20261105/` directory.

### 2026-11-05 — Hero 01 implemented for review; visual asset pending

- The user explicitly authorized the approved Hero copy and static industrial editorial direction on the production homepage. Implemented only `HeroSection.tsx` and its supporting `HeroSection.css`; navigation, Sections 02–06, shared forms, subpages, tokens, fonts and media are preserved.
- Replaced the previous headline/description with the exact approved copy. Removed the old packshot container, glass concept card and unrelated baseline marketing links. Added responsive uppercase typography, offset body/capture alignment and a quiet development-status disclosure on warm ivory. No animation, scroll effect, new route or backend was added.
- Preserved the existing inline `EmailCapture`, including its pre-submit notice and truthful response that emails are neither saved nor sent. Styling and visible keyboard-focus treatment are confined to the hero.
- Inspected `public/media/joint-concept.png` and `.webp`: both are 1254 × 1254 opaque RGB images with no alpha channel, showing the entire speculative joint from the front/three-quarter angle against black. Their documented provenance is AI-generated concept art, not manufactured ESTO MOTUS hardware. CSS cannot provide the missing perspective or a valid transparent cutout. Neither asset is displayed in this iteration; no replacement was generated or fabricated.
- Required asset: an approved render from real product CAD or an explicitly approved concept, viewed from the rear/three-quarter macro angle and composed to enter from beyond the right edge. Supply transparent PNG or WebP with alpha, preferably at least 2400px wide, neutral lighting suited to `#ECE7DF`, useful visible housing/connection detail and crop room. Avoid a baked black background, full floating packshot, text or UI. If it depicts a concept, restore a visible concept-visualization caption when integrating it.
- Static design remains **IN PROGRESS**, pending user review and the replacement visual. The authorization to implement this iteration is not final design approval. Sections 02–06 and final animation work remain pending.
- Verification: `npm run lint` and `npm run build` pass without warnings. Browser checks at 320, 390, 768, 1024 and 1440px confirm exact copy, ivory background, no hero overflow and inline capture. The compiled production hero was also checked; keyboard focus is visible and Enter submission truthfully reports that the dummy email was not saved or sent. File hashes confirm unrelated existing implementation/media files are unchanged.

### 2026-11-04 — Direct homepage workflow and experiment cleanup

- The user's cleanup brief supersedes the earlier default of isolated design-lab exploration. Routine section iterations now happen directly in production components on the main page, chronologically and within one selected section.
- Removed the hero preview route, variant components, scoped styles, experiment-only media and obsolete preview QA scripts/artifacts. Header preview routes had already been removed. The actual `HeaderBar` remains production code.
- No preview winner was selected or promoted. Current homepage content, all six section modules, shared design system and working subpages are preserved byte-for-byte.
- Retained existing documentation as historical reference and marked removed routes/assets accordingly. Do not recreate them without an explicit request.
- Hero static design remains IN PROGRESS for the next task; Sections 02–06 and final animation work remain pending. No animation or hero redesign is part of cleanup.
- Git currently has no commits. A verified ignored local recovery archive protects deleted source/artifacts; an initial project commit is still needed for future Git recovery. Git history/configuration was not changed.
- Cleanup verification passed: ESLint, standalone TypeScript and production build; seven production URLs returned 200, removed preview URLs returned 404, and eleven referenced local assets loaded. All 63 preserved production code/config/media files match the pre-cleanup hashes. Browser-cache deletion exceptions are recorded above.

### 2026-11-04 — Permanent context established (earlier record)

- The user's permanent-project-context brief is the authority for this record. It supersedes older content/design instructions where they conflict.
- The new hero headline and supporting copy replace the earlier approved headline in the content specification; no UI implementation is included.
- Mission copy is now approved, resolving the old "missing Mission copy" documentation gap.
- IBM Plex Sans replaces the system stack as the approved fallback direction; the actual font-loading code is unchanged.
- Navigation is recorded as provisionally approved per the latest brief. Its existing compact implementation is preserved, with the 72px versus 80–88px distinction documented.
- All hero options remain explorations. No agent recommendation or critique-driven revision was promoted to an approved design.
- Existing implementation notes and hero-lab documentation are retained as reference, subordinate to these three canonical documents. Project continuity must come from the repository, not previous chat history.

For future changes, add the date, the user's explicit selection/decision, what it
supersedes, and whether implementation is requested or still pending. Never label
a proposal as approved.
