# Edora Website Launch Checklist

## Content

- [ ] Company name, email, phone and office address match approved identity
- [ ] No fake statistics, clients, testimonials, awards, logos or people
- [ ] Upcoming and roadmap capabilities are clearly labelled
- [ ] No provider or implementation secrets appear in AI content
- [ ] Bluegate is not presented as the Edora brand or main focus

## Responsive visual review

- [ ] Inspect every route at 360, 390, 768, 1024 and 1440 px widths
- [ ] Confirm no horizontal overflow or clipped content
- [ ] Confirm ecosystem nodes, architecture layers and colourful cards remain contained
- [ ] Confirm headings and button labels wrap without collision
- [ ] Test sticky header and mobile menu open, close and navigation behavior
- [ ] Verify touch targets and form controls on iOS and Android browsers
- [ ] Check Chrome, Edge, Firefox and Safari

## Accessibility

- [ ] Navigate all controls using only a keyboard
- [ ] Confirm visible focus states and skip link
- [ ] Verify heading order and semantic landmarks
- [ ] Check labels, validation messages and status announcements
- [ ] Test 200% zoom and reduced-motion preference
- [ ] Run automated contrast and accessibility checks

## Contact form

- [ ] Submit empty, malformed and valid values
- [ ] Verify consent is required server-side
- [ ] Confirm unconfigured email shows mailto fallback and never claims success
- [ ] Confirm fallback targets `edoralearning@gmail.com` with all visitor fields prefilled
- [ ] Test `?interest=demo`, `publisher`, `school`, `coaching`, `academy`, `ai` and `partnership` preselection
- [ ] Configure verified sender and destination in deployment settings
- [ ] Confirm the approved mailbox receives all fields and an ISO submission timestamp
- [ ] Confirm successful delivery, visitor reply-to and failure behavior
- [ ] Confirm a confirmation-email failure does not fail an already delivered main enquiry
- [ ] Add operational rate limiting if enquiry volume or abuse requires it

## SEO

- [ ] Inspect unique page titles, descriptions and canonical URLs
- [ ] Validate Organization JSON-LD
- [ ] Verify `/robots.txt`, `/sitemap.xml` and `/manifest.webmanifest`
- [ ] Replace placeholder favicon and add approved Open Graph artwork when available
- [ ] Submit production sitemap to relevant search consoles

## CTA and link audit

- [x] Header, mobile menu, footer and final CTA destinations reviewed
- [x] Homepage audience cards use specific labels and valid solution anchors
- [x] Platform role blocks link to demo and contextual enquiry journeys
- [x] Eight solution journeys include benefits, availability/roadmap notes, demo links and contextual enquiry CTAs
- [x] Demo anchors standardized: `publisher`, `school`, `teacher`, `student`, `reader`, `ai`, `assessments`, `mentor`, `parent`
- [x] AI, About and partnership CTAs use explicit destinations
- [x] Contact interests and partnership types are allow-listed with a safe general fallback
- [x] Footer includes parent and mentor solution links
- [ ] Re-run the automated route, link, anchor and contact-query audit after every CTA change

## Vercel deployment

- [ ] Run lint, typecheck and production build
- [ ] Create preview deployment and complete visual QA
- [ ] Add production environment values without exposing credentials
- [ ] Verify security, logs and contact delivery
- [ ] Promote the approved preview only after sign-off

## Domain

- [ ] Add `edoralearning.in` and preferred `www` behavior in Vercel
- [ ] Configure DNS records supplied by the hosting project
- [ ] Confirm canonical redirect and HTTPS certificate
- [ ] Verify canonical, sitemap and contact links on the live domain
