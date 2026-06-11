export type Theme = 'light' | 'dark'

// Persisted in a cookie so the server can render the correct theme on first paint
// (no flash, no hydration mismatch). Mutating the ref updates the cookie automatically.
export const useTheme = () =>
  useCookie<Theme>('bfhs-theme', {
    default: () => 'light',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 365,
    watch: true,
  })

export function useThemeControls() {
  const theme = useTheme()
  const toggle = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }
  return { theme, toggle }
}
