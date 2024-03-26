import type { PaymentPayloadResponse } from 'typings/services'
import type { ServerResponse } from 'typings/utils'
import { ApiRoute, defaultHeaders } from './utils'


const paymentApi = async (certify: () => Promise<string>) => {

  const token = await certify()

  const response = await fetch(ApiRoute.GET_PAYMENT, {
    method: 'GET',
    headers: {
      ...defaultHeaders,
      Authorization: `Bearer ${token}`,
    },
  })

  const json = (await response.json()) as ServerResponse<PaymentPayloadResponse>

  return json
}

export { paymentApi }
