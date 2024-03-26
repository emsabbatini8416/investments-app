import { ChangeEvent } from "react"
import type { NewInvestmentPayloadRequest } from "typings/services"

export type InvestmentFormProps = {
  onChange: (event: ChangeEvent<HTMLSelectElement | HTMLInputElement>, optionValue?: string) => void,
  investment: NewInvestmentPayloadRequest
  disableInputs: boolean
}