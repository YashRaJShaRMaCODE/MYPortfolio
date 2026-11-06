# Yash Raj Sharma — Portfolio

Personal portfolio for Yash Raj Sharma, a full-stack developer working across product interfaces, backend systems, and data platforms.

**Live portfolio:** [my-portfolio-yash-raj-sharmas-projects-c76761bc.vercel.app](https://my-portfolio-yash-raj-sharmas-projects-c76761bc.vercel.app)

## Stack

- Next.js App Router and React
- TypeScript
- Tailwind CSS 4
- Lucide icons

The portfolio uses server-rendered content and lightweight CSS. The 3D scene and animation packages from the starter version have been removed to keep the page quick to load and easy to maintain.

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
npm run lint
npm run typecheck
npm run build
```

## Deploy on Vercel

Import `YashRaJShaRMaCODE/MYPortfolio` into the personal Vercel account and deploy with the Next.js preset. Vercel's stable production URL is used automatically for canonical, Open Graph, sitemap, and robots links. Set `NEXT_PUBLIC_SITE_URL` only when using a custom domain. Pull requests run lint, type checks, a production build, and a production dependency audit in GitHub Actions.
