export function GearboxVisual({ compact = false }: { compact?: boolean }) {
  return (
    <div className="relative h-full min-h-[320px] overflow-hidden bg-[#050505]" aria-label="Technical gearbox illustration" role="img">
      <div className="absolute inset-0 bg-[linear-gradient(#171717_1px,transparent_1px),linear-gradient(90deg,#171717_1px,transparent_1px)] bg-[size:25%_25%] opacity-40" />
      <svg viewBox="0 0 640 640" className={`absolute inset-0 h-full w-full ${compact ? "p-[16%]" : "p-[10%]"}`} aria-hidden="true">
        <g fill="none" stroke="currentColor" className="text-[#444]" strokeWidth="1">
          <circle cx="320" cy="320" r="210" />
          <circle cx="320" cy="320" r="164" />
          <circle cx="320" cy="320" r="98" />
          <circle cx="320" cy="320" r="32" />
          <path d="M320 84v472M84 320h472" strokeDasharray="4 8" />
          <path d="M171 171l298 298M469 171L171 469" strokeDasharray="4 8" />
          {Array.from({ length: 12 }).map((_, index) => {
            const angle = (index * Math.PI * 2) / 12;
            const x = 320 + Math.cos(angle) * 132;
            const y = 320 + Math.sin(angle) * 132;
            return <circle key={index} cx={x} cy={y} r="8" />;
          })}
          <path d="M260 320c0-33 27-60 60-60 24 0 45 14 54 34 8 18 23 32 42 39-6 55-51 99-108 99-59 0-108-48-108-108 0-58 45-105 102-108 8 19 23 34 42 42" stroke="#888" strokeWidth="2" />
        </g>
      </svg>
      <span className="absolute left-5 top-5 type-meta text-muted">Cycloidal drive / EM–15</span>
      <span className="absolute bottom-5 left-5 type-meta text-muted">15:1 / 42 × 42 mm</span>
      <span className="absolute right-5 top-5 type-meta text-muted">REV. 01</span>
    </div>
  );
}

export function HeroVisual() {
  return (
    <div className="relative aspect-square min-h-[360px] w-full border border-line bg-black lg:h-[min(74vh,760px)] lg:aspect-auto">
      <GearboxVisual />
      <div className="absolute bottom-0 right-0 border-l border-t border-line bg-black px-5 py-4 type-meta text-muted">
        Hardware in motion
      </div>
    </div>
  );
}
