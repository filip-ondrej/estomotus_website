import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GearboxVisual } from "@/app/components/gearbox-visual";
import { Eyebrow, MediaPlaceholder } from "@/app/components/ui";
import { getProject, projects } from "@/app/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.title, description: project.description };
}

export default async function ProjectDetailPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <header className="pb-16 pt-36 lg:pb-24 lg:pt-48 shell">
        <Link href="/projects" className="text-[10px] uppercase tracking-[0.18em] text-muted transition-colors hover:text-accent">← All projects</Link>
        <div className="mt-16 grid gap-10 lg:grid-cols-12"><div className="lg:col-span-8"><Eyebrow>{project.status}</Eyebrow><h1 className="mt-7 text-[clamp(3.2rem,8vw,8.5rem)] font-medium leading-[0.87] tracking-[-0.065em]">{project.title}</h1></div><div className="self-end lg:col-span-4"><p className="text-lg leading-8 text-muted">{project.description}</p><div className="mt-7 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="technical-chip">{tag}</span>)}</div></div></div>
      </header>

      <section className="pb-24 lg:pb-36 shell"><MediaPlaceholder label="Planned project / Media forthcoming" className="h-[55vh] min-h-[420px] lg:h-[72vh]" /></section>

      <section className="border-t border-line"><div className="grid gap-12 py-24 lg:grid-cols-12 lg:py-36 shell"><div className="lg:col-span-4"><Eyebrow>01 / Overview</Eyebrow></div><div className="lg:col-span-7 lg:col-start-6"><p className="text-2xl leading-9 tracking-[-0.03em] sm:text-3xl sm:leading-11">{project.overview}</p><p className="mt-10 max-w-2xl text-sm leading-7 text-muted">{project.challenge}</p></div></div></section>

      <section className="border-t border-line"><div className="py-24 lg:py-36 shell"><Eyebrow>02 / Planned documentation</Eyebrow><div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2"><MediaPlaceholder label="Fixture study / Media forthcoming" index="01" className="aspect-[4/3]" /><div className="aspect-[4/3] border border-line"><GearboxVisual compact /></div></div></div></section>

      <section className="border-t border-line"><div className="grid gap-12 py-24 lg:grid-cols-12 lg:py-36 shell"><div className="lg:col-span-4"><Eyebrow>03 / Files</Eyebrow><p className="mt-5 max-w-xs text-xs leading-5 text-muted">Project files will be published as each build reaches a stable revision.</p></div><div className="lg:col-span-7 lg:col-start-6">{[["CAD", "STEP and native design files"], ["Code", "Firmware and data tools"], ["Build guide", "Assembly and calibration"]].map(([title, note]) => <div key={title} className="group flex items-center justify-between border-t border-line py-6 last:border-b"><span><strong className="block text-sm font-medium">{title}</strong><span className="mt-1 block text-xs text-muted">{note}</span></span><span className="text-xs text-muted">Not released</span></div>)}</div></div></section>

      <section className="border-t border-line"><div className="grid gap-12 py-24 lg:grid-cols-12 lg:py-36 shell"><div className="lg:col-span-4"><Eyebrow>04 / Proposed bill of materials</Eyebrow></div><div className="overflow-x-auto lg:col-span-7 lg:col-start-6"><p className="mb-5 text-xs leading-6 text-muted">Planning outline only. Quantities and parts are not final; this is not a build-ready BOM.</p><table className="w-full min-w-[560px] border-collapse text-left text-sm"><thead className="text-[10px] uppercase tracking-[0.15em] text-muted"><tr className="border-b border-line"><th className="py-4 font-normal">Item</th><th className="py-4 font-normal">Qty.</th><th className="py-4 font-normal">Note</th></tr></thead><tbody>{project.bom.map((row) => <tr key={row.item} className="border-b border-line"><td className="py-5">{row.item}</td><td className="py-5 tabular-nums text-muted">{row.quantity}</td><td className="py-5 text-muted">{row.note}</td></tr>)}</tbody></table></div></div></section>

      <section className="border-t border-line"><div className="grid gap-8 py-20 lg:grid-cols-12 shell"><Eyebrow>Related hardware</Eyebrow><div className="lg:col-span-7 lg:col-start-6"><p className="text-2xl tracking-[-0.03em]">{project.relatedHardware}</p><Link href="/gearbox" className="mt-6 inline-flex border-b border-line-interactive pb-1 text-sm hover:border-accent">Explore the hardware →</Link></div></div></section>
    </>
  );
}
