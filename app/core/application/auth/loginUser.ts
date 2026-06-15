// Use case: authenticate a user. Orchestrates the domain via the injected port,
// staying free of any framework/HTTP detail.
import type { AuthRepository } from '~/core/domain/auth/auth.repository'
import type { AuthSession, Credentials } from '~/core/domain/auth/auth.entity'

export function loginUser(repo: AuthRepository, credentials: Credentials): Promise<AuthSession> {
  return repo.login(credentials)
}
