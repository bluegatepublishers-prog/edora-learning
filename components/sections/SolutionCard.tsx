import Link from "next/link";
import { ArrowUpRight, type LucideIcon } from "lucide-react";
export function SolutionCard({ title, description, href, icon: Icon }: { title: string; description: string; href: string; icon: LucideIcon }) {
  return <Link className="solution-card" href={href}><span className="solution-icon"><Icon aria-hidden="true" /></span><span className="solution-copy"><h3>{title}</h3><p>{description}</p><strong>Learn more <ArrowUpRight size={17} aria-hidden="true" /></strong></span></Link>;
}
