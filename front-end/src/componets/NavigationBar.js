import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';
import logo from "../img/logo.svg";


const Styles = styled.div`
    .navbar{
        background-color: #153c6c;
    }

    .navbar-brand, .navbar-nav .nav-link {
        
        color: white;

        &:hover{
            color:white;
        }
    }
    
`;


export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg">
                <Navbar.Brand><img src={logo} alt="logo" className="logoEdit" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                                <Nav.Item><Nav.Link href="/profile" >Perfil</Nav.Link></Nav.Item>
                                <Nav.Item><Nav.Link href="/404">Planificador</Nav.Link></Nav.Item>
                                <Nav.Item><Nav.Link href="/404">Vida Estudiantil</Nav.Link></Nav.Item>

                        </Nav>
                        <Nav>
                                <Nav.Item><Nav.Link href="/">Cerrar Sesión</Nav.Link></Nav.Item>
                        </Nav>
                </Navbar.Collapse>
        </Navbar>
    </Styles>
)