# Chop Chop landing page — implementation plan

## Context

The `design-handoff/` folder (sibling to this one) is a JCC CS200 course handoff for **Chop Chop**, a fictional food-delivery app for "the Kombos" (Serrekunda, Bakau, Brusubi). Its `style-guide.md` specifies rebuilding a one-page landing site in Tailwind CSS + Vite from two comps (`comp-desktop.png`, `comp-mobile.png`) and a fully specified design system — every color, size, and spacing value is given by name, so there is no visual guesswork.

This project (`chop-chop/`) is that implementation: a static Tailwind CSS site matching the comps, pushed to a new GitHub repo, and deployed to Vercel.

## Stack & location

- **Folder:** `tutorials/2-CHOP-CHOP-RESTAURANT WEBSITES/chop-chop/` (sibling to `design-handoff/`), matching this course's convention of one project folder per tutorial (see `1-character-counter/`).
- **Stack:** Vite + Tailwind CSS v4 (`@theme` block, per the style guide), plain HTML/CSS/JS — no framework. Package manager: `npm`.
- Assets copied as-is from `design-handoff/assets/*.svg` (logo, phone, step icons, dish icons) — not redrawn.

## Build steps

1. **Scaffold:** `npm create vite@latest` (vanilla template), then add Tailwind CSS v4 via `@tailwindcss/vite`.
2. **Theme:** `@theme { --color-*: initial; ... }` declaring exactly the 15 named colors from the style guide (`chop`, `chop-dark`, `chop-light`, `chop-soft`, `ink`, `ink-2`, `ink-3`, `surface`, `cream`, `line`, `leaf`, `leaf-soft`, `on-dark`, `on-dark-soft`, `dark-line`) plus `--font-sans` (system stack). No hex values outside this block.
3. **Markup — `index.html`, sections in order:**
   - Header: logo (left) + nav ("How it works", "Popular", "Areas") + "Get the app" button (right), `py-4`, stacked→row at `sm:`.
   - Hero (`bg-cream`): eyebrow "NOW DELIVERING IN SERREKUNDA, BAKAU AND BRUSUBI", `<h1>` "Dinner is one tap away.", lede, two CTAs ("Get the app" filled, "See what's popular" arrow-link), phone mockup with floating "28 min average delivery" stat card. Side-by-side at `lg:`, `text-5xl` h1 at `lg:`.
   - "How it works": 3 steps (Pick a kitchen / Build your order / Track your rider) with `step-N.svg` icons, stacked→row at `sm:`.
   - "Popular this week" (`bg-cream`): 6 dish cards (`dish-1..6.svg`), grid 1→2 col `sm:`→3 col `lg:`, each with badge (Popular/Spicy/Vegetarian/Breakfast — vegetarian uses `leaf`/`leaf-soft`, others `chop-soft`/`chop-dark`), name, kitchen + area, price ("D250" format), "Add" button.
   - "Where we deliver": area list (Serrekunda, Bakau, Koloti, Brusubi, Banjul, Lamin) with delivery times, 1→2 col `sm:`→3 col `lg:`.
   - Dark CTA band (`bg-ink`): "Get Chop Chop on your phone" + subline + "Download for iPhone"/"Download for Android".
   - Footer (dark): logo + blurb, link columns (Chop Chop / Kitchens / Help), copyright rule.
4. **Hover/focus states** — the 5 from the style guide (nav link underline+lift, primary button darken+lift, arrow-link slide, dish card lift, Add button fill) plus `focus-visible` outlines (`outline-chop` on light bands, `outline-chop-light` on dark).
5. **Copy:** transcribed directly from the comps, not paraphrased.
6. **Verify:** `npm run dev`, check at mobile (390px) and desktop widths against the comps; `npm run build` for a clean static build.

## GitHub

1. Install GitHub CLI (`brew install gh`), `gh auth login` (interactive).
2. `git init`, initial commit.
3. `gh repo create` and push.

## Vercel

1. Install Vercel CLI (`npm install -g vercel`), `vercel login` (interactive).
2. `vercel link` / `vercel --prod` — static Vite build (`dist/`), no server config needed.
3. Confirm deployed URL matches the local build.

## Status

- [ ] Scaffold Vite + Tailwind v4
- [ ] Copy assets
- [ ] `@theme` block
- [ ] Build all sections
- [ ] Hover/focus states
- [ ] Verify against comps, build passes
- [ ] GitHub repo created & pushed
- [ ] Deployed to Vercel
