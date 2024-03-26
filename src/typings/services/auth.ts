export interface AuthRequestPayload {
  user: string
  password: string
}

export interface AuthResponsePayload {
  token: string
}