import React from "react"
import { useMutation } from "react-query"

import { signInApi } from "services"
import { useAuth } from "hooks"

import type { LoginPayloadAction, LoginPayloadActionPaired, LoginState } from "./login-form.types"
import { LoginActionType, loginInitialState } from "./login-form.constants"
import { AuthRequestPayload } from "typings/services"

const loginReducer = (state: LoginState, action: LoginPayloadAction): LoginState => {
  const { type, payload } = action

  switch (type) {
    case LoginActionType.SET_VALUE: {
      const { credentials } = payload as LoginPayloadActionPaired[LoginActionType.SET_VALUE]

      const newState: LoginState = {
        ...state,
        credentials: {
          ...state.credentials,
          ...credentials,
        }
      }

      return newState
    }
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}
  
const initializeLoginState = (initialState: LoginState) => {
  const state = { ...initialState }

  return state
}


const useLogin = () => {
  const { authenticate } = useAuth()
  
  const [state, dispatch] = React.useReducer(loginReducer, loginInitialState, initialState =>
    initializeLoginState(initialState)
  )
  
  const mutation = useMutation(signInApi, {
    onSuccess: response => {
      const { token } = response

      if (token) {
        
        authenticate({ token })

        return
        
      }
    },
    onError: error => {
      console.log(error)
    },
  })
  
  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault()

    const payload: AuthRequestPayload = {
      ...state.credentials,
      user: state.credentials.user.toLocaleLowerCase(),
    }

    mutation.mutate(payload)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, id } = event.target

    const credentials: Partial<LoginState['credentials']> = {
      [id]: value,
    }

    const values = { credentials } as LoginState

    dispatch({
      type: LoginActionType.SET_VALUE,
      payload: values,
    })
  }
  
  return {
    state,
    handleChange,
    handleLogin,
    mutation,
  }
}

export { useLogin }