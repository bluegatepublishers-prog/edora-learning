import { type LucideIcon } from "lucide-react";

type SolutionCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  badge?: string;
};

export function SolutionCard({ title, description, icon: Icon, badge }: SolutionCardProps) {
  return <article className="solution-card"><span className="solution-icon"><Icon aria-hidden="true" /></span><span className="solution-copy">{badge && <small className="tag">{badge}</small>}<h3>{title}</h3><p>{description}</p></span></article>;
}
