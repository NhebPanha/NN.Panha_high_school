// Use case: end the current session on the backend.
import type { AuthRepository } from '~/core/domain/auth/auth.repository'

export function logoutUser(repo: AuthRepository): Promise<void> {
  return repo.logout()
}
