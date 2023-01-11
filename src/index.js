import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Reset } from "styled-reset";
import App from "./App";
import "./scss/index.scss";

ReactDOM.render(
  <React.StrictMode>
    <Reset />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
