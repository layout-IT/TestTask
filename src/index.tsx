import React from "react";

import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";

import { App } from "App";
import { STORE } from "redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={STORE}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
