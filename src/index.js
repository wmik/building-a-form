import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import styled from "styled-components";

const Input = styled.input``;

function TextInput() {
  return <Input type="text" />;
}

function PasswordInput() {
  return <Input type="password" />;
}

function Checkbox() {
  return <Input type="checkbox" />;
}

function App() {
  return (
    <div>
      <TextInput />
      <PasswordInput />
      <Checkbox />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
