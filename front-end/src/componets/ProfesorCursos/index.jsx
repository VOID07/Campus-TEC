import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import DropdownButton from 'react-bootstrap/DropdownButton'
import { setUserPass } from "../../store/tipo_usuario/action";
import "./ProfesorCursos.css";
import logo from "../../img/logo.svg";

// import setUserType from "../../store/tipo_usuario/action"
class ProfesorCursos extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tipo_usuario: 2,
      user: "",
      password: "",
      logged: false
    };

  }


  renderProfesor() {
    return (

      <Container className="App">

        <Button onClick={this.redirectToLogin} type="button" className="buttonCerrarSesion">Cerrar sesión</Button>
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
          <Button onClick={this.redirectToNuevoReto} type="button" 
          className="buttonCrearReto">Crear Nuevo Reto</Button>
          <Card className="CardProfesor">
            <div className="Columna">
              <div style={{ margin: "3px" }}>
                <h5>Retos</h5>
              </div>
            </div>
            <Card.Body className="CardBody">
            </Card.Body>

          </Card>

        </Container>


        <Container>
          <Button onClick={this.redirectToNuevaActividad} type="button" 
          className="buttonCrearActividad">Crear Nueva Actividad</Button>
          <Card className="CardProfesor">
            <div className="Columna">
              <div style={{ margin: "3px" }}>
                <h5>Actividades</h5>
              </div>
            </div>
            <Card.Body className="CardBody">

            </Card.Body>
          </Card>
        </Container>

        <Container>
          <Card className="CardMonto">
            <div className="Columna">
              <div >
                <h5>Monto Restante del curso</h5>
              </div>
            </div>
            <Card.Body className="CardBody">
            <h6>10000 TEC Colones</h6>
            </Card.Body>
          </Card>
          <Card className="CardObjetivo">
            <div className="Columna">
              <div >
                <h5>Objetivos del curso</h5>
              </div>
            </div>
            <Card.Body className="CardBody">
              <Button variant="link" type="button" className="buttonEdit">Editar</Button>
              <p>Desarrollar propuestas de solución para el 
                caso de estudio basado en documentación
                técnica y criterio crítico.
              </p>
              <p>Elaborar soluciones usando totalmente o en su 
                mayoría circuitos y dispositvos analógicos.
              </p>
              <p>Seleccionar la mejor solución según el caso 
                o problema que se tenga bajo estudio.
              </p>
              <p>Integrar uno o varios sensores a sistemas
                de control sencillos, con presentación
                de datos en computador inclusive.
              </p>
              <p>Implementar un sistema analógico de adquisión y
                procesamiento de datos.
              </p>
            </Card.Body>
          </Card>
        </Container>

        <Container>
          <Navbar className="NavBarBot" bg="#153c6c" fixed="bottom"></Navbar>
        </Container>


        <DropdownButton>
          <DropdownButton.Toggle className="buttonCrearReto1"  id="dropdown-basic">
            Dropdown Button
  </DropdownButton.Toggle>

          <DropdownButton.Menu>
            <DropdownButton.Item  href="#/action-1">Action</DropdownButton.Item>
            <DropdownButton.Item  href="#/action-2">Another action</DropdownButton.Item>
            <DropdownButton.Item  href="#/action-3">Something else</DropdownButton.Item>
          </DropdownButton.Menu>
        </DropdownButton>


      </Container>
    );
  }

  redirectToProfesorCursos() {
    return (
      <Redirect
        to={{
          pathname: "/ProfesorCursos"
        }}
      />
    );
  }

  redirectToNuevoReto() {
    return (
      <Redirect
        to={{
          pathname: "/ProfesorNuevoReto"
        }}
      />
    );
  }

  redirectToNuevaActividad() {
    return (
      <Redirect
        to={{
          pathname: "/ProfesorNuevaActividad"
        }}
      />
    );
  }

  redirectToLogin() {
    return (
      <Redirect
        to={{
          pathname: "/"
        }}
      />
    );
  }

  render() {
    return (
      this.state.logged ? this.redirectToProfesorCursos() : this.renderProfesor()
    );

  }
}

export default connect(null, { setUserPass })(ProfesorCursos);