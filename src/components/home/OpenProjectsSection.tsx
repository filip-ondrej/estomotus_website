import Image from "next/image";
import {ArrowLink} from "@/src/components/ui";
import {getHomepageFeaturedProject} from "@/app/data/projects";
import {Section} from "@/src/components/ui/Section";
import "./PlatformSections.css";
import "./OpenProjectsSection.css";

export function OpenProjectsSection() {
    const project = getHomepageFeaturedProject({previewDrafts: process.env.NODE_ENV === "development"});
    if (!project) return null;
    const isPublished = project.publication.state === "published";
    const description = project.slug === "gearbox-test-rig" ?
        "A compact test rig designed to measure gearbox torque, backlash and efficiency under load." : project.description;

    return <Section theme="light" id="open-engineering" className="em-platform-section em-projects" aria-labelledby="open-title">
        <div className="shell em-section-shell">
            <header className="em-project-intro">
                <div className="em-project-intro-heading">
                    <div className="em-section-label"><p>OPEN PROJECTS</p></div>
                    <h2 id="open-title">Built with <br/>Esto Motus.</h2>
                </div>
                <p className="em-project-intro-copy">Everything around our parts is open: CAD, code and complete build guides. Build them with our hardware, adapt them to yours, and make them better.</p>
            </header>
            <article className="em-project-feature" aria-labelledby={`project-${project.slug}`}>
                <div className="em-project-copy">
                    <p className="em-project-status">{isPublished ? "Open project · Published" : "Concept project · In development"}</p>
                    <h3 className="type-product" id={`project-${project.slug}`}>{project.title}</h3>
                    <p className="em-project-description">{description}</p>
                    <dl className="em-project-specification">
                        <div><dt>USES</dt><dd>{project.relatedHardware}</dd></div>
                    </dl>
                    <div className="em-project-action"><ArrowLink href="/projects">Explore all projects</ArrowLink></div>
                </div>
                <figure className="em-project-figure">
                    {project.publication.state === "published" ?
                        <div className="em-project-published-image">
                            <Image src={project.publication.image.src} alt={project.publication.image.alt} fill sizes="(max-width: 900px) 90vw, (min-width: 1600px) 757px, 48vw"/>
                        </div> : <div className="em-project-picture-placeholder"><span>Project image</span></div>}
                </figure>
            </article>
        </div>
    </Section>;
}
