import type { NewInvestmentPayloadRequest, NewInvestmentPayloadResponse } from "typings/services"
import type { PayloadAction } from 'typings/utils'
import { NewInvestmentActionType } from "./new-investment.constants"

export type NewInvestmentState = {
  step: number,
  investment: NewInvestmentPayloadRequest,
  simulateInvestment?: NewInvestmentPayloadResponse,
  currency: string,
  model: string,
  terms:  boolean
}

export type NewInvestmentPayloadActionPaired = {
  [NewInvestmentActionType.STEP]: Pick<NewInvestmentState, 'step'>
  [NewInvestmentActionType.SET_VALUE]: Pick<NewInvestmentState, 'investment'>
  [NewInvestmentActionType.SIMULATE]: Pick<NewInvestmentState, 'simulateInvestment'>
  [NewInvestmentActionType.SET_MODEL]: Pick<NewInvestmentState, 'model'>
  [NewInvestmentActionType.SET_CURRENCY]: Pick<NewInvestmentState, 'currency'>
  [NewInvestmentActionType.TERMS]: Pick<NewInvestmentState, 'terms'>
}

export type NewInvestmentPayloadAction = PayloadAction<NewInvestmentPayloadActionPaired>
