import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'
import logo from '../../images/logo1.png'
import useAuth from '../../Hooks/useAuth';


const Header = () => {
    const { user, handleSignOut } = useAuth();
    const activeStyle = {
        color: "black",
        textDecoration: "none"
    }
    return (
        <header className="header">
            <Navbar expand="lg">
                <Container>
                    <NavLink className="navbar-brand fw-bold text-light fs-3" to="/home">  <img src={logo} className="img-fluid pe-lg-5 mt-2 mt-lg-0" alt="" /></NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink activeStyle={activeStyle} className="nav-link fs-5 fw-bold text-light link" to="/home">Home</NavLink>
                            <NavLink activeStyle={activeStyle} className="nav-link fs-5 fw-bold text-light link" to="/classes">Classes</NavLink>
                            <NavLink activeStyle={activeStyle} className="nav-link fs-5 fw-bold text-light link" to="/appointment">Appoinment</NavLink>
                            <NavLink activeStyle={activeStyle} className="nav-link fs-5 fw-bold text-light link" to="/blog">Blog</NavLink>
                            <NavLink activeStyle={activeStyle} className="nav-link fs-5 fw-bold text-light link" to="/aboutus">About Us</NavLink>

                            {
                                user.email ? <div>
                                    <h4 className="d-inline nav-link fs-5 fw-bold text-light">{user.displayName}</h4>
                                    <button onClick={handleSignOut}><NavLink activeStyle={activeStyle} className="nav-link fs-5 fw-bold" to="/login">Logout</NavLink></button>
                                </div> : <NavLink activeStyle={activeStyle} className="nav-link fs-5 fw-bold text-light link" to="/login">Log In</NavLink>
                            }



                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;