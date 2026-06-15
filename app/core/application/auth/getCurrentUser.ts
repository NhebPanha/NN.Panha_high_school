// Use case: load the currently authenticated user.
import type { AuthRepository } from '~/core/domain/auth/auth.repository'
import type { SessionUser } from '~/core/domain/auth/auth.entity'

export function getCurrentUser(repo: AuthRepository): Promise<SessionUser> {
  return repo.me()
}
