"use client";

import {useId, useLayoutEffect, useRef, useState, type KeyboardEvent, type ReactNode} from "react";

type Category = {
    readonly id: string;
    readonly label: string;
    readonly headline: string;
    readonly description: string;
    readonly metadata: readonly string[];
};

export function SolutionTabs({categories, children}: {categories: readonly Category[]; children: ReactNode}) {
    const [selected, setSelected] = useState(0);
    const prefix = useId();
    const tabs = useRef<(HTMLButtonElement | null)[]>([]);
    const windowRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLDivElement>(null);
    const panelRef = useRef<HTMLDivElement>(null);
    const outlineRef = useRef<SVGSVGElement>(null);
    const pathRef = useRef<SVGPathElement>(null);

    useLayoutEffect(() => {
        const window = windowRef.current;
        const list = listRef.current;
        const panel = panelRef.current;
        const tab = tabs.current[selected];
        const outline = outlineRef.current;
        const path = pathRef.current;
        if (!window || !list || !panel || !tab || !outline || !path) return;
        let disposed = false;

        function measure() {
            if (disposed || !window || !panel || !tab || !outline || !path) return;
            const frame = window.getBoundingClientRect();
            const body = panel.getBoundingClientRect();
            const active = tab.getBoundingClientRect();
            const style = getComputedStyle(window);
            const pixels = (value: string) => parseFloat(value) * (value.trim().endsWith("rem")
                ? parseFloat(getComputedStyle(document.documentElement).fontSize)
                : value.trim().endsWith("em") ? parseFloat(style.fontSize) : 1);
            const inset = pixels(style.getPropertyValue("--stroke-ui")) / 2;
            const left = inset, right = frame.width - inset;
            const top = body.top - frame.top + inset, bottom = frame.height - inset;
            const radius = Math.min(pixels(style.getPropertyValue("--radius-tab")), body.height / 2);
            const fillet = pixels(style.getPropertyValue("--radius-fillet"));
            const tabLeft = active.left - frame.left + inset;
            const tabRight = active.right - frame.left - inset;
            const tabTop = active.top - frame.top + inset;
            const cap = Math.min(radius, (tabRight - tabLeft) / 2, top - tabTop - fillet);
            // A manually scrolled, offscreen tab leaves a complete panel outline.
            // Selecting a tab centers it in the strip and restores both junctions.
            const visible = tabLeft - fillet >= left + radius - .5
                && tabRight + fillet <= right - radius + .5;
            const junction = visible ? [
                `L ${tabLeft - fillet} ${top}`,
                `A ${fillet} ${fillet} 0 0 0 ${tabLeft} ${top - fillet}`,
                `L ${tabLeft} ${tabTop + cap}`,
                `A ${cap} ${cap} 0 0 1 ${tabLeft + cap} ${tabTop}`,
                `L ${tabRight - cap} ${tabTop}`,
                `A ${cap} ${cap} 0 0 1 ${tabRight} ${tabTop + cap}`,
                `L ${tabRight} ${top - fillet}`,
                `A ${fillet} ${fillet} 0 0 0 ${tabRight + fillet} ${top}`,
            ] : [];
            // One closed contour owns every edge; no masking or overlapping borders.
            path.setAttribute("d", [
                `M ${left + radius} ${top}`, ...junction,
                `L ${right - radius} ${top}`,
                `A ${radius} ${radius} 0 0 1 ${right} ${top + radius}`,
                `L ${right} ${bottom - radius}`,
                `A ${radius} ${radius} 0 0 1 ${right - radius} ${bottom}`,
                `L ${left + radius} ${bottom}`,
                `A ${radius} ${radius} 0 0 1 ${left} ${bottom - radius}`,
                `L ${left} ${top + radius}`,
                `A ${radius} ${radius} 0 0 1 ${left + radius} ${top}`, "Z",
            ].join(" "));
            outline.setAttribute("viewBox", `0 0 ${frame.width} ${frame.height}`);
        }

        function centerActive() {
            if (disposed || !list || !tab) return;
            const active = tab.getBoundingClientRect();
            const strip = list.getBoundingClientRect();
            list.scrollTo({left: list.scrollLeft + active.left + active.width / 2 - strip.left - strip.width / 2, behavior: "instant"});
        }
        centerActive();
        measure();
        const observer = new ResizeObserver(() => { centerActive(); measure(); });
        [window, panel, list, ...tabs.current].forEach(element => { if (element) observer.observe(element); });
        list.addEventListener("scroll", measure, {passive: true});
        void document.fonts.ready.then(measure);
        return () => {
            disposed = true;
            observer.disconnect();
            list.removeEventListener("scroll", measure);
        };
    }, [selected]);

    function navigate(event: KeyboardEvent<HTMLButtonElement>, index: number) {
        let next: number;
        switch (event.key) {
            case "ArrowRight": next = (index + 1) % categories.length; break;
            case "ArrowLeft": next = (index - 1 + categories.length) % categories.length; break;
            case "Home": next = 0; break;
            case "End": next = categories.length - 1; break;
            default: return;
        }
        event.preventDefault();
        setSelected(next);
        tabs.current[next]?.focus();
    }

    return <div className="em-solution-explorer" data-category={categories[selected].id}>
        {children}
        <div className="em-solution-window" ref={windowRef}>
        <div className="em-solution-tabs" ref={listRef} role="tablist" aria-label="Planned platform categories" aria-orientation="horizontal">
            {categories.map((category, index) => <button
                key={category.id}
                ref={element => { tabs.current[index] = element; }}
                type="button" role="tab" id={`${prefix}-${category.id}`}
                aria-selected={index === selected} aria-controls={`${prefix}-detail`}
                tabIndex={index === selected ? 0 : -1}
                onClick={() => setSelected(index)} onKeyDown={event => navigate(event, index)}
            ><span className="em-solution-tab-label">{category.label}</span></button>)}
        </div>
        <div className="em-solution-panel" ref={panelRef} role="tabpanel" id={`${prefix}-detail`}
             aria-labelledby={`${prefix}-${categories[selected].id}`} tabIndex={0}>
            {/* Shared grid sizing reserves the tallest detail at every width, without clipping.
                Inactive layers are invisible, inert and absent from the accessibility tree. */}
            {categories.map((category, index) => <div className="em-solution-detail" key={category.id}
                data-active={index === selected} aria-hidden={index !== selected} inert={index !== selected}>
                <h3>{category.headline}</h3>
                <div className="em-solution-detail-body">
                    <p className="em-detail-copy">{category.description}</p>
                    <ul className="em-technical-list" aria-label="Technical specifications">
                        {category.metadata.map(specification => <li key={specification}>{specification}</li>)}
                    </ul>
                </div>
            </div>)}
        </div>
        <svg className="em-solution-outline" ref={outlineRef} aria-hidden="true" focusable="false">
            <path ref={pathRef}/>
        </svg>
        </div>
    </div>;
}
