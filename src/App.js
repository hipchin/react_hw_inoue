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
  const todos = [
    {
      content: "課題を終わらせる"
    },
    {
      content: "蟹食べ行こう"
    },
    {
      content: "ディズニーランド"
    }
  ];

  return (
    <AppWrapper>
      <Title></Title>
      <Form></Form>
      <List todos={todos}></List>
    </AppWrapper>
  );
}
