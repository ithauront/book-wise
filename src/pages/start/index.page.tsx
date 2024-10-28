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
import { Book } from '../explore/explore.types'

export default function Sart() {
  const { data: session } = useSession()
  const [books, setBooks] = useState<Book[]>([])

  const user = session
    ? {
        name: session.user?.name || 'User',
        avatar: session.user?.avatar_url || undefined,
      }
    : null

  const bookBoxHeader = {
    userName: 'Iuri Reis',
    reviewDate: 'Hoje',
    avatarSrc:
      'https://avatars.githubusercontent.com/u/123806396?s=400&u=d8595c2dacae28530feec7e6cd8520d25368ab39&v=4',
    reviewStarsFromUser: 4,
  } // TODO ver de onde pegar essas infos. talvez o ideal seja pegar os ratings assim temos o createdAt e o bookque foi avaliado e quem avaliou. com isso podemos pegar o id do book e fazer a chamada para ter as infos do book, e tambem o id do autor e fazer as chamadas para ter o id do autor. assim podemos listar o que aparece na ordem de createdAtt dos ratings, e compor o bookBox com as infos do livro do rating e do user. ps por enquanto os ratings no seed não tem createdAt. talvez a gente tenha que depois de fazer a logica para dar rating ajustar isso. ou talvez adicionar manualmente por enquanto.

  useEffect(() => {
    const listBooks = async () => {
      try {
        const response = await api.get('/list-books')
        setBooks(response.data.allBooks)
      } catch (error) {
        console.error('Error fetching books:', error)
      }
    }
    listBooks()
  }, []) // TODO rever a chamara porque ele precisa listar as atualizaçãoes recentes.

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
          {books.map((book) => {
            const averageRatings = book.ratings.length
              ? book.ratings.reduce((sum, rating) => sum + rating.rate, 0) /
                book.ratings.length
              : 0
            return (
              <BookBox
                headerProps={bookBoxHeader}
                key={book.id}
                reviewText={book.summary}
                bookCover={`/${book.cover_url}`}
                bookName={book.name}
                bookAuthor={book.author}
                reviewStarsTotal={averageRatings}
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
