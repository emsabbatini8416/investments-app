import { Chip, IconClipSVG, Text } from "components"
import { StyledFileInputMocked, StyledInvestmentFormContainer, StyledRow, StyledRowSimulate, StyledTextBold, StyledTextContainer } from "../styles"
import { usePayments } from "./investment-payment.utils"

const InvestmentPayment = () => {
  const { payment, status } = usePayments()

  if (status === 'loading') return null

  return (
    <StyledInvestmentFormContainer>
      <StyledRow>
        <StyledTextContainer>
          <Text variant="MONTSERRAT_700_18_26">Forma de pago: Transferencia bancaria</Text>
        </StyledTextContainer>
        <StyledTextContainer>
          <Chip color="#E2E2FE" label="Monto a pagar" value="USD 100" />
        </StyledTextContainer>
      </StyledRow>
      <StyledRowSimulate>
        <StyledTextContainer>
            <Text variant="MONTSERRAT_700_16_26">Datos para transferencia</Text>
          </StyledTextContainer>
          <StyledTextContainer />
      </StyledRowSimulate>
      <StyledRowSimulate>
        <StyledTextContainer>
          <Text variant="MONTSERRAT_400_14_26">{`Banco: `}</Text>
          <StyledTextBold variant="MONTSERRAT_400_14_26">
            {payment.bank}
          </StyledTextBold>
        </StyledTextContainer>
        <StyledTextContainer>
          <Text variant="MONTSERRAT_400_14_26">{`CUIT: `}</Text>
          <StyledTextBold variant="MONTSERRAT_400_14_26">
          {payment.cuit}
          </StyledTextBold>
        </StyledTextContainer>
      </StyledRowSimulate>
      <StyledRowSimulate>
        <StyledTextContainer>
          <Text variant="MONTSERRAT_400_14_26">{`Tipo de cuenta: `}</Text>
          <StyledTextBold variant="MONTSERRAT_400_14_26">
            {payment.account_type}
          </StyledTextBold>
        </StyledTextContainer>
        <StyledTextContainer>
          <Text variant="MONTSERRAT_400_14_26">{`Numero de cuenta: `}</Text>
          <StyledTextBold variant="MONTSERRAT_400_14_26">
          {payment.account_number}
          </StyledTextBold>
        </StyledTextContainer>
      </StyledRowSimulate>
      <StyledRowSimulate>
        <StyledTextContainer>
          <Text variant="MONTSERRAT_400_14_26">{`Razon social: `}</Text>
          <StyledTextBold variant="MONTSERRAT_400_14_26">
            {payment.name}
          </StyledTextBold>
        </StyledTextContainer>
        <StyledTextContainer>
          <Text variant="MONTSERRAT_400_14_26">{`CBU: `}</Text>
          <StyledTextBold variant="MONTSERRAT_400_14_26">
          {payment.cbu}
          </StyledTextBold>
        </StyledTextContainer>
      </StyledRowSimulate>
      <StyledRowSimulate>
        <StyledTextContainer>
          <Text variant="MONTSERRAT_700_16_26">Adjuntar comprobante de pago</Text>
        </StyledTextContainer>
        <StyledTextContainer />
      </StyledRowSimulate>
      <StyledFileInputMocked>
        <IconClipSVG />
        <Text variant="MONTSERRAT_400_14_26">Arrastra la imagen o adjuntala aqui</Text>
      </StyledFileInputMocked>
    </StyledInvestmentFormContainer>
  )
}
export default InvestmentPayment