import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import styled from "styled-components";

const Input = styled.input``;

const Label = styled.label``;

function Field({ label, type }) {
  return (
    <p>
      <Label>{label}</Label>
      <Input type={type} />
    </p>
  );
}

const Button = styled.button``;

const Form = styled.form``;

function App() {
  return (
    <Form>
      <Field label="Email" type="text" />
      <Field label="Password" type="password" />
      <Field label="Remember me" type="checkbox" />
      <Button type="submit">Submit</Button>
    </Form>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
