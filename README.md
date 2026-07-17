# Edora Learning Corporate Website

Production-ready corporate marketing website for Edora Learning Pvt. Ltd. and its flagship platform, Edora Education OS (EEOS).

## Technology

- Next.js 16 App Router, React 19 and TypeScript
- Tailwind CSS v4 with a reusable global brand system
- Lucide React icons
- Manrope typography with expressive blue, yellow and orange visual treatments
- Server Components by default; Client Components only for mobile navigation and contact-form state

## Local setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Routes

`/`, `/platform`, `/solutions`, `/demo`, `/ai`, `/about`, `/partners`, `/contact`, `/privacy`, `/terms`

Generated metadata routes: `/robots.txt`, `/sitemap.xml`, `/manifest.webmanifest`.

The `/demo` route provides role-based product previews. Add only approved demonstration screenshots using the filenames and privacy process in `docs/EDORA_DEMO_SCREENSHOT_GUIDE.md`. Missing screenshots render intentional placeholders.

## Environment

Copy `.env.example` to a local environment file only when configuring a deployment. Do not commit credentials.

- `CONTACT_EMAIL_TO`: must be `edoralearning@gmail.com`
- `EMAIL_FROM`: verified sender accepted by the email provider
- `RESEND_API_KEY`: API key for optional Resend delivery
- `NEXT_PUBLIC_SITE_URL`: public site URL (reserved for deployment configuration)

Leave `NEXT_PUBLIC_SITE_URL` unset until Edora owns and connects its custom domain. Without it, metadata uses Vercel's production project URL when available and `http://localhost:3000` during local builds. After purchasing and connecting the domain, add `NEXT_PUBLIC_SITE_URL=https://edoralearning.in` in the Vercel project environment and rebuild so canonical, Open Graph, sitemap, robots and JSON-LD URLs use the verified domain. Do not set this variable to a temporary deployment URL.

The contact Server Action validates all fields. Automatic delivery occurs only when all three email values are configured and the destination exactly matches the approved Edora mailbox. The main email contains the full enquiry and timestamp, and uses the visitor’s address as reply-to. A visitor confirmation is best-effort and cannot fail the main submission.

Without valid configuration, the UI clearly states that nothing was sent and provides a prefilled `mailto:edoralearning@gmail.com` fallback. There is no database and no submission is stored by the application.

### Manual email test

1. Set the three server-only email values in the deployment environment.
2. Submit a valid enquiry from `/contact?interest=school`.
3. Confirm the School Solution is preselected.
4. Confirm the Edora mailbox receives every form field and the submission timestamp.
5. Confirm Reply works to the visitor address.
6. Remove one local email value and verify the form reports that nothing was sent and exposes the prepared email link.

## Design system

The shared styles in `app/globals.css` define the blue, yellow and orange brand palette, colourful card treatments, page heroes and three reusable button variants:

- Primary: orange-to-gold gradient
- Secondary: blue outline with pale-blue hover
- Dark: deep navy with white text

CTA links were audited across the header, footer, homepage and internal pages. All routes point to real pages, valid solution anchors or contact queries that preselect the matching enquiry area.

## Verification

```bash
npm run lint
npx tsc --noEmit
npm run build
git diff --check
git status --short
```

## Deployment and domain

1. Import this repository into Vercel and select the Next.js preset.
2. Add only required production environment values in Vercel project settings.
3. Deploy a preview and complete the checklist in `docs/EDORA_WEBSITE_CHECKLIST.md`.
4. Add `edoralearning.in` and `www.edoralearning.in` in project Domains.
5. Apply the DNS records supplied by Vercel, select the canonical domain and verify HTTPS.
6. Confirm email delivery and all generated metadata routes on production.

No deployment is performed by this repository setup.
