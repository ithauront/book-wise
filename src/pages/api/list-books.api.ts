// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../lib/prisma'

type Book = {
  id: string
  name: string
  author: string
  summary: string
  cover_url: string
  total_pages: number
  created_at: Date
}

type Data = {
  allBooks: Book[]
}

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const allBooks = await prisma.book.findMany()

  res.status(200).json({ allBooks })
}
