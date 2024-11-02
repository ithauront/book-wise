import Image from 'next/image'
import { StarReview } from '../StarReview/StarReview.component'
import { BookBoxContainer, BookBoxHeader, BookReview } from './styles'
import { Avatar } from '../Avatar/Avatar.component'

export type BookBoxHeader = {
  userName: string

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
  reviewDate?: string
  isSummary?: boolean
  isExplore?: boolean
  isUserReview?: boolean
}

export function BookBox({
  headerProps,
  bookCover,
  bookName,
  bookAuthor,
  reviewStarsTotal,
  reviewText,
  reviewDate,
  isSummary = false,
  isExplore = false,
  isUserReview = false,
}: BookBoxProps) {
  return (
    <BookBoxContainer isUserReview={isUserReview}>
      {headerProps ? (
        <BookBoxHeader>
          <Avatar src={headerProps.avatarSrc} />

          <div>
            <h3>{headerProps.userName}</h3>
            <p>{reviewDate}</p>
          </div>

          <StarReview review={headerProps.reviewStarsFromUser} />
        </BookBoxHeader>
      ) : null}
      <BookReview
        isSummary={isSummary}
        isExplore={isExplore}
        isUserReview={isUserReview}
      >
        <Image src={bookCover} alt="Book cover" width={150} height={200} />
        <section>
          {isUserReview ? (
            <div>
              <p>{reviewDate}</p>
              <StarReview review={reviewStarsTotal} />
            </div>
          ) : (
            ''
          )}
          <div>
            <h3>{bookName}</h3>
            <p>{bookAuthor}</p>
          </div>
          <p>{reviewText || ''}</p>
          {isUserReview ? '' : <StarReview review={reviewStarsTotal} />}
        </section>
      </BookReview>
    </BookBoxContainer>
  )
}
