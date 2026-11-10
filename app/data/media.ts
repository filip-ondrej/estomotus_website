export type LocalMediaAsset = {
    src: string | null;
    alt: string;
    kind: "image" | "video";
    poster?: string;
};

// Add approved local assets under public/media, then replace the null sources.
// Keep concept labels until imagery depicts actual hardware.
export const motionMedia = {
    joint: {
        src: "/media/joint-concept.webp",
        kind: "image",
        alt: "Concept visualization of a future integrated robotic joint, with a silver transmission face and graphite housing.",
    },
    workshop: {
        src: null,
        kind: "video",
        alt: "Machining the first aluminium cycloidal gearbox in the ESTO MOTUS workshop in Germany.",
    },
    gearbox: {
        src: null,
        kind: "image",
        alt: "The first compact cycloidal gearbox prototype.",
    },
    project: {
        src: null,
        kind: "image",
        alt: "An upcoming open-source robotics project study.",
    },
    founders: {
        src: null,
        kind: "image",
        alt: "The two ESTO MOTUS founders at their workshop in Germany.",
    },
} satisfies Record<string, LocalMediaAsset>;
