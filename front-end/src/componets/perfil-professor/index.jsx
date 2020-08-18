import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { setProfileProfesor } from "./../../store/perfil_profesor/action";
import "./perfil-professor.css";
import { ProfessorBar } from "../ProfessorBar";
import { infoPerfilProfesor } from "./../../queries/axios";
// import setUserType from "../../store/tipo_usuario/action"
class PerfilProfesor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tipo_usuario: props.tipo_usuario,
      user: props.user,
      password: props.password,
      logged: true,
      profesor: {},
      cursos: [],
      lodadedProps: false,
    };
    this.setLogged = this.setLogged.bind(this);
  }

  setLogged(logged) {
    this.setState({ logged });
  }

  async fetchProfile() {}

  async componentDidMount() {
    console.log(this.state);
    let response = await infoPerfilProfesor(
      this.state.user,
      this.state.password
    );

    if (response === undefined) {
      console.log("Error fetching");
    } else {
      console.log(response.profesor[0]);
      this.props.setProfileProfesor({ profesor: response.profesor[0] });
      this.setState({ profesor: response.profesor[0], lodadedProps: true });
    }
  }

  renderPerfilProfesor() {
    return (
      <Container fluid>
        <ProfessorBar />

        <Container>
          <Row>
            <Col md={{ span: 2 }}>
              <div>
                <Image src={this.state.profesor.foto} thumbnail />
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
                          defaultValue={this.state.profesor.nombreProfesor}
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
                          defaultValue={this.state.profesor.apellidoProfesor}
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
                          defaultValue={this.state.profesor.carne}
                        />
                      </Col>
                    </Form.Group>
                  </Form>
                </Container>
              </div>
            </Col>
            <Col md={{ span: 6 }}>
              <div className="sectionTitle">Cursos</div>
              <div>
                <Container size="sm">
                <Row>
                    <Col>Curso</Col>
                  </Row>
                  {this.state.lodadedProps ? (
                    this.state.profesor.cursos.map((cursos) => (
                      <Row>
                        <Col>{cursos.nombreCurso}</Col>
                      </Row>
                    ))
                  ) : (
                    <Row></Row>
                  )}
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
                          defaultValue={this.state.profesor.email_1}
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
                          defaultValue={this.state.profesor.email_2}
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
                          defaultValue={this.state.profesor.telefono}
                        />
                      </Col>
                    </Form.Group>
                  </Form>
                </Container>
              </div>
            </Col>
            <Col md={{ span: 6 }}></Col>
          </Row>
        </Container>
      </Container>
    );
  }

  redirectToLogin() {
    return <Redirect to={{ pathname: "/" }} />;
  }

  render() {
    return this.state.logged
      ? this.renderPerfilProfesor()
      : this.redirectToLogin();
  }
}
const mapStateToProps = (state) => {
  return state.login;
};

export default connect(mapStateToProps, { setProfileProfesor })(PerfilProfesor);
