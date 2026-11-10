# Hero lab concept cutout

Historical provenance only. The experiment-only WebP was removed during the
2026-11-04 cleanup, together with the preview route and variant components. This
document is preserved; the former path below is not an active asset reference.
The production source render remains unchanged. See `docs/DECISIONS.md` for the
current direct-homepage workflow and local recovery archive.

- Former asset: `public/media/hero-lab/joint-cutout.webp` (removed)
- Source: the existing `public/media/joint-concept.png` concept render.
- Tool mode: built-in `image_gen`, edit / background-extraction, with transparent background enabled.
- Output: alpha-preserving WebP, 1254 × 1254 pixels, approximately 139 KB.
- Sharp was used only to optimize the generated transparent PNG into WebP.
- Original production assets were not overwritten.

This is an illustrative concept, not product photography or evidence of
manufacturing progress. All three lab variants recrop and statically rotate this
same asset. Professional CAD renders should replace it before a production hero
design is finalized.

## Exact edit prompt

```text
Use case: background-extraction. Edit target: the supplied existing ESTO MOTUS integrated robotic joint concept render. Remove ONLY the pure black studio background and make that area genuinely transparent with a clean alpha channel, including around the silhouette. Preserve the exact object's geometry, silver machining, graphite housing, connector details, camera angle, light and proportions. Do not redesign or add hardware. Do not add text, shadow planes, glow, backgrounds or a checkerboard. This transparent cutout will be cropped into partial-reveal editorial website compositions over warm ivory; it is concept visualization, not real manufactured product photography. Retain realistic dark materials and black connector cavities inside the object; remove only the external background. Output transparent PNG.
```
