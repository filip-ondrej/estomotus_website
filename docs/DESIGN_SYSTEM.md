# ESTO MOTUS — approved design foundation

Updated: 2026-11-09. Source: the user's permanent-project-context and design-unification briefs.

All six homepage static compositions are individually approved per the user's
2026-11-09 instruction. Shared design unification preserves them. The measured
current scale, controls, spacing and responsive exceptions are recorded in
[DESIGN_UNIFICATION_AUDIT.md](DESIGN_UNIFICATION_AUDIT.md). No animation work is
authorized by this audit.

Read [DECISIONS.md](DECISIONS.md) for approval status and implementation differences.
Read [WEBSITE_CONTENT.md](WEBSITE_CONTENT.md) for exact homepage copy. This document
records design direction, not permission to redesign or implement pending work.

## Brand

ESTO MOTUS is developing modular motion hardware for robotics and physical AI.
The identity combines premium German industrial engineering, warm editorial
minimalism, precision, craftsmanship and restrained modern technology.

Avoid generic SaaS styling, exaggerated futuristic graphics, neon, glow,
unnecessary gradients, decorative stock imagery and unnecessary decorative
elements. Strong imagery should show or clearly label actual hardware, concepts
or intentionally replaceable media slots.

## Colors

| Token | Color | Role |
| --- | --- | --- |
| Warm ivory | `#ECE7DF` | Light section foundation |
| Graphite | `#0B0B0C` | Dark section foundation |
| Soft white | `#F5F4F2` | Light text and selected surfaces |
| Dark text | `#111111` | Primary text on light surfaces |
| Muted silver | `#8F8B86` | Secondary palette reference |
| Warm border | `#D0CBC3` | Light-surface borders |
| Dark border | `#292929` | Dark-surface borders |
| Brass | `#A78556` | Restrained signature accent |

Brass belongs in the motto, selected technical details and subtle interactive
accents. Do not use it as a dominant color, a large headline fill or a large
colored CTA. Use contrast-adjusted variants for small text. Existing semantic
variants are brass `#76572E` on ivory and `#C2A16F` on graphite; muted text uses
`#655F58` on ivory and `#A7A29B` on graphite. Check contrast in the actual context.

Tokens live centrally in `app/styles/tokens.css`, imported by `app/globals.css`
and mapped to Tailwind. Components consume semantic colors such as `background`,
`foreground`, `muted`, `line`, `surface`, `accent` and `focus` rather than defining
independent palettes. `data-theme="light"` and `data-theme="dark"` provide local
themes; `data-nav-theme` marks sections for header adaptation.

## Typography and wordmark

- Preferred primary typeface: **Neue Haas Grotesk**, only with supplied, properly licensed webfont files.
- Current primary typeface: **IBM Plex Sans**, the approved fallback until licensed Neue Haas files are supplied.
- Technical typeface: **IBM Plex Mono**, for specifications, values and machine metadata, not ordinary body copy.
- Self-host fonts. No runtime font CDN requests, unauthorized downloads or imports of nonexistent font files.
- Use a strong editorial hierarchy with deliberate line breaks, controlled tracking and consistent spacing. Keep navigation uppercase.
- Wordmark: **ESTO MOTUS**, strong primary-font typography with controlled letter spacing and no decorative symbol.
- Directly beneath it: *Let it be set in motion.* Small, italic, brass and aligned with the wordmark.

IBM Plex Sans is self-hosted through `next/font/local` in `app/fonts.ts`, using
unmodified files from IBM's official `@ibm/plex-sans` 1.1.0 package under OFL-1.1.
Real normal and italic faces are installed at weights 400, 500, 600 and 700.
IBM Plex Mono Regular remains restricted to technical text. Both variable classes
are applied in `app/layout.tsx`; no font CDN or build-time font download is needed.
Font provenance and licenses are retained in `public/fonts/`.

Families and scales live in `app/styles/tokens.css`, with reusable roles in
`app/styles/typography.css`. Current homepage roles are Hero display,
editorial heading/subheading (Mission and Solution), body/support, label and
technical annotation/metadata. The Hero retains its approved container/aspect
scaling. Legacy subpage roles remain available; they do not redefine the approved
homepage. Do not silently change approved sizes, tracking, line-height or wrapping.
Local font-metric compensation preserves the approved mobile text measures and
header/control footprints after the Plex Sans migration.

When licensed Neue Haas files are supplied, use `next/font/local` with real paths,
map the available weights/styles to `--font-brand-loaded`, and apply its variable
class in the existing `app/layout.tsx`. Recheck line breaks and controls at mobile,
tablet and desktop sizes. Any future font replacement is a separate scoped task.

## Navigation — provisionally approved concept

Do not redesign the current header unless requested.

- Full viewport-width liquid-glass bar, never a floating pill or capsule.
- Warm translucent glass over light sections; smoked graphite glass over dark sections.
- Recognizable background tint, backdrop blur, subtle depth and refined edge highlights, rather than transparency plus a border alone.
- Three zones: brand/motto left, uppercase navigation visually centered, distinct Early Access CTA right.
- Restrained separators and small brass technical details.
- Links: Hardware (`/gearbox`), Projects (`/projects`), About (`/about`), For teams (`/teams`). Preserve working destinations.
- Responsive and accessible, with a full-width mobile disclosure panel, keyboard support and clear focus states.
- Desktop height starting reference: approximately **80–88px**. This is not authorization to resize the current implementation.

The existing header is **72px** on desktop and mobile. It implements the earlier C
treatment with A's separators and larger/bolder labels on hover/focus. Preserve
this implementation until a specific header task resolves any dimensional change.
The latest brief makes the overall concept provisional; it does not approve a
new replacement. See [DECISIONS.md](DECISIONS.md).

`src/components/layout/HeaderBar.tsx` and `HeaderBar.css` own the header;
`Navbar.tsx` and `useSectionTheme.ts` connect it to section themes. Theme detection
uses an efficient section-observation mechanism, not continuous scroll polling.

## Layout and shared components

- Shared shell/Container: content width `min(1440px, 100% - 2 * gutter)` with
  `gutter: clamp(24px, 5vw, 80px)` and a conceptual 12-column desktop grid.
  Navigation, footer and subpage wrappers follow the same content alignment.
- Coherent spacing and restrained typography scales, centralized with color tokens. Section heights follow content; do not force every section to fill the viewport.
- Early Access controls share a 46px height, 155px desktop width, 11px/600 type,
  3px radius and 1px border. The compact mobile navbar uses intrinsic width;
  forms stack at 380px and below. Standard non-signup buttons retain 48px height.
  Keyboard focus uses the shared 2px theme outline; editorial/footer links have
  44px minimum touch targets.
- Use glass only where useful, especially navigation or selected information overlays; do not wrap every section in glass cards.
- Reuse primitives in `src/components/ui/` and layout in `src/components/layout/`.
- Keep media local under `public/`, easy to replace and optimized appropriately.
- Preserve performance, semantic HTML, keyboard access, mobile readability and reduced-motion support.

Shared geometry tokens: `--stroke-ui` = 1px, `--stroke-focus` = 2px;
`--radius-control` = 3px, `--radius-sm` = 4px, `--radius-md` = 8px,
`--radius-fillet` = 16px and `--radius-tab` = 24px. These describe the existing
controls, chips and tab/window geometry; they do not authorize restyling approved
components. `--line` remains the standard divider; `--line-interactive` names the
existing stronger Solution outline (#393939 on graphite). Active Solution tab text
uses contrast-adjusted `--accent`; schematic highlights use the original `--brass`.

Detailed implementation references remain in [design-system.md](design-system.md).
That file describes code, not a separate source of design approval.

## Section themes — provisionally approved sequence

| Section | Theme |
| --- | --- |
| 01 — Hero | Warm ivory |
| 02 — Mission | Graphite |
| 03 — Solution | Graphite |
| 04 — Already in Motion | Warm ivory |
| 05 — Open Projects | Warm ivory |
| 06 — Get Involved | Graphite |

These are intentional narrative transitions, not arbitrary alternating stripes.
The structural Section 05 slot remains even when its published-project rule hides
its rendered content. No scroll-driven transitions or complex background effects
are approved. Complete and approve all six static sections before animation work.
