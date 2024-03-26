import type { ModalProps } from "typings/components"
import { StyledArticle, StyledBackdrop, StyledContainer } from "./styles"

const Modal = (props: Required<React.PropsWithChildren<ModalProps>>) => {
  const { children, onClose } = props
  
  return (
    <StyledContainer>
      <StyledBackdrop onClick={onClose}></StyledBackdrop>
      <StyledArticle>
        {children}
      </StyledArticle>
    </StyledContainer>
  )
}

export default Modal