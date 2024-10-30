import { ComponentProps } from 'react'
import { StarReviewContainer } from './styles'
import { Star } from 'phosphor-react'

interface StarReviewProps extends ComponentProps<typeof StarReviewContainer> {
  review: number
  isNotReviable?: boolean
}

export function StarReview({
  review,
  isNotReviable = true,
  ...props
}: StarReviewProps) {
  const MAX_STARS = 5

  const renderStars = () => {
    return Array.from({ length: MAX_STARS }, (_, index) => {
      const starValue = index + 1
      const isFilled = review >= starValue
      const StarIcon = <Star size={16} weight={isFilled ? 'fill' : 'regular'} />

      return isNotReviable ? (
        <span key={index}>{StarIcon}</span>
      ) : (
        <button key={index} disabled={isNotReviable}>
          {StarIcon}
        </button>
      )
    })
  } // TODO ver como fazer com o button para quando for ser reviable sem dar erro de hidratation. e a logic for review no click do botao

  return <StarReviewContainer {...props}>{renderStars()}</StarReviewContainer>
}

StarReview.displayName = 'StarReview'
