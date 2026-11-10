<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## ESTO MOTUS — permanent working instructions

### Start each task

- Inspect the existing code and relevant documentation before changing anything. Do not rely on previous chat history.
- Consult [docs/DECISIONS.md](docs/DECISIONS.md) when approval status or a new design decision is relevant. Reuse current guidance already read during routine iterations instead of repeatedly exploring the repository.
- Consult the relevant parts of [docs/DESIGN_SYSTEM.md](docs/DESIGN_SYSTEM.md) for visual rules and [docs/WEBSITE_CONTENT.md](docs/WEBSITE_CONTENT.md) for homepage content or section work. Load only context needed for the task.
- These documents define approvals; existing code and older reference notes may lag behind them. Known differences are recorded in `DECISIONS.md`, not automatic work orders.
- A new explicit user decision overrides older documentation for that decision. Record the corresponding documentation and dated decision-log updates during FINAL REVIEW or when explicitly requested; QUICK EDIT does not update them. Do not infer approval from an agent recommendation.

### Decisions and scope

- The user is the creative director and final decision-maker. Recommend designs, but never approve your own recommendations or reinterpret previously approved decisions.
- Routine UI/UX iterations are implemented directly on the main homepage in the selected section's production `.tsx` file. Work chronologically, one section at a time; the next section is 01 — Hero, whose static design is IN PROGRESS. A section task authorizes that iteration, not an agent's final approval of its design.
- Do not create `/design-lab`, other experimental routes, variant-switching utilities or multiple alternatives unless explicitly requested. If alternatives are requested, distinguish proposals from the user's selection; never promote your own recommendation.
- Workflow: inspect the selected section → implement the requested static iteration on the homepage → present it for user review → refine only that section → lock it when the user approves → continue chronologically when requested. Previously approved content and design decisions remain locked unless explicitly reopened; provisional decisions remain provisional.
- Preserve earlier iterations through ordinary Git history, without resetting, rebasing or deleting history. Check that a baseline is committed before claiming Git rollback is available; the current repository has no commits yet (see DECISIONS.md). Do not use extra preview routes as version history.
- Modify only what the current task requires. Preserve unrelated components, copy, routes, functionality and Git configuration. Do not introduce unsolicited redesigns or expand scope without permission.
- Approval of a design or copy in documentation is not permission to implement every outstanding difference. Documentation-only tasks must not change website appearance or behavior.
- Make ordinary technical decisions independently within the authorized scope; do not make subjective design selections on the user's behalf.

### Static design and animation

- Complete and obtain approval for static UI/UX of all six homepage sections before adding animations or scroll effects.
- Do not introduce animations, parallax or scroll sequences during static design tasks. Keep future animation work local to the relevant component.
- Preserve existing unrelated interactions and reduced-motion support; this policy does not authorize removing them.

### Engineering and factual accuracy

- Preserve Next.js App Router, TypeScript and Tailwind CSS. Use Server Components by default and Client Components where interaction requires them. Read the relevant installed Next.js guide before framework API changes.
- Keep code modular, maintainable, semantic, responsive and accessible, with keyboard access and visible focus states. Use shared tokens and UI components.
- Current routing is root `app/`, with `app/page.tsx` assembling sections in `src/components/home/`. Shared layout is in `src/components/layout/`, shared UI in `src/components/ui/`, and existing `app/components/` imports support subpages. Do not create a duplicate `src/app/` router or migrate it without a separate task.
- Keep repeated project data in `app/data/` and replaceable local media in `public/`. No unauthorized font downloads, unnecessary dependencies or backend integrations.
- ESTO MOTUS is an integrated motion-hardware company, not primarily a gearbox manufacturer. Label future products as concepts and unvalidated specifications as targets/provisional. Never invent traction, published projects, certifications or performance.
- Forms must not claim success without working persistence. Verify contact functionality before calling it operational.
- Follow the verification level in Efficient iteration below (`npm.cmd` on PowerShell if needed). Do not run full checks for minor visual edits. For documentation-only work, check consistency and confirm implementation files are unchanged; no build is required. Never skip essential verification for security-sensitive or functional changes.

### Communication

- Follow the reporting level in Efficient iteration below. Be concise; avoid lengthy explanations and repetitive summaries.
- Do not repeatedly ask questions answered in the documentation. Flag genuine conflicts or missing approvals instead of guessing or silently changing the website.

## Efficient iteration

Default to QUICK EDIT mode for routine UI/UX adjustments.

**QUICK EDIT**
- Implement the requested changes directly.
- Change only affected files.
- Preserve all unspecified behavior and styling.
- Do not run full lint, typecheck or production builds for minor visual edits.
- Do not create screenshots or previews unless requested.
- Do not update decision logs or documentation.
- Do not provide detailed reports.
- Reply with one brief completion sentence.
- Do not ask for confirmation when instructions are unambiguous.

**STRUCTURAL EDIT**
For changes involving component architecture, routing, interactions or substantial responsive behavior, perform targeted verification.

**FINAL REVIEW**
Only when explicitly requested to finalize a section:
- Review desktop, tablet and mobile.
- Run lint, typecheck and production build.
- Update relevant documentation and decisions.
- Report remaining issues concisely.

Never skip essential verification for security-sensitive or functional changes.

The user approves design decisions. Codex implements them. Do not independently redesign unrelated elements.

Avoid unnecessary planning, repeated repository exploration and reading unrelated documentation on every small edit. Consult only the instructions and files relevant to the task.
