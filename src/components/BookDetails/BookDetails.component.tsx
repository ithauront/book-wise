import {
  BookDetailsContainer,
  BookInfoContainer,
  BookInfoFooter,
  BookInfoMain,
  CommentBox,
  CommentBoxesContainer,
  CommentsHeader,
} from './styles'
import { CloseButton } from '../CloseButton/CloseButton.components'
import { BookmarkSimple, BookOpen } from 'phosphor-react'
import Image from 'next/image'
import { StarReview } from '../StarReview/StarReview.component'
import { BookBoxHeader } from '../BookBox/styles'
import { Avatar } from '../Avatar/Avatar.component'
import { Portal } from '../Portal/Portal.component'
import { Overlay } from '../Modal/styles'
import { useEffect, useMemo, useState } from 'react'
import { useSession } from 'next-auth/react'
import { TextInput } from '../TextInput/TextInput.component'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/pt-br'

type Category = {
  name: string
  id: string
}

type BookProps = {
  cover: string
  name: string
  author: string
  rate: number
  categories: Category[]
  totalPages: number
}

type Rate = {
  userName: string
  userAvatar: string
  rate: string
  description: string
  createdAt: dayjs.Dayjs
}

interface BookDetailsProps {
  isOpen: boolean
  onClose: () => void
  book: BookProps
  ratings: Rate[]
}

export function BookDetails({
  ratings,
  book,
  onClose,
  isOpen,
}: BookDetailsProps) {
  dayjs.extend(relativeTime).locale('pt-BR')
  const { data: session } = useSession()
  const [openReview, setOpenReview] = useState(false)
  const categoryNames = book.categories.map((cat) => cat.name).join(', ')

  const user = useMemo(() => {
    return session
      ? {
          name: session.user?.name || 'User',
          avatar: session.user?.avatar_url || undefined,
        }
      : null
  }, [session])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  if (!isOpen) {
    return null
  }

  const sortedRecentRatings = [...ratings].sort((a, b) =>
    b.createdAt.diff(a.createdAt),
  )

  const handleReviewClick = () => {
    setOpenReview(true)
    console.log(openReview)
  }

  const handleComment = () => {
    console.log('hello')
    setOpenReview(false) // para lembrar que apos ele dar o post no comentario ele vai fechar a parte de comentario e o que vai ser renderizado é o novo comentario.
  }

  const handleCloseReview = () => {
    setOpenReview(false)
  }

  // TODO fazer a parte de adicionar avaliação logica
  // TODO fazer a logica e estilizaçao do starReview quando ele é reviable
  return (
    <Portal>
      <Overlay onClick={onClose}>
        <BookDetailsContainer onClick={(e) => e.stopPropagation()}>
          <CloseButton size={24} onClose={onClose} />
          <BookInfoContainer>
            <BookInfoMain>
              <Image
                src={book.cover}
                alt={`capa do livro ${book.name}`}
                height={242}
                width={171}
              />
              <div>
                <div>
                  <h3>{book.name}</h3>
                  <p>{book.author}</p>
                </div>
                <div>
                  <StarReview review={book.rate} />

                  <p>
                    {ratings.length === 1
                      ? 'Uma avaliação'
                      : `${ratings.length} avaliações`}
                  </p>
                </div>
              </div>
            </BookInfoMain>
            <BookInfoFooter>
              <div>
                <BookmarkSimple size={24} />
                <span>
                  <p>Categoria</p>
                  <strong>{categoryNames}</strong>
                </span>
              </div>
              <div>
                <BookOpen size={24} />
                <span>
                  <p>Páginas</p>
                  <strong>{book.totalPages.toString()}</strong>
                </span>
              </div>
            </BookInfoFooter>
          </BookInfoContainer>
          <CommentsHeader>
            <p>Avaliações</p>
            <button onClick={handleReviewClick}>Avaliar</button>
          </CommentsHeader>
          {openReview && (
            <CommentBoxesContainer>
              <CommentBox>
                <BookBoxHeader>
                  <Avatar src={user?.avatar} />
                  <div>
                    <h3>{user?.name}</h3>
                  </div>
                  <StarReview isNotReviable={false} review={0} />
                </BookBoxHeader>
                <TextInput
                  placeholder="Digite seu comentario"
                  onSubmit={handleComment}
                  onClose={handleCloseReview}
                />
              </CommentBox>
            </CommentBoxesContainer>
          )}
          <CommentBoxesContainer>
            {sortedRecentRatings.map((rate) => {
              return (
                <CommentBox key={rate.createdAt.toString()}>
                  <BookBoxHeader>
                    <Avatar src={rate.userAvatar} />

                    <div>
                      <h3>{rate.userName}</h3>
                      <p>{rate.createdAt.fromNow()}</p>
                    </div>

                    <StarReview review={4} />
                  </BookBoxHeader>
                  <p>{rate.description}</p>
                </CommentBox>
              )
            })}
          </CommentBoxesContainer>
        </BookDetailsContainer>
      </Overlay>
    </Portal>
  )
}
