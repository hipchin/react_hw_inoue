import React from "react";
import Item from "./Item";
import styled from "styled-components";

const ListWrap = styled.ul`
  text-align: center;
  padding-bottom: 100px;
`;

export default function List(props) {
  const Items = props.todos.map(todo => <Item content={todo.content}></Item>);

  return <ul>{Items}</ul>;
}
