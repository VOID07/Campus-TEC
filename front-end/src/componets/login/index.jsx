import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Navbar from "react-bootstrap/Navbar";

import logo from "../../img/logo.svg";
// import setUserType from "../../store/tipo_usuario/action"

const axios = require("axios").default;

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tipo_usuario: 1,
      user: "",
      password: "",
    };
    this.setUser = this.setUser.bind(this);
    this.setPassword = this.setPassword.bind(this);
  }

  setUserType(tipo_usuario) {
    this.setState({
      tipo_usuario: tipo_usuario,
    });
  }

  setUser(event) {
    console.log(event.target.value);
    this.setState({ user: event.target.value });
  }

  setPassword(event) {
    console.log(event.target.value);
    this.setState({ password: event.target.value });
  }

  checkUserPass() {
    axios
      .get("/user?ID=12345")
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }

  render() {
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
                    type="email"
                    placeholder="Usuario TEC"
                    value={this.state.user}
                    onChange={this.setUser}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Contraseña"
                    value={this.state.password}
                    onChange={this.setPassword}
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
                    onClick={this.checkCredentials}
                    type="submit"
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
}
