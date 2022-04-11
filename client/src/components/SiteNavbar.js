import React from 'react'

import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link } from 'react-router-dom'

const SiteNavbar = () => {

  return (
    <Navbar className='fixed-top-nav' bg="dark" variant="dark" fixed="top">
    <Container>
    <Navbar.Brand href="#welcome">Peter Bid</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#aboutme">About Me</Nav.Link>
      <Nav.Link href="#skills">Skills</Nav.Link>
      <Nav.Link href="#projects">Projects</Nav.Link>
      <Nav.Link href="#interests">Interests</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  
  )
}

export default SiteNavbar