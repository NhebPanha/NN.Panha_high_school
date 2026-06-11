import type { $Fetch } from 'ofetch'

/** The shared, pre-configured API client (see plugins/api.ts). */
export const useApi = (): $Fetch => useNuxtApp().$api as $Fetch
