export interface NewInvestmentPayloadRequest {
  model_id: number;
  currency_id: number;
  amount: number;
}

export interface NewInvestmentPayloadResponse extends Pick<NewInvestmentPayloadRequest, 'amount' | 'currency_id'> {
  profitability_amount: number;
  profitability: number;
  mont_term: number;
  parking: string;
  payment: string;
}