import type { Metadata } from "next";
import { Eyebrow, MediaPlaceholder, PageIntro } from "@/app/components/ui";

export const metadata: Metadata = { title: "About", description: "Why ESTO MOTUS is building motion hardware for robotics in Germany." };

export default function AboutPage() {
  return (
    <>
      <PageIntro eyebrow="About / ESTO MOTUS" title="Make motion less complicated." copy="We build the hardware between a robot's intelligence and the physical world — focused, integrated and made to be trusted." />
      <section className="border-t border-line"><div className="grid gap-12 py-24 lg:grid-cols-12 lg:py-36 shell"><div className="lg:col-span-4"><Eyebrow>01 / Mission</Eyebrow></div><div className="lg:col-span-7 lg:col-start-6"><p className="text-[clamp(2rem,4vw,4rem)] leading-[1.05] tracking-[-0.05em]">Roboticists should be able to choose motion hardware as a system, not assemble it from disconnected parts.</p><div className="mt-12 grid gap-6 text-sm leading-7 text-muted sm:grid-cols-2"><p>ESTO MOTUS is developing gearboxes, motors, controllers and joints around a shared mechanical and electrical architecture.</p><p>We start small, measure carefully and bring manufacturing close to development. The result should be hardware that is easier to specify, integrate and service.</p></div></div></div></section>
      <section className="pb-24 lg:pb-36 shell"><MediaPlaceholder label="Workshop / Germany" className="h-[55vh] min-h-[420px] lg:h-[70vh]" /></section>
      <section className="border-t border-line"><div className="grid gap-12 py-24 lg:grid-cols-12 lg:py-36 shell"><div className="lg:col-span-4"><Eyebrow>02 / Founders</Eyebrow></div><div className="lg:col-span-7 lg:col-start-6"><h2 className="text-3xl font-medium tracking-[-0.04em]">Engineering close to the workbench.</h2><p className="mt-8 max-w-2xl text-base leading-8 text-muted">ESTO MOTUS was founded to close the gap between advanced robotics software and the hardware available to move it. Product development happens hands-on: design, machining, assembly and testing inform one another in short cycles.</p><p className="mt-6 max-w-2xl text-base leading-8 text-muted">We are two founders with complementary mechanical and electronics engineering capabilities, working in our own workshop in Germany. Founder names and photography will be added here.</p></div></div></section>
      <section className="border-t border-line"><div className="grid grid-cols-2 border-l border-line sm:grid-cols-4 shell">{[["01", "Design"], ["02", "Machine"], ["03", "Measure"], ["04", "Repeat"]].map(([number, label]) => <div key={number} className="flex min-h-40 flex-col justify-between border-b border-r border-line p-5"><span className="text-[10px] text-muted">{number}</span><span className="text-sm">{label}</span></div>)}</div></section>
    </>
  );
}
