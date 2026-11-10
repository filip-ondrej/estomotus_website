import type {Metadata} from "next";
import {PageIntro} from "@/src/components/ui";

export const metadata: Metadata = {title: "Datenschutz", robots: {index: false, follow: false}};

export default function LegalPlaceholderPage() {
    return <>
        <PageIntro eyebrow="Development placeholder - Incomplete" title="Datenschutz"
                   copy="This development placeholder is not a privacy policy. A verified description of the website's actual data processing must be supplied before launch."/>
        <section className="shell pb-16" aria-labelledby="required-information">
            <h2 id="required-information" className="type-subsection">Information required before launch</h2>
            <ul className="mt-6 max-w-2xl list-disc space-y-3 pl-5 text-muted">
                    <li>Identity and contact details of the data controller</li>
                    <li>Actual hosting, server logging and service providers</li>
                    <li>Data processing purposes, legal bases and retention periods</li>
                    <li>Actual form, email and cookie processing, recipients and transfers</li>
                    <li>Applicable rights, complaint contact and any required consent settings</li>
            </ul>
        </section>
    </>;
}
