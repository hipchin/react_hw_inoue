import React from "react";
import List from "./List";
import Form from "./Form";
import Title from "./Title";
import "./reset.css";
import styled from "styled-components";

const AppWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: lightgray;
  padding: 30px　0;
`;

export default function App() {
  const [todos, setTodos] = React.useState([]);

  const addTodo = (tmpTodo, setTmpTodo) => {
    setTodos([...todos, tmpTodo]);
    setTmpTodo("");
  };

  return (
    <AppWrapper>
      <Title></Title>
      <Form addTodo={addTodo}></Form>
      <List todos={todos}></List>
    </AppWrapper>
  );
}
