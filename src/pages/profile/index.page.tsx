import { Sidebar } from '../../components/Sidebar/Sidebar.component'
import {
  MainContainer,
  MyBooks,
  StartContainer,
  StyledChartLineUp,
  SessionTitle,
  AsideContainer,
} from '../start/styles'
// TODO fazer o mybooks com a estilização para o perfil que é um pouco diferente

import { getSession, useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import { Rating } from '../types'
import { BookBox } from '../../components/BookBox/BookBox.component'
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import relativeTime from 'dayjs/plugin/relativeTime'
import { SearchBar } from '../../components/SearchBar/SearchBar'
import { Profilebar } from '../../components/Profilebar/Profilebar.component'
import { useUser } from '../../context/UserContext'
import { GetServerSideProps } from 'next'

export default function Profile() {
  dayjs.extend(relativeTime)
  dayjs.locale('pt-br')
  const [userRatings, setUserRatings] = useState<Rating[]>([])
  const [showAllUserRatings, setShowAllUserRatings] = useState(false)
  const [searchTerm, setSearchTerm] = useState<string>('')
  const { data: session } = useSession()

  const { user } = useUser()
  console.log(user)
  useEffect(() => {
    const listRatings = async () => {
      try {
        const response = await api.get('/list-ratings')
        const allRatings = response.data.allRatings

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
      } catch (error) {
        console.error('Error fetching books:', error)
      }
    }
    listRatings()
  }, [user])

  const handleSearchSubmit = (data: { search: string }) => {
    setSearchTerm(data.search)
  }

  const formattedDate = (dateString: string | Date) => {
    const relativeTime = dayjs(dateString).fromNow()
    return relativeTime.charAt(0).toUpperCase() + relativeTime.slice(1)
  }

  return (
    <StartContainer>
      <Sidebar isLoggedIn={!!session} user={user} />

      <MainContainer>
        <p>
          <StyledChartLineUp size={32} />
          Perfil
        </p>

        <MyBooks>
          <SessionTitle>
            <SearchBar
              placeholder="Buscar livro avaliado"
              onSubmit={handleSearchSubmit}
            />
          </SessionTitle>
          {userRatings.length === 0 ? (
            <p>Você ainda não avaliou nenhum livro</p>
          ) : (
            userRatings
              .slice() // o metodo slice sem argumentos cria uma copia do array. assim o reverse não altera o array original.
              .reverse()
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
      </MainContainer>

      <AsideContainer>
        <Profilebar user={user} />
      </AsideContainer>
    </StartContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return { props: {} }
}
