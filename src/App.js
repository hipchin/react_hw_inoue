import React from "react";
import List from "./List";
import Form from "./Form";
import Title from "./Title";
import "./App.css";
import "./reset.css";
import styled from "styled-components";

const AppWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: lightgray;
  height: 100vh;
`;

export default function App() {
  return (
    <AppWrapper>
      <Title></Title>
      <Form></Form>
      <List></List>
    </AppWrapper>
  );
}
