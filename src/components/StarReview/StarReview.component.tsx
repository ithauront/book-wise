import { ComponentProps } from 'react'
import { StarReviewContainer } from './styles'
import { Star } from 'phosphor-react'

interface StarReviewProps extends ComponentProps<typeof StarReviewContainer> {
  review: number
  isNotReviable?: boolean
}

// TODO logic for review on button click

export function StarReview({
  review,
  isNotReviable = true,
  ...props
}: StarReviewProps) {
  const MAX_STARS = 5

  const renderStars = () => {
    return Array.from({ length: MAX_STARS }, (_, index) => {
      const starValue = index + 1

      if (review >= starValue) {
        return (
          <button key={index} disabled={isNotReviable}>
            <Star size={16} weight="fill" />
          </button>
        )
      }
      return (
        <button key={index} disabled={isNotReviable}>
          <Star size={16} weight="regular" />
        </button>
      )
    })
  }

  return <StarReviewContainer {...props}>{renderStars()}</StarReviewContainer>
}

StarReview.displayName = 'StarReview'
