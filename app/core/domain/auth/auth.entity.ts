// Auth domain entities & value types — pure TypeScript, no Nuxt/Vue/HTTP here.
// This is the innermost layer: it depends on nothing else in the app.

export type Role = 'STUDENT' | 'TEACHER' | 'PARENT' | 'ADMIN'

export interface SessionUser {
  id: number
  name: string
  role: Role
  avatarUrl?: string
}

/** Credentials a user submits to authenticate. */
export interface Credentials {
  email: string
  password: string
}

/** The session returned by the backend after a successful login. */
export interface AuthSession {
  accessToken: string
  refreshToken: string
  expiresIn: number
  user: SessionUser
}
