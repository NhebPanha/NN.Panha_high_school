import type { $Fetch } from 'ofetch'
import type { AuthRepository } from '~/core/domain/auth/auth.repository'
import type { AuthSession, Credentials, SessionUser } from '~/core/domain/auth/auth.entity'

// Concrete AuthRepository backed by the HTTP API. The only place that knows the
// auth endpoint shapes; everything above depends on the AuthRepository port.
export class HttpAuthRepository implements AuthRepository {
  constructor(private readonly http: $Fetch) {}

  login(credentials: Credentials): Promise<AuthSession> {
    return this.http<AuthSession>('/auth/login', { method: 'POST', body: credentials })
  }

  me(): Promise<SessionUser> {
    return this.http<SessionUser>('/auth/me')
  }

  async logout(): Promise<void> {
    await this.http('/auth/logout', { method: 'POST' })
  }
}
