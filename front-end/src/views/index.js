import React from "react";
import { HashRouter } from "react-router-dom";
import { history } from "src/router";
import Layout from "./layout";

const App = () => (
  <HashRouter history={history}>
    <Layout />
  </HashRouter>
);

export default App;
