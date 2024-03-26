import { AuthResponsePayload } from "typings/services"

export type ServerLoginResponse = AuthResponsePayload

export interface ServerResponse<T> {
  status: string
  data: T
}
