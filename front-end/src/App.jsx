import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Navbar from "react-bootstrap/Navbar";
import logo from "./img/logo.svg";

import "./App.css";

function App() {
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
            <div style={{margin:"20px"}}>
              <h4>INGRESAR</h4>
            </div>
          </div>
          <Card.Body className="CardBody">
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Usuario</Form.Label>
                <Form.Control type="email" placeholder="Usuario TEC" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Contraseña" />
              </Form.Group>
              <div>
                <Form.Group
                  controlId="formBasicCheckbox"
                  className="checkBoxes"
                >
                  <Form.Check type="checkbox" label="Estudiante" />

                  <Form.Check type="checkbox" label="Profesor" />

                  <Form.Check type="checkbox" label="Administrador" />
                </Form.Group>
              </div>
              <div class="d-flex justify-content-center">
                <Button
                  onClickvariant="secondary"
                  type="submit"
                  className="loginBtn"
                >
                  Entrar
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

export default App;
