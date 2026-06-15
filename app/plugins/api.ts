import type { $Fetch } from 'ofetch'
import type { AuthRepository } from '~/core/domain/auth/auth.repository'
import type { ContentRepository } from '~/core/domain/content/content.repository'
import { createHttpClient } from '~/infrastructure/http/httpClient'
import { HttpAuthRepository } from '~/infrastructure/repositories/HttpAuthRepository'
import { HttpContentRepository } from '~/infrastructure/repositories/HttpContentRepository'

// Composition root: the one place where infrastructure is wired to the rest of
// the app. Builds the HTTP client and the concrete repositories, then provides
// them for injection. Presentation composables resolve the ports from here,
// never the implementations directly.
export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const locale = useLocale() // cookie-backed ref (en | km)
  const access = useCookie<string | null>('bfhs_access')

  const api = createHttpClient({
    baseURL: config.public.apiBase,
    getToken: () => access.value ?? null,
    getLocale: () => locale.value || 'en',
  })

  const authRepository = new HttpAuthRepository(api)
  const contentRepository = new HttpContentRepository(api)

  return {
    provide: {
      api: api as $Fetch,
      authRepository: authRepository as AuthRepository,
      contentRepository: contentRepository as ContentRepository,
    },
  }
})
