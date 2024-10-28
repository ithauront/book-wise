import Image from 'next/image'
import { StarReview } from '../StarReview/StarReview.component'
import { BookBoxContainer, BookBoxHeader, BookReview } from './styles'
import { Avatar } from '../Avatar/Avatar.component'

export type BookBoxHeader = {
  userName: string
  reviewDate: string
  avatarSrc: string
  reviewStarsFromUser: number
}

export interface BookBoxProps {
  headerProps?: BookBoxHeader
  reviewText?: string
  bookCover: string
  bookName: string
  bookAuthor: string
  reviewStarsTotal: number
  isSummary?: boolean
  isExplore?: boolean
}

export function BookBox({
  headerProps,
  bookCover,
  bookName,
  bookAuthor,
  reviewStarsTotal,
  reviewText,
  isSummary = false,
  isExplore = false,
}: BookBoxProps) {
  return (
    <BookBoxContainer>
      {headerProps ? (
        <BookBoxHeader>
          <Avatar src={headerProps.avatarSrc} />

          <div>
            <h3>{headerProps.userName}</h3>
            <p>{headerProps.reviewDate}</p>
          </div>

          <StarReview review={headerProps.reviewStarsFromUser} />
        </BookBoxHeader>
      ) : null}
      <BookReview isSummary={isSummary} isExplore={isExplore}>
        <Image src={bookCover} alt="Book cover" width={150} height={200} />
        <section>
          <div>
            <h3>{bookName}</h3>
            <p>{bookAuthor}</p>
          </div>
          <p>{reviewText || ''}</p>

          <StarReview review={reviewStarsTotal} />
        </section>
      </BookReview>
    </BookBoxContainer>
  )
}
