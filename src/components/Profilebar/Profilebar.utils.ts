import { Rating } from '../../pages/types'

export const findMostReadCategories = (ratings: Rating[]) => {
  const categoriesCount: Record<string, number> = {}

  ratings.forEach((rating) => {
    const categories = rating.book?.categories
    if (categories) {
      categories.forEach((categoryObject) => {
        const categoryName = categoryObject.category.name
        categoriesCount[categoryName] = (categoriesCount[categoryName] || 0) + 1
      })
    }
  })
  const maxCount = Math.max(...Object.values(categoriesCount))
  const mostReadCategories = Object.keys(categoriesCount).filter(
    (categories) => categoriesCount[categories] === maxCount,
  )
  return {
    category: mostReadCategories[0],
    isTied: mostReadCategories.length > 1,
  }
}
