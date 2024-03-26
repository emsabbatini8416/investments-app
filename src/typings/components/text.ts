import { cssVariants } from "components/UI/text";

export type TextVariant = keyof typeof cssVariants;

export type TextProps = {
  color?: string;
  variant: TextVariant;
} & React.HTMLAttributes<HTMLSpanElement>