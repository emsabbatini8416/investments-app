
import type { ServerResponse } from 'typings/utils'
import { ApiRoute, defaultHeaders } from './utils'

const modelListApi = async (certify: () => Promise<string>) => {

  const token = await certify()

  const response = await fetch(ApiRoute.GET_MODELS, {
    method: 'GET',
    headers: {
      ...defaultHeaders,
      Authorization: `Bearer ${token}`,
    },
  })

  const json = (await response.json()) as ServerResponse<{ [key: string]: string }>

  return json
}

export { modelListApi }
