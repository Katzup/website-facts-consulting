# Project Context

This is the Factservices Website Revision project — a Vite/TypeScript static site deployed to Netlify via the `Katzup/website-facts-consulting` GitHub repo.

## Stack
- Vite + TypeScript frontend
- `blogPosts.ts` — 50 blog posts (2010–2025), five author voices
- Netlify auto-deploys on push to `main`
- Netlify build: `command = "npm run build"`, `publish = "dist"` in `netlify.toml` (only `dist/` is served — loose root files are not deployed)

## Key files
- `blogPosts.ts` — blog content (2,483 lines)
- `dist/index.html` — built entry point
- `dist/assets/` — compiled JS/CSS bundles
- `dist/images/` — book cover images

## Deployment
Push to `main` → Netlify runs `npm run build` and deploys `dist/`.
DNS: A record + www CNAME at Aerohosting; MX records untouched (email stays on cPanel host).

## Current branch
`update-books` — working branch for book cover and layout updates.
