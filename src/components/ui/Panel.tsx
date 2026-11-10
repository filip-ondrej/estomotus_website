import type {ComponentPropsWithoutRef} from "react";

export function TechnicalPanel({className = "", ...props}: ComponentPropsWithoutRef<"div">) {
    return <div {...props} className={`technical-panel ${className}`}/>;
}

export function GlassSurface({className = "", ...props}: ComponentPropsWithoutRef<"div">) {
    return <div {...props} className={`glass ${className}`}/>;
}
