import Link from "next/link";

type CTASectionProps = {
  title?: string;
  description?: string;
  primary?: string;
  secondary?: string;
  primaryHref?: string;
  secondaryHref?: string;
};

export function CTASection({
  title = "Let’s Build the Future of Learning Together",
  description = "Tell us what your organization needs. We’ll help you explore a secure, adaptable path forward.",
  primary = "Request a Demo",
  secondary = "Talk to Our Team",
  primaryHref = "/contact?interest=demo",
  secondaryHref = "/contact?interest=platform",
}: CTASectionProps) {
  return <section className="cta-section"><div className="cta-orb cta-orb-one"/><div className="cta-orb cta-orb-two"/><div className="container cta-inner"><div><p className="eyebrow light">Start a conversation</p><h2>{title}</h2><p>{description}</p></div><div className="button-row"><Link className="button button-primary" href={primaryHref}>{primary}</Link><Link className="button button-outline-light" href={secondaryHref}>{secondary}</Link></div></div></section>;
}
