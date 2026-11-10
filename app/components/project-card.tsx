import Link from "next/link";
import type { Project } from "@/app/data/projects";
import { MediaPlaceholder } from "@/app/components/ui";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="group">
      <Link href={`/projects/${project.slug}`} aria-label={`View ${project.title}`}>
        <MediaPlaceholder label={project.tags[0]} index={String(index + 1).padStart(2, "0")} className="aspect-[4/3] transition-colors group-hover:bg-surface-hover" />
        <div className="flex items-start justify-between gap-6 border-b border-line py-5">
          <div>
            <p className="mb-3 text-xs text-muted">{project.status} / Files forthcoming</p><h2 className="text-xl font-medium tracking-[-0.03em]">{project.title}</h2>
            <p className="mt-2 max-w-md text-sm leading-6 text-muted">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="technical-chip">{tag}</span>)}</div>
          </div>
          <span className="mt-1 text-lg transition-transform group-hover:translate-x-1" aria-hidden="true">↗</span>
        </div>
      </Link>
    </article>
  );
}
