import { Text } from "components";
import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const StyledImage = styled.img`
  width: 106px;
  height: 110px;
  margin-bottom: 32px;
`

export const StyledTitleText = styled(Text)`
  margin-bottom: 16px;
`

export const StyledDescriptionText = styled(Text)`
  width: 348px;
  text-align: center;
`