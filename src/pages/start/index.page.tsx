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

import { useSession } from 'next-auth/react'
import { BookBox } from '../../components/BookBox/BookBox.component'
import { useEffect, useMemo, useState } from 'react'
import { api } from '../../lib/axios'
import { Rating } from '../types'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/pt-br'

export default function Sart() {
  dayjs.extend(relativeTime)
  dayjs.locale('pt-br')
  const { data: session } = useSession()
  const [ratings, setRatings] = useState<Rating[]>([])
  const [userRatings, setUserRatings] = useState<Rating[]>([])
  const [averageRatings, setAverageRatings] = useState<{
    [bookId: string]: number
  }>({})
  const [showAllRatings, setShowAllRatings] = useState(false)
  const [showAllTrending, setShowAllTrending] = useState(false)
  const [showAllUserRatings, setShowAllUserRatings] = useState(false)

  // TODO fazer a estilização correta do bookbox com a variavel para quando é leitura do usuario
  const user = useMemo(() => {
    return session
      ? {
          name: session.user?.name || 'User',
          avatar: session.user?.avatar_url || undefined,
        }
      : null
  }, [session])

  useEffect(() => {
    const listRatings = async () => {
      try {
        const response = await api.get('/list-ratings')
        const allRatings = response.data.allRatings
        setRatings(allRatings)

        if (user) {
          const userRatingsFiltered = allRatings.filter(
            (rating: Rating) => rating.user?.name === user.name,
          )
          setUserRatings(userRatingsFiltered)
        }

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
  }, [user])

  const formattedDate = (dateString: string | Date) =>
    dayjs(dateString).fromNow()

  return (
    <StartContainer>
      <Sidebar isLoggedIn={!!session} user={user} />

      <MainContainer>
        <p>
          <StyledChartLineUp size={32} />
          Início
        </p>
        {user && (
          <MyBooks>
            <SessionTitle>
              <p>
                {showAllUserRatings
                  ? 'Todas suas leituras'
                  : 'Sua última leitura'}
              </p>
              <a onClick={() => setShowAllUserRatings(!showAllUserRatings)}>
                {showAllUserRatings ? 'Ver menos' : 'Ver todas'} &gt;
              </a>
            </SessionTitle>
            {userRatings.length === 0 ? (
              <p>Você ainda não avaliou nenhum livro</p>
            ) : (
              userRatings
                .slice(0, showAllUserRatings ? userRatings.length : 1)
                .map((rating) => (
                  <BookBox
                    key={rating.id}
                    bookName={rating.book?.name || ''}
                    bookAuthor={rating.book?.author || ''}
                    bookCover={`/${rating.book?.cover_url || ''}`}
                    reviewStarsTotal={rating.rate}
                    reviewText={rating.description}
                    reviewDate={formattedDate(rating.created_at)}
                    isUserReview
                  />
                ))
            )}
          </MyBooks>
        )}
        <MyBooks>
          <SessionTitle>
            <p>Adiçoes recentes</p>
            <a onClick={() => setShowAllRatings(!showAllRatings)}>
              {showAllRatings ? 'Ver menos' : 'Ver todos'} &gt;
            </a>
          </SessionTitle>
          {ratings
            .slice(0, showAllRatings ? ratings.length : 4)
            .map((rating) => {
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
                  reviewDate={formattedDate(createdAt)}
                />
              )
            })}
        </MyBooks>
      </MainContainer>

      <AsideContainer>
        <SessionTitle>
          <p>Livros populares</p>
          <a onClick={() => setShowAllTrending(!showAllTrending)}>
            {showAllTrending ? 'Ver menos' : 'Ver todos'} &gt;
          </a>
        </SessionTitle>
        <TrendingBooks>
          {ratings
            .sort((a, b) => a.rate - b.rate)
            .slice(0, showAllTrending ? ratings.length : 4)
            .map((ratingsSorted) => {
              const { rate, id } = ratingsSorted
              const {
                cover_url: coverUrl,
                name,
                author,
              } = ratingsSorted.book || {}
              return (
                <BookBox
                  key={id}
                  bookCover={coverUrl ? `/${coverUrl}` : ''}
                  bookAuthor={author || ''}
                  bookName={name || ''}
                  reviewStarsTotal={rate}
                  isSummary
                />
              )
            })}
        </TrendingBooks>
      </AsideContainer>
    </StartContainer>
  )
}
