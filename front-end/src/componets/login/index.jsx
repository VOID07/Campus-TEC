import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Navbar from "react-bootstrap/Navbar";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { setUserPass } from "./../../store/tipo_usuario/action";
import "./login.css";
import logo from "../../img/logo.svg";
import {postUserPassEstudiante} from "./../../queries/axios";
// import setUserType from "../../store/tipo_usuario/action"
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tipo_usuario: 1,
      user: "",
      password: "",
      logged: false
    };
    this.setUserType = this.setUserType.bind(this);
    this.setUser = this.setUser.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.checkUserPass = this.checkUserPass.bind(this);
  }

  setUserType(tipo_usuario) {
    this.setState({
      tipo_usuario: tipo_usuario,
    });
  }

  setUser(user) {
    this.setState({ user });
  }

  setPassword(password) {
    this.setState({ password });
  }

  async checkUserPass() {
    if (this.state.user === "" || this.state.password === "") {
      alert("Introduzca un usuario y contraseña");
    } else {
      let response = [];
      switch (this.state.tipo_usuario) {
        case 1:
          response = await postUserPassEstudiante(
            this.state.user,
            this.state.password
          );
          break;

        default:
          response = await postUserPassEstudiante(
            this.state.user,
            this.state.password
          );
          break;
      }
      if (response === undefined) {
        alert("Datos de usuario inválidos");
      } else {
        this.props.setUserPass(this.state.user, this.state.password);
        this.setState({logged: true});
      }
    }
  }

  renderLogin(){
    return (
      <Container className="App">
        <Container>
          <Navbar className="NavBarTop" fixed="top">
            <Navbar.Brand href="#">
              <div>
                <img src={logo} alt="logo" className="logoEdit" />
              </div>
            </Navbar.Brand>
          </Navbar>
        </Container>

        <Container>
          <Card className="Card">
            <div className="Logo">
              <Card.Img variant="top" src={logo} />
              <div style={{ margin: "20px" }}>
                <h4>INGRESAR</h4>
              </div>
            </div>
            <Card.Body className="CardBody">
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Usuario</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Usuario TEC"
                    value={this.state.user}
                    onChange={(event) => this.setUser(event.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Contraseña"
                    value={this.state.password}
                    onChange={(event) => this.setPassword(event.target.value)}
                  />
                </Form.Group>
                <div>
                  <Form.Group
                    controlId="formBasicCheckbox"
                    className="checkBoxes"
                  >
                    <Form.Check
                      type="checkbox"
                      label="Estudiante"
                      id="checkbox1"
                      checked={this.state.tipo_usuario === 1}
                      onChange={() => {
                        this.setUserType(1);
                      }}
                    />

                    <Form.Check
                      type="checkbox"
                      label="Profesor"
                      id="checkbox2"
                      checked={this.state.tipo_usuario === 2}
                      onChange={() => {
                        this.setUserType(2);
                      }}
                    />

                    <Form.Check
                      type="checkbox"
                      label="Administrador"
                      id="checkbox3"
                      checked={this.state.tipo_usuario === 3}
                      onChange={() => {
                        this.setUserType(3);
                      }}
                    />
                  </Form.Group>
                </div>
                <div className="d-flex justify-content-center">
                  <Button
                    onClick={this.checkUserPass}
                    type="button"
                    className="loginBtn"
                  >
                    ENTRAR
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Container>

        <Container>
          <Navbar className="NavBarBot" bg="#153c6c" fixed="bottom"></Navbar>
        </Container>
      </Container>
    );
  }

  redirectToProfile(){
    return(
       <Redirect
            to={{
              pathname: "/profile"
            }}
          />
    );
  }

  render() {
    return(
    this.state.logged ? this.redirectToProfile() : this.renderLogin()
    );
    
  }
}

export default connect(null, { setUserPass })(Login);
