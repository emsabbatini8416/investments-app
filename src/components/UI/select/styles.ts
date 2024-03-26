import { styled } from "styled-components";

export const StyledSelectContainer = styled.div`
  width: 100%;
  max-width: 357px;
  height: auto;
  display: flex;
  flex-direction: column;
`;

export const StyledLabel = styled.label`
  font-size: 14px;
  font-weight: 400;
  line-height: 25.88px;
`

export const StyledSelect = styled.select`
  height: 40px;
  border-radius: 5px;
  border: 1px solid #313131;

  padding: 0 30px 0 23px;
  outline: none;

  &:after {
    right: 15px;
  }
`

export const StyledOption = styled.option`

`
