import styled from "styled-components";
import type { ButtonProps } from "typings/components";

export const Button = styled.button<ButtonProps>`
  width: 214px;
  height: 49px;
  border: none;
  border-radius: 25px;

  color: #1F1646;
  font-size: 16px;
  font-weight: 500;
  line-height: 19.5px;

  background-color: ${props => props.disabled ? "#979797" : "#3BD4AE" };
  cursor: ${props => props.disabled ? "not-allowed" : "pointer" };

  @media only screen and (max-width: 768px) {
    width: 169px;
    height: 39px;
  }
`