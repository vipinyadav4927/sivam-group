# Shivam Group Website

A responsive healthcare consultancy website for Shivam Group of Enterprises, rebuilt from the supplied public Framer site.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm --filter @workspace/shivam-group-website run dev` — run the website preview
- `pnpm --filter @workspace/shivam-group-website run typecheck` — check the website
- `PORT=23721 BASE_PATH=/ pnpm --filter @workspace/shivam-group-website run build` — build the website
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/shivam-group-website/src/App.tsx` — routes, shared shell, page content, contact interactions
- `artifacts/shivam-group-website/src/index.css` — source-matched design tokens, responsive layout, and motion
- `artifacts/shivam-group-website/public/images/` — local source hero image
- `artifacts/shivam-group-website/public/fonts/` — local Manrope font weights
- `artifacts/shivam-group-website/clone-data/` — captured source HTML and route copy used during recreation

## Architecture decisions

- The website is frontend-only; phone, WhatsApp, email, and the contact form use direct browser actions rather than an unneeded backend.
- Wouter handles the source site's route set so navigation stays client-side and works under the root preview path.
- The original Framer hero asset and Manrope font files are stored locally so the preview does not depend on the source site staying available.
- The linked scheme routes that were empty on the source are represented with useful contextual service pages while keeping the shared shell and navigation intact.

## Product

The site introduces Shivam Group of Enterprises, explains its healthcare consultancy services, provides detail pages for NABH, Ayushman/PM-JAY, CM Fund, ECSH, CGHS, TPA/Insurance, and complete hospital consultancy, and gives hospitals direct contact paths.

## User preferences

- Recreate the supplied public website accurately, preserving its copy, visual hierarchy, content structure, and responsive behavior.

## Gotchas

- The website workflow supplies `PORT` and `BASE_PATH`; standalone builds need both variables set.
- Keep image and font URLs local to the artifact so the site remains functional if the source Framer site changes.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
