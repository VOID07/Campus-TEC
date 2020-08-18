import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { setProfileEstudiante } from "./../../store/perfil/action";
import "./perfil-estudiante.css";
import liam from "../../img/liam.jpg";
import { NavigationBar } from "../NavigationBar";
import { infoPerfilEstudiante } from "./../../queries/axios";
// import setUserType from "../../store/tipo_usuario/action"
class PerfilEstudiante extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tipo_usuario: props.tipo_usuario,
      user: props.user,
      password: props.password,
      logged: true,
      estudiante: {},
      cursos: [],
    };
    this.setLogged = this.setLogged.bind(this);
  }

  setLogged(logged) {
    this.setState({ logged });
  }

  async fetchProfile() {}

  async componentDidMount() {
    let response = await infoPerfilEstudiante(
      this.state.user,
      this.state.password
    );

    if (response === undefined) {
      console.log("Error fetching");
    } else {
      this.props.setProfileEstudiante({ estudiante: response.estudiante[0] });
      this.setState({ estudiante: response.estudiante[0], lodadedProps: true });
    }
  }
  renderPerfilEstudiante() {
    return (
      <Container fluid>
        <NavigationBar />

        <Container>
          <Row>
            <Col md={{ span: 2 }}>
              <div>
                <Image src={this.state.estudiante.foto} thumbnail />
              </div>
              <div>
                <Button variant="link">Cambiar Foto</Button>{" "}
              </div>
            </Col>
            <Col md={{ span: 4 }}>
              <div className="sectionTitle">Información Personal</div>
              <div>
                <Container>
                  <Form>
                    <Form.Group as={Row} controlId="formPlaintextEmail">
                      <Form.Label column sm="4">
                        Nombre
                      </Form.Label>
                      <Col sm="8">
                        <Form.Control
                          plaintext
                          readOnly
                          defaultValue={this.state.estudiante.nombre_estudiante}
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextEmail">
                      <Form.Label column sm="4">
                        Apellido
                      </Form.Label>
                      <Col sm="8">
                        <Form.Control
                          plaintext
                          readOnly
                          defaultValue={
                            this.state.estudiante.apellido_estudiante
                          }
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextEmail">
                      <Form.Label column sm="4">
                        Carné
                      </Form.Label>
                      <Col sm="8">
                        <Form.Control
                          plaintext
                          readOnly
                          defaultValue={this.state.estudiante.carne}
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextEmail">
                      <Form.Label column sm="4">
                        Universidad
                      </Form.Label>
                      <Col sm="8">
                        <Form.Control
                          plaintext
                          readOnly
                          defaultValue={
                            this.state.estudiante.nombre_Universidad
                          }
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextEmail">
                      <Form.Label column sm="4">
                        Sede
                      </Form.Label>
                      <Col sm="8">
                        <Form.Control
                          plaintext
                          readOnly
                          defaultValue={this.state.estudiante.nombre_Sede}
                        />
                      </Col>
                    </Form.Group>
                  </Form>
                </Container>
              </div>
            </Col>
            <Col md={{ span: 6 }}>
              <div className="sectionTitle">Cursos Matriculados</div>
              <div>
                <Container striped bordered hover size="sm">
                  <Row>
                    <Col>Curso</Col>
                    <Col>Código</Col>
                    <Col>Grupo</Col>
                  </Row>
                  {this.state.lodadedProps ? this.state.estudiante.matriculas.map(matricula =>(
                    <Row>
                      <Col>{matricula.curso.nombreCurso}</Col>
                      <Col>{matricula.curso.codigoCurso}</Col>
                      <Col>{matricula.curso.cursoId}</Col>
                    </Row>
                  )): <Row></Row>}
                </Container>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 6 }}>
              <div>
                <Container>
                  <Row>
                    <Col className="sectionTitle">Información de Contacto</Col>
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
                        <Form.Control
                          plaintext
                          readOnly
                          defaultValue={this.state.estudiante.email_1}
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextEmail">
                      <Form.Label column sm="4">
                        Email 2:
                      </Form.Label>
                      <Col sm="8">
                        <Form.Control
                          plaintext
                          readOnly
                          defaultValue={this.state.estudiante.email_2}
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextEmail">
                      <Form.Label column sm="4">
                        Teléfono
                      </Form.Label>
                      <Col sm="8">
                        <Form.Control
                          plaintext
                          readOnly
                          defaultValue={this.state.estudiante.telefono}
                        />
                      </Col>
                    </Form.Group>
                  </Form>
                </Container>
              </div>
            </Col>
            <Col md={{ span: 6 }}>
              <div className="sectionTitle">TEC-Colones</div>
              <div>
                <Form>
                  <Form.Group as={Row} controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                      $TEC
                    </Form.Label>
                    <Col sm="10">
                      <Form.Control plaintext readOnly defaultValue={this.state.estudiante.cantidad_TEColones} />
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

  redirectToLogin() {
    return (
      <Redirect
        to={{
          pathname: "/",
        }}
      />
    );
  }

  render() {
    return this.state.logged
      ? this.renderPerfilEstudiante()
      : this.redirectToLogin();
  }
}
const mapStateToProps = (state) => {
  return state.login;
};

export default connect(mapStateToProps, { setProfileEstudiante })(
  PerfilEstudiante
);
