import type { AuthRequestPayload } from "typings/services"
import type { ServerLoginResponse } from "typings/utils"

import { ApiRoute, defaultHeaders } from "./utils"

const signInApi = async (credentials: AuthRequestPayload) => {
  const response = await fetch(ApiRoute.SIGN_IN, {
    method: 'POST',
    headers: defaultHeaders,
    body: JSON.stringify(credentials),
  })

  const json = (await response.json()) as ServerLoginResponse

  return json
}

export {
  signInApi
}
