import type { NewInvestmentPayloadRequest, NewInvestmentPayloadResponse } from 'typings/services'
import type { ServerResponse } from 'typings/utils'
import { ApiRoute, defaultHeaders } from './utils'

const simulateInvestmentApi = async (
  investment: NewInvestmentPayloadRequest, 
  certify: () => Promise<string>
) => {
  const token = await certify()

  const response = await fetch(ApiRoute.SIMULATE_INVESTMENT, {
    method: 'POST',
    headers: {
      ...defaultHeaders,
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(investment),
  })

  const json = (await response.json()) as ServerResponse<NewInvestmentPayloadResponse>

  return json
}

const storeInvestmentApi = async (
  certify: () => Promise<string>
) => {
  const token = await certify()

  const response = await fetch(ApiRoute.STORE_INVESTMENT, {
    method: 'POST',
    headers: {
      ...defaultHeaders,
      Authorization: `Bearer ${token}`,
    },
  })

  const json = (await response.json()) as ServerResponse<string>

  return json
}

export { simulateInvestmentApi, storeInvestmentApi }
