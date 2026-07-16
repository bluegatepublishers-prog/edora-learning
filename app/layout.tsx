import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: { default: "Edora Learning | Education Technology & Education OS", template: "%s | Edora Learning" },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.legalName }],
  keywords: ["education technology", "education operating system", "school platform", "publisher technology", "white-label learning platform"],
  openGraph: { type: "website", locale: "en_IN", siteName: siteConfig.name, title: "Edora Learning | Education Technology & Education OS", description: siteConfig.description, url: siteConfig.domain },
  twitter: { card: "summary_large_image", title: "Edora Learning | Education Technology & Education OS", description: siteConfig.description },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.variable}>
      <body><a className="skip-link" href="#main-content">Skip to content</a><Header /><main id="main-content">{children}</main><Footer /></body>
    </html>
  );
}
