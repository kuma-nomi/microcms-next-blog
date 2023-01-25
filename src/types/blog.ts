import type { CommonListResponse } from '@/types/common'

export type Blog = {
  id: string
  body: string
  title: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
}

export type BlogList = CommonListResponse<Blog[]>
