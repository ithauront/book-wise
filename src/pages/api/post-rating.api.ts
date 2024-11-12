import { getServerSession } from 'next-auth'
import { prisma } from '../../lib/prisma'
import { authOptions } from './auth/[...nextauth].api'
import { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'

const ratingBodySchema = z.object({
  rating: z.object({
    rate: z.number().min(0).max(5),
    description: z.string().max(450),
    book_id: z.string(),
  }),
})

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const session = await getServerSession(req, res, authOptions)

  if (!session) {
    return res.status(401).json({ error: 'Usuário não autenticado' })
  }

  try {
    const { rating } = ratingBodySchema.parse(req.body)
    await prisma.rating.create({
      data: {
        user_id: session.user.id,
        book_id: rating.book_id,
        description: rating.description,
        rate: rating.rate,
      },
    })
    return res.status(201).end()
  } catch (error) {
    console.error('Erro ao criar avaliação:', error)
    if (error instanceof z.ZodError) {
      return res
        .status(400)
        .json({ error: 'Dados inválidos', details: error.errors })
    }
    return res.status(500).json({ error: 'Erro ao postar avaliação' })
  }
}
