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
    })

    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }

    res.status(200).json({ user })
  } catch (error) {
    res.status(500).json({ error: `Erro ao buscar avaliações: ${error}` })
  }
}
