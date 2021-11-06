import React from "react";
import styled from "styled-components";
import { GlobalButton } from "../shared/button/button";
import { GlobalInput } from "../shared/input/input";
import { Links } from "../shared/links/links";

interface FormProps {
  label?: string;
  color?: string;
  backgroundColor?: string;
}

const Form = styled.form`
  height: 60vh;
  width: 60vh;
  /* box-sizing: border-box;
  padding: 1em; */
  font-size: 0.7rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  justify-content: space-evenly;
  align-items: center;
  color: blue;
  border: 1px solid #f2f5ff;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.15);
  -webkit-box-shadow: 0px 3px 1px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.15);
`;

const TabContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const GlobalForm = ({ label }: FormProps) => {
  return (
    <Form>
      <h1>{label} </h1>
      <TabContainer>
        <Links label="Gmail" href="G" />
        <Links label="Facebook" href="F" />
        <Links label="Github" href="H" />
      </TabContainer>
      <GlobalInput
        placeholder="enter your email"
        type="email"
        required={true}
      />
      <GlobalInput type="password" placeholder="password" required={true} />
      <GlobalButton
        size="0.7rem"
        backgroundColor="#277FFE"
        color="white"
        width="100px"
        label={label}
      />
    </Form>
  );
};
