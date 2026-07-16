"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainNavigation } from "@/lib/navigation";

export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);
  return <div className="mobile-navigation"><button className="icon-button" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>{open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button>{open && <div id="mobile-menu" className="mobile-menu"><nav aria-label="Mobile navigation">{mainNavigation.map((item) => { const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href); return <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined} onClick={() => setOpen(false)}>{item.label}</Link>; })}<Link className="button button-primary" href="/contact?interest=demo" onClick={() => setOpen(false)}>Request a Demo</Link></nav></div>}</div>;
}
