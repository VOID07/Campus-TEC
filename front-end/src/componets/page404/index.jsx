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
import {setUserPass} from "../../store/tipo_usuario/action";
// import setUserType from "../../store/tipo_usuario/action"
class Page404 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logged: true
        };
        this.setLogged = this.setLogged.bind(this);
    }

    setLogged(logged) {
        this.setState({ logged });
    }

    renderPage404() {
        return (
            <div>
                <dv>
                    <p>Esta pagina no existe</p>
                </dv>
                <div>
                    <a href="/">Regresar a Login</a>
                </div>
            </div>
        );
    }

    redirectToLogin() {
        return (
            <Redirect to={{ pathname: "/", }}/>
        );
    }

    render() {
        return this.state.logged
            ? this.renderPage404()
            : this.redirectToLogin();
    }
}
const mapStateToProps = (state) => {
    return state.login;
};

export default connect(null, { setUserPass })(Page404);
