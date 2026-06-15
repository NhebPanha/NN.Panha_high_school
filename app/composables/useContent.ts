import type { ContentRepository } from '~/core/domain/content/content.repository'
import { loadContent } from '~/core/application/content/loadContent'

/**
 * Fetch CMS/content from the API with a built-in fallback.
 *
 * Presentation adapter over the `loadContent` use case. Runs client-side only and
 * seeds `data` with `fallback`, so every page renders instantly with its bundled
 * content and transparently upgrades to live API data when the Spring Boot backend
 * is reachable. If the request fails, the fallback stays on screen (no broken UI).
 * Re-runs when the locale cookie changes.
 */
export function useContent<T>(key: string, path: string, fallback: T) {
  const repo = useNuxtApp().$contentRepository as ContentRepository
  const locale = useLocale()
  return useAsyncData<T>(key, () => loadContent<T>(repo, path), {
    default: () => fallback,
    server: false,
    lazy: true,
    watch: [locale],
  })
}
