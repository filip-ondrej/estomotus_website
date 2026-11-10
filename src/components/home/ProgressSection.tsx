import {LocalMedia} from "@/app/components/local-media";
import {ArrowLink} from "@/src/components/ui";
import {motionMedia} from "@/app/data/media";
import {Section} from "@/src/components/ui/Section";
import {GearboxStudy} from "./TechnicalStudies";
import {ProgressWorkshopMedia} from "./ProgressWorkshopMedia";
import "./PlatformSections.css";
import "./ProgressSection.css";

// Supplied AI-generated CNC concept loop; not footage of production hardware.
const workshopVideo: {src: string | null; poster?: string} = {
    src: "/media/esto_motus_cnc_concept_loop.mp4",
    poster: undefined,
};

export function ProgressSection() {
    return <Section theme="light" id="workshop" className="em-platform-section em-progress" aria-labelledby="execution-title">
        <a href="#execution-title" className="em-progress-cue">
            ALREADY IN MOTION <span aria-hidden="true">↓</span>
        </a>
        <div className="shell em-section-shell">
            <header className="em-section-heading">
                <h2 id="execution-title" tabIndex={-1}><span>Step one is already</span><br/>on the machine.</h2>
                <p>We&apos;re building the complete motion platform one piece at a time. It starts with a compact cycloidal gearbox, designed and machined in our own workshop in Germany.</p>
            </header>
            {/* Repeatable release record for future hardware. */}
            <article className="em-release" aria-labelledby="batch-title">
                <ProgressWorkshopMedia src={workshopVideo.src} poster={workshopVideo.poster}>
                    <div className="em-release-media"><LocalMedia asset={motionMedia.gearbox} sizes="(max-width: 760px) 90vw, 56vw"><GearboxStudy/></LocalMedia></div>
                </ProgressWorkshopMedia>
                <div className="em-release-copy">
                    <p className="em-meta em-production-status">Aluminium edition · In production</p>
                    <h3 className="type-product" id="batch-title">Cycloidal Gearbox <span>· Batch 01</span></h3>
                    <p className="em-release-description">Compact 15:1 cycloidal gearbox. NEMA 17 class.</p>
                    <dl className="em-release-stages">
                        <div><dt>Aluminium gearbox</dt><dd>In production</dd></div>
                        <div><dt>Physical validation</dt><dd>Next step</dd></div>
                        <div><dt>In-house motor development</dt><dd>In progress</dd></div>
                    </dl>
                    <p className="em-release-invitation">Be among our first customers. Get early access to what&apos;s next and help shape the hardware we&apos;re building.</p>
                    <ArrowLink href="/gearbox">Explore Batch 01</ArrowLink>
                </div>
            </article>
        </div>
    </Section>;
}
