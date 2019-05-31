import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import styled from "styled-components";

const Input = styled.input``;

const Label = styled.label``;

function Field({ label, type, onChange, value }) {
  return (
    <p>
      <Label>{label}</Label>
      <Input type={type} onChange={onChange} value={value} />
    </p>
  );
}

const Button = styled.button``;

const Form = styled.form``;

function useField({ defaultValue }) {
  const [value, setValue] = React.useState(defaultValue);
  const onChange = e => setValue(e.currentTarget.value);
  return {
    value,
    props: {
      value,
      onChange
    }
  };
}

const Pre = styled.pre``;

const Code = styled.code``;

function DataDisplay({ json }) {
  return (
    <Pre>
      <Code>{JSON.stringify(json, null, 2)}</Code>
    </Pre>
  );
}

function EmailField() {
  const email = useField({ defaultValue: "" });
  return (
    <React.Fragment>
      <Field label="Email" type="text" {...email.props} />
      <DataDisplay json={{ email }} />
    </React.Fragment>
  );
}

function PasswordField() {
  const password = useField({ defaultValue: "" });
  return (
    <React.Fragment>
      <Field label="Password" type="password" {...password.props} />
      <DataDisplay json={{ password }} />
    </React.Fragment>
  );
}

function RememberMeField() {
  const checkbox = useField({ defaultValue: false });
  return (
    <React.Fragment>
      <Field label="Remember me" type="checkbox" {...checkbox.props} />
      <DataDisplay json={{ checkbox }} />
    </React.Fragment>
  );
}

function useForm({ onSubmit }) {
  const [submitting, setSubmitting] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const handleSubmit = () =>
    Promise.resolve()
      .then(() => setSubmitting(true))
      .then(() => onSubmit())
      .finally(() => {
        setSubmitting(false);
        setSubmitted(true);
      });
  return {
    submitted,
    submitting,
    props: {
      onSubmit: handleSubmit
    }
  };
}

function LoginForm() {
  const onSubmit = () => {};
  const form = useForm({ onSubmit });
  return (
    <React.Fragment>
      <Form
        onSubmit={e => {
          e.preventDefault();
          form.props.onSubmit();
        }}
      >
        <EmailField />
        <PasswordField />
        <RememberMeField />
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
