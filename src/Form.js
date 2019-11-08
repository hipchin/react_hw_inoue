import React from "react";
import styled from "styled-components";

const FormWrap = styled.div`
  padding: 50px 0;
  .input_box {
    width: 300px;
    height: 50px;
    margin-right: 30px;
    font-size: 30px;
    color: red;
    outline: none;
    border: 2px solid #ccc;
    box-shadow: none;
    transition: all 0.3s;
  }

  .input_box:focus {
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.4);
    border: solid 2px #666;
  }

  label[for="addDoing"] {
    margin-right: 15px;
  }

  .add {
    height: 50px;
    width: 180px;
    border-radius: 50px;
    background-color: black;
    color: white;
    font-size: 30px;
    box-shadow: 0 5px 0 rgba(136, 136, 136, 1);
    outline: none;
  }

  .add:hover {
    cursor: pointer;
  }

  .add:active {
    box-shadow: none;
    transform: translate3d(0, 3px, 0);
  }
`;

export default function Form(props) {
  const [tmpTodo, setTmpTodo] = React.useState("");

  return (
    <FormWrap>
      <form>
        <label htmlFor="addDoing">作業内容</label>
        <input
          type="text"
          name="todo"
          className="input_box"
          id="addDoing"
          onChange={e => setTmpTodo(e.target.value)}
          value={tmpTodo}
        ></input>
        <button
          className="add"
          onClick={e => {
            e.preventDefault();
            props.addTodo(tmpTodo, setTmpTodo);
          }}
        >
          追加
        </button>
      </form>
    </FormWrap>
  );
}
