import React from "react";
import styled from "styled-components";

const ItemWrap = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  .task {
    margin: 20px 0;
    border: 1px solid black;
    padding: 20px;
    width: 300px;
    background-color: white;
    font-size: 30px;
  }
  .buttonWrap {
    display: flex;
  }
`;

const Button = styled.button`
  background-color: ${props => (props.isDone ? "white" : "black")};
  color: ${props => (props.isDone ? "black" : "white")};
  height: 50px;
  width: 180px;
  border-radius: 50px;
  font-size: 30px;
  box-shadow: 0 5px 0 rgba(136, 136, 136, 1);
  outline: none;
  margin-right: 10px;
  &:hover {
    cursor: pointer;
  }
  &:active {
    box-shadow: none;
    transform: translate3d(0, 5px, 0);
  }
`;

const DeleteButton = styled.button`
  background-color: red;
  color: black;
  height: 50px;
  width: 180px;
  border-radius: 50px;
  font-size: 30px;
  box-shadow: 0 5px 0 rgba(136, 136, 136, 1);
  outline: none;
`;

const Task = styled.p`
  text-decoration: ${props => (props.isDone ? "line-through" : "none")};
`;

export default function Item(props) {
  const [isDone, setIsDone] = React.useState(false);

  const toggleIsDone = () => setIsDone(!isDone);

  const buttonText = isDone ? "戻す" : "完了";

  return (
    <ItemWrap>
      <Task isDone={isDone} className="task">
        {props.content}
      </Task>
      <buttonWrap>
        <Button isDone={isDone} onClick={toggleIsDone}>
          {buttonText}
        </Button>
        <DeleteButton
          onClick={() => {
            props.deleteTodo(props.id);
          }}
        >
          削除
        </DeleteButton>
      </buttonWrap>
    </ItemWrap>
  );
}
