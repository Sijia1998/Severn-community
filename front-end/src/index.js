import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import "./index.css";
import App from "./views";
import store from "./store";
import "antd/dist/antd.css";

ReactDOM.render(
  <Provider {...store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
