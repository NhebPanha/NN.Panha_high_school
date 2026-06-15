// Repository PORT for CMS/content fetching. Generic over the shape each caller
// expects, so pages declare their own content types at the presentation edge.
export interface ContentRepository {
  fetch<T>(path: string): Promise<T>
}
