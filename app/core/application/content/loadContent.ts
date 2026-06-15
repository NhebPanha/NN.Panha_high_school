// Use case: fetch a content document by API path.
import type { ContentRepository } from '~/core/domain/content/content.repository'

export function loadContent<T>(repo: ContentRepository, path: string): Promise<T> {
  return repo.fetch<T>(path)
}
