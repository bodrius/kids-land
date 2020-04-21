import ReactDOM from "react-dom";
import React from "react";
import { App } from "./components/App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter, Route } from 'react-router-dom';

import "./assets/stylesheets/index.css";
ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
  <Route component={App}/>
  </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
