import { Sidebar } from '../../components/Sidebar/Sidebar.component'

import { getSession } from 'next-auth/react'
import { useState } from 'react'
import { BookBox } from '../../components/BookBox/BookBox.component'
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import relativeTime from 'dayjs/plugin/relativeTime'
import { SearchBar } from '../../components/SearchBar/SearchBar'
import { Profilebar } from '../../components/Profilebar/Profilebar.component'
import { useUser } from '../../context/UserContext'
import { GetServerSideProps } from 'next'
import {
  AsideContainer,
  MainContainer,
  MyBooks,
  ProfileContainer,
  SessionTitle,
  StyledUser,
} from './styles'

export default function Profile() {
  dayjs.extend(relativeTime)
  dayjs.locale('pt-br')

  const [searchTerm, setSearchTerm] = useState<string>('')

  const { user } = useUser()

  const handleSearchSubmit = (data: { search: string }) => {
    setSearchTerm(data.search)
  }

  const filteredRatings =
    user?.Rating?.filter((rating) =>
      rating.book?.name
        .toLocaleLowerCase()
        .includes(searchTerm.toLocaleLowerCase()),
    ) || []

  const formattedDate = (dateString: string | Date) => {
    const relativeTime = dayjs(dateString).fromNow()
    return relativeTime.charAt(0).toUpperCase() + relativeTime.slice(1)
  }
  return (
    <ProfileContainer>
      <Sidebar isLoggedIn={!!user} user={user} />

      <MainContainer>
        <p>
          <StyledUser size={32} />
          Perfil
        </p>

        <MyBooks>
          <SessionTitle>
            <SearchBar
              placeholder="Buscar livro avaliado"
              onSubmit={handleSearchSubmit}
              isProfile
            />
          </SessionTitle>
          {filteredRatings.length === 0 ? (
            <p>Você ainda não avaliou nenhum livro</p>
          ) : (
            filteredRatings
              .slice()
              .reverse()
              .map((rating) => (
                <div key={rating.id}>
                  <p>{formattedDate(rating.created_at)}</p>
                  <BookBox
                    bookName={rating.book?.name || ''}
                    bookAuthor={rating.book?.author || ''}
                    bookCover={`/${rating.book?.cover_url || ''}`}
                    reviewStarsTotal={rating.rate}
                    reviewText={rating.description}
                    isProfile
                  />
                </div>
              ))
          )}
        </MyBooks>
      </MainContainer>

      <AsideContainer>
        <Profilebar user={user} />
      </AsideContainer>
    </ProfileContainer>
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
