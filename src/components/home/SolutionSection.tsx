import {solutionCategories} from "@/app/data/solution";
import {Section} from "@/src/components/ui/Section";
import {JointStudy} from "./TechnicalStudies";
import {SolutionTabs} from "./SolutionTabs";
import "./PlatformSections.css";
import "./SolutionSection.css";

export function SolutionSection() {
    return <Section theme="dark" id="integration" className="em-platform-section em-solution" aria-labelledby="integration-title">
        <div className="shell em-section-shell">
            <header className="em-section-heading">
                <h2 id="integration-title"><span>One joint. One connection.</span>{" "}<span>Ready for your code.</span></h2>
                <p>We’re developing an integrated motion platform. Mechanics, control and software, designed together around a single connection.</p>
            </header>
            <SolutionTabs categories={solutionCategories}>
              <figure className="em-joint-strip">
                <JointStudy/>
                <div className="em-solution-parts" aria-hidden="true">
                    <span>Gearbox</span><span>Motor</span><span>Encoder</span>
                    <span>Controller</span><span>Housing</span><span>Connection</span>
                </div>
              </figure>
            </SolutionTabs>
            <p className="em-platform-disclosure">Platform in development. Capabilities shown are planned.</p>
        </div>
    </Section>;
}
