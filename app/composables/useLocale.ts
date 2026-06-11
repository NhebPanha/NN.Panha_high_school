export type Locale = 'en' | 'km'

export const useLocale = () =>
  useState<Locale>('locale', () => {
    if (import.meta.client) {
      const l = document.documentElement.getAttribute('lang')
      if (l === 'km') return 'km'
    }
    return 'en'
  })

export function useLocaleControls() {
  const locale = useLocale()

  function set(value: Locale) {
    locale.value = value
    if (!import.meta.client) return
    document.documentElement.setAttribute('lang', value)
    try {
      localStorage.setItem('bfhs-locale', value)
    } catch {}
  }

  function toggle() {
    set(locale.value === 'en' ? 'km' : 'en')
  }

  return { locale, set, toggle }
}
