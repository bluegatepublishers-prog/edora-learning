import { Info, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { PageHero } from "@/components/sections/PageHero";
import { contactContextFromQuery, partnershipTypeFromQuery } from "@/lib/contact";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata = pageMetadata("Contact & Demo Request", "Contact Edora Learning or request a demo of Edora Education OS.", "/contact");

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ interest?: string | string[]; subject?: string | string[]; type?: string | string[] }> }) {
  const query = await searchParams;
  const context = contactContextFromQuery(query.interest);
  const subject = Array.isArray(query.subject) ? query.subject[0] : query.subject;
  const partnership = context.key === "partnership" ? partnershipTypeFromQuery(query.type) : undefined;
  const message = partnership ? `${context.description} Partnership type: ${partnership.label}.` : context.description;
  return <><PageHero eyebrow={context.eyebrow} title={context.heading} description={context.description} accent="orange" /><section className="section contact-section"><div className="container"><div className="contact-context" role="note"><Info aria-hidden="true" /><p>{message}</p></div><div className="contact-grid"><aside className="contact-panel"><p className="eyebrow">Contact Edora</p><h2>Start a Conversation</h2><p>We’ll review your enquiry and respond using the contact details you provide.</p><div className="contact-details"><div className="contact-item"><span><Mail aria-hidden="true" /></span><div><h3>Email</h3><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></div></div><div className="contact-item"><span><Phone aria-hidden="true" /></span><div><h3>Phone</h3><a href={`tel:${siteConfig.phoneHref}`}>{siteConfig.phone}</a></div></div><div className="contact-item"><span><MapPin aria-hidden="true" /></span><div><h3>Office</h3><p>{siteConfig.address.line1}<br />{siteConfig.address.line2}<br />{siteConfig.address.line3}<br />{siteConfig.address.country}</p></div></div></div></aside><ContactForm defaultInterest={context.selectValue} defaultMessage={subject ? `I would like to discuss: ${subject}` : undefined} partnershipType={partnership?.value} /></div></div></section></>;
}
