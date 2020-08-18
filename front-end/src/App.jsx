import React from "react";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Login from "./componets/login";
import store from "./store/index";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/profile">
            <div><p>Este es el perfil</p></div>
          </Route>
          <Route path="/" exact>
            <Login />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;