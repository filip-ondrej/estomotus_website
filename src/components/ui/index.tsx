import type {ReactNode} from "react";

export function Eyebrow({children}: { children: ReactNode }) {
    return <p className="type-caption font-medium tracking-[0.08em] text-muted">{children}</p>;
}

export {ArrowLink} from "@/src/components/ui/TextLink";
export {ButtonLink} from "@/src/components/ui/Button";

export function PageIntro({eyebrow, title, copy}: { eyebrow: string; title: string; copy: string }) {
    return <header className="pb-16 pt-36 lg:pb-24 lg:pt-48 shell">
        <Eyebrow>{eyebrow}</Eyebrow><h1
        className="mt-7 max-w-5xl text-[clamp(3rem,8vw,8rem)] font-medium leading-[0.9] tracking-[-0.06em]">{title}</h1>
        <p className="mt-10 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">{copy}</p></header>;
}

export function MediaPlaceholder({label, index = "01", className = ""}: {
    label: string;
    index?: string;
    className?: string
}) {
    return <div className={`relative overflow-hidden border border-line bg-surface ${className}`}>
        <div className="absolute inset-x-0 top-1/2 h-px bg-line"/>
        <div className="absolute inset-y-0 left-1/2 w-px bg-line"/>
        <div className="absolute left-6 top-5 type-meta text-muted">{label}</div>
        <div className="absolute right-6 top-5 type-meta text-muted">{index}</div>
        <div
            className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-line sm:h-24 sm:w-24"/>
        <div
            className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-line"/>
    </div>;
}
