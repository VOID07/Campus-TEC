import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

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
    
    
      renderProfesor(){
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
            <Button type="button" className="buttonCrearReto">Crear Nuevo Reto</Button>
              <Card className="CardProfesor">
                <div className="Columna">
                  <div style={{ margin: "3px" }}>
                    <h5>RETOS</h5>
                  </div>
                </div>
                <Card.Body className="CardBody">
                </Card.Body>
            
              </Card>
              
            </Container>


            <Container>
            <Button type="button" className="buttonCrearActividad">Crear Nueva Actividad</Button>
              <Card className="CardProfesor">
                <div className="Columna">
                  <div style={{ margin: "3px" }}>
                    <h5>ACTIVIDADES</h5>
                  </div>
                </div>
                <Card.Body className="CardBody">
                  
                </Card.Body>
              </Card>
            </Container>

            <Container>
              <Card className="CardProfesor">
                <div className="Columna">
                  <div style={{ margin: "2px" }}>
                    <h5>OBJETIVOS DEL CURSO</h5>
                  </div>
                </div>
                <Card.Body className="CardBody">
                </Card.Body>
              </Card>
            </Container>
    
            <Container>
              <Navbar className="NavBarBot" bg="#153c6c" fixed="bottom"></Navbar>
            </Container>


          </Container>
        );
      }
    
      redirectToProfesorCursos(){
        return(
           <Redirect
                to={{
                  pathname: "/ProfesorCursos"
                }}
              />
        );
      }
    
      render() {
        return(
        this.state.logged ? this.redirectToProfesorCursos() : this.renderProfesor()
        );
        
      }
    }

export default connect(null, { setUserPass })(ProfesorCursos);
