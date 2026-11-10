export type Project = {
    slug: string;
    title: string;
    description: string;
    year: string;
    status: string;
    tags: string[];
    overview: string;
    challenge: string;
    bom: { item: string; quantity: string; note: string }[];
    relatedHardware: string;
    // Optional showcase media, independent of publication status.
    media?: ProjectMedia;
    // Publishing requires real project media; drafts are development previews only.
    publication: {state: "draft"} | {state: "published"; image: {src: string; alt: string}};
};

export type ProjectMedia =
    | {type: "image"; src: string; alt: string}
    | {type: "video"; src: string; poster: string; alt: string};

// Planned studies, not completed builds. Retain the slugs for future releases.
export const projects: Project[] = [
    {
        slug: "gearbox-test-rig",
        publication: {state: "draft"},
        title: "Gearbox test rig",
        description: "The rig we use to measure torque, backlash and efficiency of every gearbox we build. Documented, so you can build your own.",
        year: "Planned",
        status: "Planned study · Unreleased",
        tags: ["Testing", "CAD", "Firmware"],
        overview: "A proposed test bench for studying torque, backlash and endurance. The build, methods and files are still to be developed.",
        challenge: "The aim is a documented, reproducible measurement setup. Sensor choices, test procedures and the final fixture will be published with the project. No measured results are available yet.",
        bom: [
            {item: "Gearbox under test", quantity: "TBC", note: "ESTO MOTUS or compatible alternative"},
            {item: "Input drive", quantity: "TBC", note: "To be selected"},
            {item: "Measurement hardware", quantity: "TBC", note: "Sensor selection pending"},
            {item: "Bench structure", quantity: "TBC", note: "Design pending"},
        ],
        relatedHardware: "1× Cycloidal Gearbox · Batch 01",
    },
    {
        slug: "desktop-robotic-arm",
        publication: {state: "draft"},
        title: "Desktop robotic arm",
        description: "A planned arm for exploring joint integration and motion control.",
        year: "Planned",
        status: "Planned study · Unreleased",
        tags: ["Robotics", "CAD", "Motion control"],
        overview: "A proposed desktop robotic arm to explore how mechanical joints, feedback and control come together in a working robot. The architecture is not final.",
        challenge: "We intend to document the design and assembly so others can reproduce and adapt it. CAD, code, hardware choices and build instructions will follow once there is a reproducible build.",
        bom: [
            {item: "Joint drives", quantity: "TBC", note: "Architecture pending"},
            {item: "Feedback and control", quantity: "TBC", note: "Selection pending"},
            {item: "Structural links", quantity: "TBC", note: "Design pending"},
        ],
        relatedHardware: "Integrated joint platform · Under development",
    },
];

export function getProject(slug: string) {
    return projects.find((project) => project.slug === slug);
}

// Preview permission is independent of publication; production callers omit it.
export function getHomepageFeaturedProject({previewDrafts = false}: {previewDrafts?: boolean} = {}) {
    const published = projects.filter(project => project.publication.state === "published");
    const preview = previewDrafts ? projects.find(project => project.slug === "gearbox-test-rig") : undefined;
    return preview ?? published[0];
}
