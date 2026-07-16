import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { PageHero } from "@/components/sections/PageHero";
import { interestFromQuery } from "@/lib/contact";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata = pageMetadata("Contact & Demo Request", "Contact Edora Learning or request a demo of Edora Education OS.", "/contact");

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ interest?: string | string[]; subject?: string | string[] }> }) {
  const query = await searchParams;
  const interest = interestFromQuery(query.interest);
  const subject = Array.isArray(query.subject) ? query.subject[0] : query.subject;
  return <><PageHero eyebrow="Contact Edora Learning" title="Let’s Talk" description="Tell us about your organization, your goals and where technology can make education work better." accent="orange" /><section className="section contact-section"><div className="container contact-grid"><aside className="contact-panel"><p className="eyebrow">Contact Edora</p><h2>Start a Conversation</h2><p>We’ll review your enquiry and respond using the contact details you provide.</p><div className="contact-details"><div className="contact-item"><span><Mail aria-hidden="true" /></span><div><h3>Email</h3><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></div></div><div className="contact-item"><span><Phone aria-hidden="true" /></span><div><h3>Phone</h3><a href={`tel:${siteConfig.phoneHref}`}>{siteConfig.phone}</a></div></div><div className="contact-item"><span><MapPin aria-hidden="true" /></span><div><h3>Office</h3><p>{siteConfig.address.line1}<br />{siteConfig.address.line2}<br />{siteConfig.address.line3}<br />{siteConfig.address.country}</p></div></div></div></aside><ContactForm defaultInterest={interest} defaultMessage={subject ? `I would like to discuss: ${subject}` : undefined} /></div></section></>;
}
