# Styling

Read before writing or changing any CSS, adding a color, or debugging a style
that is not applying.

Three styling systems coexist in this repo: Tailwind utilities, CSS Modules, and
legacy rules in `globals.css`. That is one more than ideal, and the cost of not
having a rule is that each new component picks differently. The rule below is
the point of this document.

## Precedence

**1. Tailwind utilities — the default.** Layout, spacing, color, typography,
responsive behavior, hover and focus states, dark mode variants. If utilities
can express it, use them, even when the class list gets long. A long class list
is legible; a `.module.css` file that duplicates what utilities already do is
not.

**2. CSS Modules — for what utilities cannot express.** Specifically:

- `@keyframes` and multi-step animations
- Selectors utilities do not cover: `:has()`, sibling combinators, `:nth-child()`
  patterns, deep descendant targeting
- Generated content (`::before`, `::after`) with real styling
- Layered or animated gradients, masks, blend modes, filters
- Anything needing a named, reusable value inside a single component

The module lives next to its component as `<Name>.module.css` and is imported by
that component only. Never import one component's module into another — if two
components need the same rule, it belongs in a shared component or a token.

Mixing is expected and fine: utilities for layout, a module class for the one
animated gradient. That is the intended shape, not a compromise.

**3. `globals.css` — tokens, resets, and frozen legacy.** Add design tokens and
genuine site-wide resets here. The legacy component rules that predate Tailwind
are frozen: do not add to them, do not refactor them for their own sake. When
you modify a component whose styles still live in `globals.css`, migrate that
component's rules out as part of the same change. This is how the legacy block
shrinks — opportunistically, tied to work that was happening anyway, never as a
standalone sweep that touches everything at once.

If a style is not applying, the cause is usually this legacy block winning on
specificity. Check `globals.css` for a matching selector before adding
`!important` — `!important` is not an acceptable fix here; removing the
conflicting legacy rule is.

## Tokens and color

Never hardcode a brand color anywhere. The IGDISCO identity:

| Token | Value |
|---|---|
| Wordmark blue | `#0C51A3` |
| Gradient start | `#662D91` |
| Gradient end | `#00B3F0` |

Fonts are Bahnschrift and Inter, loaded in `layout.tsx`. Do not add a font
`<link>` or `@import` inside a component or a module — font loading belongs in
the root layout so Next.js can optimize it.

Reference tokens through the CSS custom properties defined in `globals.css` and
their Tailwind equivalents in `tailwind.config.ts`. When you need a brand value
that has no token yet, add the token first, then use it. A hex literal in a
component is a defect regardless of how correct the hex is, because the next
person will copy it rather than the token.

## Dark mode

The site has a `ThemeToggle`, so every new surface must work in both themes.
Express theme-dependent color through tokens that already flip, or through
Tailwind's `dark:` variant — never through a component-level conditional that
branches on the theme value in JavaScript. Branching in JS reintroduces the
flash-of-wrong-theme problem that CSS-driven theming avoids.

Check both themes before considering a visual change done. Contrast that passes
in light mode frequently fails in dark.

## Responsive

Mobile-first: unprefixed utilities describe the small screen, `sm:`/`md:`/`lg:`
add up from there. Use Tailwind's breakpoints rather than writing media queries
by hand, and if a module genuinely needs one, use the same breakpoint values
from `tailwind.config.ts` rather than new numbers.

## Class name hygiene

Tailwind's compiler only sees complete class strings in the source. Constructing
a class name from fragments silently produces nothing:

```tsx
// Broken — the class never gets generated
<div className={`text-${color}-500`} />

// Correct — full strings, statically visible
const TONE = { brand: "text-brand", muted: "text-slate-500" } as const;
<div className={TONE[tone]} />
```

This is the single most common styling bug in Tailwind projects and it fails
silently, so it is worth checking whenever a style mysteriously does not appear.
