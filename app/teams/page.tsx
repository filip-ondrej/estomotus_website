import type { Metadata } from "next";
import { TeamForm } from "@/app/components/forms";
import { Eyebrow, PageIntro } from "@/app/components/ui";

export const metadata: Metadata = { title: "For teams", description: "Become an ESTO MOTUS design partner and help shape integrated motion hardware." };

const reasons = [
  ["Shape the interface", "Bring real integration constraints into the mechanical and electrical architecture."],
  ["Test early hardware", "Evaluate development units in a real robot before the product is locked."],
  ["Work directly with us", "Short feedback loops with the people designing and machining the hardware."],
];

export default function TeamsPage() {
  return (
    <>
      <PageIntro eyebrow="Design partners / Limited intake" title="Build the next joint with us." copy="We are looking for a small number of robotics teams whose real-world requirements can help shape the next generation of ESTO MOTUS hardware." />
      <section className="border-t border-line"><div className="py-24 lg:py-32 shell"><Eyebrow>Why talk to us</Eyebrow><div className="mt-12 grid border-l border-t border-line md:grid-cols-3">{reasons.map(([title, copy], index) => <article key={title} className="min-h-72 border-b border-r border-line p-6 lg:p-8"><span className="text-[10px] text-muted">0{index + 1}</span><h2 className="mt-14 text-2xl font-medium tracking-[-0.04em]">{title}</h2><p className="mt-5 text-sm leading-7 text-muted">{copy}</p></article>)}</div></div></section>
      <section className="border-t border-line"><div className="grid gap-16 py-24 lg:grid-cols-12 lg:py-36 shell"><div className="lg:col-span-4"><Eyebrow>Start a conversation</Eyebrow><h2 className="mt-7 text-4xl font-medium leading-tight tracking-[-0.05em]">Tell us what your robot needs to move.</h2><p className="mt-6 max-w-sm text-sm leading-7 text-muted">No polished brief required. A few useful constraints are enough to start.</p></div><div className="lg:col-span-7 lg:col-start-6"><TeamForm /></div></div></section>
    </>
  );
}
