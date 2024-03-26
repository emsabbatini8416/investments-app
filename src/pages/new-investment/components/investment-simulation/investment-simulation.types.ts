import { NewInvestmentPayloadResponse } from "typings/services"

export type InvestmentSimulationProps = {
  currency: string,
  investmentType: string,
  simulation: NewInvestmentPayloadResponse
}