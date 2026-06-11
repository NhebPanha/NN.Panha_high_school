// Protects portal/admin routes. Add `middleware: 'auth'` to a page's
// definePageMeta. Redirects to the login page (preserving the target) when no
// session token is present.
export default defineNuxtRouteMiddleware((to) => {
  const access = useCookie<string | null>('bfhs_access')
  if (!access.value) {
    return navigateTo({ path: '/portal/login', query: { redirect: to.fullPath } })
  }
})
