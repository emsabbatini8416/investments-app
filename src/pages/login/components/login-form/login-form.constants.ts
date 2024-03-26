import { LoginState } from "./login-form.types"

enum LoginActionType {
  SET_VALUE = 'SET_VALUE'
}

const loginInitialState: LoginState = {
  credentials: {
    user: '',
    password: '',
  },
}

export { LoginActionType, loginInitialState }