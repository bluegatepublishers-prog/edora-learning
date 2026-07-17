"use client";

import Link from "next/link";

export default function ErrorPage({ unstable_retry }: { error: Error & { digest?: string }; unstable_retry: () => void }) {
  return <section className="page-hero page-hero-blue"><div className="container"><div className="page-hero-copy"><p className="eyebrow">Something went wrong</p><h1>We Couldn’t Load This Page</h1><p>Try the page again or return to the Edora Learning homepage.</p><div className="button-row"><button className="button button-primary" type="button" onClick={() => unstable_retry()}>Try Again</button><Link className="button button-outline-light" href="/">Return Home</Link></div></div></div></section>;
}
