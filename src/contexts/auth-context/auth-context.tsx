import * as React from 'react'

import type { AuthResponsePayload } from 'typings/services'
import type { AuthContextValues, AuthProviderProps, AuthProviderState } from 'typings/contexts'

import { storage, StorageKey } from 'utils'
import { getInitialState } from './auth-context-utils'

const AuthContext = React.createContext<AuthContextValues>(null)

const AuthProvider = (props: AuthProviderProps) => {
  const { children } = props

  const [state, setState] = React.useState(getInitialState)

  const dispatch = (newState: Partial<AuthProviderState>) => {
    setState(prevState => ({
      ...prevState,
      ...newState,
    }))
  }

  const authenticate = (keys: AuthResponsePayload) => {
    const { token } = keys

    storage.set(StorageKey.TOKEN, token)

    dispatch({ token })
  }

  const value: AuthContextValues = {
    ...state,
    authenticate,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export { AuthProvider, AuthContext }
