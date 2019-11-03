import React from "react";
import styled from "styled-components";
import { white } from "ansi-colors";

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
    display: flex;
    align-items: center;
    justify-content: center;
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

const FinishBorder = styled.p`
  &::after {
    content: "";
    display: inline-block;
    height: 1px;
    width: 130%;
    border-top: 3px solid black;
    position: absolute;
    top: 45%;
    left: -15%;
  }
`;

const ButtonTextWrap = styled.div`
  background-color: ${props => (props.isDone ? "white" : "black")};
  color: ${props => (props.isDone ? "black" : "white")};
`;

export default function Item(props) {
  const [isDone, setIsDone] = React.useState(false);

  const toggleIsDone = () => setIsDone(!isDone);

  const buttonText = isDone ? "戻す" : "完了";

  return (
    <ItemWrap>
      <p className="task">{props.content}</p>
      <button className="complete" onClick={toggleIsDone}>
        <ButtonTextWrap isDone={isDone}>{buttonText}</ButtonTextWrap>
      </button>
    </ItemWrap>
  );
}
