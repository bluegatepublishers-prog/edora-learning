import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { footerNavigation } from "@/lib/navigation";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return <footer className="site-footer">
    <div className="container footer-grid"><div className="footer-brand"><div className="brand brand-light"><span className="brand-mark"><i>E</i></span><span><strong>Edora Learning</strong><small>Education Technology</small></span></div><p>Technology that makes education simpler, smarter and more connected.</p><div className="footer-contact"><a href={`mailto:${siteConfig.email}`}><Mail size={17} />{siteConfig.email}</a><a href={`tel:${siteConfig.phoneHref}`}><Phone size={17} />{siteConfig.phone}</a><p><MapPin size={17} />{siteConfig.address.line1}<br />{siteConfig.address.line2}, {siteConfig.address.line3}</p></div></div>{Object.entries(footerNavigation).map(([title, links]) => <div key={title}><h2>{title}</h2><ul>{links.map((link) => <li key={link.href}><Link href={link.href}>{link.label}</Link></li>)}</ul></div>)}</div>
    <div className="container footer-bottom"><p>© 2026 {siteConfig.legalName} All rights reserved.</p><p>{siteConfig.tagline}</p></div>
  </footer>;
}
