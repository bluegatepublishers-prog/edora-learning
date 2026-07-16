import Link from "next/link";
import { BookOpen, Building2, Code2, School, Target } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Partner with Edora", "Explore publisher, institution, academy, technology, implementation and training partnerships with Edora Learning.", "/partners");
const partners = [
  [BookOpen, "Publisher Partnership", "For publishers extending content and school services into secure digital experiences.", ["White-label platform", "Structured content experiences", "Educator and learner services"]],
  [School, "School Partnership", "For schools improving academic, teaching and learning workflows.", ["Configurable rollout", "Role-based experiences", "Learning insight foundation"]],
  [Target, "Coaching Partnership", "For institutes organizing courses, batches, educators and learner journeys.", ["Structured programs", "Assessment workflows", "Roadmap-ready collaboration"]],
  [Building2, "Academy Partnership", "For academies building focused programs and direct learner relationships.", ["Branded programs", "Mentor-ready journeys", "Growth-ready foundation"]],
  [Code2, "Technology Partnership", "For complementary technology providers creating responsible education integrations.", ["Clear integration scope", "Security-led collaboration", "Shared implementation planning"]],
] as const;

export default function PartnersPage() { return <><PageHero eyebrow="Partner with Edora" title="Build Better Learning Experiences Together" description="Partner with a focused education technology company that understands content, institutions, educators and learners." cta={{ label: "Become an Edora Partner", href: "/contact?interest=partnership" }} accent="yellow" /><section className="section section-soft-blue"><div className="container"><SectionHeading eyebrow="Partnership pathways" title="A Shared Foundation for Meaningful Education Work" description="Each partnership begins with a clear need, an appropriate scope and a practical path to value." /><div className="grid-2 partner-grid">{partners.map(([Icon, title, description, items]) => <article className="partner-card" key={title}><span className="partner-icon"><Icon aria-hidden="true" /></span><h3>{title}</h3><p>{description}</p><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul><Link className="button button-secondary" href={`/contact?interest=partnership&subject=${encodeURIComponent(title)}`}>Discuss {title}</Link></article>)}</div></div></section><CTASection title="Become an Edora Partner" description="Tell us about your organization, the communities you serve and what you would like to build together." primary="Start a Partnership Enquiry" primaryHref="/contact?interest=partnership" /></> }
