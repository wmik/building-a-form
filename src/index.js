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

const Label = styled.label``;

function App() {
  return (
    <div>
      <Label>Email</Label>
      <TextInput />
      <Label>Password</Label>
      <PasswordInput />
      <Label>Remember me</Label>
      <Checkbox />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
