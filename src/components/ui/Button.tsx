import Link from "next/link";
import type {ComponentPropsWithoutRef, ReactNode} from "react";

type Variant = "primary" | "secondary";

export function Button({variant = "primary", className = "", ...props}: ComponentPropsWithoutRef<"button"> & {
    variant?: Variant
}) {
    return <button {...props} className={`button button--${variant} ${className}`}/>;
}

export function ButtonLink({href, children, inverted = false, onLight = false}: {
    href: string;
    children: ReactNode;
    inverted?: boolean;
    onLight?: boolean;
}) {
    return <Link href={href} data-theme={onLight ? "light" : undefined}
                 className={`button button--${inverted ? "primary" : "secondary"}`}>{children}</Link>;
}
