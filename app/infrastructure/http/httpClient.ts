import type { $Fetch } from 'ofetch'

// Infrastructure: builds the single configured `$fetch` instance used to talk to
// the Spring Boot backend. It injects the API base URL, the bearer token and the
// active language, and normalises errors. Token/locale are read lazily via
// callbacks so this stays decoupled from Nuxt's reactivity (wired in plugins/api.ts).
export interface HttpClientOptions {
  baseURL: string
  getToken: () => string | null
  getLocale: () => string
}

export function createHttpClient(opts: HttpClientOptions): $Fetch {
  return $fetch.create({
    baseURL: opts.baseURL,
    retry: 0,
    onRequest({ options }) {
      const headers = new Headers(options.headers as HeadersInit)
      headers.set('Accept-Language', opts.getLocale() || 'en')
      const token = opts.getToken()
      if (token) headers.set('Authorization', `Bearer ${token}`)
      options.headers = headers
    },
    onResponseError({ response }) {
      // 401 handling (token expiry) is performed by useAuth on the client.
      if (import.meta.dev && response?.status) {
        console.debug(`[api] ${response.status} ${response.url}`)
      }
    },
  }) as $Fetch
}
