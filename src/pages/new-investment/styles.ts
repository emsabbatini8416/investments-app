import { Text } from "components";
import styled from "styled-components";

export const StyledBackButtonContainer = styled.div`
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`

export const StyledBackButton = styled(Text)`
  padding-left: 10px;
`

export const StyledTitle = styled(Text)``

export const StyledActionContainer = styled.div<{ $showOnlyButton: boolean }>`
  display: flex;
  justify-content: ${({ $showOnlyButton }) => $showOnlyButton ? 'flex-end' : 'space-between' };

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
  }
  
`

export const StyledTermsLabel = styled.label`
  @media only screen and (max-width: 768px) {
    margin: 8px 0 24px;
  }
`

export const StyledTermsText = styled(Text)<{ $underline?: boolean }>`
  font-style: italic;
  ${({ $underline }) => `text-decoration: ${ $underline ? 'underline' : 'none'};`}
`
