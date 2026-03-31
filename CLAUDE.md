# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Rudler** — a marketing/brochure website for a CPA and advisory firm. This is a static Next.js site with no backend, API calls, or database. All content is hardcoded in components.

## Commands

- `npm run dev` — Start Next.js dev server (hot reload)
- `npm run build` — Production build (static export to `out/`)
- `npm run start` — Serve the production build locally

No test runner, linter, or formatter is configured.

## Tech Stack

- **Next.js 16** with the App Router (no TypeScript)
- **React 18** with JSX
- **Static export** via `output: 'export'` in `next.config.js` — no server-side rendering
- **Tailwind CSS 3** for all styling (no CSS modules, no styled-components)
- **Fonts:** Newsreader (headline) + Work Sans (body/label) — loaded via `<link>` or Next.js font handling

## Architecture

**Routing:** Next.js App Router. Each page is a `page.jsx` file inside `app/`. Routes: `/`, `/about`, `/services`, `/industries`, `/insights`, `/careers`, `/contact`, `/client`.

**Layout:** `app/layout.jsx` is the root layout — wraps all pages with `<Header>`, `<Footer>`, and `<RevealObserver>`. No nested layouts.

**Pages** (`app/<route>/page.jsx`): Each page is a self-contained component. Data (services list, industries, insights, team members, etc.) is defined as const arrays within the page files — there is no shared data layer or context.

**Components** (`components/`): Reusable presentational components. These are pure props-in, JSX-out — no local state or side effects (except `RevealObserver`, which uses `useEffect` for scroll-based reveal animations).

**Styling conventions:**
- `app/global.css` defines reusable Tailwind `@layer components` classes: `container-page`, `btn-primary`, `btn-secondary`, `btn-outline`, `section-title`, `section-kicker`, `card`, `vellum-layer`
- `@layer utilities` defines `reveal`, `reveal-delay-1/2/3` for scroll-triggered fade-in animations (driven by `RevealObserver`)
- Use these utility classes rather than duplicating their Tailwind definitions
- Custom color tokens are defined in `tailwind.config.js`: Material-style surface/on-surface palette, `primary` (blue `#00458b`), `secondary` (green `#356a32`), `ink`, `forest`, `accent`, `clay`, plus `shadow-soft`
- Fonts configured in Tailwind: `font-headline` (Newsreader serif), `font-body`/`font-label` (Work Sans)
- Design uses subtle rounded corners, `shadow-soft`, and `card` utility
