import styled from "styled-components";
import { IconEyeClosedSVG, IconEyeOpenSVG } from "../icon";

export const StyledInputContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 454px;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 34px;

  &:last-child {
    margin-bottom: 0;
  }
`

export const StyledLabel = styled.label`
  font-size: 14px;
  font-weight: 400;
  line-height: 25.88px;
`

export const StyledInput = styled.input`
  height: 38px;
  border-radius: 5px;
  border: 1px solid #585858;

  padding: 0 30px 0 23px;
  outline: none;
` 

export const StyledRightIconContainer = styled.div`
  position: absolute;
  top: 45px;
  right: 14px;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  z-index: 1;

  &:hover {
    cursor: pointer;
  }
`;

export const StyledEyesIconVisible = styled(IconEyeOpenSVG)`
  width: 24px;
  height: 24px;
`;

export const StyledEyesIconNotVisible = styled(IconEyeClosedSVG)`
  width: 24px;
  height: 24px;
`;