import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "./site-config";

export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: absoluteUrl(path), siteName: siteConfig.name, type: "website", locale: "en_IN" },
    twitter: { card: "summary_large_image", title, description },
  };
}
