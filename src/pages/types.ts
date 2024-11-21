export interface User {
  id: string
  name: string | null
  avatar_url: string | null
  created_at: Date | null
  email: string | null
  // eslint-disable-next-line no-use-before-define
  Rating?: Rating[]
}

export interface Category {
  id: string
  name: string
}

export interface UserForRating {
  name: string | null
  avatar_url: string | null
  created_at?: Date
}

export interface Rating {
  id: string
  rate: number
  description: string
  created_at: Date
  // eslint-disable-next-line no-use-before-define
  book?: Book
  user?: UserForRating
}

export interface Book {
  id: string
  name: string
  author: string
  summary?: string
  cover_url?: string
  total_pages?: number
  created_at?: Date
  ratings?: Rating[]
  categories?: { category: Category }[]
}
