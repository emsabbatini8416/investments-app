import type { InputProps } from "typings/components"
import { StyledEyesIconNotVisible, StyledEyesIconVisible, StyledInput, StyledInputContainer, StyledLabel, StyledRightIconContainer } from "./styles"
import React from "react";

const Input = (props: InputProps) => {
  const { name, label, type, ...rest } = props
  const [passwordVisible, setPasswordVisible] = React.useState<boolean>(false);
  
  const handleOnClickRightIcon = React.useCallback(() => {
    setPasswordVisible(s => !s);
  }, []);

  return (
    <StyledInputContainer>
      {label && (
        <StyledLabel htmlFor={name}>{label}</StyledLabel>
      )}
      <StyledInput
        {...rest} 
        name={name}
        type={type === 'password' ? passwordVisible ? 'text' : type : type}  
      />
      {type === 'password' && (
        <StyledRightIconContainer onClick={handleOnClickRightIcon}>
          { !passwordVisible ? (
            <StyledEyesIconNotVisible />
          ) : (
            <StyledEyesIconVisible />
          )}
        </StyledRightIconContainer>
      )}
    </StyledInputContainer>
  )
}

export default Input