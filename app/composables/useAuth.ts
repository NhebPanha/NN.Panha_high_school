export type Role = 'STUDENT' | 'TEACHER' | 'PARENT' | 'ADMIN'

export interface SessionUser {
  id: number
  name: string
  role: Role
  avatarUrl?: string
}

interface LoginResponse {
  accessToken: string
  refreshToken: string
  expiresIn: number
  user: SessionUser
}

export const useAuthUser = () => useState<SessionUser | null>('auth-user', () => null)

/** Default landing route per role. */
export const dashboardFor = (role: Role): string =>
  ({
    STUDENT: '/portal/student',
    TEACHER: '/portal/teacher',
    PARENT: '/portal/parent',
    ADMIN: '/admin',
  })[role]

export function useAuth() {
  const api = useApi()
  const access = useCookie<string | null>('bfhs_access', { sameSite: 'lax', maxAge: 60 * 60 * 24 })
  const refresh = useCookie<string | null>('bfhs_refresh', { sameSite: 'lax', maxAge: 60 * 60 * 24 * 30 })
  const user = useAuthUser()

  const isAuthenticated = computed(() => !!access.value)

  async function login(email: string, password: string): Promise<SessionUser> {
    const res = await api<LoginResponse>('/auth/login', { method: 'POST', body: { email, password } })
    access.value = res.accessToken
    refresh.value = res.refreshToken
    user.value = res.user
    return res.user
  }

  async function fetchMe(): Promise<SessionUser | null> {
    if (!access.value || access.value === 'demo-token') return user.value
    try {
      user.value = await api<SessionUser>('/auth/me')
    } catch {
      user.value = null
    }
    return user.value
  }

  async function logout(): Promise<void> {
    try {
      if (access.value && access.value !== 'demo-token') await api('/auth/logout', { method: 'POST' })
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
