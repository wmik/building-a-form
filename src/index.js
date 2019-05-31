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

function Field({ children, label }) {
  return (
    <p>
      <Label>{label}</Label>
      {children}
    </p>
  );
}

function App() {
  return (
    <div>
      <Field label="Email">
        <TextInput />
      </Field>
      <Field label="Password">
        <PasswordInput />
      </Field>
      <Field label="Remember me">
        <Checkbox />
      </Field>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
