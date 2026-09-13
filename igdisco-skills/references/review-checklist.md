# Review checklist

Read when reviewing a diff, a pull request, or an existing file the user wants
assessed.

## How to review

Go through the categories below in order and report only what is actually
wrong. A review that lists every category with "looks fine" is noise. If the
diff is clean, say it is clean and name the one or two things you checked most
carefully.

Separate findings into two groups and label them:

- **Blocking** — a bug, a security problem, a broken convention that will
  compound (wrong folder, hardcoded color, dynamic class name, missing
  metadata, upward import).
- **Worth considering** — preference, simplification, a refactor the author may
  reasonably decline.

Quote the specific line rather than describing it abstractly. If something looks
wrong but the surrounding code suggests a reason you cannot see, ask instead of
asserting.

## Placement

- Is the component in the folder matching what it *is*? A page band in `ui/`, a
  stateful component in `graphics/`, or a provider in `sections/` is misplaced.
- Does anything in `ui/` or `graphics/` import from `sections/` or `app/`? That
  is an upward import and always wrong.
- Does `page.tsx` contain substantial markup that belongs in a section?
- Was a new directory (`hooks/`, `types/`, `lib/`, `features/`) created for a
  single file? Speculative structure gets flagged.
- Were unrelated files moved or reorganized alongside the actual change?

## Styling

- Any hardcoded hex, `rgb()`, or brand color literal? Should be a token.
- New rules added to the legacy block in `globals.css`? Not allowed.
- A `.module.css` created for styling that Tailwind utilities already cover?
- Dynamically constructed class names (`` `text-${x}-500` ``)? Silently broken.
- `!important` used to beat a legacy selector rather than removing it?
- Does the change work in both light and dark theme?
- Theme branching in JavaScript instead of CSS variants?
- New font loaded outside `layout.tsx`?

## Next.js and React

- `'use client'` on a component that does not need it, or placed high enough to
  pull an unnecessary subtree into the client bundle? It belongs on the smallest
  component that actually needs state, effects, or browser APIs.
- New route without exported `metadata`?
- Is a server-only module (secrets, server helpers) reachable from a client
  component, directly or through a barrel file?
- `<img>` where `next/image` is appropriate, or an image without dimensions?
- Missing or unstable `key` in a mapped list — index keys in a list that can
  reorder.
- An effect that only derives state from props, or that could be computed during
  render.

## Content and copy

- Is user-facing text inline in JSX rather than in a typed `const` array at the
  top of the section?
- Is the same string duplicated across components?

## Accessibility

Marketing sites are public-facing, so these are not optional:

- Interactive elements are real `<button>` or `<a>`, not `<div onClick>`.
- Visible focus states survive any custom styling.
- Decorative SVG is `aria-hidden`; meaningful SVG has a `<title>` or label.
- Images have `alt` — empty `alt=""` for decorative, descriptive otherwise.
- Heading levels descend without skipping.
- Form inputs have associated labels, and errors are announced, not only
  colored.

## API handlers

- Every input validated server-side, not only in the client form.
- Errors returned with an appropriate status and a stable JSON shape.
- No secret read outside the handler, no secret in a response or a log line.
- No unbounded request body or missing rate consideration on a public endpoint.

## TypeScript

- Any `any` that could be a real type, or a non-null assertion covering a case
  that can actually be null.
- Props typed on the component rather than inferred from usage.
- `as const` on literal arrays used as unions.
