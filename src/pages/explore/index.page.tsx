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
import { Book } from '../types'
import { BookDetails } from '../../components/BookDetails/BookDetails.component'
import dayjs from 'dayjs'
import { useUser } from '../../context/UserContext'

export default function Explore() {
  const { data: session } = useSession()
  const [selectedTopics, setSelectedTopics] = useState<string[]>(['Todos'])
  const [books, setBooks] = useState<Book[]>([])
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [isBookInfoOpen, setIsBookInfoOpen] = useState(false)
  const [selectedBook, setSelectedBook] = useState<Book | null>(null)

  const { user } = useUser()

  const handleBookBoxClick = (book: Book) => {
    setSelectedBook(book)
    setIsBookInfoOpen(true)
  }

  const handleBookInfoBox = () => {
    setIsBookInfoOpen(false)
  }

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
        books
          .flatMap((book) => book.categories || [])
          .map((cat) => cat.category.name)
          .filter((name): name is string => !!name),
      ),
    ),
  ]

  const handleTopicClick = (topic: string) => {
    setSearchTerm('')
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

  const handleSearchSubmit = (data: { search: string }) => {
    setSearchTerm(data.search)
    setSelectedTopics(['Todos'])
  }

  const filtredBooks = books.filter((book) => {
    const matchesTopic =
      selectedTopics.includes('Todos') ||
      book.categories?.some((cat) =>
        selectedTopics.includes(cat.category.name || ''),
      )

    const matchesSearchTerm =
      searchTerm === '' ||
      book.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())

    return matchesTopic && matchesSearchTerm
  })

  return (
    <>
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
              onSubmit={handleSearchSubmit}
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
              const averageRatings = book.ratings?.length
                ? book.ratings.reduce((sum, rating) => sum + rating.rate, 0) /
                  book.ratings.length
                : 0

              const bookDetails = {
                id: book.id,
                cover: `/${book.cover_url}`,
                name: book.name,
                author: book.author,
                rate: averageRatings,
                categories: (book.categories || []).map((cat) => ({
                  name: cat.category.name,
                  id: cat.category.id,
                })),
                totalPages: book.total_pages || 0,
              }

              const ratings = (book.ratings || []).map((rating) => ({
                userName: rating.user?.name || 'Anônimo',
                userAvatar: rating.user?.avatar_url || '',
                rate: rating.rate,
                description: rating.description || '',
                createdAt: dayjs(rating.created_at),
              }))

              return (
                <>
                  <BookBox
                    key={book.id}
                    bookCover={`/${book.cover_url}`}
                    bookName={book.name}
                    bookAuthor={book.author}
                    reviewStarsTotal={averageRatings}
                    isExplore
                    openBookInfo={() => handleBookBoxClick(book)}
                  />
                  <BookDetails
                    isOpen={isBookInfoOpen && selectedBook?.id === book.id}
                    onClose={handleBookInfoBox}
                    book={bookDetails}
                    ratings={ratings}
                  />
                </>
              )
            })}
          </ExploreContent>
        </MainContainer>
      </ExploreContainer>
    </>
  )
}
