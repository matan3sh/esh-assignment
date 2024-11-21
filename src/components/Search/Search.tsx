import { CloseOutlined, SearchOutlined } from '@ant-design/icons'
import { parseAsString, useQueryState } from 'nuqs'
import { useDebounce } from '../../hooks/useDebounce'
import AutoComplete from '../AutoComplete/AutoComplete'
import {
  StyledContainer,
  StyledInput,
  StyledInputContainer,
  StyledSearchIcon,
} from './Search.styled'

const Search = () => {
  const [searchTerm, setSearchTerm] = useQueryState('search', parseAsString)
  const debouncedSearchTerm = useDebounce(searchTerm)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') {
      setSearchTerm(null)
      return
    }

    setSearchTerm(e.target.value)
  }

  const handleClear = () => {
    setSearchTerm(null)
  }

  return (
    <StyledContainer>
      <StyledInputContainer>
        <StyledInput
          value={searchTerm as string}
          onChange={handleChange}
          type="text"
          placeholder="Type to search..."
          autoComplete="off"
        />
        <StyledSearchIcon>
          {searchTerm ? (
            <CloseOutlined onClick={handleClear} />
          ) : (
            <SearchOutlined />
          )}
        </StyledSearchIcon>
      </StyledInputContainer>
      <AutoComplete searchTerm={debouncedSearchTerm || ''} />
    </StyledContainer>
  )
}

export default Search
