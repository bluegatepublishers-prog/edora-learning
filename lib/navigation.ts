export const mainNavigation = [
  { href: "/", label: "Home" },
  { href: "/platform", label: "Platform" },
  { href: "/solutions", label: "Solutions" },
  { href: "/demo", label: "Demo" },
  { href: "/ai", label: "AI" },
  { href: "/about", label: "About" },
  { href: "/partners", label: "Partners" },
  { href: "/contact", label: "Contact" },
];

export const footerNavigation = {
  Company: mainNavigation.filter((item) => ["About", "Partners", "Contact"].includes(item.label)),
  Platform: [
    { href: "/platform", label: "Edora Education OS" },
    { href: "/demo", label: "Explore Demo" },
    { href: "/ai", label: "AI" },
    { href: "/solutions", label: "Solutions" },
  ],
  Solutions: [
    { href: "/solutions#publishers", label: "Publishers" },
    { href: "/solutions#schools", label: "Schools" },
    { href: "/solutions#coaching", label: "Coaching Institutes" },
    { href: "/solutions#academies", label: "Academies" },
  ],
  Legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Use" },
  ],
};
