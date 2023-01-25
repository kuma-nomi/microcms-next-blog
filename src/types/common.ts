export type CommonListResponse<T> = {
  totalCount: number
  offset: number
  limit: number
  contents: T
}
