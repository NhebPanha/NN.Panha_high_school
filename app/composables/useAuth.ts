import type { AuthRepository } from '~/core/domain/auth/auth.repository'
import type { Role, SessionUser } from '~/core/domain/auth/auth.entity'
import { dashboardFor } from '~/core/domain/auth/auth.policy'
import { loginUser } from '~/core/application/auth/loginUser'
import { getCurrentUser } from '~/core/application/auth/getCurrentUser'
import { logoutUser } from '~/core/application/auth/logoutUser'

// Presentation adapter: bridges Vue/Nuxt reactivity (cookies, shared state) to
// the framework-agnostic auth use cases. Re-exports the domain pieces that
// templates rely on so they remain auto-importable across the app.
export type { Role, SessionUser }
export { dashboardFor }

export const useAuthUser = () => useState<SessionUser | null>('auth-user', () => null)

export function useAuth() {
  const repo = useNuxtApp().$authRepository as AuthRepository
  const access = useCookie<string | null>('bfhs_access', { sameSite: 'lax', maxAge: 60 * 60 * 24 })
  const refresh = useCookie<string | null>('bfhs_refresh', { sameSite: 'lax', maxAge: 60 * 60 * 24 * 30 })
  const user = useAuthUser()

  const isAuthenticated = computed(() => !!access.value)

  async function login(email: string, password: string): Promise<SessionUser> {
    const session = await loginUser(repo, { email, password })
    access.value = session.accessToken
    refresh.value = session.refreshToken
    user.value = session.user
    return session.user
  }

  async function fetchMe(): Promise<SessionUser | null> {
    if (!access.value || access.value === 'demo-token') return user.value
    try {
      user.value = await getCurrentUser(repo)
    } catch {
      user.value = null
    }
    return user.value
  }

  async function logout(): Promise<void> {
    try {
      if (access.value && access.value !== 'demo-token') await logoutUser(repo)
    } catch {
      /* ignore network errors on logout */
    }
    access.value = null
    refresh.value = null
    user.value = null
  }

  /**
   * Demo session for exploring the portals before the backend exists.
   * Sets a sentinel token so route middleware passes. Remove once the API is live.
   */
  function demoLogin(role: Role): SessionUser {
    access.value = 'demo-token'
    user.value = { id: 0, name: `Demo ${role.charAt(0)}${role.slice(1).toLowerCase()}`, role }
    return user.value
  }

  return { user, access, isAuthenticated, login, fetchMe, logout, demoLogin }
}
