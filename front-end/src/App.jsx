import React from "react";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Login from "./componets/login";
import PerfilEstudiante from "./componets/perfil-estudiante"
import Page404 from "./componets/page404"
import store from "./store/index";
import "./App.css";
import PerfilProfesor from "./componets/perfil-professor";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact> <Login /> </Route>
          <Route path="/profile"><PerfilEstudiante/> </Route>
          <Route path="/404"><Page404/></Route>
          <Route path="/perfilProf"><PerfilProfesor/> </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
