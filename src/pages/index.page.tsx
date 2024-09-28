import { SearchBar } from '../components/SearchBar/SearchBar'

export default function Home() {
  const handleSubmit = (data: { search: string }) => {
    console.log('search value:', data.search)
  }
  return <SearchBar placeholder="pesquise" onSubmit={handleSubmit} />
}
