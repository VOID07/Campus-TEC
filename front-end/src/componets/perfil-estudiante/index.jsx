import React from "react";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Navbar from "react-bootstrap/Navbar";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { setUserPass } from "./../../store/tipo_usuario/action";
import "./perfil-estudiante.css";
import logo from "../../img/logo.svg";
import { NavigationBar } from "../NavigationBar";
import postUserPassEstudiante from "./../../queries/axios";

// import setUserType from "../../store/tipo_usuario/action"
class PerfilEstudiante extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tipo_usuario: 1,
      user: "",
      logged: true
    };
    this.setLogged = this.setLogged.bind(this);
  }

  setLogged(logged) {
    this.setState({ logged });
  }


  renderPerfilEstudiante(){
    return (
        <Container fluid>
          <NavigationBar/>

          <Container>
              <Col>
                  <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
              </Col>
              <Col>
                  <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
              </Col>
          </Container>

        </Container>
    );
  }

  redirectToLogin(){
    return(
       <Redirect
            to={{
              pathname: "/"
            }}
          />
    );
  }

  render() {
    return(
    this.state.logged ? this.renderPerfilEstudiante() : this.redirectToLogin()
    );
    
  }
}

export default connect(null, { setUserPass })(PerfilEstudiante);
