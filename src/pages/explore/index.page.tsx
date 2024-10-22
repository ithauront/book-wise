import { Sidebar } from '../../components/Sidebar/Sidebar.component'
import BookCover from '../../../public/assets/fragmentos-do-horror.png'
import { useSession } from 'next-auth/react'
import {
  ExploreContainer,
  ExploreContent,
  MainContainer,
  StyledBinocular,
  TitleContainer,
} from './styles'
import { SearchBar } from '../../components/SearchBar/SearchBar'
import { BookBox } from '../../components/BookBox/BookBox.component'

export default function Explore() {
  const { data: session } = useSession()

  const user = session
    ? {
        name: session.user?.name || 'User',
        avatar: session.user?.image || undefined,
      }
    : null

  return (
    <ExploreContainer>
      <Sidebar isLoggedIn={!!session} user={user} />

      <MainContainer>
        <TitleContainer>
          <p>
            <StyledBinocular size={32} />
            Explorar
          </p>
          <SearchBar
            placeholder="Buscar livro ou autor"
            onSubmit={() => console.log('buscado')}
          />
        </TitleContainer>
        <div>Badges</div>
        <ExploreContent>
          <BookBox
            bookCover={BookCover.src}
            bookName="Fragmentos do horror"
            bookAuthor="Junji Ito"
            reviewStarsTotal={3}
          />
          <BookBox
            bookCover={BookCover.src}
            bookName="Fragmentos do horror"
            bookAuthor="Junji Ito"
            reviewStarsTotal={3}
          />

          <BookBox
            bookCover={BookCover.src}
            bookName="Fragmentos do horror"
            bookAuthor="Junji Ito"
            reviewStarsTotal={3}
          />
          <BookBox
            bookCover={BookCover.src}
            bookName="Fragmentos do horror"
            bookAuthor="Junji Ito"
            reviewStarsTotal={3}
          />
          <BookBox
            bookCover={BookCover.src}
            bookName="Fragmentos do horror"
            bookAuthor="Junji Ito"
            reviewStarsTotal={3}
          />
          <BookBox
            bookCover={BookCover.src}
            bookName="Fragmentos do horror"
            bookAuthor="Junji Ito"
            reviewStarsTotal={3}
          />
          <BookBox
            bookCover={BookCover.src}
            bookName="Fragmentos do horror"
            bookAuthor="Junji Ito"
            reviewStarsTotal={3}
          />
          <BookBox
            bookCover={BookCover.src}
            bookName="Fragmentos do horror"
            bookAuthor="Junji Ito"
            reviewStarsTotal={3}
          />
          <BookBox
            bookCover={BookCover.src}
            bookName="Fragmentos do horror"
            bookAuthor="Junji Ito"
            reviewStarsTotal={3}
          />
          <BookBox
            bookCover={BookCover.src}
            bookName="Fragmentos do horror"
            bookAuthor="Junji Ito"
            reviewStarsTotal={3}
          />
          <BookBox
            bookCover={BookCover.src}
            bookName="Fragmentos do horror"
            bookAuthor="Junji Ito"
            reviewStarsTotal={3}
          />
          <BookBox
            bookCover={BookCover.src}
            bookName="Fragmentos do horror"
            bookAuthor="Junji Ito"
            reviewStarsTotal={3}
          />
        </ExploreContent>
      </MainContainer>
    </ExploreContainer>
  )
}
