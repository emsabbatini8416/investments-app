
import { StyledForm } from "./styles"
import { Button, Input } from "components"
import { useLogin } from "./login-form.utils"

const LoginForm = () => {

  const { handleChange, handleLogin, state } = useLogin()

  const { credentials } = state

  return (
    <StyledForm onSubmit={handleLogin} noValidate={true}>
      <Input 
        id="user"
        label="Correo electronica"  
        onChange={handleChange}
        value={credentials.user}
      />
      <Input 
        id="password"
        type="password" 
        label="Contraseña" 
        onChange={handleChange}
        value={credentials.password}
      />
      <Button 
        type="submit"
        disabled={!(credentials.user && credentials.password)}
      >
        Ingresar
      </Button>
    </StyledForm>
  )
}

export default LoginForm