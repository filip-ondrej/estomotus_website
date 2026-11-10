# Local fonts

IBM Plex Sans normal and true italic faces at 400, 500, 600 and 700 are copied
without modification from IBM's official `@ibm/plex-sans` **1.1.0** package:

- Upstream: https://github.com/IBM/plex/tree/master/packages/plex-sans
- Archive: https://registry.npmjs.org/@ibm/plex-sans/-/plex-sans-1.1.0.tgz
- Package integrity: `sha512-WPgvO6Yfj2w5YbhyAr1tv95RUz4LRJlqN+CmYvBglabXteufP1D1E9BABMde+ZIKdRbFJDoKF5eQzfhpnbgZcQ==`
- Original path: `fonts/complete/woff2/IBMPlexSans-*.woff2`
- License retained as `IBM-Plex-Sans-LICENSE.txt` (OFL-1.1).

`app/fonts.ts` loads these files with `next/font/local` as the primary family.
Only actual weight/style faces are declared; no substitute brand fonts are used.

IBMPlexMono-Regular.woff2 and IBM-Plex-LICENSE.txt were copied from IBM's official Plex repository:

https://github.com/IBM/plex/tree/master/packages/plex-mono

Font source:
https://raw.githubusercontent.com/IBM/plex/master/packages/plex-mono/fonts/complete/woff2/IBMPlexMono-Regular.woff2

License source:
https://raw.githubusercontent.com/IBM/plex/master/packages/plex-mono/LICENSE.txt

The original license and font are retained without modification. The font is used only for technical metadata and is bundled by next/font/local in app/fonts.ts. There are no browser requests to IBM, Google Fonts or another font host.

No Neue Haas Grotesk files are included. Supply appropriately licensed local WOFF2 files before adding a brand-font declaration. See docs/design-system.md for the activation steps.
