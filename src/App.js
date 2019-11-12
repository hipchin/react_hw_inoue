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
  padding: 30px 0;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
`;

export default function App() {
  const [todos, setTodos] = React.useState([]);

  const addTodo = (tmpTodo, setTmpTodo) => {
    if (tmpTodo.length < 1) {
      alert("作業内容を入力してください");
      return;
    }

    const newTodoItem = {
      id: todos.length,
      content: tmpTodo
    };

    setTodos([...todos, newTodoItem]);
    setTmpTodo("");
  };

  const deleteTodo = id => {
    const newTodos = todos.filter(todo => {
      return id !== todo.id;
    });
    setTodos(newTodos);
  };

  return (
    <AppWrapper>
      <Title></Title>
      <Form addTodo={addTodo}></Form>
      <List todos={todos} deleteTodo={deleteTodo}></List>
    </AppWrapper>
  );
}
