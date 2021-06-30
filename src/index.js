import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { UseGlobalContext } from "./context/GlobalContext";

ReactDOM.render(
  <React.StrictMode>
    <UseGlobalContext>
      <App />
    </UseGlobalContext>
  </React.StrictMode>,
  document.getElementById("root")
);
