import localFont from "next/font/local";

// Official @ibm/plex-sans 1.1.0; OFL license and provenance ship with the assets.
export const primaryFont = localFont({
    src: [
        {path: "../public/fonts/IBMPlexSans-Regular.woff2", weight: "400", style: "normal"},
        {path: "../public/fonts/IBMPlexSans-Italic.woff2", weight: "400", style: "italic"},
        {path: "../public/fonts/IBMPlexSans-Medium.woff2", weight: "500", style: "normal"},
        {path: "../public/fonts/IBMPlexSans-MediumItalic.woff2", weight: "500", style: "italic"},
        {path: "../public/fonts/IBMPlexSans-SemiBold.woff2", weight: "600", style: "normal"},
        {path: "../public/fonts/IBMPlexSans-SemiBoldItalic.woff2", weight: "600", style: "italic"},
        {path: "../public/fonts/IBMPlexSans-Bold.woff2", weight: "700", style: "normal"},
        {path: "../public/fonts/IBMPlexSans-BoldItalic.woff2", weight: "700", style: "italic"},
    ],
    variable: "--font-primary-loaded",
    display: "swap",
    preload: true,
});

export const technicalFont = localFont({
    src: "../public/fonts/IBMPlexMono-Regular.woff2",
    variable: "--font-technical-loaded",
    weight: "400",
    style: "normal",
    display: "swap",
    preload: false,
});

// Add licensed Neue Haas Grotesk files here using next/font/local when supplied.
// Export its variable as --font-brand-loaded and add it to the root html class.
// Until then IBM Plex Sans is the primary face; no licensed brand files are assumed.
