import { Text } from "components"
import { LoginForm } from "./components/login-form"
import Logo from 'assets/images/logo.png'
import { StyledFormContainer, StyledImage, StyledLoginContainer } from "./styles"

const Login = () => {
  return (
    <StyledLoginContainer>
      <StyledFormContainer>
        <StyledImage src={Logo} alt="Logo" />
        <Text variant="MONTSERRAT_700_20_26" color="#3BD4AE">Iniciar sesión</Text>
        <LoginForm />
      </StyledFormContainer>
    </StyledLoginContainer>
  )
}

export default Login