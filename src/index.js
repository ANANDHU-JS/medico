import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux";
import store from "./store/store";

import { RouterProvider } from 'react-router-dom';
import Router from "./router";
import AutoLogin from "./components/auth/AutoLogin";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <AutoLogin>
      <RouterProvider router={Router}/>
      </AutoLogin>
    </Provider>
  </React.StrictMode>,
);

reportWebVitals();
