"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useId, useRef, useState, type Ref } from "react";
import { Wordmark } from "@/src/components/ui/Wordmark";
import type { SectionTheme } from "@/src/components/ui/Section";
import "./HeaderBar.css";

const links = [
  { href: "/gearbox", label: "Hardware" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/teams", label: "For teams" },
];

type HeaderBarProps = {
  theme: SectionTheme;
  headerRef?: Ref<HTMLElement>;
};

export function HeaderBar({ theme, headerRef }: HeaderBarProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();
  const isCurrent = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return <header ref={headerRef} data-theme={theme} className="em-header-header em-header-fixed"
    onKeyDown={(event) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }}
    onBlur={(event) => {
      if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
    }}>
    <div className="shell em-header-row" data-header-row>
      <Link className="em-header-brand" href="/" aria-label="ESTO MOTUS home" onClick={() => setOpen(false)}><Wordmark /></Link>
      <nav className="em-header-navigation" aria-label="Primary navigation">
        <ul className="em-header-linkList">{links.map((link) => <li key={link.href}>
          <Link href={link.href} aria-current={isCurrent(link.href) ? "page" : undefined}
            data-active={isCurrent(link.href)} data-label={link.label} className="em-header-navLink">
            <span className="em-header-navLabel">{link.label}</span>
          </Link>
        </li>)}</ul>
      </nav>
      <div className="em-header-actions">
        <AccessLink onNavigate={() => setOpen(false)} />
        <button type="button" ref={toggleRef} className="em-header-menuToggle"
          aria-expanded={open} aria-controls={menuId} aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen(!open)}><span>{open ? "Close" : "Menu"}</span><span aria-hidden="true">{open ? "−" : "+"}</span></button>
      </div>
    </div>
    <nav id={menuId} hidden={!open} className="em-header-mobileNavigation" aria-label="Mobile navigation">
      <div className="shell">
        {links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}
          aria-current={isCurrent(link.href) ? "page" : undefined} data-active={isCurrent(link.href)}>
          <span>{link.label}</span><span aria-hidden="true">↗</span>
        </Link>)}
        <AccessLink onNavigate={() => setOpen(false)} mobile />
      </div>
    </nav>
  </header>;
}

function AccessLink({ mobile = false, onNavigate }: { mobile?: boolean; onNavigate: () => void }) {
  return <Link href="/#early-access" onClick={onNavigate}
    className={`em-header-access ${mobile ? "em-header-mobileAccess" : "em-header-desktopAccess"}`}>
    <span className="em-header-accessMarker" aria-hidden="true" />
    <span>Early access</span><span className="em-header-accessArrow" aria-hidden="true">↗</span>
  </Link>;
}
