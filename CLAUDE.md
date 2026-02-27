# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Rudler** — a marketing/brochure website for a CPA and advisory firm. This is a static React SPA with no backend, API calls, or database. All content is hardcoded in components.

## Commands

- `npm run dev` — Start Vite dev server (hot reload)
- `npm run build` — Production build to `dist/`
- `npm run preview` — Preview the production build locally

No test runner, linter, or formatter is configured.

## Tech Stack

- **React 18** with JSX (no TypeScript)
- **Vite 5** for dev server and bundling
- **React Router v6** for client-side routing (BrowserRouter)
- **Tailwind CSS 3** for all styling (no CSS modules, no styled-components)
- **Fonts:** IBM Plex Sans + IBM Plex Serif loaded via Google Fonts in `index.html`

## Architecture

**Routing:** `src/App.jsx` defines all routes. Every top-level page is a flat route (no nested routing). Layout is Header + `<Routes>` + Footer rendered on every page.

**Pages** (`src/pages/`): Each page is a self-contained component. Data (services list, industries, insights, team members, etc.) is defined as const arrays within the page files — there is no shared data layer or context.

**Components** (`src/components/`): Reusable presentational components. These are pure props-in, JSX-out — no local state or side effects.

**Styling conventions:**
- `src/index.css` defines reusable Tailwind `@layer components` classes: `container-page`, `btn-primary`, `btn-outline`, `section-title`, `section-kicker`, `card`
- Use these utility classes rather than duplicating their Tailwind definitions
- Custom color tokens are defined in `tailwind.config.js`: `ink` (dark navy), `forest` (greens), `accent` (blues), plus extended `slate` palette
- Design uses rounded corners (`rounded-2xl`), subtle borders, and `shadow-soft`
