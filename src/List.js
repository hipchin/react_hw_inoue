import React from "react";
import Item from "./Item";
import styled from "styled-components";

const ListWrap = styled.ul`
  text-align: center;
`;

export default function List(props) {
  return (
    <ListWrap>
      {props.todos.map(todo => {
        return <Item content={todo} />;
      })}
    </ListWrap>
  );
}
