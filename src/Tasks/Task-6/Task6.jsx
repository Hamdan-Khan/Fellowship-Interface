import React from "react";
import styled, { css } from "styled-components";

const Container = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 40px 0;
  justify-items: center;
  align-items: center;
`;

const Section = styled.div`
  ${Container}
  border: 1px solid grey;
  padding: 20px;
`;
const Heading = styled.h1`
  font-size: 30px;
  text-decoration: underline;
  font-weight: bold;
`;
const Button = styled.a`
  border: 1px solid black;
  cursor: pointer;
  background-color: black;
  color: white;
  padding: 5px 17px;
  font-size: 18px;
  font-weight: 500;
  border-radius: 15px;
`;

const Task6 = () => {
  return (
    <Section>
      <Heading>STYLING DONE BY STYLED COMPONENTS</Heading>
      <Button href="">View source code</Button>
    </Section>
  );
};

export default Task6;
