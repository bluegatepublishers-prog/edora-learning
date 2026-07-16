import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site-config";
const routes=["","/platform","/solutions","/demo","/ai","/about","/partners","/contact","/privacy","/terms"];
export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path, index) => ({
    url: absoluteUrl(path),
    lastModified: new Date("2026-07-17"),
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : path === "/privacy" || path === "/terms" ? 0.4 : 0.8,
  }));
}
