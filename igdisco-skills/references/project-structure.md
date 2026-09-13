# Project structure

Read when deciding where a file belongs, or when adding a route, section,
endpoint, or asset.

## Layout

```text
public/assets/images/           # Static assets, served at /assets/images/...
src/
├── app/
│   ├── layout.tsx              # Root document, fonts, metadata, Providers
│   ├── page.tsx                # Homepage section composition
│   ├── page.module.css         # Homepage-specific styles
│   ├── globals.css             # Tokens, Tailwind directives, legacy styles
│   ├── material-symbols.css    # Icon font setup
│   ├── favicon.ico
│   ├── api/contact/route.ts    # Server-side contact validation and delivery
│   ├── privacy-policy/page.tsx
│   └── terms-of-service/page.tsx
└── components/
    ├── layout/                 # Header, Footer, Providers
    ├── sections/               # Hero, Services, FAQ, Contact, other bands
    │   └── *.module.css        # Styles colocated with the owning component
    ├── ui/                     # Brand, ThemeToggle, ScrollAnimation
    └── graphics/               # DiscoBall, HeroLogo, HeroSVG
```

Root config: `package.json`, `package-lock.json`, `tsconfig.json`,
`next.config.ts`, `eslint.config.mjs`, `tailwind.config.ts`,
`postcss.config.mjs`. Use npm and the existing `@/*` → `src/*` alias.

## Placement table

| Responsibility | Location |
|---|---|
| URL, route metadata, page composition | `src/app/<segment>/page.tsx` |
| Shared route shell | Nearest applicable `layout.tsx` |
| Homepage section | `src/components/sections/<Name>.tsx` |
| Site chrome or provider | `src/components/layout/<Name>.tsx` |
| Reusable presentation or interaction | `src/components/ui/<Name>.tsx` |
| SVG or decorative artwork | `src/components/graphics/<Name>.tsx` |
| Component-specific complex styling | Adjacent `<Name>.module.css` |
| HTTP endpoint and server validation | `src/app/api/<name>/route.ts` |
| Public static asset | `public/assets/` under an asset category |

Keep routing files focused on composition. A `page.tsx` that contains substantial
markup should be delegating to a section component instead.

## `ui/` versus `graphics/`

The line is interaction, not file type. `graphics/` holds components that render
artwork and nothing else — no state, no event handlers, no data. The moment a
graphic gains real interactive behavior, it has become a `ui/` component that
happens to draw an SVG. Move it and update its imports rather than leaving a
stateful component in `graphics/`.

Purely decorative SVGs should be marked `aria-hidden` and carry no accessible
name; graphics that convey meaning need a `<title>` or an equivalent label.

## Extend only when needed

Optional future locations. None of these exist yet and none should be created
speculatively:

- `src/app/<segment>/_components/` — UI used only by one route subtree. The
  leading underscore opts the directory out of routing. Route groups `(group)`
  organize routes without adding a URL segment. Use either only for a real
  organizational need.
- `src/hooks/use<Name>.ts` — hooks shared across unrelated components. A hook
  used by one feature stays with that feature.
- `src/lib/` — reusable non-React logic. Put server-only helpers somewhere
  clearly separated such as `src/lib/server/`, protect secret-bearing modules
  with a server-only boundary, and never import them from a client component.
- `src/types/` — genuinely shared contracts only, not a dumping ground for every
  component's props. Shared client/server contracts must not import server
  runtime code.
- `src/features/<feature>/` — when one substantial feature owns several
  components, hooks, and helpers. Route entrypoints stay in `app/`.

If tests arrive, colocate focused component and unit tests with their owners and
put cross-route browser flows in the chosen runner's conventional end-to-end
folder. Do not imply a runner already exists.

## Dependency direction

Routes → sections/features → shared UI and utilities. Shared UI must not import
page sections or route entrypoints. Keep domain-specific logic out of generic UI
components. Avoid circular imports.

Prefer direct imports over barrel files. A barrel that re-exports both server and
client modules is a particular hazard in App Router — it drags server code into
client bundles and obscures which boundary a module is on.

## Adding a route

1. Create `src/app/<segment>/page.tsx`.
2. Export `metadata` (title and description at minimum) from the page or its
   layout. Every route on a marketing site needs these; missing metadata is a
   real defect here, not a nicety.
3. Compose from section components. If the route needs UI that nothing else will
   use, that is the case for `_components/` — introduce it then.
4. Add the route to the footer or nav if it should be reachable.

## Adding an API handler

`src/app/api/<name>/route.ts`, exporting the HTTP verb as a named function.
Validate every input server-side regardless of what the client already checks.
Return a JSON body with a stable shape and an appropriate status code. Read
secrets from `process.env` inside the handler and never re-export them.
