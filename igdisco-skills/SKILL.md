---
name: igdisco-conventions
description: Codebase conventions for the IGDISCO marketing site (Next.js App Router, TypeScript, Tailwind + CSS Modules). Use this skill whenever working in the IGDISCO repo — adding or moving a component, creating a route or API handler, writing or changing any CSS, deciding where a file belongs, or reviewing a diff or pull request. Trigger it even when the request sounds routine ("add a testimonials section", "make the header sticky", "why is this style not applying", "review this PR") and even when the user does not mention conventions, structure, or styling. Consult it before writing code, not after.
---

# IGDISCO site conventions

A small marketing site: Next.js App Router, TypeScript, React, Tailwind + CSS
Modules, npm. One primary route plus legal pages and a contact API handler. The
point of this skill is that the codebase is small enough that a wrong decision
looks harmless and still costs weeks later — a section component in `ui/`, a
color hardcoded instead of tokenized, a `'use client'` pushed one level too high.

Read this file first. Pull in a reference only when the work needs it.

| Task | Read |
|---|---|
| Deciding where a file goes | `references/project-structure.md` |
| Writing or changing any CSS | `references/styling.md` |
| Reviewing a diff, PR, or existing file | `references/review-checklist.md` |

## Orientation

```text
public/assets/images/
src/
├── app/                    # routes only — composition, metadata, handlers
│   ├── layout.tsx  page.tsx  globals.css  material-symbols.css
│   ├── api/contact/route.ts
│   ├── privacy-policy/  terms-of-service/
└── components/
    ├── layout/             # Header, Footer, Providers
    ├── sections/           # Hero, Services, FAQ, Contact — homepage bands
    ├── ui/                 # Brand, ThemeToggle, ScrollAnimation
    └── graphics/           # DiscoBall, HeroLogo, HeroSVG
```

Import with the `@/*` → `src/*` alias. Use npm. `.next/` and `node_modules/`
are build output, never edited.

## The four decisions that matter

### 1. Which folder

Ask what the thing *is*, not what it looks like:

- A full-width band on a page → `sections/`
- Chrome that appears on every route, or a context provider → `layout/`
- A reusable control or behavior with no domain knowledge → `ui/`
- Decorative SVG or artwork with no interaction → `graphics/`
- Non-React logic → inline first; `src/lib/` once a second caller appears

A component in `ui/` must not import from `sections/` or `app/`. Dependencies
flow one way: routes → sections → ui/graphics → lib. If you find yourself
wanting to import upward, the shared piece belongs lower, not the import higher.

Keep props, constants, and helpers in the file that uses them until a second
consumer exists. Premature extraction is the more common failure here than
duplication.

### 2. Which styling system

Short version, expanded in `references/styling.md`:

**Tailwind utilities are the default.** Reach for a CSS Module only when the
styling is genuinely beyond utilities — keyframe animation, complex
`:has()`/sibling selectors, generated content, long gradient stacks. Do not
create a `.module.css` file just to name things.

`globals.css` is for tokens and resets. It contains legacy styles that predate
Tailwind; treat those as frozen. Never add to them, and when you touch a
component whose styles live there, migrate that component's rules out as part
of the change rather than editing in place.

Never hardcode a brand color. Tokens live in `globals.css`:
wordmark blue `#0C51A3`, gradient `#662D91` → `#00B3F0`.

### 3. Where content lives

Copy changes far more often than markup on a marketing site. Anything a
non-engineer might reasonably want to edit — service descriptions, FAQ
questions and answers, nav labels, form field labels — goes in a typed `const`
array at the top of the owning section file, not inline in JSX:

```tsx
const FAQ_ITEMS: FaqItem[] = [
  { q: "...", a: "..." },
];
```

The component maps over it. This keeps one obvious place to edit text and makes
the JSX readable. Move the array to its own module only when a second component
needs it.

### 4. Whether to add structure

`src/hooks/`, `src/types/`, `src/features/`, `_components/`, route groups — all
legitimate, none currently present, and none to be created speculatively. Add
one when the work in front of you needs it, and mention it when you do. This is
a small marketing site; do not migrate it toward a feature architecture to match
a template.

If tests are introduced later, colocate unit tests with their owners and put
browser flows in the runner's conventional end-to-end directory. Do not write
code or docs that imply a test runner already exists.

## Working style

Change file organization only where it supports the requested work. Moving
adjacent files "while you're in there" makes diffs hard to review and is not
wanted unless asked for.

When a convention here conflicts with what the code actually does, say so
rather than silently picking one. The codebase is the source of truth about
what *is*; this skill is the source of truth about what *should be*. A gap
between them is information worth surfacing.
