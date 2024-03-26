import { Input, Text } from "components";
import styled from "styled-components";

export const StyledInvestmentFormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const StyledRow = styled.div`
  width: 100%;
  display: flex;
  gap: 72px;
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 24px;
    margin-bottom: 24px;
  }
`

export const StyledRowSimulate = styled(StyledRow)`
  margin-bottom: 16px;
`

export const StyledInput = styled(Input)`
  max-width: 303px;
`

export const StyledTextContainer = styled.div`
  width: 100%;
`

export const StyledTextBold = styled(Text)`
  font-weight: bold;
`
export const StyledFileInputMocked = styled.div`
  width: 832px;
  height: 112px;
  border: 1px dotted #747474;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }

`