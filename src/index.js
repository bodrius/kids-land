import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { App } from "./components/App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./assets/stylesheets/index.css";
ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById("root")
);
