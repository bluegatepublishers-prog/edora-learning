"use client";

import { Send } from "lucide-react";
import { useActionState } from "react";
import { submitContact } from "@/app/contact/actions";
import { initialContactState, interestAreas, organizationTypes } from "@/lib/contact";

function FieldError({ name, errors }: { name: string; errors?: Record<string, string> }) {
  return errors?.[name] ? <span id={`${name}-error`} className="field-error">{errors[name]}</span> : null;
}

export function ContactForm({ defaultInterest, defaultMessage, partnershipType }: { defaultInterest?: string; defaultMessage?: string; partnershipType?: string }) {
  const [state, action, pending] = useActionState(submitContact, initialContactState);
  const values = state.values;
  return <form id="enquiry-form" className="contact-form" action={action} noValidate><div className="form-intro"><span>Tell us what you need</span><h2>Request a Demo or Start an Enquiry</h2><p>Fields marked with * are required.</p></div><div className="form-grid">
    <div className="field"><label htmlFor="name">Full Name *</label><input id="name" name="name" autoComplete="name" required defaultValue={values?.name} aria-invalid={Boolean(state.errors?.name)} aria-describedby={state.errors?.name ? "name-error" : undefined} /><FieldError name="name" errors={state.errors} /></div>
    <div className="field"><label htmlFor="email">Work Email *</label><input id="email" name="email" type="email" autoComplete="email" required defaultValue={values?.email} aria-invalid={Boolean(state.errors?.email)} aria-describedby={state.errors?.email ? "email-error" : undefined} /><FieldError name="email" errors={state.errors} /></div>
    <div className="field"><label htmlFor="phone">Phone</label><input id="phone" name="phone" type="tel" autoComplete="tel" defaultValue={values?.phone} aria-invalid={Boolean(state.errors?.phone)} aria-describedby={state.errors?.phone ? "phone-error" : undefined} /><FieldError name="phone" errors={state.errors} /></div>
    <div className="field"><label htmlFor="organization">Organization Name *</label><input id="organization" name="organization" autoComplete="organization" required defaultValue={values?.organization} aria-invalid={Boolean(state.errors?.organization)} aria-describedby={state.errors?.organization ? "organization-error" : undefined} /><FieldError name="organization" errors={state.errors} /></div>
    <div className="field"><label htmlFor="organizationType">Organization Type *</label><select id="organizationType" name="organizationType" required defaultValue={values?.organizationType ?? ""}><option value="" disabled>Select type</option>{organizationTypes.map((item) => <option key={item}>{item}</option>)}</select><FieldError name="organizationType" errors={state.errors} /></div>
    <div className="field"><label htmlFor="interest">Area of Interest *</label><select id="interest" name="interest" required defaultValue={values?.interest ?? defaultInterest ?? ""}><option value="" disabled>Select interest</option>{interestAreas.map((item) => <option key={item}>{item}</option>)}</select><FieldError name="interest" errors={state.errors} /></div>
    <div className="field field-full"><label htmlFor="message">Message *</label><textarea id="message" name="message" required defaultValue={values?.message ?? defaultMessage} aria-invalid={Boolean(state.errors?.message)} aria-describedby={state.errors?.message ? "message-error" : undefined} /><FieldError name="message" errors={state.errors} /></div>
    {partnershipType && <input type="hidden" name="partnershipType" value={partnershipType} />}
    <div className="honeypot" aria-hidden="true"><label htmlFor="website">Website</label><input id="website" name="website" tabIndex={-1} autoComplete="off" /></div>
    <div className="field-full"><label className="checkbox"><input name="consent" type="checkbox" required defaultChecked={values?.consent} /><span>I agree to be contacted regarding my enquiry.</span></label><FieldError name="consent" errors={state.errors} /></div>
    {state.status !== "idle" && <div className={`form-status ${state.status} field-full`} role="status">{state.message}{state.mailto && <> <a href={state.mailto}>Open prepared email</a>.</>}</div>}
    <div className="field-full"><button className="button button-primary submit-button" type="submit" disabled={pending}>{pending ? "Sending…" : <><Send size={18} aria-hidden="true" />Send Enquiry</>}</button></div>
  </div></form>;
}
