"use server";

import { interestAreas, organizationTypes, type ContactState } from "@/lib/contact";
import { siteConfig } from "@/lib/site-config";

const clean = (value: FormDataEntryValue | null, max: number) => typeof value === "string" ? value.trim().slice(0, max) : "";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const escapeHtml = (value: string) => value.replace(/[&<>"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[character]!);

export async function submitContact(_: ContactState, formData: FormData): Promise<ContactState> {
  if (clean(formData.get("website"), 100)) return { status: "error", message: "We could not process this enquiry. Please try again." };
  const values = {
    name: clean(formData.get("name"), 100), email: clean(formData.get("email"), 160), phone: clean(formData.get("phone"), 30), organization: clean(formData.get("organization"), 140),
    organizationType: clean(formData.get("organizationType"), 60), interest: clean(formData.get("interest"), 60), message: clean(formData.get("message"), 3000), consent: formData.get("consent") === "on",
  };
  const errors: Record<string, string> = {};
  if (values.name.length < 2) errors.name = "Enter your full name.";
  if (!emailPattern.test(values.email)) errors.email = "Enter a valid work email.";
  if (values.phone && !/^[+\d][\d\s()-]{6,24}$/.test(values.phone)) errors.phone = "Enter a valid phone number.";
  if (values.organization.length < 2) errors.organization = "Enter your organization name.";
  if (!(organizationTypes as readonly string[]).includes(values.organizationType)) errors.organizationType = "Select an organization type.";
  if (!(interestAreas as readonly string[]).includes(values.interest)) errors.interest = "Select an area of interest.";
  if (values.message.length < 10) errors.message = "Tell us a little more (at least 10 characters).";
  if (!values.consent) errors.consent = "Please confirm that we may contact you.";
  if (Object.keys(errors).length) return { status: "error", message: "Please review the highlighted fields.", errors };

  const timestamp = new Date().toISOString();
  const deliverySubject = `New Edora Enquiry — ${values.interest} — ${values.organization}`;
  const fallbackSubject = `Edora Learning Enquiry — ${values.interest}`;
  const body = [
    `Name: ${values.name}`, `Email: ${values.email}`, `Phone: ${values.phone || "Not provided"}`, `Organization: ${values.organization}`,
    `Organization Type: ${values.organizationType}`, `Area of Interest: ${values.interest}`, `Submission Timestamp: ${timestamp}`, "", "Message:", values.message,
  ].join("\n");
  const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(fallbackSubject)}&body=${encodeURIComponent(body)}`;
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM;
  const configuredTo = process.env.CONTACT_EMAIL_TO;
  if (!apiKey || !from || configuredTo?.trim().toLowerCase() !== siteConfig.email.toLowerCase()) {
    return { status: "fallback", message: "Online email delivery is not configured locally. Your enquiry was not sent. Use the prepared email link to send it directly to Edora Learning.", mailto };
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST", headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from, to: [siteConfig.email], reply_to: values.email, subject: deliverySubject, text: body, html: `<h2>New Edora website enquiry</h2><pre style="font-family:Arial,sans-serif;white-space:pre-wrap">${escapeHtml(body)}</pre>` }),
    });
    if (!response.ok) return { status: "fallback", message: "We could not send your enquiry automatically. Nothing was recorded. Please use the prepared email link.", mailto };

    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST", headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({ from, to: [values.email], subject: "We received your Edora Learning enquiry", text: `Hello ${values.name},\n\nThank you for contacting Edora Learning about ${values.interest}. Our team has received your enquiry and will respond using the details you provided.\n\nEdora Learning Pvt. Ltd.` }),
      });
    } catch { /* The main enquiry is already delivered; confirmation is best-effort. */ }
    return { status: "success", message: "Thank you. Your enquiry has been sent to the Edora Learning team." };
  } catch {
    return { status: "fallback", message: "We could not reach the email service. Nothing was recorded. Please use the prepared email link.", mailto };
  }
}
