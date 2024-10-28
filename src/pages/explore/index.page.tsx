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
import { Book } from './explore.types'

export default function Explore() {
  const { data: session } = useSession()
  const [selectedTopics, setSelectedTopics] = useState<string[]>(['Todos'])
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

  const topics = [
    'Todos',
    ...Array.from(
      new Set(
        books.flatMap((book) =>
          book.categories.map((cat) => cat.category.name),
        ),
      ),
    ),
  ]

  const handleTopicClick = (topic: string) => {
    if (topic === 'Todos') {
      setSelectedTopics(['Todos'])
    } else {
      setSelectedTopics((prev) =>
        prev.includes(topic)
          ? prev.filter((t) => t !== topic)
          : [...prev.filter((t) => t !== 'Todos'), topic],
      )
    }
  }

  const filtredBooks = selectedTopics.includes('Todos')
    ? books
    : books.filter((book) =>
        book.categories.some((cat) =>
          selectedTopics.includes(cat.category.name),
        ),
      )

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
          {filtredBooks.map((book) => {
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
                isExplore
              />
            )
          })}
        </ExploreContent>
      </MainContainer>
    </ExploreContainer>
  )
}
