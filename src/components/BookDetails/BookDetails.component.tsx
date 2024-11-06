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
import { useEffect } from 'react'

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
  createdAt: string
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
  const categoryNames = book.categories.map((cat) => cat.name).join(', ')

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

  // TODO fazer condicional para se length de avaliações for igual a 1 colocar avaliação no singular se não deixar no plural
  // TODO fazer a parte de adicionar avaliação tanto visual quando a logica
  return (
    <Portal>
      <Overlay onClick={onClose}>
        <BookDetailsContainer>
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
                  <p>{ratings.length} avaliações</p>
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
            <button>Avaliar</button>
          </CommentsHeader>

          <CommentBoxesContainer>
            {ratings.map((rate) => {
              return (
                <CommentBox key={rate.createdAt}>
                  <BookBoxHeader>
                    <Avatar src={rate.userAvatar} />

                    <div>
                      <h3>{rate.userName}</h3>
                      <p>{rate.createdAt}</p>
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
