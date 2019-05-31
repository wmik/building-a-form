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

function Field({ children, label, type }) {
  return (
    <p>
      <Label>{label}</Label>
      <Input type={type} />
    </p>
  );
}

const Button = styled.button``;

function App() {
  return (
    <div>
      <Field label="Email" type="text" />
      <Field label="Password" type="password" />
      <Field label="Remember me" type="checkbox" />
      <Button type="submit">Submit</Button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
