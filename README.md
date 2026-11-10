# ESTO MOTUS website

Next.js App Router, TypeScript, React and Tailwind CSS, with local media and centralized styling. Start each task with [AGENTS.md](AGENTS.md); do not rely on previous chat history. Read the installed Next.js guides before framework changes.

## Permanent project context

- [docs/DECISIONS.md](docs/DECISIONS.md): approval status, dated decisions and known implementation differences. Read before proposing or implementing design changes.
- [docs/DESIGN_SYSTEM.md](docs/DESIGN_SYSTEM.md): visual foundation, themes, typography and navigation.
- [docs/WEBSITE_CONTENT.md](docs/WEBSITE_CONTENT.md): the six sections, exact approved copy and modular architecture.

The user approves designs; an agent recommendation is not approval. The current website predates some approved copy and design directions. Those differences are documented, not instructions to change unrelated code. Routine iterations now happen directly on the homepage, chronologically and only in the selected section. Do not create experimental routes or multiple variants unless requested. Section 01 — Hero is next and its static design is in progress; cleanup does not redesign it. Animations follow approval of all six static sections.

Git currently has no commits, so establish an initial project commit before relying on Git recovery for subsequent iterations. Experiment sources were archived locally before removal; see DECISIONS.md for the recovery archive and workflow status. Git configuration and history are unchanged.

## Development

Run npm install, then npm run dev. On Windows PowerShell with script execution disabled, use npm.cmd.

Required checks after material changes:

- npm run lint
- npm run build

## Homepage

app/page.tsx composes six independently editable section components in src/components/home/. Mission copy is now approved in WEBSITE_CONTENT.md, but the component is still inactive in the current implementation. Root app/ remains the working router; do not create a second src/app/ tree. See [docs/design-system.md](docs/design-system.md) for the existing code's tokens, section themes, adaptive navigation, shared UI and font-loading architecture. That implementation reference is subordinate to the permanent context above.

- app/components/integration-explorer.tsx: accessible three-step workflow illustration. This describes the proposed platform, not an available SDK or validated product.
- app/data/integration.ts: workflow copy.
- app/data/media.ts: centralized homepage media references.
- app/components/local-media.tsx: optimized image and native-video slots.
- public/media/README.md: media requirements and concept provenance.
- app/data/projects.ts: planned project studies, shared by the homepage and documentation routes.
- app/globals.css: shared tokens, typography, responsive homepage layouts and reduced-motion handling.

The existing /gearbox, /projects, /projects/[slug], /about and /teams routes remain. Product measurements are targets until physical validation. Project files are not yet released.

## Before launch

Supply approved actuator renders, real gearbox/prototype images, machining footage and founder/workshop photography. Confirm project names and release status. Connect registrations and enquiries to a real service, then supply required legal/privacy content and real company contact information. The present forms do not send or save information.

Browser-review screenshots and local review scripts, when present, are in the ignored .visual-qa directory.
