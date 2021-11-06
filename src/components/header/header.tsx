import React from "react";
import styled from "styled-components";
import { GlobalButton } from "../shared/button/button";
import { Toggle } from './../shared/toggleswitch/toggle';

const HeaderComponent = styled.div`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:space-between;
  box-sizing: border-box;
  background-color: white;
  padding: 2em;
  height: 10vh;
  width: 100vw;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 20px;
  width: 50%;

  p {
    font-size: 0.5rem;
  }
`;

export const Header = ({onClick}:any) => {
  return (
    <HeaderComponent>
      <p>Swapped Ape</p>
      <ButtonContainer>
        <Toggle Click={onClick} />
        <GlobalButton
          label="Login"
          size="0.7rem"
          backgroundColor="white"
          color="black"
          width="100px"
        />
        <GlobalButton
          label="Signup"
          size="0.7rem"
          backgroundColor="#277FFE"
          color="white"
          width="100px"
        />
        
      </ButtonContainer>
    </HeaderComponent>
  );
};
