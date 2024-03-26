import { Text } from 'components'
import { StyledInvestmentFormContainer, StyledRowSimulate, StyledTextBold, StyledTextContainer } from "../styles"
import { InvestmentSimulationProps } from "./investment-simulation.types"

const InvestmentSimulation = (props: InvestmentSimulationProps) => {
  const { 
    currency, 
    investmentType,
    simulation: { 
      amount, 
      profitability_amount, 
      profitability, 
      mont_term, 
      parking, 
      payment 
    }
  } = props

  return (
    <StyledInvestmentFormContainer>
      <StyledRowSimulate>
        <StyledTextContainer>
          <Text variant="MONTSERRAT_400_14_26">{`Total de la inversión: `}</Text>
          <StyledTextBold variant="MONTSERRAT_400_14_26">
            {`${currency} ${amount}`}
          </StyledTextBold>
        </StyledTextContainer>
        <StyledTextContainer>
          <Text variant="MONTSERRAT_400_14_26">{`Ganancia anual estimada: `}</Text>
          <StyledTextBold variant="MONTSERRAT_400_14_26">
          {`${currency} ${profitability_amount}`}
          </StyledTextBold>
        </StyledTextContainer>
      </StyledRowSimulate>
      <StyledRowSimulate>
        <StyledTextContainer>
          <Text variant="MONTSERRAT_400_14_26">{`Tipo de inversión: `}</Text>
          <StyledTextBold variant="MONTSERRAT_400_14_26">
            {investmentType}
          </StyledTextBold>
        </StyledTextContainer>
        <StyledTextContainer>
          <Text variant="MONTSERRAT_400_14_26">{`Tasa anual: `}</Text>
          <StyledTextBold variant="MONTSERRAT_400_14_26">
          {`${profitability}%`}
          </StyledTextBold>
        </StyledTextContainer>
      </StyledRowSimulate>
      <StyledRowSimulate>
        <StyledTextContainer>
          <Text variant="MONTSERRAT_400_14_26">{`Tiempo de inversión: `}</Text>
          <StyledTextBold variant="MONTSERRAT_400_14_26">
            {`${mont_term} meses`}
          </StyledTextBold>
        </StyledTextContainer>
        <StyledTextContainer>
          <Text variant="MONTSERRAT_400_14_26">{`Podes retirarte: `}</Text>
          <StyledTextBold variant="MONTSERRAT_400_14_26">
          {`${parking}`}
          </StyledTextBold>
        </StyledTextContainer>
      </StyledRowSimulate>
      <StyledRowSimulate>
        <StyledTextContainer>
          <Text variant="MONTSERRAT_400_14_26">{`Recibirás al final del plazo: `}</Text>
          <StyledTextBold variant="MONTSERRAT_400_14_26">
            
          </StyledTextBold>
        </StyledTextContainer>
        <StyledTextContainer>
          <Text variant="MONTSERRAT_400_14_26">{`Cuándo cobras las ganancias: `}</Text>
          <StyledTextBold variant="MONTSERRAT_400_14_26">
          {`${payment}`}
          </StyledTextBold>
        </StyledTextContainer>
      </StyledRowSimulate>
    </StyledInvestmentFormContainer>

  )

}

export default InvestmentSimulation
