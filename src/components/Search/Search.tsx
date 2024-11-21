import { CloseOutlined, SearchOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { useDebounce } from '../../hooks/useDebounce'
import AutoComplete from '../AutoComplete/AutoComplete'
import {
  StyledContainer,
  StyledInput,
  StyledInputContainer,
  StyledSearchIcon,
} from './Search.styled'

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearchTerm = useDebounce(searchTerm)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const handleClear = () => {
    setSearchTerm('')
  }

  return (
    <StyledContainer>
      <StyledInputContainer>
        <StyledInput
          value={searchTerm}
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
      <AutoComplete searchTerm={debouncedSearchTerm} />
    </StyledContainer>
  )
}

export default Search
