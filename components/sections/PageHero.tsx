export function PageHero({ eyebrow, title, description, accent = "blue" }: { eyebrow?: string; title: string; description: string; accent?: "blue" | "orange" | "yellow" | "sky" }) {
  return <section className={`page-hero page-hero-${accent}`}><span className="hero-shape hero-shape-one"/><span className="hero-shape hero-shape-two"/><div className="container"><div className="page-hero-copy">{eyebrow && <p className="eyebrow">{eyebrow}</p>}<h1>{title}</h1><p>{description}</p></div></div></section>;
}
