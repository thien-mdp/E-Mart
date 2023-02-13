import React from "react";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import App from "./App";
import "./index.css";
import "antd/dist/antd.css";
import {store} from "./store";
import {ModalProvider} from "./context/ModalContext";
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <ModalProvider>
        <App />
      </ModalProvider>
    </BrowserRouter>
  </Provider>
);
