import React from "react";
import ReactDOM from "react-dom";
// import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { AppProvider } from "./context";

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById("root")
);
