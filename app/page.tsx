import {HeroSection} from "@/src/components/home/HeroSection";
import {MissionSection} from "@/src/components/home/MissionSection";
import {SolutionSection} from "@/src/components/home/SolutionSection";
import {ProgressSection} from "@/src/components/home/ProgressSection";
import {OpenProjectsSection} from "@/src/components/home/OpenProjectsSection";
import {GetInvolvedSection} from "@/src/components/home/GetInvolvedSection";

export default function Home() {
    return <div className="home">
        <HeroSection/>
        <MissionSection/>
        <SolutionSection/>
        <ProgressSection/>
        <OpenProjectsSection/>
        <GetInvolvedSection/>
    </div>;
}
