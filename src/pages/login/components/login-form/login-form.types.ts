import type { AuthRequestPayload } from "typings/services"
import type { PayloadAction } from "typings/utils"
import { LoginActionType } from "./login-form.constants"

export type LoginState = {
  credentials: AuthRequestPayload
}

export type LoginPayloadActionPaired = {
  [LoginActionType.SET_VALUE]: Partial<Pick<LoginState, 'credentials'>>
}

export type LoginPayloadAction = PayloadAction<LoginPayloadActionPaired>
