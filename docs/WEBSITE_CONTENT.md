# ESTO MOTUS — approved website content

Updated: 2026-11-04. Source: the user's permanent-project-context brief.

This is the approved content and purpose of the six homepage sections. Preserve
the copy exactly unless the user explicitly changes it. Layout descriptions are
requirements or exploration directions, not approval of an unseen design.
Read [DECISIONS.md](DECISIONS.md) for implementation gaps and
[DESIGN_SYSTEM.md](DESIGN_SYSTEM.md) for visual rules. Documenting this copy does
not authorize applying it to the website during a documentation-only task.

Status override, 2026-11-09: the user confirms all six implemented homepage
compositions are individually approved. Earlier design-status and implementation
gap notes below are historical. The unification audit preserves the current copy
and explicit line breaks; it does not synchronize older content differences.

## 01 — Hero

Headline:

> **BUILD THE ROBOT. WE'LL MAKE IT MOVE.**

Supporting copy:

> We're building plug-and-play motion hardware for robotics and physical AI. Motors, gearboxes and controllers designed to work together and with your software. Engineered in Germany.

Include email early-access capture. Keep honest development-state messaging until
registration has working persistence; never display a fabricated success state.

Static UI/UX is **IN PROGRESS** for the next direct homepage task. Visual direction: a partially revealed robotic
joint entering/cropped from the right, using a dramatic rear/three-quarter macro
angle, integrated into warm ivory. No black rectangular image container, centered
full product packshot or fully revealed floating product. Leave room for copy and
capture; no motion. Future-platform visuals must remain labeled as concepts.

The older headline, "Your robot's software is ready. Its hardware should be too.",
is superseded as approved copy. It remains in current production pending the
explicitly scoped Hero task. Previous separate previews have been removed; do not
recreate experimental routes or multiple variants unless requested. Cleanup does
not update the hero copy or composition.

## 02 — Mission

Headline (two lines):

> **Intelligence is moving fast.**  
> **Building robots is still slow.**

Body:

> AI and simulation are accelerating robotics development. Yet bringing those ideas into the physical world still means sourcing components, integrating electronics, tuning controllers and connecting software. Much of that work gets repeated for every new robot.

Closing statement:

> **Motion should be the part of robotics no one has to reinvent.**

Purpose: explain the problem without prematurely presenting the solution. Approved
copy now exists here; the current inactive component is an implementation gap,
not a reason to request this copy again or invent a replacement.

## 03 — Solution

Headline:

> **One joint. One connection. Ready for your code.**

Explain the **planned** integrated motion platform and the intended developer
experience. Four horizontally arranged interactive categories:

- Integrated
- Tuned
- Connected
- Ready for your code

Use a shared information panel beneath the selectors. Planned central visual: an
integrated joint with one cable connection. Static selector interactions can show
information without introducing animation or scroll effects.

The joint is a future platform concept, not a shipping product. Qualify intended
capabilities and compatibility; do not imply validated plug-and-play performance
or an available SDK. Exact body/panel copy has not been supplied in this brief;
flag that detail when the section is designed rather than treating invented text
as approved.

## 04 — Already in Motion

Headline:

> **Step one is already on the machine.**

Body:

> We're building the complete motion platform one piece at a time. It starts with a compact cycloidal gearbox, designed and machined in our own workshop in Germany.

Product:

> **Cycloidal Gearbox · Batch 01**

Status:

> **Aluminium edition · In production**

Invitation:

> Be among our first customers. Get early access to what's next and help shape the hardware we're building.

CTA:

> **Explore Batch 01 →**

Use the existing product route `/gearbox`. This is a living engineering-progress
section. Verify the manufacturing status before changing it in future; do not
turn this copy into a claim of available stock, reservations or validated results.
The gearbox demonstrates execution without defining the whole company.

## 05 — Open Projects

Headline:

> **Built with Esto Motus.**

Body:

> Open-source robotics projects with downloadable CAD, code and build guides. Build them with our hardware, adapt them to yours, and make them better.

Show only published, real projects:

- Zero published projects: hide this section's rendered content.
- One published project: use a large featured card.
- Multiple published projects: use a visual gallery.
- Identify the hardware used in every project.
- Project pages include documentation, parts lists and relevant purchase links.

CTA:

> **Explore open projects →**

Destination: `/projects`. Project details use `/projects/[slug]`.

Open-source projects do not imply that proprietary ESTO MOTUS product designs are
open source. Planned studies are not published projects; do not count them as
releases or present unavailable files as downloads.

## 06 — Get Involved

Headline:

> **Let's put it in motion.**

Body:

> Get early access to our hardware, or help shape the next generation of it as a design partner.

Two distinct participation paths:

| Path | Audience and action |
| --- | --- |
| **Early access** | For engineers, researchers and builders. Inline email signup. |
| **Design partners** | For robotics teams interested in testing hardware and influencing development. |

Design-partner CTA:

> **Become a design partner →**

Destination: `/teams`.

Quiet contact line:

> Investors, press or questions: hello@estomotus.com

Contact functionality must be verified before presenting it as operational. The
address is approved text, not evidence that mailbox delivery has been verified.
Do not send test messages without explicit authorization. Existing signup and
inquiry forms have no working persistence; keep that state honest until connected.

## Company facts and claim boundaries

- ESTO MOTUS is an early-stage German company building an integrated motion platform for robotics and physical AI, not primarily a NEMA 17 gearbox manufacturer.
- The founders bring mechanical and electronics engineering capabilities. Do not invent names, biographies, customers, partnerships, certifications or traction.
- The first gearbox is a compact 15:1 cycloidal design compatible with NEMA 17 motors. A plastic prototype exists; the aluminium version is being machined in the German workshop.
- The preliminary 42 × 42 × 36 mm envelope and 2.5 Nm continuous torque target are provisional; performance requires physical validation. Do not promote targets to measured specifications.
- The integrated actuator and surrounding controls/software are a development direction, not a commercially proven platform. Do not publish an invented technical roadmap.
- Open-source projects should be reproducible with CAD, code, guides, media and parts lists when actually published; compatible alternatives may be used.

## Routes and modular architecture

Preserve the current working routes: `/`, `/gearbox`, `/projects`,
`/projects/[slug]`, `/about` and `/teams`. Legal pages belong in the overall
architecture, but their content and routes still require implementation; do not
invent legal/company details or create dead links. Do not substitute a new
`/hardware` route for `/gearbox` without a separate decision.

Founders belong primarily on `/about`, not automatically in the homepage.
Each homepage section remains independently editable:

```text
src/components/home/
  HeroSection.tsx
  MissionSection.tsx
  SolutionSection.tsx
  ProgressSection.tsx
  OpenProjectsSection.tsx
  GetInvolvedSection.tsx

src/components/layout/
  Navbar.tsx
  Footer.tsx
```

The page entry should primarily assemble those six sections in the approved
order. The intended `src/app/page.tsx` convention applies if a future migration to
a `src/app` router is explicitly approved. **This repository currently uses
`app/page.tsx` and root `app/`; preserve that working architecture.** Do not create
both router trees or refactor them as part of documentation or section design.
