import Link from "next/link";
import { ArrowUpRight, type LucideIcon } from "lucide-react";

type SolutionCardProps = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  linkLabel?: string;
  badge?: string;
};

export function SolutionCard({ title, description, href, icon: Icon, linkLabel = "Learn more", badge }: SolutionCardProps) {
  return <Link className="solution-card" href={href}><span className="solution-icon"><Icon aria-hidden="true" /></span><span className="solution-copy">{badge && <small className="tag">{badge}</small>}<h3>{title}</h3><p>{description}</p><strong>{linkLabel} <ArrowUpRight size={17} aria-hidden="true" /></strong></span></Link>;
}
