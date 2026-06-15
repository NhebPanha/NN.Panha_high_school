import type { $Fetch } from 'ofetch'
import type { ContentRepository } from '~/core/domain/content/content.repository'

// Concrete ContentRepository backed by the HTTP API.
export class HttpContentRepository implements ContentRepository {
  constructor(private readonly http: $Fetch) {}

  fetch<T>(path: string): Promise<T> {
    return this.http<T>(path)
  }
}
