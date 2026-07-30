// https://nuxt.com/docs/api/configuration/nuxt-config

/*
 * DESIGN SYSTEM
 * -------------
 * One semantic token set, expressed as CSS variables holding RGB channel triplets
 * so Tailwind opacity modifiers (bg-surface/70) keep working while the entire
 * palette flips under `.dark`.
 *
 * Naming rules that keep dark mode honest:
 *   - `fg` / `fg-muted` / `fg-subtle`  → text on ordinary page surfaces. Never
 *     use `brand` for body headings; that is what broke dark mode before.
 *   - `brand` / `accent`               → filled surfaces (buttons, footer, hero
 *     scrims). Their `on-*` partners are the only correct text colour on top.
 *   - `on-dark` / `on-dark-muted`      → text over photography or brand fills.
 *     Constant in both themes by design.
 */

const color = (token: string) => `rgb(var(--c-${token}) / <alpha-value>)`

const colorTokens = [
  'bg', 'surface', 'surface-2', 'surface-3', 'overlay',
  'fg', 'fg-muted', 'fg-subtle', 'on-dark', 'on-dark-muted',
  'line', 'line-strong',
  'brand', 'on-brand', 'brand-tint', 'on-brand-tint',
  'accent', 'on-accent', 'accent-tint', 'on-accent-tint',
  'success', 'success-tint', 'on-success-tint',
  'warning', 'warning-tint', 'on-warning-tint',
  'danger', 'danger-tint', 'on-danger-tint',
  'info', 'info-tint', 'on-info-tint',
]
const colors = Object.fromEntries(colorTokens.map((t) => [t, color(t)]))

// Fraunces carries the institutional voice; Inter does the work. Khmer falls back
// to Noto so both scripts stay on the same optical baseline.
const displayStack = ['Fraunces', '"Noto Serif Khmer"', '"Noto Sans Khmer"', 'Georgia', 'serif']
const sansStack = ['Inter', '"Noto Sans Khmer"', 'system-ui', 'sans-serif']

const tailwindConfig = `
  tailwind.config = {
    darkMode: "class",
    theme: {
      extend: {
        colors: ${JSON.stringify(colors)},
        fontFamily: {
          display: ${JSON.stringify(displayStack)},
          sans: ${JSON.stringify(sansStack)}
        },
        fontSize: {
          "display-1": ["clamp(2.5rem, 1.6rem + 3.6vw, 4rem)", { lineHeight: "1.04", letterSpacing: "-0.022em", fontWeight: "600" }],
          "display-2": ["clamp(2rem, 1.4rem + 2.4vw, 3rem)",   { lineHeight: "1.08", letterSpacing: "-0.02em",  fontWeight: "600" }],
          "title-1":   ["clamp(1.75rem, 1.4rem + 1.4vw, 2.25rem)", { lineHeight: "1.16", letterSpacing: "-0.018em", fontWeight: "600" }],
          "title-2":   ["1.5rem",   { lineHeight: "1.25", letterSpacing: "-0.014em", fontWeight: "600" }],
          "title-3":   ["1.25rem",  { lineHeight: "1.3",  letterSpacing: "-0.01em",  fontWeight: "600" }],
          "title-4":   ["1.0625rem",{ lineHeight: "1.4",  letterSpacing: "-0.006em", fontWeight: "600" }],
          "lead":      ["1.125rem", { lineHeight: "1.7" }],
          "copy":      ["1rem",     { lineHeight: "1.65" }],
          "copy-sm":   ["0.875rem", { lineHeight: "1.6" }],
          "label":     ["0.8125rem",{ lineHeight: "1.25rem", fontWeight: "500" }],
          "label-sm":  ["0.75rem",  { lineHeight: "1rem", fontWeight: "500" }],
          "eyebrow":   ["0.6875rem",{ lineHeight: "1rem", letterSpacing: "0.14em", fontWeight: "600" }],
          "metric":    ["clamp(1.75rem, 1.3rem + 1.6vw, 2.5rem)", { lineHeight: "1.05", letterSpacing: "-0.03em", fontWeight: "600" }]
        },
        borderRadius: { sm: "0.25rem", DEFAULT: "0.375rem", md: "0.5rem", lg: "0.75rem", xl: "1rem", "2xl": "1.25rem" },
        maxWidth: { container: "1200px", prose: "68ch" },
        spacing: { gutter: "1.5rem", page: "1.25rem", "page-lg": "2.5rem", section: "5rem" },
        boxShadow: {
          hair:  "0 1px 2px rgb(var(--c-shadow) / 0.05)",
          card:  "0 1px 2px rgb(var(--c-shadow) / 0.05), 0 1px 3px rgb(var(--c-shadow) / 0.04)",
          lift:  "0 4px 6px -2px rgb(var(--c-shadow) / 0.05), 0 12px 24px -6px rgb(var(--c-shadow) / 0.10)",
          pop:   "0 8px 12px -4px rgb(var(--c-shadow) / 0.08), 0 24px 48px -12px rgb(var(--c-shadow) / 0.18)"
        },
        transitionTimingFunction: { out: "cubic-bezier(0.16, 1, 0.3, 1)" },
        keyframes: {
          "fade-up": { "0%": { opacity: "0", transform: "translateY(8px)" }, "100%": { opacity: "1", transform: "none" } },
          "fade-in": { "0%": { opacity: "0" }, "100%": { opacity: "1" } }
        },
        animation: {
          "fade-up": "fade-up .5s cubic-bezier(0.16,1,0.3,1) both",
          "fade-in": "fade-in .3s ease both"
        }
      }
    }
  }
`

const lightVars = `
  --c-bg: 250 249 246;        --c-surface: 255 255 255;   --c-surface-2: 245 243 239;
  --c-surface-3: 236 233 226; --c-overlay: 17 35 63;      --c-shadow: 17 35 63;
  --c-fg: 24 27 33;           --c-fg-muted: 88 95 105;    --c-fg-subtle: 133 141 152;
  --c-on-dark: 255 255 255;   --c-on-dark-muted: 211 217 227;
  --c-line: 228 224 216;      --c-line-strong: 205 199 189;
  --c-brand: 17 35 63;        --c-on-brand: 255 255 255;  --c-brand-tint: 232 237 245;  --c-on-brand-tint: 17 35 63;
  --c-accent: 150 101 45;     --c-on-accent: 255 255 255; --c-accent-tint: 246 238 227; --c-on-accent-tint: 116 76 31;
  --c-success: 22 111 78;     --c-success-tint: 226 242 235; --c-on-success-tint: 17 88 62;
  --c-warning: 160 104 8;     --c-warning-tint: 251 240 221; --c-on-warning-tint: 124 79 5;
  --c-danger: 176 41 34;      --c-danger-tint: 251 232 230;  --c-on-danger-tint: 140 30 24;
  --c-info: 30 88 150;        --c-info-tint: 229 239 250;    --c-on-info-tint: 25 71 122;
`

const darkVars = `
  --c-bg: 13 16 21;           --c-surface: 22 26 33;      --c-surface-2: 29 34 43;
  --c-surface-3: 38 44 55;    --c-overlay: 5 8 13;        --c-shadow: 0 0 0;
  --c-fg: 236 238 241;        --c-fg-muted: 165 172 183;  --c-fg-subtle: 124 131 143;
  --c-on-dark: 255 255 255;   --c-on-dark-muted: 200 207 218;
  --c-line: 42 48 59;         --c-line-strong: 58 66 80;
  --c-brand: 21 42 74;        --c-on-brand: 255 255 255;  --c-brand-tint: 27 38 58;   --c-on-brand-tint: 198 214 238;
  --c-accent: 216 168 99;     --c-on-accent: 40 26 8;     --c-accent-tint: 52 42 27;  --c-on-accent-tint: 232 197 143;
  --c-success: 74 190 145;    --c-success-tint: 22 46 38;  --c-on-success-tint: 130 219 183;
  --c-warning: 224 168 62;    --c-warning-tint: 51 40 18;  --c-on-warning-tint: 240 200 122;
  --c-danger: 240 130 121;    --c-danger-tint: 58 27 25;   --c-on-danger-tint: 248 174 167;
  --c-info: 122 174 236;      --c-info-tint: 22 36 54;     --c-on-info-tint: 168 203 243;
`

const globalStyle = `
  :root { ${lightVars} color-scheme: light; }
  .dark { ${darkVars} color-scheme: dark; }

  * { border-color: rgb(var(--c-line)); }

  html { scroll-behavior: smooth; -webkit-text-size-adjust: 100%; }

  body {
    font-family: Inter, 'Noto Sans Khmer', system-ui, sans-serif;
    background-color: rgb(var(--c-bg));
    color: rgb(var(--c-fg));
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-feature-settings: 'cv02','cv03','cv04','cv11';
  }

  /* Fraunces is variable: dial in a low-contrast, slightly wedge-serif cut that
     reads as institutional rather than decorative. */
  .font-display { font-variation-settings: 'SOFT' 0, 'WONK' 0, 'opsz' 40; }

  /* One visible focus treatment for the whole product. */
  :focus-visible {
    outline: 2px solid rgb(var(--c-accent));
    outline-offset: 2px;
    border-radius: 2px;
  }
  :focus:not(:focus-visible) { outline: none; }

  ::selection { background: rgb(var(--c-accent) / 0.25); }

  .material-symbols-outlined {
    font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
    line-height: 1;
    user-select: none;
  }
  .icon-filled { font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24; }

  /* Hairline rule used above section headings. */
  .rule { height: 1px; background: rgb(var(--c-line)); }

  .hide-scrollbar::-webkit-scrollbar { display: none; }
  .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

  .thin-scrollbar { scrollbar-width: thin; scrollbar-color: rgb(var(--c-line-strong)) transparent; }
  .thin-scrollbar::-webkit-scrollbar { width: 8px; height: 8px; }
  .thin-scrollbar::-webkit-scrollbar-track { background: transparent; }
  .thin-scrollbar::-webkit-scrollbar-thumb {
    background: rgb(var(--c-line-strong)); border-radius: 999px;
    border: 2px solid transparent; background-clip: content-box;
  }

  /* Duotone scrim for photography so white text always clears AA. */
  .scrim-b { background: linear-gradient(to top, rgb(var(--c-overlay) / .88) 0%, rgb(var(--c-overlay) / .55) 38%, rgb(var(--c-overlay) / .05) 100%); }
  .scrim-l { background: linear-gradient(to right, rgb(var(--c-overlay) / .86) 0%, rgb(var(--c-overlay) / .55) 45%, rgb(var(--c-overlay) / .12) 100%); }

  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    *, *::before, *::after {
      animation-duration: .01ms !important; animation-iteration-count: 1 !important;
      transition-duration: .01ms !important; scroll-behavior: auto !important;
    }
  }
`

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      // Spring Boot backend base URL (see back_api_java_spring_boot.readme.md).
      // Override at runtime with NUXT_PUBLIC_API_BASE.
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'http://localhost:8080/api/v1',
    },
  },
  app: {
    head: {
      title: 'Bright Future High School',
      titleTemplate: (title?: string) =>
        title && title !== 'Bright Future High School'
          ? `${title} · Bright Future High School`
          : 'Bright Future High School',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'theme-color', content: '#11233F' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=Noto+Sans+Khmer:wght@400;500;600;700&family=Noto+Serif+Khmer:wght@400;600;700&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap',
        },
      ],
      script: [
        { src: 'https://cdn.tailwindcss.com?plugins=forms,container-queries' },
        { innerHTML: tailwindConfig, type: 'text/javascript' },
      ],
      style: [{ innerHTML: globalStyle }],
    },
  },
})
