# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Sanskar Jaiswal (Software Engineer). Built with Next.js 14 App Router, React 19, Tailwind CSS v4, and Framer Motion. Dark-only theme with a purple accent color scheme using oklch color tokens.

## Commands

```bash
pnpm dev          # Start dev server at localhost:3000
pnpm build        # Production build
pnpm lint         # ESLint (next/core-web-vitals + next/typescript)
```

No test framework is currently configured.

## Architecture

**Routing**: Next.js App Router with page-per-section layout. Each route (`/about`, `/experience`, `/projects`, `/blog`, `/contact`) renders a single section component. The home page (`/`) renders only `HeroSection`.

**Layout hierarchy** (`app/layout.tsx`):
- `Navigation` — fixed navbar rendered outside providers (always visible, not animated)
- `PerfProvider` — detects low-end devices and exposes `lowPower` flag via React context (`usePerf()`)
- `AnimationProvider` — wraps children in Framer Motion `AnimatePresence` keyed on pathname for page transitions

**Animation system**:
- Shared variants/transitions in `lib/animation.ts` (page transitions, container stagger, card hover, magnetic effects)
- All use `type: "tween"` (no spring physics) for performance
- Components should check `usePerf().lowPower` to disable heavy animations on low-end devices

**UI components**: shadcn/ui (new-york style) in `components/ui/`. Configured via `components.json` with `@/` path aliases.

**Blog**: Fetched at runtime from an external Hashnode RSS feed via API route (`app/api/blog-rss/route.ts`). Parsed with `fast-xml-parser`.

**Styling**: Tailwind CSS v4 with PostCSS plugin (`@tailwindcss/postcss`). CSS variables defined in `app/globals.css` using oklch. The site is dark-mode only (`<html class="dark">`).

## Key Conventions

- Path alias `@/*` maps to project root (e.g., `@/components/...`, `@/lib/...`)
- Two Next.js config files exist: `next.config.ts` (empty, TypeScript) and `next.config.mjs` (ESM, has `reactStrictMode: true`). The `.mjs` is the one Next.js loads.
- Vercel Analytics and Speed Insights are included in the root layout
- Static assets (project screenshots) live in `assets/` and are imported directly (not from `public/`)
