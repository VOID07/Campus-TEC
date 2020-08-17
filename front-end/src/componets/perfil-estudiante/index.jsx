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
import "./login.css";
import logo from "../../img/logo.svg";
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


  renderLogin(){
    return (
      <Container className="App">
        <Container>
          <Navbar className="NavBarTop" fixed="top">
            <Col md={6}>
              <Navbar.Brand href="#">
                <div>
                  <img src={logo} alt="logo" className="logoEdit" />
                </div>
              </Navbar.Brand>
            </Col>
            <Col md={{span:2, offset:4}}>
              <div>
                <Button variant="light">Cerrar Sessión</Button>
              </div>
            </Col>

          </Navbar>
        </Container>

        <Container fluid>
          <Row>
            <Col>
              <Row>
                <Col>
                  Imagen
                </Col>
                <Col>
                  Información Personal
                </Col>
              </Row>
              <Row>
                Información Contacto
              </Row>
            </Col>
            <Col>
              Cursos Matriculados
            </Col>
          </Row>
        </Container>

      </Container>
    );
  }

  redirectToLogin(){
    return(
       <Redirect
            to={{
              pathname: "/login"
            }}
          />
    );
  }

  render() {
    return(
    this.state.logged ? this.renderLogin() : this.redirectToProfile()
    );
    
  }
}

export default connect(null, { setUserPass })(PerfilEstudiante);
