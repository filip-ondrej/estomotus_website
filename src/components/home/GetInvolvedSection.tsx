import {EmailCapture} from "@/src/components/ui/Forms";
import {Section} from "@/src/components/ui/Section";
import {SectionTransition} from "@/src/components/ui/SectionTransition";
import {ArrowLink} from "@/src/components/ui/TextLink";
import "./GetInvolvedSection.css";

export function GetInvolvedSection() {
    return <Section theme="dark" id="people" className="em-involved" aria-labelledby="people-title">
        <SectionTransition href="#people-title">GET INVOLVED</SectionTransition>
        <div className="shell em-involved-shell">
            <header className="em-involved-intro">
                <h2 id="people-title" tabIndex={-1}>Let&apos;s put it in motion.</h2>
                <p>Get early access to our hardware as it&apos;s built.</p>
            </header>
            <div className="em-closing-signup">
                <EmailCapture idPrefix="closing-access" showDisclaimer={false} submitArrow="→"/>
            </div>
            <ul className="em-signup-benefits type-meta">
                <li>Batch 01 updates</li>
                <li>First access to joints</li>
                <li>Direct line to engineers</li>
            </ul>
            <p className="em-partner-invitation">Building robots at scale?{" "}
                <ArrowLink href="/teams">Become a design partner</ArrowLink>
            </p>
        </div>
    </Section>;
}
