import { BookOpen, Building2, CheckCircle2, GraduationCap, School, Sparkles, Target, Users, UserRound } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Education Technology Solutions", "Detailed education technology solutions for publishers, schools, coaching institutes, academies, teachers, students, parents and mentors.", "/solutions");

const services = [
  {
    id: "publishers", query: "publisher", icon: BookOpen, title: "Publishers", cta: "Modernize Your Publishing Platform",
    forWhom: "Educational publishers building digital services around books, educators and partner schools.",
    challenges: ["Books and resources sit across disconnected systems", "School relationships are difficult to manage digitally", "Brand and content access need stronger control"],
    solution: "Edora connects book publishing, digital delivery, teacher resources, approvals and school relationships through a publisher-controlled white-label workspace.",
    capabilities: ["Book publishing", "Digital books", "Teacher resources", "School relationships", "Content approvals", "Publisher AI", "Analytics", "White-label branding"],
    roadmap: ["Expanded catalogue workflows", "Deeper institutional reporting", "Additional communication tools"],
  },
  {
    id: "schools", query: "school", icon: School, title: "Schools", cta: "Modernize Your School",
    forWhom: "Schools that want academic setup, approved content and learning visibility in one place.",
    challenges: ["Academic records and learning tools are fragmented", "Teachers and students need clearer access", "Parents receive limited learning context"],
    solution: "Edora organizes the school structure and connects its people, approved books, learning activity, reports and family experiences.",
    capabilities: ["Academic years", "Classes", "Sections", "Teachers", "Students", "Resources", "Approved books", "Reports", "Analytics", "Parent access", "Communication roadmap"],
    roadmap: ["Announcements and calendars", "Expanded parent notifications", "Additional school communication workflows"],
  },
  {
    id: "coaching", query: "coaching", icon: Target, title: "Coaching Institutes", cta: "Build Your Coaching Platform",
    forWhom: "Coaching institutes managing structured programs, faculty, learners and assessment at scale.",
    challenges: ["Batches and faculty workflows become difficult to coordinate", "Learning delivery is split across many tools", "Institutes need a branded student experience that can grow"],
    solution: "Edora is designed to bring coaching operations, content, assessment, intelligence and mentoring into one configurable platform.",
    capabilities: ["Batch management", "Faculty management", "Assignments", "Online classes — roadmap", "Discussion rooms — roadmap", "Attendance", "Assessments", "Reports", "Grounded AI", "Student portal", "Mentor workflows"],
    roadmap: ["Payment integration", "Mobile application", "Expanded live-class and discussion experiences"],
  },
  {
    id: "academies", query: "academy", icon: Building2, title: "Academies", cta: "Build Your Academy",
    forWhom: "Learning academies delivering focused programs directly to individuals or cohorts.",
    challenges: ["Learner onboarding and plans require manual coordination", "Mentors lack a connected view of progress", "Branded programs need a growth-ready foundation"],
    solution: "Edora supports direct learner onboarding, structured programs, individual plans, mentors, assessments, AI and analytics.",
    capabilities: ["Direct onboarding", "Courses and programs", "Individual learning plans", "Mentors", "Assessments", "Grounded AI", "Progress analytics", "Branded experience"],
    roadmap: ["Richer cohort collaboration", "Additional program commerce options", "Mobile learning experiences"],
  },
  {
    id: "educators", query: "teacher", icon: UserRound, title: "Teachers", cta: "Equip Your Teachers",
    forWhom: "Teachers working with approved books, classroom resources and diverse learner needs.",
    challenges: ["Finding the right approved resource takes time", "Learner gaps are difficult to act on early", "Generic AI tools lack educational boundaries"],
    solution: "Edora gives teachers a focused workspace for approved books, teaching resources, assessments, student monitoring and grounded assistance.",
    capabilities: ["Assigned books", "Teacher resources", "Teaching support", "Question generation", "Assessments", "Student monitoring", "Reports", "Learning support workflows"],
    roadmap: ["Expanded planning workflows", "Richer resource collaboration", "Additional classroom communication"],
  },
  {
    id: "learners", query: "student", icon: GraduationCap, title: "Students", cta: "Transform Student Learning",
    forWhom: "Students learning from approved content within a structured program or institution.",
    challenges: ["Study tools and books are disconnected", "Students may not understand their learning gaps", "Unrestricted assistance can move beyond the approved curriculum"],
    solution: "Edora connects books, reading, revision, practice, assessment and guided learning support around the student’s approved content.",
    capabilities: ["Approved books", "Interactive reader", "Revision Hub", "Practice", "Assessments", "Learning Assistant", "Reports", "Gap analysis", "Remedials", "Mentor support"],
    roadmap: ["Additional guided learning modes", "Expanded learner planning", "Future mobile experience"],
  },
  {
    id: "parents", query: "parent", icon: Users, title: "Parents", cta: "Connect Families to Learning",
    forWhom: "Parents and guardians supporting linked learners without needing administrative complexity.",
    challenges: ["Progress information can be fragmented or unclear", "Assessment results lack support context", "Families need appropriate—not excessive—access"],
    solution: "Edora provides a clear family view of progress, released results, support areas, remedial activity and mentor information.",
    capabilities: ["Progress summaries", "Learning reports", "Learning support areas", "Assessment summary", "Mentor information", "Notifications roadmap"],
    roadmap: ["Configurable notifications", "Expanded family communication", "Additional progress summaries"],
  },
  {
    id: "mentors", query: "mentor", icon: Sparkles, title: "Mentors", cta: "Strengthen Learner Support",
    forWhom: "Mentors responsible for guiding specifically assigned learners and support plans.",
    challenges: ["Support needs are difficult to prioritize", "Remedial follow-through lacks continuity", "Notes and learner progress sit in separate places"],
    solution: "Edora gives mentors a controlled view of assigned learners, gaps, remedials, notes, progress and support activity.",
    capabilities: ["Assigned learners", "Gap review", "Remedial monitoring", "Mentor notes", "Progress summaries", "Support sessions"],
    roadmap: ["Session scheduling", "Expanded mentor communication", "Additional intervention tracking"],
  },
] as const;

const journeyDetails = {
  publishers: { heading: "A Digital Platform Built for Modern Publishers", demo: "/demo#publisher", benefits: ["Extend trusted content into secure digital services", "Strengthen publisher–school relationships", "Control branding, access and approved resources"], availability: "Available foundation: books, resources, school relationships, approvals, analytics and white-label branding. Roadmap items are listed separately below." },
  schools: { heading: "Connect School Administration and Learning", demo: "/demo#school", benefits: ["Bring academic structures and learning into one workspace", "Give each role clear, appropriate access", "Turn approved activity into useful learning insight"], availability: "Available foundation: academic setup, role-based access, approved books and reports. Communication capabilities remain on the roadmap." },
  coaching: { heading: "Build a Branded Digital Coaching Experience", demo: "/demo", benefits: ["Organize batches, faculty and assessment consistently", "Offer learners one branded workspace", "Adopt richer delivery tools as they become available"], availability: "Available foundation: batches, faculty, assignments, attendance, assessments, reports, AI, student and mentor workflows. Live classes, discussion rooms, payments and mobile apps are planned—not presented as live." },
  academies: { heading: "Launch Your Own Digital Academy", demo: "/demo#student", benefits: ["Launch branded programs without rebuilding core infrastructure", "Connect individual learning plans with mentor support", "Use progress intelligence to improve delivery"], availability: "Available foundation: onboarding, programs, plans, mentors, assessments, AI and analytics. Each implementation can be configured around the organization’s own programs and brand." },
  educators: { heading: "Give Educators Better Tools and Better Insight", demo: "/demo#teacher", benefits: ["Spend less time locating approved resources", "Act on learning needs earlier", "Use grounded assistance within clear educational boundaries"], availability: "Available foundation: assigned books, resources, assessment support, monitoring and reports. Planning, collaboration and communication enhancements are roadmap items." },
  learners: { heading: "Create a Guided Learning Journey for Every Student", demo: "/demo#student", benefits: ["Follow a clear read → revise → practise → assess → understand gaps → improve journey", "Keep books and study tools connected", "Receive guided support within approved content"], availability: "Available foundation: approved books, reader, Revision Hub, practice, assessment, reports, gaps, remedials and mentor support. Additional modes and mobile experiences are planned." },
  parents: { heading: "Help Parents Support Learning with Confidence", demo: "/demo#parent", benefits: ["Understand released progress information clearly", "See support needs with useful context", "Stay involved without administrative complexity"], availability: "Available foundation: linked-learner summaries, released results, support areas and mentor information. Privacy boundaries limit access to linked learners and information intentionally released by the organization." },
  mentors: { heading: "Make Mentoring More Focused and Measurable", demo: "/demo#mentor", benefits: ["Prioritize evidence-led support", "Track remedial follow-through", "Keep notes and progress in one controlled workspace"], availability: "Available foundation: assigned learners, gap review, remedials, notes and progress summaries. Mentors can access only assigned learners; scheduling and expanded communication are planned." },
} as const;

export default function SolutionsPage() {
  return <><PageHero eyebrow="Solutions" title="Technology Designed Around Real Education Needs" description="Understand who each Edora solution serves, the challenges it addresses, the capabilities it provides and the roadmap ahead." accent="yellow" />
    <section className="section solutions-index"><div className="container"><SectionHeading align="center" eyebrow="Choose your journey" title="Solutions for the Complete Education Ecosystem" description="Review each service to understand its audience, challenges, capabilities and roadmap." /><div className="service-link-grid">{services.map(({ id, icon: Icon, title, forWhom }) => <article className="service-link-card" key={id}><span><Icon aria-hidden="true" /></span><strong>{title}</strong><p>{forWhom}</p></article>)}</div></div></section>
    <div className="service-details">{services.map((item) => { const Icon = item.icon; const journey = journeyDetails[item.id]; return <section className="service-detail" id={item.id} key={item.id}><div className="container"><div className="service-detail-heading"><span><Icon aria-hidden="true" /></span><div><p className="eyebrow">Edora solution</p><h2>{journey.heading}</h2><p><strong>Who is it for?</strong> {item.forWhom}</p></div></div><div className="service-detail-grid"><article><h3>Common challenges</h3><ul>{item.challenges.map((challenge) => <li key={challenge}>{challenge}</li>)}</ul></article><article className="service-solution"><h3>How Edora solves them</h3><p>{item.solution}</p></article></div><div className="service-capability-block"><h3>Key capabilities</h3><div>{item.capabilities.map((capability) => <span key={capability}><CheckCircle2 size={16} aria-hidden="true" />{capability}</span>)}</div></div><div className="service-detail-grid"><article><h3>Benefits</h3><ul>{journey.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}</ul></article><article className="service-solution"><h3>Availability</h3><p>{journey.availability}</p></article></div><div className="service-roadmap"><div><h3>Future roadmap</h3><p>{item.roadmap.join(" · ")}</p></div></div></div></section>; })}</div>
    <CTASection title="Ready to Modernize Your Education Journey?" description="Review the solution areas above to understand how Edora supports each part of the education ecosystem." />
  </>;
}
