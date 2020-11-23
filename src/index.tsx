import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import routers from "routers/index";
console.log(routers);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
