import { Wrapper } from "layouts";
import { styled } from "styled-components";

export const StyledNavBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; 
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  height: 90px;
  z-index: 101;
`

export const StyledWrapper = styled(Wrapper)`
  margin: 0;

  & > img {
    margin: 0;
  }
`