import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../lib/prisma'
import { Rating } from '../../types'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse<{ ratings: Rating[] } | { error: string }>,
) {
  const { bookId } = req.query

  if (typeof bookId !== 'string') {
    return res.status(400).json({ error: 'Book ID inválido' })
  }

  try {
    const ratings = await prisma.rating.findMany({
      where: { book_id: bookId },
      select: {
        id: true,
        rate: true,
        description: true,
        created_at: true,
        user: {
          select: {
            name: true,
            avatar_url: true,
          },
        },
      },
    })

    res.status(200).json({ ratings })
  } catch (error) {
    res.status(500).json({ error: `Erro ao buscar avaliações: ${error}` })
  }
}
