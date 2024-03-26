import * as React from 'react'

import type { AuthResponsePayload } from 'typings/services'

export type AuthProviderState = AuthResponsePayload

export type AuthContextValues = {
  authenticate: (keys: AuthResponsePayload) => void
} & AuthProviderState

export type AuthProviderProps = {
  children: React.ReactNode
}
