import React, { useRef } from 'react'
import styled from 'styled-components';
import { Header } from '../components/header/header';


interface LandingProps {
  backgroundColor: string;
  children: any
}

export const LandingPage = styled.div<LandingProps>`
    height: 98vh;
    width: 99.5w;
    background-color: ${(props) => props.backgroundColor};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 40px;
    align-items: center;
`

export const Landing = ({ backgroundColor, children }: LandingProps) => {
  const darkModeRef:any = useRef();

  const onClick = () => {
  darkModeRef.current.style.backgroundColor = '#100C18';
  }
  return (
    <LandingPage backgroundColor={backgroundColor} ref={darkModeRef} >
      <Header Click={onClick} />
      {children}
    </LandingPage>
  )
}
