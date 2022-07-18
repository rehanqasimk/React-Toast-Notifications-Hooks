import React from "react";
import ReactDOM from "react-dom";

import { ToastProvider, useToasts } from "./toast-manager";

import "./styles.css";

function Demo() {
  const { add } = useToasts();
  return <button onClick={() => add("Click to dismiss!")}>Add toast</button>;
}

function App() {
  return (
    <div className="App">
      <ToastProvider>
        <h1>Context/State Hooks</h1>
        <p>Refactoring a class based implementation.</p>
        <p>
          <Demo />
        </p>
      </ToastProvider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
