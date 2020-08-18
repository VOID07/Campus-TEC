import React from "react";
import { Redirect } from "react-router-dom";
export default class Page404 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: true,
    };
    this.setLogged = this.setLogged.bind(this);
  }

  setLogged(logged) {
    this.setState({ logged });
  }

  renderPage404() {
    return (
      <div>
        <dv>
          <p>Esta pagina no existe</p>
        </dv>
        <div>
          <a href="/">Regresar a Login</a>
        </div>
      </div>
    );
  }

  redirectToLogin() {
    return <Redirect to={{ pathname: "/" }} />;
  }

  render() {
    return this.state.logged ? this.renderPage404() : this.redirectToLogin();
  }
}

