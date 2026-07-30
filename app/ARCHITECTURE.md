# Frontend Clean Architecture

This Nuxt 4 app is organized into concentric layers. **Dependencies point inwards
only**: outer layers know about inner layers, never the reverse. The inner layers
(`domain`, `application`) contain zero Nuxt/Vue/HTTP code, so the business rules can
be reasoned about and unit-tested in isolation.

```
app/
├── core/                         # ❶ + ❷  framework-agnostic business core
│   ├── domain/                   # ❶ Entities, value types, repository PORTS, pure policies
│   │   ├── auth/
│   │   │   ├── auth.entity.ts         Role, SessionUser, Credentials, AuthSession
│   │   │   ├── auth.repository.ts     AuthRepository interface (port)
│   │   │   └── auth.policy.ts         dashboardFor() — pure rule
│   │   ├── content/
│   │   │   └── content.repository.ts  ContentRepository interface (port)
│   │   └── shared/                    Locale, Theme value types
│   └── application/              # ❷ Use cases — orchestrate ports, no framework
│       ├── auth/                      loginUser, getCurrentUser, logoutUser
│       └── content/                   loadContent
│
├── infrastructure/              # ❸ Detail layer — implements the ports
│   ├── http/httpClient.ts            configured $fetch (base URL, auth, locale)
│   └── repositories/                 HttpAuthRepository, HttpContentRepository
│
├── plugins/api.ts              # ❹ Composition root — wires infrastructure → ports
│
└── (presentation layer)        # ❹ Nuxt UI — kept at the conventional locations
    ├── composables/                  adapters: useAuth, useContent, useLocale, useTheme, useI18n, useApi
    ├── components/  layouts/  pages/  middleware/
```

## Layers

| # | Layer | Folder | Depends on | Knows about Nuxt/Vue? |
|---|-------|--------|-----------|------------------------|
| ❶ | Domain | `core/domain` | nothing | No |
| ❷ | Application (use cases) | `core/application` | domain | No |
| ❸ | Infrastructure | `infrastructure` | domain (implements ports) | $fetch only |
| ❹ | Presentation | `composables`, `components`, `pages`, … | application + domain | Yes |

## Why presentation lives at the `app/` root

Nuxt auto-discovers `pages/`, `layouts/`, `components/`, `middleware/`, `plugins/`
and `composables/` at conventional paths. Those directories **are** the
presentation layer; moving them would fight the framework for no architectural
gain. The composables act as *interface adapters* — they translate Nuxt
reactivity (cookies, `useState`, `useAsyncData`) into calls on the inner use
cases, and resolve repository ports from the composition root via injection.

## The dependency rule in practice

- A page/component calls a **composable** (e.g. `useAuth().login()`).
- The composable invokes a **use case** (`loginUser`), passing the **port**
  (`AuthRepository`) it resolved from `useNuxtApp()`.
- `plugins/api.ts` (the **composition root**) is the single place that constructs
  the concrete `HttpAuthRepository` and binds it to the port.
- To swap the backend (REST → GraphQL, or a mock for tests), implement
  `AuthRepository`/`ContentRepository` and change only the composition root.

## Design system (presentation layer)

The UI is driven by one semantic token set defined in `nuxt.config.ts` as CSS
variables (RGB triplets) and exposed to Tailwind as colour names. The whole
palette flips under `.dark` — there are **no** per-page dark-mode overrides.

- `fg` / `fg-muted` / `fg-subtle` — text on ordinary page surfaces.
- `bg` / `surface` / `surface-2` / `surface-3` — background elevation ramp.
- `brand` / `accent` — filled surfaces; only their `on-*` partners are legal on top.
- `on-dark` / `on-dark-muted` — text over photography or brand fills (constant in both themes).
- Never colour a heading with `brand`; that is what broke dark mode previously.

Primitives live in `components/ui/` and auto-import with a `Ui` prefix:
`UiButton`, `UiCard`, `UiBadge`, `UiField`, `UiIcon`, `UiAvatar`, `UiStat`,
`UiSection`, `UiSectionHead`, `UiContainer`, `UiThemeToggle`, `UiLocaleToggle`.

Page chrome: `SiteHeader` + `SiteFooter` (via `layouts/default.vue`) for the
public site, `PageHeader` for interior mastheads, and `PortalShell`
(`components/portal/Shell.vue`) for every dashboard — rail, top bar, account
menu and footer in one place, parameterised by `audience`, `nav` and `title`.

## Adding a feature

1. Model it in `core/domain/<feature>/` — entity types + a repository port.
2. Write use cases in `core/application/<feature>/` against that port.
3. Implement the port in `infrastructure/repositories/`.
4. Provide the implementation in `plugins/api.ts`.
5. Expose it to the UI with a composable in `composables/`.
