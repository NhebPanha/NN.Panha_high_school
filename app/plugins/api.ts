import type { $Fetch } from 'ofetch'

// Single configured $fetch instance shared across the app. Injects the API base
// URL, the bearer token, and the active language; normalises errors. Available as
// `useApi()` or `useNuxtApp().$api`.
export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const locale = useLocale() // cookie-backed ref (en | km)
  const access = useCookie<string | null>('bfhs_access')

  const api = $fetch.create({
    baseURL: config.public.apiBase,
    retry: 0,
    onRequest({ options }) {
      const headers = new Headers(options.headers as HeadersInit)
      headers.set('Accept-Language', locale.value || 'en')
      if (access.value) headers.set('Authorization', `Bearer ${access.value}`)
      options.headers = headers
    },
    onResponseError({ response }) {
      // 401 handling (token expiry) is performed by useAuth on the client.
      if (import.meta.dev && response?.status) {
        console.debug(`[api] ${response.status} ${response.url}`)
      }
    },
  })

  return { provide: { api: api as $Fetch } }
})
