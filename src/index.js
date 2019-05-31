import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import styled from "styled-components";

const Input = styled.input``;

function App() {
  return (
    <div>
      <Input />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
