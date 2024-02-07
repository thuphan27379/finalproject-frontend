import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"; //

import App from "./App"; //
import store from "./app/store"; //
// import {createRoot} from "react-dom/client"

//
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
