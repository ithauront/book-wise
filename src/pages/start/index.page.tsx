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

import BookCover from '../../../public/assets/fragmentos-do-horror.png'
import { useSession } from 'next-auth/react'
import { BookBox } from '../../components/BookBox/BookBox.component'

export default function Sart() {
  const { data: session } = useSession()

  const user = session
    ? {
        name: session.user?.name || 'User',
        avatar: session.user?.image || undefined,
      }
    : null

  const bookBoxHeader = {
    userName: 'Iuri Reis',
    reviewDate: 'Hoje',
    avatarSrc:
      'https://avatars.githubusercontent.com/u/123806396?s=400&u=d8595c2dacae28530feec7e6cd8520d25368ab39&v=4',
    reviewStarsFromUser: 4,
  }
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
          <BookBox
            headerProps={bookBoxHeader}
            reviewText="   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
                  labore cumque consequatur quis eligendi, explicabo non
                  incidunt aspernatur aliquam rem maiores totam quasi
                  voluptates. Minima officiis deserunt asperiores magnam iusto."
            bookAuthor="Junji Ito"
            bookName="Fragmentos do horror"
            bookCover={BookCover.src}
            reviewStarsTotal={3}
          />
          <BookBox
            headerProps={bookBoxHeader}
            reviewText="   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
                  labore cumque consequatur quis eligendi, explicabo non
                  incidunt aspernatur aliquam rem maiores totam quasi
                  voluptates. Minima officiis deserunt asperiores magnam iusto."
            bookAuthor="Junji Ito"
            bookName="Fragmentos do horror"
            bookCover={BookCover.src}
            reviewStarsTotal={3}
          />
          <BookBox
            headerProps={bookBoxHeader}
            reviewText="   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
                  labore cumque consequatur quis eligendi, explicabo non
                  incidunt aspernatur aliquam rem maiores totam quasi
                  voluptates. Minima officiis deserunt asperiores magnam iusto."
            bookAuthor="Junji Ito"
            bookName="Fragmentos do horror"
            bookCover={BookCover.src}
            reviewStarsTotal={3}
          />{' '}
          <BookBox
            headerProps={bookBoxHeader}
            reviewText="   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
                labore cumque consequatur quis eligendi, explicabo non
                incidunt aspernatur aliquam rem maiores totam quasi
                voluptates. Minima officiis deserunt asperiores magnam iusto."
            bookAuthor="Junji Ito"
            bookName="Fragmentos do horror"
            bookCover={BookCover.src}
            reviewStarsTotal={3}
          />
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
          />

          <BookBox
            bookCover={BookCover.src}
            bookAuthor="Junji Ito"
            bookName="Fragmentos do horror"
            reviewStarsTotal={4}
          />
          <BookBox
            bookCover={BookCover.src}
            bookAuthor="Junji Ito"
            bookName="Fragmentos do horror"
            reviewStarsTotal={4}
          />
          <BookBox
            bookCover={BookCover.src}
            bookAuthor="Junji Ito"
            bookName="Fragmentos do horror"
            reviewStarsTotal={4}
          />
        </TrendingBooks>
      </AsideContainer>
    </StartContainer>
  )
}
