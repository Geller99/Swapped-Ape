import React from "react";
import styled from "styled-components";

interface LinksProps {
  href: string;
  onClick?: () => void;
  label: string;
}

const RefLink = styled.button`
  height: 48px;
  width: 100px;
  border: 0.01rem solid #94baf0;
  color: black;
  border-radius: 8px;
  background-color:#F2F5FF;
  margin-top: 8px;
  margin-inline-end: 8px;
  display: flex;
  padding-inline-start: 15px;
  -webkit-box-pack: start;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;

  &:hover {
    background-color: rgb(121, 121, 122);
    cursor: pointer;
    box-shadow: none;
    color: white;

  }
`;

const InnerContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  max-width: 100%;
  -webkit-box-align: center;
  align-items: center;
  min-width: 0 px;
  min-height: 0 px;
  flex-direction: row;
  -webkit-box-pack: center;
  justify-content: center;
`;

export const Links = ({ label, href }: LinksProps) => {
  return <RefLink> <InnerContainer>
    {href} {label}
  </InnerContainer> </RefLink>;
};
