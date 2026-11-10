import Link from "next/link";
import type {ReactNode} from "react";

export function ArrowLink({href, children}: { href: string; children: ReactNode }) {
    return <Link href={href} className="text-link"><span>{children}</span><span aria-hidden="true">→</span></Link>;
}
