function normalizeSiteUrl(value?: string) {
  if (!value?.trim()) return undefined;
  const candidate = /^https?:\/\//i.test(value) ? value : `https://${value}`;

  try {
    const url = new URL(candidate);
    return url.protocol === "http:" || url.protocol === "https:" ? url.origin : undefined;
  } catch {
    return undefined;
  }
}

export const siteUrl =
  normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL) ??
  normalizeSiteUrl(process.env.VERCEL_PROJECT_PRODUCTION_URL) ??
  normalizeSiteUrl(process.env.VERCEL_URL) ??
  "http://localhost:3000";

export const siteConfig = {
  name: "Edora Learning",
  legalName: "Edora Learning Pvt. Ltd.",
  product: "Edora Education OS",
  productShort: "EEOS",
  tagline: "One Platform. Every Learner. Every Institution.",
  description: "Edora Learning provides secure, intelligent and white-label education technology for publishers, schools, coaching institutes, academies, educators and learners.",
  domain: siteUrl,
  email: "edoralearning@gmail.com",
  phone: "+91 8868909560",
  phoneHref: "+918868909560",
  address: {
    line1: "Office No. 56, Deepak Building",
    line2: "Nehru Place",
    line3: "New Delhi – 110019",
    country: "India",
  },
} as const;

export const absoluteUrl = (path = "") => `${siteConfig.domain}${path}`;
