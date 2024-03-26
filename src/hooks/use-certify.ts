import type { GetAsyncTokenParams } from "typings/hooks"
import useAuth from "./use-auth"

const getAsyncToken = async (params: GetAsyncTokenParams) => {
  const { ...auth } = params

  try {
    return auth.token
  } catch {  
    return null
  }
}

const useCertify = () => {
  
  const auth = useAuth()

  return getAsyncToken.bind(this, { ...auth })
}

export default useCertify