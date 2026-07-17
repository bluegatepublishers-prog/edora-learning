type CTASectionProps = {
  title?: string;
  description?: string;
};

export function CTASection({
  title = "Let’s Build the Future of Learning Together",
  description = "Tell us what your organization needs. We’ll help you explore a secure, adaptable path forward.",
}: CTASectionProps) {
  return <section className="cta-section"><div className="cta-orb cta-orb-one"/><div className="cta-orb cta-orb-two"/><div className="container cta-inner"><div><p className="eyebrow light">Start a conversation</p><h2>{title}</h2><p>{description}</p></div></div></section>;
}
