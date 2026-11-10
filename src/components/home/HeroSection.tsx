import Image from "next/image";
import {EmailCapture} from "@/src/components/ui/Forms";
import {Section} from "@/src/components/ui/Section";
import "./HeroSection.css";

export function HeroSection() {
    return (
        <Section theme="light" className="em-hero" aria-labelledby="hero-title">
            <div className="shell em-hero-composition">
                <div className="em-hero-copy">
                    <p className="em-hero-introduction">MOTION HARDWARE FOR ROBOTICS &amp; PHYSICAL AI</p>
                    <h1 id="hero-title" className="em-hero-headline">
                        <span className="em-hero-headlineLine">BUILD THE ROBOT.</span>{" "}
                        <span className="em-hero-headlineLine">WE&apos;LL MAKE IT MOVE.</span>
                    </h1>
                    <div className="em-hero-support">
                        <p className="em-hero-description">
                            We&apos;re building plug-and-play motion hardware for robotics and physical AI. Motors,
                            gearboxes and controllers designed to work together and with your software. Engineered in Germany.
                        </p>
                        <div id="early-access" className="em-hero-signup"><EmailCapture showDisclaimer={false}/></div>
                    </div>
                </div>
            </div>
            <figure className="em-hero-visualization">
                <Image src="/media/heropicture.png" width={1100} height={825}
                       alt="Close-up of a conceptual integrated motor and gearbox assembly."
                       aria-describedby="hero-concept-caption"
                       preload unoptimized className="em-hero-image"/>
            </figure>
        </Section>
    );
}
