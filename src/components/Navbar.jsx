import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import '../styles/navbar.css';

export default function Navigation(props) {

  return (
    <Navbar className="navbar" expand="lg">
      <Navbar.Brand className="navbar-brand">SpaceWalk</Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link eventKey="1" href="/mercury">Mercury</Nav.Link>
          <Nav.Link eventKey="2" href="/venus">Venus</Nav.Link>
          <Nav.Link eventKey="3" href="/">Earth</Nav.Link>
          <Nav.Link eventKey="4" href="/mars">Mars</Nav.Link>
          <Nav.Link eventKey="5" href="/jupiter">Jupiter</Nav.Link>
          <Nav.Link eventKey="6" href="/saturn">Saturn</Nav.Link>
          <Nav.Link eventKey="7" href="/uranus">Uranus</Nav.Link>
          <Nav.Link eventKey="8" href="/neptune">Neptune</Nav.Link>
          <Nav.Link eventKey="9" href="/pluto">Pluto</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
