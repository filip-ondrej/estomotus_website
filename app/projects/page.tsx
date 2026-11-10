import type { Metadata } from "next";
import { PageIntro } from "@/app/components/ui";
import { ProjectCard } from "@/app/components/project-card";
import { projects } from "@/app/data/projects";

export const metadata: Metadata = { title: "Projects", description: "Open robotics projects, CAD, code and build guides from ESTO MOTUS." };

export default function ProjectsPage() {
  return <><PageIntro eyebrow="Open development / 2026" title="Engineering in the open." copy="Our first open-source robotics builds are planned. These studies preview what we intend to document; CAD, code, videos and reproducible build guides will follow as projects are released." /><section className="border-t border-line"><div className="py-20 lg:py-28 shell"><div className="mb-12 flex items-center justify-between border-b border-line pb-4 text-[10px] uppercase tracking-[0.16em] text-muted"><span>Upcoming studies</span><span>{String(projects.length).padStart(2, "0")} planned projects</span></div><div className="grid gap-x-10 gap-y-20 md:grid-cols-2">{projects.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div></div></section></>;
}
