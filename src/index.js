import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import styled from "styled-components";
import { useField, useForm } from "react-jeff";

const Input = styled.input``;

const Label = styled.label``;

function Field({ label, type, onChange, value }) {
  return (
    <p>
      <Label>{label}</Label>
      <Input
        type={type}
        onChange={e => onChange(e.currentTarget.value)}
        value={value}
      />
    </p>
  );
}

const Button = styled.button``;

const Form = styled.form``;

const Pre = styled.pre``;

const Code = styled.code``;

function DataDisplay({ json }) {
  return (
    <Pre>
      <Code>{JSON.stringify(json, null, 2)}</Code>
    </Pre>
  );
}

function EmailField({ field }) {
  return (
    <React.Fragment>
      <Field label="Email" type="text" {...field.props} />
      <DataDisplay json={{ email: field }} />
    </React.Fragment>
  );
}

function PasswordField({ field }) {
  return (
    <React.Fragment>
      <Field label="Password" type="password" {...field.props} />
      <DataDisplay json={{ password: field }} />
    </React.Fragment>
  );
}

function RememberMeField({ field }) {
  return (
    <React.Fragment>
      <Field label="Remember me" type="checkbox" {...field.props} />
      <DataDisplay json={{ checkbox: field }} />
    </React.Fragment>
  );
}

function LoginForm() {
  const email = useField({ defaultValue: "" });
  const password = useField({ defaultValue: "" });
  const rememberMe = useField({ defaultValue: false });
  const onSubmit = () => {};
  const form = useForm({ fields: [email, password, rememberMe], onSubmit });
  return (
    <React.Fragment>
      <Form
        onSubmit={e => {
          e.preventDefault();
          form.props.onSubmit();
        }}
      >
        <EmailField field={email} />
        <PasswordField field={password} />
        <RememberMeField field={rememberMe} />
        <Button type="submit">Submit</Button>
      </Form>
      <DataDisplay json={{ form }} />
    </React.Fragment>
  );
}

function App() {
  return (
    <div>
      <LoginForm />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
