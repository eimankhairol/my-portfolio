# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Eiman Khairol's personal site, eimankhairol.com: a single-page "book + tape" scrollytelling portfolio.
Vite + React 19, plain CSS (`src/styles.css`, no Tailwind), GSAP + ScrollTrigger + `@gsap/react`, Lenis smooth scroll.

## Commands

```
npm run dev -- --host                        # dev server, localhost:5173 (also reachable from a phone on the same wifi)
npm run build && npm run preview -- --host   # production preview, localhost:4173 (use this for performance checks)
npx eslint src                               # lint
npm run deploy                               # build + publish dist/ to the gh-pages branch (CNAME eimankhairol.com)
```

There are no tests.

**Deploying:** pushing `main` does NOT change the live site, and there is no CI. Only `npm run deploy` publishes. Never deploy, commit or push without Eiman's explicit go-ahead.

## Architecture

- **All copy lives in `src/data.js`.** Edit text there, not in components. Any `[bracketed]` text renders as a pencilled "fill me in" note via `components/Pencil.jsx`. Use that for anything unknown, and never invent facts or numbers.
- **Chapters link to cards by key.** Each entry in `chapters` lists `roles` (keys into `roles`) and `projects` (ids into `projects`). `Chapters.jsx` resolves them and tosses the matching `RoleCard`s and `MiniBook`s in beside the text. Every role and project should appear in some chapter.
- **The resume has its own data.** The on-page resume (`Resume.jsx`) renders `resume.experience`, `education`, `skills` and `interests`, not `roles`, so resume entries can differ from the cards (for example, teaching is one merged entry). It reads Projects from `projects`.
- **The PDF is generated.** `public/resume.pdf` is printed from `scripts/resume.html` with headless Chrome. Keep it in sync with `resume` in data.js by hand, keep it to one page, and leave bracketed placeholders out of it:
  ```
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --disable-gpu --no-pdf-header-footer --print-to-pdf=public/resume.pdf "file://$PWD/scripts/resume.html"
  ```
- **Motion setup is in `src/motion.js`.** It creates the one Lenis instance (driven by the GSAP ticker so ScrollTrigger stays in sync) and exports `scrollTo`, the `DESKTOP`/`MOBILE` media queries (breakpoint 860px) and `reduced`. Import GSAP from there, not from `gsap` directly. Components animate inside `useGSAP` with a scoped ref, and skip animation when `reduced` is set.
- **Safari performance:** artifact and cassette entrances play once, never scrubbed, because rotating text every frame stutters in Safari. The nav has no `backdrop-filter`. Keep both that way.

## Design constraints

"Paperback" design: mint wall `#D8EFE2` ground, page cream `#FFF8EA`, cloth green `#1F3D30` for all text, spine orange `#F68B1F` and spine pink `#F4A3B8` for objects only. Fonts are Young Serif (headings), Figtree (body) and Nanum Pen Script (handwriting). Content changes should keep the design and the animations as they are.

Copy voice: plain, short, first person, a little dry. No corporate words.

`HANDOVER.md` and `portfolio-handover.md` hold current status and open to-dos.
