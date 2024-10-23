import { Sidebar } from '../../components/Sidebar/Sidebar.component'
import BookCover from '../../../public/assets/fragmentos-do-horror.png'
import { useSession } from 'next-auth/react'
import {
  ExploreContainer,
  ExploreContent,
  MainContainer,
  SearchTopicsContainer,
  StyledBinocular,
  TitleContainer,
} from './styles'
import { SearchBar } from '../../components/SearchBar/SearchBar'
import { BookBox } from '../../components/BookBox/BookBox.component'
import { SearchTopic } from '../../components/SearchTopics/SearchTopics.component'
import { useState } from 'react'

export default function Explore() {
  const { data: session } = useSession()
  const [selectedTopics, setSelectedTopics] = useState<string[]>([])

  const user = session
    ? {
        name: session.user?.name || 'User',
        avatar: session.user?.image || undefined,
      }
    : null

  const handleTopicClick = (topic: string) => {
    setSelectedTopics((prev) =>
      prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic],
    )
  }

  const topics = [
    'Tudo',
    'Computação',
    'Educação',
    'Fantasia',
    'Ficção científica',
    'Horror',
    'HQs',
    'Suspense',
  ] // TODO mudar isso para uma chamada nas categories do constant do database.
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
        <SearchTopicsContainer>
          {topics.map((topic) => (
            <SearchTopic
              key={topic}
              content={topic}
              isSelected={selectedTopics.includes(topic)}
              onClick={() => handleTopicClick(topic)}
            />
          ))}
        </SearchTopicsContainer>

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
