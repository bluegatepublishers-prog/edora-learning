import type { LucideIcon } from "lucide-react";
export function FeatureCard({ icon: Icon, title, description, tag }: { icon: LucideIcon; title: string; description: string; tag?: string }) {
  return <article className="feature-card"><span className="feature-icon"><Icon size={22} aria-hidden="true" /></span><div>{tag && <span className="tag">{tag}</span>}<h3>{title}</h3><p>{description}</p></div></article>;
}
