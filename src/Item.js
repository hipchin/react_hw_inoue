import React from "react";
import styled from "styled-components";

const ItemWrap = styled.li`
  .task {
    margin: 20px 0;
    border: 1px solid black;
    padding: 20px;
    width: 300px;
    background-color: white;
    position: relative;
  }
  .complete {
    height: 50px;
    width: 180px;
    border-radius: 50px;
    font-size: 30px;
    box-shadow: 0 3px 0 rgba(136, 136, 136, 1);
    outline: none;
  }

  .complete:hover {
    cursor: pointer;
  }

  .complete:active {
    box-shadow: none;
    transform: translate3d(0, 3px, 0);
  }
`;

export default function Item() {
  return (
    <ItemWrap>
      <p className="task">ここに内容が入ります</p>
      <button className="complete">完了</button>
    </ItemWrap>
  );
}
