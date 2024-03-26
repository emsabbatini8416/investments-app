import styled, { css } from "styled-components";
import type { TextProps } from "typings/components";

export const cssVariants = {
  "MONTSERRAT_700_20_26": css`
    font-size: 20px;
    font-weight: 700;
    line-height: 26px;
  `,
  "MONTSERRAT_700_18_26": css`
    font-size: 18px;
    font-weight: 700;
    line-height: 26px;
  `,
  "MONTSERRAT_700_16_26": css`
    font-size: 16px;
    font-weight: 700;
    line-height: 26px;
  `,
  "MONTSERRAT_600_21_42": css`
    font-size: 21px;
    font-weight: 600;
    line-height: 42px;
  `,
  "MONTSERRAT_600_12_26": css`
    font-size: 12px;
    font-weight: 600;
    line-height: 26px;
  `,
  "MONTSERRAT_500_16_26": css`
    font-size: 16px;
    font-weight: 500;
    line-height: 26px;
  `,
  "MONTSERRAT_400_16_26": css`
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
  `,
  "MONTSERRAT_400_14_26": css`
    font-size: 14px;
    font-weight: 400;
    line-height: 26px;
  `,
}

export const Text = styled.span<TextProps>`
  color: ${({ color }) => color || '#000000' };
  ${({ variant }) => cssVariants[variant]}
`
