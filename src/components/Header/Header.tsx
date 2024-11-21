import { Link } from 'react-router-dom'
import { StyledHeader } from './Header.styled'

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/">
        <h3>Starwars App</h3>
      </Link>
    </StyledHeader>
  )
}

export default Header
