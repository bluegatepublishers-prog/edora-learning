import Link from "next/link";
import {
  ArrowRight, BarChart3, BookOpen, Bot, BrainCircuit, Building2, CheckCircle2, ClipboardCheck, GraduationCap,
  KeyRound, Layers3, MessageSquare, Network, Palette, School, ShieldCheck, Sparkles, Target, Users, UserRound, Waypoints,
} from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";
import { FeatureCard } from "@/components/sections/FeatureCard";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { SolutionCard } from "@/components/sections/SolutionCard";
import { siteConfig } from "@/lib/site-config";

const benefits = [
  [Network, "Multi-tenant architecture", "Give each organization a secure, independent space on one platform."],
  [Palette, "White-label experiences", "Deliver a coherent experience aligned with each organization’s brand."],
  [BrainCircuit, "AI-powered learning", "Support teaching and learning with intelligence grounded in approved content."],
  [School, "Academic management", "Bring academic structures, users and learning workflows together."],
  [BarChart3, "Learning intelligence", "Turn assessment and activity into useful progress insights."],
  [KeyRound, "Secure role-based access", "Give every user the tools and content appropriate to their role."],
] as const;

const capabilities = [
  [BookOpen, "Digital Books"], [Layers3, "Teacher Resources"], [School, "Academic Management"], [GraduationCap, "Student Learning"],
  [ClipboardCheck, "Assessments"], [Bot, "AI Learning Assistant"], [BarChart3, "Reports and Analytics"], [Waypoints, "Gap Analysis"],
  [Sparkles, "Remedial Learning"], [Users, "Mentor and Parent Experiences"], [Palette, "White-label Branding"], [MessageSquare, "Communication Hub"],
] as const;

const platformLayers = [
  [BookOpen, "Content", "Approved books and resources"], [School, "Academics", "Structures and workflows"], [GraduationCap, "Learning", "Study, practice and assess"],
  [Bot, "AI", "Grounded assistance"], [BarChart3, "Analytics", "Progress and gaps"], [MessageSquare, "Communication", "Coming next"],
] as const;

export default function Home() {
  const organizationJsonLd = { "@context": "https://schema.org", "@type": "Organization", name: siteConfig.legalName, url: siteConfig.domain, email: siteConfig.email, telephone: siteConfig.phone, address: { "@type": "PostalAddress", streetAddress: `${siteConfig.address.line1}, ${siteConfig.address.line2}`, addressLocality: "New Delhi", postalCode: "110019", addressCountry: "IN" }, description: siteConfig.description };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c") }} />
    <section className="hero"><span className="hero-decoration hero-decoration-one" /><span className="hero-decoration hero-decoration-two" /><div className="container hero-grid">
      <div className="hero-copy"><p className="eyebrow">Education technology for every learning ecosystem</p><h1>Powering the <span>Future of Education</span></h1><p>Edora Learning provides one intelligent, secure and adaptable platform for publishers, schools, coaching institutes, academies, educators and learners.</p><div className="button-row"><Link className="button button-primary" href="/contact?interest=demo">Request a Demo <ArrowRight size={18} /></Link></div><div className="hero-trust"><ShieldCheck aria-hidden="true" /><span>Secure by design</span><span>•</span><span>Built for every education role</span></div></div>
      <div className="ecosystem" role="img" aria-label="Edora Education OS connects publishers, schools, coaching institutes, academies, teachers, students, mentors and parents"><div className="ecosystem-ring ring-one"/><div className="ecosystem-ring ring-two"/><div className="ecosystem-core"><Sparkles size={22} />Edora<br />Education OS</div>
        <div className="ecosystem-node node-1"><BookOpen />Publisher</div><div className="ecosystem-node node-2"><School />School</div><div className="ecosystem-node node-3"><Target />Coaching</div><div className="ecosystem-node node-4"><Building2 />Academy</div><div className="ecosystem-node node-5"><UserRound />Teacher</div><div className="ecosystem-node node-6"><GraduationCap />Student</div><div className="ecosystem-node node-7"><Sparkles />Mentor</div><div className="ecosystem-node node-8"><Users />Parent</div>
      </div>
    </div></section>

    <section className="section section-white one-platform"><div className="container"><SectionHeading align="center" eyebrow="One connected foundation" title={siteConfig.tagline} description="Edora Education OS connects content, teaching, learning, assessment, communication and intelligence through one secure platform." /><div className="grid-3 feature-grid">{benefits.map(([icon, title, description]) => <FeatureCard key={title} icon={icon} title={title} description={description} />)}</div></div></section>

    <section className="section section-soft-blue audience-section"><div className="container"><SectionHeading eyebrow="Who we serve" title="Built for the Complete Education Ecosystem" description="Purposeful experiences for every organization and person involved in learning." /><div className="grid-3 audience-grid">
      <SolutionCard icon={BookOpen} title="Publishers" description="Digitize books, resources, school relationships and AI-powered content." />
      <SolutionCard icon={School} title="Schools" description="Manage academics, educators, students and learning from one place." />
      <SolutionCard icon={Target} title="Coaching Institutes" description="Organize courses, batches, faculty, assessments and online learning." />
      <SolutionCard icon={Building2} title="Academies" description="Launch branded learning programs with mentors, AI and analytics." />
      <SolutionCard icon={UserRound} title="Educators" description="Access approved resources, teaching tools and intelligent workflows." />
      <SolutionCard icon={Users} title="Learners and Families" description="Learn, practise, assess progress and receive personalized support." />
    </div></div></section>

    <section className="section section-eeos"><div className="container split"><div><SectionHeading eyebrow="The platform" title="Meet Edora Education OS" description="A configurable Education Operating System designed for publishers, institutions and learning organizations." /><ul className="check-list">{["One secure platform", "Independent branded tenants", "Simple role-based experiences", "Built for growth", "Configurable features", "Cloud-ready architecture"].map((item) => <li key={item}><CheckCircle2 size={20} />{item}</li>)}</ul></div><div className="stack-visual" aria-label="Platform capability stack">{platformLayers.map(([Icon, title, description]) => <div className="stack-row" key={title}><span><Icon size={20} /></span><div><strong>{title}</strong><small>{description}</small></div></div>)}</div></div></section>

    <section className="section section-soft-yellow capability-section"><div className="container"><SectionHeading align="center" eyebrow="Product capabilities" title="Everything Education Needs to Work Together" /><div className="capability-grid">{capabilities.map(([Icon, title], index) => <div className="capability" key={title}><span className="capability-icon"><Icon size={23} aria-hidden="true" /></span><strong>{title}</strong>{index === capabilities.length - 1 && <span className="tag">Coming Next</span>}</div>)}</div></div></section>

    <section className="section section-ai"><div className="container"><SectionHeading eyebrow="Edora AI" title="AI Built Around Approved Learning Content" description="Edora AI is designed to support educators and learners using approved, structured educational knowledge—not unrestricted internet content." /><div className="grid-4 ai-card-grid">{[[Bot, "Teacher AI", "Create grounded teaching and assessment material."], [GraduationCap, "Student Learning Assistant", "Provide chapter-focused explanations and revision support."], [BarChart3, "Learning Intelligence", "Use assessments and learning activity to understand progress."], [ShieldCheck, "Responsible by Design", "Tenant isolation, entitlement checks and validated outputs."]].map(([Icon, title, description]) => <article className="dark-card" key={title as string}><span><Icon /></span><h3>{title as string}</h3><p>{description as string}</p></article>)}</div></div></section>

    <section className="section section-soft-orange why-section"><div className="container"><SectionHeading eyebrow="Why Edora" title="Technology That Adapts to Your Organization" /><div className="why-grid">{[["01", "Simple for Users", "Clear, guided experiences for educators, students and administrators."], ["02", "Flexible for Organizations", "Works for publishers, schools, institutes and academies."], ["03", "Secure by Design", "Role-based access, tenant isolation and protected learning content."], ["04", "Ready for Growth", "A modular foundation that grows with your programs and users."]].map(([number, title, description]) => <article className="large-point" key={number}><span>{number}</span><div><h3>{title}</h3><p>{description}</p></div></article>)}</div></div></section>
    <CTASection description="Whether you are a publisher modernizing your services, a school improving learning, or an academy building a digital program, Edora can help create the right solution." />
  </>;
}
