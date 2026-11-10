import type { Metadata } from "next";
import { GearboxVisual } from "@/app/components/gearbox-visual";
import { ButtonLink, Eyebrow } from "@/app/components/ui";

export const metadata: Metadata = {
  title: "Cycloidal gearbox",
  description: "A compact 15:1 cycloidal gearbox for robotics development.",
};

const variants = [
  { name: "Printed", label: "Build it yourself", material: "Engineering polymer", torque: "Development use", availability: "Release planned" },
  { name: "Aluminium", label: "Dev Edition · Batch 01", material: "CNC aluminium", torque: "2.5 Nm target (provisional)", availability: "Aluminium version in machining" },
  { name: "Steel", label: "High-load edition", material: "Hardened steel", torque: "Not specified", availability: "Planned variant" },
];

const specs = [
  ["Reduction", "15:1"], ["Design envelope (preliminary)", "42 × 42 × 36 mm"], ["Motor interface", "NEMA 17"],
  ["Continuous torque target", "2.5 Nm (unvalidated)"], ["Transmission", "Two-disc cycloidal"], ["Output", "Integrated bearing interface"],
  ["Manufacture", "Designed and machined in Germany"], ["Status", "Plastic prototype built; aluminium machining"],
];

export default function GearboxPage() {
  return (
    <>
      <header className="grid min-h-[82vh] items-end gap-12 pb-16 pt-36 lg:grid-cols-12 lg:pb-24 lg:pt-44 shell">
        <div className="lg:col-span-6"><Eyebrow>EM–15 / Cycloidal gearbox</Eyebrow><h1 className="mt-7 text-[clamp(3.5rem,9vw,9rem)] font-medium leading-[0.86] tracking-[-0.07em]">Small<br />geometry.<br />Serious<br />motion.</h1></div>
        <div className="lg:col-span-5 lg:col-start-8"><p className="max-w-lg text-xl leading-8 tracking-[-0.02em]">A compact 15:1 cycloidal gearbox built for robotics development.</p><p className="mt-5 max-w-lg text-sm leading-7 text-muted">Designed around a 42 mm motor format, the EM–15 is our first step toward a complete, integrated motion system.</p><div className="mt-8"><ButtonLink href="/teams" inverted>Discuss Batch 01</ButtonLink></div></div>
      </header>

      <section className="pb-24 lg:pb-40 shell"><div className="h-[55vh] min-h-[440px] border border-line lg:h-[78vh]"><GearboxVisual /></div></section>

      <section className="border-t border-line"><div className="grid gap-12 py-24 lg:grid-cols-12 lg:py-36 shell"><div className="lg:col-span-4"><Eyebrow>01 / Architecture</Eyebrow></div><div className="lg:col-span-7 lg:col-start-6"><h2 className="text-[clamp(2.6rem,5vw,5.5rem)] font-medium leading-[0.93] tracking-[-0.055em]">Made to move out of the lab.</h2><div className="mt-10 grid gap-6 text-sm leading-7 text-muted sm:grid-cols-2"><p>Cycloidal transmission gives the EM–15 a high reduction ratio in a compact envelope, with a robust load path suited to robotic joints and test platforms.</p><p>The architecture is intentionally modular. Printed parts make it accessible for experimentation; machined variants add repeatability, stiffness and useful torque.</p></div></div></div></section>

      <section className="border-t border-line"><div className="py-24 lg:py-36 shell"><Eyebrow>02 / Variants</Eyebrow><div className="mt-12 grid border-l border-t border-line md:grid-cols-3">{variants.map((variant, index) => <article key={variant.name} className="min-h-[400px] border-b border-r border-line p-6 lg:p-8"><span className="text-[10px] text-muted">0{index + 1}</span><h2 className="mt-12 text-3xl tracking-[-0.04em]">{variant.name}</h2><p className="mt-2 text-xs text-muted">{variant.label}</p><dl className="mt-14 text-sm"><div className="border-b border-line py-3"><dt className="text-[10px] uppercase tracking-[0.15em] text-muted">Material</dt><dd className="mt-2">{variant.material}</dd></div><div className="border-b border-line py-3"><dt className="text-[10px] uppercase tracking-[0.15em] text-muted">Torque</dt><dd className="mt-2">{variant.torque}</dd></div><div className="py-3"><dt className="text-[10px] uppercase tracking-[0.15em] text-muted">Availability</dt><dd className="mt-2">{variant.availability}</dd></div></dl></article>)}</div></div></section>

      <section className="border-t border-line"><div className="grid gap-12 py-24 lg:grid-cols-12 lg:py-36 shell"><div className="lg:col-span-4"><Eyebrow>03 / Preliminary specification</Eyebrow><p className="mt-5 max-w-xs text-xs leading-5 text-muted">Engineering values are provisional and will be updated after validation.</p></div><div className="lg:col-span-7 lg:col-start-6"><dl className="technical-specs">{specs.map(([label, value]) => <div key={label} className="grid grid-cols-2 gap-6 border-t border-line py-5 text-sm last:border-b"><dt className="text-muted">{label}</dt><dd>{value}</dd></div>)}</dl></div></div></section>

      <section className="border-t border-line"><div className="py-24 lg:py-36 shell"><Eyebrow>04 / Downloads</Eyebrow><div className="mt-12 grid border-l border-t border-line sm:grid-cols-3">{[["STEP model", "Coming with Batch 01"], ["Technical drawing", "Not released yet"], ["Documentation", "Build guide planned"]].map(([title, note], index) => <div key={title} className="flex min-h-44 flex-col border-b border-r border-line p-6"><span className="text-[10px] text-muted">0{index + 1}</span><h2 className="mt-auto text-lg">{title}</h2><p className="mt-2 text-xs text-muted">{note}</p></div>)}</div></div></section>

      <section data-theme="light" data-nav-theme="light" className="border-t border-line bg-background text-foreground"><div className="grid gap-10 py-24 lg:grid-cols-12 lg:py-32 shell"><div className="lg:col-span-7"><p className="text-[10px] uppercase tracking-[0.2em] text-muted">Dev Edition · Batch 01</p><h2 className="mt-6 text-[clamp(3rem,6vw,6.5rem)] font-medium leading-[0.9] tracking-[-0.06em]">Build the next<br />joint with us.</h2></div><div className="self-end lg:col-span-4 lg:col-start-9"><p className="text-sm leading-7 text-muted">The aluminium version is being machined. Pricing, release timing and reservation availability will follow physical validation. Product enquiries are not connected yet.</p><div className="mt-8"><ButtonLink href="/teams" onLight>Discuss Batch 01</ButtonLink></div></div></div></section>
    </>
  );
}
