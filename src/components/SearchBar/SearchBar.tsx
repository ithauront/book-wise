import { MagnifyingGlass } from 'phosphor-react'
import { ContainerForm, SearchInput, SubmitButton } from './styles'
import { useForm } from 'react-hook-form'

interface SearchBarProps {
  placeholder: string
  onSubmit: (data: { search: string }) => void
}

export function SearchBar({ onSubmit, placeholder }: SearchBarProps) {
  const { register, handleSubmit } = useForm<{ search: string }>()
  return (
    <ContainerForm onSubmit={handleSubmit(onSubmit)}>
      <SearchInput placeholder={placeholder} {...register('search')} />
      <SubmitButton type="submit">
        <MagnifyingGlass size={20} />
      </SubmitButton>
    </ContainerForm>
  )
}
