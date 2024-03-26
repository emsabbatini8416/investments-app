import { styled } from "styled-components";

export const StyledContainer = styled.section`
  position: absolute;
  left: 0;
  top: 90px;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

`

export const StyledBackdrop = styled.b`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.25)
`

export const StyledArticle = styled.article`
  width: 100%;
  max-width: 639px;
  z-index: 1;
  background-color: white;
  padding: 40px;
  border-radius: 15px;

  @media only screen and (max-width: 768px) {
    max-width: 342px;
  }
`