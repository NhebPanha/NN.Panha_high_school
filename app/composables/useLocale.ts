import type { Locale } from '~/core/domain/shared/locale'
export type { Locale }

// Persisted in a cookie so SSR renders the correct language (no flash / mismatch).
export const useLocale = () =>
  useCookie<Locale>('bfhs-locale', {
    default: () => 'en',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 365,
    watch: true,
  })

export function useLocaleControls() {
  const locale = useLocale()
  const set = (value: Locale) => {
    locale.value = value
  }
  const toggle = () => set(locale.value === 'en' ? 'km' : 'en')
  return { locale, set, toggle }
}
