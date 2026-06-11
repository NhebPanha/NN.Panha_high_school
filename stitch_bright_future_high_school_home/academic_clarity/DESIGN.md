---
name: Academic Clarity
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#43474e'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#74777f'
  outline-variant: '#c4c6cf'
  surface-tint: '#455f88'
  primary: '#002045'
  on-primary: '#ffffff'
  primary-container: '#1a365d'
  on-primary-container: '#86a0cd'
  inverse-primary: '#adc7f7'
  secondary: '#1960a3'
  on-secondary: '#ffffff'
  secondary-container: '#7db6ff'
  on-secondary-container: '#00477f'
  tertiary: '#1b2127'
  on-tertiary: '#ffffff'
  tertiary-container: '#30363c'
  on-tertiary-container: '#989fa6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#adc7f7'
  on-primary-fixed: '#001b3c'
  on-primary-fixed-variant: '#2d476f'
  secondary-fixed: '#d3e4ff'
  secondary-fixed-dim: '#a2c9ff'
  on-secondary-fixed: '#001c38'
  on-secondary-fixed-variant: '#004881'
  tertiary-fixed: '#dde3eb'
  tertiary-fixed-dim: '#c1c7cf'
  on-tertiary-fixed: '#161c22'
  on-tertiary-fixed-variant: '#41474e'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Lexend
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Lexend
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Lexend
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Lexend
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 14px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

The design system is engineered for **Bright Future High School**, targeting students, parents, and faculty. It embodies a premium, modern education brand that balances institutional authority with a forward-thinking, technological edge. The personality is professional, transparent, and inspiring.

The visual direction blends **Corporate Modern** efficiency with **Glassmorphism**. Drawing inspiration from high-end tech platforms, the UI utilizes generous whitespace, crisp typography, and layered translucent surfaces. The emotional response should be one of "structured freedom"—a reliable framework that encourages academic exploration. Every element is designed to feel high-definition and high-quality, moving away from traditional "stuffy" educational aesthetics toward a sleek, performance-driven interface.

## Colors

The palette is anchored by **Professional Navy Blue** for authority and **Bright Academic Blue** for action and progression. 

- **Primary (#1A365D):** Used for navigation backgrounds, headers, and primary branding elements.
- **Secondary (#2B6CB0):** Reserved for call-to-actions, progress indicators, and active states.
- **Neutrals:** A range of soft grays (from #F8FAFC to #64748B) manage the secondary content and borders to ensure the UI feels light and breathable.
- **Glass Effects:** Backgrounds utilize high-transparency whites and slates with a 20px-40px backdrop-blur to create depth without clutter.

For **Dark Mode**, the Professional Navy deepens into a Midnight Slate (#0F172A), while the Bright Academic Blue maintains its vibrancy to ensure AA accessibility against dark backgrounds.

## Typography

This design system uses a dual-font strategy. **Lexend** is used for headlines and display text; its geometric clarity and origins in readability research make it perfect for an educational context. **Inter** is used for all body copy, UI labels, and data-heavy views to ensure maximum legibility and a systematic, technical feel.

- **Headlines:** Use tighter letter-spacing and bold weights to create a strong visual hierarchy.
- **Body:** Standardized at 16px for desktop to ensure comfort during long reading sessions (curriculum, reports).
- **Labels:** Utilize slightly increased letter-spacing and semi-bold weights to differentiate from interactive text.

## Layout & Spacing

The layout follows a **Fluid Grid** model with strict maximum widths for content readability. 

- **Desktop (1280px+):** A 12-column grid with 24px gutters. Content is centered with 40px outer margins.
- **Tablet (768px - 1279px):** An 8-column grid with 20px gutters.
- **Mobile (<767px):** A 4-column grid with 16px gutters and 16px margins.

Spacing follows a 4px base unit. Vertical rhythm is maintained through "stack" variables, ensuring that the distance between a headline and its description is always half the distance of the spacing between sections. Components should utilize large internal padding (minimum 16px) to maintain the premium, airy feel.

## Elevation & Depth

Hierarchy is established through **Glassmorphism** and **Ambient Shadows**. 

1.  **Level 0 (Base):** Soft gray background (#F8FAFC) to provide a canvas.
2.  **Level 1 (Cards):** White background with a 1px stroke (#E2E8F0) and a very soft, diffused shadow (0px 4px 20px rgba(0, 0, 0, 0.05)).
3.  **Level 2 (Overlays/Glass):** Translucent background with `backdrop-filter: blur(20px)`. These surfaces use a white 1px inner border (0.1 opacity) to simulate the edge of a glass pane.
4.  **Level 3 (Modals/Popovers):** Higher contrast shadows (0px 20px 40px rgba(26, 54, 93, 0.12)) to lift the element significantly off the page.

Shadow colors should be tinted with the Primary Navy Blue rather than pure black to keep the "academic" feel clean and professional.

## Shapes

The shape language is overtly **Rounded**, specifically using **2xl (2rem)** radii for primary containers and cards to create a friendly, modern Apple-inspired look.

- **Buttons & Small Inputs:** 0.5rem to 1rem (Rounded-lg).
- **Cards & Content Blocks:** 2rem (Rounded-2xl).
- **Profile Avatars:** Always 100% (Circle).
- **Chips/Badges:** Pill-shaped (Full radius).

This soft geometry offsets the "seriousness" of the Navy Blue, making the platform feel approachable for students.

## Components

- **Buttons:** 
    - *Primary:* Solid #1A365D with white text. High contrast, 1rem border-radius.
    - *Secondary:* Ghost style with #2B6CB0 border and text.
    - *Glass:* Translucent white background with blur, used over imagery or colored sections.
- **Input Fields:** Soft gray background (#F1F5F9), no border unless focused. Upon focus, a 2px #2B6CB0 ring appears.
- **Cards:** White or Glass background. Must include 2rem corner radius and the "Level 1" ambient shadow. Used for course modules, student profiles, and grade reports.
- **Chips:** Small, pill-shaped indicators for status (e.g., "Enrolled", "Graduated"). Use low-saturation background tints of the primary colors.
- **Lists:** Clean rows with 1px soft gray bottom dividers. No side borders. High hover state visibility using a light blue tint (#F0F7FF).
- **Navigation:** Top bar uses the Glassmorphism effect (blur) to stay fixed while content scrolls underneath, maintaining the sense of depth.