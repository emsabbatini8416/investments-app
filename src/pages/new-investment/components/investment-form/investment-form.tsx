import { Select } from "components"
import { StyledInput, StyledInvestmentFormContainer, StyledRow } from "../styles"
import { useCurrencies, useModels } from "./investment-form.utils"
import { InvestmentFormProps } from "./investment-form.types"
import { ChangeEvent } from "react"

const InvestmentForm = (props: InvestmentFormProps) => {
  const { onChange, investment, disableInputs } = props
  const { currencies, currenciesMap, status: statusCurrency } = useCurrencies()
  const { models, modelsMap, status: statusModel } = useModels()

  if (statusCurrency === 'loading' || statusModel === 'loading') return null

  return (
    <StyledInvestmentFormContainer>
      <StyledRow>
        <Select 
          id="model_id"
          name='model_id'
          label="Tipo de inversión*" 
          options={models} 
          value={investment.model_id} 
          onChange={(e: ChangeEvent<HTMLSelectElement>) => {
            const { value } = e.target
            const keyValue = modelsMap[value]
            onChange(e, keyValue)
          }} 
          disabled={disableInputs}
        />
        <Select 
          id="currency_id"
          name='currency_id'
          label="Moneda*" 
          options={currencies} 
          value={investment.currency_id} 
          onChange={(e: ChangeEvent<HTMLSelectElement>) => {
            const { value } = e.target
            const keyValue = currenciesMap[value]
            onChange(e, keyValue)
          }} 
          disabled={disableInputs}
        />
      </StyledRow>
      <StyledRow>
        <StyledInput 
          id="amount"
          name="amount"
          type="number" 
          label="Monto a invertir*"
          value={investment.amount}
          onChange={onChange}
          min={0}
          disabled={disableInputs}
        />
      </StyledRow>
    </StyledInvestmentFormContainer>
  )
}

export default InvestmentForm