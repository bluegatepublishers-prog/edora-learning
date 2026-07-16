import Link from "next/link";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";

export function Header() {
  return <header className="site-header"><div className="container header-inner">
    <Link className="brand" href="/" aria-label="Edora Learning home"><span className="brand-mark" aria-hidden="true"><i>E</i></span><span><strong>Edora Learning</strong><small>Education Technology</small></span></Link>
    <DesktopNavigation />
    <Link className="button button-primary header-cta" href="/contact?interest=demo">Request a Demo</Link>
    <MobileNavigation />
  </div></header>;
}
