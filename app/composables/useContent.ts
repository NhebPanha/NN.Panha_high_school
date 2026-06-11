/**
 * Fetch CMS/content from the API with a built-in fallback.
 *
 * Runs client-side only and seeds `data` with `fallback`, so every page renders
 * instantly with its bundled content and transparently upgrades to live API data
 * when the Spring Boot backend is reachable. If the request fails, the fallback
 * stays on screen (no broken UI). Re-runs when the locale cookie changes.
 */
export function useContent<T>(key: string, path: string, fallback: T) {
  const api = useApi()
  const locale = useLocale()
  return useAsyncData<T>(key, () => api<T>(path), {
    default: () => fallback,
    server: false,
    lazy: true,
    watch: [locale],
  })
}
