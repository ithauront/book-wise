// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../lib/prisma'
import { Rating } from '../types'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse<{ allRatings: Rating[] } | { error: string }>,
) {
  try {
    const allRatings = await prisma.rating.findMany({
      select: {
        id: true,
        rate: true,
        description: true,
        created_at: true,
        book: {
          select: {
            id: true,
            name: true,
            author: true,
            summary: true,
            cover_url: true,
          },
        },
        user: {
          select: {
            name: true,
            avatar_url: true,
            created_at: true,
          },
        },
      },
    })
    res.status(200).json({ allRatings })
  } catch (error) {
    res.status(500).json({ error: `Erro ao buscar avaliações: ${error}` })
  }
}
