// Deliberately schematic geometry, not product CAD. Named groups allow future
// animation without coupling it to the section layout or content.
const rollerAngles = Array.from({length: 12}, (_, i) => i * Math.PI / 6);

export function JointStudy() {
    return <svg className="em-joint-study" viewBox="0 0 1200 230" role="img" aria-label="Conceptual exploded joint showing gearbox, motor, encoder, controller, housing and a single connection">
        <g fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M102 108h982m-982 8h982" opacity=".3"/>
            <g data-part="gearbox" transform="translate(150 112)">
                <path d="M-12-58H18a27 58 0 0 1 0 116H-12" fill="var(--surface)"/>
                <ellipse cx="-12" rx="27" ry="58" fill="var(--background)"/>
                <ellipse cx="-12" rx="20" ry="45"/>
                <ellipse cx="-12" rx="8" ry="19"/>
                {rollerAngles.map((angle, i) => <ellipse key={i} cx={-12 + 17 * Math.cos(angle)} cy={39 * Math.sin(angle)} rx="2.4" ry="4"/>)}
                <path d="M-20-10h-28v20h28M17-44h12M17 44h12"/>
            </g>
            <g data-part="motor" transform="translate(345 112)">
                <path d="M-34-48h66a23 48 0 0 1 0 96h-66" fill="var(--surface-raised)"/>
                <ellipse cx="-34" rx="23" ry="48" fill="var(--surface)"/>
                <ellipse cx="-34" rx="14" ry="31"/>
                <path d="M-42-7h-29V7h29"/>
                {[-36, -24, -12, 0, 12, 24, 36].map(y => <path key={y} d={`M-10 ${y}h42`} opacity=".4"/>)}
            </g>
            <g data-part="encoder" transform="translate(540 112)">
                <path d="M-8-46H2a22 46 0 0 1 0 92H-8" fill="var(--surface)"/>
                <ellipse cx="-8" rx="22" ry="46"/>
                <ellipse cx="-8" rx="8" ry="17"/>
                {rollerAngles.map((angle, i) => <path key={i} d={`M${-8 + 16 * Math.cos(angle)} ${34 * Math.sin(angle)}l${3 * Math.cos(angle)} ${6 * Math.sin(angle)}`} stroke="var(--accent)"/>)}
            </g>
            <g data-part="controller" transform="translate(725 112)">
                <path d="m-33-47 48-9 25 98-48 9Z" fill="var(--surface)"/>
                <path d="m-13-20 20-4 10 39-20 4Z" stroke="var(--accent)"/>
                <path d="m-21-35 15-3m18 67 15-3M-16-8l-9 2m12 10-9 2m12 10-9 2m29-29 9-2m-6 14 9-2m-6 14 9-2"/>
            </g>
            <g data-part="housing" transform="translate(925 112)">
                <path d="M-26-61h52a30 61 0 0 1 0 122h-52" fill="var(--surface)"/>
                <ellipse cx="-26" rx="30" ry="61"/>
                <ellipse cx="-26" rx="23" ry="51"/>
                <path d="M-5-51h30M-5 51h30M43-28v56" opacity=".5"/>
            </g>
            <g data-part="connection" transform="translate(1100 112)" stroke="var(--accent)">
                <path d="M-40 0h24m16 0h55v-23h25"/>
                <rect x="-16" y="-11" width="16" height="22" rx="3" fill="var(--background)"/>
                <path d="M-11-7V7M-6-7V7"/>
            </g>
        </g>
        <g fill="var(--muted)" textAnchor="middle" fontSize="14" fontFamily="var(--font-technical)">
            <text x="150" y="214">Gearbox</text><text x="345" y="214">Motor</text>
            <text x="540" y="214">Encoder</text><text x="725" y="214">Controller</text>
            <text x="925" y="214">Housing</text><text x="1100" y="214">Connection</text>
        </g>
    </svg>;
}

export function GearboxStudy() {
    const profile = Array.from({length: 241}, (_, i) => {
        const angle = i * Math.PI * 2 / 240;
        const radius = 78 + 5 * Math.cos(11 * angle);
        return `${i ? "L" : "M"}${(radius * Math.cos(angle)).toFixed(2)} ${(radius * Math.sin(angle)).toFixed(2)}`;
    }).join(" ") + "Z";
    return <svg className="em-gearbox-study" viewBox="30 20 640 350" role="img" aria-label="Illustrative front and side studies of a compact cycloidal gearbox. Schematic only, not validated product CAD.">
        <g fill="none" stroke="currentColor" strokeWidth="1.2">
            <g data-part="front-study" transform="translate(240 183)">
                <path d="M-150 0h300M0-150v300" strokeDasharray="8 5 2 5" opacity=".25"/>
                <rect x="-115" y="-115" width="230" height="230" rx="22"/>
                <circle r="102"/><circle r="91" opacity=".35"/>
                <path d={profile} fill="var(--background)" stroke="var(--accent)"/>
                <circle r="34"/><circle r="20"/>
                {rollerAngles.map((angle, i) => <circle key={i} cx={91 * Math.cos(angle)} cy={91 * Math.sin(angle)} r="5"/>)}
                {[[-97, -97], [97, -97], [-97, 97], [97, 97]].map(([x, y]) => <g key={`${x}-${y}`}><circle cx={x} cy={y} r="5"/><path d={`M${x - 9} ${y}h18m-9-9v18`} opacity=".3"/></g>)}
                {[0, 1, 2, 3, 4, 5].map(i => <circle key={i} cx={54 * Math.cos(i * Math.PI / 3)} cy={54 * Math.sin(i * Math.PI / 3)} r="8"/>)}
            </g>
            <g data-part="side-study" transform="translate(520 183)">
                <path d="M-68 0H90M0-150v300" strokeDasharray="8 5 2 5" opacity=".25"/>
                <rect x="-38" y="-115" width="76" height="230" rx="3"/>
                <path d="M-28-115v230M22-115v230M-38-94h76M-38 94h76M38-34h18v68H38M56-19h24v38H56"/>
                <path d="M-38 140h76m-76-7v14m76-14v14" opacity=".4"/>
            </g>
            <path d="M95 334h290M459 334h122" opacity=".25"/>
        </g>
        <g fill="var(--muted)" fontSize="10" fontFamily="var(--font-technical)" textAnchor="middle">
            <text x="240" y="356">01 / Front study</text><text x="520" y="356">02 / Side study</text>
        </g>
    </svg>;
}
