export type Theme = 'light' | 'dark'

// Initialized from the DOM on the client (the no-flash script in nuxt.config has
// already set the `.dark` class from localStorage / system preference before hydration).
export const useTheme = () =>
  useState<Theme>('theme', () =>
    import.meta.client && document.documentElement.classList.contains('dark') ? 'dark' : 'light',
  )

export function useThemeControls() {
  const theme = useTheme()

  function apply(value: Theme) {
    if (!import.meta.client) return
    document.documentElement.classList.toggle('dark', value === 'dark')
    try {
      localStorage.setItem('bfhs-theme', value)
    } catch {}
  }

  function toggle() {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
    apply(theme.value)
  }

  return { theme, toggle, apply }
}
