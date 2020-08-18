import React from "react";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { setUserPass } from "./../../store/tipo_usuario/action";
import "./perfil-estudiante.css";
import logo from "../../img/logo.svg";
import liam from "../../img/liam.jpg";
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
            <Row>
              <Col md={{ span: 2}}>
                <div><Image src={liam} thumbnail /></div>
                <div><Button variant="link">Cambiar Foto</Button>{' '}</div>
              </Col>
              <Col md={{ span: 4}}>
                <div>Información Personal</div>
                <div>
                  <Container>
                    <Form>
                      <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="4">
                          Nombre
                        </Form.Label>
                        <Col sm="8">
                          <Form.Control plaintext readOnly defaultValue="Liam" />
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="4">
                          Apellido
                        </Form.Label>
                        <Col sm="8">
                          <Form.Control plaintext readOnly defaultValue="Hemsworth" />
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="4">
                          Carné
                        </Form.Label>
                        <Col sm="8">
                          <Form.Control plaintext readOnly defaultValue="2016193299" />
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="4">
                          Universidad
                        </Form.Label>
                        <Col sm="8">
                          <Form.Control plaintext readOnly defaultValue="X-TEC" />
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="4">
                          Sede
                        </Form.Label>
                        <Col sm="8">
                          <Form.Control plaintext readOnly defaultValue="Cartago" />
                        </Col>
                      </Form.Group>
                    </Form>
                  </Container>
                </div>
              </Col>
              <Col md={{ span: 6}}>
                <div>Cursos Matriculados</div>
                <div>
                  <Table striped bordered hover size="sm">
                  <thead>
                  <tr>
                    <th>Curso</th>
                    <th>Código</th>
                    <th>Grupo</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>Taller de Digital</td>
                    <td>293-CE</td>
                    <td>03</td>
                  </tr>
                  <tr>
                    <td>Arquitectura de Computadores 1</td>
                    <td>394-CE</td>
                    <td>01</td>
                  </tr>
                  <tr>
                    <td>Probabilidad y Estadística</td>
                    <td>404-EL</td>
                    <td>01</td>
                  </tr>
                  <tr>
                    <td>Física 04</td>
                    <td>302-FI</td>
                    <td>05</td>
                  </tr>
                  <tr>
                    <td>Especificación y Diseño de Software</td>
                    <td>494-CE</td>
                    <td>02</td>
                  </tr>
                  </tbody>
                </Table>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={{ span: 6}}>
                <div>
                  <Container>
                    <Row>
                      <Col>
                        Información de Contacto
                      </Col>
                      <Col>
                        <Form>
                          <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Editar" />
                          </Form.Group>
                        </Form>
                      </Col>
                    </Row>
                  </Container>
                </div>
                <div>
                  <Container>
                    <Form>
                      <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="4">
                          Email 1:
                        </Form.Label>
                        <Col sm="8">
                          <Form.Control plaintext readOnly defaultValue="lhemsworth@gmail.com" />
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="4">
                          Email 2:
                        </Form.Label>
                        <Col sm="8">
                          <Form.Control plaintext readOnly defaultValue="lhemsworth@xtec.com" />
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row} controlId="formPlaintextEmail">
                        <Form.Label column sm="4">
                          Teléfono
                        </Form.Label>
                        <Col sm="8">
                          <Form.Control plaintext readOnly defaultValue="+506 79126670" />
                        </Col>
                      </Form.Group>
                    </Form>
                  </Container>
                </div>
              </Col>
              <Col md={{ span: 6}}>
                <div>
                  TEC-Colones
                </div>
                <div>
                  <Form>
                    <Form.Group as={Row} controlId="formPlaintextEmail">
                      <Form.Label column sm="2">
                        $TEC
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control plaintext readOnly defaultValue="10000" />
                      </Col>
                    </Form.Group>
                  </Form>
                </div>
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
