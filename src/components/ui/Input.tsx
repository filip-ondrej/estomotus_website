import type {ComponentPropsWithoutRef} from "react";

export function Input({className = "", ...props}: ComponentPropsWithoutRef<"input">) {
    return <input {...props} className={`form-input ${className}`}/>;
}
