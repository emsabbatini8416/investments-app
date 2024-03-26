import type { NewInvestmentState } from "./new-investment.types";

export enum NewInvestmentActionType {
  STEP = 'STEP',
  SET_VALUE = 'SET_VALUE',
  SET_MODEL = 'SET_MODEL',
  SET_CURRENCY = 'SET_CURRENCY',
  SIMULATE = 'SIMULATE',
  TERMS = 'TERMS'
}

export const newInvestmentInitialState: NewInvestmentState = {
  step: 1,
  currency: '',
  model: '',
  investment: {
    model_id: undefined,
    currency_id: undefined,
    amount: undefined
  },
  simulateInvestment: {
    amount: undefined,
    currency_id: undefined,
    profitability_amount: undefined,
    profitability: undefined,
    mont_term: undefined,
    parking: "",
    payment: ""
  },
  terms: false
}