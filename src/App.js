import React from "react";
import List from "./List";
import Form from "./Form";
import Title from "./Title";
import "./App.css";

export default function App() {
  return (
    <div className="wrap">
      <Title></Title>
      <Form></Form>
      <List></List>
    </div>
  );
}
