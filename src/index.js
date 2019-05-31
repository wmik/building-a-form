import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import styled from "styled-components";
import { useField, useForm } from "react-jeff";
import { createContainer } from "unstated-next";

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
  const { debug } = DebugContainer.useContainer();
  if (debug) {
    return (
      <Pre>
        <Code>{JSON.stringify(json, null, 2)}</Code>
      </Pre>
    );
  }
  return null;
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

function LoginForm({ debug }) {
  const { setDebug } = DebugContainer.useContainer();
  React.useEffect(() => {
    setDebug(debug);
  }, [setDebug, debug]);
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

function useDebugMode(initialValue = false) {
  const [debug, setDebug] = React.useState(initialValue);
  return { debug, setDebug };
}

const DebugContainer = createContainer(useDebugMode);

function App() {
  return (
    <div>
      <DebugContainer.Provider>
        <LoginForm debug={false} />
      </DebugContainer.Provider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
