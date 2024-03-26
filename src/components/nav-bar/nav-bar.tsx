
import { StyledNavBarContainer, StyledWrapper } from './styles'
import { StyledImage } from 'pages/login/styles'
import Logo from 'assets/images/logo.png'
const NavBar = () => (
  <StyledNavBarContainer>
    <StyledWrapper>
      <StyledImage src={Logo} alt="Logo" />
    </StyledWrapper>
  </StyledNavBarContainer>
)

export default NavBar