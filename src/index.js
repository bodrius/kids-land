import ReactDOM from "react-dom";
import React from "react";
import { App } from "./components/App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./assets/stylesheets/index.css";
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
