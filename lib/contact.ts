export const organizationTypes = ["Publisher", "School", "Coaching Institute", "Academy", "Training Centre", "Technology Partner", "Other"] as const;

export const contactInterests = {
  demo: { label: "Live Platform Demo", eyebrow: "Live Platform Demonstration", heading: "Request a Live Demo", description: "A product specialist will contact you to schedule a personalized demonstration based on your organization, users and learning requirements.", selectValue: "Demo", emailSubject: "Live Platform Demo" },
  platform: { label: "Edora Education OS", eyebrow: "Explore the Platform", heading: "Explore Edora Education OS", description: "Tell us about your organization, users, content and the platform capabilities you want to explore.", selectValue: "Edora Education OS", emailSubject: "Edora Education OS" },
  publisher: { label: "Publisher Solution", eyebrow: "Publisher Enquiry", heading: "Modernize Your Publishing Platform", description: "Tell us about your catalogue, educator services, school relationships and white-label requirements.", selectValue: "Publisher Solution", emailSubject: "Publisher Solution" },
  school: { label: "School Solution", eyebrow: "School Enquiry", heading: "Explore Edora for Your School", description: "Tell us about your school and the learning or administration challenges you want to solve.", selectValue: "School Solution", emailSubject: "School Solution" },
  coaching: { label: "Coaching Institute Solution", eyebrow: "Coaching Enquiry", heading: "Build Your Digital Coaching Platform", description: "Discuss batches, courses, assessments, faculty workflows, learner portals and future live-class requirements.", selectValue: "Coaching Solution", emailSubject: "Coaching Institute Solution" },
  academy: { label: "Academy Solution", eyebrow: "Academy Enquiry", heading: "Launch Your Digital Academy", description: "Tell us about your learning programs, onboarding model, mentors, content and growth plans.", selectValue: "Academy Solution", emailSubject: "Academy Solution" },
  teacher: { label: "Teacher Solution", eyebrow: "Educator Enquiry", heading: "Equip Educators with Better Tools", description: "Discuss approved resources, teaching workflows, learner visibility, assessments and grounded AI support.", selectValue: "Teacher Solution", emailSubject: "Teacher Solution" },
  student: { label: "Student Experience", eyebrow: "Learner Enquiry", heading: "Build a Connected Student Experience", description: "Tell us how you want to connect books, revision, practice, assessment and learner support.", selectValue: "Student Experience", emailSubject: "Student Experience" },
  parent: { label: "Parent Experience", eyebrow: "Family Experience Enquiry", heading: "Help Families Support Learning", description: "Discuss appropriate parent visibility, released results, support areas, remedials and mentor information.", selectValue: "Parent Experience", emailSubject: "Parent Experience" },
  mentor: { label: "Mentor Solution", eyebrow: "Mentor Enquiry", heading: "Strengthen Focused Learner Support", description: "Tell us about your mentor model, assigned learners, remedial workflows, notes and support sessions.", selectValue: "Mentor Solution", emailSubject: "Mentor Solution" },
  ai: { label: "Edora AI", eyebrow: "AI Demonstration", heading: "Explore Responsible Education AI", description: "Discuss grounded educator and learner workflows built around approved educational content and clear role controls.", selectValue: "AI", emailSubject: "Edora AI" },
  partnership: { label: "Partnership", eyebrow: "Partnership Enquiry", heading: "Partner with Edora", description: "Tell us about your organization and the education experience you would like to build together.", selectValue: "Partnership", emailSubject: "Partnership" },
  general: { label: "General Enquiry", eyebrow: "Contact Edora Learning", heading: "Let’s Talk", description: "Tell us about your organization, your goals and where technology can make education work better.", selectValue: "General Enquiry", emailSubject: "General Enquiry" },
} as const;

export type ContactInterestKey = keyof typeof contactInterests;
export type ContactInterest = (typeof contactInterests)[ContactInterestKey];

export const interestAreas = Object.values(contactInterests).map((interest) => interest.selectValue);

const aliases: Record<string, ContactInterestKey> = { publishers: "publisher", schools: "school", academies: "academy", teachers: "teacher", educators: "teacher", students: "student", learners: "student", parents: "parent", mentors: "mentor" };

export function contactContextFromQuery(value?: string | string[]) {
  const raw = Array.isArray(value) ? value[0] : value;
  const normalized = raw?.trim().toLowerCase() ?? "general";
  const key = (normalized in contactInterests ? normalized : aliases[normalized]) as ContactInterestKey | undefined;
  return { key: key ?? "general", ...(contactInterests[key ?? "general"]) };
}

export function contactInterestFromSelectValue(value: string) {
  return Object.values(contactInterests).find((interest) => interest.selectValue === value) ?? contactInterests.general;
}

export const partnershipTypes = {
  publisher: "Publisher partnership", institution: "School or institution partnership", academy: "Coaching or academy partnership",
  technology: "Technology partnership", implementation: "Implementation and training partnership",
} as const;

export function partnershipTypeFromQuery(value?: string | string[]) {
  const raw = (Array.isArray(value) ? value[0] : value)?.trim().toLowerCase();
  if (!raw || !(raw in partnershipTypes)) return undefined;
  return { value: raw as keyof typeof partnershipTypes, label: partnershipTypes[raw as keyof typeof partnershipTypes] };
}

export type ContactFormValues = {
  name: string; email: string; phone: string; organization: string; organizationType: string;
  interest: string; message: string; consent: boolean; partnershipType?: string;
};

export type ContactState = { status: "idle" | "error" | "success" | "fallback"; message: string; errors?: Record<string, string>; mailto?: string; values?: ContactFormValues };
export const initialContactState: ContactState = { status: "idle", message: "" };
