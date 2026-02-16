import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

import "./index.css";
import "./i18n/config";     // ✅ IMPORTANTE: activa i18next en toda la app

import AppGames from "./App";
import store from "./store";

let persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <AppGames />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
