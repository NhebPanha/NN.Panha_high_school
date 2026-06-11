// Lightweight, dependency-free i18n. Each page/component supplies its own
// { en, km } message map; `t` resolves against the shared reactive locale, so
// switching language re-renders everything automatically.
export function useI18n<T extends Record<string, string>>(messages: { en: T; km: T }) {
  const locale = useLocale()
  const t = (key: keyof T): string =>
    (messages[locale.value] && messages[locale.value][key]) ?? messages.en[key] ?? String(key)
  return { t, locale }
}
