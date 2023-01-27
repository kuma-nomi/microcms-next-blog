export type CommonListResponse<T> = {
  totalCount: number
  offset: number
  limit: number
  contents: T
}

export type Image = {
  url: string
  height: number
  width: number
}
