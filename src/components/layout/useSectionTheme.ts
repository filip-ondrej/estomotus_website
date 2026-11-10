"use client";

import {useEffect, useState, type RefObject} from "react";
import type {SectionTheme} from "@/src/components/ui/Section";

/** Sample a narrow band under the header. No scroll handler or per-frame work. */
export function useSectionTheme(pathname: string, headerRef: RefObject<HTMLElement | null>) {
    const fallback: SectionTheme = pathname === "/" ? "light" : "dark";
    const [observed, setObserved] = useState<{ pathname: string; theme: SectionTheme } | null>(null);

    useEffect(() => {
        const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-nav-theme]"));
        if (!sections.length) return;

        let observer: IntersectionObserver | undefined;
        let previousGeometry = "";
        const row = headerRef.current?.querySelector("[data-header-row]");

        function observe() {
            const sample = Math.min(window.innerHeight - 12, (row?.getBoundingClientRect().height ?? 72) / 2);
            const geometry = `${window.innerHeight}:${sample}`;
            if (geometry === previousGeometry) return;
            previousGeometry = geometry;
            observer?.disconnect();
            const intersecting = new Set<HTMLElement>();
            let active: HTMLElement | undefined;

            observer = new IntersectionObserver((entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) intersecting.add(entry.target as HTMLElement);
                    else intersecting.delete(entry.target as HTMLElement);
                }
                // Keep the current source through the eight-pixel overlap band.
                // This prevents alternating themes around a section boundary.
                if (active && intersecting.has(active)) return;
                active = sections.find((section) => intersecting.has(section));
                const theme = active ? (active.dataset.navTheme === "light" ? "light" : "dark") : fallback;
                setObserved((previous) => previous?.pathname === pathname && previous.theme === theme
                    ? previous : {pathname, theme});
            }, {
                rootMargin: `-${Math.max(0, sample - 4)}px 0px -${Math.max(0, window.innerHeight - sample - 4)}px 0px`,
                threshold: 0,
            });
            sections.forEach((section) => observer?.observe(section));
        }

        observe();
        window.addEventListener("resize", observe, {passive: true});
        const resize = new ResizeObserver(observe);
        if (row) resize.observe(row);
        return () => {
            observer?.disconnect();
            resize.disconnect();
            window.removeEventListener("resize", observe);
        };
    }, [pathname, headerRef, fallback]);

    return observed?.pathname === pathname ? observed.theme : fallback;
}
