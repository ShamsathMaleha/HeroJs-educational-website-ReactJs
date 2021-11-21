import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGraduationCap  } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Header = () => {
  const linkStyle={
    textDecoration:'none',
    color:'white',
    marginRight:'10px'
  }
  const element =<FontAwesomeIcon icon={faGraduationCap}/>
    return (
        <Navbar bg="dark" variant="dark">
    <Container className="p-4">
    <Navbar.Brand className="fs-1" href="/">{element} Hero Js</Navbar.Brand>
    <Nav className="ms-auto fs-4">
      <Link style={linkStyle} to="/">Home</Link>
      <Link style={linkStyle}to="/courses">Courses</Link>
      <Link style={linkStyle}to="/about">About us</Link>
      <Link style={linkStyle}to="/contact">Contact</Link>
    </Nav>
    </Container>
  </Navbar>
    );
};

export default Header;