import { useForm } from 'react-hook-form'
import { SearchFormContainer } from './styles'

type SearchFormInputs = {
  query: string
}
interface SearchFormProps {
  fetchIssues: (query: string) => void
}

export function SearchForm({ fetchIssues }: SearchFormProps) {
  const { register, handleSubmit } = useForm<SearchFormInputs>()

  function handleSearchIssues(data: SearchFormInputs) {
    fetchIssues(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchIssues)}>
      <input type="text" placeholder="Buscar conteúdo" {...register('query')} />
    </SearchFormContainer>
  )
}
