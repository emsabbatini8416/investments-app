import type { ChipProps } from "typings/components"
import { StyledChip, StyledValueBoldText } from "./styles"
import { Text } from "../text"

const Chip = (props: ChipProps) => {
  const {label, value, color} = props
  return (
    <StyledChip $bgColor={color}>
      <Text variant="MONTSERRAT_400_16_26">{label}</Text>
      {value && (
        <StyledValueBoldText variant="MONTSERRAT_400_16_26">{` ${value}`}</StyledValueBoldText>
      )}
    </StyledChip>
  )
}
export default Chip
