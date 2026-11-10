# ESTO MOTUS design system

Implementation reference, font/token audit updated 2026-11-05. This file preserves useful technical
notes about existing code. For approved direction read [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md),
for exact copy read [WEBSITE_CONTENT.md](WEBSITE_CONTENT.md), and for current
approval status and gaps read [DECISIONS.md](DECISIONS.md). Existing implementation
is not evidence that a new design has been approved.

## Entry points and preserved architecture

The Next.js App Router stays at root app/. There is no duplicate src/app router.

- app/page.tsx composes the six section components in order.
- src/components/home/HeroSection.tsx: warm ivory.
- src/components/home/MissionSection.tsx: graphite, currently inactive; approved copy is now documented but not wired into the component.
- src/components/home/SolutionSection.tsx: graphite; preserves the existing integration composition and copy.
- src/components/home/ProgressSection.tsx: warm ivory.
- src/components/home/OpenProjectsSection.tsx: warm ivory.
- src/components/home/GetInvolvedSection.tsx: graphite.
- src/components/home/home.css: existing section compositions with token-based baseline styling. Future section-specific styling and animations belong near their section.
- src/components/layout/: canonical Navbar, HeaderBar, Footer, Container and section-theme observation hook. HeaderBar.css owns the current header styling; the latest brief records the concept as provisionally approved.
- src/components/ui/: Button, Input, TextLink, Wordmark, Panel and Section.
- app/components/: compatibility entry points for existing subpage imports and retained media/interactive components.

The original foundation pass mechanically extracted existing homepage text without rewriting it. At that time, separate Mission copy was missing. Approved copy for all six sections is now recorded in WEBSITE_CONTENT.md. MissionSection still renders nothing until its children are supplied. The existing section compositions and older text remain implementation history; reconcile them only within an explicitly scoped section task.

## Tokens and themes

app/globals.css is the Tailwind entry point and imports:

1. app/styles/tokens.css: brand primitives, semantic themes, font families, spacing, type scale, radii and durations.
2. app/styles/typography.css: reusable type-hero, type-section, type-subsection, type-body, type-support, type-meta, type-nav, type-button and type-caption roles.
3. app/styles/components.css: shared controls, glass, branding and footer. HeaderBar.css is imported by the shared header component.
4. The retained homepage composition stylesheet.

Primitive palette: ivory #ECE7DF, graphite #0B0B0C, soft white #F5F4F2, ink #111111, silver #8F8B86, warm border #D0CBC3, dark border #292929 and brass #A78556.

Components consume background, foreground, muted, line, surface, surface-raised, accent, focus and button/glass variables. data-theme light/dark changes that contract locally. Section applies both the visual theme and the navigation observation marker. The footer is also marked so the smoked header remains correct at the bottom of the page. Nested visual canvases may use data-theme without data-nav-theme.

Small text uses accessible semantic variants: muted #655F58 and brass #76572E on ivory; muted #A7A29B and brass #C2A16F on graphite. Raw silver and brass are available as palette references, not forced onto small text.

Tailwind exposes bg-background, text-foreground, text-muted, border-line, bg-surface, bg-surface-raised, text-accent, font-sans and font-mono, along with the primitive palette utilities.

Spacing uses four-pixel increments, with named spaces up to 112px. The shared shell/Container has a 1440px maximum and fluid gutters. layout-grid provides twelve minmax columns. Section spacing is content-driven, not viewport-height driven.

## Full-width header

Navbar implements the earlier C treatment, refined with A's thin vertical separators. HeaderBar is a fixed edge-to-edge glass surface with centered uppercase navigation, a brass active marker and a filled Early access CTA. Its content uses the shared shell grid. Header height is centralized at 72px for desktop and mobile; existing hero top spacing and anchor offsets follow the token. The latest brief describes 80–88px as a starting reference; this is a documented difference, not permission to resize it.

Desktop labels grow from 12px / medium to 13.5px / bold on hover and keyboard focus. Hidden sizing labels reserve the enlarged width so adjacent links do not move. HeaderBar.css contains the single current header implementation; alternative header variants, preview-only props and header exploration routes have been removed. The hero lab has now also been removed. Routine design iterations use the selected production homepage section, not preview routes.

useSectionTheme observes a narrow band near the header center using IntersectionObserver. It retains the current section across an eight-pixel overlap to avoid boundary flicker. It performs no scroll-event or animation-frame polling. ResizeObserver and viewport resize rebuild the band only when its geometry changes. Untagged subpages default to graphite; tagged light areas adapt and restore the fallback when exited.

The mobile menu is an accessible disclosure panel in the full-width header: hidden content is unfocusable, aria-expanded is synchronized, Escape returns focus to the toggle, selecting a route closes the panel, and leaving the header by keyboard closes it. It is not a modal and does not trap focus.

## Fonts

`app/fonts.ts` loads IBM Plex Sans with `next/font/local`: normal and true italic
WOFF2 faces for weights 400, 500, 600 and 700, copied without modification from
IBM's official `@ibm/plex-sans` 1.1.0 package. `primaryFont.variable` and
`technicalFont.variable` are applied to `html` in `app/layout.tsx`.

`--font-primary` resolves licensed `--font-brand-loaded` when explicitly installed,
otherwise `--font-primary-loaded` (Plex Sans), then the system stack as a resilience
fallback. No Neue Haas file is assumed. IBM Plex Mono Regular remains the only
technical face; it is not used for ordinary body copy or category controls.
Provenance, package integrity and OFL licenses are recorded in `public/fonts/`.
There is no runtime font CDN or build-time font download dependency.

`tokens.css` adds shared `--type-hero-editorial`, `--type-hero-mobile`,
`--type-editorial-heading` and `--type-editorial-subheading`, alongside the existing
body/support/meta/label sizes. Editorial weight, tracking and leading tokens match
the current approved Hero and Mission values exactly; Mission and Solution consume
the same responsive heading/subheading tokens. `typography.css` exposes reusable
`type-editorial-heading`, `type-editorial-subheading` and `type-editorial-label`
roles. Legacy subpage roles remain intact to avoid an unrelated redesign.

UI geometry is named by `--stroke-ui` / `--stroke-focus`, `--radius-control`,
`--radius-sm` / `--radius-md`, `--radius-tab` / `--radius-fillet` and
`--line-interactive`. Solution consumes these for its outlined tabs, panel and
technical chips. Its active label uses accessible brass `--accent`, while hardware
highlights retain `--brass`. Illustration dimensions are geometry, not font tokens.

Font migration compensation is local: Hero mobile display/body and Mission mobile
body use `font-size-adjust` to preserve existing wraps without altering declared
font sizes, tracking, line-height or word spacing. Solution shares Mission's body
metric adjustment. Header text/control widths and the Hero input/CTA split reserve
their measured pre-migration footprints. These are compatibility measures for the
approved composition, not a new spacing scale.

To enable licensed brand files:

1. Supply web-licensed local WOFF2 files and their allowed weight/style mapping.
2. Add a next/font/local declaration in app/fonts.ts with variable --font-brand-loaded, display swap, and only actual existing paths.
3. Apply its variable class alongside primaryFont.variable and technicalFont.variable on html in app/layout.tsx.
4. Check line breaks and controls at mobile, tablet and desktop widths. Individual components do not need font changes.

## Scope and remaining inputs

The original foundation pass added no GSAP, ScrollTrigger, complex background animation, new media, marketing copy or backend. Existing forms retain explicit unsent-state messages. The current policy requires approval of all six static sections before new motion or scroll work. Routes and Git configuration remain intact.

Mission copy no longer needs to be supplied: WEBSITE_CONTENT.md contains it. IBM Plex Sans is installed; licensed Neue Haas files remain unsupplied. Production media references remain in app/data/media.ts; details are in public/media/README.md. Earlier cleanup and inactive-Mission notes above describe implementation history, not the current font/section approval status.
