# Edora Demo Screenshot Guide

The `/demo` page is a public marketing showcase. Only screenshots taken from authorized disposable demonstration data may be published.

## Required files

Place screenshots in `public/images/demo/` using these exact filenames:

- `super-admin-dashboard.webp`
- `publisher-dashboard.webp`
- `school-dashboard.webp`
- `teacher-dashboard.webp`
- `student-dashboard.webp`
- `student-book-reader.webp`
- `student-ai-assistant.webp`
- `assessment-dashboard.webp`
- `reports-dashboard.webp`
- `mentor-dashboard.webp`
- `parent-dashboard.webp`

The page checks for each file independently. A missing file displays a polished placeholder and never produces a broken-image icon.

## Capture specification

- Recommended size: **1600 × 1000 pixels**
- Preferred format: **WebP**
- Use consistent browser window dimensions for every capture
- Use the same light theme where possible
- Capture desktop views first
- Future mobile screenshots may be added later as a separately reviewed set
- Crop consistently and confirm important controls remain legible at responsive sizes

## Privacy and security checklist

- Use only authorized disposable demo accounts and demonstration data
- Hide or replace all real personal information
- Remove email addresses and phone numbers
- Do not show passwords, password-reset links or authentication secrets
- Avoid raw user, organization, book or database IDs
- Do not show private book URLs or protected asset locations
- Do not show AI prompts, provider names, API keys or quota information
- Disable or hide browser password-manager overlays and autofill suggestions
- Do not include developer tools, consoles, network panels or source code
- Avoid showing production URLs where they are unnecessary
- Check browser tabs, bookmarks and operating-system notifications before capture
- Inspect the final exported WebP at full size before publication

## Publishing workflow

1. Create a disposable demonstration account for the target role.
2. Populate it with fictional, non-identifying education data.
3. Capture at 1600 × 1000 using the agreed browser and light theme.
4. Review the image for personal information, secrets, raw IDs and private URLs.
5. Export as WebP using the exact filename above.
6. Add it to `public/images/demo/` and test the `/demo` route at desktop and mobile widths.
7. Obtain content and privacy approval before deployment.

Never copy screenshots from a production customer account, even if visible information appears harmless.
