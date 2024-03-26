import { StyledContainer, StyledDescriptionText, StyledImage, StyledTitleText } from "./styles"

import Success from 'assets/images/success.png'

const InvestmentSuccess = () => {

  return (
    <StyledContainer>
        <StyledImage src={Success} alt="success"/>
        <StyledTitleText variant="MONTSERRAT_700_18_26">Ya registramos tu inversión</StyledTitleText>
        <StyledDescriptionText variant="MONTSERRAT_400_16_26">
          Nuestro equipo estará validando el pago. En unos minutos, podrás ver el estado de la inversión en tus movimientos.
        </StyledDescriptionText>
    </StyledContainer>
  )
}

export default InvestmentSuccess