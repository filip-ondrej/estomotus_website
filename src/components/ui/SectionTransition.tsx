import "./SectionTransition.css";

export function SectionTransition({href, children}: {href: string; children: string}) {
    return <a href={href} className="em-section-transition">
        {children} <span aria-hidden="true">↓</span>
    </a>;
}
