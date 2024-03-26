import type { SelectOptionItem, SelectProps } from "typings/components";
import { StyledLabel, StyledOption, StyledSelect, StyledSelectContainer } from "./styles";

const Select = (props: SelectProps) => {
  const { label, options, value, onChange, ...rest } = props
  return (
    <StyledSelectContainer>
      {label && (
        <StyledLabel>{label}</StyledLabel>
      )}
      <StyledSelect value={value} onChange={onChange} {...rest}>
        <StyledOption value={null}>Seleccionar</StyledOption>
        {
          options.map((opt: SelectOptionItem) => (
            <StyledOption key={opt.value} value={opt.value}>
              {opt.label}
            </StyledOption>
          ))
        }
      </StyledSelect>
    </StyledSelectContainer>
  );
}

export default Select