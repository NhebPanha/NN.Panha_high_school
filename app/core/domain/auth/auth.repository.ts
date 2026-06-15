// Repository PORT (interface) for authentication. The domain/application layers
// depend only on this contract; the concrete HTTP implementation lives in
// `app/infrastructure/repositories` and is injected at the composition root.
import type { AuthSession, Credentials, SessionUser } from './auth.entity'

export interface AuthRepository {
  login(credentials: Credentials): Promise<AuthSession>
  me(): Promise<SessionUser>
  logout(): Promise<void>
}
