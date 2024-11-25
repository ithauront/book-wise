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
  isProfile?: boolean
  openBookInfo?: () => void
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
  isProfile = false,
  openBookInfo,
}: BookBoxProps) {
  return (
    <BookBoxContainer
      isUserReview={isUserReview}
      onClick={openBookInfo}
      isProfile={isProfile}
    >
      {headerProps ? (
        <BookBoxHeader>
          <Avatar src={headerProps.avatarSrc} />

          <div>
            <h3>{headerProps.userName}</h3>
            <p>{reviewDate}</p>
          </div>
          {(isProfile || (!isSummary && !isExplore && !isUserReview)) && (
            <StarReview
              review={headerProps?.reviewStarsFromUser || reviewStarsTotal}
            />
          )}
        </BookBoxHeader>
      ) : null}
      <BookReview
        isSummary={isSummary}
        isExplore={isExplore}
        isUserReview={isUserReview}
        isProfile={isProfile}
      >
        {!isProfile && (
          <Image src={bookCover} alt="Book cover" width={150} height={200} />
        )}
        <section>
          {isProfile && (
            <Image src={bookCover} alt="Book cover" width={93} height={134} />
          )}
          {isUserReview ? (
            <div className="isUserReviewHeaderDiv">
              <p>{reviewDate}</p>

              <StarReview review={reviewStarsTotal} />
            </div>
          ) : (
            ''
          )}
          <div>
            <h3>{bookName}</h3>
            <p>{bookAuthor}</p>

            {isProfile && <StarReview review={reviewStarsTotal} />}
          </div>
          {!isProfile && <p>{reviewText || ''}</p>}
          {isExplore || isSummary ? (
            <StarReview review={reviewStarsTotal} />
          ) : (
            ''
          )}
        </section>
        {isProfile && <p>{reviewText || ''}</p>}
      </BookReview>
    </BookBoxContainer>
  )
}
