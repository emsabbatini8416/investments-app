import styled from "styled-components";
import { Text } from "../text";

export const StyledChip = styled.div<{ $bgColor?: string }>`
  width: 222px;
  height: 37px;
  border-radius: 10px;
  ${({ $bgColor }) => `background-color: ${ $bgColor || '' }`};

  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledValueBoldText = styled(Text)`
  font-weight: bold;
`