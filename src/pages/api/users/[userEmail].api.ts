import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../lib/prisma'
import { User } from '../../types'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse<{ user: User } | { error: string }>,
) {
  const { userEmail } = req.query

  if (typeof userEmail !== 'string') {
    return res.status(400).json({ error: 'userEmail inválido' })
  }

  try {
    const user = await prisma.user.findFirst({
      where: {
        email: userEmail,
      },
      select: {
        id: true,
        name: true,
        avatar_url: true,
        created_at: true,
        email: true,
        Rating: {
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
                total_pages: true,
                categories: {
                  select: {
                    category: {
                      select: {
                        id: true,
                        name: true,
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    })

    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }

    res.status(200).json({ user })
  } catch (error) {
    res.status(500).json({ error: `Erro ao buscar avaliações: ${error}` })
  }
}
