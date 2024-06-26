import styled from "styled-components";

export const Card = styled.div`
  max-width: 930px;
  border-radius: 15px;
  background-color: #FFFFFF;
  padding: 48px;
  margin: 14px 0;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 768px) {
    padding: 24px;
  }
`