import Link from "next/link";
export function PageHero({ eyebrow, title, description, cta, accent = "blue" }: { eyebrow?: string; title: string; description: string; cta?: { label: string; href: string }; accent?: "blue" | "orange" | "yellow" | "sky" }) {
  return <section className={`page-hero page-hero-${accent}`}><span className="hero-shape hero-shape-one"/><span className="hero-shape hero-shape-two"/><div className="container"><div className="page-hero-copy">{eyebrow && <p className="eyebrow">{eyebrow}</p>}<h1>{title}</h1><p>{description}</p>{cta && <Link className="button button-primary" href={cta.href}>{cta.label}</Link>}</div></div></section>;
}
