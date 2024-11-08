import { ContainerForm, SearchInput } from './styles'
import { useForm } from 'react-hook-form'

interface TextInputProps {
  placeholder: string
  onSubmit: (data: { comment: string }) => void
}

export function TextInput({ onSubmit, placeholder }: TextInputProps) {
  const { register, handleSubmit } = useForm<{ comment: string }>()
  return (
    <ContainerForm onSubmit={handleSubmit(onSubmit)}>
      <SearchInput placeholder={placeholder} {...register('comment')} />
    </ContainerForm>
  )
}
