import { SearchTopicContainer } from './styles'

interface SearchTopicProps {
  content: string
  isSelected?: boolean
  onClick?: () => void
}

export function SearchTopic({
  content,
  isSelected = false,
  onClick,
}: SearchTopicProps) {
  return (
    <SearchTopicContainer selected={isSelected} onClick={onClick}>
      <p>{content}</p>
    </SearchTopicContainer>
  )
}
