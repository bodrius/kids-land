import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { App } from "./components/App";
import { store } from "./redux/store";

import "./assets/stylesheets/index.css";
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Route component={App} />
    </Provider>
  </BrowserRouter>,

  document.getElementById("root")
);
