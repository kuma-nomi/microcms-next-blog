import type { CommonListResponse, Image } from '@/types/common'

export type Work = {
  id: string
  body: string
  title: string
  thumbnail: Image
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
}

export type WorksList = CommonListResponse<Work[]>
