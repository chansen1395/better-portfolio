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

The site is configured for GitHub Pages deployment from the `gh-pages` branch.

```bash
npm run deploy
```

That script builds the site and publishes the `dist/` directory to GitHub Pages.

If the repository name changes, update the GitHub Pages base path in `vite.config.ts` before deploying.

To verify the production build locally:

```bash
npm run build
npm run preview
```
