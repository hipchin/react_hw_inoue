import React from "react";
import styled from "styled-components";

const TitleWrap = styled.div`
  width: 100%;
  padding: 100px 0;
  font-size: 40px;
  color: white;
  background-color: black;
  text-align: center;
  h1 {
    letter-spacing: 4px;
  }
`;

export default function Title() {
  return (
    <TitleWrap>
      <h1>To do List</h1>
    </TitleWrap>
  );
}
