import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/style.scss";
import App from "./App";
import { HashRouter } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>
);
