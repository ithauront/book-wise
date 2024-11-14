import dayjs from 'dayjs'

type Category = {
  name: string
  id: string
}

type BookProps = {
  id: string
  cover: string
  name: string
  author: string
  rate: number
  categories: Category[]
  totalPages: number
}

export type Rate = {
  userName: string
  userAvatar: string
  rate: number
  description: string
  createdAt: dayjs.Dayjs
}

export interface BookDetailsProps {
  isOpen: boolean
  onClose: () => void
  book: BookProps
  ratings: Rate[]
}
export interface RatingResponse {
  rate: number
  description: string
  created_at: string
  user: {
    name: string
    avatar_url: string
  } | null
}
