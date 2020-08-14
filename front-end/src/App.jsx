import React from "react";
import { Provider } from "react-redux";
import Login from "./componets/login";

import store from "./store/index"
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Login />
    </Provider>
  );
}

export default App;