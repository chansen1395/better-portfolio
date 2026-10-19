# Connor Hansen - Portfolio

Personal portfolio site built with React, TypeScript, Vite, and Emotion.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- npm (comes with Node)

## Getting Started

```bash
cd better-portfolio
npm install
npm run dev
```

The dev server starts at `http://localhost:5173/`.

## Other Commands

| Command           | Description                                          |
| ----------------- | ---------------------------------------------------- |
| `npm run build`   | Type-check and produce a production build in `dist/` |
| `npm run preview` | Preview the production build locally                 |
| `npm run lint`    | Run ESLint across the project                        |

## Deployment

This branch is set up to deploy to connorhansen.com as a Cloudflare Worker with static assets (`wrangler.jsonc`, `worker/index.js`). It is not published there yet. The Worker redirects `www` to the apex, adds security headers and a CSP, and falls back to `index.html` for client-side routes.

```bash
CLOUDFLARE_API_TOKEN=... CLOUDFLARE_ACCOUNT_ID=... npm run deploy
```

That script builds the site and runs `wrangler deploy`, which uploads `dist/` and attaches both custom domains, replacing whatever is on them. The account ID and token come from the environment and are never committed.

The version currently live at `chansen1395.github.io/better-portfolio` is the earlier build on the `gh-pages` branch.

To verify the production build locally:

```bash
npm run build
npm run preview
```
