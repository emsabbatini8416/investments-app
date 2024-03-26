import { Button, Card, IconBackSVG } from "components";
import { Wrapper } from "layouts";
import { StyledActionContainer, StyledBackButton, StyledBackButtonContainer, StyledTermsLabel, StyledTermsText, StyledTitle } from "./styles";
import { useNewInvestment } from "./new-investment.utils";
import InvestmentForm from "./components/investment-form";
import InvestmentSimulation from "./components/investment-simulation";
import InvestmentPayment from "./components/investment-payment";

const NewInvestment = () => {

  const { handleBackToInvestments, handleOnChange, state, validateFlow, handleOnClickContinue, handleOnCheckboxChange } = useNewInvestment()

  const { step } = state

  return(
    <Wrapper>
      <StyledBackButtonContainer onClick={handleBackToInvestments}>
        <IconBackSVG />
        <StyledBackButton variant="MONTSERRAT_400_14_26">Volver</StyledBackButton>
      </StyledBackButtonContainer>
      <StyledTitle variant="MONTSERRAT_600_21_42">Nueva inversión</StyledTitle>
      {(step === 1 || step === 2) && (
        <Card>
          <InvestmentForm 
            disableInputs={step !== 1}
            onChange={handleOnChange} 
            investment={state.investment}
          />
        </Card>
      )}
      {step === 2 && (
        <Card>
          <InvestmentSimulation 
            currency={state.currency}
            investmentType={state.model}
            simulation={state.simulateInvestment} 
          />
        </Card>
      )}
      {step === 3 && (
        <Card>
          <InvestmentPayment />
        </Card>
      )}
      <StyledActionContainer $showOnlyButton={step !== 3}>
        {step === 3 && (
          <StyledTermsLabel>
            <input type="checkbox" checked={state.terms} onChange={handleOnCheckboxChange} />
            <StyledTermsText variant="MONTSERRAT_400_14_26">Leí y acepto </StyledTermsText>
            <StyledTermsText $underline={true} variant="MONTSERRAT_400_14_26">Términos y condiciones*</StyledTermsText>
          </StyledTermsLabel>
        )}
        <Button disabled={validateFlow()} onClick={handleOnClickContinue}>
          {step !== 3 ? 'Continuar' : 'Finalizar'}
        </Button>
      </StyledActionContainer>
    </Wrapper>
  )
};

export default NewInvestment