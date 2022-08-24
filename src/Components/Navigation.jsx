import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from "react-router-dom";
import {NavbarBrand} from "react-bootstrap";
import logo from "../img/logo.png";

const Navigation = () => {
    return (
        <Navbar bg="white" expand="lg">
            <Container className="mx-auto">
                <NavbarBrand/>
                <Navbar.Toggle className="p-right" aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to={'/'}>Main</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={'/individual'}>Personal</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={'/lovestory'}>Love Story</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={'/content'}>Content</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={'/aboutme'}>About Me</NavLink>
                            </li>
                        </ul>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;