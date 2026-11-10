"use client";

import { usePathname } from "next/navigation";
import { useRef } from "react";
import { HeaderBar } from "@/src/components/layout/HeaderBar";
import { useSectionTheme } from "@/src/components/layout/useSectionTheme";

export function Navbar() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const theme = useSectionTheme(pathname, headerRef);

  return <>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <HeaderBar theme={theme} headerRef={headerRef} />
  </>;
}
