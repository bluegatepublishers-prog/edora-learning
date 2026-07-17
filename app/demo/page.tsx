import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, BookOpen, Bot, Building2, CheckCircle2, ClipboardCheck,
  GraduationCap, School, ShieldCheck, Sparkles, Users, UserRound,
} from "lucide-react";
import { DemoScreenshot } from "@/components/demo/DemoScreenshot";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  ...pageMetadata(
    "Edora Education OS Demo | Explore the Platform",
    "Explore Edora Education OS through role-based platform previews for publishers, schools, teachers, students, mentors and parents.",
    "/demo",
  ),
  title: { absolute: "Edora Education OS Demo | Explore the Platform" },
};

const roleNavigation = [
  ["Publisher", "publisher"], ["School", "school"], ["Teacher", "teacher"], ["Student", "student"],
  ["Book Reader", "reader"], ["AI", "ai"], ["Assessments", "assessments"], ["Mentor", "mentor"], ["Parent", "parent"],
] as const;

const showcases = [
  {
    id: "publisher", role: "Publisher", icon: BookOpen, title: "Publisher Administration", image: "publisher-dashboard.webp",
    alt: "Edora Education OS publisher administration dashboard",
    description: "Manage books, resources, schools, branding, feature access and publisher-level analytics from one secure workspace.",
    capabilities: ["Books and digital content", "School relationships", "Resource management", "Feature controls", "Reports and analytics", "White-label branding"],
  },
  {
    id: "school", role: "School", icon: School, title: "School Management", image: "school-dashboard.webp",
    alt: "Edora Education OS school management dashboard",
    description: "Coordinate academic structures, people, approved content and account readiness through a focused school workspace.",
    capabilities: ["Academic years", "Classes and sections", "Teachers and students", "Subject assignments", "Book approvals", "Account activation"],
  },
  {
    id: "teacher", role: "Teacher", icon: UserRound, title: "Teacher Workspace", image: "teacher-dashboard.webp",
    alt: "Edora Education OS teacher workspace dashboard",
    description: "Bring approved teaching content, learner visibility and intelligent support together for day-to-day teaching.",
    capabilities: ["Assigned books", "Teaching resources", "Student monitoring", "AI teaching tools", "Reports", "Learning support workflows"],
  },
  {
    id: "student", role: "Student", icon: GraduationCap, title: "Student Learning Experience", image: "student-dashboard.webp",
    alt: "Edora Education OS student learning dashboard",
    description: "Give learners a clear home for subjects, approved resources, practice, assessments and progress.",
    capabilities: ["My subjects", "Approved books", "Revision Hub", "Practice", "Assessments", "Progress insights"],
  },
  {
    id: "reader", role: "Student", icon: BookOpen, title: "Interactive Book Reader", image: "student-book-reader.webp",
    alt: "Edora Education OS protected interactive book reader",
    description: "Create a focused, protected reading experience that helps learners return to and navigate approved books.",
    capabilities: ["Protected full-book access", "Reading progress", "Continue reading", "Page navigation", "Zoom and fit controls", "Page bookmarks"],
  },
  {
    id: "ai", role: "Student AI", icon: Bot, title: "Student Learning Assistant", image: "student-ai-assistant.webp",
    alt: "Edora Education OS guided student learning assistant",
    description: "Support chapter-focused learning through guided modes grounded in approved educational content—not unrestricted internet chat.",
    capabilities: ["Explain concepts", "Simplify topics", "Revision support", "Vocabulary help", "Chapter-focused doubts", "Guided learning modes"],
  },
  {
    id: "assessments", role: "Assessment", icon: ClipboardCheck, title: "Assessment and Reports", image: "assessment-dashboard.webp", secondaryImage: "reports-dashboard.webp",
    alt: "Edora Education OS assessment dashboard", secondaryAlt: "Edora Education OS reports dashboard",
    description: "Connect structured assessment activity with released results, learning insight and appropriate support pathways.",
    capabilities: ["Structured assessments", "Attempt history", "Released results", "Learning analytics", "Gap identification", "Remedial progress"],
  },
  {
    id: "mentor", role: "Mentor", icon: Sparkles, title: "Mentor Experience", image: "mentor-dashboard.webp",
    alt: "Edora Education OS mentor experience dashboard",
    description: "Help mentors understand assigned learners, open support areas and progress without exposing unrelated records.",
    capabilities: ["Assigned students", "Learning reports", "Open support areas", "Remedial monitoring", "Mentor notes", "Session placeholders"],
  },
  {
    id: "parent", role: "Parent", icon: Users, title: "Parent Experience", image: "parent-dashboard.webp",
    alt: "Edora Education OS parent experience dashboard",
    description: "Give families a clear, appropriate view of linked learners, released outcomes and ongoing support.",
    capabilities: ["Linked children", "Learning summaries", "Released assessment results", "Support areas", "Remedial progress", "Mentor overview"],
  },
] as const;

const introRoles = ["Super Admin", "Publisher Admin", "School", "Teacher", "Student", "Mentor", "Parent"];
const flow = [[BookOpen, "Publisher"], [Building2, "Institution"], [UserRound, "Teacher"], [GraduationCap, "Student"], [Users, "Parent / Mentor"]] as const;

export default function DemoPage() {
  return <>
    <section className="demo-hero"><span className="demo-hero-shape demo-shape-one" /><span className="demo-hero-shape demo-shape-two" /><div className="container demo-hero-inner"><div><p className="eyebrow">Explore Edora Education OS</p><h1>See the Complete Education Ecosystem <span>in Action</span></h1><p>Explore how Edora connects publishers, institutions, educators, learners, mentors and families through one secure and intelligent platform.</p></div><div className="demo-hero-visual" aria-label="Connected Edora platform roles"><div className="demo-orbit"><span><ShieldCheck aria-hidden="true" />Secure platform</span>{[BookOpen, School, UserRound, GraduationCap, Users].map((Icon, index) => <i key={index}><Icon aria-hidden="true" /></i>)}</div></div></div></section>

    <section className="section demo-intro"><div className="container"><SectionHeading align="center" eyebrow="Role-based by design" title="One Platform. Multiple Role-Based Experiences." description="Every user receives a simple dashboard designed for their responsibilities, while data and permissions remain securely separated." /><div className="demo-role-chips" aria-label="Platform roles">{introRoles.map((role) => <span key={role}>{role}</span>)}</div><div className="demo-admin-preview"><DemoScreenshot src="/images/demo/super-admin-dashboard.webp" role="Super Admin" alt="Edora Education OS super administration dashboard" caption="Platform administration preview" /></div></div></section>

    <nav className="demo-role-nav" aria-label="Demo page sections"><div className="container">{roleNavigation.map(([label, id]) => <Link key={id} href={`#${id}`}>{label}</Link>)}</div></nav>

    <div className="demo-gallery" aria-label="Role-based platform previews">
      {showcases.map((item) => { const Icon = item.icon; return <section className="demo-showcase" id={item.id} key={item.id}><div className="container demo-showcase-grid"><div className="demo-media">{"secondaryImage" in item ? <div className="demo-double-shot"><DemoScreenshot src={`/images/demo/${item.image}`} role="Assessment" alt={item.alt} caption="Assessment workspace preview" /><DemoScreenshot src={`/images/demo/${item.secondaryImage}`} role="Reports" alt={item.secondaryAlt} caption="Reports and analytics preview" /></div> : <DemoScreenshot src={`/images/demo/${item.image}`} role={item.role} alt={item.alt} caption={`${item.title} preview`} />}</div><div className="demo-copy"><p className="demo-role-badge"><Icon size={17} aria-hidden="true" />{item.role}</p><h2>{item.title}</h2><p>{item.description}</p><ul className="demo-capabilities">{item.capabilities.map((capability) => <li key={capability}><CheckCircle2 size={18} aria-hidden="true" />{capability}</li>)}</ul></div></div></section>; })}
    </div>

    <section className="section demo-flow-section"><div className="container"><SectionHeading align="center" eyebrow="Connected with purpose" title="Connected Experiences. Clearly Separated Responsibilities." description="Edora connects each role while preserving secure, role-based access and organization boundaries." /><div className="demo-flow">{flow.map(([Icon, label], index) => <div className="demo-flow-item" key={label}><article><span><Icon aria-hidden="true" /></span><strong>{label}</strong></article>{index < flow.length - 1 && <ArrowRight className="demo-flow-arrow" aria-hidden="true" />}</div>)}</div></div></section>

    <section className="demo-final-cta"><div className="container"><div><p className="eyebrow">Guided platform walkthrough</p><h2>Explore Edora Education OS</h2><p>The previews above show how Edora supports distinct responsibilities across one connected platform.</p><div className="demo-contact-line"><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a><span>•</span><a href={`tel:${siteConfig.phoneHref}`}>{siteConfig.phone}</a></div></div></div></section>
  </>;
}
