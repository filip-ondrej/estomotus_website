# Homepage media

All homepage sources are centralized in app/data/media.ts. Add approved files under public/media and set the relevant source, kind and alt text. Null sources render intentional, labelled placeholders without making failed network requests.

## Slots

- joint: one hero visualization. The existing joint-concept.webp is a temporary AI-generated concept from the earlier design pass, not a depiction of a manufactured ESTO MOTUS actuator. Keep the visible concept label until approved real product imagery replaces it.
- workshop: machining footage, preferably a short locally hosted MP4 with a poster image. The slot uses native video controls, inline playback and metadata-only preloading.
- gearbox: a photograph or CAD render of the actual plastic or aluminium gearbox. The fallback is a schematic, not a validated technical drawing.
- project: approved project preview media. The fallback arm drawing is a concept study. Projects are marked planned and unreleased.
- founders: a real photograph of the two founders in the workshop. No names, portraits or biographies have been invented.

LocalMedia provides optimized images and video support. Its parent controls the reserved dimensions. The hero is preloaded; other images load lazily. Nothing autoplays. Update visible captions when media or project status changes.

## Existing concept provenance

The earlier built-in image-generation tool produced joint-concept.png. The served monochrome WebP is approximately 117 KB. No new product or workshop imagery was generated for this redesign.

Original generation prompt:

Use case: product-mockup. Asset type: temporary website concept art for ESTO MOTUS, a German integrated robotics motion platform. Cinematic premium industrial product visualization of a single future modular robotic joint, compact cylindrical brushed aluminium transmission face, precision concentric machining, dark graphite motor housing and subtle recessed connector details. Three-quarter view, axis diagonally from lower left to upper right, floating in pure black studio space, object entirely visible occupying 75 percent of square frame. Elegant physically realistic silver edge lighting, strong dark shadows, extraordinary machined metal texture, restrained Braun industrial design. Monochrome only. No text, branding, neon, glow, extra objects, robot hand, square NEMA motor, or background scenery. This is speculative concept art not an actual manufactured product. 1536x1536.

## Forms

Early access and team enquiries have no backend. Both disclose this before submission and state that nothing was saved or sent. Connect an approved service and update privacy and consent information before accepting real registrations or reservations.
