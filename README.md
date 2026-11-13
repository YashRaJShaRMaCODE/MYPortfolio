# Yash Raj Sharma | Full-Stack Developer

Personal portfolio for Yash Raj Sharma, focused on shipped products, engineering experience, and a direct contact path.

**Live portfolio:** [my-portfolio-ten-tau-95.vercel.app](https://my-portfolio-ten-tau-95.vercel.app)

## Stack

- Next.js App Router and React
- TypeScript
- Tailwind CSS 4
- Lucide icons

The portfolio uses server-rendered content and lightweight CSS. The 3D scene and animation packages from the starter version have been removed to keep the page quick to load and easy to maintain.

## Portfolio features

### Productivity

1. Search by project name, type, description, or stack; press `/` to focus and `Esc` to clear.
2. Share the current search and category from a phone, or copy the filtered link on desktop.
3. Copy a stable direct link to any selected project.
4. Search technology stacks.
5. Filter work by category.
6. See the live result count.
7. Clear the search in one action.
8. Reset category and search together after an empty result.
9. Open verified live project demos from the work list.
10. Open each project’s personal GitHub source.
11. Download the résumé directly.
12. Jump to selected work from the main navigation.
13. Jump to experience from the main navigation.
14. Copy the contact email with visible confirmation.
15. Share the portfolio with native sharing or a link-copy fallback.
16. Search by project category and scan category counts before opening a project.
17. Clear all active work filters in one action.
18. Jump to the contact section directly from the main navigation.

### Security and reliability

1. Production Content Security Policy limits active content to the site; Vercel Toolbar hosts are allowed only in Preview.
2. The policy blocks plug-in object content.
3. The policy blocks embedding through `frame-ancestors`.
4. `X-Frame-Options` also denies framing.
5. HSTS forces HTTPS in production.
6. MIME sniffing is disabled.
7. Referrer details are limited on cross-origin navigation.
8. Camera access is disabled.
9. Microphone access is disabled.
10. Geolocation is disabled.
11. Clipboard writes are restricted to the same origin.
12. Web sharing is restricted to the same origin.
13. Cross-origin opener access is isolated.
14. GitHub Actions use read-only repository contents permission.
15. CI runs a high-severity production dependency audit.

### UI and accessibility

1. A skip link moves keyboard users past the header.
2. The page uses a main landmark.
3. The document has a single primary heading.
4. Sections have descriptive headings and labels.
5. Navigation has an accessible name.
6. The search input has a screen-reader label.
7. Filter buttons announce their selected state.
8. Search result changes are announced politely.
9. Empty results explain how to recover.
10. Links and buttons expose visible keyboard focus.
11. Mobile navigation targets meet a 44px minimum.
12. Primary actions have a 48px minimum touch height.
13. The layout adapts at mobile breakpoints without horizontal overflow.
14. Motion is disabled when the user requests reduced motion.
15. The hero image uses responsive sizes, priority loading, and meaningful alternative text.

### Distinctive details

1. The hero uses an asymmetric split layout.
2. Headline emphasis keeps the same font family.
3. A single cobalt accent unifies the page.
4. The hero features a real project dashboard screenshot.
5. The screenshot has a numbered project caption.
6. Hero copy enters with a short rise animation.
7. The screenshot settles with a clipped reveal.
8. Project rows reveal as they enter the viewport where supported.
9. Project reveals use a restrained stagger.
10. A thin accent line grows across hovered project rows.
11. Project rows shift slightly on hover or keyboard focus.
12. Primary buttons lift slightly on hover.
13. Arrow icons move on hover to signal navigation.
14. Selected filter buttons invert to the page’s dark ink color.
15. A small accent marker highlights the selected-work note.

Live project links are included only when the personal repository lists a homepage. CineScope's published homepage is live and appears in the selected-work list.

## Run locally

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Update portfolio content

Edit `src/app/page.tsx` to update selected projects, experience, capabilities, contact links, and résumé path. Replace `public/Yash_Raj_Sharma_Resume.pdf` with the latest résumé when updating it.

## Checks

```bash
npm test
npm run lint
npm run typecheck
npm run build
```

## Deploy on Vercel

Import `YashRaJShaRMaCODE/MYPortfolio` into the personal Vercel account and deploy with the Next.js preset. Vercel's stable production URL is used automatically for canonical, Open Graph, sitemap, and robots links. Set `NEXT_PUBLIC_SITE_URL` only when using a custom domain. Pull requests run lint, type checks, a production build, and a production dependency audit in GitHub Actions.
