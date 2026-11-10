export function ProjectSketch({kind = "arm"}: { kind?: "arm" | "bench" }) {
    return <svg viewBox="0 0 640 380" className="project-sketch" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round">
            <path d="M65 315h510M320 35v300" strokeDasharray="3 8" opacity=".25"/>
            {kind === "arm" ? <>
                <path
                    d="m210 300 130 20 96-28-133-18zM241 296v-29l72-20 86 17v31M287 258l-43-100 35-15 53 103M261 147l92-92 29 29-94 92M369 59l89 63-21 29-83-66M453 131l27 8 11 32-13 4-10-23-24-6M467 153l-6 22 13 8"/>
                <ellipse cx="304" cy="270" rx="36" ry="16"/>
                <circle cx="271" cy="158" r="27"/>
                <circle cx="271" cy="158" r="12"/>
                <circle cx="368" cy="71" r="23"/>
                <circle cx="368" cy="71" r="9"/>
                <circle cx="446" cy="134" r="16"/>
                <circle cx="446" cy="134" r="6"/>
                <path d="m237 158-54-37H99M369 48l35-23h120M323 274l106 49h95" opacity=".45"/>
                <circle cx="237" cy="158" r="3" fill="currentColor"/>
                <circle cx="369" cy="48" r="3" fill="currentColor"/>
            </> : <>
                <path d="M100 260h440v35H100zM135 260V120h70v140m230 0V120h70v140M165 178h310"/>
                <circle cx="320" cy="178" r="62"/>
                <circle cx="320" cy="178" r="37"/>
                <path d="M320 92v173M205 120h230" strokeDasharray="4 6"/>
            </>}
        </g>
    </svg>;
}
