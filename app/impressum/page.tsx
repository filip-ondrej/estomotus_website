import type {Metadata} from "next";
import {PageIntro} from "@/src/components/ui";

export const metadata: Metadata = {title: "Impressum", robots: {index: false, follow: false}};

export default function LegalPlaceholderPage() {
    return <>
        <PageIntro eyebrow="Development placeholder - Incomplete" title="Impressum"
                   copy="This development placeholder is not a completed legal notice. Verified company information must be supplied before launch."/>
        <section className="shell pb-16" aria-labelledby="required-information">
            <h2 id="required-information" className="type-subsection">Information required before launch</h2>
            <ul className="mt-6 max-w-2xl list-disc space-y-3 pl-5 text-muted">
                    <li>Legal entity name and legal form</li>
                    <li>Serviceable business address and authorized representative</li>
                    <li>Verified contact details</li>
                    <li>Registration, VAT and other applicable legal disclosures</li>
            </ul>
        </section>
    </>;
}
