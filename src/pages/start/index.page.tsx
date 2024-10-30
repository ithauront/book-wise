import { Sidebar } from '../../components/Sidebar/Sidebar.component'
import {
  TrendingBooks,
  MainContainer,
  MyBooks,
  StartContainer,
  StyledChartLineUp,
  SessionTitle,
  AsideContainer,
} from './styles'

import BookCover from '../../../public/images/books/fragmentos-do-horror.png'
import { useSession } from 'next-auth/react'
import { BookBox } from '../../components/BookBox/BookBox.component'
import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import { Rating } from '../types'

export default function Sart() {
  const { data: session } = useSession()
  const [ratings, setRatings] = useState<Rating[]>([])
  const [averageRatings, setAverageRatings] = useState<{
    [bookId: string]: number
  }>({})

  const user = session
    ? {
        name: session.user?.name || 'User',
        avatar: session.user?.avatar_url || undefined,
      }
    : null

  useEffect(() => {
    const listRatings = async () => {
      try {
        const response = await api.get('/list-ratings')
        const allRatings = response.data.allRatings
        setRatings(allRatings)

        const ratingsSums: {
          [bookId: string]: { sum: number; count: number }
        } = {}

        allRatings.forEach((rating: Rating) => {
          const bookId = rating.book?.id
          if (bookId) {
            if (!ratingsSums[bookId]) {
              ratingsSums[bookId] = { sum: 0, count: 0 }
            }
            ratingsSums[bookId].sum += rating.rate
            ratingsSums[bookId].count += 1
          }
        })

        const averages: { [bookId: string]: number } = {}
        for (const bookId in ratingsSums) {
          averages[bookId] = ratingsSums[bookId].sum / ratingsSums[bookId].count
        }

        setAverageRatings(averages)
      } catch (error) {
        console.error('Error fetching books:', error)
      }
    }
    listRatings()
  }, [])

  return (
    <StartContainer>
      <Sidebar isLoggedIn={!!session} user={user} />

      <MainContainer>
        <p>
          <StyledChartLineUp size={32} />
          Início
        </p>
        <MyBooks>
          <SessionTitle>
            <p>Adiçoes recentes</p>
            <a>Ver todos &gt; </a>
          </SessionTitle>
          {ratings.map((rating) => {
            const {
              user,
              book,
              rate,
              description,
              created_at: createdAt,
            } = rating

            if (!book) {
              console.error(
                `Livro não encontrado para a avaliação com ID ${rating.id}`,
              )
              return null
            }

            const headerProps = {
              userName: user?.name || 'usuario',
              reviewDate: new Date(createdAt).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
              }),
              avatarSrc: user?.avatar_url || '',
              reviewStarsFromUser: rate,
            }

            const averageRatingForBook = averageRatings[book.id] || 0
            console.log(averageRatings, book)

            return (
              <BookBox
                headerProps={headerProps}
                key={rating.id}
                reviewText={description}
                bookCover={`/${book.cover_url}`}
                bookName={book.name}
                bookAuthor={book.author}
                reviewStarsTotal={averageRatingForBook}
              />
            )
          })}
        </MyBooks>
      </MainContainer>

      <AsideContainer>
        <SessionTitle>
          <p>Livros populares</p>
          <a>Ver todos &gt; </a>
        </SessionTitle>
        <TrendingBooks>
          <BookBox
            bookCover={BookCover.src}
            bookAuthor="Junji Ito"
            bookName="Fragmentos do horror"
            reviewStarsTotal={4}
            isSummary
          />

          <BookBox
            bookCover={BookCover.src}
            bookAuthor="Junji Ito"
            bookName="Fragmentos do horror"
            reviewStarsTotal={4}
            isSummary
          />
          <BookBox
            bookCover={BookCover.src}
            bookAuthor="Junji Ito"
            bookName="Fragmentos do horror"
            reviewStarsTotal={4}
            isSummary
          />
          <BookBox
            bookCover={BookCover.src}
            bookAuthor="Junji Ito"
            bookName="Fragmentos do horror"
            reviewStarsTotal={4}
            isSummary
          />
        </TrendingBooks>
      </AsideContainer>
    </StartContainer>
  )
}
