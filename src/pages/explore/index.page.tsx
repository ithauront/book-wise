import { Sidebar } from '../../components/Sidebar/Sidebar.component'
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
import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'

interface Rating {
  id: string
  rate: number
  description: string
  created_at: Date
  book_id: string
  user_id: string
}

interface Book {
  id: string
  name: string
  author: string
  summary: string
  cover_url: string
  total_pages: number
  created_at: Date
  ratings: Rating[]
}

export default function Explore() {
  const { data: session } = useSession()
  const [selectedTopics, setSelectedTopics] = useState<string[]>([])
  const [books, setBooks] = useState<Book[]>([])

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
  }, [])

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
          {books.map((book) => {
            const averageRatings = book.ratings.length
              ? book.ratings.reduce((sum, rating) => sum + rating.rate, 0) /
                book.ratings.length
              : 0
            return (
              <BookBox
                key={book.id}
                bookCover={`/${book.cover_url}`}
                bookName={book.name}
                bookAuthor={book.author}
                reviewStarsTotal={averageRatings}
              />
            )
          })}
        </ExploreContent>
      </MainContainer>
    </ExploreContainer>
  )
}
