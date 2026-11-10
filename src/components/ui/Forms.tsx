"use client";

import {useState, type FormEvent} from "react";
import {Input} from "@/src/components/ui/Input";
import {Button} from "@/src/components/ui/Button";

export function EmailCapture({showDisclaimer = true, idPrefix, submitArrow = "↗"}: {
    showDisclaimer?: boolean;
    idPrefix?: string;
    submitArrow?: "↗" | "→";
}) {
    const [message, setMessage] = useState("");
    const emailId = idPrefix ? `${idPrefix}-email` : "early-access-email";
    const noteId = idPrefix ? `${idPrefix}-note` : "signup-note";

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setMessage("Early-access registration is not open yet. Your email has not been saved or sent. Please check back for launch updates.");
    }

    return (
        <div className="email-capture">
            <form onSubmit={handleSubmit} aria-label="Early access signup"
                  aria-describedby={showDisclaimer ? noteId : undefined}>
                <label htmlFor={emailId} className="sr-only">Email address</label>
                <Input id={emailId} name="email" type="email" required autoComplete="email"
                       placeholder="Your email address"/>
                <Button type="submit">Early access <span aria-hidden="true">{submitArrow}</span></Button>
            </form>
            {showDisclaimer && <p id={noteId} className="signup-note">Registration opens soon. This form does not save or send your
                email yet.</p>}
            <p role="status" className="signup-response">{message}</p>
        </div>
    );
}

const inputClass = "form-input mt-2";

export function TeamForm() {
    const [message, setMessage] = useState("");

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setMessage("Enquiries are not connected yet. Nothing has been sent or saved. Please check back when enquiries open.");
    }

    return (
        <form onSubmit={handleSubmit} className="grid gap-x-5 gap-y-7 sm:grid-cols-2">
            <FormField id="name" label="Name" autoComplete="name" required/><FormField id="company" label="Company"
                                                                                       autoComplete="organization"
                                                                                       required/><FormField id="email"
                                                                                                            label="Email"
                                                                                                            type="email"
                                                                                                            autoComplete="email"
                                                                                                            required/>
            <div><label htmlFor="joints" className="text-xs text-muted">How many joints?</label><Input id="joints"
                                                                                                       name="joints"
                                                                                                       type="number"
                                                                                                       min="1"
                                                                                                       placeholder="e.g. 24"
                                                                                                       className={inputClass}/>
            </div>
            <div className="sm:col-span-2"><label htmlFor="building" className="text-xs text-muted">What are you
                building?</label><Input id="building" name="building" type="text"
                                        placeholder="Robot type and application" className={inputClass} required/></div>
            <div className="sm:col-span-2"><label htmlFor="timeline"
                                                  className="text-xs text-muted">Timeline</label><select id="timeline"
                                                                                                         name="timeline"
                                                                                                         defaultValue=""
                                                                                                         className={inputClass}>
                <option value="" disabled>Select a timeframe</option>
                <option>0–3 months</option>
                <option>3–6 months</option>
                <option>6–12 months</option>
                <option>12+ months</option>
            </select></div>
            <div className="sm:col-span-2"><label htmlFor="message"
                                                  className="text-xs text-muted">Message</label><textarea id="message"
                                                                                                          name="message"
                                                                                                          rows={5}
                                                                                                          placeholder="Tell us about your requirements, constraints and current setup."
                                                                                                          className={`${inputClass} h-auto resize-y py-4`}/>
            </div>
            <div className="sm:col-span-2">
                <Button type="submit" className="w-full sm:w-auto">Send
                    enquiry
                </Button>
                <p className="mt-4 text-[11px] leading-5 text-muted">Enquiries open soon. This form does not send or
                    save your information yet.</p><p role="status" className="mt-3 text-sm text-muted">{message}</p>
            </div>
        </form>
    );
}

function FormField({id, label, type = "text", autoComplete, required = false}: {
    id: string;
    label: string;
    type?: string;
    autoComplete?: string;
    required?: boolean
}) {
    return <div><label htmlFor={id} className="text-xs text-muted">{label}</label><Input id={id} name={id} type={type}
                                                                                         autoComplete={autoComplete}
                                                                                         required={required}
                                                                                         className={inputClass}/></div>;
}
