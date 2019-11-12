import React from "react";
import Item from "./Item";
import styled from "styled-components";

const ListWrap = styled.ul`
  text-align: center;
`;

export default function List(props) {
  const Items = props.todos.map(todo => (
    <Item
      key={todo.id}
      id={todo.id}
      content={todo.content}
      deleteTodo={props.deleteTodo}
    ></Item>
  ));

  return <ListWrap>{Items}</ListWrap>;
}
