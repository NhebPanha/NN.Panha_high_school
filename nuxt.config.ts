// https://nuxt.com/docs/api/configuration/nuxt-config

// Semantic color tokens are exposed as CSS variables (RGB channel triplets) so
// that Tailwind opacity modifiers (e.g. bg-surface/80) keep working AND the whole
// palette can flip between light/dark by swapping the variables under `.dark`.
const color = (token: string) => `rgb(var(--c-${token}) / <alpha-value>)`

const colorTokens = [
  'inverse-primary', 'on-secondary', 'on-tertiary', 'primary-container',
  'on-secondary-fixed-variant', 'on-tertiary-fixed-variant', 'on-tertiary-fixed',
  'surface', 'surface-variant', 'secondary', 'surface-tint', 'surface-dim',
  'surface-container-highest', 'background', 'outline', 'on-error-container',
  'tertiary-fixed', 'surface-container', 'surface-container-lowest', 'tertiary',
  'on-secondary-container', 'on-tertiary-container', 'primary-fixed-dim',
  'outline-variant', 'surface-container-high', 'error', 'secondary-container',
  'surface-bright', 'primary-fixed', 'on-primary', 'error-container',
  'on-background', 'tertiary-fixed-dim', 'inverse-on-surface', 'on-surface',
  'on-secondary-fixed', 'on-primary-container', 'on-primary-fixed-variant',
  'secondary-fixed', 'on-error', 'primary', 'surface-container-low',
  'inverse-surface', 'on-surface-variant', 'tertiary-container',
  'on-primary-fixed', 'secondary-fixed-dim',
]
const colors = Object.fromEntries(colorTokens.map((t) => [t, color(t)]))

const khmer = '"Noto Sans Khmer"'
const tailwindConfig = `
  tailwind.config = {
    darkMode: "class",
    theme: {
      extend: {
        "colors": ${JSON.stringify(colors)},
        "borderRadius": { "DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px" },
        "spacing": {
          "margin-desktop": "40px", "stack-lg": "32px", "stack-md": "16px", "stack-sm": "8px",
          "unit": "4px", "margin-mobile": "16px", "gutter": "24px", "container-max": "1280px"
        },
        "fontFamily": {
          "display-lg": ["Lexend", ${khmer}, "sans-serif"],
          "body-md": ["Inter", ${khmer}, "sans-serif"],
          "label-sm": ["Inter", ${khmer}, "sans-serif"],
          "body-lg": ["Inter", ${khmer}, "sans-serif"],
          "headline-md": ["Lexend", ${khmer}, "sans-serif"],
          "label-md": ["Inter", ${khmer}, "sans-serif"],
          "display-lg-mobile": ["Lexend", ${khmer}, "sans-serif"],
          "body-sm": ["Inter", ${khmer}, "sans-serif"],
          "headline-sm": ["Lexend", ${khmer}, "sans-serif"]
        },
        "fontSize": {
          "display-lg": ["48px", {"lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
          "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
          "label-sm": ["12px", {"lineHeight": "14px", "fontWeight": "500"}],
          "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "400"}],
          "headline-md": ["24px", {"lineHeight": "32px", "fontWeight": "600"}],
          "label-md": ["14px", {"lineHeight": "16px", "letterSpacing": "0.05em", "fontWeight": "600"}],
          "display-lg-mobile": ["32px", {"lineHeight": "40px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
          "body-sm": ["14px", {"lineHeight": "20px", "fontWeight": "400"}],
          "headline-sm": ["20px", {"lineHeight": "28px", "fontWeight": "600"}]
        }
      }
    }
  }
`

// Light = the original Stitch palette. Dark = a coherent Material-3 midnight-slate scheme.
// Only non-"fixed" tokens change in dark; *-fixed tokens stay constant by design.
const lightVars = `
  --c-inverse-primary: 173 199 247; --c-on-secondary: 255 255 255; --c-on-tertiary: 255 255 255;
  --c-primary-container: 26 54 93; --c-on-secondary-fixed-variant: 0 72 129;
  --c-on-tertiary-fixed-variant: 65 71 78; --c-on-tertiary-fixed: 22 28 34;
  --c-surface: 248 249 255; --c-surface-variant: 211 228 254; --c-secondary: 25 96 163;
  --c-surface-tint: 69 95 136; --c-surface-dim: 203 219 245; --c-surface-container-highest: 211 228 254;
  --c-background: 248 249 255; --c-outline: 116 119 127; --c-on-error-container: 147 0 10;
  --c-tertiary-fixed: 221 227 235; --c-surface-container: 229 238 255; --c-surface-container-lowest: 255 255 255;
  --c-tertiary: 27 33 39; --c-on-secondary-container: 0 71 127; --c-on-tertiary-container: 152 159 166;
  --c-primary-fixed-dim: 173 199 247; --c-outline-variant: 196 198 207; --c-surface-container-high: 220 233 255;
  --c-error: 186 26 26; --c-secondary-container: 125 182 255; --c-surface-bright: 248 249 255;
  --c-primary-fixed: 214 227 255; --c-on-primary: 255 255 255; --c-error-container: 255 218 214;
  --c-on-background: 11 28 48; --c-tertiary-fixed-dim: 193 199 207; --c-inverse-on-surface: 234 241 255;
  --c-on-surface: 11 28 48; --c-on-secondary-fixed: 0 28 56; --c-on-primary-container: 134 160 205;
  --c-on-primary-fixed-variant: 45 71 111; --c-secondary-fixed: 211 228 255; --c-on-error: 255 255 255;
  --c-primary: 0 32 69; --c-surface-container-low: 239 244 255; --c-inverse-surface: 33 49 69;
  --c-on-surface-variant: 67 71 78; --c-tertiary-container: 48 54 60; --c-on-primary-fixed: 0 27 60;
  --c-secondary-fixed-dim: 162 201 255;
`
const darkVars = `
  --c-background: 15 23 42; --c-surface: 15 23 42; --c-surface-bright: 30 41 59; --c-surface-dim: 8 13 24;
  --c-surface-container-lowest: 8 12 20; --c-surface-container-low: 22 31 51; --c-surface-container: 27 39 64;
  --c-surface-container-high: 36 50 77; --c-surface-container-highest: 46 61 90; --c-surface-variant: 46 61 90;
  --c-on-background: 226 232 240; --c-on-surface: 226 232 240; --c-on-surface-variant: 176 187 204;
  --c-outline: 139 148 163; --c-outline-variant: 58 69 92;
  --c-primary: 173 199 247; --c-on-primary: 0 50 90; --c-primary-container: 45 71 111; --c-on-primary-container: 214 227 255;
  --c-inverse-primary: 25 96 163; --c-surface-tint: 173 199 247;
  --c-secondary: 162 201 255; --c-on-secondary: 0 50 90; --c-secondary-container: 0 72 129; --c-on-secondary-container: 207 228 255;
  --c-tertiary: 193 199 207; --c-on-tertiary: 27 33 39; --c-tertiary-container: 48 54 60; --c-on-tertiary-container: 221 227 235;
  --c-error: 255 180 171; --c-on-error: 105 0 5; --c-error-container: 147 0 10; --c-on-error-container: 255 218 214;
  --c-inverse-surface: 226 232 240; --c-inverse-on-surface: 27 39 64;
`

const globalStyle = `
  :root { ${lightVars} }
  .dark { ${darkVars} }

  body { font-family: 'Inter', 'Noto Sans Khmer', sans-serif; }

  .glass-effect {
    backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
    background: rgba(255, 255, 255, 0.7); border: 1px solid rgba(255, 255, 255, 0.2);
  }
  .text-shadow-sm { text-shadow: 0 2px 4px rgba(0,0,0,0.1); }
  .hide-scrollbar::-webkit-scrollbar { display: none; }
  .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

  /* Dark-mode adjustments for hardcoded light utilities used as card/section surfaces */
  .dark .bg-white { background-color: rgb(27 39 64); }
  .dark .bg-primary { background-color: rgb(13 20 36); }
  .dark .glass-effect { background: rgba(30, 41, 59, 0.6); border-color: rgba(255,255,255,0.08); }
  .dark .glass-panel, .dark .glass-card { background: rgba(30, 41, 59, 0.6) !important; border-color: rgba(255,255,255,0.08) !important; }
  .dark img { filter: brightness(0.9); }
  html { color-scheme: light; }
  html.dark { color-scheme: dark; }
`

// Set theme/lang before first paint to avoid a flash of the wrong theme.
const noFlash = `
  (function(){try{
    var t = localStorage.getItem('bfhs-theme');
    var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (t === 'dark' || (!t && prefersDark)) document.documentElement.classList.add('dark');
    var l = localStorage.getItem('bfhs-locale');
    if (l === 'km' || l === 'en') document.documentElement.setAttribute('lang', l);
  }catch(e){}})();
`

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Bright Future High School',
      titleTemplate: (title?: string) =>
        title && title !== 'Bright Future High School'
          ? `${title} | Bright Future High School`
          : 'Bright Future High School',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Lexend:wght@400;600;700;900&family=Inter:wght@400;500;600&family=Noto+Sans+Khmer:wght@400;500;600;700&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap',
        },
      ],
      script: [
        { innerHTML: noFlash, tagPosition: 'head' },
        { src: 'https://cdn.tailwindcss.com?plugins=forms,container-queries' },
        { innerHTML: tailwindConfig, type: 'text/javascript' },
      ],
      style: [{ innerHTML: globalStyle }],
    },
  },
})
