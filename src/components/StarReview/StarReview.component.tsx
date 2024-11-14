import { ComponentProps, useState } from 'react'
import { StarReviewContainer } from './styles'
import { Star } from 'phosphor-react'

interface StarReviewProps extends ComponentProps<typeof StarReviewContainer> {
  review?: number
  isNotReviable?: boolean
  onRatingChange?: (rating: number) => void
}

export function StarReview({
  review = 0,
  isNotReviable = true,
  onRatingChange,
  ...props
}: StarReviewProps) {
  const [rating, setRating] = useState(review)
  const MAX_STARS = 5

  const handleRating = (index: number) => {
    const adjustRating = index + 1
    setRating(adjustRating)
    if (onRatingChange) {
      onRatingChange(adjustRating)
    }
  }
  const renderStars = () => {
    return Array.from({ length: MAX_STARS }, (_, index) => {
      const starValue = index + 1
      const isFilled = rating >= starValue
      const StarIcon = (
        <Star
          size={isNotReviable ? 16 : 28}
          weight={isFilled ? 'fill' : 'regular'}
        />
      )

      return isNotReviable ? (
        <span key={index}>{StarIcon}</span>
      ) : (
        <button
          key={index}
          disabled={isNotReviable}
          onClick={() => handleRating(index)}
        >
          {StarIcon}
        </button>
      )
    })
  }
  return <StarReviewContainer {...props}>{renderStars()}</StarReviewContainer>
}
