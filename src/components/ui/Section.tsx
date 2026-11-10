import type {ComponentPropsWithoutRef} from "react";

export type SectionTheme = "light" | "dark";

export function Section({theme, className = "", ...props}: ComponentPropsWithoutRef<"section"> & {
    theme: SectionTheme
}) {
    return <section {...props} data-theme={theme} data-nav-theme={theme} className={`section-theme ${className}`}/>;
}
