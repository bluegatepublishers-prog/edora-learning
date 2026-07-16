export const organizationTypes = ["Publisher", "School", "Coaching Institute", "Academy", "Training Centre", "Technology Partner", "Other"] as const;
export const interestAreas = ["Edora Education OS", "Publisher Solution", "School Solution", "Coaching Solution", "Academy Solution", "AI", "Partnership", "General Enquiry"] as const;

const interestQueryMap: Record<string, typeof interestAreas[number]> = {
  demo: "Edora Education OS", platform: "Edora Education OS", publishers: "Publisher Solution", publisher: "Publisher Solution",
  schools: "School Solution", school: "School Solution", coaching: "Coaching Solution", academies: "Academy Solution", academy: "Academy Solution",
  ai: "AI", partnership: "Partnership", general: "General Enquiry",
};

export function interestFromQuery(value?: string | string[]) {
  const query = Array.isArray(value) ? value[0] : value;
  return query ? interestQueryMap[query.toLowerCase()] : undefined;
}

export type ContactState = { status: "idle" | "error" | "success" | "fallback"; message: string; errors?: Record<string, string>; mailto?: string };
export const initialContactState: ContactState = { status: "idle", message: "" };
