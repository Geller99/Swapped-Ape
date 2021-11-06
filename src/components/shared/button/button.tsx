import React from "react";

import styled from "styled-components";

interface ButtonProps {
  backgroundColor?: string;
  size?: string;
  label?: string;
  onClick?: (e: any) => void;
  color?: string;
  width?: string;
}

const BUTTON = styled.button<ButtonProps>`
  border-radius: 5px;
  color: ${(props) =>  props.color};
  height: 40px;
  width: ${(props) => props.width};
  border-radius: 8px;
  border: 1px solid blanchedalmond;
  background-color: ${(props) => props.backgroundColor};
  font-size: ${(props) => props.size};
  text-transform: uppercase;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 700;

  &:hover {
    background-color: rgb(121, 121, 122);
    cursor: pointer;
    box-shadow: none;
    color: white;
  }
`;

export const GlobalButton = ({
  backgroundColor,
  size,
  label,
  onClick,
  color,
  width,
}: ButtonProps) => {


  return (
    <BUTTON
      type="button"
      size={size}
      width={width}
      color={color}
      backgroundColor={backgroundColor}
    >
      {label}
    </BUTTON>
  );
};
