import type {ReactNode} from "react";
import {Section} from "@/src/components/ui/Section";
import {Container} from "@/src/components/layout/Container";
import "./MissionSection.css";

export function MissionSection({children}: { children?: ReactNode }) {
    return (
        <Section theme="dark" id="mission" className="em-mission" aria-label="Our mission">
            <Container>
                <div className="em-mission-strip">
                    <a href="#mission-content" className="em-mission-cue">
                        ABOUT OUR MISSION <span aria-hidden="true">↓</span>
                    </a>
                    <p id="hero-concept-caption" className="em-mission-product-note">
                        Concept visualization · In development
                    </p>
                </div>
            </Container>
            <Container className="em-mission-body-shell">
                <div id="mission-content" className="em-mission-content" tabIndex={-1}>
                    {children ?? <>
                        <h2 className="em-mission-headline">
                            <span>Intelligence is moving fast.</span>{" "}
                            <span>Building robots is still slow.</span>
                        </h2>
                        <div className="em-mission-columns">
                            <p className="em-mission-description">
                                AI and simulation are accelerating robotics development. Yet bringing those ideas into the
                                physical world still means sourcing components, integrating electronics, tuning controllers
                                and connecting software. Much of that work gets repeated for every new robot.
                            </p>
                            <p className="em-mission-closing">Motion should be the part of robotics no one has to reinvent.</p>
                        </div>
                    </>}
                </div>
            </Container>
        </Section>
    );
}
