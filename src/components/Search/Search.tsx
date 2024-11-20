import { CloseOutlined, SearchOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { useDebounce } from '../../hooks/useDebounce'
import {
  StyledContainer,
  StyledInput,
  StyledInputContainer,
  StyledSearchIcon,
} from './Search.styled'
import AutoComplete from './components/AutoComplete/AutoComplete'

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearchTerm = useDebounce(searchTerm)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
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
          <SearchOutlined />
          <CloseOutlined />
        </StyledSearchIcon>
      </StyledInputContainer>
      <AutoComplete searchTerm={debouncedSearchTerm} />
    </StyledContainer>
  )
}

export default Search
